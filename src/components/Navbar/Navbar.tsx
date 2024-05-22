import { cn } from "@/helpers/cn";
import {
  AwardIcon,
  GamepadIcon,
  HomeIcon,
  RouteIcon,
  SmileIcon,
} from "../Icons/Icons";
import { NavbarList } from "./NavbarList";
import { NavbarListItemLink } from "./NavbarListItemLink";
import { NavbarProps } from "./types.d";

export const Navbar = ({ className, ...props }: NavbarProps) => {
  return (
    <nav
      className={cn(
        "flex h-screen w-72 flex-col border-r  border-indigo-400/20  bg-slate-900 p-2 text-slate-300 hover:border-indigo-400/40",
        className,
      )}
      {...props}
    >
      <div className="flex items-center justify-center">
        <img
          className="h-12 w-auto p-2 "
          src="https://emersonbroga.com/e/assets/emersonbroga-logo-name-pink.png"
          alt="logo"
        />
      </div>

      <NavbarList className={"flex-grow"}>
        <NavbarListItemLink href="/">
          <HomeIcon className="h-4 w-4" />
          Home
        </NavbarListItemLink>

        <NavbarListItemLink href="/games">
          <GamepadIcon className="h-4 w-4" />
          Games
        </NavbarListItemLink>

        <NavbarListItemLink href={"/top10"}>
          <AwardIcon className="h-4 w-4" />
          Top 10
        </NavbarListItemLink>

        <NavbarListItemLink href="/walktrough">
          <RouteIcon className="h-4 w-4" />
          Walktrough
        </NavbarListItemLink>
      </NavbarList>

      <NavbarList>
        <NavbarListItemLink href="/user">
          <SmileIcon className="h-4 w-4" /> User
        </NavbarListItemLink>
      </NavbarList>
    </nav>
  );
};
