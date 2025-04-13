import { useState } from 'react';
import { Helmet } from 'react-helmet';
import styled from "styled-components"
import DashboardNavbar from './components/DashboardNavbar.component';
import DashboardHeader from './components/DashboardHeader.component';
import DashboardContent from "./components/DashboardContent.component";
import DashboardFooter from "./components/DashboardFooter.component";

const ParentContainer = styled.div`
display:flex;
flex-direction:column;
gap:30px;
`;

function Dashboard() {
  return (
    <>
    {/* Define parent container  */}
    <ParentContainer>
        <DashboardNavbar />
        <DashboardHeader />
        <DashboardContent  />
        <DashboardFooter />    
    </ParentContainer>
    </>
  )
}

export default Dashboard
