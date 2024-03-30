import { FunctionComponent } from "preact";
import { Hero } from "../types.ts";
import Character from "./Character.tsx";

type Data = {
  heros: Hero[];
};

const Characters: FunctionComponent<Data> = (props) => {
  const { heros } = props;
  return (
    <>
      <div class="flex items-center justify-center wrap justify-space-around">
        {heros.map((hero) => (
          <Character key={hero.name} {...hero} enableDelete={true} />
        ))}
      </div>
    </>
  );
};

export default Characters;
