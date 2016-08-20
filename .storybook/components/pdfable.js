import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import PDFable from '../../src/PDFable';

storiesOf('PDFable', module)
  .add('Render a PDF', () => (
    <PDFable></PDFable>
  ));
