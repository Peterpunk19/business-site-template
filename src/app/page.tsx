import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Gallery } from "@/components/sections/Gallery";
import { Schedule } from "@/components/sections/Schedule";
import { Location } from "@/components/sections/Location";

import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { Appointment } from "@/components/sections/Appointment";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Header />

      <main id="main-content" tabIndex={-1}>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Schedule />
        <Appointment />
        <Location />
        <Contact />
      </main>

      <Footer />

      <WhatsAppButton />
    </>
  );
}
