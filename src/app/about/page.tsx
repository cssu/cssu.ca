import AboutMDX, { frontMatter } from '$/about/index.mdx'
import InformationPage from '@/components/InformationPage'
import { getFigureComponent, getImgComponent } from '@/lib/getMDXComponents'

import type { Metadata } from 'next'

const PAGE_URL = 'about'

export const metadata: Metadata = {
    title: frontMatter.title,
    description: frontMatter.summary || frontMatter.title || '',
}

export default function About() {
    return (
        <InformationPage metadata={frontMatter}>
            <AboutMDX
                components={{ ...getImgComponent(PAGE_URL), ...getFigureComponent(PAGE_URL) }}
            />
        </InformationPage>
    )
}
