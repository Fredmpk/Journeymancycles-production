import Link from "next/link";
import { BurgerMenu } from "./burger-menu";

export default function Navbar() {
  return (
    <div className="w-full !bg-zinc-400">
      <nav className="">
        <ul className="!bg-red-300">
          <li>
            <Link href="/#skills" className="text-red-500">
              skills
            </Link>
          </li>
          <li>
            <Link href="/#bio">bio</Link>
          </li>

          <li>
            <Link href="/#projects">projekte lala bu bu</Link>
          </li>
          {/* <li>
            <a href="#">kontakt</a>
          </li> */}
        </ul>
        {/* <BurgerMenu /> */}
      </nav>
    </div>
  );
}
