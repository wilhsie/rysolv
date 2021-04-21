import React from 'react';
import T from 'prop-types';
import { formatDollarAmount, formatPercentage } from 'utils/globalHelpers';

import {
  Bounty,
  BountySlideContainer,
  Percentage,
  SlideContainer,
  Slider,
  Title,
  ValueContainer,
} from './styledComponents';

const BountySlider = ({
  bounty,
  max,
  repoName,
  setPayout,
  username,
  userRatio,
}) => {
  const userPortion = bounty * userRatio;
  const repoPortion = bounty * (1 - userRatio);

  return (
    <BountySlideContainer>
      <ValueContainer>
        <Bounty>
          <Title>{username}</Title>
          {formatDollarAmount(userPortion)}
          <Percentage>{formatPercentage(userRatio)}</Percentage>
        </Bounty>
        <Bounty>
          <Title>{repoName}</Title>
          {formatDollarAmount(repoPortion)}
          <Percentage>{formatPercentage(1 - userRatio)}</Percentage>
        </Bounty>
      </ValueContainer>
      <SlideContainer>
        <Slider
          max={max}
          min={0}
          onChange={setPayout}
          step={1}
          type="range"
          value={userRatio * max}
        />
      </SlideContainer>
    </BountySlideContainer>
  );
};

BountySlider.propTypes = {
  bounty: T.number.isRequired,
  max: T.number.isRequired,
  repoName: T.string.isRequired,
  setPayout: T.func.isRequired,
  username: T.string.isRequired,
  userRatio: T.number.isRequired,
};

export default BountySlider;
