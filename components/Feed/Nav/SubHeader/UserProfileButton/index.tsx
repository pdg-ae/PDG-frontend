import Link from "next/link";
import { createClient } from "@/utils/supabase/server";
import UserProfilePopover from "../UserProfilePopover";

export default async function UserProfileButton() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user ? (
    <UserProfilePopover user={user} />
  ) : (
    <Link
      href="/login"
      className="py-2 px-3 flex rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
    >
      Login
    </Link>
  );
}