import React from 'react';
// Importe le mapper original + nos composants selon la doc docusaurus
import MDXComponents from '@theme-original/MDXComponents';
import Highlight from '@site/src/components/Highlight';
import Columns from '@site/src/components/Columns';
import Column from '@site/src/components/Column';
import Card from "@site/src/components/Card";
import CardBody from "@site/src/components/Card/CardBody";
import CardFooter from "@site/src/components/Card/CardFooter";
import CardHeader from "@site/src/components/Card/CardHeader";
import CardImage from "@site/src/components/Card/CardImage";
import Tooltip from '@site/src/components/Tooltip';
import BrowserWindow from '../components/BrowserWindow';

export default {
  // Réutilise la correspondance par défaut
  ...MDXComponents,
  
  BrowserWindow,
  Highlight,
  Columns,
  Column,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardImage,
  Tooltip,
};