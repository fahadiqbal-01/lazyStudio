"use client";
import Container from "./container";
import React from "react";
import List from "./list";
import ListItems from "./listItems";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBarContents() {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Why Us", href: "/whyUs" },
    { name: "Blog", href: "/blog" },
  ];

  const patchname = usePathname();

  return (
    <Container className=" flex justify-between items-center py-4 relative ">
      <Link href="/">
        <img src="images/logosec.png" className=" w-55 " />
      </Link>
      <List>
        {navLinks.map((link) => (
          <Link
            className={` border-b-4  ${
              patchname === link.href
                ? " border-sec hover:border-transparent duration-300 ease-out "
                : " border-transparent "
            } `}
            key={link.href}
            href={link.href}
          >
            <ListItems>{link.name}</ListItems>
          </Link>
        ))}
      </List>
      <Link
        href="/contact"
        id="navBarButton"
        className=" px-18 py-7 bg-sec rounded-full text-black overflow-hidden cursor-pointer z-10 drop-shadow-none group relative "
      >
        <span
          className=" font-satoshiBold text-[20px] font-semibold text-white z-50 cursor-pointer absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]
        group-hover:top-100 duration-300 ease-in-out pointer-events-none "
        >
          Contact
        </span>
        <span
          className=" font-satoshiBold text-[20px] font-semibold text-white z-50 cursor-pointer absolute -top-100 left-[50%] translate-x-[-50%] 
        group-hover:top-[50%] group-hover:translate-y-[-50%] duration-300 ease-in-out pointer-events-none "
        >
          Hi
        </span>

        <div
          id="fadeOut"
          className=" h-15 w-full bg-black absolute left-[50%] top-[50%] 
                        translate-x-[-50%] translate-y-[-50%] rounded-full -z-20 cursor-pointer
                        group-hover:-left-5 group-hover:scale-150 transition-all duration-500 "
        ></div>
      </Link>
    </Container>
  );
}
