import { FunctionComponent } from "preact";

const SearchWindow: FunctionComponent = () => {
  return (
    <>
      <div class="container-search">
        <h1>Search</h1>
        <form action="/search" method="GET">
          <label>
            Hero name:
          </label>
          <input type="text" name="name" />
          <button type="submit">Search</button>
        </form>
      </div>
    </>
  );
};

export default SearchWindow;
