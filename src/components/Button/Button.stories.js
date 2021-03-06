import React from 'react';
import { ButtonMaterial } from '.';

export default {
  title: 'Components/Button',
  component: ButtonMaterial,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['large', 'medium', 'small']
      }
    },
  },
  args: {
    size: 'medium'
  }
};

const Template = (args) => <ButtonMaterial {...args} />;

export const Solid = Template.bind({});

Solid.args = {
  className: 'solid',
  children: 'Button Label',
  disabled: false
};

export const Outline = Template.bind({});

Outline.args = {
  className: 'outline',
  children: 'Button Label',
  disabled: false
};

export const Subtle = Template.bind({});

Subtle.args = {
  className: 'subtle',
  children: 'Button Label',
  disabled: false
};

export const Ghost = Template.bind({});

Ghost.args = {
  className: 'ghost',
  children: 'Button Label',
  disabled: false
};

export const Danger = Template.bind({});

Danger.args = {
  className: 'danger',
  children: 'Button Label',
  disabled: false,
  variant: 'contained',
};

export const Inverse = Template.bind({});

Inverse.args = {
  className: 'inverse',
  children: 'Button Label',
  disabled: false
};