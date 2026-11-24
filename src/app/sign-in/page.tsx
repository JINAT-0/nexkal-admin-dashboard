import type { Metadata } from "next";
import SignInView from "@/components/SignInView";

export const metadata: Metadata = {
  title: "Sign in to admin — Nexkal",
  description: "Restricted to the Nexkal team. Super admin dashboard login.",
};

export default function SignInSlugPage() {
  return <SignInView />;
}
