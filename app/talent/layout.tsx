import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Talent",
};

function Layout({ children }: { children: React.ReactNode }) {
  return <section>{children}</section>;
}

export default Layout;
