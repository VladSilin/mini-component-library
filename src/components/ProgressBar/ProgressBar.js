/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const MAX_WIDTH = 370;

const STYLES = {
  small: {
    height: 8,
    padding: 0,
    radius: 4,
  },
  medium: {
    height: 12,
    padding: 0,
    radius: 4,
  },
  large: {
    height: 16,
    padding: 4,
    radius: 8,
  },
};

const ProgressBar = ({ value, size }) => {
  const styles = STYLES[size];

  if (!styles) {
    throw new Error(`Unknown size passed to ProgressBar: ${size}`);
  }

  return (
    <Wrapper
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
      style={{
        "--padding": styles.padding + "px",
        "--radius": styles.radius + "px",
      }}
    >
      <VisuallyHidden>{value}</VisuallyHidden>
      <BorderWrapper>
        <Bar
          style={{
            "--width": value + "%",
            "--height": styles.height + "px",
          }}
        />
      </BorderWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};

  background-color: ${COLORS.transparentGray15};
  border-radius: var(--radius);
  padding: var(--padding);
  width: ${MAX_WIDTH}px;

  /* Trim off corners when near full */
  overflow: hidden;
`;

const BorderWrapper = styled.div`
  border-radius: 4px;
  overflow: hidden;
`;

const Bar = styled.div`
  width: var(--width);
  height: var(--height);
  background-color: ${COLORS.primary};
  border-radius: 4px 0 0 4px;
`;

//const Fill = styled.div`
//  width: ${(p) => (p.value / 100) * MAX_WIDTH}px;
//
//  background-color: ${COLORS.primary};
//`;
//
//const WrapperSmall = styled(Wrapper)`
//  height: 8px;
//  border-radius: 3px;
//`;
//const FillSmall = styled(Fill)`
//  height: 8px;
//`;
//
//const WrapperMedium = styled(Wrapper)`
//  height: 12px;
//  border-radius: 4px;
//`;
//const FillMedium = styled(Fill)`
//  height: 12px;
//`;
//
//const WrapperLarge = styled(Wrapper)`
//  position: relative;
//  height: 24px;
//  border-radius: 8px;
//`;
//
//const BorderWrapper = styled.div`
//  --border-size: 4px;
//
//  position: relative;
//  top: var(--border-size);
//  left: var(--border-size);
//  height: 16px;
//  width: ${MAX_WIDTH - 8}px;
//  border-radius: 4px;
//  overflow: hidden;
//`;
//
//const FillLarge = styled(Fill)`
//  position: relative;
//  top: 0;
//  left: 0;
//  height: 24px;
//`;

export default ProgressBar;
