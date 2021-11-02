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

export const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='art' onClick={toggle}>Art</SidebarLink>
                    <SidebarLink to='tutorials' onClick={toggle}>Tutorials</SidebarLink>
                    <SidebarLink to='about' onClick={toggle}>About</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to='/signin'>Sign In</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar