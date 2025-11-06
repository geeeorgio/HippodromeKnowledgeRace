import React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

const SoundSvg = (props: SvgProps) => {
  return (
    <Svg {...props} fill="none" viewBox="0 0 21 26">
      <Path
        fill={props.color || '#fff'}
        fillRule="evenodd"
        d="M11.24 19.63v-3.67H5.664a4.332 4.332 0 1 0 .538 8.63l.742-.094a4.906 4.906 0 0 0 4.296-4.865"
        clipRule="evenodd"
      ></Path>
      <Path
        stroke={props.color || '#fff'}
        strokeWidth="2.222"
        d="M11.24 7.96v-.814c0-2.159 0-3.238.633-3.983.632-.745 1.696-.924 3.824-1.28l3.143-.523c.182-.029.273-.045.32.008.049.054.027.142-.017.32L17.95 6.463c-.02.08-.03.12-.059.147s-.066.034-.148.05zm0 0v8m0 0v3.671a4.906 4.906 0 0 1-4.295 4.867l-.743.093a4.332 4.332 0 1 1-.537-8.63z"
      ></Path>
    </Svg>
  );
};

export default SoundSvg;
