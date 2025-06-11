import type { Meta, StoryObj } from '@storybook/angular';
import { Projection } from '../../types';
import { allButtonTypes, allColors } from '../types';
import { TextButtonComponent } from './text-button.component';

/**
 * A `TextButton` component can render any valid HTML as its label.
 * It includes predefined transitions and animations, and allows full customisation
 * of its appearance and behaviour.
 * `TextButton` also supports custom styling, as detailed below.
 */
const meta: Meta<Projection<TextButtonComponent>> = {
  component: TextButtonComponent,
  title: 'Components/Buttons/TextButton',

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
type Story = StoryObj<Projection<TextButtonComponent>>;

export const Primary: Story = {
  tags: [ '!autodocs' ],
  render: props => ({
    props,
    template: `
    <agye-text-button
      [type]="type"
      [disabled]="disabled"
      [color]="color">
      {{ ngContent }}
    </agye-text-button>
    `
  })
};

export const SimplePrimaryButton: Story = {
  render: props => ({
    props,
    template: `
    <agye-text-button>Apply</agye-text-button>
    `
  })
};

export const DeleteButton: Story = {
  render: props => ({
    props,
    template: `
    <agye-text-button color="warn">Delete</agye-text-button>
    `
  })
};

/**
 * It is possible to customise most visual aspects of `TextButton` using CSS variables.
 * These variables can be set either via a stylesheet or using Angular `[style]` binding,
 * as shown in the example below. The `[style]` binding can also accept a single object
 * containing multiple variables.
 *
 * The following CSS variables can be used for custom styling:
 *
 * | Variable                    |
 * |-----------------------------|
 * | --button-font-family        |
 * | --button-font-weight        |
 * | --button-font-size          |
 * | --button-font-style         |
 * | --button-border-radius      |
 * | --button-color              |
 * | --button-hover-color        |
 * | --button-disabled-color     |
 * | --button-background-color   |
 * | --button-vertical-padding   |
 * | --button-horizontal-padding |
 * | --button-height             |
 * | --button-gap                |
 */
export const CustomStyling: Story = {
  render: props => ({
    props,
    template: `
    <agye-text-button
      [style.--button-color]="'#F30'"
      [style.--button-hover-color]="'#F52'"
      [style.--button-border-radius]="'0'">
      Remove option
    </agye-text-button>
    `
  })
};
