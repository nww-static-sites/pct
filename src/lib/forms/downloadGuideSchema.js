import z from "zod";

const phoneValidation = new RegExp(
  /\+?\(([0-9]{3})\)?[-.]?\(?([0-9]{3})\)?[-.]?\(?([0-9]{4})\)?/
  // /^(?:\+\d{1,3}[\s-]?)?(?:\(\d{1,4}\)|\d{1,4})[\s-]?\d{1,14}$|^\s*$/
);

export const downloadGuideSchema = z.object({
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  email: z.string().email("Email is not valid"),
  phoneNumber: z
    .string()
    .regex(phoneValidation, "Phone number is not valid")
    .optional(),
});

export const downloadHorizontalGuideSchema = z.object({
  name: z.string().optional(),
  email: z.string().email("Email is not valid"),
  phoneNumber: z
    .string()
    .regex(phoneValidation, "Phone number is not valid")
    .optional(),
});

export const newsLetterGuide = z.object({
  email: z.string().email("Email is not valid"),
});

export const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Email is not valid"),
  subject: z.string().min(1, "Subhect is required"),
  message: z.string().min(1, "Message is required"),
});

export const applicationSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Email is not valid"),
  uploadFile: z
    .instanceof(File)
    .refine((file) => file?.length !== 0, "File is required")
    .refine((file) => file.size < 15000000, "Max size is 15MB."),
  phoneNumber: z.string().regex(phoneValidation, "Phone number is not valid"),
  link: z.string().url("Invalid URL").optional(),
});
