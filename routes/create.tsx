import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import FormCreate from "../islands/FormCreate.tsx";
import axios from "npm:axios";

export const handler: Handlers = {
  POST: async (req: Request, ctx: FreshContext<unknown, boolean>) => {
    try {
      const params = await req.formData();
      const data = {
        name: params.get("name"),
        image: params.get("image"),
        sound: params.get("sound"),
        creator: params.get("creator"),
      };
      const response = await axios.post(
        "https://supermondongo.deno.dev/",
        data,
      );
      if (response.status !== 200) {
        return ctx.render( true );
      }
        return ctx.render( false );
    } catch (error) {
      throw new Error("Error fetching data: " + error.message);
    }
  },
};
export default function Create(props: PageProps<boolean>) {
  const res = props;
  return (
    <>
      <FormCreate />
      {res && <p>Hero created successfully!</p>}
    </>
  );
}
