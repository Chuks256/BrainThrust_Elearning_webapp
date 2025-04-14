import { useState } from 'react';
import styled from "styled-components"
import icon from "../assets/icon.png"
import { RiNotification4Fill } from "react-icons/ri";
import { CgMenuRound } from "react-icons/cg";
// import { IoMdArrowDropdown } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

const NavParentContainer = styled.div``;
const PrimaryNavContainer = styled.div`
background:var(--BrainThrustElemColor);
padding:15px;
color:var(--BrainThrustTextColor);
display:flex;
align-items:center;
justify-content:center;
`;

const NavLogoContainer = styled.div`
display:flex;
align-items:center;
gap:12px;
`;

const DropDownMenuContainer = styled.div``;
const MenuContainer = styled.div`
display:flex;
align-items:center;
gap:20px;
`;

const PrimaryNavSubContainer = styled.div`
display:flex;
align-items:center;
width:70em;
justify-content:space-between;
`;

const BrainThrustLogo=styled.img`
width:40px;
`;
const BrainthrustLogoTxt=styled.h4`
font-weight:bold;
`;

const UserProfilePics=styled.div`
padding:15px;
border-style:solid;
border-color:ivory;
border-width:2px;
background:#232461;
border-radius:100px;
`;
// secondary nav container 
const SecondaryNavContainer = styled.div`
padding:18px;
display:flex;
align-items:center;
justify-content:center;
`;

const SecondarySubContainer = styled.div`
justify-content:space-between;
display:flex;
align-items:center;
justify-content:space-between;
width:70em;
`;

const SearchContainer = styled.div`
background:var(--dark-shade-bg);
padding:3px;
width:20em;
border-radius:5px;
display:flex;
align-items:center;
gap:10px;
justify-content:center;
`;
const SearchInputBox=styled.input`
height:40px;
width:18em;
border-style:solid;
border-color:transparent;
border-radius:5px;
background:transparent;
text-align:center;
font-size:14px;
border-color:transparent;
outline:none;
`;

const NavLinkParentContainer= styled.ul`
display:flex;
gap:15px;
`;

const NavLinkItems=styled.li`
&:hover{
font-weight:bold;
color:var(--active-color);
}
`;

function DashboardNavbar() {
  return (
    <>
    {/* Define  container  */}
    <NavParentContainer>
      {/* primary nav container  */}
      <PrimaryNavContainer>
        <PrimaryNavSubContainer>
        {/* nav logo container begining  */}
      <NavLogoContainer>
      <BrainThrustLogo src={icon} alt="brainthrust_icon" />
      <BrainthrustLogoTxt>BrainThrust</BrainthrustLogoTxt>
      </NavLogoContainer>
      {/* nav logo container ending  */}

      {/* drop down menu beigning  */}
      {/* <DropDownMenuContainer>[dropdown menu section]</DropDownMenuContainer> */}
      {/* drop downmenu ending  */}

      {/* menu section begining */}
      <MenuContainer>
        <RiNotification4Fill size={25} color='ivory' /> 
        <UserProfilePics></UserProfilePics>
        <CgMenuRound size={30} color='ivory' />   
      </MenuContainer>
      {/* menu section ending */}
      </PrimaryNavSubContainer>
      </PrimaryNavContainer>
      {/* primary container ending  */}
{/* ................................................................... */}

      {/* secondary nav container  */}
      <SecondaryNavContainer>
        <SecondarySubContainer>
          {/* search container  */}
          <SearchContainer>
            <IoSearchOutline  size={20} />
            <SearchInputBox placeholder='What are you searching for ?' />
          </SearchContainer>

          <NavLinkParentContainer>
            <NavLinkItems><Link style={{"color":"var(--BrainThrustElemColor)","font-size":"14px"}} to="/dashboard">Home</Link> </NavLinkItems>
            <NavLinkItems><Link style={{"color":"var(--BrainThrustElemColor)" ,"font-size":"14px"}} to="/dashboard/Subjects">Subjects</Link> </NavLinkItems>
            <NavLinkItems><Link style={{"color":"var(--BrainThrustElemColor)","font-size":"14px"}} to="/dashboard/StudentProfile">Student Profile</Link> </NavLinkItems>
            <NavLinkItems><Link style={{"color":"var(--BrainThrustElemColor)","font-size":"14px"}} to="/dashboard/contactus">Contact Us</Link> </NavLinkItems>
          </NavLinkParentContainer>
        
        </SecondarySubContainer>
      </SecondaryNavContainer>
      {/* seconday container ending */}

    </NavParentContainer>
    </>
  )
}

export default DashboardNavbar
