import type { Metadata } from "next";
import SignInView from "@/components/SignInView";

export const metadata: Metadata = {
  title: "Nexkal Admin — Sign in",
  description: "Restricted to the Nexkal team. Super admin dashboard login.",
};

export default function Home() {
  return <SignInView />;
}
