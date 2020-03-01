export type Code = { code: string };
export type accessToken = { access_token: string };

const feeds = {
  timeline_url: 'https://github.com/timeline',
  user_url: 'https://github.com/{user}',
  current_user_public_url: 'https://github.com/octocat',
  current_user_url: 'https://github.com/octocat.private?token=abc123',
  current_user_actor_url:
    'https://github.com/octocat.private.actor?token=abc123',
  current_user_organization_url: '',
  current_user_organization_urls: [
    'https://github.com/organizations/github/octocat.private.atom?token=abc123',
  ],
  security_advisories_url: 'https://github.com/security-advisories',
  _links: {
    timeline: {
      href: 'https://github.com/timeline',
      type: 'application/atom+xml',
    },
    user: {
      href: 'https://github.com/{user}',
      type: 'application/atom+xml',
    },
    current_user_public: {
      href: 'https://github.com/octocat',
      type: 'application/atom+xml',
    },
    current_user: {
      href: 'https://github.com/octocat.private?token=abc123',
      type: 'application/atom+xml',
    },
    current_user_actor: {
      href: 'https://github.com/octocat.private.actor?token=abc123',
      type: 'application/atom+xml',
    },
    current_user_organization: {
      href: '',
      type: '',
    },
    current_user_organizations: [
      {
        href:
          'https://github.com/organizations/github/octocat.private.atom?token=abc123',
        type: 'application/atom+xml',
      },
    ],
    security_advisories: {
      href: 'https://github.com/security-advisories',
      type: 'application/atom+xml',
    },
  },
};

export type Feeds = typeof feeds;
