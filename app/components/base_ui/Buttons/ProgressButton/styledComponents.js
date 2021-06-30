/* eslint-disable no-nested-ternary, prettier/prettier */
import React from 'react';
import styled, { keyframes } from 'styled-components';
import Button from '@material-ui/core/Button';

import {
  darkBlueColor,
  errorRed,
  successGreen,
  whiteColor,
} from 'defaultStyleHelper';

const progressionAnimation = keyframes`
  0% {
   transform: translateX(0%);
  }

  22.2% {
    transform: translateX(25%);
  }

  44.4% {
    transform: translateX(50%);
  }

  66.6% {
    transform: translateX(75%);
  }

  88.8% {
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`;

export const ProgressBar = styled.div`
  animation: 1.2s ${progressionAnimation} infinite;
  background: ${whiteColor};
  border-radius: 0.7rem;
  height: 100%;
  left: -100%;
  opacity: 0.5;
  position: absolute;
  top: 0;
  width: 100%;
`;

export const StyledButton = styled(({ error, success, ...restProps }) => (
  <Button {...restProps} />
))`
  background: ${({ error, success }) =>
    error
      ? errorRed
      : success
        ? successGreen
        : darkBlueColor};
  border-radius: 0.7rem;
  box-shadow: none;
  color: ${whiteColor};
  font-size: 1.6rem;
  font-weight: 700;
  height: 4.8rem;
  line-height 1.936rem;
  overflow: hidden;
  text-transform: capitalize;
  white-space: nowrap;
  width: 18.4rem;

  &:active {
    box-shadow: none;
  }

  &:disabled {
    background: ${({ error, success }) =>
    error
      ? errorRed
      : success
        ? successGreen
        : 'rgba(0, 0, 0, 0.12)'};
    color: ${({ error, success }) => error || success ? whiteColor : 'rgba(0, 0, 0, 0.26)'};
  }

  &:hover {
    background: ${({ error, success }) =>
    error
      ? errorRed
      : success
        ? successGreen
        : darkBlueColor};
  }

  svg {
    height: 2.4rem;
    margin-bottom: 0.25rem;
    margin-right: 0.5rem;
    width: 2.4rem;
  }
`;
