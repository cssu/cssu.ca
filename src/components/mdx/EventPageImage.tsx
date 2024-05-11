import Image from "next/image"
import sizeOf from "image-size"
import calculateImageDimensions from "@/lib/calculateImageDimensions"

import { join, normalize } from "path"
import { readFileSync } from "fs"
import { getPlaiceholder } from "plaiceholder"

const DEFAULT_IMAGE_HEIGHT = 512

type EventPageImageProps = {
    src?: string
    alt?: string
    contentType: string
    contentName: string
}

export default async function EventPageImage({
    src,
    alt,
    contentType,
    contentName,
}: EventPageImageProps) {
    if (!src) {
        console.error(`Image source not provided in ${contentType}/${contentName}`)
        throw new Error(`Image source not provided in ${contentType}/${contentName}`)
    }

    const isRemote = src.startsWith("http")

    if (isRemote) {
        console.warn(
            "\x1b[33m[Warning]\x1b[0m %s",
            `Image ${src} in ${contentType}/${contentName} is remote. This is not recommended! Consider downloading the image and adding it to the content directory.`
        )
        // eslint-disable-next-line @next/next/no-img-element
        return <img src={src} alt={alt} />
    } else {
        const imageUri = join(
            process.cwd(),
            `./public/build-images/${contentType}/${contentName}/${src}`
        )
        const { width, height } = sizeOf(imageUri)
        const buffer = readFileSync(imageUri)
        const { base64 } = await getPlaiceholder(buffer)

        if (!width || !height) {
            console.error(`Image ${src} not found in ${contentType}/${contentName}`)
            throw new Error(`Image ${src} not found in ${contentType}/${contentName}`)
        }

        const { newWidth, newHeight } = calculateImageDimensions(
            width,
            height,
            DEFAULT_IMAGE_HEIGHT
        )

        // Modify the src so that it is mapped to /build-images/<contentType>/<contentName>/<src>.
        // For example, this could be `/build-images/events/ai-and-ethics/aiethics.png`.
        // The images in content are copied to public/build-images by webpack.
        return (
            <Image
                src={normalize(`/build-images/${contentType}/${contentName}/${src}`)}
                alt={alt || "Event image"}
                height={newHeight}
                width={newWidth}
                placeholder="blur"
                blurDataURL={base64}
                className="m-auto"
            />
        )
    }
}
