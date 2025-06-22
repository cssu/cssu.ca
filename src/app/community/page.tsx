import InformationPage from "@/components/InformationPage";
import ProfileContainer from "@/components/ProfileContainer";
import ProfileCard from "@/components/ProfileCard";
import type { Metadata } from "next";

const frontMatter = {
  title: "Community",
  date: "2024-06-21",
  hideLastModified: false,
  lastModified: "2024-06-21",
  summary: "CS-related clubs and student groups.",
};

export const metadata: Metadata = {
  title: frontMatter.title,
  description: frontMatter.summary || frontMatter.title || "",
};

export default function Community() {
  return (
    <InformationPage metadata={frontMatter}>
      {/* University Entities */}
      <h2>University Entities</h2>
      <p>
        The CSSU enjoys the support of partner course unions and the Department
        of Computer Science.
      </p>
      <ProfileContainer>
        <ProfileCard
          fullName="ASSU"
          position="Arts & Science Student Union"
          website="https://assu.ca/wp"
          linkedin="https://www.linkedin.com/company/uoft-assu"
          instagram="https://www.instagram.com/assu_uoft/"
          imageUrl="/rcgs/assu.jpg"
        />
        <ProfileCard
          fullName="BCBSA"
          position="Bioinformatics & Computational Biology Student Association"
          website="https://linktr.ee/bcbsa.uoft"
          github="https://github.com/bcbuoft"
          instagram="https://www.instagram.com/bcbsa.uoft/"
          imageUrl="/rcgs/bcbsa.jpg"
        />
        <ProfileCard
          fullName="CSSU"
          position="Computer Science Student Union"
          website="https://cssu.ca"
          linkedin="https://linkedin.com/company/computer-science-student-union"
          github="https://github.com/cssu"
          instagram="https://instagram.com/uoftcssu"
        />
        <ProfileCard
          fullName="DCS"
          position="Department of Computer Science"
          website="https://web.cs.toronto.edu"
          linkedin="https://www.linkedin.com/school/uoftcompsci/"
          instagram="https://www.instagram.com/uoftcompsci/"
          imageUrl="/rcgs/dcs.jpg"
        />
        <ProfileCard
          fullName="DCSIL"
          position="Department of Computer Science Innovation Lab"
          website="https://dcsil.ca"
          github="https://github.com/dcsil"
          imageUrl="/rcgs/dcsil.png"
        />
      </ProfileContainer>

      {/* Student Groups */}
      <h2>Student Groups</h2>
      <p>
        These are student-run groups, or clubs, that the University recognizes
        on the{" "}
        <a
          href="https://sop.utoronto.ca/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Student Organization Portal
        </a>
        . These groups provide students with extracurricular activities to have
        fun, get exercise, develop their careers, and much more. The following
        are those relevant to computer science. If you would like to request
        that we list your club, please get in touch with us via{" "}
        <a
          href="https://discord.gg/R9hneMaafD"
          target="_blank"
          rel="noopener noreferrer"
        >
          Discord
        </a>{" "}
        or{" "}
        <a
          href="mailto:executive@cssu.ca"
          target="_blank"
          rel="noopener noreferrer"
        >
          email
        </a>
        .
      </p>

      {/* St. George Campus (UTSG) */}
      <h2>St. George Campus (UTSG)</h2>
      <ProfileContainer>
        <ProfileCard
          fullName="UTADA"
          position="UofT Application Development Association"
          website="https://uoftada.com"
          linkedin="https://www.linkedin.com/company/university-of-toronto-application-development-association"
          imageUrl="/rcgs/utada.png"
        />
        <ProfileCard
          fullName="UofT AI"
          position="UofT Undergraduate Artificial Intelligence Group"
          website="https://uoft.ai"
          linkedin="https://www.linkedin.com/company/uaig-uoft/"
          github="https://github.com/uoftai"
          instagram="https://www.instagram.com/uoftaigroup/"
          imageUrl="/rcgs/uoft_ai.jpeg"
        />
        <ProfileCard
          fullName="aUToronto"
          position="UofT Self-Driving Car Team"
          website="https://www.autodrive.utoronto.ca"
          linkedin="https://www.linkedin.com/company/autoronto/"
          instagram="https://www.instagram.com/uoftautodrive/"
          imageUrl="/rcgs/aUtoronto.jpeg"
        />
        <ProfileCard
          fullName="UofT Blueprint"
          position="Technology for nonprofits"
          website="https://uoftblueprint.org/"
          linkedin="https://www.linkedin.com/company/uoftblueprint/"
          instagram="https://www.instagram.com/uoftblueprint/"
          imageUrl="/rcgs/uoftblueprint.jpeg"
        />
        <ProfileCard
          fullName="UofTCTF"
          position="UofT Capture the Flag"
          website="https://uoftctf.org/"
          github="https://github.com/UofTCTF"
          instagram="https://www.instagram.com/uoftctf/"
          imageUrl="/rcgs/uoftctf.png"
        />
        <ProfileCard
          fullName="UTCG"
          position="UofT Computer Graphics"
          website="https://utcg.club"
          linkedin="https://www.linkedin.com/company/university-of-toronto-computer-graphics-club"
          github="https://github.com/UTCG"
          instagram="https://www.instagram.com/utcomputergraphics/"
          imageUrl="/rcgs/utcg.png"
        />
        <ProfileCard
          fullName="CSSA"
          position="UofT Cybersecurity Student Association"
          website="https://cssa.sa.utoronto.ca/"
          linkedin="https://www.linkedin.com/company/uoftcssa/about/"
          instagram="https://www.instagram.com/uoftcssa/"
          imageUrl="/rcgs/cssa.jpg"
        />
        <ProfileCard
          fullName="DSC UTSG"
          position="Developer Student Club UTSG"
          website="https://linktr.ee/gdscutsg"
          linkedin="https://www.linkedin.com/company/dscutsg"
          github="https://github.com/Developer-Student-Club-UofT"
          instagram="https://www.instagram.com/gdscutsg/"
          imageUrl="/rcgs/dsc_utsg.png"
        />
        <ProfileCard
          fullName="UTGDDC"
          position="UofT Game Design & Development Club"
          website="https://www.utgddc.com/"
          linkedin="https://www.linkedin.com/company/u-of-t-game-design-design-and-development-club"
          instagram="https://www.instagram.com/uoftgddc/"
          imageUrl="/rcgs/gddc.jpg"
        />
        <ProfileCard
          fullName="UofT Hacks"
          position="Canada's first student-run hackathon"
          website="https://uofthacks.com/"
          linkedin="https://www.linkedin.com/company/uoftorontohacks"
          instagram="https://www.instagram.com/uofthacks/"
          imageUrl="/rcgs/uofthacks.png"
        />
        <ProfileCard
          fullName="UTMIST"
          position="UofT Machine Intelligence Student Team"
          website="https://utmist.gitlab.io"
          linkedin="https://linkedin.com/company/utmist"
          github="https://github.com/UTMIST"
          instagram="https://www.instagram.com/uoft_utmist/"
          imageUrl="/rcgs/utmist.png"
        />
        <ProfileCard
          fullName="NeuroTechUofT"
          website="https://neurotechuoft.com/index.html"
          linkedin="https://www.linkedin.com/company/neurotechuoft"
          github="https://github.com/neurotechuoft"
          instagram="https://www.instagram.com/neurotechuoft/"
          imageUrl="/rcgs/neurotechuoft.png"
        />
        <ProfileCard
          fullName="UTQC"
          position="UofT Quantum Computing Club"
          website="https://linktr.ee/uoft.quantum"
          instagram="https://www.instagram.com/uoft.quantum/"
          imageUrl="/rcgs/utqcc.png"
        />
        <ProfileCard
          fullName="UTRA"
          position="UofT Robotics Association"
          website="https://www.utra.ca"
          linkedin="https://www.linkedin.com/company/university-of-toronto-robotics-association"
          instagram="https://www.instagram.com/utra_uoft/"
          imageUrl="/rcgs/utra.png"
        />
        <ProfileCard
          fullName="UTWD"
          position="UofT Web Dev Club"
          website="https://linktr.ee/uoftweb"
          linkedin="https://www.linkedin.com/company/uoft-web"
          github="https://github.com/uoftweb"
          instagram="https://www.instagram.com/uoftwebdevclub/"
          imageUrl="/rcgs/utwd.png"
        />
        <ProfileCard
          fullName="WHWC"
          position="UofT Weblogging Club"
          website="https://uoftwebloggingclub.neocities.org/"
          instagram="https://www.instagram.com/weblogging.homebrew.club"
          imageUrl="/rcgs/uoft_weblogging.webp"
        />
        <ProfileCard
          fullName="WICS"
          position="UofT Women in Computer Science"
          website="https://uoftwics.netlify.app/"
          linkedin="https://www.linkedin.com/company/uoftwics/"
          instagram="https://www.instagram.com/uoftwics/"
          imageUrl="/rcgs/wics.png"
        />
      </ProfileContainer>

      {/* Mississauga Campus (UTM) */}
      <h2>Mississauga Campus (UTM)</h2>
      <ProfileContainer>
        <ProfileCard
          fullName="CSSC"
          position="Computer Science Student Community"
          website="https://cssc.utm.utoronto.ca"
          github="https://github.com/utm-cssc"
          instagram="https://www.instagram.com/utm.cssc/"
          imageUrl="/rcgs/cssc.png"
        />
        <ProfileCard
          fullName="DSC UTM"
          position="Developer Student Club UTM"
          website="https://www.gdscutm.com/"
          github="https://github.com/DSC-UTMap"
          instagram="https://www.instagram.com/gdscutm/"
          imageUrl="/rcgs/dsc_utsg.png"
        />
        <ProfileCard
          fullName="MCSS"
          position="Mathematical and Computational Sciences Society"
          website="https://mcss.club/"
          linkedin="https://www.linkedin.com/company/utmmcss/"
          github="https://github.com/utmmcss"
          instagram="https://www.instagram.com/utmmcss/"
          imageUrl="/rcgs/mcss.png"
        />
        <ProfileCard
          fullName="UTM Robotics"
          website="https://linktr.ee/utmrobotics"
          linkedin="https://www.linkedin.com/company/utmrobotics/"
          github="https://github.com/utmrobotics"
          instagram="https://www.instagram.com/utm_robotics/"
          imageUrl="/rcgs/utmrobotics.png"
        />
        <ProfileCard
          fullName="UTMSAM"
          position="Society for Algorithmic Modelling"
          website="https://utmsam.sa.utoronto.ca/"
          linkedin="https://www.linkedin.com/company/utmsam2020/"
          github="https://github.com/UTM-Society-for-Algorithmic-Modelling"
          instagram="https://www.instagram.com/utmsam/"
          imageUrl="/rcgs/utmsam.png"
        />
        <ProfileCard
          fullName="WiSC"
          position="Women in Science and Computing"
          website="https://www.wiscutm.ca/"
          linkedin="https://www.linkedin.com/in/wisc-utm-5a2417199/"
          instagram="https://www.instagram.com/wiscutm/"
          imageUrl="/rcgs/wisc.png"
        />
      </ProfileContainer>

      {/* Scarborough Campus (UTSC) */}
      <h2>Scarborough Campus (UTSC)</h2>
      <ProfileContainer>
        <ProfileCard
          fullName="AMACSS"
          position="Association of Mathematics and Computer Science Students"
          website="https://www.amacss.org/"
          linkedin="https://www.linkedin.com/company/association-of-mathematical-and-computer-science-students/"
          instagram="https://www.instagram.com/amacss_utsc/"
          imageUrl="/rcgs/amacss.png"
        />
        <ProfileCard
          fullName="CSEC"
          position="Computer Science Enrichment Club"
          website="https://csec.club/"
          linkedin="https://www.linkedin.com/company/computer-science-enrichment-club/about"
          github="https://github.com/csecutsc"
          instagram="https://www.instagram.com/csecutsc/"
          imageUrl="/rcgs/csec.jpeg"
        />
      </ProfileContainer>
    </InformationPage>
  );
}
