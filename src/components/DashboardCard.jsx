import { useState } from 'react';
import styled from "styled-components"
import { GiPadlock } from "react-icons/gi";
import { GiPadlockOpen } from "react-icons/gi";

const CardContainer = styled.div`
background:var(--BrainThrustTextColor);
height:15em;
width:24em;
padding:20px;
border-radius:5px;
border-style:solid;
border-color:#dde5f4;
border-width:2px;
display:flex;
flex-direction:column;
gap:50px;
`;

const CardDetailsParentContainer = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
`;
const CardDetailsTxtContainer=styled.ul`
display:flex;
gap:10px;
`;
const CardDetailsItem=styled.li`
font-size:12.5px;
color:grey;
`;
const CardTitle=styled.h2``;
const Cardbutton =styled.button`
border-style:solid;
border-color:transparent;
background:var(--BrainThrustElemColor);
color:ivory;
width:160px;
padding:9px;
border-radius:5px;
cursor:pointer;
`;


function DashboardCard(props) {
  return (
    <>
    {/* Define  container  */}
    <CardContainer>
        <CardDetailsParentContainer>
            <CardDetailsTxtContainer>
                <CardDetailsItem>Pronouns</CardDetailsItem>
                <CardDetailsItem>Idioms</CardDetailsItem>
                <CardDetailsItem>Antonyms</CardDetailsItem>
            </CardDetailsTxtContainer>
            <GiPadlockOpen size={20} color='var(--BrainThrustElemColor)' />
        </CardDetailsParentContainer>
        <CardTitle>{props.card_title}</CardTitle>
        <Cardbutton>Continue Learning</Cardbutton>
    </CardContainer>
    </>
  )
}

export default DashboardCard
