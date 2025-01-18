"use server";

import { z } from "zod";

// Email validation schema
const EmailSchema = z.object({
  email: z.string().email("Invalid email address"),
  name: z.string().min(2, "Name must be at least 2 characters long"),
  message: z.string().optional(),
});

export async function submitContactForm(prevState: any, formData: FormData) {
  // Validate form data
  const validatedFields = EmailSchema.safeParse({
    email: formData.get("email"),
    name: formData.get("name"),
    message: formData.get("message"),
  });

  // Return early if validation fails
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Failed to submit form",
    };
  }

  // Simulate form submission (replace with actual email sending logic)
  await new Promise((resolve) => setTimeout(resolve, 1500));

  // In a real-world scenario, you would integrate with an email service here
  return {
    success: true,
    message: "Thank you for your message! We will get back to you soon.",
  };
}
