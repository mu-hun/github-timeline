import React from 'react';

import { useObserver } from 'mobx-react';
import { useStore } from '../../store/contexts';

import { ReceivedEvents } from '../../utils/types';
import Card, { CardProp } from '../../components/Card';
import { More } from '../../components/Button';

export default function View() {
  const { isHaveItem } = useStore();
  return useObserver(() => (isHaveItem() ? <Section /> : <Loding />));
}

const Section = () => (
  <section>
    <CardsWrapper />
    <More />
  </section>
);

function CardsWrapper() {
  const { data } = useStore();
  return useObserver(() => (
    <ul>
      {cardsMapper(data).map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </ul>
  ));
}

const Loding = () => <section>Loding..</section>;

const cardsMapper = (events: ReceivedEvents): CardProp[] =>
  events.map(({ actor, repo }) => ({
    profile: { avatarURL: actor.avatar_url, username: actor.login },
    content: { actor: actor.login, repo: repo.name },
  }));
