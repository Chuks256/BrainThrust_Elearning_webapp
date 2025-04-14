
import styled from "styled-components";
import { useState } from 'react';
import { IoIosCheckmarkCircle } from "react-icons/io";

const AssessmentCard = styled.div`
background:var(--BrainThrustBgColor);
height:30em;
width:30em;
border-radius:5px;
border-style:solid;
border-color:var(--BrainThrustElemColor);
border-width:1px;
display:flex;
flex-direction:column;
gap:50px;
`;
const AssessmentCardHeader = styled.div`
padding:20px;
background:var(--BrainThrustElemColor);
color:var(--BrainThrustBgColor);
`;
const AssessmentSubjectContainer = styled.div`
display:flex;
align-items:center;
gap:5px;
`;
const AssessmentCardBadge=styled.div`
background:#85A8FF;
padding:10px;
width:80px;
font-weight:bold;
color:var(--BrainThrustElemColor);
font-size:14px;
border-radius:100px;
display:flex;
justify-content:center;
align-items:center;
`;
const AssessmentCardBadgeTxt=styled.p``;
const AssessmentCourseTxt=styled.p`
font-size:16px;
`;
const AssessmentCardContentParentContainer =styled.div`
display:flex;
flex-direction:column;
gap:20px;
`;

const AssessmentCardContentColumnContainer = styled.div`
display:flex;
align-items:center;
justify-content:center;
gap:110px;
`;
const AssessmentHeaderItemContainer =styled.ul`
display:flex;
justify-content:space-between;
`;
const AssessmentHeaderItemList =styled.li``;
const AssessmentCourseScore=styled.p``;

function AssessmentReviewCard(props){
    return(
        <>
        <AssessmentCard>
            {/* Assessment card header begining */}
            <AssessmentCardHeader>
                <AssessmentHeaderItemContainer>
                <AssessmentHeaderItemList><b>English</b></AssessmentHeaderItemList>
                <AssessmentHeaderItemList>Status</AssessmentHeaderItemList>
                <AssessmentHeaderItemList>Score</AssessmentHeaderItemList>
                </AssessmentHeaderItemContainer>
            </AssessmentCardHeader>
            {/* Assessment Card ending  */}
            {/* assessment content begining */}
            <AssessmentCardContentParentContainer>
            <AssessmentCardContentColumnContainer>
                <AssessmentSubjectContainer>
                    <IoIosCheckmarkCircle size={22} color="green" /> 
                    <AssessmentCourseTxt>Idioms</AssessmentCourseTxt>
                </AssessmentSubjectContainer>
                <AssessmentCardBadge>Pass</AssessmentCardBadge>
                <AssessmentCourseScore>100%</AssessmentCourseScore>
            </AssessmentCardContentColumnContainer> 

             <AssessmentCardContentColumnContainer>
                <AssessmentSubjectContainer>
                    <IoIosCheckmarkCircle size={22} color="green" /> 
                    <AssessmentCourseTxt>Idioms</AssessmentCourseTxt>
                </AssessmentSubjectContainer>
                <AssessmentCardBadge>Pass</AssessmentCardBadge>
                <AssessmentCourseScore>100%</AssessmentCourseScore>
            </AssessmentCardContentColumnContainer>

                 <AssessmentCardContentColumnContainer>
                <AssessmentSubjectContainer>
                    <IoIosCheckmarkCircle size={22} color="green" /> 
                    <AssessmentCourseTxt>Idioms</AssessmentCourseTxt>
                </AssessmentSubjectContainer>
                <AssessmentCardBadge>Pass</AssessmentCardBadge>
                <AssessmentCourseScore>100%</AssessmentCourseScore>
            </AssessmentCardContentColumnContainer> 
 

            </AssessmentCardContentParentContainer>
            {/* assessment content ending */}
                
        </AssessmentCard>
        </>
    )
}

export default AssessmentReviewCard