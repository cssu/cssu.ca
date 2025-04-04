import React from "react";
import Link from "next/link";
import type { Metadata } from "next";

// Export metadata if you're using Next.js App Router's metadata API.
export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: "Answering your most popular questions!",
  // You can add additional metadata fields if needed.
};

export default function FAQPage() {
  return (
    <article className="max-w-3xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8">Frequently Asked Questions</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">
          How do I become a member?
        </h2>
        <ul className="list-disc pl-6">
          <li>
            Faculty of Arts &amp; Science students enrolled in a Computer/Data
            Science program or course in the Department of Computer Science are
            automatically members, provided they have paid the ASSU student
            fees. This is defined in our{" "}
            <Link legacyBehavior href="/constitution">
              <a className="text-blue-600 hover:underline">constitution</a>
            </Link>
            .
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Are events recorded?</h2>
        <ul className="list-disc pl-6">
          <li>
            In general, the CSSU will try to record events if appropriate and
            consensual. For example, a networking session would not be recorded,
            but a seminar might be.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">
          How do I get involved with CS at the university? What about the CSSU?
        </h2>
        <ul className="list-disc pl-6">
          <li>
            We&apos;ve curated a list of student groups on our{" "}
            <Link legacyBehavior href="/community">
              <a className="text-blue-600 hover:underline">community page</a>
            </Link>
            . If you feel that you don&apos;t have the level of preparation to
            join the clubs, reach out anyway! The organizers and your peers can
            be invaluable resources. To get involved with the CSSU, you can
            attend events, volunteer for{" "}
            <Link legacyBehavior href="/ba2250">
              <a className="text-blue-600 hover:underline">Office Operations</a>
            </Link>
            , apply to join{" "}
            <Link legacyBehavior href="/about">
              <a className="text-blue-600 hover:underline">General Council</a>
            </Link>
            , or run for{" "}
            <Link legacyBehavior href="/about">
              <a className="text-blue-600 hover:underline">Executive Council</a>
            </Link>
            .
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">
          How can I find internship and work study opportunities?
        </h2>
        <ul className="list-disc pl-6">
          <li>
            At UofT, you can make use of{" "}
            <a
              href="https://clnx.utoronto.ca/home.htm"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              CLNx
            </a>
            .
          </li>
          <li>
            The Faculty of Arts &amp; Science offers the{" "}
            <a
              href="https://www.artsci.utoronto.ca/current/experiential-learning/internships/asip"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Arts &amp; Science Internship Program
            </a>
            . Also see their{" "}
            <a
              href="https://artsci.calendar.utoronto.ca/section/ASIP"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              calendar
            </a>
            .
          </li>
          <li>
            DCS also provides a few initiatives:
            <ul className="list-disc pl-6">
              <li>
                <a
                  href="https://www.technologyleadershipinitiative.com/"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Technology Leadership Initiative
                </a>
              </li>
              <li>
                <a
                  href="https://q.utoronto.ca/courses/221753"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Computer Science Undergrads Quercus
                </a>
              </li>
            </ul>
          </li>
          <li>
            Outside of school, you can also find various job boards like on{" "}
            <a
              href="https://www.linkedin.com/jobs/"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>{" "}
            and{" "}
            <a
              href="https://github.com/pittcsc"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              PittCSC
            </a>
            .
          </li>
        </ul>
      </section>
    </article>
  );
}
