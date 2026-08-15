import "next-auth";

declare module "next-auth" {
  interface User {
    role: "ADMIN";
  }

  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;

      role: "ADMIN";
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id?: string;
    role?: "ADMIN";
  }
}
