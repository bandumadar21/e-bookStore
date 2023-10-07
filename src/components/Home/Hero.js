import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <section className="mt-4 flex flex-col  lg:flex-row dark:text-slate-100 items-center ">
    <div className="text-left ms-44 my-5 me-8  max-w-xl">
        <h1 className="text-4xl font-bold">The Ultimate e-Book Store</h1>
        <p className="text-2xl my-7  text-left flex flex-wrap justify-normal px-1 dark:text-slate-300">E-BookStore is the world's most popular and authoritative source for computer science ebooks. Find ratings and access to the newest books digitally.</p>
        <Link to="/products" type="button" className="text-white text-left  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Explore eBooks</Link>
    </div>
    <div className=" my-5 lg:max-w-xl  max-w-sm" >
        <img  className="rounded-lg max-h-full" src="https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=60" alt="CodeBook Hero Section" />
    </div>
</section>
  )
};

export default Hero
