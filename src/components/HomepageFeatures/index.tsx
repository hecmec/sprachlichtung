import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Translate, {translate} from '@docusaurus/Translate';


type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: translate({
      id: 'homepage.features.ctFundamentals.title',
      message: 'Kritisches Denken — Grundlagen',
    }),
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        <Translate id="homepage.features.ctFundamentals.description">
          Kritisches Denken ist eine wichtige Fähigkeit, die es uns ermöglicht,
          Informationen zu hinterfragen, Argumente zu analysieren und fundierte
          Entscheidungen zu treffen. 
          Wir geben Dir die Werkzeuge an die Hand.
        </Translate>
      </>
    ),
  },
  {
    title: translate({
      id: 'homepage.features.selfDefense.title',
      message: 'Selbstverteidigung gegen Manipulation',
    }),
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        <Translate id="homepage.features.selfDefense.description">
          Nach den Grundlagen des kritischen Denkens geht es darum, die verschiedenen
          Arten von Manipulation, Lügen und anderem Bullshit zu erkennen —
          dann wird es ein Kinderspiel, sich dagegen zu verteidigen.
        </Translate>
      </>
    ),
  },
  {
    title: translate({
      id: 'homepage.features.practice.title',
      message: 'Grau ist alle Theorie — Praxis ist alles',
    }),
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        <Translate id="homepage.features.practice.description">
          Hier geht es darum, das Gelernte in die Praxis umzusetzen. 
          Wir entwickeln Übungen und Quizze, damit dir das kritische Denken zur Gewohnheit wird 
          und du es in Deinem Alltag anwenden kannst.
        </Translate>
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>  
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
