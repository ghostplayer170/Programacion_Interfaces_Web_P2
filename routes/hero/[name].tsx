import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { Hero } from "../../types.ts";
import Character from "../../components/Character.tsx";
import Characters from "../../components/Characters.tsx";

type Data = {
  heros: Hero[];
  currentPath : string;
};

export const handler: Handlers = {
  async GET(_req: Request, ctx: FreshContext<unknown, Data>) {
    const name = ctx.params.name;
    try {
      const response = await fetch(`https://supermondongo.deno.dev/${name}`);
      if (response.status !== 200) {
        throw new Response("Error fetching data", { status: response.status });
      }
      const data = await response.json();
      return await ctx.render({heros: data, currentPath: name});
    } catch (error) {
      throw new Response(error.message, { status: 500 });
    }
  },
};

export default function hero(props: PageProps<Data>) {
  const { heros, currentPath } = props.data;
  return (
    <>
      <div class="flex items-center justify-center wrap justify-space-around">
        <Characters heros={heros} currentPath={`hero/${currentPath}`} />
      </div>
    </>
  );
}
