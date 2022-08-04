import { createRouter } from "./context";
import { z } from "zod";
import { moviesRouter } from "./strapi/movies.router";

export const strapiRouter = createRouter().merge("movies.", moviesRouter);
