"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2 } from "lucide-react";
import {
  walkthroughFormSchema,
  type WalkthroughFormValues,
} from "@/lib/form-schema";
import {
  areaOptions,
  businessTypes,
  cleaningFrequencies,
  brand,
} from "@/lib/site-data";
import { SectionHeading } from "@/components/ui/section-heading";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<WalkthroughFormValues>({
    resolver: zodResolver(walkthroughFormSchema),
    defaultValues: {
      areas: [],
      locations: 1,
    },
  });

  const selectedAreas = watch("areas") ?? [];

  const toggleArea = (area: (typeof areaOptions)[number]) => {
    const next = selectedAreas.includes(area)
      ? selectedAreas.filter((a) => a !== area)
      : [...selectedAreas, area];
    setValue("areas", next, { shouldValidate: true });
  };

  const onSubmit = async (data: WalkthroughFormValues) => {
    setSubmitting(true);
    // Ready for Formspree, Resend, Supabase, or API integration
    console.log("Walkthrough request:", data);
    await new Promise((r) => setTimeout(r, 800));
    setSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="contact" className="section-padding">
        <div className="container-luxury max-w-2xl text-center">
          <CheckCircle2 className="mx-auto h-16 w-16 text-success" />
          <h2 className="mt-6 font-heading text-3xl text-ivory">Thank you.</h2>
          <p className="mt-4 text-lg text-muted-text">
            Your walkthrough request has been received. We&apos;ll contact you to
            confirm the location, scope, and best cleaning schedule.
          </p>
          <p className="mt-2 text-sm text-muted-text">
            Response within 24 hours
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="section-padding bg-[#080808]/50">
      <div className="container-luxury">
        <SectionHeading
          eyebrow="Get started"
          title="Request your free walkthrough."
          description="Tell us about your space. We'll confirm scope, timing, and a recurring plan that fits your operation."
        />

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto max-w-3xl glass-card space-y-6 p-6 sm:p-10"
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Name *</Label>
              <Input
                id="name"
                {...register("name")}
                className="border-white/10 bg-black/40"
                placeholder="Your name"
              />
              {errors.name && (
                <p className="text-xs text-destructive">{errors.name.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="businessName">Business name *</Label>
              <Input
                id="businessName"
                {...register("businessName")}
                className="border-white/10 bg-black/40"
                placeholder="Restaurant name"
              />
              {errors.businessName && (
                <p className="text-xs text-destructive">
                  {errors.businessName.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone *</Label>
              <Input
                id="phone"
                type="tel"
                {...register("phone")}
                className="border-white/10 bg-black/40"
                placeholder={brand.phone}
              />
              {errors.phone && (
                <p className="text-xs text-destructive">{errors.phone.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                {...register("email")}
                className="border-white/10 bg-black/40"
                placeholder={brand.email}
              />
              {errors.email && (
                <p className="text-xs text-destructive">{errors.email.message}</p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">Restaurant address *</Label>
            <Input
              id="address"
              {...register("address")}
              className="border-white/10 bg-black/40"
              placeholder="Street, Bronx / NYC"
            />
            {errors.address && (
              <p className="text-xs text-destructive">{errors.address.message}</p>
            )}
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <Label>Type of business *</Label>
              <Select onValueChange={(v) => setValue("businessType", v as WalkthroughFormValues["businessType"], { shouldValidate: true })}>
                <SelectTrigger className="border-white/10 bg-black/40 w-full">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  {businessTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.businessType && (
                <p className="text-xs text-destructive">
                  {errors.businessType.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="locations">Number of locations *</Label>
              <Input
                id="locations"
                type="number"
                min={1}
                {...register("locations", { valueAsNumber: true })}
                className="border-white/10 bg-black/40"
              />
              {errors.locations && (
                <p className="text-xs text-destructive">
                  {errors.locations.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label>Preferred cleaning frequency *</Label>
              <Select onValueChange={(v) => setValue("frequency", v as WalkthroughFormValues["frequency"], { shouldValidate: true })}>
                <SelectTrigger className="border-white/10 bg-black/40 w-full">
                  <SelectValue placeholder="Select frequency" />
                </SelectTrigger>
                <SelectContent>
                  {cleaningFrequencies.map((freq) => (
                    <SelectItem key={freq} value={freq}>
                      {freq}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.frequency && (
                <p className="text-xs text-destructive">
                  {errors.frequency.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="bestTime">Best cleaning time *</Label>
              <Input
                id="bestTime"
                {...register("bestTime")}
                className="border-white/10 bg-black/40"
                placeholder="e.g. After 11pm close"
              />
              {errors.bestTime && (
                <p className="text-xs text-destructive">
                  {errors.bestTime.message}
                </p>
              )}
            </div>
          </div>

          <div className="space-y-3">
            <Label>Areas needed *</Label>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {areaOptions.map((area) => (
                <label
                  key={area}
                  className={cn(
                    "flex cursor-pointer items-center gap-2 rounded-lg border px-3 py-2.5 text-sm transition",
                    selectedAreas.includes(area)
                      ? "border-champagne/50 bg-champagne/10 text-ivory"
                      : "border-white/10 text-muted-text hover:border-white/20"
                  )}
                >
                  <Checkbox
                    checked={selectedAreas.includes(area)}
                    onCheckedChange={() => toggleArea(area)}
                  />
                  {area}
                </label>
              ))}
            </div>
            {errors.areas && (
              <p className="text-xs text-destructive">{errors.areas.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              {...register("message")}
              className="min-h-[120px] border-white/10 bg-black/40"
              placeholder="Tell us about soil level, hood vendor schedule, or special access notes..."
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="btn-primary-luxury w-full disabled:opacity-60"
          >
            {submitting ? (
              <span className="inline-flex items-center gap-2">
                <Loader2 className="h-4 w-4 animate-spin" />
                Submitting...
              </span>
            ) : (
              "Request Free Walkthrough"
            )}
          </button>
          <p className="text-center text-xs text-muted-text">
            Response within 24 hours • No spam
          </p>
        </form>
      </div>
    </section>
  );
}
