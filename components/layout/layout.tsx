import Navbar from "./navbar";
import Footer from "./footer";
import React, { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/router";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const router = useRouter();
  const [isHomePage, setIsHomePage] = useState(true);
  useEffect(() => {
    setIsHomePage(router.pathname == "/");
  }, [router.pathname]);

  return (
    <div style={{ background: "#1F2833", height: "100%" }}>
      {!isHomePage && <Navbar />}
      <main>{children}</main>
      <Footer />
    </div>
  );
}
