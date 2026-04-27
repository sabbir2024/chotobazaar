import Link from "next/link";
import Image from "next/image";
import logo from "../../public/chotologo.png";

export default function Logo({
    height = 40,
    width = 120,
    bg = false,
    rounded = false,
    className = ""
}) {
    return (
        <Link href={'/'} className={`inline-block ${className}`}>
            <Image
                src={logo}
                height={height}
                width={width}
                alt="Brand logo"
                className={`
                    transition-all duration-200 hover:opacity-80
                    ${bg ? 'bg-white' : ''}
                    ${rounded ? 'rounded-full' : bg ? 'rounded-lg' : ''}
                    ${bg ? 'p-1.5' : ''}
                `}
                priority
            />
        </Link>
    );
}