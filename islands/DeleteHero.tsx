import { FunctionComponent } from "preact";
import { useState } from "preact/hooks";

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

  const openModal = () => setModal(true);
  const closeModal = () => setModal(false);

  return (
    <>
      {enable && <button onClick={openModal}>Delete</button>}
      {isModalOpen && (
        <dialog open id="modal-delete" class="modal">
          <p>Hero <strong>{name}</strong> will be eliminated !!</p>
          <p>To delete writes its creator:</p>
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
            </div>
          </form>
        </dialog>
      )}
    </>
  );
};

export default DeleteHero;
