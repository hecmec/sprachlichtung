import React from "react";
import Layout from "@theme/Layout";
import Heading from '@theme/Heading';
import Translate, {translate} from '@docusaurus/Translate';
import clsx from 'clsx';
import styles from './index.module.css';

export default function About(): React.ReactElement {
  return (
    <Layout 
      title={translate({id: 'aboutpage.title'})}
      description="Learn more about our project and team">
      <div className="">
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
          <div className="container">
            <Heading as="h1" className="hero__title">
              <Translate
                  id="aboutpage.title"
                  description="The title on the about page">
                About Us
              </Translate>
            </Heading>
          </div>
        </header>
        <main className="container padding-top--md padding-bottom--lg">
          <div className="row padding-top--lg">
            <div className="column">
              <h3>About SprachLichtung</h3>
              <p className="">
                This is a documentation website for the SprachLichtung project.
              </p>
              <p>
                It is dedicated to providing resources and information on <strong>critical thinking</strong>, social issues, logic, language and more.
              </p>
              <p>
                Our team is passionate about fostering understanding and promoting thoughtful discourse through well-researched content.
              </p>
              <br />
              last update: 27/11/2025
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
}