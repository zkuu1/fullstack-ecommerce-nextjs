import React from 'react';
import Image from 'next/image';
import { LayoutGrid, Search, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  

function Header() {
    return (
        <div className='p-1 shadow-sm flex justify-between'>
            <div className='flex items-center gap-8  ml-10'>
                <Image 
                    src='/assets/logo.png' 
                    alt='logo' 
                    width={120} height={80} 
                />

                

                <DropdownMenu>
                <DropdownMenuTrigger asChild>
                        <h2 className=' hidden md:flex gap-2 items-center border rounded-full py-1 px-6 bg-slate-200 text-sm cursor-pointer'>
                            <LayoutGrid className='h-4 w-4' /> Category
                        </h2>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>Browse Category</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Billing</DropdownMenuItem>
                    <DropdownMenuItem>Team</DropdownMenuItem>
                    <DropdownMenuItem>Subscription</DropdownMenuItem>
                </DropdownMenuContent>
                </DropdownMenu>


                <div className='md:flex gap-3 items-center border rounded-full py-1 px-4 hidden'>
                    <Search className="h-4 w-4"/>
                    <input 
                        type='text' 
                        placeholder='Search for products' 
                        className='outline-none text-sm'
                    />
                </div>
            </div>
            <div className='flex gap-5 items-center mr-10'>
                <h2 className='flex gap-2 items-center text-lg'><ShoppingBag/> 0 </h2>
                
                <Button>Sign In</Button>
            </div>
        </div>
    );
}

export default Header;
