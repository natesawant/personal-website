"use client";

import CustomHeader from "@/components/CustomHeader";

export default function NotFoundPage() {
  return CustomHeader({
    subheader: "Oops!",
    header: "404",
    subtitle: "Page not found.",
  });
}
