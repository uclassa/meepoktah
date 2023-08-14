import styled from 'styled-components'
import colors from '../../styles.js'

export const Button = styled.a`
    border-radius: 50px;
    text-decoration: none;
    background: ${({primary}) => (primary ? colors.offWhite : colors.red)};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: ${({primary}) => (primary ? colors.black : colors.offWhite)};
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
        background: ${({primary}) => (primary ? colors.red : colors.gold)};
        color: ${({primary}) => (primary ? colors.offWhite : colors.black)};
    }
`