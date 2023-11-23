"use client";

import { PRODUCT_CATEGORIES } from "@/config";
import { useRef, useState } from "react";
import NavItem from "./NavItem";
import { useOnClickOutside } from "@/hooks/use-on-click-outside";

const NavItems = () => {
  const [activeIndex, setActiveIndex] = useState<null | number>(null);

  const isAnyOpen = activeIndex !== null;

  const navRef = useRef<HTMLDivElement | null>(null);

  useOnClickOutside(navRef, () => setActiveIndex(null));

  return (
    <div ref={navRef} className="flex gap-4 h-full">
      {PRODUCT_CATEGORIES.map((category, index) => {
        const handleOpen = () => {
          if (activeIndex === index) setActiveIndex(null);
          else setActiveIndex(index);
        };

        const isOpen = index === activeIndex;

        return <NavItem key={index} category={category} handleOpen={handleOpen} isOpen={isOpen} isAnyOpen={isAnyOpen} />;
      })}
    </div>
  );
};

export default NavItems;
