import React from 'react';
import Icons from './Icons';
import { ICONS } from './paths';

export default {
  title: 'Components/Icons',
  component: Icons
};

export const File = () => <Icons icon={ICONS.File} />;
export const Heart = () => (
  <Icons icon={ICONS.Heart} stroke="var(--lightpink)" />
);
export const HeartFull = () => (
  <Icons
    icon={ICONS.HeartFull}
    stroke="var(--lightpink)"
    fill="var(--lightpink)"
  />
);
export const Youtube = () => <Icons icon={ICONS.Youtube} />;
