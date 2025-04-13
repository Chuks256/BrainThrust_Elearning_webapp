import { useState } from 'react';
import styled from "styled-components"
import learning from "../assets/learning.png"

const Container = styled.div`
display:flex;
justify-content:center;
padding:10px;
align-items:center;
`;

const Subcontainer = styled.div`
display:flex;
width:70em;
justify-content:space-between;
`;

const Dashboard_Header_info_parent_container=styled.div`
display:flex;
flex-direction:column;
gap:1em;
`;

const Dashboard_image_section= styled.img`
width:440px;
`;
const Dashboard_Header_txt_container=styled.div`
display:flex;
flex-direction:column;
gap:5px;
`;

const Header_info_main_txt=styled.h1`
font-weight:bold;
color:var(--BrainThrustElemColor);
`;

const Header_info_sub_txt=styled.p`
font-size:15px;
`;

const Header_card_parent_container = styled.div`
background:var(--BrainThrustTextColor);
height:13em;
width:25em;
padding:20px;
border-radius:5px;
border-style:solid;
border-color:#dde5f4;
border-width:2px;
display:flex;
flex-direction:column;
align-items:left;
gap:60px;
justify-content:center;
`;

const Header_card_txt=styled.h3`
color:var(--BrainThrustElemColor);
`;

const Header_card_btn=styled.button`
border-style:solid;
border-color:transparent;
background:var(--BrainThrustElemColor);
color:ivory;
width:100px;
padding:9px;
border-radius:5px;
cursor:pointer;
`;

function DashboardHeader() {
  return (
    <>
    {/* Define  container  */}
    <Container>
      <Subcontainer>
      <Dashboard_Header_info_parent_container>
        <Dashboard_Header_txt_container>
          <Header_info_main_txt>Dashboard</Header_info_main_txt>
          <Header_info_sub_txt>Start a new subject</Header_info_sub_txt>
        </Dashboard_Header_txt_container>
        <Header_card_parent_container>
          <Header_card_txt>Looking to learn something new ?</Header_card_txt>
          <Header_card_btn>Click Here</Header_card_btn>
        </Header_card_parent_container>
      </Dashboard_Header_info_parent_container>
      <Dashboard_image_section src={learning} alt="learning" />
      </Subcontainer>
    </Container>
    </>
  )
}

export default DashboardHeader