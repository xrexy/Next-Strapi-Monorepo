// src/server/router/index.ts
import { createRouter } from "./context";
import superjson from "superjson";

import { strapiRouter } from "./strapi";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("strapi.", strapiRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
