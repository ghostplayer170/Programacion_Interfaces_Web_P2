import { FunctionComponent } from "preact";
import { Hero } from "../types.ts";


const Character: FunctionComponent<Hero> = (props) => {
  const { name, image, sound } = props;
  return (
    <>
      <div>
        <img src={image} alt={name} class="hero-image"/>
        <p>{name}</p>
        <audio controls key={sound}>
          <source src={sound} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </>
  );
};

export default Character;
