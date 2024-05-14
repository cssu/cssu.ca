import MDXLink from '@/components/MDXLink'

import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        a: ({ children, href }) => <MDXLink href={href}>{children}</MDXLink>,
        // img component is modified in the individual imports using
        // getRootComponents from '@/lib/getRootComponents'
        ...components,
    }
}
