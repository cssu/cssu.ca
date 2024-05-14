import CommunityMDX, { frontMatter } from '$/community/index.mdx'
import InformationPage from '@/components/InformationPage'
import getRootComponents from '@/lib/getRootComponents'

import type { Metadata } from 'next'

const PAGE_URL = 'community'

export const metadata: Metadata = {
    title: frontMatter.title,
    description: frontMatter.summary || frontMatter.title || '',
}

export default function CommunityVolunteering() {
    return (
        <InformationPage metadata={frontMatter}>
            <CommunityMDX components={getRootComponents(PAGE_URL)} />
        </InformationPage>
    )
}
