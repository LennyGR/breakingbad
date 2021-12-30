import styled from 'styled-components';

export const CustomBlockQuote = styled.div({
    fontSize: '1rem',
    margin: '0.5rem auto',
    fontFamily: 'Open Sans',
    fontStyle: 'italic',
    color: '#555555',
    padding: '1.2rem 2rem 1.2rem 3rem',
    borderLeft: '8px solid #78C0A8',
    lineHeight: '1rem',
    position: 'relative',
    background: 'white',
    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',

    "::before": {
        fontFamily: 'Arial',
        content: "'\\201C'",
        color: '#78C0A8',
        fontSize: '4em',
        position: 'absolute',
        left: '10px',
        top: '30px'
    },

    "::after": {
        content: ' '
    }
});

export const Author = styled.span`
    display:block;
    color:#333333;
    font-style: normal;
    font-weight: bold;
    margin-top:1em;
    text-align: right;
`;