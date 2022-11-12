// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { NextRequest } from "next/server";

export interface ExecutionContext {
  env: {
    DB: D1Database;
  };
}

export const config = {
  runtime: "experimental-edge",
};

// eslint-disable-next-line import/no-anonymous-default-export
export default async function (_req: NextRequest, ctx: ExecutionContext) {
  try {
    const { results } = await ctx.env.DB.prepare("SELECT * FROM chat ").all();

    return new Response(JSON.stringify(results), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (e: any) {
    return new Response(JSON.stringify({ err: e.toString(), msg: e.message }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
