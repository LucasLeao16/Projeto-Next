import { cn } from "@/helpers/cn";
import Link from "next/link";
import { NavbarListItem } from "./NavbarListItem";
import { NavbarListItemLinkProps } from "./types.d";

export const NavbarListItemLink = ({
  href,
  children,
  className,
  ...props
}: NavbarListItemLinkProps) => {
  return (
    <NavbarListItem className={cn("p-0", className)}>
      <Link
        href={href}
        className="flex w-full items-center gap-2 rounded-lg p-2"
        {...props}
      >
        {children}
      </Link>
    </NavbarListItem>
  );
};
