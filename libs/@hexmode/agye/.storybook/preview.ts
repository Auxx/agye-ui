import { Preview } from '@storybook/angular';

const preview: Preview = {
  tags: [ 'autodocs' ],
  parameters: {
    options: {
      storySort: {
        order: [ 'Intro', 'Components' ]
      }
    }
  }
};

export default preview;
