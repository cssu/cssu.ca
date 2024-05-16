import { readFileSync } from 'fs'

import sizeOf from 'image-size'
import Image from 'next/image'
import { getPlaiceholder } from 'plaiceholder'

type EventBannerProps = {
    title: string
    image?: string
    absoluteImagePath?: string
}

export default async function EventBanner({ title, image, absoluteImagePath }: EventBannerProps) {
    if (image && absoluteImagePath) {
        const buffer = readFileSync(absoluteImagePath)
        const { base64 } = await getPlaiceholder(buffer)

        const { width, height } = sizeOf(absoluteImagePath)

        return (
            <Image
                src={image}
                className="absolute block w-auto h-full m-auto object-contain inset-0"
                alt={`Image describing ${title}`}
                placeholder="blur"
                blurDataURL={base64}
                width={width}
                height={height}
                quality={5}
                priority
            />
        )
    } else {
        return (
            <Image
                src="/horizontal_logo_black.png"
                className="h-auto m-auto object-contain"
                alt="CSSU placeholder logo"
                quality={10}
                priority
                fill
            />
        )
    }
}
