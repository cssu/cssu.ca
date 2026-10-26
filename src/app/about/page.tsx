import InformationPage from "@/components/InformationPage";
import ProfileContainer from "@/components/ProfileContainer";
import ProfileCard from "@/components/ProfileCard";
import type { Metadata } from "next";
import {
  COPRES_PROFILES,
  VP_PROFILES,
  ACADEMIC_PROFILES,
  EXTERNAL_PROFILES,
  SOCIAL_PROFILES,
  FINANCE_PROFILES,
  STAFF_PROFILES,
  INTERNAL_PROFILES,
  MARKETING_PROFILES,
  TECH_PROFILES,
  SPEVENTS_PROFILES,
  TECH_LEAD_PROFILE
} from "@/data/profiles";
import { APP_CONFIG } from "@/config/constants";

const frontMatter = {
  title: "About",
  date: "2026-01-16",
  hideLastModified: false,
  lastModified: "2026-10-26",
  summary: "About the Computer Science Student Union",
};

export const metadata: Metadata = {
  title: frontMatter.title,
  description: frontMatter.summary || frontMatter.title,
};

export default function About() {
  return (
    <InformationPage metadata={frontMatter}>
      {/* Introduction */}
      <div className="[&_a]:text-blue-400
                      [&_a]:font-semibold
                      [&_a]:[text-decoration:underline]
                      hover:[&_a]:text-blue-500"
      >
        <p>
        The Computer Science Student Union (CSSU) represents over 5000 Computer
        Science students who are either taking a Computer Science course or are
        part of a Computer Science program at the University of Toronto St.
        George campus. We are a student-governed body that receives funding from
        the Arts &amp; Science Students&apos; Union, the Department of Computer
        Science, and our union store. The description of the structure, rules,
        and processes of the CSSU are described in our{" "}
        <a href={APP_CONFIG.constitutionPath}>constitution</a>. The primary goal of the
        CSSU team is to improve the academic, social, and professional lives of
        computer science students. We pursue that goal via:
      </p>

      <ul>
        <li>
          <strong>Social Activities</strong>: organizing social events to help
          students in making friends in their program and form networks of
          mutual support.
        </li>
        <li>
          <strong>Professional Development</strong>: providing students with
          networking and professional skill development opportunities to
          facilitate success in their careers.
        </li>
        <li>
          <strong>Academic Opportunities</strong>: presenting resources and
          opportunities to help students embed themselves in the world of
          academic computer science and share their work with their peers.
        </li>
        <li>
          <strong>Undergrad and Department Liaison</strong>: empowering students
          in their studies and advocating for their interests at the
          departmental, faculty, and university levels.
        </li>
      </ul>
      <p>
        You can visit us in room {APP_CONFIG.officeRoom} in the{" "}
        <a
          href={APP_CONFIG.officeLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Bahen Centre for Information Technology
        </a>{" "}
        or email us at <a href={`mailto:${APP_CONFIG.email}`}>{APP_CONFIG.email}</a>.{" "}
        <a href="/lounge">See Office Hours.</a>
      </p>
      </div>

      {/* Executive Council */}
      <h2>Executive Council</h2>
      <p>
        Members of the Executive Council are elected by the student body to
        serve one-year terms. These student leaders are responsible for
        organizing the CSSU&apos;s events and initiatives to support
        undergraduate students.
      </p>
      <ProfileContainer>
        {COPRES_PROFILES.map((profile) => (
          <ProfileCard key={profile.fullName} {...profile} />
        ))}
      </ProfileContainer>
      <ProfileContainer>
        {VP_PROFILES.map((profile) => (
          <ProfileCard key={profile.fullName} {...profile} />
        ))}
      </ProfileContainer>

      {/* General Council */}
      <h2 className="mt-12">General Council</h2>
      <p>
        General Council member are volunteers appointed by the Executive Council
        to assist with our initiatives and be leaders in the community. Our 2026 
        - 2027 roster has been finalized; check out our council members below!
        
      </p>
      <h2 className="text-center mt-8">Academic Associates</h2>
      <ProfileContainer>
        {ACADEMIC_PROFILES.map((profile) => (
          <ProfileCard key={profile.fullName} {...profile} />
        ))}
      </ProfileContainer>

      <h2 className="text-center mt-8">External Associates</h2>
      <ProfileContainer>
        {EXTERNAL_PROFILES.map((profile) => (
          <ProfileCard key={profile.fullName} {...profile} />
        ))}
      </ProfileContainer>

      <h2 className="text-center mt-8">Social Associates</h2>
      <ProfileContainer>
        {SOCIAL_PROFILES.map((profile) => (
          <ProfileCard key={profile.fullName} {...profile} />
        ))}
      </ProfileContainer>

      <h2 className="text-center mt-8">Finance Associates</h2>
      <ProfileContainer>
        {FINANCE_PROFILES.map((profile) => (
          <ProfileCard key={profile.fullName} {...profile} />
        ))}
      </ProfileContainer>

      <h2 className="text-center mt-8">Staff Associates</h2>
      <ProfileContainer>
        {STAFF_PROFILES.map((profile) => (
          <ProfileCard key={profile.fullName} {...profile} />
        ))}
      </ProfileContainer>

      <h2 className="text-center mt-8">Internal Associates</h2>
      <ProfileContainer>
        {INTERNAL_PROFILES.map((profile) => (
          <ProfileCard key={profile.fullName} {...profile} />
        ))}
      </ProfileContainer>

      <h2 className="text-center mt-8">Marketing Associates</h2>
      <ProfileContainer>
        {MARKETING_PROFILES.map((profile) => (
          <ProfileCard key={profile.fullName} {...profile} />
        ))}
      </ProfileContainer>

      <h2 className="text-center mt-8">Special Events Associates</h2>
      <ProfileContainer>
        {SPEVENTS_PROFILES.map((profile) => (
          <ProfileCard key={profile.fullName} {...profile} />
        ))}
      </ProfileContainer>

      <h2 className="text-center mt-8">Tech Team</h2>
      <ProfileContainer>
        <ProfileCard {...TECH_LEAD_PROFILE} />
      </ProfileContainer>
      <ProfileContainer>
        {TECH_PROFILES.map((profile) => (
          <ProfileCard key={profile.fullName} {...profile} />
        ))}
      </ProfileContainer>

      <div className="[&_a]:text-blue-400
                  [&_a]:font-semibold
                  [&_a]:[text-decoration:underline]
                  hover:[&_a]:text-blue-500 mt-12"
      >
      {/* Office Operations */}
      <h2>Office Operations</h2>
      <p>
        The CSSU proudly maintains a student lounge in {APP_CONFIG.officeRoom} in which students
        can hang out, network, play games, ask questions, and study. We have a variety
        of amenities, including but not limited to free menstrual and safe sex supplies,
        drinks (coffee, tea, hot cocoa and French Vanilla powder), coat racks for the 
        winter, digital lockers (available on a first-come-first-serve basis), and 
        video game consoles. The lounge is also known for <a href="https://www.youtube.com/watch?v=f9Q58Rnzz88&t=73s"
                                                            >very cheap ice cream sandwiches.</a>
      </p>
      <p>
        Office Operations volunteers, or Office Ops, help manage the lounge,
        lounge equipment, gaming centre, and study spaces. They also assist in
        answering questions and directing students to appropriate resources.
        Typically, Executive and General Council members also serve Office Ops
        shifts. While our lounge operating hours depend on availability, they
        generally follow a <a href="/lounge">semester based schedule</a>.
      </p>
      <p>
        University students are welcome to volunteer to keep the lounge running.
        As an added perk, you can get to know a lot of people within the Computer
        Science undergraduate community. Applications open on an as-needed basis.
      </p>

      {/* Feedback Form */}
      <h2>Feedback Form</h2>
      <p>
        At the CSSU, we strive to foster an inclusive and welcoming community.
        As part of this effort, we greatly value the feedback of CSSU members.
        You can{" "}
        <a
          href="https://forms.gle/bb4JXfWYkqW7Ewhh8"
          target="_blank"
          rel="noopener noreferrer"
        >
          submit feedback
        </a>{" "}
        to us about any aspect of our activities, past or present. The form is
        anonymous by default, but you may choose to include your name or contact
        email so we can follow up with you directly. All feedback is welcome!
      </p>
      <p>
        You can take a look at suggestions that other people have made{" "}
        <a
          href="https://github.com/cssu/suggestions/issues"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>
        .
      </p>
      </div>
    </InformationPage>
  );
}
