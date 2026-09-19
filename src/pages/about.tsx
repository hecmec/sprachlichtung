import React from "react";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import Link from "@docusaurus/Link";
import Translate, { translate } from "@docusaurus/Translate";
import clsx from "clsx";
import styles from "./index.module.css";

export default function About(): React.ReactElement {
  return (
    <Layout
      title={translate({ id: "aboutpage.title", message: "Über uns", description: "The title on the about page" })}
      description={translate({
        id: "aboutpage.meta.description",
        message: "Was SprachLichtung ist: ein wachsendes Tutorial zum kritischen Denken und Beiträge zu Philosophie, Sprache und Gesellschaft.",
        description: "Meta description of the about page",
      })}>
      <div className="">
        <header className={clsx("hero hero--primary", styles.heroBanner)}>
          <div className="container">
            <Heading as="h1" className="hero__title">
              <Translate id="aboutpage.title" description="The title on the about page">
                Über uns
              </Translate>
            </Heading>
          </div>
        </header>
        <main className="container padding-top--md padding-bottom--lg">
          <div className="row padding-top--lg">
            <div className="column">
              <h3>
                <Translate id="aboutpage.heading" description="Heading above the about text">
                  SprachLichtung: Wir über uns
                </Translate>
              </h3>
              <p>
                <Translate id="aboutpage.intro" description="About page: what the site is">
                  SprachLichtung ist ein Ort zum Nachdenken über Denken, Sprache und Gesellschaft.
                </Translate>
              </p>
              <p>
                <Translate
                  id="aboutpage.tutorial"
                  description="About page: the critical thinking tutorial; {tutorialLink} is a link"
                  values={{
                    tutorialLink: (
                      <Link to="/docs/kritisches-denken/vorwort">
                        <Translate id="aboutpage.tutorial.link" description="Link text to the critical thinking tutorial">
                          Tutorial zum kritischen Denken
                        </Translate>
                      </Link>
                    ),
                  }}>
                  {
                    "Herzstück ist ein {tutorialLink}, aufgebaut wie ein Buch, das ständig wächst: von den Grundlagen der Logik und guten Argumenten über kognitive Verzerrungen und Fehlschlüsse bis zu Manipulation und intellektuellen Tugenden."
                  }
                </Translate>
              </p>
              <p>
                <Translate id="aboutpage.topics" description="About page: philosophy and other topics">
                  Dazu kommen viele Informationen über Philosophie sowie Beiträge zu Sprache, Gesellschaft, Medien und Umwelt.
                </Translate>
              </p>
              <p>
                <Translate id="aboutpage.mission" description="About page: mission statement">
                  Uns liegt daran, Verständnis zu fördern und einen nachdenklichen, gut begründeten Austausch möglich zu machen.
                </Translate>
              </p>
              <br />
              <Translate id="aboutpage.lastUpdate" description="About page: last update date">
                Letzte Aktualisierung: 17. September 2026
              </Translate>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
}
