import React, {useCallback, useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { 
    SotongCard,
    SotongCardInfo,
    SotongContainer,
    SotongH3,
    SotongH4,
    SotongWrapper,
    SotongP,
    SotongHeader,
    SotongNav,
    SotongNavContainer, 
    SotongTextWrapper
} from './SotongGuideElements'
import { 
    NavMenu,
    NavItem,
    SotongButton
} from '../Navbar/NavbarElements';

const SotongGuide = () => {

  const navigate = useNavigate();
  const returnHome = useCallback(() => navigate('/', {replace: true}), [navigate]);
  const backToGuides = useCallback(() => navigate('/sotongguide', {replace: true}), [navigate]);
  const visa = useCallback(() => navigate('/sotongguide/visa', {replace: true}), [navigate]);
  const academics = useCallback(() => navigate('/sotongguide/academics', {replace: true}), [navigate]);
  const predeparture = useCallback(() => navigate('/sotongguide/predeparture', {replace: true}), [navigate]);
  const general = useCallback(() => navigate('/sotongguide/general', {replace: true}), [navigate]);
  const oncampus = useCallback(() => navigate('/sotongguide/oncampus', {replace: true}), [navigate]);
  const settling = useCallback(() => navigate('/sotongguide/settling', {replace: true}), [navigate]);

  const [header, getData] = useState('');
  
  const getSotongGuideHeader = () => {
      axios.get(`/api/SotongGuideHeaders`)
      .then((response) => {
          const headers = response.data;
          getData(headers);
        })
        .catch(() => {
            console.log('Error retrieving Sotong Guide');
        });
    }
  useEffect(() => {
    getSotongGuideHeader();
  }, []);

  const handleRoute = (urlTag) => {
    switch(urlTag) {
        case "visa":
            visa();
            break;
        case "predeparture":
            predeparture();
            break;
        case "general":
            general();
            break;
        case "academics":
            academics();
            break;
        case "oncampus":
            oncampus();
            break;
        case "settling":
            settling();
            break;
        default:
            break;
    }
  }

  return (
    <>
        <SotongNav>
            <SotongNavContainer>
                <SotongH4 onClick={returnHome}>
                    Return Home
                </SotongH4>
                <SotongH4 onClick={backToGuides}>
                    Go Back 
                </SotongH4>
                <NavMenu>
                    {
                        header.length > 0 ?
                        header.map((obj, index) => {
                            return (
                                <NavItem key={obj._id}>
                                    <SotongButton onClick={() => handleRoute(obj.urlTag)} >{obj.title}</SotongButton>
                                </NavItem>
                            )
                        }) : <></>
                    }
                </NavMenu>
            </SotongNavContainer>
        </SotongNav>
        <SotongContainer> {
            header.length > 0 ? 
            <>
                <SotongTextWrapper>
                    <SotongHeader>Sotong Guide</SotongHeader>
                    <SotongH3>Sotong is a versatile seafood that can be used as an compliment or served as a main dish in many cuisines. Favourite method is Grilling (Indonesian panggang style) or BBQing with sambal to savour the best of this sotong. It is a must-have ingredient for the local favourite Fried Hokkien Prawn Mee.</SotongH3>
                </SotongTextWrapper>
                <SotongWrapper>
                {
                    header.map((obj, index) => {
                        return (
                            <SotongCard key={obj._id} onClick={() => handleRoute(obj.urlTag)}>
                                <SotongCardInfo>
                                    <SotongH4>{obj.title}</SotongH4>
                                    <SotongP>{obj.description}</SotongP>
                                </SotongCardInfo>
                            </SotongCard>
                        );
                    })
                }
                </SotongWrapper> 
            </>: 
                <SotongTextWrapper>
                    <SotongHeader>There seems to be a problem....</SotongHeader>
                    <SotongH3>our code monkeys are working on it :c </SotongH3>
                </SotongTextWrapper>
        } </SotongContainer>
    </>
  )
}

export default SotongGuide