import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Characters from "../components/Characters.tsx";
import { Hero } from "../types.ts";

type Data = {
  results: Hero[];
};

export const handler: Handlers = {
  GET: async (_req: Request, ctx: FreshContext<unknown, Data>) => {
    try {
      const response = await fetch("https://supermondongo.deno.dev/");
      if (response.status !== 200) {
        throw new Response("Error fetching data", { status: response.status });
      }
      const data = await response.json();
      return ctx.render({ results: data });
    } catch (error) {
      throw new Response(error.message, { status: 500 });
    }
  },
};

export default function Home(props: PageProps<Data>) {
  const { results } = props.data;
  return (
    <>
      <Characters heros={results} currentPath="/" />
    </>
  );
}
