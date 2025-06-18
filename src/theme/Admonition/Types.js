import React from 'react';
import DefaultAdmonitionTypes from '@theme-original/Admonition/Types';

function JpeExampleAdmonition(props) {
  return (
    <div style={{border: 'solid red', padding: 10}}>
      <h5 style={{color: 'blue', fontSize: 30}}>{props.title}</h5>
      <div>{props.children}</div>
    </div>
  );
}

const AdmonitionTypes = {
  ...DefaultAdmonitionTypes,

  // Add all your custom admonition types here...
  'jpe-example': JpeExampleAdmonition,
};

export default AdmonitionTypes;