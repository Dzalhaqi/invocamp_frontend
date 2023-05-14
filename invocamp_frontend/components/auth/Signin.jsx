import Link from "next/link"
import { useState, useEffect, useContext } from "react"
import { useRouter } from "next/router"
import { ToastContainer, toast } from "react-toastify"

import AuthContext from "@/AuthContext"

const Signin = () => {

  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)

  const router = useRouter();
  const { loading, error, isAuthenticated, login, clearErrors } =
    useContext(AuthContext);

  useEffect(() => {
    if (error) {
      toast.error(error, {
        position: "top-center",
        autoClose: 1000,
      });
      clearErrors();
    }

    if (isAuthenticated && !loading) {
      router.push("/dashboard");
    }
  }, [isAuthenticated, error, loading]);

  const handleLogin = (e) => {
    e.preventDefault();
    login({ email, password });
  };


  return (
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
                    Sign In to InvoCamp
                  </h3>
                </div>

                <form>
                  <div className="flex flex-wrap -m-3">
                    <div className="w-full p-3">
                      <label
                        className="block mb-2 text-sm text-gray-400 font-bold"
                        htmlFor="signInDarkPatternInput4-1"
                        data-config-id="auto-txt-4-4">
                        Email Address
                      </label>
                      <input
                        onChange={(e) => setEmail(e.target.value)}
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
                        className="appearance-none px-6 py-3.5 w-full text-lg text-gray-500 font-bold bg-gray-900 placeholder-gray-500 outline-none border border-gray-700 focus:ring-4 focus:ring-blue-200 rounded-full"
                        id="password"
                        type="password"
                        placeholder="*************"
                        data-config-id="auto-input-7-4"
                      />
                    </div>
                    <div className="w-full p-3">
                      <div className="flex flex-wrap items-center justify-between -m-3">
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
                        <div className="w-full p-2">
                          <button
                            onClick={handleLogin}
                            className="block px-8 py-3.5 w-full text-lg text-center text-white font-bold bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-200 rounded-full"
                            data-config-id="auto-txt-8-4">
                            {loading ? "Loading..." : "Login"}
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="w-full justify-center flex text-gray-500 ">
                      <hr className="text-center text-gray-500 font-bold w-3/4 my-2" />
                    </div>
                    <div className="w-full p-3">
                      <div className="flex flex-wrap md:justify-end -m-2">
                        <div className="w-full p-2">
                          <button className="flex w-full items-center justify-center px-8 py-3.5 bg-gray-900 hover:bg-gray-700 focus:ring-4 focus:ring-blue-200 rounded-full">
                            <img
                              className="mr-2.5"
                              src="../../img/google-play.svg"
                              alt=""
                              data-config-id="auto-img-3-4"
                            />
                            <span
                              className="text-lg text-white text-center font-bold"
                              data-config-id="auto-txt-9-4">
                              Sign in with Google
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 text-blue-500 font-bold">
                      <Link href="/auth/register">
                        Don't have account? Sign up here
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
                    Lorem ipsum dolor sit amet, to the con adipiscing. Volutpat
                    tempor to the condim entum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Signin