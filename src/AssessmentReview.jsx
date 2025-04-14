import { useState } from 'react';
import { Helmet } from 'react-helmet';
import styled from "styled-components"
import DashboardNavbar from './components/DashboardNavbar.component';
import DashboardHeader from './components/DashboardHeader.component';
import DashboardContent from "./components/DashboardContent.component";
import DashboardFooter from "./components/DashboardFooter.component";
import cooperation from "./assets/cooperation.png"
import { IoIosArrowBack } from "react-icons/io";

const ParentContainer = styled.div`
display:flex;
flex-direction:column;
gap:30px;
justify-content:space-between;
`;
const AssessmentParentContainer = styled.div``;
const AssessmentLeftContainer = styled.div``;
const AssessmentImgContainer = styled.img`
width:440px;
`;
const AssesementCardContainer = styled.div``;
const AssessmentCard = styled.div``;
const AssessmentCardHeader = styled.div``;
const AssessmentCardModal =styled.div``;
const BackContainer = styled.div``;
const BackTxt=styled.p``;

function AssessmentReview() {
  return (
    <>
    {/* Define parent container  */}
    <ParentContainer>
        <DashboardNavbar />
        <AssessmentParentContainer>
            <AssessmentLeftContainer></AssessmentLeftContainer>
            <AssessmentImgContainer src={cooperation} />
        </AssessmentParentContainer>
        <DashboardFooter />    
    </ParentContainer>
    </>
  )
}

export default AssessmentReview
