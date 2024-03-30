import { FunctionComponent } from "preact";
import Character from "../components/Character.tsx";
import { useState } from "preact/hooks";
import axios from "npm:axios";

export const FormCreate: FunctionComponent = () => {
  const [name, setName] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [sound, setSound] = useState<string>("");
  const [creator, setCreator] = useState<string>("");
  const [created, setCreated] = useState<boolean>(false);

  const fetchCreate = async (
    name: string,
    image: string,
    sound: string,
    creator: string,
  ) => {
    try {
      const data = {
        name: name,
        image: image,
        sound: sound,
        creator: creator,
      };
      const response = await axios.post(
        "https://supermondongo.deno.dev/",
        data,
      );
      if (response.status !== 200) {
        return new Response("Error creating hero", { status: response.status });
      }
      setCreated(true);
    } catch (error) {
      throw new Response(error.message, { status: 500 });
    }
  };

  return (
    <>
      <h1>Create Hero</h1>
      <div class="container-form-and-preview">
        <div class="form-create">
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
          <button
            type="submit"
            onClick={() => fetchCreate(name, image, sound, creator)}
          >
            Create Hero
          </button>
        </div>
        <div class="preview-section">
          <h2>Preview</h2>
          <Character
            name={name}
            image={image}
            sound={sound}
            enableDelete={false}
          />
        </div>
      </div>
      {created && (
        <p class="success-message">Hero {name} created successfully!</p>
      )}
    </>
  );
};

export default FormCreate;
