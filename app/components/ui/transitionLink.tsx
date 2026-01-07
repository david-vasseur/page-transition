"use client";

import { usePathname, useRouter } from "next/navigation";
import gsap from "gsap";

type TransitionLinkProps =
    React.AnchorHTMLAttributes<HTMLAnchorElement> & {
        href: string;
    };

export default function TransitionLink({
    href,
    children,
    className,
    ...props
}: TransitionLinkProps) {
    const router = useRouter();
    const pathname = usePathname();    

    const handleClick = async (e: React.MouseEvent) => {
        e.preventDefault();

        if (href === pathname) return;

        await gsap
        .timeline()
        .to(".panel-top", {
            scaleY: 1,
            stagger: {
            each: 0.1,
            from: "start",
            axis: "x",
            },
            duration: 0.8,
            ease: "expo.inOut",
        })
        .to(
            ".panel-bottom",
            {
            scaleY: 1,
            stagger: {
                each: 0.1,
                from: "start",
                axis: "x",
            },
            duration: 0.8,
            ease: "expo.inOut",
            },
            "<" 
        )
        .then();

        router.push(href);
    };

    const handleClickMobile = async (e: React.MouseEvent) => {
        e.preventDefault();

        if (href === pathname) return;

        await gsap
        .timeline()
        .set(".panel-mobile", {
            transformOrigin: "left",
        })
        .to(".panel-mobile", {
            scaleX: 1,
            stagger: {
                each: 0.1,
                from: "start",
                axis: "x",
            },
            duration: 0.8,
            ease: "expo.inOut",
        })
        .then();

        router.push(href);
    };

    return (
        <>
            <a href={href} onClick={handleClick} {...props} className={`hidden lg:block ${className ?? ""} font-semibold`}>
                {children}
            </a>
            <a tabIndex={0} role="link" onClick={handleClickMobile} {...props} className={`lg:hidden ${className ?? ""} font-semibold`}>
                {children}
            </a>
        </>
    );
}
