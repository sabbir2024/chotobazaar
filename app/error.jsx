'use client'
import Link from 'next/link'
import { BiSolidErrorAlt } from "react-icons/bi";


export default function Error() {
    return (
        <div className='flex flex-col min-h-screen justify-center items-center space-y-3'>
            <BiSolidErrorAlt size={100} className='text-primary'/>
            <h1 className='text-4xl font-bold'>Something Went Wrong</h1>
            <Link href={'/'} className='btn'>Go to Home</Link>
        </div>
    )
}