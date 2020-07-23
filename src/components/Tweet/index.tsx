import React from 'react';

import {
  Container,
  Retweeted,
  RocketseatIcon,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon,
} from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <RocketseatIcon />
        You are retweeted
      </Retweeted>

      <Body>
        <Avatar>
          <img
            src="https://api.adorable.io/avatars/200/abott@adorable.png"
            alt="Adorable Avatars"
          />
        </Avatar>
        <Content>
          <Header>
            <strong>Rocketseat</strong>
            <span>@rocketseat</span>
            <Dot />
            <time>27 de junh </time>
          </Header>

          <Description>Foguetes Não Para de :sparkles:</Description>

          <ImageContent />

          <Icons>
            <Status>
              <CommentIcon />
              29
            </Status>
            <Status>
              <RetweetIcon />
              1029
            </Status>
            <Status>
              <LikeIcon />
              2259
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
};

export default Tweet;
