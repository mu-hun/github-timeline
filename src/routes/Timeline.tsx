import React, { useEffect } from 'react';

import Cards from '../components/Cards';

import { useStore } from '../store/contexts';
import { useObserver } from 'mobx-react';
import { More } from '../components/Button';

export default function TimeLine() {
  const { updateEventsInit, updateEvents, data } = useStore();

  useEffect(() => {
    updateEventsInit();
  }, [updateEventsInit]);

  return useObserver(() => (
    <div>
      {data.length > 0 ? (
        <>
          <Cards data={data} />
          <More onClick={updateEvents}>More</More>
        </>
      ) : (
        <span>Loding..</span>
      )}
    </div>
  ));
}
