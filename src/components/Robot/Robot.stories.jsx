import React from 'react';
import Robot from './Robot';
import { ROBOPATH } from './path';

export default {
  title: 'Components/Robot',
  component: Robot
};
/** Props: 'path' - required
 * height, width, viewBox - optional
 */
export const RobotTest = () => <Robot path={ROBOPATH.Robopath} />;
export const RobotTest2 = () => (
  <Robot
    path={ROBOPATH.Robopath}
    height="200"
    width="194"
    viewBox="0 0 200 194"
  />
);
