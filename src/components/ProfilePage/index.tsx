import React from 'react';

import Feed from '../Feed';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  EditButton,
  LocationIcon,
  CakeIcon,
  Followage,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar>
          <img
            src="https://api.adorable.io/avatars/200/abott@adorable.png"
            alt="Adorable Avatars"
          />
        </Avatar>
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar Perfil</EditButton>

        <h1>Laercio Santos</h1>
        <h2>@Laerciosantos</h2>

        <p>
          Developer at
          <a href="http://AlgumaEmpresa.com">@AlgumaEmpresa</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            São Paulo, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 30/07/1980
          </li>
        </ul>

        <Followage>
          <span>
            Seguindo
            <strong>189</strong>
          </span>

          <span>
            <strong>1594 </strong>
            seguindores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
};

export default ProfilePage;
