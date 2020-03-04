import React, { useEffect } from 'react';
import { useStore } from '../../store/contexts';

import View from './View';

export default function TimeLine() {
  const { isHaveToken, setToken, setUsername, updateEvents } = useStore();

  const prepareToFetch = async () => {
    await setToken();
    await setUsername();
  };

  const fetchEvents = async () => {
    if (!isHaveToken()) await prepareToFetch();
    await updateEvents();
  };

  useEffect(() => {
    fetchEvents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <View />;
}
