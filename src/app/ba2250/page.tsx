import InformationPage from "@/components/InformationPage";
import type { Metadata } from "next";

const frontMatter = {
  title: "BA2250",
  date: "2024-04-06",
  hideLastModified: true,
  summary: "The Undergraduate Computer Science Lounge",
};

export const metadata: Metadata = {
  title: frontMatter.title,
  description: frontMatter.summary || frontMatter.title || "",
};

export default function BA2250() {
  return (
    <InformationPage metadata={frontMatter}>
      <p>
        The CSSU proudly maintains a student lounge in{" "}
        <a
          href="https://map.utoronto.ca/?id=1809#!m/494470"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500"
        >
          BA2250
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
          Kitchenette with fridge, sink, microwave, kettle, and basic utensils
          and tools.
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

      <h2>Schedule (Summer 2025)</h2>
      <table>
        <thead>
          <tr>
            <th>Start</th>
            <th>End</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>9:00 AM</td>
            <td>10:00 AM</td>
            <td>Zehao P (G)</td>
            <td>Zehao P (G)</td>
            <td>Emerson S (big E)</td>
            <td>Jason B (X)</td>
            <td>Richard N</td>
          </tr>
          <tr>
            <td>10:00 AM</td>
            <td>11:00 AM</td>
            <td>Ryan N</td>
            <td>Zach M (X)</td>
            <td>Emerson S (big E)</td>
            <td>Jason B (X)</td>
            <td>Richard N</td>
          </tr>
          <tr>
            <td>11:00 AM</td>
            <td>12:00 PM</td>
            <td>Ryan N</td>
            <td>Zach M (X)</td>
            <td>Daniel S</td>
            <td>Jason B (X)</td>
            <td>Avery N</td>
          </tr>
          <tr>
            <td>12:00 PM</td>
            <td>1:00 PM</td>
            <td>Ryan N</td>
            <td>David C</td>
            <td>Daniel S</td>
            <td>Jason B (X)</td>
            <td>Avery N</td>
          </tr>
          <tr>
            <td>1:00 PM</td>
            <td>2:00 PM</td>
            <td>Ryan N</td>
            <td>David C</td>
            <td>Cindy C | Nick C (G)</td>
            <td>Jason B (X)</td>
            <td>Zehao P (G)</td>
          </tr>
          <tr>
            <td>2:00 PM</td>
            <td>3:00 PM</td>
            <td>Danny C.</td>
            <td></td>
            <td>Vedant S | Nick C (G)</td>
            <td>Jamie Z (G)</td>
            <td>Yiyun Zhang</td>
          </tr>
          <tr>
            <td>3:00 PM</td>
            <td>4:00 PM</td>
            <td>Danny C.</td>
            <td>Yanzhen C (X)</td>
            <td>Justin Y</td>
            <td>Jamie Z (G)</td>
            <td>Yiyun Zhang</td>
          </tr>
          <tr>
            <td>4:00 PM</td>
            <td>5:00 PM</td>
            <td>Vedant S</td>
            <td>Yanzhen C (X)</td>
            <td>Justin Y | Alex L</td>
            <td>Jamie Z (G)</td>
            <td></td>
          </tr>
          <tr>
            <td>5:00 PM</td>
            <td>6:00 PM</td>
            <td>Cindy C</td>
            <td>Jaiz</td>
            <td>(Boss) Shivraj S. | Alex L</td>
            <td>Jaiz | Yiyun Zhang</td>
            <td></td>
          </tr>
          <tr>
            <td>6:00 PM</td>
            <td>7:00 PM</td>
            <td>Cindy C</td>
            <td>Yolanda T</td>
            <td>Yolanda T</td>
            <td>Daniel Livshits</td>
            <td></td>
          </tr>
          <tr>
            <td>7:00 PM</td>
            <td>8:00 PM</td>
            <td>Pirooz S</td>
            <td>Yolanda T</td>
            <td>Yolanda T</td>
            <td>Daniel Livshits</td>
            <td></td>
          </tr>
          <tr>
            <td>8:00 PM</td>
            <td>9:00 PM</td>
            <td></td>
            <td></td>
            <td>Pirooz S</td>
            <td>Daniel Livshits</td>
            <td></td>
          </tr>
        </tbody>
      </table>
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
          Clean the microwave, counter, and other kitchen utensils after you use
          them.
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
            href="../ba2250-volunteering/"
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
