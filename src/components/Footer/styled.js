import styled from 'styled-components';

export const divFooter = styled.footer`
    background-color: black;
    color: #FFF;
    height: 85px;
    width: auto;
    margin-top: 10%;
    padding: 20px 0 0 0;

    h2 {
        text-align: center;
    }

    .redes {
        display: flex;
        flex-wrap: nowrap;
        flex-direction: row;
        justify-content: center;

        a {
            padding: 10px 10px;
        }
    }
`