import { FunctionComponent } from "preact";
import Character from "../components/Character.tsx";
import { useEffect, useState } from "preact/hooks";

type Data = {
  created: boolean;
};

export const FormCreate: FunctionComponent<Data> = ({ created }) => {
  const [name, setName] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [sound, setSound] = useState<string>("");
  const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false);

  useEffect(() => {
    if (created) {
      setShowSuccessMessage(true);
    }
  }, [created]);

  const handleCloseSuccessMessage = () => {
    setShowSuccessMessage(false);
  };

  return (
    <>
      <div class="create-hero-container">
        <h1>Create Hero</h1>
        <div class="container-form-and-preview">
          <form method="POST" class="form-create" action="/create">
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
              name="creator"
            />
            <button type="submit">
              Create Hero
            </button>
          </form>
          <div class="preview-section">
            <h2>Preview</h2>
            <Character
              name={name}
              image={image}
              sound={sound}
              enableDelete={false}
              currentPath="/create"
            />
          </div>
          {showSuccessMessage && (
            <dialog open id="modal-create" class="modal">
              <p>Hero {name} created successfully!</p>
              <button onClick={handleCloseSuccessMessage}>Close</button>
            </dialog>
          )}
        </div>
      </div>
    </>
  );
};

export default FormCreate;
