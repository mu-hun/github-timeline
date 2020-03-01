import axios from 'axios';
import { Code, Feeds, accessToken } from './types';

import qs from 'query-string';

const proxyURL = 'http://localhost:4000';

const setToken = (token: string) => localStorage.setItem('token', token);

const getToken = () => localStorage.getItem('token');

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

export const requestFeeds = (token: string) =>
  axios.get<Feeds>('https://api.github.com/feeds', {
    headers: { Authorization: 'token ' + token },
  });

export const requestFeedsWrapper = () => {
  const token = getToken();
  if (token === null)
    throw Error('[utils.ts] requestFeedWrapper 에서 토큰을 찾지 못함');
  return requestFeeds(token);
};
