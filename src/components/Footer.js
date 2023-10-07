import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      
<footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <Link to="/" className="hover:underline">E-BookStore</Link>. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-1 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="https://www.facebook.com/" className="mr-4 hover:underline md:mr-6 ">Facebook</a>
        </li>
        <li>
            <a href="https://www.instagram.com/" className="mr-4 hover:underline md:mr-6">Instagram</a>
        </li>
        <li>
            <a href="https://www.youtube.com/madarbandu" className="mr-4 hover:underline md:mr-6">Youtube</a>
        </li>
        <li>
            <a href="https://www.linkedin.com/" className="hover:underline">LinkedIn</a>
        </li>
    </ul>
    </div>
</footer>

    </div>
  )
};

export default Footer
