import React, { useEffect } from 'react';

import Cards from '../components/Cards';

import { useStore } from '../store/contexts';
import { useObserver } from 'mobx-react';
import { More } from '../components/Button';

export default function TimeLine() {
  const store = useStore();

  const prepareToFetch = async () => {
    await store.setToken();
    await store.setUsername();
  };

  const fetchEvents = async () => {
    if (store.token.length === 0) await prepareToFetch();
    await store.updateEvents();
  };

  useEffect(() => {
    fetchEvents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return useObserver(() => (
    <div>
      {store.data.length > 0 ? (
        <>
          <Cards data={store.data} />
          <More onClick={store.updateEvents}>More</More>
        </>
      ) : (
        <span>Loding..</span>
      )}
    </div>
  ));
}
