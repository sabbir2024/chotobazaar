import Link from 'next/link'
import { BiSolidErrorAlt } from "react-icons/bi";


export default function NotFoundPage() {
    return (
        <div className='flex flex-col min-h-screen justify-center items-center space-y-3'>
            <BiSolidErrorAlt size={100} className='text-primary'/>
            <h1 className='text-4xl font-bold'>Page Not Found</h1>
            <Link href={'/'} className='btn'>Go to Home</Link>
        </div>
    )
}