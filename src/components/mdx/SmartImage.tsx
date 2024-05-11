import { readFileSync } from 'fs'
import { join, normalize } from 'path'

import sizeOf from 'image-size'
import Image from 'next/image'
import { getPlaiceholder } from 'plaiceholder'

import calculateImageDimensions from '@/lib/calculateImageDimensions'

type SmartImageProps = {
    src: string
    alt: string
    centered?: boolean
    overriddenContentType?: string
    overriddenContentSubdirectory?: string
    scaleTo?: number
    noSpace?: boolean
    unoptimized?: boolean
}

export default async function SmartImage({
    src,
    alt,
    centered = false,
    overriddenContentType,
    overriddenContentSubdirectory,
    scaleTo,
    noSpace = false,
    unoptimized = false,
}: SmartImageProps) {
    // While alt is a required attribute, it is still possible to forget it in the MDX file.
    if (!alt) {
        console.error('\x1b[31m[Error]\x1b[0m %s', `Alt text not provided for image ${src}.`)
        throw new Error(`Alt text not provided for image ${src}.`)
    }

    // For the same reason as above, this error must be thrown if the src attribute is not provided.
    if (!src) {
        console.error('\x1b[31m[Error]\x1b[0m %s', 'Image source not provided.')
        throw new Error('Image source not provided.')
    }

    const isRemote = src.startsWith('http')

    if (isRemote) {
        // eslint-disable-next-line @next/next/no-img-element
        return (
            <>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={src} alt={alt} className={centered ? 'm-auto' : ''} />
                {!noSpace && <br />}
            </>
        )
    } else {
        if (src.endsWith('.gif') && !unoptimized) {
            console.error(
                '\x1b[31m[Error]\x1b[0m %s',
                'Animated images cannot optimized. Consider setting the prop ' +
                    `unoptimized={true} for ${src}. If this file is not animated, consider ` +
                    'converting it to a static image format such as PNG or JPEG/JPG.'
            )
            throw new Error(
                'Animated images cannot optimized. Consider setting the prop ' +
                    `unoptimized={true} for ${src}. If this file is not animated, consider ` +
                    'converting it to a static image format such as PNG or JPEG/JPG.'
            )
        }

        const imageUri = join(
            process.cwd(),
            `./public/build-images/${overriddenContentType}/${overriddenContentSubdirectory}/${src}`
        )
        const { width, height } = sizeOf(imageUri)
        const buffer = readFileSync(imageUri)
        const { base64 } = await getPlaiceholder(buffer)

        if (!width || !height) {
            console.error('\x1b[31m[Error]\x1b[0m %s', `Image ${src} not found`)
            throw new Error(`Image ${src} not found`)
        }

        let newWidth = width
        let newHeight = height
        if (scaleTo) {
            const result = calculateImageDimensions(width, height, scaleTo)
            newWidth = result.newWidth
            newHeight = result.newHeight
        }

        const publicImagePath = normalize(
            `/build-images/${overriddenContentType}/${overriddenContentSubdirectory}/${src}`
        )

        return (
            <>
                <Image
                    src={publicImagePath}
                    alt={alt}
                    width={newWidth}
                    height={newHeight}
                    placeholder="blur"
                    blurDataURL={base64}
                    className={centered ? 'm-auto' : ''}
                    unoptimized={unoptimized}
                />
                {!noSpace && <br />}
            </>
        )
    }
}
