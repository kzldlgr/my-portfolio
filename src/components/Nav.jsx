import { FaHome } from "react-icons/fa";
import { Link } from "react-scroll";

export default function Nav() {
  return (
    <nav className="fixed bottom-2 w-full overflow-hidden z-50">
      <div className="container mx-auto">
        {/* nav inner */}
        <div className="w-full bg-white/20 h-[96px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto flex justify-between items-center text-2xl text-black/50">
          <Link
            to='home'
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-200}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
            <FaHome />
          </Link>
          <Link
            to='about'
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
            <FaHome />
          </Link>
          <Link
            to='skills'
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
            <FaHome />
          </Link>
          <Link
            to='qualifications'
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
            <FaHome />
          </Link>
          <Link
            to='project'
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
            <FaHome />
          </Link>
          <Link
            to='contact'
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
            <FaHome />
          </Link>
        </div>
      </div>
    </nav>
  )
}
