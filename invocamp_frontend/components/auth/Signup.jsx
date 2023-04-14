import { useState, useContext, useEffect } from "react"
import Link from "next/link"
import AuthContext from "@/AuthContext"
import { useRouter } from "next/router"
import { toast } from "react-toastify"

import axios from "axios"

const SignUp = () => {
  const [url, setUrl] = useState(null);
  const [type, setType] = useState("intern");
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [companyName, setCompanyName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confPassword, setConfPassword] = useState(null);

  const router = useRouter();
  const handleTypeAccount = (type) => (type === "intern" ? setType("intern") : setType("recruiter"));

  const { loading, error, isAuthenticated, register, clearErrors } =
    useContext(AuthContext);
  
  useEffect(() => {
    if (error) {
      toast.error(error);
      clearErrors();
    }

    if (isAuthenticated && !loading) {
      router.push("/");
    }
  }, [isAuthenticated, error, loading]);

  const handleRegister = async (e) => {
    e.preventDefault()
    if (password !== confPassword) {
      toast.error("Passwords do not match");
    }
    if (type === "intern") {
      register({ firstName, lastName, email, password, confPassword, type });
    } else {
      register({ firstName: companyName, email, password, confPassword, type });
    }
  };

  const handleSignUpWithGoogle = async () => {
    try {
      const { data } = await axios.get("/api/auth/signup-google");
      setUrl(data.url);
    } catch (error) {
      setError(error.response.data.error);
    }
  };

  return (
    <>
      <section
        data-section-id="1"
        data-share=""
        data-category="sign-in-dark-pattern"
        data-component-id="b1484c27_04_awz"
        className="py-10 bg-gray-900 overflow-hidden">
        <div className="container mx-auto md:px-4">
          <div className="relative p-4 md:p-10 bg-gray-800 overflow-hidden md:rounded-3xl">
            <div className="absolute top-1/2 left-1/2 min-w-max transform -translate-x-1/2 -translate-y-1/2">
              <div className="absolute bg-gradient-radial-dark-light w-full h-full"></div>
              <img
                src="../../img/pattern-dark-light.png"
                alt=""
                data-config-id="auto-img-1-4"
              />
            </div>
            <div className="relative flex flex-wrap -m-8">
              <div className="w-full md:w-1/2 p-8">
                <div className="pb-12 md:max-w-md mx-auto">
                  <Link href="/home">
                    <button className="flex items-center justify-center w-fit px-5 py-2 text-sm text transition-colors duration-200 border rounded-lg text-gray-200 gap-x-2 sm:w-auto hover:bg-gray-800 bg-gray-900  dark:border-gray-700 mb-8">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-5 h-5 rtl:rotate-180">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                        />
                      </svg>
                      <span>Go back</span>
                    </button>
                  </Link>
                  <div className="mb-8">
                    <h3
                      className="font-heading mb-3 text-3xl text-white font-black tracking-tight"
                      data-config-id="auto-txt-2-4">
                      Sign Up to InvoCamp
                    </h3>
                    <p
                      className="text-gray-400 font-bold"
                      data-config-id="auto-txt-3-4">
                      Lorem ipsum dolor sit amet, to the con adipiscing.
                      Volutpat tempor to the condim entum.
                    </p>
                  </div>

                  <div className="mb-8">
                    <h1 className="block mb-2 text-sm text-gray-400 font-bold">
                      Select Type of Account
                    </h1>

                    <div className="mt-3 md:flex md:items-center md:-mx-2">
                      <button
                        onClick={() => handleTypeAccount("intern")}
                        className={`flex justify-center w-full px-6 py-3
                        ${
                          type === "intern"
                            ? "text-white bg-blue-500 rounded-lg md:w-auto md:mx-2 focus:outline-none"
                            : "mt-4 text-blue-500 border border-blue-500 rounded-lg md:mt-0 md:w-auto md:mx-2 dark:border-blue-400 dark:text-blue-400 focus:outline-none"
                        } `}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>

                        <span className="mx-2">Intern</span>
                      </button>

                      <button
                        onClick={() => handleTypeAccount("recruiter")}
                        className={`flex justify-center w-full px-6 py-3
                        ${
                          type === "recruiter"
                            ? "text-white bg-blue-500 rounded-lg md:w-auto md:mx-2 focus:outline-none"
                            : "mt-4 text-blue-500 border border-blue-500 rounded-lg md:mt-0 md:w-auto md:mx-2 dark:border-blue-400 dark:text-blue-400 focus:outline-none"
                        } `}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>

                        <span className="mx-2">Recruiter</span>
                      </button>
                    </div>
                  </div>

                  <form>
                    <div className="flex flex-wrap -m-3">
                      {type === "intern" ? (
                        <div className="flex w-full p-3 gap-x-3">
                          <div className="">
                            <label
                              className="block mb-2 text-sm text-gray-400 font-bold"
                              htmlFor="firstName"
                              data-config-id="auto-txt-4-4">
                              First Name
                            </label>
                            <input
                              onChange={(e) => setFirstName(e.target.value)}
                              className="appearance-none px-6 py-3.5 w-full text-lg text-gray-500 font-bold bg-gray-900 placeholder-gray-500 outline-none border border-gray-700 focus:ring-4 focus:ring-blue-200 rounded-full"
                              id="firstName"
                              type="email"
                              placeholder="Jhon"
                              data-config-id="auto-input-6-4"
                            />
                          </div>
                          <div className="">
                            <label
                              className="block mb-2 text-sm text-gray-400 font-bold"
                              htmlFor="lastName"
                              data-config-id="auto-txt-4-4">
                              Last Name
                            </label>
                            <input
                              onChange={(e) => setLastName(e.target.value)}
                              className="appearance-none px-6 py-3.5 w-full text-lg text-gray-500 font-bold bg-gray-900 placeholder-gray-500 outline-none border border-gray-700 focus:ring-4 focus:ring-blue-200 rounded-full"
                              id="lastName"
                              type="email"
                              placeholder="Doe"
                              data-config-id="auto-input-6-4"
                            />
                          </div>
                        </div>
                      ) : (
                        <div className="w-full p-3">
                          <label
                            className="block mb-2 text-sm text-gray-400 font-bold"
                            htmlFor="companyName"
                            data-config-id="auto-txt-4-4">
                            Company Name
                          </label>
                          <input
                            onChange={(e) => setCompanyName(e.target.value)}
                            required
                            className="appearance-none px-6 py-3.5 w-full text-lg text-gray-500 font-bold bg-gray-900 placeholder-gray-500 outline-none border border-gray-700 focus:ring-4 focus:ring-blue-200 rounded-full"
                            id="companyName"
                            type="text"
                            placeholder="Company Name"
                            data-config-id="auto-input-6-4"
                          />
                        </div>
                      )}
                      <div className="w-full p-3">
                        <label
                          className="block mb-2 text-sm text-gray-400 font-bold"
                          htmlFor="signInDarkPatternInput4-1"
                          data-config-id="auto-txt-4-4">
                          {type === "intern"
                            ? "Email Address"
                            : "Company Email"}
                        </label>
                        <input
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="appearance-none px-6 py-3.5 w-full text-lg text-gray-500 font-bold bg-gray-900 placeholder-gray-500 outline-none border border-gray-700 focus:ring-4 focus:ring-blue-200 rounded-full"
                          id="signInDarkPatternInput4-1"
                          type="email"
                          placeholder="example@example.com"
                          data-config-id="auto-input-6-4"
                        />
                      </div>
                      <div className="w-full p-3">
                        <label
                          className="block mb-2 text-sm text-gray-400 font-bold"
                          htmlFor="password"
                          data-config-id="auto-txt-5-4">
                          Password
                        </label>
                        <input
                          onChange={(e) => setPassword(e.target.value)}
                          required
                          className="appearance-none px-6 py-3.5 w-full text-lg text-gray-500 font-bold bg-gray-900 placeholder-gray-500 outline-none border border-gray-700 focus:ring-4 focus:ring-blue-200 rounded-full"
                          id="password"
                          type="password"
                          placeholder="*************"
                          data-config-id="auto-input-7-4"
                        />
                      </div>
                      <div className="w-full p-3">
                        <label
                          className="block mb-2 text-sm text-gray-400 font-bold"
                          htmlFor="passwordConfirmation"
                          data-config-id="auto-txt-5-4">
                          Password Confirmation
                        </label>
                        <input
                          onChange={(e) => setConfPassword(e.target.value)}
                          required
                          className="appearance-none px-6 py-3.5 w-full text-lg text-gray-500 font-bold bg-gray-900 placeholder-gray-500 outline-none border border-gray-700 focus:ring-4 focus:ring-blue-200 rounded-full"
                          id="passwordConfirmation-2"
                          type="password"
                          placeholder="*************"
                          data-config-id="auto-input-7-4"
                        />
                      </div>
                      <div className="w-full p-3">
                        <div className="flex flex-wrap items-center justify-between -m-3">
                          <div className="w-auto p-3">
                            <div className="flex items-center">
                              <input
                                className="opacity-0 absolute h-6 w-6"
                                id="signInDarkPatternCheckbox4-1"
                                type="checkbox"
                                data-config-id="auto-input-8-4"
                              />
                              <div className="flex flex-shrink-0 justify-center items-center w-6 h-6 mr-4 text-transparent bg-gray-800 border border-gray-700 rounded-md">
                                <svg
                                  width="9"
                                  height="7"
                                  viewBox="0 0 9 7"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  data-config-id="auto-svg-1-4">
                                  <path
                                    d="M0.603516 3.77075L2.68685 5.85409L7.89518 0.645752"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"></path>
                                </svg>
                              </div>
                              <label
                                className="text-gray-400 font-bold"
                                htmlFor="signInDarkPatternCheckbox4-1"
                                data-config-id="auto-txt-6-4">
                                Remember me
                              </label>
                            </div>
                          </div>
                          <div className="w-auto p-3">
                            <a
                              className="text-blue-500 hover:text-blue-600 font-bold"
                              href="https://invocamp.com/#"
                              data-config-id="auto-txt-7-4">
                              Forgot password?
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="w-full p-3">
                        <div className="flex flex-wrap md:justify-end -m-2">
                          <button
                            onClick={handleRegister}
                            className="w-full p-2">
                            <div
                              className="block px-8 py-3.5 text-lg text-center text-white font-bold bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-200 rounded-full"
                              data-config-id="auto-txt-8-4">
                              {loading ? 'Loading...' : 'Register'}
                            </div>
                          </button>
                        </div>
                      </div>
                      <div className="w-full justify-center flex text-gray-500 ">
                        <hr className="text-center text-gray-500 font-bold w-3/4 my-2" />
                      </div>
                      <div className="w-full p-3">
                        <div className="flex flex-wrap md:justify-end -m-2">
                          <div className="w-full p-2">
                            <button
                              className="flex w-full items-center justify-center px-8 py-3.5 bg-gray-900 hover:bg-gray-700 focus:ring-4 focus:ring-blue-200 rounded-full"
                              onClick={handleSignUpWithGoogle}>
                              <img
                                className="mr-2.5"
                                src="../../img/google-play.svg"
                                alt=""
                                data-config-id="auto-img-3-4"
                              />
                              <span
                                className="text-lg text-white text-center font-bold"
                                data-config-id="auto-txt-9-4">
                                Sign up with Google
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="p-3 text-blue-500 font-bold">
                        <Link href="/auth/login">
                          Have account? Sign in here
                        </Link>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="hidden sm:block w-full md:w-1/2 p-8">
                <div
                  className="flex flex-col justify-end py-16 px-8 text-center h-full rounded-3xl"
                  style={{
                    backgroundImage: `url('../../img/work.jpg')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                  data-config-id="auto-img-5">
                  <div className="md:max-w-md mx-auto">
                    <h3
                      className="font-heading mb-3 text-3xl text-white font-black tracking-tight"
                      data-config-id="auto-txt-11-4">
                      Pure enjoyment with InvoCamp
                    </h3>
                    <p
                      className="mb-9 text-blue-100 font-bold"
                      data-config-id="auto-txt-12-4">
                      Lorem ipsum dolor sit amet, to the con adipiscing.
                      Volutpat tempor to the condim entum.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SignUp
