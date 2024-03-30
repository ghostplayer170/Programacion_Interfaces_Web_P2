import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import FormCreate from "../islands/FormCreate.tsx";

type Data = {
  created: boolean;
};

export const handler: Handlers = {
  GET(_req: Request, ctx: FreshContext<unknown, Data>) {
    return ctx.render({ created: false });
  },
  async POST(_req: Request, ctx: FreshContext<unknown, Data>) {
    try {
      const params = await _req.formData();
      const URL = "https://supermondongo.deno.dev/";
      const data = {
        name: params.get("name") || "",
        image: params.get("image") || "",
        sound: params.get("sound") || "",
        creator: params.get("creator") || "",
      };
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.status !== 201) {
        return new Response("Error creating hero", { status: response.status });
      }
      return ctx.render({ created: true });
    } catch (error) {
      throw new Response(error.message, { status: 500 });
    }
  },
};

export default function Create(props: PageProps<Data>) {
  const { created } = props.data;
  return (
    <>
      <div class="create-hero-container">
        <FormCreate created={created} />
      </div>
    </>
  );
}
