'use client'

import { useState } from 'react'
import ProfileContainer from '#/ProfileContainer'
import Selector from '#/Selector'

export default function CouncilSectionContainer({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    const [selectedYear, setSelectedYear] = useState<number>(0)
    const [selectedDepartment, setSelectedDepartment] = useState<string>('')

    const containers = Array.isArray(children) ? children : [children]
    const cards = containers.map((container) =>
        Array.isArray(container.props.children)
            ? container.props.children
            : [container.props.children],
    )

    function shouldDisplay(child: React.ReactElement) {
        // This is janky as hell because it's just doing a find for year-${selectedYear} and
        // department-${selectedDepartment} as a string. We should do this better in the future.
        return (
            (!selectedYear || child.props?.className?.includes(`year-${selectedYear}`)) &&
            (!selectedDepartment ||
                child.props?.className?.includes(`department-${selectedDepartment}`))
        )
    }

    return (
        <>
            <Selector
                selectedYear={selectedYear}
                selectedDepartment={selectedDepartment}
                setSelectedYear={setSelectedYear}
                setSelectedDepartment={setSelectedDepartment}
            />
            {cards.map((container, index) => (
                <ProfileContainer key={index}>
                    {container.map((child: React.ReactElement, index2: number) => (
                        <div key={index2}>{shouldDisplay(child) ? child : null}</div>
                    ))}
                </ProfileContainer>
            ))}
        </>
    )
}
