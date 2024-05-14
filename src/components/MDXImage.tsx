import { readFileSync } from 'fs'

import sizeOf from 'image-size'
import Image from 'next/image'
import { getPlaiceholder } from 'plaiceholder'

import calculateImageDimensions from '@/lib/calculateImageDimensions'
import mapToImage from '@/lib/mapToImage'

const DEFAULT_IMAGE_HEIGHT = 512

type MDXImageProps = {
    src?: string
    alt?: string
    mdxFolderPath: string
}

export default async function MDXImage({ src, alt, mdxFolderPath }: MDXImageProps) {
    if (!src) {
        console.error('\x1b[31m[Error]\x1b[0m %s', `Image source not provided in ${src}`)
        throw new Error(`Image source not provided in ${src}`)
    }

    const isRemote = src.startsWith('http')

    if (isRemote) {
        console.warn(
            '\x1b[33m[Warning]\x1b[0m %s',
            `Image ${src} in ${mdxFolderPath} is remote. ` +
                'This is not recommended! Consider downloading the image and adding ' +
                'it to the content directory, or wrapping the image in a SmartImage component ' +
                'to disable image optimization explicitly and still use the image remotely.'
        )
        // eslint-disable-next-line @next/next/no-img-element
        return <img src={src} alt={alt} />
    } else {
        const { nextImagePath, absoluteImagePath } = mapToImage(mdxFolderPath, src)
        const { width, height } = sizeOf(absoluteImagePath)
        const buffer = readFileSync(absoluteImagePath)
        const { base64 } = await getPlaiceholder(buffer)

        if (!width || !height) {
            console.error(
                '\x1b[31m[Error]\x1b[0m %s',
                `Image ${src} not found in ${absoluteImagePath}.`
            )
            throw new Error(`Image ${src} not found in ${absoluteImagePath}.`)
        }

        const { newWidth, newHeight } = calculateImageDimensions(
            width,
            height,
            DEFAULT_IMAGE_HEIGHT
        )

        return (
            <Image
                src={nextImagePath}
                alt={alt || 'Event image'}
                height={newHeight}
                width={newWidth}
                placeholder="blur"
                blurDataURL={base64}
                className="m-auto"
            />
        )
    }
}
