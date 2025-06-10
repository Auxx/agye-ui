import type { Meta, StoryObj } from '@storybook/angular';
import { Projection } from '../../types';
import { allButtonTypes, allColors } from '../types';
import { RaisedButtonComponent } from './raised-button.component';

const meta: Meta<Projection<RaisedButtonComponent>> = {
  component: RaisedButtonComponent,
  title: 'Components/Buttons/RaisedButton',

  args: {
    ngContent: 'New item',
    color: allColors[0],
    type: allButtonTypes[0],
    disabled: false
  },

  argTypes: {
    ngContent: {
      name: 'Label',
      description: 'Button label, passed tag content',
      table: { category: 'Presentation', defaultValue: { summary: '' } }
    },
    color: {
      control: 'select',
      options: allColors,
      description: 'Button colour',
      table: {
        category: 'Presentation',
        defaultValue: { summary: allColors[0] },
        type: { summary: 'Color' }
      }
    },
    type: {
      control: 'radio',
      options: allButtonTypes,
      description: 'Type of the button',
      table: {
        category: 'Behaviour',
        defaultValue: { summary: allButtonTypes[0] },
        type: { summary: 'ButtonType' }
      }
    },
    disabled: {
      description: 'Flag to disable the button',
      table: { category: 'Behaviour', defaultValue: { summary: 'false' } }
    }
  },

  parameters: {
    docs: {
      description: {
        component: `
A basic button which can render any valid HTML as its label.
        `
      }
    }
  }
};
export default meta;
type Story = StoryObj<Projection<RaisedButtonComponent>>;

export const Primary: Story = {
  // tags: [ '!autodocs' ],
  render: props => ({
    props,
    template: `
    <agye-raised-button
      [type]="type"
      [disabled]="disabled"
      [color]="color">
      {{ ngContent }}
    </agye-raised-button>
    `
  })
};
