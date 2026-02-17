import { HeroSection } from "@/components/home/hero-section"
import { DonationTypeCards } from "@/components/home/donation-type-cards"
import { ImpactStrip } from "@/components/home/impact-strip"
import { TestimonialStrip } from "@/components/home/testimonial-strip"

export function HomeView() {
  return (
    <>
      <HeroSection />
      <DonationTypeCards />
      <ImpactStrip />
      <TestimonialStrip />
    </>
  )
}
