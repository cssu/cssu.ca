import BA2250VolunteeringMDX, { frontMatter } from '$/ba2250-volunteering/index.mdx'
import InformationPage from '@/components/InformationPage'
import getRootComponents from '@/lib/getRootComponents'

import type { Metadata } from 'next'

const PAGE_URL = 'ba2250-volunteering'

export const metadata: Metadata = {
    title: frontMatter.title,
    description: frontMatter.summary || frontMatter.title || '',
}

export default function BA2250Volunteering() {
    return (
        <InformationPage metadata={frontMatter}>
            <BA2250VolunteeringMDX components={getRootComponents(PAGE_URL)} />
        </InformationPage>
    )
}
