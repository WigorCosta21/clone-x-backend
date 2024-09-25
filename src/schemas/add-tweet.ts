import { z } from "zod";

export const addTweetSchema = z.object({
  body: z.string({ message: "Precisa enviar um texto" }),
  answer: z.string().optional(),
});
