
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { UserRound } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface Profile {
  id: string;
  email: string;
  avatar_url: string | null;
}

export const Navbar = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      if (session?.user) {
        fetchProfile(session.user.id);
      }
    });

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      if (session?.user) {
        fetchProfile(session.user.id);
      } else {
        setProfile(null);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const fetchProfile = async (userId: string) => {
    const { data, error } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", userId)
      .single();

    if (error) {
      console.error("Error fetching profile:", error);
      return;
    }

    setProfile(data);
  };

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast.error("Error signing out");
    } else {
      toast.success("Signed out successfully");
      navigate("/");
    }
  };

  return (
    <nav className="bg-white min-h-[72px] w-full flex flex-col items-stretch justify-center px-16 max-md:max-w-full max-md:px-5">
      <div className="flex w-full items-center gap-[40px_100px] justify-between flex-wrap max-md:max-w-full">
        <Link
          to="/"
          className="self-stretch flex min-h-10 items-center justify-center w-20 my-auto"
        >
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/711ae44ced8b4566bcc6beb6db0d1200/a4b34462959a4839f04d33b5717af5ac0b562c45d8519be605d0661b9a9464a7?placeholderIfAbsent=true"
            className="aspect-[2.33] object-contain w-[84px] self-stretch my-auto"
            alt="Logo"
          />
        </Link>
        <div className="self-stretch flex items-center gap-8 text-base font-normal justify-center my-auto">
          <div className="self-stretch flex items-center gap-8 text-black my-auto">
            <Link
              to="/contact"
              className="self-stretch gap-1 my-auto hover:text-gray-600 transition-colors"
            >
              Contact Us
            </Link>
          </div>
          <div className="self-stretch flex items-center gap-4 justify-center my-auto">
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="relative h-10 w-10 rounded-full"
                  >
                    <Avatar className="h-10 w-10">
                      <AvatarFallback className="bg-primary/10">
                        <UserRound className="h-5 w-5" />
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end">
                  <DropdownMenuLabel>
                    {profile?.email || user.email}
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleSignOut}>
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                to="/auth"
                className="self-stretch bg-black border gap-2 my-auto px-5 py-2 border-black border-solid hover:bg-gray-800 transition-colors text-white"
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
