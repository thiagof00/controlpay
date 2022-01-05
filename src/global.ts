import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`

:root{
--roxo: #8314DB;
--roxo-escuro: #59148F;
--vermelho: #DB1F14;
--vermelho-escuro: #8F1B14;
--verde: #37DB08;
--fundo: #212121;
--cinza: #2a2a2a;
--cinza-claro: #3a3a3a;

}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html{
    width:100%;
    height: 100%;
    @media(max-width: 1080px){
        font-size: 93.75%;
    }
    @media(max-width: 720){
        font-size:87.5%;
    }

}


body{
    width: 100%;
    height: 100%;
    -webkit-font-smoothing: antialiased;

    background: var(--fundo);

}

body, input, textarea, button{
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    color: #FFF;
    

}

h1,h2,h3,h4,h5,h6, strong{
    font-weight: 500;
}

button{
    cursor: pointer;
}




`