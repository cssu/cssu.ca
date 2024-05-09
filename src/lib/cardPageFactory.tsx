import InformationPage from "@/components/InformationPage"

import { existsSync, lstatSync, readFileSync, readdirSync } from "fs"
import { join } from "path"
import { notFound } from "next/navigation"
import { compileMDX } from "next-mdx-remote/rsc"

export default function cardPageFactory(folderPath: string, slug: string) {
    const getPaths = (): string[] => {
        const files = []

        const dir = join(process.cwd(), folderPath)

        for (const subdirectory of readdirSync(dir)) {
            if (lstatSync(join(dir, subdirectory)).isDirectory()) {
                files.push(subdirectory)
            }
        }

        return files
    }

    const getMdxSource = (slug: string): string | undefined => {
        const filePath = join(process.cwd(), folderPath, slug, "index.mdx")
        if (existsSync(filePath)) {
            const content = readFileSync(filePath, "utf8")
            return content
        } else {
            console.warn(
                `Warning: No index.mdx file found in ${filePath}. Consider renaming the MDX file in ${slug} folder to index.mdx`
            )

            const dir = join(process.cwd(), folderPath, slug)
            if (!lstatSync(dir).isDirectory()) {
                return undefined
            }

            for (const file of readdirSync(dir)) {
                if (file.endsWith(".mdx")) {
                    const content = readFileSync(join(dir, file), "utf8")
                    return content
                }
            }

            return undefined
        }
    }

    const generateStaticParams = (): { [key: string]: string }[] => {
        const paths = getPaths()
        return paths.map(path => {
            return {
                [slug]: path,
            }
        })
    }

    const componentBody = async (slug: string) => {
        const mdxSource = getMdxSource(slug)

        // See the end of file for comments on this.
        if (!mdxSource) {
            return notFound()
        }

        const { content, frontmatter } = await compileMDX({
            source: mdxSource,
            options: { parseFrontmatter: true },
            components: {
                img: ({ src, alt }) => (
                    // Modify the src so that it is mapped to /build-images/events/<eventName>/<src>.
                    // The images in content are copied to public/build-images by webpack.
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={`/build-images/events/${slug}/${src}`} alt={alt} />
                    // TODO: Convert img to next/Image
                ),
            },
        })

        return <InformationPage metadata={frontmatter}>{content}</InformationPage>
    }

    return { componentBody, generateStaticParams }
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

/*

The exports below are handled individually in each page file. They are here for reference.

export const dynamicParams = false

// https://nextjs.org/docs/messages/app-static-to-dynamic-error
export const dynamic = "force-static"
*/
