"use client"

import Link from 'next/link'
import { FaGithub, FaLink } from 'react-icons/fa'

const Nav = () => {

    return (
        <nav className='max-w-6xl w-full flex justify-end items-center p-8 '>
            <div className='flex items-center gap-4 text-(--text-primary) max-w-5xl'>
                <Link href={'https://ilotus.dev'} >
                    <FaLink size={22} className='hover:text-(--accent)' />
                </Link>
                <Link href={'https://www.github.com/thamarai-titan'} >
                    <FaGithub size={25} />
                </Link>
            </div>
        </nav>
    )
}

export default Nav
