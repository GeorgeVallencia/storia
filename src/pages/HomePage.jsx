import { useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

function HomePage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  
  const createUser = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setEmail('');
    setPassword('');
    try{
      await createUser(email, password); 
      navigate('/packages');
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  } 

  return(
    <div className="text-center mt-20 px-6">
      <div>
        <p className="text-5xl font-bold">Unlimited stories, Products, and more</p>
      </div>
      <div className="my-2">
        <p className="text-2xl">Read anywhere. Cancel anytime.</p>
      </div>
      <div className="my-1">
        <p className="text-xl">Ready to read? Enter your email to create or restart your membership.</p>
      </div>
      <div className="my-5 mx-auto max-w-xl px-6">
        <form onSubmit={handleSubmit} className="justify-around flex flex-col" >
          <div className="flex max-w-xl justify-between">
            {/* <input placeholder="First Name" className="border-2 rounded py-3 px-4 mb-3 w-1/2 mr-2" />
            <input placeholder="Last Name" className="border-2 rounded py-3 px-4 mb-3 w-1/2" /> */}
          </div>
          <input onChange={(event) => setEmail(event.target.value)} placeholder="Email address" type="email" className="border-2 rounded py-3 px-4 mb-3" />
          <input onChange={(event) => setPassword(event.target.value)} placeholder="Password" type="password" className="border-2 rounded py-3 pl-3 pr-10 mb-3" />
          <button className="border rounded items-center bg-teal-300 py-3 px-6 text-2xl mb-3 ">Create Account</button>
          <p className="mt-10 text-xl">Already have an account with Storia? <Link to='/signin' className="text-teal-500 font-bold">Sing In</Link></p>
        </form>
      </div>
      <div className="flex flex-col justify-between mt-96">
            <div className="space-x-5">
              <Link to='/articles' className="hover:text-teal-500">Articles</Link>
              <Link to='/products' className="hover:text-teal-500">Products</Link>
              <Link to='/packages' className="hover:text-teal-500">Packages</Link>
            </div>
            <div className="text-gray-500 my-4">© 2024 George Valencia. All rights reserved.</div>
          </div>
          <hr></hr>
          <div>
            <p className="mt-4 text-gray-500 mb-6">Sponsors</p>
          </div>
    </div>
  );
}

export default HomePage;