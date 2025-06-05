import React from "react";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";

export default function About(): React.ReactElement {
  return (
    <Layout      title="About Us"
      description="Learn more about our project and team">
    <div>
      <h1>About Us</h1>
      <p>
        This is a sample Docusaurus site. It is designed to help you get started
        with Docusaurus quickly.
      </p>
      <p>
        For more information, visit the{" "}
        <a href="https://docusaurus.io">Docusaurus website</a>.
      </p>
    </div>
    </Layout>
  );
}