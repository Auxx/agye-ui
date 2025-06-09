import type { Meta, StoryObj } from '@storybook/angular';
import { expect } from '@storybook/jest';
import { within } from '@storybook/testing-library';
import { Projection } from '../../types';
import { allButtonTypes } from '../types';
import { RaisedButtonComponent } from './raised-button.component';

const meta: Meta<Projection<RaisedButtonComponent>> = {
  component: RaisedButtonComponent,
  title: 'Components/Buttons/RaisedButton',

  args: {
    ngContent: 'New item',
    type: allButtonTypes[0],
    disabled: false
  },

  argTypes: {
    ngContent: {
      name: 'Label',
      description: 'Button label, passed tag content',
      table: { category: 'Presentation', defaultValue: { summary: '' } }
    },
    type: {
      control: 'radio',
      options: allButtonTypes,
      description: 'Type of the button',
      table: { category: 'Behaviour', defaultValue: { summary: allButtonTypes[0] }, type: { summary: 'ButtonType' } }
    },
    disabled: {
      description: 'Flag to disable the button',
      table: { category: 'Behaviour', defaultValue: { summary: 'false' } }
    }
  }
};
export default meta;
type Story = StoryObj<Projection<RaisedButtonComponent>>;

export const Primary: Story = {
  tags: [ '!autodocs' ],
  render: props => ({
    props,
    template: `
    <agye-raised-button
      [type]="type"
      [disabled]="disabled">
      {{ ngContent }}
    </agye-raised-button>
    `
  })
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText(/raised-button works!/gi)).toBeTruthy();
  }
};
