import { cn } from "@/helpers/cn";
import { NavbarListItemProps } from "./types.d";

export const NavbarListItem = ({
  children,
  className,
  ...props
}: NavbarListItemProps) => {
  return (
    <li
      className={cn(
        "my-2 flex cursor-pointer items-center gap-2 rounded bg-transparent p-2 hover:bg-indigo-400/40 hover:text-slate-100",
        className,
      )}
      {...props}
    >
      {children}
    </li>
  );
};
