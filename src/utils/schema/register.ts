import { z } from "zod";

export const registerFormSchema = z
  .object({
    fullname: z.string().min(3),
    username: z.string().min(4, {
      message: "Username must be at least 4 characters.",
    }),
    email: z.string().email({
      message: "Enter a valid email address",
    }),
    password: z.string().min(8),
    confirmPassword: z.string().min(8),
  })
  .refine(
    (values) => {
      return values.password === values.confirmPassword;
    },
    {
      message: "Passwords must match!",
      path: ["confirmPassword"],
    }
  );
