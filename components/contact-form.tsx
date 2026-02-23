"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Button } from "@/components/ui/button"

const contactFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  company: z.string().min(1, "Company name is required"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

type ContactFormData = z.infer<typeof contactFormSchema>

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))
      console.log("Form submitted:", data)
      setSubmitSuccess(true)
      reset()
      setTimeout(() => setSubmitSuccess(false), 5000)
    } catch (error) {
      console.error("Error submitting form:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitSuccess) {
    return (
      <div className="bg-background border border-border rounded-lg p-8 text-center">
        <div className="mb-4 text-4xl">✓</div>
        <h3 className="text-2xl font-bold mb-2">Thank you!</h3>
        <p className="text-muted-foreground">We've received your message and will get back to you within 24 hours.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* First Name */}
      <div>
        <label className="block text-sm font-medium mb-2">First Name</label>
        <input
          {...register("firstName")}
          type="text"
          className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          placeholder="John"
        />
        {errors.firstName && <span className="text-destructive text-sm mt-1 block">{errors.firstName.message}</span>}
      </div>

      {/* Last Name */}
      <div>
        <label className="block text-sm font-medium mb-2">Last Name</label>
        <input
          {...register("lastName")}
          type="text"
          className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          placeholder="Doe"
        />
        {errors.lastName && <span className="text-destructive text-sm mt-1 block">{errors.lastName.message}</span>}
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium mb-2">Email</label>
        <input
          {...register("email")}
          type="email"
          className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          placeholder="john@example.com"
        />
        {errors.email && <span className="text-destructive text-sm mt-1 block">{errors.email.message}</span>}
      </div>

      {/* Phone */}
      <div>
        <label className="block text-sm font-medium mb-2">Phone (Optional)</label>
        <input
          {...register("phone")}
          type="tel"
          className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          placeholder="+1 (555) 123-4567"
        />
      </div>

      {/* Company */}
      <div>
        <label className="block text-sm font-medium mb-2">Company</label>
        <input
          {...register("company")}
          type="text"
          className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          placeholder="Acme Inc."
        />
        {errors.company && <span className="text-destructive text-sm mt-1 block">{errors.company.message}</span>}
      </div>

      {/* Service */}
      <div>
        <label className="block text-sm font-medium mb-2">Service Interest</label>
        <select
          {...register("service")}
          className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        >
          <option value="">Select a service</option>
          <option value="strategy">Brand Strategy & Positioning</option>
          <option value="design">Design & Creative Production</option>
          <option value="growth">Digital Growth Systems</option>
          <option value="conversion">Sales Funnels & Conversion</option>
          <option value="other">Other / Multi-Service</option>
        </select>
        {errors.service && <span className="text-destructive text-sm mt-1 block">{errors.service.message}</span>}
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-medium mb-2">Message</label>
        <textarea
          {...register("message")}
          rows={6}
          className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
          placeholder="Tell us about your brand, challenges, and goals..."
        />
        {errors.message && <span className="text-destructive text-sm mt-1 block">{errors.message.message}</span>}
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        We respect your privacy. Your information is secure and will never be shared.
      </p>
    </form>
  )
}
