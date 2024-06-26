import { FreshContext, Handlers } from "$fresh/server.ts";
import SearchWindow from "../components/SearchWindow.tsx";

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
    <>
      <SearchWindow />
    </>
  );
}
