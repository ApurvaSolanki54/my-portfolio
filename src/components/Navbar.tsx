'use client'
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem} from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Navbar = ({ className }: { className?: string }) => {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
        <Menu setActive={setActive}>
            <Link href={"/"}>
            <MenuItem setActive={setActive} active={active} item="Home"></MenuItem>
            </Link>
            <MenuItem setActive={setActive} active={active} item="Projects">
            <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/project">All Projects</HoveredLink>
                <HoveredLink href="/project">Lightron</HoveredLink>
                <HoveredLink href="/project">Code Kitchen</HoveredLink>
                <HoveredLink href="/project">Find-Mate</HoveredLink>
                <HoveredLink href="/project">Taru Foundation</HoveredLink>
            </div>
            </MenuItem>
            <Link href={"/contact"}>
            <MenuItem setActive={setActive} active={active} item="Contact me"></MenuItem>
            </Link>
        </Menu>
        </div>
    )
}

export default Navbar
