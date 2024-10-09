'use client'

import ProfileCard from '#/ProfileCard'

export default function ExecutiveContainer() {
    return (
        <ProfileCard
            fullName="Zachary Muir"
            position="Dir. Internal Relations"
            linkedin="https://www.linkedin.com/in/zachmuir/"
        />
    )
}

/*
Original executives section (for later reference):

<ProfileContainer>
    <ProfileCard
        fullName="Pratibha Thakur"
        position="Acting President"
        github="https://github.com/praticodes"
        linkedin="https://www.linkedin.com/in/thakur-pratibha"
        imageUrl="/people/PratibhaThakur.png"
    />
    <ProfileCard
        fullName="Jason Barahan"
        position="Acting Vice President"
        linkedin="https://www.linkedin.com/in/JasonBarahan"
        github="https://github.com/JasonBarahan"
        imageUrl="/people/JasonBarahan.jpg"
    />
</ProfileContainer>

<ProfileContainer>
    <ProfileCard
        fullName="Aviraj Newatia"
        position="Dir. Academic Events"
        github="https://github.com/projectavi"
        linkedin="https://www.linkedin.com/in/avinewatia/"
        imageUrl="/people/AvirajNewatia.jpeg"
    />
    <ProfileCard
        fullName="Zachary Muir"
        position="Dir. Internal Relations"
        linkedin="https://www.linkedin.com/in/zachmuir/"
    />
    <ProfileCard fullName="Yanzhen Chen" position="Dir. External Relations" />
</ProfileContainer>
*/
