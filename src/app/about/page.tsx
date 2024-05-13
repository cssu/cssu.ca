import AboutMDX, { frontMatter } from '$/about/index.mdx'
import InformationPage from '@/components/InformationPage'

import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: frontMatter.title,
    description: frontMatter.summary || frontMatter.title || '',
}

export default function About() {
    return (
        <InformationPage metadata={frontMatter}>
            <AboutMDX />
        </InformationPage>
    )
}
