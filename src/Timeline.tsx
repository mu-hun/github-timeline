import React, { useEffect } from 'react';

import { setTokenWrapper, requestReceivedEventsWrapper } from './utils';

const fetchDataWrapper = async () => {
  await setTokenWrapper();
  const res = await requestReceivedEventsWrapper();
  console.log(res);
};

export default function TimeLine() {
  useEffect(() => {
    fetchDataWrapper();
  });
  return <div>TimeLine</div>;
}
