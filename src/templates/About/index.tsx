import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline';

import LinkWrapper from 'components/LinkWrapper';

import * as S from './styles';

const AboutTemplate = () => (
  <S.Content>
    <LinkWrapper href="/">
      <CloseOutline size={32} />
    </LinkWrapper>

    <S.Heading>My Trips</S.Heading>

    <S.Body>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel
        aliquet ligula. Pellentesque lorem velit, sagittis non velit id, mattis
        bibendum tortor. Maecenas vel ullamcorper elit, et vehicula erat. Donec
        tempus ex vitae erat pharetra, eu vulputate felis rutrum. Nulla
        facilisi. Nullam egestas sollicitudin commodo. Duis at massa efficitur,
        viverra felis et, molestie lectus.
      </p>
    </S.Body>
  </S.Content>
);

export default AboutTemplate;
