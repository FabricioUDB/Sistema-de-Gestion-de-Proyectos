import Link from "next/link";
import { DottedSeparator } from "./dotted-separator";
import { Navigation } from "./navigation";
import { WorkspaceSwitcher } from "./workspace-switcher";
import { Projects } from "./projects";
import { Logo } from "./logo";

export const Sidebar = () => {
  return (
    <aside className="h-full bg-neutral-100 p-4 w-full dark:bg-[#1C1C1C]">
      <Link href="/">
        <Logo />
      </Link>
      <DottedSeparator className="my-4" />
      <WorkspaceSwitcher />
      <DottedSeparator className="my-4" />
      <Navigation />
      <DottedSeparator className="my-4" />
      <Projects />
    </aside>
  );
};
