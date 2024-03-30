import { FunctionComponent } from "preact";
import DeleteHero from "../islands/DeleteHero.tsx";

type Data = {
  name: string;
  image: string;
  sound: string;
  enableDelete: boolean;
};

const Character: FunctionComponent<Data> = (props) => {
  const { name, image, sound, enableDelete } = props;
  return (
    <>
      <div class="hero-container">
        <img src={image} alt={name} class="hero-image" />
        <p>{name}</p>
        <audio controls key={sound}>
          <source src={sound} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <DeleteHero hero={name} enable={enableDelete} />
      </div>
    </>
  );
};

export default Character;
