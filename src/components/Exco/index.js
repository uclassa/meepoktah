import React from 'react'
import { excoData } from './ExcoData'
import Emoji from './../Commons/Emojis'
import {
  ExcoContainer,
  ExcoHeader,
  ExcoSubheader,
  ExcoH2,
  ExcoH4,
  ExcoP,
  ExcoCard,
  ExcoPhoto,
  ExcoWrapper,
  ExcoTextWrapper,
  ExcoInfo,
  ExcoVision,
  Blob,
  BottomDiv
} from './ExcoElements'


const Exco = () => {

  return (
    <ExcoContainer id="team">
        <ExcoHeader><Emoji symbol="✨"/> Executive Board <Emoji symbol="✨"/></ExcoHeader>
        <ExcoSubheader>The lovely people keeping SSA running</ExcoSubheader>
        <ExcoWrapper>
            { 
            excoData.length > 0 ?
            excoData.map((data) => {
              return (
                <ExcoCard>
                  <ExcoInfo>
                    <ExcoPhoto src={data.photo} alt={data.alt}/>
                    <ExcoH2>{data.name}</ExcoH2>
                    <ExcoP>{data.role}</ExcoP>
                    <ExcoH4>{data.major} {data.year}</ExcoH4>
                    <ExcoTextWrapper>
                      <ExcoVision>" {data.vision}"</ExcoVision>
                    </ExcoTextWrapper>
                  </ExcoInfo>
                </ExcoCard>
              )
            }) : <></>
          }
        </ExcoWrapper>
        <Blob />
        <BottomDiv height="50px"/>
    </ExcoContainer>
  )
}

export default Exco