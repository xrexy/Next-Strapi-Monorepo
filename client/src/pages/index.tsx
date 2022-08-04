import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { env } from "../env/client.mjs";
import { InferGetStaticPropsType } from "next";

function Home({ result }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>Do be in development</title>
        <meta name="description" content="T3 do be very cool tho" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1>Heavy development  atm :(</h1>

        <ul>
          {result &&
            result.map(({ attributes: { title }, id }) => <li key={id}>{title}</li>)}
        </ul>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps<
  StrapiResponse<Movie>
> = async () => {
  return fetch(`${env.NEXT_PUBLIC_API_URL}/movies`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      return {
        props: {
          meta: data.meta,
          result: data.data,
        },
      };
    });
};

export default Home;
