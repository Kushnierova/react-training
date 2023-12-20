import styled from 'styled-components';
// 'react-player' - Це бібліотека для плеєрів
import ReactPlayer from 'react-player';

export const PlayerWrapper = styled.div`
  position: relative;
  padding-top: 56.25%;
`;

export const StyledPlayer = styled(ReactPlayer)`
  position: absolute;
  top: 0;
  left: 0;
`