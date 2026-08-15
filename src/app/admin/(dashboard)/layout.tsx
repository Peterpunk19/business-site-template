import { redirect } from "next/navigation";

import { auth } from "@/auth";

import { AdminHeader } from "@/components/admin/AdminHeader";
import { AdminSidebar } from "@/components/admin/AdminSidebar";

export default async function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  if (!session?.user) {
    redirect("/admin/login");
  }

  if (session.user.role !== "ADMIN") {
    redirect("/");
  }

  return (
    <div className="min-h-screen bg-slate-50 lg:flex">
      <AdminSidebar />

      <div className="min-w-0 flex-1">
        <AdminHeader userName={session.user.name} />

        {children}
      </div>
    </div>
  );
}
