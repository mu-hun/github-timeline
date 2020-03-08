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
      {cardsReducer(data).map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </ul>
  ));
}

const Loding = () => <section>Loding..</section>;

export const cardsReducer = (events: ReceivedEvents): CardProp[] =>
  events.reduce((ret, { actor, repo }, index) => {
    const arrayLen = ret.length - 1;
    if (ret[arrayLen]?.profile.username === actor.login) {
      ret[arrayLen].repos.push(repo.name);
      return ret;
    }

    ret.push({
      profile: { avatarURL: actor.avatar_url, username: actor.login },
      repos: [repo.name],
    });
    return ret;
  }, [] as CardProp[]);
