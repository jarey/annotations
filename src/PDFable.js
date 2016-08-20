import React from 'react';
import PDFJS from 'pdfjs-dist';
import PDFJSAnnotate from 'pdf-annotate';

// const testPDF = '../static/feasibility-study.pdf';

const { UI } = PDFJSAnnotate;
const RENDER_OPTIONS = {
  documentId: 'pdfview',
  pdfDocument: null,
  scale: 1,
  rotate: 0
};

export class PDFable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    PDFJS.getDocument('concept-design.pdf').then((pdf) => {
      pdf.getPage(1).then((page) => {
        let scale = 1.5;
        let viewport = page.getViewport(scale);
        let canvas = document.getElementById('pdfview');
        let context = canvas.getContext('2d');

        canvas.height = viewport.height;
        canvas.width = viewport.width;

        let renderContext = {
          canvasContext: context,
          viewport: viewport
        };
        page.render(renderContext);
      });
    });
  }

  render() {
    return (
      <canvas id="pdfview"></canvas>
    );
  }
}

PDFable.propTypes = {};
PDFable.defaultProps = {};
