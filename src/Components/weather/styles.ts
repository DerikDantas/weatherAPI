import styled from 'styled-components';

export const Container = styled.div`
    background: linear-gradient(to top, #1C155D, #3537B7);
    height: 100vh;
    color: white;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .box-tempo{
        background: rgba(255,255,255, 0.5);
        backdrop-filter: blur(5px);
        text-align: center;
        height: 60%;
        width: 50%;
        padding: 35px;
        border-radius: 15px;
        
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;

        box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);

    }

    .row-max-min{
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        width: 100%
    }

    h1{
        font-weight: 900;
        font-size: 50px
    }
    h2{
        font-size: 40px;
        font-weight: 500;
    }
    h3{
        text-transform: uppercase;
        font-size: 35px;
        font-weight: 600;
    }
    p{
        font-size: 20px;
        font-weight: 100
    }
`;
