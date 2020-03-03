import { ReceivedEvent } from './const';

export type Code = { code: string };
export type accessToken = { access_token: string };

export type User = { login: string };

type ReceivedEvent = typeof ReceivedEvent;

export type ReceivedEvents = ReceivedEvent[];
export type ReceivedEventsProp = {
  token: string;
  name: string;
  page?: number;
};
