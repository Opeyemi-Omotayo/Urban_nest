import Link from "next/link";
import Button from "../elements/button/Button";

const Navigation = () => {
    return (
        <div className="flex flex-col items-center justify-between text-sm lg:flex-row h-96 lg:h-0 ">
            <li >
                <Link href="/about" className="mr-0 lg:mr-4 active:text-green-500">ABOUT</Link>
            </li>
            <li>
                <Link href="/properties" className="mr-0 lg:mr-4 active:text-green-500">PROPERTY</Link>
            </li>
            <li>
                <Link href="/testimonial" className="mr-0 lg:mr-4 active:text-green-500">TESTIMONIAL</Link>
            </li>
            <li>
                <Link href="/contact" className="mr-0 lg:mr-4 active:text-green-500">CONTACT</Link>
            </li>
          <Link href="/login">
            <Button className="w-40 text-white bg-green-500 rounded-lg bg-primary">
              Get Started Now
            </Button>
          </Link>
        </div>
    );
};

export default Navigation;
