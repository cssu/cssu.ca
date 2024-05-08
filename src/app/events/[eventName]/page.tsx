import InformationPage from "@/components/InformationPage"
import remarkMdxImages from "remark-mdx-images"
import remarkGfm from "remark-gfm"

import { existsSync, readFileSync, readdirSync } from "fs"
import { join } from "path"
import { notFound } from "next/navigation"
import { bundleMDX } from "mdx-bundler"
import { getMDXComponent } from "mdx-bundler/client"

function getEventPaths(): string[] {
    const files = []

    const dir = join(process.cwd(), "./content/events/")

    for (const subdirectory of readdirSync(dir)) {
        files.push(subdirectory)
    }
    return files
}

async function getMdxSource(eventName: string): Promise<string | undefined> {
    const filePath = join(process.cwd(), "./content/events/", eventName, "index.mdx")
    if (!existsSync(filePath)) {
        return undefined
    }

    try {
        const content = readFileSync(filePath, "utf8")
        return content
    } catch (e) {
        console.error(
            `No index.mdx file found in ${filePath}. Consider renaming the MDX file in ${eventName} folder to index.mdx`
        )
        const dir = join(process.cwd(), "./content/events/", eventName)

        for (const file of readdirSync(dir)) {
            if (file.endsWith(".mdx")) {
                const content = readFileSync(join(dir, file), "utf8")
                return content
            }
        }

        return undefined
    }
}

export function generateStaticParams() {
    const paths = getEventPaths()
    return paths.map(path => {
        return {
            params: {
                eventName: path,
            },
        }
    })
}

type EventProps = {
    eventName: string
}

export default async function Event({ params }: { params: EventProps }) {
    const { eventName } = params

    const mdxSource = await getMdxSource(eventName)

    // See the end of file for comments on this.
    if (!mdxSource) {
        return notFound()
    }

    const { code, frontmatter } = await bundleMDX({
        source: mdxSource,
        cwd: join(process.cwd(), "./content/events/", eventName),
        mdxOptions: options => ({
            ...options,
            remarkPlugins: [...(options.remarkPlugins || []), remarkGfm, remarkMdxImages],
        }),
        esbuildOptions: options => ({
            ...options,
            outdir: join(process.cwd(), "./public/build-post-images/content/posts/", eventName),
            loader: {
                ...options.loader,
                ".png": "file",
                ".jpeg": "file",
                ".jpg": "file",
            },
            publicPath: `/build-post-images/content/posts/${eventName}`,
            write: true,
        }),
    })

    const MdxComponent = getMDXComponent(code)

    return (
        <InformationPage metadata={frontmatter}>
            <MdxComponent />
        </InformationPage>
    )
}

/*
Straight from Next.js docs:

false: Dynamic segments not included in generateStaticParams will return a 404.
This means that we are not going to perform an FS call. The above code with the notFoud()
check is mostly to display what is going on. It won't be called, and not found will be automatically
returned as a missing event will not be rendered in generateStaticParams.

If, for some reason, the content is now managed dynamically, remove the dynamicParams export
(or set it to true; that is more explicit!) and export const revalidate = [number] to revalide
the page (optimization). If this happens to be problematic remove the revalidate export as well.

https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config
*/
export const dynamicParams = false

// https://nextjs.org/docs/messages/app-static-to-dynamic-error
export const dynamic = "force-static"