import matter from 'gray-matter'
import { notFound } from 'next/navigation'

import InformationPage from '@/components/InformationPage'
import { compilePostMDX, getContentPaths, getMdxSource } from '@/lib/collectContent'

const PAGE_TYPE = 'events'

export function generateStaticParams() {
    const paths = getContentPaths(PAGE_TYPE)
    return paths.map((path) => {
        return {
            eventName: path,
        }
    })
}

export async function generateMetadata({ params }: { params: { eventName: string } }) {
    const { mdxSource } = getMdxSource(PAGE_TYPE, params.eventName)

    if (!mdxSource) {
        return {
            title: 'Not Found',
            description: 'The event you are looking for does not exist.',
        }
    }

    const frontMatter = matter(mdxSource).data

    return {
        title: frontMatter.title,
        description: frontMatter.summary || frontMatter.title || '',
    }
}

type EventProps = {
    eventName: string
}

export default async function Event({ params }: { params: EventProps }) {
    const { eventName } = params

    const { mdxSource, mdxFolderPath } = getMdxSource(PAGE_TYPE, eventName)

    // See the end of file for comments on this.
    if (!mdxSource || !mdxFolderPath) {
        return notFound()
    }

    const { content, frontmatter } = await compilePostMDX(mdxSource, mdxFolderPath)

    return <InformationPage metadata={frontmatter}>{content}</InformationPage>
}

/*
From Next.js docs:

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
export const dynamic = 'force-static'
