import React from 'react';
import styled from 'styled-components';

import { MarginRight, Flex, BoldLink } from '../styles';

type Profile = { avatarURL: string; username: string };
type Content = { repos: string[] };

export type CardProp = { profile: Profile } & Content;

export default function Card({ profile, repos }: CardProp) {
  return (
    <CardWrapper>
      <Profile {...profile} />
      <ContentWrapper actor={profile.username} repos={repos} />
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

const ContentWrapper = ({
  actor,
  repos,
}: {
  actor: string;
  repos: string[];
}) => {
  const wrapper =
    repos.length > 1 ? (
      <div>
        <Starred>starred {repos.length} repositories</Starred>
        {repos.map((repo, index) => (
          <BoldLink
            key={repo}
            isMulti={true}
            href={'https://github.com/' + repo}
          >
            {repo}
          </BoldLink>
        ))}
      </div>
    ) : (
      <>
        <Starred>starred</Starred>
        <BoldLink href={'https://github.com/' + repos[0]}>{repos[0]}</BoldLink>
      </>
    );
  return (
    <Content>
      <BoldLink href={'https://github.com/' + actor}>{actor}</BoldLink>
      {wrapper}
    </Content>
  );
};
