import CommunityMDX, { metadata } from "$/community/index.mdx"
import InformationPage from "@/components/InformationPage"

export default function CommunityVolunteering() {
    return (
        <InformationPage metadata={metadata}>
            <CommunityMDX />
        </InformationPage>
    )
}
