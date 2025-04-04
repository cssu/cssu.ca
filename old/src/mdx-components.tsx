import getMDXComponents from './lib/getMDXComponents'

import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        // img component is modified in the individual imports using
        // getImgComponent from '@/lib/getMDXComponents'
        ...getMDXComponents(),
        ...components,
    }
}
