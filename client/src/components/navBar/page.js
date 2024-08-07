"use client";
import React from 'react';
import {Navbar, Button, NavbarBrand, NavbarContent, NavbarItem, link, Input, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar} from "@nextui-org/react";
import Image from 'next/image'
import Link from 'next/link'
import  {useSelector, useDispatch}  from "react-redux";

import {logout} from '@/redux/reducerSlice/userSlice';
import { useRouter } from 'next/navigation';
const page=()=> { 
  const dispatch = useDispatch()
  const router = useRouter()
  const {isLoggedIn}= useSelector(state=>state.user)
  const handelLogout = () =>{
    dispatch(logout())
    router.push('/')
  }
  const LoggedInDrop = ()=>{
    return(
      <Dropdown placement="bottom-end">
        <DropdownTrigger>
          <Avatar
            isBordered
            as="button"
            className="transition-transform"
            color="secondary"
            name="Jason Hughes"
            size="sm"
            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="Profile Actions" variant="flat">
          <DropdownItem key="profile" className="h-14 gap-2">
            <p className="font-semibold">Signed in as</p>
            <p className="font-semibold">zoey@example.com</p>
          </DropdownItem>
          <DropdownItem key="settings">My Settings</DropdownItem>
          <DropdownItem key="team_settings">Team Settings</DropdownItem>
          <DropdownItem key="analytics">Analytics</DropdownItem>
          <DropdownItem key="system">System</DropdownItem>
          <DropdownItem key="configurations">Configurations</DropdownItem>
          <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
          <DropdownItem onClick={handelLogout} key="logout" color="danger">
            Log Out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    )
  }
  const AuthButton =()=>{
    return(
      <>
      <Button as={Link} href="/login"> Login</Button>
      <Button as={Link} href="/register"> Register</Button>
      </>
    )
  }
  return (
    <Navbar isBordered>
    <NavbarContent justify="start">
      <NavbarBrand className="mr-4">
      <div>
      <Image src="/parcellogo.jpg" width={39} height={39} alt="picture"></Image>
      </div>
      <p className="hidden sm:block font-bold text-inherit">Parcel App</p>
      </NavbarBrand>
      
    </NavbarContent>

    <NavbarContent as="div" className="items-center" justify="end">
      {isLoggedIn ?  <LoggedInDrop/> : <AuthButton/>} 
    
    </NavbarContent>
  </Navbar>
  );
}
export default page