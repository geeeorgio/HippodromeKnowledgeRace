import React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

const AzSvg = (props: SvgProps) => {
  return (
    <Svg fill="none" viewBox="0 0 26 28" {...props}>
      <Path
        fill={props.color || '#fff'}
        d="M8 11c0-1.103-.897-2-2-2H1v2h5v2H2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h6zm-2 6H2v-2h4zm7-17L8 6h10zm0 28 5-6H8zM26 9h-8v2h5.5L18 17v2h8v-2h-5.493L26 11zm-10 6v-2h-6v2z"
      ></Path>
    </Svg>
  );
};

export default AzSvg;
