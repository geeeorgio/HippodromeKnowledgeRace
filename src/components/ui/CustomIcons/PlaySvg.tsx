import React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Mask, Path } from 'react-native-svg';

const PlaySvg = (props: SvgProps) => {
  return (
    <Svg fill="none" viewBox="0 0 25 25" {...props}>
      <Mask
        id="mask0_2002_415"
        width="25"
        height="25"
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: 'luminance' }}
      >
        <Path
          fill={props.color || '#fff'}
          stroke="#fff"
          strokeLinejoin="round"
          strokeWidth="2.667"
          d="M12.167 23C18.15 23 23 18.15 23 12.167S18.15 1.333 12.167 1.333 1.334 6.183 1.334 12.167C1.333 18.15 6.183 23 12.167 23Z"
        ></Path>
        <Path
          fill={props.color || '#000'}
          stroke="#000"
          strokeLinejoin="round"
          strokeWidth="2.667"
          d="M10 12.167V8.414l3.25 1.876 3.25 1.877-3.25 1.876L10 15.919z"
        ></Path>
      </Mask>
      <g mask="url(#mask0_2002_415)">
        <Path fill={props.color || '#fff'} d="M-.833-.833h26v26h-26z"></Path>
      </g>
    </Svg>
  );
};

export default PlaySvg;
