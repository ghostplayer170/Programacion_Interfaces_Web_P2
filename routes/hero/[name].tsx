import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { Hero } from "../../types.ts";
import Character from "../../components/Character.tsx";

export const handler: Handlers = {
  async GET(_req: Request, ctx: FreshContext<unknown, Hero[]>) {
    const name = ctx.params.name;
    try {
      const response = await fetch(`https://supermondongo.deno.dev/${name}`);
      if (response.status !== 200) {
        throw new Response("Error fetching data", { status: response.status });
      }
      const data = await response.json();
      return await ctx.render(data);
    } catch (error) {
      throw new Response(error.message, { status: 500 });
    }
  },
};

export default function hero(props: PageProps<Hero[]>) {
  const { data } = props;
  return (
    <>
      <div class="flex items-center justify-center wrap justify-space-around">
        {data.map((hero) => (
          <Character key={hero.name} {...hero} enableDelete={true} currentPath={`/hero/${hero.name}`} />
        ))}
        {data.length === 0 && (
          <div class="not-found">
            <p>Heros not found</p>
          </div>
        )}
      </div>
    </>
  );
}
