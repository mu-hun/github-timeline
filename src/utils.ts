import axios from 'axios';
import {
  Code,
  accessToken,
  User,
  ReceivedEventsProp,
  ReceivedEvents,
} from './types';

import qs from 'query-string';

const proxyURL = 'http://localhost:4000';

const setToken = (token: string) => localStorage.setItem('token', token);

const getToken = () => localStorage.getItem('token');

const setUser = (username: string) =>
  localStorage.setItem('username', username);

const getUser = () => localStorage.getItem('username');

const getCode = () => {
  const parsed = qs.parse(window.location.search);
  if (!parsed.code) throw Error('code 쿼리 문자열 없음');
  return { code: parsed.code } as Code;
};

export const setTokenWrapper = async () => {
  if (typeof getToken() === 'string') return;
  const code = getCode();
  const { access_token } = await getTokenFromProxy(code);
  setToken(access_token);
};

const getTokenFromProxy = async (code: Code) => {
  const res = await axios.post<accessToken>(proxyURL, code, {
    headers: {
      accept: 'application/json',
    },
  });

  if (res.status !== 201)
    throw Error('[utils.ts] getTokenFromProxy 에서 토큰을 못 얻음');

  return { access_token: res.data.access_token };
};

const requestName = async (token: string) => {
  const { login } = (
    await axios.get<User>('https://api.github.com/user', {
      headers: { Authorization: 'token ' + token },
    })
  ).data;
  return { name: login };
};

const requestReceivedEvents = ({ token, name, page }: ReceivedEventsProp) =>
  axios.get<ReceivedEvents>(
    `https://api.github.com/users/${name}/received_events?page=${page || 1}`,
    { headers: { Authorization: 'token ' + token } }
  );

export const requestReceivedEventsInit = async () => {
  const token = getToken();
  if (token === null)
    throw Error('[utils.ts] requestReceivedEventsInit 에서 토큰을 찾지 못함');
  if (getUser() === null) setUser((await requestName(token)).name);
  const name = getUser()!;
  const { data } = await requestReceivedEvents({ token, name });
  return data;
};
