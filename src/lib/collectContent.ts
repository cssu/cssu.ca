import { existsSync, lstatSync, readFileSync, readdirSync } from 'fs'
import { join } from 'path'

import matter from 'gray-matter'
import { compileMDX } from 'next-mdx-remote/rsc'
import { createElement } from 'react'

import EventPageImage from '@/components/EventPageImage'
import SmartImage from '@/components/mdx/SmartImage'
import MDXLink from '@/components/MDXLink'

export function getContentPaths(contentType: string): string[] {
    const files = []

    const dir = join(process.cwd(), `./content/${contentType}/`)

    for (const subdirectory of readdirSync(dir)) {
        if (lstatSync(join(dir, subdirectory)).isDirectory()) {
            files.push(subdirectory)
        }
    }

    return files
}

export function getMdxSource(contentType: string, contentName: string): string | undefined {
    const filePath = join(process.cwd(), `./content/${contentType}/`, contentName, 'index.mdx')
    if (existsSync(filePath)) {
        const content = readFileSync(filePath, 'utf8')
        return content
    } else {
        console.warn(
            '\x1b[33m[Warning]\x1b[0m %s',
            `Warning: No index.mdx file found in ${filePath}. ` +
                `Consider renaming the MDX file in ${contentName} folder to index.mdx.`
        )

        const dir = join(process.cwd(), `./content/${contentType}/`, contentName)
        if (!lstatSync(dir).isDirectory()) {
            return undefined
        }

        for (const file of readdirSync(dir)) {
            if (file.endsWith('.mdx')) {
                const content = readFileSync(join(dir, file), 'utf8')
                return content
            }
        }

        return undefined
    }
}

export async function compilePostMDX(
    contentType: string,
    contentName: string,
    mdxSource: string
): Promise<{
    content: React.ReactElement<any, string | React.JSXElementConstructor<any>>
    frontmatter: any
}> {
    return await compileMDX({
        source: mdxSource,
        options: { parseFrontmatter: true },
        components: {
            SmartImage: (props) =>
                // I didn't want to mark this a `tsx` file. So, the code:
                // <SmartImage {...props}
                //      overriddenContentType={contentType}
                //      overriddenContentSubdirectory={contentName}
                //  />
                // is equal to:
                createElement(SmartImage, {
                    ...props,
                    overriddenContentType: contentType,
                    overriddenContentSubdirectory: contentName,
                }),
            img: ({ src, alt }) =>
                // <EventPageImage
                //     src={src}
                //     alt={alt}
                //     contentType={contentType}
                //     contentName={contentName}
                //  />
                createElement(EventPageImage, {
                    src: src, // normalization is handled in the component
                    alt: alt,
                    contentType: contentType,
                    contentName: contentName,
                }),
            a: ({ children, href }) =>
                createElement(
                    MDXLink,
                    {
                        href,
                    },
                    children
                ),
        },
    })
}

export function getAllFrontMatter(contentType: string) {
    const frontMatters = []
    const dir = join(process.cwd(), `./content/${contentType}/`)

    for (const subdirectory of readdirSync(dir)) {
        const frontMatter = getFrontMatter(contentType, subdirectory)
        if (frontMatter) {
            frontMatter.eventDirectory = subdirectory
            frontMatters.push(frontMatter)
        }
    }
    return frontMatters.sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime()
    })
}

function getFrontMatter(contentType: string, contentName: string) {
    const filePath = join(process.cwd(), `./content/${contentType}/`, contentName, 'index.mdx')
    if (existsSync(filePath)) {
        const content = readFileSync(filePath, 'utf8')
        const { data } = matter(content)
        return data
    } else {
        const dir = join(process.cwd(), `./content/${contentType}/`, contentName)

        if (!lstatSync(dir).isDirectory()) {
            return undefined
        }

        console.warn(
            '\x1b[33m[Warning]\x1b[0m %s',
            `Warning: No index.mdx file found in ${filePath}. ` +
                `Consider renaming the MDX file in ${contentName} folder to index.mdx.`
        )

        for (const file of readdirSync(dir)) {
            if (file.endsWith('.mdx')) {
                const content = readFileSync(join(dir, file), 'utf8')
                const { data } = matter(content)
                return data
            }
        }

        return undefined
    }
}
