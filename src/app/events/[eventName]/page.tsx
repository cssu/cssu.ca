import cardPageFactory from "@/lib/cardPageFactory"

const { componentBody, generateStaticParams } = cardPageFactory("./content/events/", "eventName")

export { generateStaticParams }

type EventProps = {
    eventName: string
}

export default async function Event({ params }: { params: EventProps }) {
    const { eventName } = params

    return componentBody(eventName)
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
