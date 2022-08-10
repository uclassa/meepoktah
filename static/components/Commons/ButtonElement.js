import styled from 'styled-components'

export const Button = styled.a`
    border-radius: 50px;
    text-decoration: none;
    background: ${({primary}) => (primary ? '#E0DFD5' : '#E60000')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: ${({dark}) => (dark ? '#000' : '#E8E9EB')};
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
        background: ${({primary}) => (primary ? '#b30000' : '#E4B363')};
        color: ${({dark}) => (dark ? '#E8E9EB' : '#000')};
    }
`