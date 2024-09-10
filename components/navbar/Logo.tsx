import React from 'react'
import { GiWoodCabin } from "react-icons/gi";
import { Button } from '../ui/button';
import Link from 'next/link';

function Logo() {
  return (
    
    <Button size='icon' asChild>
        <Link href='/'><GiWoodCabin className='w-6 h-6'/></Link>
    </Button>
   
  )
}

export default Logo
