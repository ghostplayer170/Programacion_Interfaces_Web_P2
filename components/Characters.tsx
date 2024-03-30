import { FunctionComponent } from "preact";
import { Hero } from "../types.ts";
import Character from "./Character.tsx";

type Data = {
  heros: Hero[];
  currentPath : string;
};

const Characters: FunctionComponent<Data> = (props) => {
  const { heros, currentPath } = props;
  return (
    <>
      <div class="flex items-center justify-center wrap justify-space-around">
        {heros.map((hero) => (
          <Character key={hero.name} {...hero} enableDelete={true} currentPath={currentPath}/>
        ))}
      </div>
    </>
  );
};

export default Characters;
