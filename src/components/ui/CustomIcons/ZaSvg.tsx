import React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

const ZaSvg = (props: SvgProps) => {
  return (
    <Svg {...props} fill="none" viewBox="0 0 26 28">
      <Path
        fill={props.color || '#fff'}
        d="M24 9h-5v2h5v2h-4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h6v-8c0-1.103-.897-2-2-2m0 8h-4v-2h4zM13 0 8 6h10zm0 28 5-6H8zM8 17H2.507L8 11V9H0v2h5.5L0 17v2h8zm8-2v-2h-6v2z"
      ></Path>
    </Svg>
  );
};

export default ZaSvg;
