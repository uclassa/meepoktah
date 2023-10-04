import React from 'react'
import { useState } from 'react'
import { excoData } from './ExcoData'
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
  ExcoInfo
} from './ExcoElements'


const Exco = () => {

  return (
    <ExcoContainer>
        <ExcoHeader> Executive Board </ExcoHeader>
        <ExcoSubheader>Our association is built by our community</ExcoSubheader>
        <ExcoWrapper id="team">
          { 
            excoData.length > 0 ?
            excoData.map((data, index) => {

              const [image, setImage] = useState(data.photo);
              const handleMouseOver = () => {
                if (data.altPhoto === "") return;
                setImage(data.altPhoto);
              };
              const handleMouseOut = () => {
                setImage(data.photo);
              };

              return (
                <ExcoCard key={index}>
                  <ExcoInfo>
                    <ExcoPhoto src={image} alt={data.alt} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}/>
                    <ExcoH2>{data.name}</ExcoH2>
                    <ExcoP>{data.role}</ExcoP>
                    <ExcoH4>{data.major} {data.year}</ExcoH4>
                  </ExcoInfo>
                </ExcoCard>
              )
            }) : <></>
          }
        </ExcoWrapper>
        {/* <Blob /> */}
    </ExcoContainer>
  )
}

export default Exco