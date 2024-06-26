// src/server/api/routers/tweet.ts
import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "../trpc";

export const tweetRouter = createTRPCRouter({
  create: protectedProcedure
    .input(z.object({ content: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const tweet = await ctx.prisma.tweet.create({
        data: {
          content: input.content,
          authorId: ctx.session.user.id,
        },
      });
      return tweet;
    }),
});