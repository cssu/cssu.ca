import Link from "next/link"
import Image from "next/image"

import type { MDXComponents } from "mdx/types"

export function useMDXComponents(components: MDXComponents): MDXComponents {
    console.log(components)
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
        img: ({ src, alt }) => (
            src ? 
                <Image className="object-contain" src={src} alt={alt || ""} fill /> 
                : 
                // eslint-disable-next-line @next/next/no-img-element
                <img src={src} alt={alt} />
        ),
        ...components,
    }
}
