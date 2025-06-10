import type { Meta, StoryObj } from '@storybook/angular';
import { Projection } from '../../types';
import { allButtonTypes, allColors } from '../types';
import { FlatButtonComponent } from './flat-button.component';

const meta: Meta<Projection<FlatButtonComponent>> = {
  component: FlatButtonComponent,
  title: 'Components/Buttons/FlatButton',

  args: {
    ngContent: 'New item',
    color: allColors[0],
    type: allButtonTypes[0],
    disabled: false
  },

  argTypes: {
    ngContent: {
      name: 'Label',
      description: 'Button label, passed as tag content',
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
  }
};
export default meta;
type Story = StoryObj<Projection<FlatButtonComponent>>;

export const Primary: Story = {
  render: props => ({
    props,
    template: `
    <agye-flat-button
      [type]="type"
      [disabled]="disabled"
      [color]="color">
      {{ ngContent }}
    </agye-flat-button>
    `
  })
};
