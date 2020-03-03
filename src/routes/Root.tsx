import React from 'react';
import { authLink } from '../utils/const';
import { useStore } from '../store/contexts';

import { Redirect } from 'react-router-dom';

export default function Root() {
  const { token } = useStore();
  if (token.length > 0) return <Redirect to="/timeline" />;
  return (
    <div>
      <a href={authLink}>로그인하기</a>
    </div>
  );
}
