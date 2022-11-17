import { NextRequest } from "next/server";

export const config = {
  runtime: "experimental-edge",
};

type NextRequestWithEnv = NextRequest & {
  env: {
    DB: D1Database;
  };
};

declare var CHATDB: any;

export default async function handler(req: NextRequestWithEnv, ctx: any) {
  try {
    // const { env } = req;
    // const { results } = await env.DB.prepare("SELECT * FROM chat ").all();

    return new Response(
      JSON.stringify({
        hoge: CHATDB,
        ctx: ctx,
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (e: any) {
    return new Response(JSON.stringify({ err: e.toString(), msg: e.message }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
