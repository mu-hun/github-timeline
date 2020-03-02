import React, { useEffect, useState } from 'react';

import { setTokenWrapper, requestReceivedEventsInit } from './utils';
import { ReceivedEvents } from './types';
import Cards from './components/Cards';

export default function TimeLine() {
  const [timeline, setTimeline] = useState<ReceivedEvents>();
  const fetchDataWrapper = async () => {
    await setTokenWrapper();
    const res = await requestReceivedEventsInit();
    setTimeline(res);
  };

  useEffect(() => {
    fetchDataWrapper();
  });

  return (
    <div>{timeline ? <Cards data={timeline} /> : <span>TimeLine</span>}</div>
  );
}
