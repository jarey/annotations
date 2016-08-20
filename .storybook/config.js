import { configure } from '@kadira/storybook';

function loadStories() {
  // require as many stories as you need.
  require('./components/pdfable');
}

configure(loadStories, module);
