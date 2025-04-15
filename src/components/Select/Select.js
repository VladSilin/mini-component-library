import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";
import VisuallyHidden from "../VisuallyHidden";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <>
      <Wrapper>
        <VisuallyHidden>{label}</VisuallyHidden>
        <NativeSelect value={value} onChange={onChange}>
          {children}
        </NativeSelect>
        <Presentational>
          {displayedValue}
          <ChevronWrapper style={{ "--size": 24 + "px" }}>
            <Icon id="chevron-down" size={24} strokeWidth={2} />
          </ChevronWrapper>
        </Presentational>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;

const NativeSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  appearance: none;
  -webkit-appearance: none;
`;

const Presentational = styled.div`
  color: ${COLORS.gray700};
  background-color: ${COLORS.transparentGray15};
  font-size: ${16 / 16}rem;
  padding: 12px 16px;
  padding-right: 52px;
  border-radius: 8px;

  ${NativeSelect}:focus + & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }

  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
  }
`;

const ChevronWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 10px;
  margin: auto;
  width: var(--size);
  height: var(--size);
  pointer-events: none;
`;

// TODO: Left off at min-width
//const NativeSelect = styled.select`
//  overflow: hidden;
//  -webkit-appearance: none;
//  appearance: none;
//  outline: none;
//
//  background-color: inherit;
//  color: ${COLORS.gray500};
//  font-size: 0.75rem;
//
//  min-width: fit-content;
//
//  border: 0px;
//  margin-right: 24px;
//`;

export default Select;
