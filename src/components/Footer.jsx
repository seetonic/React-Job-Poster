import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="flex justify-around items-center p-10 bg-green-400">
        <Link to='/' href="#" className="text-3xl font-bold cursor-pointer">
          Logo
        </Link>
        <ul className="flex gap-5">
            <li className="hover:underline font-medium"><Link to="/">Home</Link></li>
            <li className="hover:underline font-medium"><Link to="/about">About</Link></li>
            <li className="hover:underline font-medium"><Link to="/jobs">Job Post</Link></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;