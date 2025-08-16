import * as z from "zod";
import { isValidPhoneNumber } from "libphonenumber-js";

export const ContactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .min(1, "Phone number is required")
    .refine((value) => isValidPhoneNumber(value, "NG"), {
      // Added 'NG' for Nigeria
      message: "Invalid Nigerian phone number",
    }),
  businessUnit: z
    .string()
    .min(1, "Please select a business unit")
    .refine((val) => ["Agro Services", "Marine", "Energies"].includes(val), {
      message: "Invalid business unit selected",
    }),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(500, "Message cannot exceed 500 characters"),
});

export type ContactFormValues = z.infer<typeof ContactFormSchema>;
