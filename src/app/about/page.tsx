import InformationPage from "@//components/InformationPage";
import ProfileContainer from "@//components/ProfileContainer";
import ProfileCard from "@//components/ProfileCard";
import type { Metadata } from "next";

const frontMatter = {
  title: "About",
  date: "2024-06-16",
  hideLastModified: false,
  lastModified: "2025-05-02",
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
      <p>
        The Computer Science Student Union (CSSU) represents over 5000 Computer
        Science students who are either taking a Computer Science course or are
        part of a Computer Science program at the University of Toronto St.
        George campus. We are a student-governed body that receives funding from
        the Arts &amp; Science Students&apos; Union, the Department of Computer
        Science, and our union store. The description of the structure, rules,
        and processes of the CSSU are described in our{" "}
        <a href="/constitution.pdf">constitution</a>. The primary goal of the
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
        You can visit us in room BA2250 in the{" "}
        <a
          href="https://goo.gl/maps/16JTD3pr2KKMkCTE7"
          target="_blank"
          rel="noopener noreferrer"
        >
          Bahen Centre for Information Technology
        </a>{" "}
        or email us at <a href="mailto:cssu@cdf.toronto.edu">cssu@cdf.toronto.edu</a>.{" "}
        <a href="/ba2250">See Office Hours.</a>
      </p>

      {/* Executive Council */}
      <h2>Executive Council</h2>
      <p>
        Members of the Executive Council are elected by the student body to
        serve one-year terms. These student leaders are responsible for
        organizing the CSSU&apos;s events and initiatives to support
        undergraduate students.
      </p>
      <ProfileContainer>
        <ProfileCard
          fullName="Cynthia Sa"
          position="Co-President"
          github="https://github.com/praticodes"
          linkedin="https://www.linkedin.com/in/cynthia-sa-5776b0192/"
          imageUrl="/people/CynthiaSa.webp"
        />
        <ProfileCard
          fullName="Pratibha Thakur"
          position="Co-President"
          github="https://github.com/praticodes"
          linkedin="https://www.linkedin.com/in/thakur-pratibha"
          imageUrl="/people/PratibhaThakur.webp"
        />
      </ProfileContainer>
      <ProfileContainer>
        <ProfileCard
          fullName="Aditya Gautam"
          position="Treasurer"
          github="https://github.com/Autumn-AG"
          linkedin="https://www.linkedin.com/in/adityagautam-ag/"
          imageUrl=""
        />
        <ProfileCard
          fullName="Yanzhen Chen"
          github="https://github.com/YheChen"
          position="VP External"
          linkedin="https://www.linkedin.com/in/yanzhenchen/"
          imageUrl="/people/YanzhenChen.webp"
        />
        <ProfileCard
          fullName="Edison Yao"
          github="https://github.com/DojimaRyu"
          position="VP Internal"
          linkedin="https://www.linkedin.com/in/edison-yao/"
          imageUrl="/people/EdisonYao.webp"
        />
        <ProfileCard
          fullName="Lily Phan"
          position="VP Academic"
          github="https://github.com/pH-li"
          linkedin="https://www.linkedin.com/in/lilyphan48/"
          imageUrl="/people/LilyPhan.webp"
        />
      </ProfileContainer>
      <ProfileContainer>
        <ProfileCard
          fullName="Alisa Iskakova"
          position="VP Social"
          github="https://github.com/alisa-isk"
          linkedin="https://www.linkedin.com/in/alisa-iskakova-b278022b7/"
          imageUrl="/people/AlisaIskakova.webp"
        />
        <ProfileCard
          fullName="Colleen Chang"
          position="VP Marketing"
          github="https://github.com/chexerboxer"
          linkedin="https://www.linkedin.com/in/colleenxychang/"
          imageUrl="/people/ColleenChang.webp"
        />
        <ProfileCard
          fullName="Avery Ng"
          position="VP Special Events"
          github="https://github.com/avery-jingxin"
          linkedin="https://www.linkedin.com/in/averyng128/"
        />
      </ProfileContainer>

      {/* General Council */}
      <h2>General Council</h2>
      <p>
        General Council member are volunteers appointed by the Executive Council
        to assist with our initiatives and be leaders in the community. We have
        yet to appoint all members of the General Council for the 2025-26
        academic year. Keep an eye out for updates to the application process.
      </p>
      {/* <ProfileContainer>
        <ProfileCard
          fullName="Vishnu Nittoor"
          position="Associate, Academic Committee"
        />
        <ProfileCard
          fullName="Andrew Kwok"
          position="Associate, Academic Committee"
        />
        <ProfileCard
          fullName="Alan Su"
          position="Associate, Academic Committee"
        />
      </ProfileContainer> */}

      {/* Office Operations */}
      <h2>Office Operations</h2>
      <p>
        The CSSU proudly maintains a student lounge in BA 2250 in which students
        can hang out, network, play games, ask questions, and study. We have a variety
        of amenities, including but not limited to free menstrual and safe sex supplies,
        drinks (coffee, tea, hot cocoa and French Vanilla powder), coat racks for the 
        winter, digital lockers (available on a first-come-first-serve basis), and 
        video game consoles. The lounge is also known for <a href="https://www.youtube.com/watch?v=f9Q58Rnzz88&t=73s"
                                                            >very cheap ice cream sandwiches.</a>
      </p>
      <p>
        Office Operations volunteers, or Office Ops, help manage the lounge,
        kitchenette, gaming centre, and study spaces. They also assist in
        answering questions and directing students to appropriate resources.
        Typically, Executive and General Council members also serve Office Ops
        shifts. While our lounge operating hours depend on availability, they
        generally follow a <a href="/ba2250">semester based schedule</a>.
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
    </InformationPage>
  );
}
