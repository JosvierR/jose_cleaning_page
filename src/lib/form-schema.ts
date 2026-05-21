import { z } from "zod";
import { areaOptions, businessTypes, cleaningFrequencies } from "./site-data";

export const quoteFormSchema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  businessName: z.string().min(2, "Please enter your business name"),
  phone: z
    .string()
    .min(10, "Please enter a valid phone number")
    .regex(/^[\d\s()+-]+$/, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email"),
  address: z.string().min(5, "Please enter your restaurant address"),
  businessType: z.enum(businessTypes, {
    message: "Please select a business type",
  }),
  locations: z.number().min(1, "At least 1 location"),
  frequency: z.enum(cleaningFrequencies, {
    message: "Please select a frequency",
  }),
  cleaningWindow: z.string().min(2, "Please share your preferred cleaning window"),
  areas: z
    .array(z.enum(areaOptions))
    .min(1, "Select at least one area"),
  message: z.string().optional(),
});

export type QuoteFormValues = z.infer<typeof quoteFormSchema>;
