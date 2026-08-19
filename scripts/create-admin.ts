import bcrypt from "bcryptjs";

import { PrismaClient } from "../src/generated/prisma/client";

const prisma = new PrismaClient();

async function main() {
  const email = process.env.ADMIN_EMAIL?.trim().toLowerCase();
  const password = process.env.ADMIN_PASSWORD;
  const name = process.env.ADMIN_NAME?.trim() || "Administrador";

  if (!email) {
    throw new Error("Falta la variable ADMIN_EMAIL");
  }

  if (!password) {
    throw new Error("Falta la variable ADMIN_PASSWORD");
  }

  if (password.length < 8) {
    throw new Error("ADMIN_PASSWORD debe tener al menos 8 caracteres");
  }

  const passwordHash = await bcrypt.hash(password, 12);

  const user = await prisma.user.upsert({
    where: {
      email,
    },
    update: {
      name,
      passwordHash,
      role: "ADMIN",
      isActive: true,
    },
    create: {
      name,
      email,
      passwordHash,
      role: "ADMIN",
      isActive: true,
    },
  });

  console.log("Usuario administrador creado/actualizado:");
  console.log({
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
    isActive: user.isActive,
  });
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
