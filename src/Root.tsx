import React from 'react';
import { authLink } from './const';

export default function Root() {
  return (
    <div>
      <a href={authLink}>로그인하기</a>
    </div>
  );
}
