import styled from "styled-components";

export const RateBtn = styled.button`
  display: block;
  background: var(--lightGrey);
  width: 12%;
  min-width: 90px;
  height: 30px;
  border-radius: 15px;
  color: var(--darkGrey);
  border: 0;
  font-size: var(--font-Big);
  margin: 20px;
  transition: all 0.3s;
  outline: none;
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;

export const Range = styled.input`
  /* Chrome */
  @media screen and (-webkit-min-device-pixel-ratio: 0) {
    overflow: hidden;
    width: 120px;
    -webkit-appearance: none;
    background-color: var(--lightGrey);

    ::-webkit-slider-runnable-track {
      height: 10px;
      -webkit-appearance: none;
      color: var(--medGrey);
      margin-top: -1px;
    }

    ::-webkit-slider-thumb {
      width: 10px;
      -webkit-appearance: none;
      height: 10px;
      cursor: ew-resize;
      background: var(--darkGrey);
      box-shadow: -80px 0 0 80px var(--medGrey);
    }
  }
  /** FF*/
  ::-moz-range-progress {
    background-color: var(--medGrey);
  }
  ::-moz-range-track {
    background-color: var(--lightGrey);
  }
  /* IE*/
  ::-ms-fill-lower {
    background-color: var(--medGrey);
  }
  ::-ms-fill-upper {
    background-color: var(--lightGrey);
  }
`;
