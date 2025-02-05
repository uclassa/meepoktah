import { styled } from "styled-components";
import Colors from "../styles";

export const PartnershipsContainer = styled.div`
  background: ${Colors.offWhite};
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

  @media screen and (max-width: 768px) {
      grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
  }
`;

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`

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

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const TickerWrapper = styled.div`
  background: ${Colors.offWhite};
  display: flex;
  flex-direction: row;
  height: fit-content;
  margin: 0 0 0 0;
`;

export const TickerLogoImg = styled.img`
  width: 6rem;
  height: 6rem;
  overflow: hidden;
  object-fit: cover;
  margin: 0 0.5rem 0 0.5rem;
`; 