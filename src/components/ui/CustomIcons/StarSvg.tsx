import React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

const StarSvg = (props: SvgProps) => {
  return (
    <Svg {...props} fill="none" viewBox="0 0 27 26">
      <Path
        fill={props.color || '#fff'}
        d="M26.667 10.188c.133-.667-.4-1.467-1.067-1.467L18 7.655 14.533.72A1.04 1.04 0 0 0 14 .188c-.667-.4-1.467-.133-1.867.533L8.8 7.655 1.2 8.72q-.6 0-.8.4a1.29 1.29 0 0 0 0 1.867l5.467 5.333-1.334 7.6c0 .267 0 .534.134.8.4.667 1.2.934 1.866.534l6.8-3.6 6.8 3.6c.134.133.4.133.667.133h.267c.666-.133 1.2-.8 1.066-1.6l-1.333-7.6 5.467-5.333c.266-.134.4-.4.4-.667"
      ></Path>
    </Svg>
  );
};

export default StarSvg;
