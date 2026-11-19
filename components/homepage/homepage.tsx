import { CareerRolesSection, CompanyStrip, CoursesSection, FinalCallToAction, JobsSection, ServicesSection, TestimonialsSection, WhyChooseSection } from "@/components/homepage/home-sections"
import { HeroSection } from "@/components/homepage/hero-section"
import { SiteFooter } from "@/components/homepage/site-footer"
import { SiteHeader } from "@/components/homepage/site-header"

export function PlacementHomepage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <CompanyStrip />
        <JobsSection />
        <CoursesSection />
        <ServicesSection />
        <TestimonialsSection />
        <CareerRolesSection />
        <WhyChooseSection />
        <FinalCallToAction />
      </main>
      <SiteFooter />
    </>
  )
}
