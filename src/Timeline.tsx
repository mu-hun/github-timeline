import React, { useEffect, useState } from 'react';

import {
  setTokenWrapper,
  requestReceivedEvents,
  requestReceivedEventsInit,
  getRequestReceivedEventsProp,
} from './utils';
import { ReceivedEvents } from './types';
import Cards from './components/Cards';
import { More } from './components/Button';

export default function TimeLine() {
  const [timeline, setTimeline] = useState<ReceivedEvents>();
  const [page, setPage] = useState<number>(1);

  const fetchDataWrapper = async () => {
    await setTokenWrapper();
    const res = await requestReceivedEventsInit();
    setTimeline(res);
  };

  const handleClick = async () => {
    setPage(page + 1);
    const { data } = await requestReceivedEvents({
      ...getRequestReceivedEventsProp(),
      page,
    });
    setTimeline([...timeline, ...data]);
  };

  useEffect(() => {
    fetchDataWrapper();
  }, []);

  return (
    <div>
      {timeline ? (
        <>
          <Cards data={timeline} />
          <More onClick={handleClick}>More</More>
        </>
      ) : (
        <span>Loding..</span>
      )}
    </div>
  );
}
