import styled from 'styled-components';

export const FromContainer = styled.div`
    width: 100%;
`;

export const ContactHeading = styled.h2`
    margin: 0;
    font-size: 45px;
    text-align: center;
    color: #5c5b5b;
    padding: 30px;
    text-transform: capitalize;
    background: #fbfbfb;

    @media screen and (max-width: 820px) {
        font-size: 22px;
    }
`;

export const FromArea = styled.div`
    width: 100%;
    height: 100%;
    padding-top: 50px;
    padding-bottom: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`;
export const FromContent = styled.div`
    flex-basis: 500px;
    text-align: center;
    @media screen and (max-width: 820px) {
        display: block;
        width: 100%;
    }
`;
export const FromContentHeading = styled.h2`
    font-size: 40px;
    text-align: center;
    margin: 0;
    padding: 5px;

    @media screen and (max-width: 820px) {
        font-size: 30px;
    }
`;
export const FromContentText = styled.p`
    line-height: 32px;
    font-size: 24px;
    color: #2b1b9a;
    font-weight: 500;
    padding: 5px;
`;

export const ImageWrapper = styled.div`
    max-width: 650px;
    text-align: center;
    margin: auto;

    @media screen and (max-width: 820px) {
        width: 100%;
    }
`;
export const FromContentImage = styled.img`
    max-width: 100%;
    height: auto;
`;

export const FromWrapper = styled.div`
    background-color: #d7d7d7;
    text-align: center;
    flex-basis: 600px;

    @media screen and (max-width: 820px) {
        display: block;
        width: 100%;
    }
`;

export const DivBind = styled.div`
    display: block;
`;

export const From = styled.form`
    overflow: hidden;
    text-align: left;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 10px;
`;

export const Label = styled.label`
    cursor: pointer;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 4px;
    margin-top: 10px;
`;

export const Input = styled.input`
    width: 100%;
    cursor: auto;
    padding: 10px;
    background-color: #fff;

    border: none;
    border-radius: 5px;
    outline: none;
`;

export const MessageArea = styled.textarea`
    width: 100%;
    height: 250px;
    border: none;
    border-radius: 5px;
    outline: none;
    padding: 10px;
    margin-bottom: 20px;
    font-weight: bold;
`;

export const Button = styled.button`
    width: 190px;
    font-size: 18px;
    text-transform: uppercase;
    outline: none;
    padding: 10px;
    border: none;
    cursor: pointer;
    margin: auto;
    border-radius: 8px;
    transition: 0.4s;
    &:hover {
        background-color: #4e20e6;
        color: #fff;
    }
`;
