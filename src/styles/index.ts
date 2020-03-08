import styled from 'styled-components';

import { blue, black } from './color';

export const MarginRight = styled.span`
  margin-right: 16px;
`;

export const Flex = styled.div`
  display: flex;
`;

export const BoldLink = styled.a<{ index?: number }>`
  font-weight: 600;
  text-decoration: none;
  color: ${black};
  ${({ index }) =>
    typeof index === 'number' ? `display: block; margin-top: 0.5em` : ''};
  :hover {
    color: ${blue};
  }
`;
