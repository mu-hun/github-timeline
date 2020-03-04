import React, { useEffect } from 'react';
import { useStore } from '../../store/contexts';

import View from './View';

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

  return <View />;
}
