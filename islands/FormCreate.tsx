import { FunctionComponent } from "preact";
import Character from "../components/Character.tsx";
import { useState } from "preact/hooks";

export const FormCreate: FunctionComponent = () => {
  const [name, setName] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [sound, setSound] = useState<string>("");
  const [creator, setCreator] = useState<string>("");
  const [created, setCreated] = useState<boolean>(false);

  return (
    <>
      <h1>Create Hero</h1>
      <form action="/create" method="post">
        <label for="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          onInput={(e) => setName(e.currentTarget.value)}
        />
        <label for="image">Image:</label>
        <input
          type="url"
          id="image"
          name="image"
          required
          onBlur={(e) => setImage(e.currentTarget.value)}
        />
        <label for="sound">Sound:</label>
        <input
          type="url"
          id="sound"
          name="sound"
          required
          onBlur={(e) => setSound(e.currentTarget.value)}
        />
        <label for="creator">Creator:</label>
        <input
          type="text"
          id="creator"
          required
          onInput={(e) => setCreator(e.currentTarget.value)}
        />
        <button type="submit">Create</button>
      </form>
      <div>
        <h2>Preview</h2>
        <Character name={name} image={image} sound={sound} />
        {created && <p>Hero created successfully!</p>}
      </div>
    </>
  );
};

export default FormCreate;
