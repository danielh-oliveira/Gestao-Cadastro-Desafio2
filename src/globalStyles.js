import { createGlobalStyle }  from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,300;0,400;1,700&display=swap');
    /* font-weight 300 400 700 */

    body {
        margin: 0;
        font-family: 'Roboto Condensed', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
            monospace;
    }

    /*reset*/

    a {
        color: inherit;
        text-decoration: none;
    }

    ol, ul {
        list-style: none;
    }

    html, body, div, span, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, a, em, img, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, article, footer, header, nav, section, main {
        margin: 0;
        padding: 0;
        border: 0;
        vertical-align: baseline;
    }

    h1, h2, h3, h4, h5, h6, p, a, ul {
        font-size: 1em;
        font-weight: normal;
        font-family: 'Roboto Condensed', sans-serif;
    }

    .container {
        width: 80%;
        height: 100vh;
        margin: 0 auto;

        p {
            margin: 0 auto;
            text-align: center;
        }
    }

    nav {
        margin: 30px 0 0 0;
        display: flex;
        justify-content: space-between;
        ul {
            display: flex;
            flex-direction: row;
            align-items: center;
            li {
                padding: 10px 10px;
                margin: 0 10px;
                font-size: 1.2rem;
                font-weight: 700;
                border-radius: 15px;
                &:hover{
                    color: #FFF;
                    background-color: #525256;
                    transition-property: background-color color;
                    transition-duration: 0.3s;
                }
            }
        }
        img {
            width: 100px;
            height: auto;
        }
    }

    .boasvindas {
        height: 300px;
        width: auto;
        font-size: 2rem;
        background: rgb(255,255,255);
        background: linear-gradient(169deg, rgba(255,255,255,1) 0%, rgba(207,207,207,1) 100%);
        h1 {
            padding: 100px 0 0 70px;
        }
        span {
            font-weight: 700;
        }
    }

    .produtos {
        margin-top: 70px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        align-content: space-around;

        & > div {
            background: rgb(102,102,102);
            background: linear-gradient(7deg, rgba(102,102,102,1) 0%, rgba(129,129,129,1) 100%);
            width: 240px;
            height: 380px;
            color: #FFF;
            display: flex;
            flex-direction: column;
            flex-wrap: nowrap;
            align-content: center;
            justify-content: space-between;

            &:hover {
                box-shadow: 1px 4px 15px 6px rgba(135,135,135,0.49);
                transition-property: box-shadow;
                transition-duration: 0.3s;
            }

            img, h3, p {
                margin: 0 auto;
                align-self: center;
            }

            img {
                width: 181px;
                height: auto;
            }

            h3 {
                font-weight: 400;
            }

            p {
                font-weight: 300;
            }
            
            button {
                padding: 8px 0;
                font-family: 'Roboto Condensed', sans-serif;
                font-size: 1.1rem;
                font-weight: 700;
                color: #FFF;
                cursor: pointer;
                border: none;
                background-color: #3d3d3d;

                &:hover {
                    background-color: #242424;
                    transition-property: color;
                    transition-duration: 0.3s;
                }
            }
        }

        & > div > div {
            text-align: center;
        }
    }

    .cad-prod {
        border-bottom: black solid 7px;
        text-align: center;
        h3, h1 {
            font-size: 1.3rem;
            font-weight: 700;
        }
        form {
            display: flex;
            flex-direction: column;
            flex-wrap: nowrap;
            align-content: center;
            justify-content: space-around;
            align-items: center;

            input, select {
                width: 50%;
                height: 25px;
                margin: 10px 0;
            }

            button {
                margin: 20px 0;
                padding: 8px 8px;
                font-family: 'Roboto Condensed',sans-serif;
                font-size: 1rem;
                color: #FFF;
                cursor: pointer;
                border: none;
                background-color: #3d3d3d;
                border-radius: 10px;
            }
        }
    }
    .cad-usua {
        border-bottom: black solid 7px;
        text-align: center;
        margin-top: 20px;
        h3, h1 {
            font-size: 1.3rem;
            font-weight: 700;
        }
        form {
            display: flex;
            flex-direction: column;
            flex-wrap: nowrap;
            align-content: center;
            justify-content: space-around;
            align-items: center;

            input, select {
                width: 50%;
                margin: 10px 0;
                height: 25px;
            }

            button {
                margin: 20px 0;
                padding: 8px 8px;
                font-family: 'Roboto Condensed',sans-serif;
                font-size: 1rem;
                color: #FFF;
                cursor: pointer;
                border: none;
                background-color: #3d3d3d;
                border-radius: 10px;
            }
        }
    }
    .banc-dados {
        text-align: center;
        margin-top: 20px;

        h3, h1 {
            font-size: 1.3rem;
            font-weight: 700;
        }

        button {
            margin: 20px 0;
            padding: 8px 8px;
            font-family: 'Roboto Condensed',sans-serif;
            font-size: 1rem;
            color: #FFF;
            cursor: pointer;
            border: none;
            background-color: #3d3d3d;
            border-radius: 10px;

            &:hover {
                background-color: #242424;
                transition-property: color;
                transition-duration: 0.3s;
            }
        }
    }
`;

export default GlobalStyle;