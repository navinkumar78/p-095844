import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery, useMutation } from "@tanstack/react-query";
import { format } from "date-fns";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { ArrowLeft, Upload } from "lucide-react";

type ItemStatus = "lost" | "found";
type LocationType = "address" | "transport" | "airport" | "town_hall_police";

interface Category {
  id: number;
  name: string;
  icon: string;
}

export default function Report() {
  const navigate = useNavigate();
  const [status, setStatus] = useState<ItemStatus>("lost");
  const [category, setCategory] = useState<number | null>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [locationType, setLocationType] = useState<LocationType>("address");
  const [locationDetails, setLocationDetails] = useState("");
  const [date, setDate] = useState<Date>(new Date());
  const [images, setImages] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);

  // Fetch categories
  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("item_categories")
        .select("*")
        .order("name");
      if (error) throw error;
      return data as Category[];
    },
  });

  // Handle image selection
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setImages((prev) => [...prev, ...files]);

    // Create previews
    files.forEach((file) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviews((prev) => [...prev, reader.result as string]);
      };
      reader.readAsDataURL(file);
    });
  };

  // Remove image
  const removeImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
    setPreviews((prev) => prev.filter((_, i) => i !== index));
  };

  // Handle quick date selections
  const handleQuickDate = (days: number) => {
    const date = new Date();
    date.setDate(date.getDate() - days);
    setDate(date);
  };

  // Submit mutation
  const submitMutation = useMutation({
    mutationFn: async () => {
      // Upload images
      const imageUrls = await Promise.all(
        images.map(async (file) => {
          const fileExt = file.name.split(".").pop();
          const filePath = `${crypto.randomUUID()}.${fileExt}`;
          const { error: uploadError } = await supabase.storage
            .from("item-images")
            .upload(filePath, file);
          if (uploadError) throw uploadError;
          return filePath;
        })
      );

      // Submit report
      const { error } = await supabase.from("reported_items").insert({
        status,
        category_id: category,
        title,
        description,
        location_type: locationType,
        location_details: locationDetails,
        date_time: date.toISOString(),
        images: imageUrls,
      });

      if (error) throw error;
    },
    onSuccess: () => {
      toast.success("Report submitted successfully!");
      navigate("/");
    },
    onError: (error) => {
      toast.error("Failed to submit report: " + error.message);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!category) {
      toast.error("Please select a category");
      return;
    }
    submitMutation.mutate();
  };

  // Check authentication
  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        toast.error("Please sign in to report an item");
        navigate("/auth");
      }
    };
    checkAuth();
  }, [navigate]);

  return (
    <div className="container max-w-4xl py-8 space-y-8 animate-fade-in">
      <Button
        variant="ghost"
        onClick={() => navigate("/")}
        className="flex items-center gap-2"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Home
      </Button>

      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Report an Item</h1>
        <p className="text-muted-foreground">
          Please provide details about the item you lost or found.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Status Toggle */}
        <div className="flex gap-4">
          <Button
            type="button"
            variant={status === "lost" ? "default" : "outline"}
            onClick={() => setStatus("lost")}
          >
            Lost Item
          </Button>
          <Button
            type="button"
            variant={status === "found" ? "default" : "outline"}
            onClick={() => setStatus("found")}
          >
            Found Item
          </Button>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {categories?.map((cat) => (
            <Card
              key={cat.id}
              className={`cursor-pointer transition-all hover:scale-105 ${
                category === cat.id ? "ring-2 ring-primary" : ""
              }`}
              onClick={() => setCategory(cat.id)}
            >
              <CardContent className="p-4 text-center">
                <div className="text-4xl mb-2">{cat.icon}</div>
                <div className="text-sm font-medium">{cat.name}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Basic Info */}
        <div className="space-y-4">
          <Input
            placeholder="Item Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <Textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        {/* Location */}
        <div className="space-y-4">
          <Select
            value={locationType}
            onValueChange={(value) => setLocationType(value as LocationType)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select location type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="address">Address</SelectItem>
              <SelectItem value="transport">Transport</SelectItem>
              <SelectItem value="airport">Airport</SelectItem>
              <SelectItem value="town_hall_police">Town Hall/Police</SelectItem>
            </SelectContent>
          </Select>
          <Input
            placeholder="Location Details"
            value={locationDetails}
            onChange={(e) => setLocationDetails(e.target.value)}
            required
          />
        </div>

        {/* Date Selection */}
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            <Button type="button" variant="outline" onClick={() => handleQuickDate(0)}>
              Today
            </Button>
            <Button type="button" variant="outline" onClick={() => handleQuickDate(1)}>
              Yesterday
            </Button>
            <Button type="button" variant="outline" onClick={() => handleQuickDate(2)}>
              Day before yesterday
            </Button>
          </div>
          <Calendar
            mode="single"
            selected={date}
            onSelect={(date) => date && setDate(date)}
            className="rounded-md border"
          />
        </div>

        {/* Image Upload */}
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <label
              htmlFor="image-upload"
              className="flex items-center gap-2 cursor-pointer px-4 py-2 border rounded-md hover:bg-gray-50"
            >
              <Upload className="w-4 h-4" />
              Upload Images
            </label>
            <input
              id="image-upload"
              type="file"
              accept="image/*"
              multiple
              className="hidden"
              onChange={handleImageChange}
            />
          </div>

          {/* Image Previews */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {previews.map((preview, index) => (
              <div key={index} className="relative">
                <img
                  src={preview}
                  alt="Preview"
                  className="w-full h-32 object-cover rounded-md"
                />
                <button
                  type="button"
                  className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600"
                  onClick={() => removeImage(index)}
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          className="w-full"
          disabled={submitMutation.isPending}
        >
          {submitMutation.isPending ? "Submitting..." : "Submit Report"}
        </Button>
      </form>
    </div>
  );
}
