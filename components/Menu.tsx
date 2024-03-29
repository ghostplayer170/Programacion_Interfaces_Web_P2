import { FunctionComponent } from "preact";

const Menu: FunctionComponent = () => {
  return (
    <>
      <div>
        <h1>Menu</h1>
        <ul>
          <li>
            <a href="/search">Search</a>
          </li>
          <li>
            <a href="/create">Create</a>
          </li>
          <li>
            <a href="/delete">Delete</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Menu;
