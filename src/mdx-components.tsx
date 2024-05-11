import MDXLink from "@/components/mdx/MDXLink"

import type { MDXComponents } from "mdx/types"

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        a: ({ children, href }) => <MDXLink href={href}>{children}</MDXLink>,
        // This function does not modify `Image` (from `next/Image`) or img.
        // If you want to use an image in a static page (such as /about), directly
        // import next/Image in the mdx file and use it by specifying the src,
        // alt, width, and height attributes. Put the image under the public directory.
        ...components,
    }
}
