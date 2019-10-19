import styled from "styled-components"

export const TopContainer = styled.div`
  overflow: hidden;
  position: absolute;
  left: 0;
  width: 100%;
  line-height: 0;
  direction: ltr;
  top: -1px;
  -webkit-transform: rotate(0);
  -ms-transform: rotate(0);
  transform: rotate(0);
`

export const BottomContainer = styled.div`
  overflow: hidden;
  position: absolute;
  left: 0;
  width: 100%;
  line-height: 0;
  direction: ltr;
  bottom: -36px;
  -webkit-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  transform: rotate(180deg);
`
