import z from "zod";

const phoneValidation = new RegExp(
  /\+?\(?([0-9]{3})\)?[-.]?\(?([0-9]{3})\)?[-.]?\(?([0-9]{4})\)?/
);

export const downloadGuideSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Email is not valid"),
  phoneNumber: z
    .string()
    .min(1, "Phone number is required")
    .max(15, "Phone number is not valid")
    .regex(phoneValidation, "Phone number is not valid"),
});
