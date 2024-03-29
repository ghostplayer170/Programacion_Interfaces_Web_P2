import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Character from "../components/Character.tsx";
import Menu from "../components/Menu.tsx";
import { Hero } from "../types.ts";

type Data = {
  results: Hero[];
};

export const handler: Handlers = {
  GET: async (_req: Request, ctx: FreshContext<unknown, Data>) => {
    try {
      const response = await fetch("https://supermondongo.deno.dev/");
      if (response.status !== 200) {
        throw new Error("Error fetching data");
      }
      const data = await response.json();
      return ctx.render({ results: data });
    } catch (error) {
      throw new Error("Error fetching data: " + error.message);
    }
  },
};

export default function Home(props: PageProps<Data>) {
  const { results } = props.data;
  return (
    <>
      <div>
        <Menu />
      </div>
      <div class="flex items-center justify-center wrap justify-space-around">
        {results.map((hero) => <Character key={hero.name} {...hero} />)}
      </div>
    </>
  );
}
