import { Link, useNavigate } from "react-router-dom";
import ReactDOM from "react-dom";
import { useEffect, useState } from "react";
import { UserAuth } from "../context/AuthContext";

function SignInPage() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();
  const { signIn } = UserAuth();

  const handleSubmit = async(event) => {
    event.preventDefault();
    setError('');
    try {
      await signIn(email, password)
      navigate('/articles');
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  }

  useEffect(() => {
    document.body.classList.add('overflow-hidden');

    return () => {
      document.body.classList.remove('overflow-hidden');
    }
  }, []);

  return ReactDOM.createPortal(
      <div>
      <div className="fixed inset-0 bg-gray-300 opacity-80 flex"></div>
      <div className="fixed sm:inset-40 p-10 bg-white mx-auto py-10 pt-24 items-center max-w-md">
        <p className="text-4xl font-bold mb-8">Sign In</p>
        <form onSubmit={handleSubmit} className="flex flex-col max-w-96">
          <input onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="border-2 py-3 pl-2 rounded" />
          <input onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="border-2 py-3 pl-2 rounded my-2" />
          <button className="bg-teal-300 py-3 rounded text-white">Sign In</button>
        </form>
        <p className="text-center my-4 cursor-pointer hover:underline">Forgot password?</p>
        <div className="flex my-4">
          <input type="checkbox" className="mr-4" />
          <p>Remember me</p>
        </div>
        <div className="flex">
          <p className="mr-2">New to Storia?</p>
          <Link to="/" className="hover:underline">Sign up now.</Link>
        </div>
        <p className="my-8 text-sm">This page is protected by Google reCAPTCHA to ensure you're not a bot.<a href='43' className="text-teal-400 cursor-pointer hover:underline">Learn more</a></p>
      </div>
    </div>,
    document.querySelector('.modal-container')
  );
}

export default SignInPage;