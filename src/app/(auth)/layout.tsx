import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode}) {
  return (
    <div>
      <div>{children}</div>
      <h1>Logo</h1>
    </div>
  );
}