import { styled } from 'styled-components'
import Colors from '../styles'

export const Button = styled.a`
    border-radius: 50px;
    text-decoration: none;
    background: ${({primary}) => (primary ? Colors.offWhite : Colors.red)};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: ${({primary}) => (primary ? Colors.black : Colors.offWhite)};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? Colors.red : Colors.gold)};
        color: ${({primary}) => (primary ? Colors.offWhite : Colors.black)};
    }
`