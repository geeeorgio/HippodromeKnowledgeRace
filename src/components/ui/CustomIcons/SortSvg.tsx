import React from 'react';
import type { SvgProps } from 'react-native-svg';

import AzSvg from './AzSvg';
import ZaSvg from './ZaSvg';

interface SortSvgProps {
  mode: 'asc' | 'desc';
  props: SvgProps;
}

const SortSvg = ({ mode, props }: SortSvgProps) => {
  return mode === 'asc' ? <AzSvg {...props} /> : <ZaSvg {...props} />;
};

export default SortSvg;
