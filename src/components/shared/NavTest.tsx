"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { protectedRoutes } from "@/constants";
import { useUser } from "@/context/UserContext";
import { logout } from "@/services/AuthService";
import { LogOut } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Button } from "../ui/button";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, setIsLoading } = useUser();
  const pathname = usePathname();
  const router = useRouter();

  const handleLogOut = () => {
    logout();
    setIsLoading(true);
    if (protectedRoutes.some((route) => pathname.match(route))) {
      router.push("/");
      setIsLoading(false);
    }
  };

  return (
    <nav className="bg-slate-800 text-white shadow-lg sticky w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link href="/">
          <div className="text-2xl font-bold cursor-pointer flex gap-2">
            <span className="text-4xl">
              <Image width={30} height={30} src="/logo.png" alt="logo" />
            </span>{" "}
            Car Repair 360
          </div>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-lg">
          <li>
            <Link
              href="/"
              className={`hover:text-green-400 ${
                pathname === "/" ? "text-green-400" : ""
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <DropdownMenu>
              <DropdownMenuTrigger>Parts </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Engine</DropdownMenuItem>
                <DropdownMenuItem>Brakes</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </li>
          <li>
            <DropdownMenu>
              <DropdownMenuTrigger>Services</DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Repair</DropdownMenuItem>
                <DropdownMenuItem>Maintenance</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </li>
          <li>
            <Link
              href="/contact"
              className={`hover:text-green-400 ${
                pathname === "/contact" ? "text-green-400" : ""
              }`}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={`hover:text-green-400 ${
                pathname === "/contact" ? "text-green-400" : ""
              }`}
            >
              Contact Us
            </Link>
          </li>
        </ul>

        {user?.email ? (
          <>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>User</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link href={`/${user?.role}/dashboard`}>Dashboard</Link>
                </DropdownMenuItem>

                <DropdownMenuSeparator />
                <DropdownMenuItem
                  className="hover:text-red-500 cursor-pointer"
                  onClick={handleLogOut}
                >
                  <LogOut />
                  <span>Log Out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </>
        ) : (
          <Link href="/login">
            <Button className="rounded-full bg-slate-800 text-white hover:text-green-400 hover:cursor-pointer">
              Login
            </Button>
          </Link>
        )}

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <AiOutlineClose size={28} />
          ) : (
            <AiOutlineMenu size={28} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-slate-700 p-4 absolute w-full">
          <ul className="flex flex-col space-y-4 text-lg text-center">
            <li>
              <Link href="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/rental"
                className={`hover:text-green-400 ${
                  pathname === "/rental" ? "text-green-400" : ""
                }`}
              >
                Rental House
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`hover:text-green-400 ${
                  pathname === "/about" ? "text-green-400" : ""
                }`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`hover:text-green-400 ${
                  pathname === "/contact" ? "text-green-400" : ""
                }`}
              >
                About
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
