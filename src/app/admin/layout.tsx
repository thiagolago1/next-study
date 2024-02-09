import { ReactNode } from "react";

export default function AdminLayout({ children }: { children: ReactNode}) {
  return (
    <div>
      <div>{children}</div>
      <h1>Painel Admin</h1>
    </div>
  );
}