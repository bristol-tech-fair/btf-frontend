import React from 'react';
import Robot from './Robot';
import { ROBOPATH } from './path';

export default {
  title: 'Components/Robot',
  component: Robot
};
/*
 * "height=''  width=''" : resize image
 * path={ROBOPATH.Robopath} path of the image
 */
export const RobotTest = () => <Robot path={ROBOPATH.Robopath} />;
export const RobotTest2 = () => (
  <Robot path={ROBOPATH.Robopath} width="200" height="194" />
);
