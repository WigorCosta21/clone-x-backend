import { z } from "zod";

export const signinSchema = z.object({
  email: z.string({ message: "E-mail é obrigatório" }).email("E-mail inválido"),
  password: z
    .string({ message: "Senha é obrigatório" })
    .min(4, "Precisa ter 4 pu mais caracteres"),
});
