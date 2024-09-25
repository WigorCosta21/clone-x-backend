import { Response } from "express";
import { ExtendedRequest } from "../types/extended-request";
import { addTweetSchema } from "../schemas/add-tweet";

export const addTweet = async (req: ExtendedRequest, res: Response) => {
  const safeData = addTweetSchema.safeParse(req.body);

  if (!safeData.success) {
    return res.json({ error: safeData.error.flatten().fieldErrors });
  }
  res.json({});
};
