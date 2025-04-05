import InformationPage from "@/components/InformationPage";
import type { Metadata } from "next";

const frontMatter = {
  title: "Resources",
  date: "2024-07-05",
  hideLastModified: false,
  lastModified: "2024-07-05",
  summary: "List of Resources for CS students",
};

export const metadata: Metadata = {
  title: frontMatter.title,
  description: frontMatter.summary || frontMatter.title || "",
};

export default function ResourcesPage() {
  return (
    <InformationPage metadata={frontMatter}>
      {/* CSSU Resources */}
      <section>
        <h2>Computer Science Student Union (CSSU)</h2>
        <ul>
          <li>
            <a
              href="/posts/first-years-guide-to-cs"
              className="text-indigo-600 hover:text-indigo-800"
            >
              CSSU First Year&apos;s Guide to CS
            </a>
          </li>
          <li>
            <strong>Mental Health Resources</strong> (see below)
          </li>
        </ul>
      </section>

      {/* Department of Computer Science */}
      <section>
        <h2>Department of Computer Science</h2>
        <ul>
          <li>
            <a
              href="https://web.cs.toronto.edu/undergraduate/current"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:text-indigo-800"
            >
              Department of Computer Science Student Resources
            </a>
            <p>
              The department provides many useful resources for undergraduate
              students. This page is a must-see for those looking to explore and
              succeed in computer science.
            </p>
          </li>
          <li>
            <a
              href="https://courseography.cdf.toronto.edu/graph"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:text-indigo-800"
            >
              CS Courseography - visualize the sequence of CSC courses
            </a>
          </li>
        </ul>
      </section>

      {/* Teaching Laboratories */}
      <section>
        <h2>Teaching Laboratories</h2>
        <ul>
          <li>
            <a
              href="https://www.teach.cs.toronto.edu/resources/introduction-for-new-students-using-the-teach-cs-labs/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:text-indigo-800"
            >
              CS Teaching Labs Intro
            </a>
          </li>
          <li>
            <a
              href="https://www.teach.cs.toronto.edu/using-labs/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:text-indigo-800"
            >
              Using Teaching Labs
            </a>
          </li>
          <li>
            Students in the CS major or specialist program get 300 pages of free
            printing in Bahen Teaching Labs each semester.
          </li>
        </ul>
      </section>

      {/* Faculty of Arts & Science */}
      <section>
        <h2>Faculty of Arts &amp; Science</h2>
        <ul>
          <li>
            <a
              href="https://www.artsci.utoronto.ca/current/academic-advising-and-support/online-resources-students"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:text-indigo-800"
            >
              Faculty of Arts and Science Student Resources
            </a>
          </li>
          <li>
            <a
              href="https://artsci.calendar.utoronto.ca/section/Computer-Science"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:text-indigo-800"
            >
              Computer Science courses and programs details
            </a>
          </li>
          <li>
            <a
              href="https://ttb.utoronto.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:text-indigo-800"
            >
              Arts &amp; Science timetable – search for course listings
            </a>
          </li>
        </ul>
      </section>

      {/* University of Toronto */}
      <section>
        <h2>University of Toronto</h2>
        <ul>
          <li>
            <a
              href="https://login.library.utoronto.ca/index.php?url=https://exams.library.utoronto.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:text-indigo-800"
            >
              Past Exams Repository
            </a>
          </li>
          <li>
            <a
              href="https://writing.utoronto.ca/writing-centres/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:text-indigo-800"
            >
              UofT Writing Centers
            </a>
          </li>
          <li>
            <a
              href="https://onlinelearning.utoronto.ca/coursera-sgs/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:text-indigo-800"
            >
              Free Courses on Coursera
            </a>
          </li>
          <li>
            <a
              href="https://www.classcentral.com/university/utoronto"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:text-indigo-800"
            >
              Free Courses on Lynda/Class Central
            </a>
          </li>
          <li>
            <a
              href="https://uofthub.ca/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:text-indigo-800"
            >
              UofTHub – information about courses
            </a>
          </li>
        </ul>
      </section>

      {/* Community */}
      <section>
        <h2>Community</h2>
        <ul>
          <li>
            <a
              href="https://discord.gg/2yNfRKXCvq"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:text-indigo-800"
            >
              UofT Discord Student Hub – central hub for links to various UofT
              Discord servers
            </a>
            <ul>
              <li>
                <a
                  href="https://discord.gg/R9hneMaafD"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-800"
                >
                  CSSU Discord Server
                </a>
              </li>
              <li>
                <a
                  href="https://discord.gg/QrT4w8Qyx2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-800"
                >
                  Unofficial UofT CS Discord Server
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/ba2250" className="text-indigo-600 hover:text-indigo-800">
              CSSU Student Lounge – <strong>open now!</strong>
            </a>
          </li>
          <li>
            <a
              href="/community"
              className="text-indigo-600 hover:text-indigo-800"
            >
              Student Groups on Campus
            </a>
          </li>
        </ul>
      </section>

      {/* Free Software */}
      <section>
        <h2>Free Software</h2>
        <ul>
          <li>
            <a
              href="https://education.github.com/pack"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:text-indigo-800"
            >
              Github Student Developer Pack: JetBrains, Azure, etc.
            </a>
          </li>
          <li>
            <a
              href="https://uoft.onthehub.com/WebStore/Security/Signin.aspx?rurl=%2FWebStore%2FOfferingDetails.aspx%3Fo%3D499fe89c-cb3a-e511-940f-b8ca3a5db7a1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:text-indigo-800"
            >
              OnTheHub: Windows 10 Education, Adobe CC, etc.
            </a>
          </li>
          <li>
            <a
              href="https://www.office.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:text-indigo-800"
            >
              Microsoft Office 365 (sign in with your UofT email)
            </a>
          </li>
          <li>
            <a
              href="https://utoronto.zoom.us/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:text-indigo-800"
            >
              Zoom
            </a>
          </li>
          <li>
            <a
              href="https://isea.utoronto.ca/services/vpn/utorvpn/users/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:text-indigo-800"
            >
              UofT VPN – simulate UofT network
            </a>
          </li>
        </ul>
      </section>

      {/* Free Media */}
      <section>
        <h2>Free Media</h2>
        <ul>
          <li>
            <a
              href="https://mediacommons.library.utoronto.ca/criterion-demand"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:text-indigo-800"
            >
              UofT Criterion-on-Demand
            </a>
          </li>
          <li>
            <a
              href="https://utoronto.kanopy.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:text-indigo-800"
            >
              Kanopy
            </a>
          </li>
          <li>
            <a
              href="https://login.library.utoronto.ca/index.php?url=http://utoronto.naxosmusiclibrary.com/homepage.asp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:text-indigo-800"
            >
              Naxos music library
            </a>
          </li>
        </ul>
      </section>

      {/* Mental Health Resources */}
      <section>
        <h2>Mental Health Resources</h2>
        <ul>
          <li>
            <strong>Call 911 if at immediate risk.</strong>
          </li>
          <li>
            <strong>
              If you are feeling desperate, hopeless, or having suicidal
              thoughts, please seek help immediately.
            </strong>
          </li>
          <li>
            <strong>
              If you have made a plan or have the means to hurt yourself or
              others, please contact emergency services.
            </strong>
          </li>
        </ul>
        <h3>Talk to someone right NOW</h3>
        <h4>24/7 Emergency Counseling Services</h4>
        <p>
          <a
            href="https://mentalhealth.utoronto.ca/my-student-support-program/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:text-indigo-800"
          >
            U of T My Student Support Program (My SSP)
          </a>{" "}
          | <strong>1-844-451-9700</strong>. Outside of North America, call{" "}
          <strong>001-416-380-6578</strong>.
        </p>
        <p>
          <a
            href="https://good2talk.ca/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:text-indigo-800"
          >
            Good2Talk Student Helpline
          </a>{" "}
          | <strong>1-866-925-5454</strong>
          <br />
          Professional counseling, information, and referrals for mental health,
          addictions, and student well-being.
        </p>
        <section>
          <h3>Contacts for Different Types of Distress</h3>
          <p>
            Life can be challenging. If you are in distress, we can help connect
            you to the resources you need.
          </p>
          <p>
            Download the{" "}
            <a
              href="https://studentlife.utoronto.ca/wp-content/uploads/Feeling-distressed.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:text-indigo-800"
            >
              Feeling Distressed
            </a>{" "}
            (PDF) for contacts and resources to support you through different
            kinds of distress:
          </p>
          <ul>
            <li>24/7 Emergency</li>
            <li>Mental Health</li>
            <li>Academic</li>
            <li>Financial (unexpected circumstances)</li>
            <li>Housing (temporary crisis)</li>
            <li>Sexual Assault/Safety</li>
            <li>Equity Offices and Communities of Care</li>
          </ul>
          <p>
            Contacts include both on-campus and community supports during
            business hours and 24/7.
          </p>
        </section>
        <section>
          <h3>Students with Disabilities</h3>
          <p>
            Students with disabilities, including mental health conditions such
            as depression, social anxiety, or OCD, can reach out to{" "}
            <a
              href="https://studentlife.utoronto.ca/department/accessibility-services/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:text-indigo-800"
            >
              Accessibility Services
            </a>{" "}
            for accommodations and supports, including:
          </p>
          <ul>
            <li>Disability-related supports and strategies</li>
            <li>Coursework accommodations</li>
            <li>Test and exam accommodations</li>
            <li>Opportunities for student socials</li>
          </ul>
          <p>
            Please visit the{" "}
            <a
              href="https://studentlife.utoronto.ca/department/accessibility-services/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:text-indigo-800"
            >
              Accessibility Services website
            </a>{" "}
            for more information. To book an appointment, call{" "}
            <strong>416-978-8060</strong> or email{" "}
            <a
              href="mailto:accessibility.services@utoronto.ca"
              className="text-indigo-600 hover:text-indigo-800"
            >
              accessibility.services@utoronto.ca
            </a>
            .
          </p>
        </section>
        <section>
          <h3>Student Mental Health Website</h3>
          <p>
            The University recently launched a new{" "}
            <a
              href="https://mentalhealth.utoronto.ca/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:text-indigo-800"
            >
              Student Mental Health Website
            </a>{" "}
            to help you find supports across the tri-campus. Its robust search
            and filter function allows you to match your needs with available
            resources.
          </p>
          <p>
            Didn&apos;t find what you were looking for? Visit our{" "}
            <a
              href="/posts/faq"
              className="text-indigo-600 hover:text-indigo-800"
            >
              FAQ
            </a>
            .
          </p>
        </section>
      </section>
    </InformationPage>
  );
}
