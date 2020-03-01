import React, { useEffect } from 'react';

import { setTokenWrapper, requestFeedsWrapper } from './utils';

const fetchDataWrapper = async () => {
  await setTokenWrapper();
  const res = await requestFeedsWrapper();
  console.log(res.data);
};

export default function TimeLine() {
  useEffect(() => {
    fetchDataWrapper();
  });
  return <div>TimeLine</div>;
}
