import { useState } from 'react';
import styled from "styled-components"

const DashboardFooterContainer = styled.div`
background:var(--BrainThrustElemColor);
height:85px;
color:ivory;
font-size:13px;
display:flex;
align-items:center;
justify-content:center;
bottom:0px;
z-index:0;
`;

const DashboardSubFooterContainer = styled.div`
display:flex;
justify-content:space-between;
width:85em;
`;

const DashboardFooterDetailsParent=styled.ul`
list-style-type:circle;
display:flex;
gap:2em;
`;

const DashboardFooterItem=styled.li``;

const DashboardFooterTxt=styled.div`
font-size:12px;
`;

function DashboardFooter() {
  return (
    <>
    {/* Define  container  */}
    <DashboardFooterContainer>
        <DashboardSubFooterContainer>
          <DashboardFooterDetailsParent>
            <DashboardFooterItem>Terms of Service</DashboardFooterItem>
            <DashboardFooterItem>Privacy Policy</DashboardFooterItem>
            <DashboardFooterItem>Sitemap</DashboardFooterItem>
            <DashboardFooterItem>Security</DashboardFooterItem>
          </DashboardFooterDetailsParent>
          <DashboardFooterTxt>2025 BrainThrust E-Learning by SidMach Group 7. </DashboardFooterTxt>
        </DashboardSubFooterContainer>
    </DashboardFooterContainer>
    </>
  )
}

export default DashboardFooter
