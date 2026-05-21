"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { quoteFormSchema, type QuoteFormValues } from "@/lib/form-schema";
import {
  areaOptions,
  brand,
  businessTypes,
  cleaningFrequencies,
} from "@/lib/site-data";
import { SectionLabel } from "@/components/ui/section-label";
import { EditorialHeading } from "@/components/ui/editorial-heading";
import { cn } from "@/lib/utils";

const inputClass =
  "w-full border-0 border-b border-mist bg-transparent py-3 text-sm text-navy outline-none transition-colors placeholder:text-navy/30 focus:border-navy";

export function QuoteForm() {
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: { areas: [], locations: 1 },
  });

  const areas = watch("areas") ?? [];

  const toggleArea = (area: (typeof areaOptions)[number]) => {
    const next = areas.includes(area)
      ? areas.filter((a) => a !== area)
      : [...areas, area];
    setValue("areas", next, { shouldValidate: true });
  };

  const onSubmit = async (data: QuoteFormValues) => {
    setLoading(true);
    console.log("Walkthrough request:", data);
    await new Promise((r) => setTimeout(r, 700));
    setLoading(false);
    setDone(true);
  };

  if (done) {
    return (
      <section id="contact" className="section-pad bg-navy">
        <div className="container-maison max-w-2xl text-center">
          <EditorialHeading light className="text-4xl md:text-5xl">
            Received.
          </EditorialHeading>
          <p className="mt-8 text-sm leading-relaxed text-porcelain/70 md:text-base">
            Your walkthrough request has been received. We&apos;ll contact you to
            confirm scope, access, and the best service window.
          </p>
          <p className="mt-4 text-[0.65rem] uppercase tracking-[0.2em] text-porcelain/40">
            Response within 24 hours
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="section-pad bg-navy">
      <div className="container-maison max-w-3xl">
        <SectionLabel light>Inquiry</SectionLabel>
        <EditorialHeading light className="mt-6">
          Request a private walkthrough.
        </EditorialHeading>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-16 space-y-10"
          noValidate
        >
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <label className="label-maison text-porcelain/40">Full name</label>
              <input className={inputClass + " text-porcelain"} {...register("name")} />
              {errors.name && (
                <p className="mt-1 text-xs text-surgical">{errors.name.message}</p>
              )}
            </div>
            <div>
              <label className="label-maison text-porcelain/40">Business name</label>
              <input
                className={inputClass + " text-porcelain"}
                {...register("businessName")}
              />
              {errors.businessName && (
                <p className="mt-1 text-xs text-surgical">
                  {errors.businessName.message}
                </p>
              )}
            </div>
            <div>
              <label className="label-maison text-porcelain/40">Phone</label>
              <input
                type="tel"
                className={inputClass + " text-porcelain"}
                {...register("phone")}
                placeholder={brand.phone}
              />
              {errors.phone && (
                <p className="mt-1 text-xs text-surgical">{errors.phone.message}</p>
              )}
            </div>
            <div>
              <label className="label-maison text-porcelain/40">Email</label>
              <input
                type="email"
                className={inputClass + " text-porcelain"}
                {...register("email")}
              />
              {errors.email && (
                <p className="mt-1 text-xs text-surgical">{errors.email.message}</p>
              )}
            </div>
          </div>

          <div>
            <label className="label-maison text-porcelain/40">Restaurant address</label>
            <input className={inputClass + " text-porcelain"} {...register("address")} />
            {errors.address && (
              <p className="mt-1 text-xs text-surgical">{errors.address.message}</p>
            )}
          </div>

          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <label className="label-maison text-porcelain/40">Business type</label>
              <select
                className={inputClass + " text-porcelain cursor-pointer"}
                onChange={(e) =>
                  setValue(
                    "businessType",
                    e.target.value as QuoteFormValues["businessType"],
                    { shouldValidate: true }
                  )
                }
                defaultValue=""
              >
                <option value="" disabled>
                  Select
                </option>
                {businessTypes.map((t) => (
                  <option key={t} value={t} className="text-navy">
                    {t}
                  </option>
                ))}
              </select>
              {errors.businessType && (
                <p className="mt-1 text-xs text-surgical">
                  {errors.businessType.message}
                </p>
              )}
            </div>
            <div>
              <label className="label-maison text-porcelain/40">Locations</label>
              <input
                type="number"
                min={1}
                className={inputClass + " text-porcelain"}
                {...register("locations", { valueAsNumber: true })}
              />
              {errors.locations && (
                <p className="mt-1 text-xs text-surgical">
                  {errors.locations.message}
                </p>
              )}
            </div>
            <div>
              <label className="label-maison text-porcelain/40">Frequency</label>
              <select
                className={inputClass + " text-porcelain cursor-pointer"}
                onChange={(e) =>
                  setValue(
                    "frequency",
                    e.target.value as QuoteFormValues["frequency"],
                    { shouldValidate: true }
                  )
                }
                defaultValue=""
              >
                <option value="" disabled>
                  Select
                </option>
                {cleaningFrequencies.map((f) => (
                  <option key={f} value={f} className="text-navy">
                    {f}
                  </option>
                ))}
              </select>
              {errors.frequency && (
                <p className="mt-1 text-xs text-surgical">
                  {errors.frequency.message}
                </p>
              )}
            </div>
            <div>
              <label className="label-maison text-porcelain/40">
                Preferred cleaning window
              </label>
              <input
                className={inputClass + " text-porcelain"}
                {...register("cleaningWindow")}
                placeholder="After 11pm close"
              />
              {errors.cleaningWindow && (
                <p className="mt-1 text-xs text-surgical">
                  {errors.cleaningWindow.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <label className="label-maison text-porcelain/40">Areas needed</label>
            <div className="mt-4 flex flex-wrap gap-3">
              {areaOptions.map((area) => (
                <button
                  key={area}
                  type="button"
                  onClick={() => toggleArea(area)}
                  className={cn(
                    "border px-4 py-2 text-[0.65rem] uppercase tracking-[0.16em] transition-colors",
                    areas.includes(area)
                      ? "border-porcelain bg-porcelain text-navy"
                      : "border-porcelain/25 text-porcelain/60 hover:border-porcelain/50"
                  )}
                >
                  {area}
                </button>
              ))}
            </div>
            {errors.areas && (
              <p className="mt-2 text-xs text-surgical">{errors.areas.message}</p>
            )}
          </div>

          <div>
            <label className="label-maison text-porcelain/40">Message</label>
            <textarea
              rows={4}
              className={inputClass + " resize-none text-porcelain"}
              {...register("message")}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn-primary-maison w-full disabled:opacity-50 !bg-porcelain !text-navy !border-porcelain md:w-auto"
          >
            {loading ? "Submitting..." : "Request Free Walkthrough"}
          </button>
        </form>
      </div>
    </section>
  );
}
