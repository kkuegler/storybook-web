import type { Metadata } from "next";
import { Header } from "../../components/header/header";
import { Fragment } from "react";
import { Footer } from "../../components/footer/footer";
import Image from "next/image";
import { getDocsMeta } from "@/lib/docs";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Storybook",
  description:
    "Storybook is a frontend workshop for building UI components and pages in isolation. Thousands of teams use it for UI development, testing, and documentation. It's open source and free.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pages = await getDocsMeta();

  return (
    <Fragment>
      <Header variant="docs" />
      <Image
        src="/bubbles.png"
        alt="Storybook Docs"
        width={1800}
        height={339}
        className="w-full absolute top-0 left-0 -z-10"
      />
      <main className="max-w-8xl mx-auto px-4 lg:px-8 py-12 flex gap-4">
        <div className="w-[228px] bg-zinc-400/10 dark:bg-zinc-600/10 min-h-[1400px] max-[848px]:hidden">
          <nav className="sticky top-0">
            <ul className="mt-8">
              {pages
                ? pages.map((page) => (
                    <li key={page.id}>
                      <Link href={page.href}>{page.sidebarTitle}</Link>
                    </li>
                  ))
                : []}
            </ul>
          </nav>
        </div>
        <div className="w-full flex-1 bg-zinc-400/10 dark:bg-zinc-600/10 min-h-[1400px]">
          {children}
        </div>
        <div className="w-[228px] bg-zinc-400/10 dark:bg-zinc-600/10 min-h-[1400px] max-[1148px]:hidden" />
      </main>
      <Footer />
    </Fragment>
  );
}
