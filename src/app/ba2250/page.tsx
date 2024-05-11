import BA2250MDX, { metadata } from '$/ba2250/index.mdx'
import InformationPage from '@/components/InformationPage'

export default function BA2250() {
    return (
        <InformationPage metadata={metadata}>
            <BA2250MDX />
        </InformationPage>
    )
}
