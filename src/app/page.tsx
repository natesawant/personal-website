"use client";

import CustomHeader from "@/components/CustomHeader";
import CustomParagraph from "@/components/CustomParagraph";

export default function Home() {
  return (
    <div>
      <CustomHeader
        subheader="My name is"
        header="Nate Sawant"
        subtitle="A software engineer based on Boston"
      />
      <div className=" py-4" />
      <CustomParagraph
        paragraph="I'm currently a computer science undergrad at Northeastern University in
        Boston, MA."
      />
    </div>
  );
}
