import CommunityMDX, { frontMatter } from '$/community/index.mdx'
import InformationPage from '@/components/InformationPage'
import { getFigureComponent, getImgComponent } from '@/lib/getMDXComponents'

import type { Metadata } from 'next'

const PAGE_URL = 'community'

export const metadata: Metadata = {
    title: frontMatter.title,
    description: frontMatter.summary || frontMatter.title || '',
}

export default function CommunityVolunteering() {
    return (
        <InformationPage metadata={frontMatter}>
            <CommunityMDX
                components={{ ...getImgComponent(PAGE_URL), ...getFigureComponent(PAGE_URL) }}
            />
        </InformationPage>
    )
}
