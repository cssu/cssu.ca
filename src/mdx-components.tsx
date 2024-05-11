import Image from "next/image"
import MDXLink from "@/components/mdx/MDXLink"

import type { MDXComponents } from "mdx/types"
import { normalize } from "path"

// TODO: Placeholder image
export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        a: ({ children, href }) => <MDXLink href={href}>{children}</MDXLink>,
        img: ({ src, alt }) =>
            src ? (
                <Image className="object-contain" src={normalize(src)} alt={alt || ""} fill />
            ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={src} alt={alt} />
            ),
        ...components,
    }
}
