import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const Register = () => {
    const navigate=useNavigate();
    async function handleRegister(event)
    {
         
        event.preventDefault();
        //console.log(event.target.name.value);
        const registrationDetails={
           name:event.target.name.value,
           email:event.target.email.value,
           password:event.target.password.value
        }
        const requestOptions={
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(registrationDetails)
        }
        const response=await fetch(`${process.env.REACT_APP_HOST}/users`,requestOptions);
        const data=await response.json();
        data.accessToken?navigate("/products"):toast.error(data);
        if(data.accessToken)
      {
        sessionStorage.setItem("token",data.accessToken);
        sessionStorage.setItem("cbid",data.user.id);
      }
    }
  return (
    <main style={{minHeight:'600px'}}>
    <section>
      <p className="text-2xl text-center font-semibold dark:text-slate-100 my-20 underline underline-offset-8">Register</p>
    </section>
    <div className="flex justify-center">
       <form onSubmit={handleRegister} className="flex justify-center flex-col w-2/4">
      <div className="mb-6">
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your name</label>
            <input type="name" id="name" name="name" className="shadow-sm  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Bandu Madar" required autoComplete="off" />
        </div>
        <div className="mb-6">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
            <input type="email" name="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="bandumadar@example.com" required autoComplete="off" />
        </div>
        <div className="mb-6">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
            <input type="password" name="password" id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required minLength="7" />
        </div>
        <div className="flex justify-center">
        <button type="submit" className="text-white w-2/4  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register</button>
        </div>
      </form>
      </div>
  </main>
  )
};

export default Register
