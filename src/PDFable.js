import React from 'react';
import PDFJSAnnotate from 'pdf-annotate';

const { UI } = PDFJSAnnotate;
const RENDER_OPTIONS = {
  pdfDocument: null,
  scale: 1,
  rotate: 0
};

export class PDFable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        There should be a PDF here
      </div>
    );
  }
}

PDFable.propTypes = {};
PDFable.defaultProps = {};
