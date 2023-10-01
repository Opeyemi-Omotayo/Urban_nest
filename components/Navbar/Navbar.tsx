import Link from "next/link";

const Navbar = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-between text-sm h-96 lg:h-0">
            <li className="mr-0 lg:mr-4">
                <Link href="/">Home</Link>
            </li>
            <li className="mr-0 lg:mr-4">
                <Link href="/#about">About</Link>
            </li>
            <li className="mr-0 lg:mr-4">
                <Link href="/#property">Property</Link>
            </li>
            <li className="mr-0 lg:mr-4">
                <Link href="/#testimonial">Testimonial</Link>
            </li>
            <li className="mr-0 lg:mr-4">
                <Link href="/#contact">Contact</Link>
            </li>
        </div>
    );
};

export default Navbar;
