import React from "react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources",
  description: "List of Resources for CS students",
};

export default function ResourcesPage() {
  return (
    <article className="max-w-4xl mx-auto p-6">
      <header>
        <h1 className="text-4xl font-bold mb-4">Resources</h1>
        <p className="mb-8">List of Resources for CS students</p>
      </header>

      {/* CSSU Resources */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">
          Computer Science Student Union (CSSU)
        </h2>
        <ul className="list-disc pl-6">
          <li>
            <Link legacyBehavior href="/posts/first-years-guide-to-cs">
              <a className="text-blue-600 hover:underline">
                CSSU First Year&apos;s Guide to CS
              </a>
            </Link>
          </li>
          <li>
            <strong>Mental Health Resources</strong> (see below)
          </li>
        </ul>
      </section>

      {/* Department of Computer Science */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">
          Department of Computer Science
        </h2>
        <ul className="list-disc pl-6">
          <li>
            <a
              href="https://web.cs.toronto.edu/undergraduate/current"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Department of Computer Science Student Resources
            </a>
            <p className="ml-4">
              The department provides many useful resources for undergraduate
              students. This page is a must-see for students looking to explore
              and succeed in computer science.
            </p>
          </li>
          <li>
            <a
              href="https://courseography.cdf.toronto.edu/graph"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              CS Courseography - visualize the sequence of CSC courses
            </a>
          </li>
        </ul>
      </section>

      {/* Teaching Laboratories */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-2">Teaching Laboratories</h3>
        <ul className="list-disc pl-6">
          <li>
            <a
              href="https://www.teach.cs.toronto.edu/resources/introduction-for-new-students-using-the-teach-cs-labs/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              CS Teaching Labs Intro
            </a>
          </li>
          <li>
            <a
              href="https://www.teach.cs.toronto.edu/using-labs/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Using Teaching Labs
            </a>
          </li>
          <li>
            Students in CS major or specialist get Free 300 pages of printing in
            Bahen Teaching Labs each semester.
          </li>
        </ul>
      </section>

      {/* Faculty of Arts & Science */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">
          Faculty of Arts &amp; Science
        </h2>
        <ul className="list-disc pl-6">
          <li>
            <a
              href="https://www.artsci.utoronto.ca/current/academic-advising-and-support/online-resources-students"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Faculty of Arts and Science Student Resources
            </a>
          </li>
          <li>
            <a
              href="https://artsci.calendar.utoronto.ca/section/Computer-Science"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Computer Science courses and programs details
            </a>
          </li>
          <li>
            <a
              href="https://ttb.utoronto.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Arts &amp; Science timetable - search for course listings
            </a>
          </li>
        </ul>
      </section>

      {/* University of Toronto */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">University of Toronto</h2>
        <ul className="list-disc pl-6">
          <li>
            <a
              href="https://login.library.utoronto.ca/index.php?url=https://exams.library.utoronto.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Past Exams Repository
            </a>
          </li>
          <li>
            <a
              href="https://writing.utoronto.ca/writing-centres/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              UofT Writing Centers
            </a>
          </li>
          <li>
            <a
              href="https://onlinelearning.utoronto.ca/coursera-sgs/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Free Courses on Coursera
            </a>
          </li>
          <li>
            <a
              href="https://www.classcentral.com/university/utoronto"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Free Courses on Lynda/class central
            </a>
          </li>
          <li>
            <a
              href="https://uofthub.ca/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              UofTHub - information about courses
            </a>
          </li>
        </ul>
      </section>

      {/* Community */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Community</h2>
        <ul className="list-disc pl-6">
          <li>
            <a
              href="https://discord.gg/2yNfRKXCvq"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              UofT Discord Student Hub - central hub for links to numerous UofT
              Discord servers
            </a>
            <ul className="list-disc pl-6">
              <li>
                <a
                  href="https://discord.gg/R9hneMaafD"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  CSSU Discord Server
                </a>
              </li>
              <li>
                <a
                  href="https://discord.gg/QrT4w8Qyx2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Unofficial UofT CS Discord Server
                </a>
              </li>
            </ul>
          </li>
          <li>
            <Link legacyBehavior href="/ba2250">
              <a className="text-blue-600 hover:underline">
                CSSU Student Lounge - <strong>open now!</strong>
              </a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/community">
              <a className="text-blue-600 hover:underline">
                Student Groups on Campus
              </a>
            </Link>
          </li>
        </ul>
      </section>

      {/* Free Software */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Free Software</h2>
        <ul className="list-disc pl-6">
          <li>
            <a
              href="https://education.github.com/pack"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Github Student Developer Pack: JetBrains, Azure, etc.
            </a>
          </li>
          <li>
            <a
              href="https://uoft.onthehub.com/WebStore/Security/Signin.aspx?rurl=%2FWebStore%2FOfferingDetails.aspx%3Fo%3D499fe89c-cb3a-e511-940f-b8ca3a5db7a1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              OnTheHub: Windows 10 Education, Adobe CC etc.
            </a>
          </li>
          <li>
            <a
              href="https://www.office.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Microsoft Office 365 (sign in with your UofT Email)
            </a>
          </li>
          <li>
            <a
              href="https://utoronto.zoom.us/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Zoom
            </a>
          </li>
          <li>
            <a
              href="https://isea.utoronto.ca/services/vpn/utorvpn/users/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              UofT VPN - simulate UofT network
            </a>
          </li>
        </ul>
      </section>

      {/* Free Media */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Free Media</h2>
        <ul className="list-disc pl-6">
          <li>
            <a
              href="https://mediacommons.library.utoronto.ca/criterion-demand"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              UofT Criterion-on-Demand
            </a>
          </li>
          <li>
            <a
              href="https://utoronto.kanopy.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Kanopy
            </a>
          </li>
          <li>
            <a
              href="https://login.library.utoronto.ca/index.php?url=http://utoronto.naxosmusiclibrary.com/homepage.asp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Naxos music library
            </a>
          </li>
        </ul>
      </section>

      <hr className="my-8" />

      {/* Mental Health Resources */}
      <section className="mb-8">
        <h1 className="text-2xl font-bold mb-4">Mental Health Resources</h1>
        <ul className="list-disc pl-6 mb-4">
          <li className="font-bold">Call 911 if at immediate risk.</li>
          <li className="font-bold">
            If you are: feeling desperate and hopeless, worried you might hurt
            yourself, someone else or having suicidal thoughts, alone with no
            one to talk to.
          </li>
          <li className="font-bold">
            If you have: made a plan, the means to hurt yourself or someone else
            (e.g. pills or a weapon), attempted suicide or hurt yourself before.
          </li>
        </ul>
        <h2 className="text-xl font-semibold mb-2">
          Talk to someone right NOW
        </h2>
        <h3 className="text-lg font-semibold mb-2">
          24/7 Emergency counseling services
        </h3>
        <p className="mb-4">
          <a
            href="https://mentalhealth.utoronto.ca/my-student-support-program/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            U of T My Student Support Program (My SSP)
          </a>{" "}
          | <strong>1-844-451-9700</strong>. Outside of North America, call{" "}
          <strong>001-416-380-6578</strong>. Culturally-competent mental health
          and counseling services in 146 languages for all U of T students.
        </p>
        <p className="mb-4">
          <a
            href="https://good2talk.ca/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Good2Talk Student Helpline
          </a>{" "}
          | <strong>1-866-925-5454</strong>
          <br />
          Professional counseling, information and referrals helpline for mental
          health, addictions and students well-being.
        </p>
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">
            Contacts for different types of distress
          </h2>
          <p className="mb-4">
            Life is complicated and doesn’t always go as planned. If you are in
            distress, we can connect you to the help you need.
          </p>
          <p className="mb-4">
            Download the{" "}
            <a
              href="https://studentlife.utoronto.ca/wp-content/uploads/Feeling-distressed.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Feeling distressed
            </a>{" "}
            (PDF) for contacts resources to support you through different kinds
            of distress:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>24/7 EMERGENCY</li>
            <li>Mental health</li>
            <li>Academic</li>
            <li>Financial (difficulties due to unexpected circumstances)</li>
            <li>Housing (temporary housing crisis)</li>
            <li>Sexual assault/safety</li>
            <li>Equity offices and communities of care on campus</li>
          </ul>
          <p className="mb-4">
            Contacts include on-campus and community supports during business
            hours and 24/7.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">
            Students with disabilities
          </h2>
          <p className="mb-4">
            Students with disabilities, including mental health disabilities
            (examples include depression, social anxiety, obsessive compulsive
            disorder), can reach out to{" "}
            <a
              href="https://studentlife.utoronto.ca/department/accessibility-services/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              accessibility services
            </a>{" "}
            for a broad range of accommodations services and supports,
            including:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Disability related supports and strategies</li>
            <li>
              Accommodations related to course work and in-course components
            </li>
            <li>Test and exam accommodations and resources</li>
            <li>Opportunities to engage with peers through student socials</li>
          </ul>
          <p className="mb-4">
            Please visit the{" "}
            <a
              href="https://studentlife.utoronto.ca/department/accessibility-services/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              accessibility services website
            </a>{" "}
            for more information about supports, services and how to register.
            To book an appointment, please call <strong>416-978-8060</strong> or
            email{" "}
            <a
              href="mailto:accessibility.services@utoronto.ca"
              className="text-blue-600 hover:underline"
            >
              accessibility.services@utoronto.ca
            </a>
            .
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">
            Student mental health website
          </h2>
          <p className="mb-4">
            The University recently launched a new{" "}
            <a
              href="https://mentalhealth.utoronto.ca/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              student mental health website
            </a>{" "}
            to help you find mental health supports across the tri-campus. The
            website features a robust search and filter function that allows you
            to match your needs with the many types of supports available across
            the University and its community partners.
          </p>
          <p className="mb-4">
            March 17, 2021 -- The CSSU speaks on behalf of Computer Science
            Students at the Business Board of the UofT Governing Council, on the
            subject of the 2021-2022 Tuition Schedules.
          </p>
          <p className="mb-4">
            Didn&apos;t find what you were looking for? See our{" "}
            <Link legacyBehavior href="/posts/faq">
              <a className="text-blue-600 hover:underline">FAQ</a>
            </Link>
            .
          </p>
        </section>
      </section>
    </article>
  );
}
