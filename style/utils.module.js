import styled from 'styled-components';
import Image from 'next/image'

export const HeadingMd = styled.div`
    font-size: 1.2rem;
    line-height: 1.5;
`;
export const GridContainer = styled.div`
    padding: 5px;
    display: flex;
    flex-direction: row;
    flex-flow: center;
    align-items: center;
    width: 600px;
    height: auto;
    background-color: blue;
`;

export const BorderCircle = Image`
    border-radius: 9999px;
`;

export const GridItem = styled.div`
    flex-shrink: 1;
    width: 145px;
    height: 145px;
    padding-left: 5px;
    padding-top: 5px;
    color: black
`;
    
  