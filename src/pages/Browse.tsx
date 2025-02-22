
import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import { MapPin, Calendar, Image as ImageIcon } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Database } from "@/integrations/supabase/types";

type ReportedItem = Database["public"]["Tables"]["reported_items"]["Row"] & {
  item_categories: {
    name: string;
    icon: string;
  };
};

export default function Browse() {
  const { data: items, isLoading } = useQuery({
    queryKey: ["reported-items"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("reported_items")
        .select(`
          *,
          item_categories (
            name,
            icon
          )
        `)
        .order("created_at", { ascending: false });

      if (error) throw error;
      return data as ReportedItem[];
    },
  });

  if (isLoading) {
    return (
      <div className="container py-8 animate-fade-in">
        <h1 className="text-4xl font-bold mb-8">Browse Items</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Card key={i} className="animate-pulse">
              <CardHeader className="h-40 bg-gray-200" />
              <CardContent className="space-y-2">
                <div className="h-4 bg-gray-200 rounded w-3/4" />
                <div className="h-4 bg-gray-200 rounded w-1/2" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="container py-8 animate-fade-in">
      <h1 className="text-4xl font-bold mb-8">Browse Items</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items?.map((item) => (
          <Card key={item.id} className="overflow-hidden">
            {item.images && item.images.length > 0 ? (
              <div className="aspect-video relative">
                <img
                  src={`https://lwmbwypjqspqwxzmaxxr.supabase.co/storage/v1/object/public/item-images/${item.images[0]}`}
                  alt={item.title}
                  className="object-cover w-full h-full"
                />
              </div>
            ) : (
              <div className="aspect-video bg-gray-100 flex items-center justify-center">
                <ImageIcon className="w-12 h-12 text-gray-400" />
              </div>
            )}
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                  <CardDescription className="flex items-center gap-1 mt-1">
                    <span className="text-2xl">{item.item_categories.icon}</span>
                    {item.item_categories.name}
                  </CardDescription>
                </div>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    item.status === "lost"
                      ? "bg-red-100 text-red-800"
                      : "bg-green-100 text-green-800"
                  }`}
                >
                  {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                </span>
              </div>
            </CardHeader>
            <CardContent className="space-y-2">
              {item.description && (
                <p className="text-sm text-gray-600 line-clamp-2">
                  {item.description}
                </p>
              )}
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <MapPin className="w-4 h-4" />
                <span>{item.location_details}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Calendar className="w-4 h-4" />
                <span>{format(new Date(item.date_time), "PPP")}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
