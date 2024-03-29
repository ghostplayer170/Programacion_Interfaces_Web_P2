import { FunctionComponent } from "preact";
import { useState } from "preact/hooks";
import axios from "npm:axios";

const DeleteHero: FunctionComponent = () => {
  // Usar useSignal para el estado del modal
  const [isModalOpen, setModal] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [creator, setCreator] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [deleted, setDeleted] = useState<boolean>(false);

  // Funciones para abrir y cerrar el modal
  const openModal = () => setModal(true);
  const closeModal = () => setModal(false);

  const deleteHero = async (name: string, creator: string) => {
    try {
      const data = {
        creator: creator,
      };
      const response = await fetch(`https://supermondongo.deno.dev/${name}`, {
        method: "DELETE",
        mode: 'no-cors',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.status !== 204) {
        setDeleted(false);
      }
      setDeleted(true);
    } catch (error) {
      setDeleted(false);
    }
  };

  const handleErrors = (name: string, creator: string) => {
    if (!name) {
      setError("Name is required");
    }
    if (!creator) {
      setError("Creator is required");
    }
    if (error === "") {
      deleteHero(name, creator);
    }
  };

  return (
    <>
      <h1>Delete Hero</h1>
      <button onClick={openModal}>Eliminar</button>
      {isModalOpen && (
        <dialog open id="modal" class="modal">
          <h2></h2>
          <p>Name of the hero</p>
          <input
            type="text"
            onInput={(e) => {
              setName(e.currentTarget.value);
              setError("");
            }}
          />
          <p>Creator of the hero</p>
          <input
            type="text"
            onInput={(e) => {
              setCreator(e.currentTarget.value);
              setError("");
            }}
          />
          <div>
            <button
              onClick={() => {
                handleErrors(name, creator);
              }}
            >
              Delete Hero
            </button>
            <button onClick={closeModal}>Cerrar</button>
            {deleted && <p>Hero deleted successfully!</p>}
          </div>
        </dialog>
      )}
    </>
  );
};

export default DeleteHero;
