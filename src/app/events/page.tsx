import ContentCollection from '@/components/ContentCollection'

import type { Metadata } from 'next'

const PAGE_TYPE = 'events'
const PAGE_TITLE = 'Events'

export const metadata: Metadata = {
    title: 'Events',
    description: 'Events hosted by the CSSU',
}

export default function Events() {
    return <ContentCollection pageTitle={PAGE_TITLE} pageType={PAGE_TYPE} />
}
