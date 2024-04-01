import React from 'react'
import {
    SidebarContainer, 
    Icon, 
    CloseIcon, 
    SidebarWrapper,  
    SidebarLink, 
    SidebarLink2,
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
                    <SidebarLink to='/' onClick={toggle}>Home</SidebarLink>
                    <SidebarLink to='/portfolio' onClick={toggle}>Portfolio</SidebarLink>
                    <SidebarLink to='/tutorial' onClick={toggle}>Tutorials</SidebarLink>
                    <SidebarLink2 href="https://blogs.lavaritte.com">Blogs</SidebarLink2>
                    <SidebarLink to='/about' onClick={toggle}>About</SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar