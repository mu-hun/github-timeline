import 'dotenv/config';

const clientID = process.env.REACT_APP_CLIENT_ID!;
const redirectURL = 'http://localhost:3000/timeline';

export const authLink = `https://github.com/login/oauth/authorize?client_id=${clientID}&redirect_uri=${redirectURL}`;

export const ReceivedEvent = {
  id: '11650312306',
  type: 'WatchEvent',
  actor: {
    id: 17924127,
    login: 'JaeYeopHan',
    display_login: 'JaeYeopHan',
    gravatar_id: '',
    url: 'https://api.github.com/users/JaeYeopHan',
    avatar_url: 'https://avatars.githubusercontent.com/u/17924127?',
  },
  repo: {
    id: 26238415,
    name: 'springload/frontend-starter-kit',
    url: 'https://api.github.com/repos/springload/frontend-starter-kit',
  },
  payload: {
    action: 'started',
  },
  public: true,
  created_at: '2020-03-02T05:33:43Z',
  org: {
    id: 1691454,
    login: 'springload',
    gravatar_id: '',
    url: 'https://api.github.com/orgs/springload',
    avatar_url: 'https://avatars.githubusercontent.com/u/1691454?',
  },
};
