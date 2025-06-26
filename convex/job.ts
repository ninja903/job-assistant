import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const createJob = mutation({
    args: {
        userId: v.string(),
        jobDescription: v.string(),
      },
    handler: async (ctx, args) => { },
});