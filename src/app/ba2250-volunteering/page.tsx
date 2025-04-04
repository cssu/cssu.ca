import InformationPage from "@/components/InformationPage";
import type { Metadata } from "next";

const frontMatter = {
  title: "Volunteering in BA2250",
  date: "2024-01-24",
  hideLastModified: true,
  summary: "Volunteering in the Undergraduate Computer Science Lounge",
  priority: 0.6,
};

export const metadata: Metadata = {
  title: frontMatter.title,
  description: frontMatter.summary || frontMatter.title || "",
};

export default function BA2250Volunteering() {
  return (
    <InformationPage metadata={frontMatter}>
      <p>
        The CSSU proudly maintains a student lounge in BA 2250 in which students
        can hang out, network, play games and ask questions. We have a snack
        store, gaming centre, study spaces and more! Office operations
        volunteers manage the lounge, assist in answering questions, and direct
        students to appropriate resources.
      </p>
      <p>
        Thanks for volunteering! It will be a great opportunity to network and
        engage with your fellow students. First and foremost, please join our{" "}
        <a
          href="https://discord.gg/R9hneMaafD"
          target="_blank"
          rel="noopener noreferrer"
        >
          Discord server
        </a>
        . The following is a guide on managing the lounge for volunteers. Also
        feel free to join our{" "}
        <a
          href="https://discord.gg/w7hWTEkF"
          target="_blank"
          rel="noopener noreferrer"
        >
          unofficial Discord server
        </a>{" "}
        to connect with more UofT CS students!
      </p>

      <h2>Room Access</h2>
      <p>As of January 2024, the following is in effect.</p>
      <ul>
        <li>Volunteers will have 8AM-9PM access on weekdays.</li>
        <li>
          Members of the Executive Council shall have 24-hour access to the
          lounge (BA2250) and storage room (BA2285). This may not be the case
          when changes in position occur.
        </li>
      </ul>

      <h2>Snack Store</h2>
      <p>
        The CSSU maintains a snack store, the proceeds of which are put back
        into the CSSU treasury in compliance with charity regulations.
      </p>
      <ul>
        <li>
          Most items are kept on the snack shelf (the white one) and the red
          fridge.
        </li>
        <li>
          Ice-cream sandwiches are stored in the freezer in the kitchenette.
        </li>
        <li>
          Volunteers are expected to make sales on Square. Log in to the iPad,
          open the app, and tap on the items they&apos;re selling.
        </li>
        <li>
          Please do not accept card payments for sales totalling less than
          $1.00; encourage customers to pay in cash or buy multiple items.
        </li>
        <li>
          If the snack shelf or cooler are running low on items, restock from
          the black cabinet.
        </li>
        <li>
          We also have a free shelf (the grey one) with stationery, culinary,
          and sex supplies. Please ensure that students take things in
          moderation.
        </li>
      </ul>

      <h2>Library</h2>
      <ul>
        <li>
          Books and loose dry-erase whiteboard markers are free for use in the
          lounge.
        </li>
        <li>
          If a student wants to loan a book, ask them to deposit some form of ID
          (TCard, driver&apos;s licence, Ontario Photo Card, or passport).
        </li>
        <li>
          You may accept a health card if a student offers it, but we cannot
          request a health card by law.
        </li>
      </ul>

      <h2>Gaming Systems</h2>
      <ul>
        <li>Students may use the gaming consoles and display systems.</li>
        <li>
          Please be vigilant about the controllers and equipment; instances of
          theft have been reported in the past.
        </li>
      </ul>

      <h2>Kitchenette</h2>
      <ul>
        <li>Students are free to use the microwave, kettle, and sink.</li>
        <li>
          The silver refrigerator is open for use given that the users
          understand they can only pick up their items when there&apos;s a
          volunteer on duty.
        </li>
        <li>
          Please ensure students tag any items put into the fridge with a sticky
          note or marker. Sometimes there are freebies in here and we don&apos;t
          want someone to accidentally take a student&apos;s item because it
          wasn&apos;t labeled. This also helps with cleaning the fridge out.
        </li>
        <li>
          The freezer is often full with ice cream sandwiches, but students may
          store things in the door if they fit.
        </li>
      </ul>

      <h2>Lost Items</h2>
      <ul>
        <li>
          Lost items found in the building are often turned into the CSSU.
          Please try to locate the owner using any available information.
        </li>
        <li>
          If an item is very expensive and you cannot determine the owner,
          please ask the student to turn it into caretaking or Campus Safety.
        </li>
        <li>
          With lost TCards, you can email the student by sending an email to{" "}
          <code>&lt;their_utorid&gt;</code>@mail.utoronto.ca; this will alias to
          their UofT inbox, but it will not show up in your Outlook directory.
        </li>
        <li>
          When emailing a student about a lost item, please CC{" "}
          <a href="mailto:utcssu@gmail.com">utcssu@gmail.com</a>. For higher
          value items also post in the #lounge-office-ops channel.
        </li>
      </ul>

      <h2>Other Things</h2>
      <ul>
        <li>
          Try to answer student questions to the best of your ability; if you
          don&apos;t know the answer, you can ask in the #lounge-office-ops
          channel or direct them elsewhere.
        </li>
        <li>
          Other people such as caretaking staff, instructors, and student family
          are also welcome.
        </li>
        <li>
          Let the Executive Council know if you need anything from the storage
          room.
        </li>
        <li>
          Ensure that everyone is comfortable and observing the{" "}
          <a href="../ba2250" target="_blank" rel="noopener noreferrer">
            code of conduct
          </a>
          .
        </li>
        <li>
          If you can&apos;t make your shift for any reason, just let us know in
          #lounge-office-ops on Discord.
        </li>
        <li>
          Students often come in looking for BA2270 (the TA help centre next
          door). Please direct them there if they are asking where course office
          hours are.
        </li>
      </ul>
    </InformationPage>
  );
}
