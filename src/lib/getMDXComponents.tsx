import { join } from 'path'

import Figure from '@/components/mdx/Figure'
import MDXImage from '@/components/MDXImage'
import MDXLink from '@/components/MDXLink'

import type { MDXComponents } from 'mdx/types'

export default function getMDXComponents(): MDXComponents {
    return {
        a: ({ children, href }: { children: React.ReactNode; href: string }) => (
            <MDXLink href={href}>{children}</MDXLink>
        ),
        table: ({ children }: { children: React.ReactNode }) => (
            <div className="overflow-scroll">
                <table>{children}</table>
            </div>
        ),
        h1: ({ children }: { children: React.ReactNode }) => <h1 id="">{children}</h1>,
    } as MDXComponents
}

export function getImgComponent(pagePathOrMdxFolderPath: string) {
    return {
        img: ({ src, alt }: { src?: string; alt?: string }) => (
            <MDXImage
                src={src}
                alt={alt}
                mdxFolderPath={
                    pagePathOrMdxFolderPath.startsWith(process.cwd())
                        ? pagePathOrMdxFolderPath
                        : join(process.cwd(), 'content', pagePathOrMdxFolderPath)
                }
            />
        ),
    }
}

export function getFigureComponent(pagePathOrMdxFolderPath: string) {
    return {
        Figure: (props: any) => (
            <Figure
                {...props}
                overriddenMDXFolderPath={
                    props.overriddenMDXFolderPath ||
                    (pagePathOrMdxFolderPath.startsWith(process.cwd())
                        ? pagePathOrMdxFolderPath
                        : join(process.cwd(), 'content', pagePathOrMdxFolderPath))
                }
            />
        ),
    }
}
