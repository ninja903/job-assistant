"use client"
import { Button } from '@/components/ui/button'
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarHeader, SidebarTrigger } from '@/components/ui/sidebar'
import {  PlusIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import JobSidebarList from './JobSidebarList'
import SignInPrompt from './SignInPrompt'
import SidebarFooterContent from './SidebarFooterContent'

const AppSidebar = () => {
    return (
        <>
            <Sidebar className="!bg-[rgb(33,33,33)] px-2">
                <SidebarHeader
                    className='flex flex-row w-full items-center justify-between m-[4px_0px_0px]'
                >
                    <Link href="/" className='text-white text-xl'>
                        Job<b className="text-primary">Assistant</b>.ai
                    </Link>
                    <SidebarTrigger className='!text-white !p-0 !bg-gray-800' />
                </SidebarHeader>
                <SidebarContent className='overflow-hidden'
                >
                    
                    <Link href="/">
                        <Button
                            variant="outline"
                            className='!bg-transparent !text-white
                              border-[rgba(255,255,255,.2)]
                               mt-3 !h-10 !rounded-lg !font-medium text-sm
                               hover:!bg-gray-700 transition-colors'
                        >
                            <PlusIcon className='w-4 h-4 ' />
                            <span>New job</span>
                        </Button>
                    </Link>
                    <JobSidebarList />

                    <SignInPrompt/>
                </SidebarContent>
                <SidebarFooter>
                    <SidebarFooterContent
                        isSignedIn={true}
                        isLoaded={true}
                        userName={"techguy"}
                        emailAddress={"techguy@gmail.com"}
                        userInitial={"T"}
                        credits={10}
                        loadingCredit={false}
                        onUpgradeClick={() => console.log("")}
                        onSignOutClicK={() => console.log("")}
                    
                        
                    />
                </SidebarFooter>
            </Sidebar>
        </>
    )
};

export default AppSidebar
