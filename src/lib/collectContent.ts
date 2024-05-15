import { existsSync, lstatSync, readFileSync, readdirSync } from 'fs'
import { join } from 'path'

import matter from 'gray-matter'
import { compileMDX } from 'next-mdx-remote/rsc'

import getMDXComponents, { getImgComponent, getFigureComponent } from './getMDXComponents'

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

export function getMdxSource(
    contentType: string,
    contentName: string
): {
    mdxSource?: string
    mdxFolderPath?: string
} {
    const mdxFolderPath = join(process.cwd(), `./content/${contentType}/`, contentName)
    const filePath = join(mdxFolderPath, 'index.mdx')
    if (existsSync(filePath)) {
        const content = readFileSync(filePath, 'utf8')
        return { mdxSource: content, mdxFolderPath }
    } else {
        console.error(
            '\x1b[31m[Error]\x1b[0m %s',
            `Error: No index.mdx file found in ${filePath}. ` +
                `Consider renaming the MDX file in ${contentName} folder to index.mdx.`
        )

        throw new Error(`No index.mdx file found in ${filePath}`)
    }
}

export async function compilePostMDX(
    mdxSource: string,
    mdxFolderPath: string
): Promise<{
    content: React.ReactElement<any, string | React.JSXElementConstructor<any>>
    frontmatter: any
}> {
    return await compileMDX({
        source: mdxSource,
        options: { parseFrontmatter: true },
        components: {
            ...getImgComponent(mdxFolderPath),
            ...getFigureComponent(mdxFolderPath),
            ...getMDXComponents(),
        },
    })
}

export function getAllFrontMatter(contentType: string): {
    frontMatter: any
    mdxFolderPath: string
    eventDirectory: string
}[] {
    const frontMattersAndPaths = []
    const dir = join(process.cwd(), `./content/${contentType}/`)

    for (const subdirectory of readdirSync(dir)) {
        const frontMatter = getFrontMatter(contentType, subdirectory)
        if (frontMatter) {
            frontMattersAndPaths.push({
                frontMatter,
                mdxFolderPath: join(dir, subdirectory),
                eventDirectory: subdirectory,
            })
        }
    }
    return frontMattersAndPaths.sort((a, b) => {
        return new Date(b.frontMatter.date).getTime() - new Date(a.frontMatter.date).getTime()
    })
}

function getFrontMatter(contentType: string, contentName: string) {
    const filePath = join(process.cwd(), `./content/${contentType}/`, contentName, 'index.mdx')
    if (existsSync(filePath)) {
        const { data } = matter.read(filePath)
        return data
    } else {
        const dir = join(process.cwd(), `./content/${contentType}/`, contentName)

        if (!lstatSync(dir).isDirectory()) {
            return undefined
        }

        console.error(
            '\x1b[31m[Warning]\x1b[0m %s',
            `Error: No index.mdx file found in ${filePath}. ` +
                `Consider renaming the MDX file in ${contentName} folder to index.mdx.`
        )

        throw new Error(`No index.mdx file found in ${filePath}`)
    }
}
