import styled from "styled-components";
import Colors from "../styles";

export const PartnershipsContainer = styled.div`
  background: ${Colors.offWhite};
  display: flex;
  flex-direction: column;
  align-items: center;
  height: fit-content;
  padding: 100px 0 100px 0;
  position: relative;
  z-index: 1;
`;

export const PartnershipsWrapper = styled.div`
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
`;

export const PartnershipsRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

export const Column1 = styled.div`
  padding: 0 15px;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

export const Column2 = styled.div`
  padding: 0 15px;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  z-index: 1;
`;

export const TopLine = styled.p`
  color: ${Colors.black};
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
  z-index: 1;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${Colors.black};
  z-index: 1;
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${Colors.black};
  z-index: 1;
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  z-index: 1;
`;

export const Img = styled.img`
  width: 100%;
  padding-right: 0;
  z-index: 1;
  border-radius: 24px;
`;

export const TickerWrapper = styled.div`
  background: ${Colors.offWhite};
  display: flex;
`;

export const TickerLogoImg = styled.img`
  width: 12rem;
  height: 12rem;
  overflow: hidden;
  object-fit: cover;
  margin: 0 0.5rem 0 0.5rem;
`; 