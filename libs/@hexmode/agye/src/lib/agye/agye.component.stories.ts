import type { Meta, StoryObj } from '@storybook/angular';
import { HexmodeAgyeComponent } from './agye.component';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<HexmodeAgyeComponent> = {
  component: HexmodeAgyeComponent,
  title: 'HexmodeAgyeComponent',
};
export default meta;
type Story = StoryObj<HexmodeAgyeComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/agye works!/gi)).toBeTruthy();
  },
};
