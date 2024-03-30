import { FunctionComponent } from "preact";
import { useState } from "preact/hooks";
import axios from "npm:axios";

type Data = {
  hero: string;
  enable: boolean;
  currentPath: string;
};

const DeleteHero: FunctionComponent<Data> = (props) => {
  const name = props.hero;
  const enable = props.enable;
  const currentPath = props.currentPath;

  const [isModalOpen, setModal] = useState<boolean>(false);
  const [deleted, setDeleted] = useState<boolean>(false);

  const openModal = () => setModal(true);
  const closeModal = () => setModal(false);

  return (
    <>
      {enable && <button onClick={openModal}>Delete</button>}
      {isModalOpen && (
        <dialog open id="modal-delete" class="modal">
          <p>Hero to delete is {name}</p>
          <p>Creator of the hero</p>
          <form method="POST" action={`/delete`}>
            <input
              type="text"
              required
              name="creator"
            />
            <input type="hidden" value={name} name="name" />
            <input type="hidden" value={currentPath} name="currentPath" />
            <div>
              <button type={"submit"}>Delete Hero</button>
              <button onClick={closeModal}>Close</button>
              {deleted && <p>Hero deleted successfully!</p>}
            </div>
          </form>
        </dialog>
      )}
    </>
  );
};

export default DeleteHero;
