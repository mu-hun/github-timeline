import React from 'react';

import { useObserver } from 'mobx-react';
import { useStore } from '../../store/contexts';

import { ReceivedEvents } from '../../utils/types';

import Card, { CardProp } from '../../components/Card';
import { More } from '../../components/Button';
import { Section } from '../../components/Box';

export default function View() {
  const { isHaveItem } = useStore();
  return useObserver(() =>
    isHaveItem() ? (
      <Section>
        <CardsWrapper />
        <More />
      </Section>
    ) : (
      <Loding />
    )
  );
}

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

const Loding = () => <Section>Loding..</Section>;

const cardsMapper = (events: ReceivedEvents): CardProp[] =>
  events.map(({ actor, repo }) => ({
    profile: { avatarURL: actor.avatar_url, username: actor.login },
    content: { actor: actor.login, repo: repo.name },
  }));
