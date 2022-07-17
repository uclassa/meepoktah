import React, {useCallback, useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import axios from 'axios';
import {
  GuideContainer,
  GuideHeaderWrapper,
  GuideH1,
  GuideBodyWrapper
} from './GuidePageElements'
import { 
  SotongH3,
  SotongH4,
  SotongHeader,
  SotongTextWrapper,
  SotongNav,
  SotongNavContainer
} from './../SotongGuideElements'
import { 
  NavMenu,
  NavItem,
  SotongButton
} from '../../Navbar/NavbarElements';

const GuidePage = ({ guide }) => {

  const [article, getArticle] = useState('');
  
  const getGuidePage = () => {
      axios.get(`/api/SotongGuides/${guide}`)
      .then((response) => {
          const md = response.data;
          getArticle(md);
          console.log(md);
        })
        .catch(() => {
            console.log('Error retrieving Guide');
        });
    }
  useEffect(() => {
    getGuidePage();
  }, []);

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

  const navigate = useNavigate();
  const returnHome = useCallback(() => navigate('/', {replace: true}), [navigate]);
  const backToGuides = useCallback(() => navigate('/sotongguide', {replace: true}), [navigate]);
  
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
                        <SotongButton href={`/sotongguide/${obj.urlTag}`} >{obj.title}</SotongButton>
                    </NavItem>
                  )
                }) : <></>
              }
          </NavMenu>
        </SotongNavContainer>
      </SotongNav>
      <GuideContainer> {
        article ? <>
          <GuideHeaderWrapper>
            <GuideH1>
              {article.header}
            </GuideH1>
          </GuideHeaderWrapper>
          <GuideBodyWrapper>
            <ReactMarkdown>
              {article.markdown}
            </ReactMarkdown>
          </GuideBodyWrapper>
        </> :
          <SotongTextWrapper>
            <SotongHeader>There seems to be a problem....</SotongHeader>
            <SotongH3>our code monkeys are working on it :c </SotongH3>
          </SotongTextWrapper>
      } </GuideContainer>
    </>
  )
}
export default GuidePage