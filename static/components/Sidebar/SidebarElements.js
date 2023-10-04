import styled from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom'
import Colors from './../styles.js'

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 3;
    width: 100%;
    height: fir-content;
    background: #B30000;
    display: grid;
    align-items: center;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '79px' : '-70%')};
`

export const SidebarWrapper = styled.div`
    color: ${Colors.black};
`

export const SidebarMenu = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
    margin-right: 40px;
    margin-bottom: 30px;
    margin-top: 30px;
    transform: scale(1.1);
`

// Unused for now, for sign in button
export const SideBtnWrap = styled.div`
    display: flex;
    justify-content: center;
`

export const SidebarRoute = styled(LinkRouter)`
    border-radius: 50px;
    background: #01bf71;
    white-space: nowrap;
    padding: 16px 64px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
`
