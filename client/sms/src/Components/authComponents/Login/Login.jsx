import axios from "axios";
import requestUrls from "../../../utils/requestUrls";
import { useState } from "react";
import loginValidation from "../../../Validations/loginValidation";
import { useNavigate } from "react-router-dom";

export default function Login() {

  const [message, setMessage] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();


    const handleClick = async function (e) {
        e.preventDefault();

        let email = e.target.email.value;
        console.log("email : ", email);
        let password = e.target.password.value;
        console.log("password : ", password);

        //Validations
        let errs = loginValidation({email, password});
        console.log("errs : ", errs);

        if(errs.email) {
          setEmailError(errs.email);
          return;
        }else {
          setEmailError('');
        }

        if(errs.password) {
          setPasswordError(errs.password);
          return;
        }else {
          setPasswordError('');
        }

        console.log("url : ", requestUrls.SERVER_URL);
        axios.post(requestUrls.SERVER_URL + "/login", {
            email,
            password,
        })
        .then((response) => {

            if(response.data.success) {
                let token = response.data.data;
                let user_type = response.data.user_type;
                console.log("user_type : ", user_type);
                localStorage.setItem("token" , token);
                localStorage.setItem("user_type", user_type);
                setMessage('');
                if(user_type === 'admin') {
                  navigate('/admin/users/get');
                  return;
                }else if(user_type === 'faculty') {
                  navigate('/faculty');
                  return;
                }else {
                  navigate('/student');
                  return;
                }
                // alert(response.data.message);
            }else {
                setMessage(response.data.message);
                return;
            }
        })
        .catch((error) => {
            console.log("error : ", error);
            setMessage(error.response.data.message);
            return;
        })

    }
    return (
      <>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={handleClick}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <div style={{color : 'red',fontSize : '20px', textAlign : 'center'}}>{emailError}</div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                  <div className="text-sm">
                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <div style={{color : 'red',fontSize : '20px', textAlign : 'center'}}>{passwordError}</div>
              </div>
  
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
                <div className="message" style={{color : "red",textAlign : 'center',fontSize : '20px'}} >{message}</div>
              </div>
            </form>
          </div>
        </div>
      </>
    )
  }
  