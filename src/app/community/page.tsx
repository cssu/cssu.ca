// @ts-expect-error
import CommunityMDX, { frontMatter } from '$/community/index.mdx'
import InformationPage from '@/components/InformationPage'

import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: frontMatter.title,
    description: frontMatter.summary || frontMatter.title || '',
}

export default function CommunityVolunteering() {
    return (
        <InformationPage metadata={frontMatter}>
            <CommunityMDX />
        </InformationPage>
    )
}
