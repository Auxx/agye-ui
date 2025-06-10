import type { Meta, StoryObj } from '@storybook/angular';
import { Projection } from '../../types';
import { allButtonTypes, allColors } from '../types';
import { RaisedButtonComponent } from './raised-button.component';

/**
 * A basic button which can render any valid HTML as its label.
 * It comes with predefined transitions and animations as well as the ability to customise its look and feel.
 * `RaisedButton` also supports custom styling, see below.
 */
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
      [disabled]="disabled"
      [color]="color">
      {{ ngContent }}
    </agye-raised-button>
    `
  })
};

export const SimplePrimaryButton: Story = {
  render: props => ({
    props,
    template: `
    <agye-raised-button>Apply</agye-raised-button>
    `
  })
};

export const DeleteButton: Story = {
  render: props => ({
    props,
    template: `
    <agye-raised-button color="warn">Delete</agye-raised-button>
    `
  })
};

/**
 * It is possible to customise most visual aspects of `RaisedButton`
 * with the help of CSS variables. CSS variables can be set either through
 * a stylesheet or with the help of Angular `[style]` binding as seen in the example below.
 * The `[style]` binding can also accept a single object with multiple variables.
 *
 * The following CSS variables can be used for custom styling:
 *
 * | Variable                           |
 * |------------------------------------|
 * | --raised-button-font-family        |
 * | --raised-button-font-weight        |
 * | --raised-button-font-size          |
 * | --raised-button-font-style         |
 * | --raised-button-border-radius      |
 * | --raised-button-color              |
 * | --raised-button-hover-color        |
 * | --raised-button-disabled-color     |
 * | --raised-button-background-color   |
 * | --raised-button-vertical-padding   |
 * | --raised-button-horizontal-padding |
 * | --raised-button-height             |
 * | --raised-button-gap                |
 */
export const CustomStyling: Story = {
  render: props => ({
    props,
    template: `
    <agye-raised-button
      [style.--raised-button-color]="'#FEE'"
      [style.--raised-button-background-color]="'#F30'"
      [style.--raised-button-hover-color]="'#FFF'"
      [style.--raised-button-border-radius]="'0'">
      Remove option
    </agye-raised-button>
    `
  })
};
