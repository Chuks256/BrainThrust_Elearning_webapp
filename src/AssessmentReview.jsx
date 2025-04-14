import { useState } from 'react';
import { Helmet } from 'react-helmet';
import styled from "styled-components"
import DashboardNavbar from './components/DashboardNavbar.component';
import DashboardHeader from './components/DashboardHeader.component';
import DashboardContent from "./components/DashboardContent.component";
import DashboardFooter from "./components/DashboardFooter.component";
import cooperation from "./assets/cooperation.png"
import { IoIosArrowBack } from "react-icons/io";
import AssessmentReviewCard from "./components/AssessmentReviewCard";
import { useNavigate } from 'react-router-dom';

const ParentContainer = styled.div`
display:flex;
flex-direction:column;
gap:40px;
justify-content:space-between;
`;

const AssessmentParentContainer = styled.div`
display:flex;
justify-content:center;

`;

const AssessmentLeftContainer = styled.div`
display:flex;
flex-direction:column;
gap:5em;
`;

const AssessmentImgContainer = styled.img`
width:440px;
`;
const AssessmentHeaderContainer = styled.div`
display:flex;
width:70em;
justify-content:space-between;
`;

const AssessmentHeaderTxt = styled.h2`
color:var(--BrainThrustElemColor);
`;

const BackContainer = styled.div`
cursor:pointer;
color:var(--BrainThrustElemColor);
display:flex;
align-items:center;
gap:3px;
`;
const BackTxt=styled.p`
font-size:14px;
&:hover{
font-weight:bold;
}
`;

const AssessmentCardParentContainer = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
margin-top:50px;
`;


const AssessmentCardSubContainer = styled.div`
display:flex;
flex-direction:column;
gap:2em;
width:70em;
`;


const AssessmentReviewTxt = styled.h3`
color:var(--BrainThrustElemColor);
`;
const AssessmentGridContainer = styled.div`
display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
height: 100%;
`;

function AssessmentReview() {

  const nav= useNavigate();

  let moveToDashboard=()=>{
    nav("/dashboard")
  }

  return (
    <>
    {/* Define parent container  */}
    <ParentContainer>
        <DashboardNavbar />

{/* ---------------------------------------------------------assessment header  */}
        <AssessmentParentContainer>
          <AssessmentHeaderContainer>
          <AssessmentLeftContainer>
            <BackContainer>
              <IoIosArrowBack size={20} />
              <BackTxt onClick={()=> moveToDashboard()}>Back</BackTxt>
            </BackContainer>
            <AssessmentHeaderTxt>Your Average Assessment Score is 85.05%</AssessmentHeaderTxt>
          </AssessmentLeftContainer>
          <AssessmentImgContainer src={cooperation} />
          </AssessmentHeaderContainer>
        </AssessmentParentContainer>
        {/* assessment header --------------------------------------------- */}

        {/* assessment content begining */}
        <AssessmentCardParentContainer>
            <AssessmentCardSubContainer>
              <AssessmentReviewTxt>Assessment History</AssessmentReviewTxt>
              <AssessmentGridContainer>
                <AssessmentReviewCard course="idioms" score="100%"  status="pass" subject="English" />
                <AssessmentReviewCard />
              </AssessmentGridContainer>
            </AssessmentCardSubContainer>
          </AssessmentCardParentContainer>
        {/* assessment content ending */}




        <DashboardFooter />    
    </ParentContainer>
    </>
  )
}

export default AssessmentReview
