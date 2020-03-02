import React from 'react';

import { ReceivedEvents } from '../types';
import Card, { CardProp } from './Card';

export type CardsProp = { data: ReceivedEvents };

export default function Cards({ data }: CardsProp) {
  const cards = cardsMapper(data);
  return (
    <ul>
      {cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </ul>
  );
}

const cardsMapper = (events: ReceivedEvents): CardProp[] =>
  events.map(({ actor, repo }) => ({
    profile: { avatarURL: actor.avatar_url, username: actor.login },
    content: { actor: actor.login, repo: repo.name },
  }));
