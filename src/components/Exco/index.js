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

  const [excoPhotos, setExcoPhotos] = useState(excoData.map((data) => {
    return {photo: data.photo, altPhoto: data.altPhoto}
  }));

  return (
    <ExcoContainer id="team">
        <ExcoHeader> Executive Board </ExcoHeader>
        <ExcoSubheader>Our association is built by our community</ExcoSubheader>
        <ExcoWrapper>
          { 
            excoData.length > 0 ?
            excoData.map((data, index) => {

              // Switches the photo to the alt photo when hovered over
              const handleMouseOver = (e) => {
                const newExcoPhotos = [...excoPhotos];
                if (newExcoPhotos[index].altPhoto.length < 1) {
                  return;
                }
                newExcoPhotos[index].photo = data.altPhoto;
                newExcoPhotos[index].altPhoto = data.photo;
                setExcoPhotos(newExcoPhotos);
              }

              const handleMouseOut = (e) => {
                const newExcoPhotos = [...excoPhotos];
                newExcoPhotos[index].photo = data.photo;
                newExcoPhotos[index].altPhoto = data.altPhoto;
                setExcoPhotos(newExcoPhotos);
              }

              const image = excoPhotos[index].photo;

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
    </ExcoContainer>
  )
}

export default Exco