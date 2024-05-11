import AboutMDX, { metadata } from '$/about/index.mdx'
import InformationPage from '@/components/InformationPage'

export default function About() {
    return (
        <InformationPage metadata={metadata}>
            <AboutMDX />
        </InformationPage>
    )
}
