import { FreshContext, Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  GET(_req: Request, ctx: FreshContext) {
    const url = new URL(ctx.url);
    const name = url.searchParams.get("name");
    if (name) {
      return new Response("", {
        status: 307,
        headers: {
          "Location": `/hero/${name}`,
        },
      });
    }
    return ctx.render();
  },
};

export default function Search() {
  return (
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
  );
}
