import InformationPage from "@/components/InformationPage";
import type { Metadata } from "next";

const frontMatter = {
  title: "BA2285",
  date: "2024-04-06",
  hideLastModified: true,
  summary: "The Undergraduate Computer Science Lounge",
};

export const metadata: Metadata = {
  title: frontMatter.title,
  description: frontMatter.summary || frontMatter.title || "",
};

export default function BA2285() {
  return (
    <InformationPage metadata={frontMatter}>
      <h2>
        We&apos;ve moved! As of October 19, 2026, the lounge is in BA2285, not
        BA2250.
      </h2>
      <p>
        The CSSU proudly maintains a student lounge in{" "}
        <a
          href="https://map.utoronto.ca/?id=1809#!m/494470"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500"
        >
          BA2285
        </a>{" "}
        in which students can hang out, network, play games, and ask questions.
        We have a snack store, a gaming centre, study spaces, and more! Office
        operations volunteers manage the lounge, answer questions, and direct
        students to appropriate resources.
      </p>

      <h2>What We Have</h2>
      <ul>
        <li>
          Store stocked with common snacks for student purchase. We also have a
          free/loan shelf.
        </li>
        <li>
          Fridge, microwave, and kettle, plus basic utensils and tools.
        </li>
        <li>
          Entertainment/gaming centre, with a variety of modern, arcade, retro,
          and party games.
        </li>
        <li>
          Library shelf lined with books on topics such as mathematics,
          algorithms and data structures, programming, and philosophy. Students
          can borrow a book by depositing a piece of UofT or government ID with
          the lounge volunteer.
        </li>
      </ul>

      <h3>Store</h3>
      <p>
        For your convenience, we sell a variety of food items in the lounge.
        Anyone can come by during open hours and purchase a snack or beverage
        using a debit or credit card (for purchases of $1 or more) or cash.
        Please be kind to the person assisting you with your purchase at the
        desk; they are a volunteer!
      </p>

      <h3>Library and Whiteboard</h3>
      <p>
        Over the years, we&apos;ve collected many books from generous (or
        forgetful!) students, and we proudly maintain a new cozy home for them.
        We hope that our library shelf provides more accessibility to student
        learning and curiosity. Students can read in the study space or loan a
        book out with a deposit of a piece of UofT or government ID. If
        you&apos;d like to donate a book, please speak to the office manager on
        duty!
      </p>
      <p>
        You can use the dry-erase markers or erasers at the whiteboard; to
        borrow one, please deposit a piece of UofT or government ID with the
        lounge volunteer.
      </p>

      <h2>Schedule (Winter 2026)</h2>
      <h1><strong>We are still deciding on the schedule; check back later!</strong></h1>
      
      <p>
        <em>
          - (G) indicates a member of the{" "}
          <a href="/about" target="_blank" rel="noopener noreferrer">
            General Council
          </a>
          .<br />- (X) indicates a member of the{" "}
          <a href="/about" target="_blank" rel="noopener noreferrer">
            Executive (and General) Council
          </a>
          .
        </em>
      </p>

      <h2>Code of Conduct</h2>
      <ol>
        <li>
          Be <strong>respectful</strong> and <strong>inclusive</strong>: no
          racism, sexism, ageism, elitism, homophobia, ableism, etc. Students
          are expected to follow the{" "}
          <a
            href="https://governingcouncil.utoronto.ca/secretariat/policies/code-student-conduct-december-13-2019"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            UofT Code of Student Conduct
          </a>
          .
        </li>
        <li>
          Do not remove any lounge property like games, books, or dry-erase
          markers or erasers without Executive Council permission. To borrow one
          in an emergency, please deposit a form of ID with the lounge
          volunteer.
        </li>
        <li>
          Clean the microwave and any utensils after you use them.
        </li>
        <li>
          Do not leave controllers lying loosely; please put them back on the
          shelf or boxes.
        </li>
        <li>
          Report issues (spills, broken things, bad behaviour, lost belongings,
          etc.) to the lounge volunteer.
        </li>
        <li>
          Do not sleep in the lounge in any way that prevents normal use of the
          space. Do not take up more chairs than one, and do not sleep in front
          of the whiteboard or the gaming centre.
        </li>
        <li>
          Respect the office volunteer on-duty and report any issues to the{" "}
          <a href="mailto:cssu@cdf.toronto.edu">CSSU</a>.
        </li>
      </ol>
      <p>BTW, there&apos;s a security camera in the room.</p>
      <p>
        <em>
          If you&apos;re a volunteer, see the{" "}
          <a
            href="../lounge-volunteering/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            guide
          </a>
          .
        </em>
      </p>
    </InformationPage>
  );
}
