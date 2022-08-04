require("isomorphic-fetch");
import { createRouter } from "../context";
import { z } from "zod";
import { env } from "../../../env/server.mjs";

export const moviesRouter = createRouter().query("all", {
  async resolve(): Promise<StrapiResponse<Movie>> {
    const req = await fetch(`${env.PUBLIC_NEXT_API_URL}/movies`);
    const json = await req.json();

    const res: StrapiResponse<Movie> = {
      result: json.data,
      meta: json.meta
    };
    return res;
  },
});
