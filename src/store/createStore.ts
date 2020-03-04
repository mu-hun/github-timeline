import {
  getCode,
  getTokenFromProxy,
  requestName,
  requestReceivedEvents,
} from '../utils/fetch';
import { ReceivedEvents } from '../utils/types';

const getToken = () => localStorage.getItem('token');
const getUser = () => localStorage.getItem('username');

export default function createStore() {
  return {
    token: getToken() || '',
    username: getUser() || '',
    page: 1,
    data: [] as ReceivedEvents,
    async setToken() {
      const { access_token } = await getTokenFromProxy(getCode());
      localStorage.setItem('token', access_token);
      this.token = access_token;
    },
    async setUsername() {
      const { name } = await requestName(this.token);
      localStorage.setItem('username', name);
      this.username = name;
    },
    async initConfig() {
      await this.setToken();
      await this.setUsername();
    },
    async updateEvents() {
      const { data } = await requestReceivedEvents({
        token: this.token,
        name: this.username,
        page: this.page,
      });
      this.page++;
      this.data = [...this.data, ...data];
    },
    async updateEventsInit() {
      if (this.token.length === 0) await this.initConfig();
      this.updateEvents();
    },
  };
}

export type Store = ReturnType<typeof createStore>;
