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
export const Message = () => <Icons icon={ICONS.Message} />;
export const Clock = () => <Icons icon={ICONS.Clock} />;
export const ArrowCircleLeft = () => <Icons icon={ICONS.ArrowCircleLeft} />;
export const ArrowCircleRight = () => <Icons icon={ICONS.ArrowCircleRight} />;
export const Share = () => <Icons icon={ICONS.Share} />;
export const Twitter = () => <Icons icon={ICONS.Twitter} />;
export const LinkedIn = () => <Icons icon={ICONS.LinkedIn} />;
export const Facebook = () => <Icons icon={ICONS.Facebook} />;
export const Bookmark = () => <Icons icon={ICONS.Bookmark} />;
export const ArrowRight = () => <Icons icon={ICONS.ArrowRight} />;
export const ArrowLeft = () => <Icons icon={ICONS.ArrowLeft} />;
export const Cross = () => <Icons icon={ICONS.Cross} />;
export const Image = () => <Icons icon={ICONS.Image} />;
export const Link = () => <Icons icon={ICONS.Link} />;
export const Menu = () => <Icons icon={ICONS.Menu} />;
