"use client";
import React from "react";
import Link from "next/link";
import ThemeToggler from "./ThemeToggler";

//     const [active, setActive] = useState<string | null>(null);
//   return (
//     <div
//     className={cn("fixed top-7 inset-x-0 max-w-2xl mx-auto z-50", className)}
//     >
//       <Menu setActive={setActive}>
//         <Link href={"/"}>
//         <MenuItem setActive={setActive} active={active} item="Home"></MenuItem>
//         </Link>
//         <Link href={"/projects"}>
//         <MenuItem setActive={setActive} active={active} item="Projects"></MenuItem>
//         </Link>
//         <Link href={"/contact"}>
//         <MenuItem setActive={setActive} active={active} item="Contact"></MenuItem>
//         </Link>
//         <MenuItem setActive={setActive} active={active} item="Light">
//         <SunIcon />
//         <MoonIcon />
//         </MenuItem>
//       </Menu>
//     </div>
//   )
// }

// export default Navbar

function Navbar() {
  return (
    <div className="bg-white shadow-xl w-full h-[5rem] dark:bg-neutral-900 flex justify-center items-center">
      <ul className="flex gap-6 mt-3">
        <li>
          <Link className="text-lg font-semibold text-black dark:text-white" href={"/"}>
            Home
          </Link>
        </li>
        <li>
          <Link
            className="text-lg font-semibold text-black dark:text-white"
            href={"/projects"}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            className="text-lg font-semibold text-black dark:text-white"
            href={"/contact"}
          >
            Contact
          </Link>
        </li>
        <li>
          <ThemeToggler />
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
