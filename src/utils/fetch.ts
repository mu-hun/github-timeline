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

export const getCode = () => {
  const parsed = qs.parse(window.location.search);
  if (!parsed.code) throw Error('code 쿼리 문자열 없음');
  return { code: parsed.code } as Code;
};

export const getTokenFromProxy = async (code: Code) => {
  const res = await axios.post<accessToken>(proxyURL, code, {
    headers: {
      accept: 'application/json',
    },
  });

  if (res.status !== 201)
    throw Error('[utils.ts] getTokenFromProxy 에서 토큰을 못 얻음');

  return { access_token: res.data.access_token };
};

export const requestName = async (token: string) => {
  const { login } = (
    await axios.get<User>('https://api.github.com/user', {
      headers: { Authorization: 'token ' + token },
    })
  ).data;
  return { name: login };
};

export const requestReceivedEvents = ({
  token,
  name,
  page,
}: ReceivedEventsProp) =>
  axios.get<ReceivedEvents>(
    `https://api.github.com/users/${name}/received_events?page=${page || 1}`,
    { headers: { Authorization: 'token ' + token } }
  );
