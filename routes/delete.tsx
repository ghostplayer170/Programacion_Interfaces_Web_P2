import { FreshContext, Handlers } from "$fresh/server.ts";

type Data = {
  deleted: boolean;
};

export const handler: Handlers<Data> = {
  async POST(req: Request, ctx: FreshContext<unknown, Data>) {
    try {
      const params = await req.formData();
      const name = params.get("name") || "";
      const creator = params.get("creator") || "";
      const currentPath = params.get("currentPath") || "/";
      const URL = "https://supermondongo.deno.dev/" + name;
      const response = await fetch(URL, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ creator: creator }),
      });
      if (response.status !== 204) {
        return new Response("Error deleting hero", { status: response.status });
      }
      return new Response("", {
        status: 303,
        headers: {
          "Location": `${currentPath}`,
        },
      });
    } catch (error) {
      throw new Response(error.message, { status: 500 });
    }
  },
};
