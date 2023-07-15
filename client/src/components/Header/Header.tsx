"use client";

import "./Header.scss";

import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/images/logo.png";
import { usePathname } from "next/navigation";

export interface IHeaderProps {}

export function Header(props: IHeaderProps) {
  const pathname = usePathname();

  if (pathname === "/auth/signin") return <></>;
  if (pathname === "/auth/signup") return <></>;

  return (
    <header>
      <div className="header_wrapper">
        <Image priority src={logo} alt="logo" width={0} height={0} />

        <ul className="header_menu">
          <li>Movie</li>
          <li>Member</li>
          <li>Cinema</li>
          <li>Career</li>
        </ul>

        <Link rel="preload" href="/auth/signin">
          Sign In
        </Link>
      </div>
    </header>
  );
}
