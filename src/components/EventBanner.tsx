import { readFileSync } from 'fs'

import sizeOf from 'image-size'
import Image from 'next/image'
import { getPlaiceholder } from 'plaiceholder'

import HorizontalLogoBlack from '@/../public/horizontal_logo_black.png'

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
                className="block mx-auto w-auto h-full object-contain"
                alt={title}
                placeholder="blur"
                blurDataURL={base64}
                width={width}
                height={height}
                quality={10}
                priority
            />
        )
    } else {
        return (
            <Image
                src={HorizontalLogoBlack}
                className="block mx-auto w-auto h-full object-contain"
                alt="CSSU placeholder logo"
                width={3990}
                height={1110}
                quality={10}
                priority
            />
        )
    }
}
