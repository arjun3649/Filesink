import Image from "next/image";
import Link from "next/link";
import { SignInButton, SignedOut, UserButton } from "@clerk/nextjs";
import { ThemeToggler } from "./ThemeToggler";

function Header() {
  return (
    <header className="flex items-center justify-between">
      <Link href="/" className="flex items-center space-x-2">
        <div className="bg-[#0160FE] w-fit">
          <Image
            alt="Dropbox Logo"
            src="https://us.123rf.com/450wm/ibrandify/ibrandify1810/ibrandify181007507/118235768-upload-folder-icon-vector-dersign.jpg?ver=6"
            className="invert"
            height={50}
            width={50}
          />
        </div>
        <h1 className="font-bold text-xl">Filesink</h1>
      </Link>
      <div className="px-5 flex space-x-2 items-center">
        <ThemeToggler />
        <UserButton afterSignOutUrl="/" />
        <SignedOut>
          <SignInButton afterSignInUrl="/dashboard" mode="modal" />
        </SignedOut>
      </div>
    </header>
  );
}

export default Header;
