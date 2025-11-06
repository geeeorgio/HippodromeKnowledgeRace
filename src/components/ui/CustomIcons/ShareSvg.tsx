import React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

const ShareSvg = (props: SvgProps) => {
  return (
    <Svg {...props} fill="none" viewBox="0 0 24 23">
      <Path
        fill={props.fill || '#fff'}
        stroke={props.stroke || '#000'}
        d="m15.834 22.494-3.56-7.963 5.841-7.834.002-.002a.754.754 0 0 0-.088-1.003.78.78 0 0 0-.986-.083l-.002.002-8.198 5.614-8.27-3.398 22.91-7.32zM.476 7.818l-.001.003V7.82Z"
      ></Path>
    </Svg>
  );
};

export default ShareSvg;
