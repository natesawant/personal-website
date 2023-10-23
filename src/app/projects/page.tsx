import CustomHeader from "@/components/CustomHeader";
import Showcase from "@/components/Showcase";

export default function Projects() {
  return (
    <div>
      <CustomHeader header="Projects" subtitle="Some of the my past work" />
      <Showcase
        link="/project-1"
        title={"Project 1"}
        date={"August 2023"}
        imageSource={"placeholder-1.png"}
        imageDesc={"Image description"}
        paragraph={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus mauris ultrices eros in. At auctor urna nunc id cursus metus aliquam. Purus in massa tempor nec. Adipiscing at in tellus integer feugiat. Faucibus vitae aliquet nec ullamcorper. Integer feugiat scelerisque varius morbi. Et sollicitudin ac orci phasellus egestas tellus rutrum tellus. Tellus mauris a diam maecenas sed. Morbi enim nunc faucibus a. In eu mi bibendum neque egestas. Egestas sed tempus urna et pharetra pharetra massa."
        }
      />
      <Showcase
        link="/project-2"
        title={"Project 2"}
        date={"September 2023"}
        imageSource={"placeholder-1.png"}
        imageDesc={"Image description"}
        paragraph={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus mauris ultrices eros in. At auctor urna nunc id cursus metus aliquam. Purus in massa tempor nec. Adipiscing at in tellus integer feugiat. Faucibus vitae aliquet nec ullamcorper. Integer feugiat scelerisque varius morbi. Et sollicitudin ac orci phasellus egestas tellus rutrum tellus. Tellus mauris a diam maecenas sed. Morbi enim nunc faucibus a. In eu mi bibendum neque egestas. Egestas sed tempus urna et pharetra pharetra massa."
        }
      />
      <Showcase
        link="/project-3"
        title={"Project 3"}
        date={"October 2023"}
        imageSource={"placeholder-1.png"}
        imageDesc={"Image description"}
        paragraph={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus mauris ultrices eros in. At auctor urna nunc id cursus metus aliquam. Purus in massa tempor nec. Adipiscing at in tellus integer feugiat. Faucibus vitae aliquet nec ullamcorper. Integer feugiat scelerisque varius morbi. Et sollicitudin ac orci phasellus egestas tellus rutrum tellus. Tellus mauris a diam maecenas sed. Morbi enim nunc faucibus a. In eu mi bibendum neque egestas. Egestas sed tempus urna et pharetra pharetra massa."
        }
      />
    </div>
  );
}
