import React, { useEffect } from 'react';

import { setTokenWrapper, requestReceivedEventsInit } from './utils';

const fetchDataWrapper = async () => {
  await setTokenWrapper();
  const res = await requestReceivedEventsInit();
  console.log(res);
};

export default function TimeLine() {
  useEffect(() => {
    fetchDataWrapper();
  });
  return <div>TimeLine</div>;
}
