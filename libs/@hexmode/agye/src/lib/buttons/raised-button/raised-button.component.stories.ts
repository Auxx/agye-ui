import type { Meta, StoryObj } from '@storybook/angular';
import { expect } from '@storybook/jest';
import { within } from '@storybook/testing-library';
import { RaisedButtonComponent } from './raised-button.component';

const meta: Meta<RaisedButtonComponent> = {
  component: RaisedButtonComponent,
  title: 'RaisedButtonComponent'
};
export default meta;
type Story = StoryObj<RaisedButtonComponent>;

export const Primary: Story = {
  tags: [ '!autodocs' ],
  args: {}
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/raised-button works!/gi)).toBeTruthy();
  }
};
