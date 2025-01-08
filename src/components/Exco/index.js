import React from 'react'
import { useState, useEffect } from 'react'
import http from '../../services/httpCommon'
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
  const [excoData, setExcoData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await http.get('/exco/');
        setExcoData(res.data);
      } catch (error) {
        console.log(error);
      };
    }
    fetchData();
  }, []);

  return (
    <ExcoContainer id="team">
        <ExcoHeader> Executive Board </ExcoHeader>
        <ExcoSubheader>Our association is built by our community</ExcoSubheader>
        <ExcoWrapper>
          { 
            excoData.length > 0 ?
            excoData.map((data, index) => <ExcoMember data={data} key={index}/>) : <></>
          }
        </ExcoWrapper>
    </ExcoContainer>
  )
}

function ExcoMember({data}) {
  const [displayAlt, setDisplayAlt] = useState(false);

  return (
    <ExcoCard>
      <ExcoInfo onMouseOver={() => { if (data.alt_photo !== null) setDisplayAlt(true);}} onMouseOut={() => setDisplayAlt(false)}>
        <ExcoPhoto src={data.alt_photo} alt={data.alt} style={{display: displayAlt ? "block" : "none"}} />
        <ExcoPhoto src={data.photo} alt={data.alt} style={{display: displayAlt ? "none" : "block"}} />
        <ExcoH2>{data.name}</ExcoH2>
        <ExcoP>{data.role}</ExcoP>
        <ExcoH4>{data.major} {data.year}</ExcoH4>
      </ExcoInfo>
    </ExcoCard>
  )
}

export default Exco