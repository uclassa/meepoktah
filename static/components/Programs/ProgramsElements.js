import styled from 'styled-components'
import Colors from './../styles.js'

export const ProgramsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 300vh;
  background-color: ${Colors.offWhite};
`;

export const ProgramWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${Colors.offWhite};
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: ${Colors.primary};
  margin-bottom: 2rem;
`;

export const Img = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;