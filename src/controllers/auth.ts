import { RequestHandler } from "express";
import { signupSchema } from "../schemas/signup";

export const signup: RequestHandler = async (req, res) => {
  const safeData = signupSchema.safeParse(req.body);

  if (!safeData.success) {
    return res.json({ error: safeData.error.flatten().fieldErrors });
  }

  res.json({});
};
