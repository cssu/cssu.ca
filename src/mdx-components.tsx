import type { MDXComponents } from "mdx/types"
import Link from "next/link"

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        a: ({ children, href }) =>
            href && (href.startsWith("/") || href.startsWith(".")) ? (
                <Link href={href}> {children} </Link>
            ) : (
                <a
                    href={href}
                    target={href?.startsWith("mailto:") ? "_self" : "_blank"}
                    rel="noopener noreferrer"
                >
                    {children}
                </a>
            ),
        // p: ({ children }) => <p className=" text-base">{children}</p>,
        // a: ({ children, href }) => (
        //     <a
        //         className="text-[#3273dc] cursor-pointer decoration-inherit"
        //         href={href}
        //         target="_blank"
        //         rel="noopener noreferrer"
        //     >
        //         {children}
        //     </a>
        // ),
        // h1: ({ children }) => <h1 className="text-[#363636] font-semibold text-4xl">{children}</h1>,
        // h2: ({ children }) => <h1 className="text-[#363636] font-semibold text-lg">{children}</h1>,
        ...components,
    }
}
