import React from 'react';
import { DotLoader } from 'react-spinners';

type IProps = {
  dark?: boolean;
  size?: number;
};
export default function Loading({ dark, size = 20 }: IProps) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <DotLoader size={size} color={dark ? '#e02041' : '#f0f0f5'} />
    </div>
  );
}
