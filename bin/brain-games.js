#!/usr/bin/env node

import questionName from '../src/cli.js';

const app = () => {
  console.log('Welcome to the Brain Games!');

  questionName();
};

app();
