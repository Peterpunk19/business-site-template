import { Container } from "@/components/layout/Container";
import { businessConfig } from "@/config/business";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-100 bg-white py-10">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-bold text-slate-950">
              {businessConfig.name}
            </p>

            <p className="mt-1 text-sm text-slate-500">
              {businessConfig.professional.name}
            </p>
          </div>

          <p className="text-sm text-slate-500">
            © {currentYear} {businessConfig.name}. Todos los derechos reservados.
          </p>
        </div>
      </Container>
    </footer>
  );
}