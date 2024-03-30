import { FunctionComponent } from "preact";
import { useState } from "preact/hooks";
import axios from "npm:axios";

type Data = {
  hero: string;
  enable: boolean;
};

const DeleteHero: FunctionComponent<Data> = (props) => {
  const name = props.hero;
  const enable = props.enable;

  const [isModalOpen, setModal] = useState<boolean>(false);
  const [creator, setCreator] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [deleted, setDeleted] = useState<boolean>(false);

  const openModal = () => setModal(true);
  const closeModal = () => setModal(false);

  const deleteHero = async (creator: string) => {
    try {
      const response = await axios.delete(
        `https://supermondongo.deno.dev/${name}`,
        {
          data: {
            creator: creator,
          },
        },
      );
      if (response.status !== 204) {
        setDeleted(false);
      } else {
        setDeleted(true);
      }
    } catch (error) {
      setDeleted(false);
    }
  };

  const handleErrors = (creator: string) => {
    setError("");
    if (!creator) {
      setError("Creator is required");
      return;
    }
    deleteHero(creator);
  };

  return (
    <>
      {enable && <button onClick={openModal}>Delete</button>}
      {isModalOpen && (
        <dialog open id="modal" class="modal">
          <p>Hero to delete is {name}</p>
          <p>Creator of the hero</p>
          <input
            type="text"
            onBlur={(e) => {
              setCreator(e.currentTarget.value);
              setError("");
            }}
          />
          <div>
            <button
              onClick={() => {
                handleErrors(creator);
              }}
            >
              Delete Hero
            </button>
            <button onClick={closeModal}>Close</button>
            {deleted && <p>Hero deleted successfully!</p>}
          </div>
        </dialog>
      )}
    </>
  );
};

export default DeleteHero;
