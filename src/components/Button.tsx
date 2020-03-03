import styled from 'styled-components';
import { blue } from '../styles/color';

export const More = styled.button`
  width: 100%;
  padding: 6px;
  margin-top: 20px;
  font-weight: 600;
  color: ${blue};
  background: #fff;
  background-color: rgb(255, 255, 255);
  border: 1px solid #e1e4e8;
  border-radius: 3px;
  font-size: 1em;
  :hover {
    color: ${blue};
    background-color: #f6f8fa;
  }
`;
