import { FunctionComponent } from "preact";

const Menu: FunctionComponent = () => {
  return (
    <>
      <div class="menu">
        <div class="gif-menu">
          <img src="/images/heros2.gif" alt="Hero" class="gif-img"/>
        </div>
        <div class="menu-title-options">
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
          </ul>
        </div>
        <div class="gif-menu">
          <img src="/images/heros1.gif" alt="Hero" class="gif-img" />
        </div>
      </div>
    </>
  );
};

export default Menu;
