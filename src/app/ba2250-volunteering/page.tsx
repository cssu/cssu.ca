import BA2250VolunteeringMDX, { metadata } from '$/ba2250-volunteering/index.mdx'
import InformationPage from '@/components/InformationPage'

export default function BA2250Volunteering() {
    return (
        <InformationPage metadata={metadata}>
            <BA2250VolunteeringMDX />
        </InformationPage>
    )
}
