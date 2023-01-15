import { SafeFixed } from "@/components"

import { Header } from "./Header"
import { Services } from "./Services"
import { TechUsed } from "./TechUsed"
import { Testimonials } from "./Testimonials"
export function Home(): JSX.Element {
  return (
    <div className="bg-primary-50">
      <Header />
      <Services />
      <Testimonials />
      <TechUsed />
      <SafeFixed>
        <img
          alt="astronaut"
          src="/images/astronaut.svg"
          className="h-[200px] animate-twist fixed bottom-0 right-0 z-[100] hidden sm:flex"
        />
      </SafeFixed>
    </div>
  )
}