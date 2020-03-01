import 'dotenv/config';

const clientID = process.env.clientID!;
const redirectURL = 'http://localhost:3000/timeline';

export const authLink = `https://github.com/login/oauth/authorize?client_id=${clientID}&redirect_uri=${redirectURL}`;
