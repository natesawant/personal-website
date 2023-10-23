import SequentialLoad from "@/components/SequentialLoad";
import {
  Header1,
  Header2,
  Header3,
  Header4,
  Header5,
  Header6,
} from "@/components/StyledComponents";

export default function Styling() {
  return (
    <div>
      <SequentialLoad>
        <Header1>This is Header 1</Header1>
        <Header2>This is Header 2</Header2>
        <Header3>This is Header 3</Header3>
        <Header4>This is Header 4</Header4>
        <Header5>This is Header 5</Header5>
        <Header6>This is Header 6</Header6>

        <p className=" text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus
          mauris ultrices eros in. At auctor urna nunc id cursus metus aliquam.
          Purus in massa tempor nec. Adipiscing at in tellus integer feugiat.
          Faucibus vitae aliquet nec ullamcorper. Integer feugiat scelerisque
          varius morbi. Et sollicitudin ac orci phasellus egestas tellus rutrum
          tellus. Tellus mauris a diam maecenas sed. Morbi enim nunc faucibus a.
          In eu mi bibendum neque egestas. Egestas sed tempus urna et pharetra
          pharetra massa.
        </p>
      </SequentialLoad>
    </div>
  );
}
