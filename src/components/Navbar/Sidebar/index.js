import React from 'react'
import {
    SidebarContainer, 
    Icon, 
    CloseIcon, 
    SidebarWrapper,  
    SidebarLink, 
    SideBtnWrap,
    SidebarRoute,
    SidebarMenu
} from './SidebarElements'

export const Sidebar = () => {
    return (
        <SidebarContainer>
            <Icon>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="art">Art</SidebarLink>
                    <SidebarLink to="tutorials">Tutorials</SidebarLink>
                    <SidebarLink to="about">About</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/signin">Sign In</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar