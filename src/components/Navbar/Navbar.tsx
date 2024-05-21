import { cn } from "@/helpers/cn";
import {
  AwardIcon,
  GamepadIcon,
  HomeIcon,
  RouteIcon,
  SmileIcon,
} from "../Icons/Icons";

type NavbarProps = React.ComponentProps<"nav">;
type NavbarListProps = React.ComponentProps<"ul">;
type NavbarListItemProps = React.ComponentProps<"li">;

const NavbarList = ({ children, className, ...props }: NavbarListProps) => {
  return (
    <ul
      className={cn(
        "my-4 border-t border-indigo-400/20 hover:border-indigo-400/40",
        className,
      )}
      {...props}
    >
      {children}
    </ul>
  );
};

const NavbarListItem = ({
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
        <NavbarListItem>
          <HomeIcon className="h-4 w-4" />
          Home
        </NavbarListItem>

        <NavbarListItem>
          <GamepadIcon className="h-4 w-4" />
          Games
        </NavbarListItem>

        <NavbarListItem>
          <AwardIcon className="h-4 w-4" />
          Top 10
        </NavbarListItem>

        <NavbarListItem>
          <RouteIcon className="h-4 w-4" />
          Walktrought
        </NavbarListItem>
      </NavbarList>

      <NavbarList>
        <NavbarListItem>
          <SmileIcon className="h-4 w-4" /> User
        </NavbarListItem>
      </NavbarList>
    </nav>
  );
};
