import { useState } from 'react';
import styled from "styled-components"
import DashboardCard from './DashboardCard';

const Container = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`;

const SubContainer = styled.div`
display:flex;
flex-direction:column;
width:70em;
gap:1.5em;
`;

const DashboardContentHeader=styled.h3`
color:var(--BrainThrustElemColor);
`;

const DashboardParentCardContainer = styled.div`
display:grid;
grid-auto-flow: column;
grid-auto-rows: 1fr;
grid-template-rows: repeat(3, 1fr); 
gap: 0.2rem;
height: 100%;
`;


function DashboardContent() {
  return (
    <>
    {/* Define  container  */}
    <Container>
      <SubContainer>
      <DashboardContentHeader>Ongoing Subjects</DashboardContentHeader>
      <DashboardParentCardContainer>
        <DashboardCard card_title="English" />
        <DashboardCard card_title="Mathematics" />
        <DashboardCard card_title="General Studies" />
        <DashboardCard card_title="Computer science" />
        <DashboardCard card_title="Programming" />
        <DashboardCard card_title="UI/UX Design" />
        <DashboardCard card_title="IRK" />
        <DashboardCard card_title="CRK" />
        <DashboardCard card_title="Agriculture" />
      </DashboardParentCardContainer>
      </SubContainer>
    </Container>
    </>
  )
}

export default DashboardContent
