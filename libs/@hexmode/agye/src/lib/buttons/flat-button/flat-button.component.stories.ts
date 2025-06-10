import type { Meta, StoryObj } from '@storybook/angular';
import { Projection } from '../../types';
import { allButtonTypes, allColors } from '../types';
import { FlatButtonComponent } from './flat-button.component';

/**
 * A flat button which can render any valid HTML as its label.
 * It comes with predefined transitions and animations as well as the ability to customise its look and feel.
 * `FlatButton` also supports custom styling, see below.
 */
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

export const SimplePrimaryButton: Story = {
  render: props => ({
    props,
    template: `
    <agye-flat-button>Apply</agye-flat-button>
    `
  })
};

export const DeleteButton: Story = {
  render: props => ({
    props,
    template: `
    <agye-flat-button color="warn">Delete</agye-flat-button>
    `
  })
};

/**
 * It is possible to customise most visual aspects of `FlatButton`
 * with the help of CSS variables. CSS variables can be set either through
 * a stylesheet or with the help of Angular `[style]` binding as seen in the example below.
 * The `[style]` binding can also accept a single object with multiple variables.
 *
 * The following CSS variables can be used for custom styling:
 *
 * | Variable                           |
 * |------------------------------------|
 * | --flat-button-font-family        |
 * | --flat-button-font-weight        |
 * | --flat-button-font-size          |
 * | --flat-button-font-style         |
 * | --flat-button-border-radius      |
 * | --flat-button-color              |
 * | --flat-button-hover-color        |
 * | --flat-button-disabled-color     |
 * | --flat-button-background-color   |
 * | --flat-button-vertical-padding   |
 * | --flat-button-horizontal-padding |
 * | --flat-button-height             |
 * | --flat-button-gap                |
 */
export const CustomStyling: Story = {
  render: props => ({
    props,
    template: `
    <agye-flat-button
      [style.--flat-button-color]="'#FEE'"
      [style.--flat-button-background-color]="'#F30'"
      [style.--flat-button-hover-color]="'#F52'"
      [style.--flat-button-border-radius]="'0'">
      Remove option
    </agye-flat-button>
    `
  })
};
