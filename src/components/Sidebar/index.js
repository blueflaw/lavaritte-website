import React from 'react'
import {
    SidebarContainer, 
    Icon, 
    CloseIcon, 
    SidebarWrapper,  
    SidebarLink, 
    // SideBtnWrap,
    // SidebarRoute,
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
                    <SidebarLink to='/' onClick={toggle}>Art</SidebarLink>
                    <SidebarLink to='/showcase' onClick={toggle}>Showcase</SidebarLink>
                    <SidebarLink to='/NFT' onClick={toggle}>NFT</SidebarLink>
                    <SidebarLink to='/Store' onClick={toggle}>Store</SidebarLink>
                    <SidebarLink to='/tutorial' onClick={toggle}>Tutorials</SidebarLink>
                    <SidebarLink to='/blog' onClick={toggle}>Blogs</SidebarLink>
                    <SidebarLink to='/about' onClick={toggle}>About</SidebarLink>
                </SidebarMenu>
                {/* <SideBtnWrap>
                    <SidebarRoute to='/signin'>Sign In</SidebarRoute>
                </SideBtnWrap> */}
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar