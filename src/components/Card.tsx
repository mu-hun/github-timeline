import React from 'react';
import styled from 'styled-components';

import { MarginRight, Flex, Bold } from '../styles';

type Profile = { avatarURL: string; username: string };
type Content = { actor: string; repo: string };

export type CardProp = { profile: Profile; content: Content };

export default function Card({ profile, content }: CardProp) {
  return (
    <CardWrapper>
      <Profile {...profile} />
      <ContentWrapper {...content} />
    </CardWrapper>
  );
}

const CardWrapper = styled.li`
  display: flex;
  padding: 16px 0;
  align-items: baseline;
  border-bottom: 1px solid #e1e4e8 !important;
`;

const Img = styled.img`
  display: inline-block;
  overflow: hidden;
  line-height: 1;
  vertical-align: middle;
  border-radius: 3px;
  width: 32px;
  height: 32px;
`;

const Content = styled(Flex)`
  align-items: baseline;
`;

const Profile = ({ avatarURL, username }: Profile) => (
  <MarginRight>
    <Img src={avatarURL} alt={username} />
  </MarginRight>
);

const Starred = styled.span`
  margin: 0 0.2em;
`;

const ContentWrapper = ({ actor, repo }: Content) => (
  <Content>
    <Bold as="a" href={'https://github.com/' + actor}>
      {actor}
    </Bold>
    <Starred>starred</Starred>
    <Bold as="a" href={'https://github.com/' + repo}>
      {repo}
    </Bold>
  </Content>
);
