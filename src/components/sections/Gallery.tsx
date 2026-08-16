import Image from "next/image";

import { Container } from "@/components/layout/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { gallery } from "@/config/gallery";

export function Gallery() {
  return (
    <section id="galeria" className="scroll-mt-20 py-16 md:py-24">
      <Container>
        <SectionTitle
          eyebrow="Galería"
          title="Conoce nuestro consultorio"
          description="Un espacio preparado para brindar atención profesional y cómoda."
          align="center"
        />

        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:mt-12 lg:grid-cols-4">
          {gallery.map((image, index) => (
            <div
              key={image.id}
              className={`relative overflow-hidden rounded-2xl bg-slate-100 sm:rounded-3xl ${
                index === 0
                  ? "col-span-2 aspect-[16/10] lg:col-span-2 lg:row-span-2 lg:aspect-auto lg:min-h-[500px]"
                  : "aspect-square"
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes={
                  index === 0 ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 1024px) 25vw, 50vw"
                }
                className="object-cover transition duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
