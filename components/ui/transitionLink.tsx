"use client";

import React, { forwardRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import gsap from "gsap";
import { useMobileStore } from "@/lib/stores/mobileStore";

type TransitionLinkProps =
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

const TransitionLink = forwardRef<HTMLAnchorElement, TransitionLinkProps>(
  ({ href, children, className, onClick, ...props }, ref) => {
    const router = useRouter();
    const pathname = usePathname();
    const { isMobile } = useMobileStore();

    const handleClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();

      onClick?.(e);

      if (href === pathname) return;

      if (isMobile) {
        await gsap
          .timeline()
          .set(".panel-mobile", { transformOrigin: "left" })
          .to(".panel-mobile", {
            scaleX: 1,
            stagger: { each: 0.1, from: "start", axis: "x" },
            duration: 0.8,
            ease: "expo.inOut",
          })
          .then();
      } else {
        await gsap
          .timeline()
          .to(".panel-top", {
            scaleY: 1,
            stagger: { each: 0.1, from: "start", axis: "x" },
            duration: 0.8,
            ease: "expo.inOut",
          })
          .to(
            ".panel-bottom",
            {
              scaleY: 1,
              stagger: { each: 0.1, from: "start", axis: "x" },
              duration: 0.8,
              ease: "expo.inOut",
            },
            "<"
          )
          .then();
      }

      router.push(href);
    };

    return (
      <a
        ref={ref}
        href={href}
        onClick={handleClick}
        {...props}
        className={`${className ?? ""} font-semibold`}
      >
        {children}
      </a>
    );
  }
);

TransitionLink.displayName = "TransitionLink";

export default TransitionLink;
