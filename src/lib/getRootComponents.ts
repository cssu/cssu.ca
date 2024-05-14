import { join } from 'path'

import { createElement } from 'react'

import MDXImage from '@/components/MDXImage'

export default function getRootComponents(pagePath: string) {
    return {
        img: ({ src, alt }: { src?: string; alt?: string }) =>
            createElement(MDXImage, {
                src,
                alt,
                mdxFolderPath: join(process.cwd(), 'content', pagePath),
            }),
    }
}
