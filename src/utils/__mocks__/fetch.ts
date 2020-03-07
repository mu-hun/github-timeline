import api from './api';
import { ReceivedEventsProp } from '../types';

export const name = 'x86chi';

export const requestName = async (token: string) => Promise.resolve({ name });

export const requestReceivedEvents = ({
  token,
  name,
  page,
}: ReceivedEventsProp) => Promise.resolve({ data: api });
