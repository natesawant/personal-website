import Image from "next/image";
import Link from "next/link";
import CustomParagraph from "./CustomParagraph";

export default function Showcase(props: {
  link: string;
  title: string;
  date: string;
  imageSource: string;
  imageDesc: string;
  paragraph: string;
}) {
  return (
    <div className=" py-8">
      <Link href={`projects/${props.link}`}>
        <h1 className=" text-2xl">{props.title}</h1>
        <h2 className=" text-secondary-400">{props.date}</h2>
        <Image
          className=" py-4"
          src={`/images/${props.imageSource}`}
          alt={props.imageDesc}
          width={10}
          height={10}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      </Link>
      <CustomParagraph paragraph={props.paragraph} />
    </div>
  );
}
