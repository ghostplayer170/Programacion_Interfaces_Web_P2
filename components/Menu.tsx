import { FunctionComponent } from "preact";

const Menu: FunctionComponent = () => {
  return (
    <>
      <div class="menu">
        <h1>LA SOCIEDAD DE LA JUSTICIA DE LOS MONDONGOS</h1>
        <ul>
          <li>
            <a href="/">Heros</a>
          </li>
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
