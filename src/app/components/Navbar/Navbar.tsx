export const Navbar = () => {
  return (
    <nav className="flex h-screen w-72 flex-col gap-4 border-r  border-indigo-400/40  bg-slate-900 p-2 hover:border-indigo-400/80">
      <div>
        <img
          className="max-w-full p-2 "
          src="https://emersonbroga.com/e/assets/emersonbroga-logo-name-pink.png"
          alt="logo"
        />
      </div>
      <ul className="my-4 flex-grow border-t  border-indigo-400/20 hover:border-indigo-400/40">
        <li className=" my-2 cursor-pointer rounded bg-transparent p-2 hover:bg-slate-800">
          Home
        </li>
        <li className=" my-2 cursor-pointer rounded bg-transparent p-2 hover:bg-slate-800">
          Games
        </li>
        <li className=" my-2 cursor-pointer rounded bg-transparent p-2 hover:bg-slate-800">
          Top 10
        </li>
        <li className=" my-2 cursor-pointer rounded bg-transparent p-2 hover:bg-slate-800">
          Walktrought
        </li>
      </ul>

      <ul className=" my-4 border-t border-indigo-400/20 hover:border-indigo-400/40">
        <li className=" my-2 cursor-pointer rounded bg-transparent p-2 hover:bg-slate-800">
          User
        </li>
      </ul>
    </nav>
  );
};
