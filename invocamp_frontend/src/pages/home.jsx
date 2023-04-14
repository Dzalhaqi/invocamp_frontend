import React, {useEffect} from 'react'
import NextLink from 'next/link'
import Footer from '@/layout/Footer'
import Navbar from '@/layout/Navbar'
import Layout from '@/layout/Layout'
import { FaRegUserCircle } from 'react-icons/fa'
import Link from 'next/link'

const Home = () => {

  return (
    <Layout title="InvoCamp Site">
      <div id="content">
        <section className="py-10 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="py-16 dark:text-white px-8 bg-white dark:bg-gray-800 rounded-3xl">
              <div className="max-w-7xl mx-auto">
                <div className="flex flex-wrap -m-8 mb-10">
                  <div className="w-full md:w-1/2 p-8">
                    <div className="md:max-w-lg">
                      <h2
                        className="font-heading mb-6 text-4xl md:text-5xl font-bold tracking-tight"
                        data-config-id="auto-txt-1-1">
                        Invest in a better way to work online.
                      </h2>
                      <p
                        className="mb-8 text-xl font-bold"
                        data-config-id="auto-txt-2-1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Duis venenatis volutpat velit, quis iaculis velit
                        bibendum a. Maecenas accumsan fermentum nisl.
                      </p>
                      <div className="flex flex-wrap -m-2">
                        <div className="w-full md:w-auto p-2">
                          <a
                            className="block w-full px-8 py-3.5 text-lg text-center text-white font-bold bg-blue-500 hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800 focus:ring-4 focus:ring-blue-200 rounded-full"
                            href="https://invocamp.com/#"
                            data-config-id="auto-txt-3-1">
                            Get Started 
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 p-8">
                    <img
                      className="mx-auto md:mr-0 rounded-3xl"
                      src="./img/invest.png"
                      alt=""
                      data-config-id="auto-img-1-1"
                    />
                  </div>
                </div>
                <div className="p-8 md:p-12 bg-gray-100 dark:bg-gray-700 rounded-3xl">
                  <div className="flex flex-wrap -m-8">
                    <div className="w-full md:w-1/3 p-8">
                      <div className="flex flex-wrap -m-3">
                        <div className="w-auto md:w-full lg:w-auto p-3">
                          <div className="flex items-center justify-center w-12 h-12 bg-white dark:bg-gray-300 rounded-xl">
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              data-config-id="auto-svg-1-1">
                              <path
                                d="M14 16C14 17.77 13.23 19.37 12 20.46C10.94 21.42 9.54 22 8 22C4.69 22 2 19.31 2 16C2 13.9753 3.01397 12.1814 4.5554 11.0973C4.80358 10.9228 5.1393 11.0422 5.27324 11.3145C6.21715 13.2332 7.95419 14.6699 10.02 15.23C10.65 15.41 11.31 15.5 12 15.5C12.4872 15.5 12.9539 15.4538 13.4074 15.3687C13.6958 15.3147 13.9828 15.4995 13.9955 15.7926C13.9985 15.8621 14 15.9314 14 16Z"
                                fill="#3B82F6"></path>
                              <path
                                d="M18 8C18 8.78 17.85 9.53 17.58 10.21C16.89 11.95 15.41 13.29 13.58 13.79C13.08 13.93 12.55 14 12 14C11.45 14 10.92 13.93 10.42 13.79C8.59 13.29 7.11 11.95 6.42 10.21C6.15 9.53 6 8.78 6 8C6 4.69 8.69 2 12 2C15.31 2 18 4.69 18 8Z"
                                fill="#3B82F6"></path>
                              <path
                                d="M22 16C22 19.31 19.31 22 16 22C15.2555 22 14.5393 21.8643 13.8811 21.6141C13.5624 21.4929 13.503 21.0851 13.7248 20.8262C14.8668 19.4938 15.5 17.786 15.5 16C15.5 15.66 15.47 15.32 15.42 15C15.3902 14.8155 15.4844 14.6342 15.6478 14.5437C16.9719 13.8107 18.0532 12.6876 18.727 11.3153C18.8609 11.0427 19.1968 10.923 19.4452 11.0978C20.9863 12.1818 22 13.9755 22 16Z"
                                fill="#3B82F6"></path>
                            </svg>
                          </div>
                        </div>
                        <div className="flex-1 p-3">
                          <h3
                            className="font-heading mb-2 text-xl text-gray-900 dark:text-gray-100 font-black"
                            data-config-id="auto-txt-4-1">
                            Lorem ipsum dolores
                          </h3>
                          <p
                            className="text-sm text-gray-700 dark:text-gray-300 font-bold"
                            data-config-id="auto-txt-5-1">
                            Lorem ipsum dolor sit amet sectetur adip elit donec.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="w-full md:w-1/3 p-8">
                      <div className="flex flex-wrap -m-3">
                        <div className="w-auto md:w-full lg:w-auto p-3">
                          <div className="flex items-center justify-center w-12 h-12 bg-white dark:bg-gray-300 rounded-xl">
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              data-config-id="auto-svg-1-1">
                              <path
                                d="M14 16C14 17.77 13.23 19.37 12 20.46C10.94 21.42 9.54 22 8 22C4.69 22 2 19.31 2 16C2 13.9753 3.01397 12.1814 4.5554 11.0973C4.80358 10.9228 5.1393 11.0422 5.27324 11.3145C6.21715 13.2332 7.95419 14.6699 10.02 15.23C10.65 15.41 11.31 15.5 12 15.5C12.4872 15.5 12.9539 15.4538 13.4074 15.3687C13.6958 15.3147 13.9828 15.4995 13.9955 15.7926C13.9985 15.8621 14 15.9314 14 16Z"
                                fill="#3B82F6"></path>
                              <path
                                d="M18 8C18 8.78 17.85 9.53 17.58 10.21C16.89 11.95 15.41 13.29 13.58 13.79C13.08 13.93 12.55 14 12 14C11.45 14 10.92 13.93 10.42 13.79C8.59 13.29 7.11 11.95 6.42 10.21C6.15 9.53 6 8.78 6 8C6 4.69 8.69 2 12 2C15.31 2 18 4.69 18 8Z"
                                fill="#3B82F6"></path>
                              <path
                                d="M22 16C22 19.31 19.31 22 16 22C15.2555 22 14.5393 21.8643 13.8811 21.6141C13.5624 21.4929 13.503 21.0851 13.7248 20.8262C14.8668 19.4938 15.5 17.786 15.5 16C15.5 15.66 15.47 15.32 15.42 15C15.3902 14.8155 15.4844 14.6342 15.6478 14.5437C16.9719 13.8107 18.0532 12.6876 18.727 11.3153C18.8609 11.0427 19.1968 10.923 19.4452 11.0978C20.9863 12.1818 22 13.9755 22 16Z"
                                fill="#3B82F6"></path>
                            </svg>
                          </div>
                        </div>
                        <div className="flex-1 p-3">
                          <h3
                            className="font-heading mb-2 text-xl text-gray-900 dark:text-gray-100 font-black"
                            data-config-id="auto-txt-4-1">
                            Lorem ipsum dolores
                          </h3>
                          <p
                            className="text-sm text-gray-700 dark:text-gray-300 font-bold"
                            data-config-id="auto-txt-5-1">
                            Lorem ipsum dolor sit amet sectetur adip elit donec.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="w-full md:w-1/3 p-8">
                      <div className="flex flex-wrap -m-3">
                        <div className="w-auto md:w-full lg:w-auto p-3">
                          <div className="flex items-center justify-center w-12 h-12 bg-white dark:bg-gray-300 rounded-xl">
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              data-config-id="auto-svg-1-1">
                              <path
                                d="M14 16C14 17.77 13.23 19.37 12 20.46C10.94 21.42 9.54 22 8 22C4.69 22 2 19.31 2 16C2 13.9753 3.01397 12.1814 4.5554 11.0973C4.80358 10.9228 5.1393 11.0422 5.27324 11.3145C6.21715 13.2332 7.95419 14.6699 10.02 15.23C10.65 15.41 11.31 15.5 12 15.5C12.4872 15.5 12.9539 15.4538 13.4074 15.3687C13.6958 15.3147 13.9828 15.4995 13.9955 15.7926C13.9985 15.8621 14 15.9314 14 16Z"
                                fill="#3B82F6"></path>
                              <path
                                d="M18 8C18 8.78 17.85 9.53 17.58 10.21C16.89 11.95 15.41 13.29 13.58 13.79C13.08 13.93 12.55 14 12 14C11.45 14 10.92 13.93 10.42 13.79C8.59 13.29 7.11 11.95 6.42 10.21C6.15 9.53 6 8.78 6 8C6 4.69 8.69 2 12 2C15.31 2 18 4.69 18 8Z"
                                fill="#3B82F6"></path>
                              <path
                                d="M22 16C22 19.31 19.31 22 16 22C15.2555 22 14.5393 21.8643 13.8811 21.6141C13.5624 21.4929 13.503 21.0851 13.7248 20.8262C14.8668 19.4938 15.5 17.786 15.5 16C15.5 15.66 15.47 15.32 15.42 15C15.3902 14.8155 15.4844 14.6342 15.6478 14.5437C16.9719 13.8107 18.0532 12.6876 18.727 11.3153C18.8609 11.0427 19.1968 10.923 19.4452 11.0978C20.9863 12.1818 22 13.9755 22 16Z"
                                fill="#3B82F6"></path>
                            </svg>
                          </div>
                        </div>
                        <div className="flex-1 p-3">
                          <h3
                            className="font-heading mb-2 text-xl text-gray-900 dark:text-gray-100 font-black"
                            data-config-id="auto-txt-4-1">
                            Lorem ipsum dolores
                          </h3>
                          <p
                            className="text-sm text-gray-700 dark:text-gray-300 font-bold"
                            data-config-id="auto-txt-5-1">
                            Lorem ipsum dolor sit amet sectetur adip elit donec.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="relative pt-16 lg:pt-40 lg:pb-44 bg-white dark:bg-gray-800 overflow-hidden rounded-3xl">
              <img
                className="relative z-10 md:absolute md:top-1/2 md:left-0 md:w-1/2 md:transform md:-translate-y-1/2 xl:w-auto mx-auto md:mr-0 pr-8 pb-8 md:pr-0 md:pb-0"
                src="./img/mockup2.png"
                alt=""
                data-config-id="auto-img-1-5"
              />
              <div className="max-w-7xl mx-auto">
                <div className="flex flex-wrap justify-end items-center -m-8">
                  <div className="w-full md:w-1/2 p-8 mb-16 lg:mb-0">
                    <div className="md:max-w-xl px-8">
                      <span
                        className="inline-block mb-5 text-sm text-blue-500 font-bold uppercase tracking-widest"
                        data-config-id="auto-txt-1-5">
                        Applications
                      </span>
                      <h2
                        className="font-heading mb-6 text-4xl md:text-5xl lg:text-6xl text-gray-900 dark:text-white font-black tracking-tight"
                        data-config-id="auto-txt-2-5">
                        Great work starts with your app
                      </h2>
                      <p
                        className="mb-6 text-gray-500 dark:text-gray-300 font-bold"
                        data-config-id="auto-txt-3-5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Malesuada tellus vestibulum, commodo pulvinar.
                      </p>
                      <div className="md:max-w-md">
                        <div className="flex flex-wrap -m-2">
                          <div className="w-auto p-2">
                            <div className="flex flex-wrap px-3 py-2 bg-gray-100 rounded-full">
                              <div className="w-auto mr-2 pt-1">
                                <svg
                                  width="12"
                                  height="12"
                                  viewBox="0 0 12 12"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  data-config-id="auto-svg-1-5">
                                  <path
                                    d="M8.095 1H3.905C2.085 1 1 2.085 1 3.905V8.09C1 9.915 2.085 11 3.905 11H8.09C9.91 11 10.995 9.915 10.995 8.095V3.905C11 2.085 9.915 1 8.095 1ZM8.39 4.85L5.555 7.685C5.485 7.755 5.39 7.795 5.29 7.795C5.19 7.795 5.095 7.755 5.025 7.685L3.61 6.27C3.465 6.125 3.465 5.885 3.61 5.74C3.755 5.595 3.995 5.595 4.14 5.74L5.29 6.89L7.86 4.32C8.005 4.175 8.245 4.175 8.39 4.32C8.535 4.465 8.535 4.7 8.39 4.85Z"
                                    fill="#3B82F6"></path>
                                </svg>
                              </div>
                              <div className="flex-1">
                                <p
                                  className="text-sm text-gray-900 font-bold"
                                  data-config-id="auto-txt-4-5">
                                  Exportable code
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="w-auto p-2">
                            <div className="flex flex-wrap px-3 py-2 bg-gray-100 rounded-full">
                              <div className="w-auto mr-2 pt-1">
                                <svg
                                  width="12"
                                  height="12"
                                  viewBox="0 0 12 12"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  data-config-id="auto-svg-2-5">
                                  <path
                                    d="M8.095 1H3.905C2.085 1 1 2.085 1 3.905V8.09C1 9.915 2.085 11 3.905 11H8.09C9.91 11 10.995 9.915 10.995 8.095V3.905C11 2.085 9.915 1 8.095 1ZM8.39 4.85L5.555 7.685C5.485 7.755 5.39 7.795 5.29 7.795C5.19 7.795 5.095 7.755 5.025 7.685L3.61 6.27C3.465 6.125 3.465 5.885 3.61 5.74C3.755 5.595 3.995 5.595 4.14 5.74L5.29 6.89L7.86 4.32C8.005 4.175 8.245 4.175 8.39 4.32C8.535 4.465 8.535 4.7 8.39 4.85Z"
                                    fill="#3B82F6"></path>
                                </svg>
                              </div>
                              <div className="flex-1">
                                <p
                                  className="text-sm text-gray-900 font-bold"
                                  data-config-id="auto-txt-5-5">
                                  Easy integration
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="w-auto p-2">
                            <div className="flex flex-wrap px-3 py-2 bg-gray-100 rounded-full">
                              <div className="w-auto mr-2 pt-1">
                                <svg
                                  width="12"
                                  height="12"
                                  viewBox="0 0 12 12"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  data-config-id="auto-svg-3-5">
                                  <path
                                    d="M8.095 1H3.905C2.085 1 1 2.085 1 3.905V8.09C1 9.915 2.085 11 3.905 11H8.09C9.91 11 10.995 9.915 10.995 8.095V3.905C11 2.085 9.915 1 8.095 1ZM8.39 4.85L5.555 7.685C5.485 7.755 5.39 7.795 5.29 7.795C5.19 7.795 5.095 7.755 5.025 7.685L3.61 6.27C3.465 6.125 3.465 5.885 3.61 5.74C3.755 5.595 3.995 5.595 4.14 5.74L5.29 6.89L7.86 4.32C8.005 4.175 8.245 4.175 8.39 4.32C8.535 4.465 8.535 4.7 8.39 4.85Z"
                                    fill="#3B82F6"></path>
                                </svg>
                              </div>
                              <div className="flex-1">
                                <p
                                  className="text-sm text-gray-900 font-bold"
                                  data-config-id="auto-txt-6-5">
                                  Satisfied customers
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="w-auto p-2">
                            <div className="flex flex-wrap px-3 py-2 bg-gray-100 rounded-full">
                              <div className="w-auto mr-2 pt-1">
                                <svg
                                  width="12"
                                  height="12"
                                  viewBox="0 0 12 12"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  data-config-id="auto-svg-4-5">
                                  <path
                                    d="M8.095 1H3.905C2.085 1 1 2.085 1 3.905V8.09C1 9.915 2.085 11 3.905 11H8.09C9.91 11 10.995 9.915 10.995 8.095V3.905C11 2.085 9.915 1 8.095 1ZM8.39 4.85L5.555 7.685C5.485 7.755 5.39 7.795 5.29 7.795C5.19 7.795 5.095 7.755 5.025 7.685L3.61 6.27C3.465 6.125 3.465 5.885 3.61 5.74C3.755 5.595 3.995 5.595 4.14 5.74L5.29 6.89L7.86 4.32C8.005 4.175 8.245 4.175 8.39 4.32C8.535 4.465 8.535 4.7 8.39 4.85Z"
                                    fill="#3B82F6"></path>
                                </svg>
                              </div>
                              <div className="flex-1">
                                <p
                                  className="text-sm text-gray-900 font-bold"
                                  data-config-id="auto-txt-7-5">
                                  Increased conversion
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="py-16 px-8 md:px-16 bg-white dark:bg-gray-800 rounded-3xl">
              <div className="flex flex-wrap -m-8">
                <div className="w-full md:w-1/2 p-8">
                  <div className="md:max-w-md">
                    <span
                      className="inline-block mb-5 text-sm text-blue-500 font-bold uppercase tracking-widest"
                      data-config-id="auto-txt-1-2">
                      Feature
                    </span>
                    <h2
                      className="font-heading mb-10 text-4xl text-gray-900 dark:text-white font-black tracking-tight"
                      data-config-id="auto-txt-2-2">
                      <span data-config-id="auto-txt-8-2">
                        Let's track your business{" "}
                      </span>
                      <span
                        className="text-blue-500"
                        data-config-id="auto-txt-3-2">
                        easily!
                      </span>
                    </h2>
                    <div className="flex flex-wrap -m-2.5">
                      <div className="w-full p-2.5">
                        <div className="flex flex-wrap -m-3">
                          <div className="w-auto p-3">
                            <div className="flex items-center justify-center w-12 h-12 bg-gray-100 dark:bg-gray-300 rounded-xl">
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                data-config-id="auto-svg-1-2">
                                <path
                                  d="M14 16C14 17.77 13.23 19.37 12 20.46C10.94 21.42 9.54 22 8 22C4.69 22 2 19.31 2 16C2 13.9753 3.01397 12.1814 4.5554 11.0973C4.80358 10.9228 5.1393 11.0422 5.27324 11.3145C6.21715 13.2332 7.95419 14.6699 10.02 15.23C10.65 15.41 11.31 15.5 12 15.5C12.4872 15.5 12.9539 15.4538 13.4074 15.3687C13.6958 15.3147 13.9828 15.4995 13.9955 15.7926C13.9985 15.8621 14 15.9314 14 16Z"
                                  fill="#3B82F6"></path>
                                <path
                                  d="M18 8C18 8.78 17.85 9.53 17.58 10.21C16.89 11.95 15.41 13.29 13.58 13.79C13.08 13.93 12.55 14 12 14C11.45 14 10.92 13.93 10.42 13.79C8.59 13.29 7.11 11.95 6.42 10.21C6.15 9.53 6 8.78 6 8C6 4.69 8.69 2 12 2C15.31 2 18 4.69 18 8Z"
                                  fill="#3B82F6"></path>
                                <path
                                  d="M22 16C22 19.31 19.31 22 16 22C15.2555 22 14.5393 21.8643 13.8811 21.6141C13.5624 21.4929 13.503 21.0851 13.7248 20.8262C14.8668 19.4938 15.5 17.786 15.5 16C15.5 15.66 15.47 15.32 15.42 15C15.3902 14.8155 15.4844 14.6342 15.6478 14.5437C16.9719 13.8107 18.0532 12.6876 18.727 11.3153C18.8609 11.0427 19.1968 10.923 19.4452 11.0978C20.9863 12.1818 22 13.9755 22 16Z"
                                  fill="#3B82F6"></path>
                              </svg>
                            </div>
                          </div>
                          <div className="flex-1 p-3">
                            <h3
                              className="font-heading mb-2 text-xl text-gray-900 dark:text-white font-black"
                              data-config-id="auto-txt-4-2">
                              Lorem ipsum dolores
                            </h3>
                            <p
                              className="text-sm text-gray-700 dark:text-gray-300 font-bold"
                              data-config-id="auto-txt-5-2">
                              Lorem ipsum dolor sit amet sectetur adip elit
                              donec.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="w-full p-2.5">
                        <div className="flex flex-wrap -m-3">
                          <div className="w-auto p-3">
                            <div className="flex items-center justify-center w-12 h-12 bg-gray-100 dark:bg-gray-300 rounded-xl">
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                data-config-id="auto-svg-2-2">
                                <path
                                  d="M19.14 7.72C19.43 8.47 20.15 9 21 9C22.1 9 23 8.1 23 7C23 5.9 22.1 5 21 5C20.15 5 19.43 5.53 19.14 6.28C19.09 6.27 19.05 6.25 19 6.25H15V5.5C15 4.68 14.32 4 13.5 4H10.5C9.68 4 9 4.68 9 5.5V6.25H5C4.95 6.25 4.91 6.27 4.86 6.28C4.57 5.53 3.85 5 3 5C1.9 5 1 5.9 1 7C1 8.1 1.9 9 3 9C3.85 9 4.57 8.47 4.86 7.72C4.91 7.73 4.95 7.75 5 7.75H7.57C5.52 9.27 4.25 11.79 4.25 14.5C4.25 14.67 4.26 14.83 4.28 15H4C3.17 15 2.5 15.67 2.5 16.5V18.5C2.5 19.33 3.17 20 4 20H6C6.22 20 6.42 19.95 6.61 19.86C7.13 19.64 7.5 19.11 7.5 18.5V16.5C7.5 15.67 6.83 15 6 15H5.77C5.77 14.97 5.78 14.94 5.78 14.91C5.76 14.77 5.76 14.64 5.76 14.5C5.76 12.03 7.03 9.77 9.02 8.6C9.06 9.37 9.71 10 10.5 10H13.5C14.29 10 14.94 9.37 14.99 8.6C16.98 9.77 18.25 12.04 18.25 14.5C18.25 14.64 18.24 14.77 18.23 14.91C18.23 14.94 18.24 14.97 18.24 15H18C17.17 15 16.5 15.67 16.5 16.5V18.5C16.5 19.11 16.87 19.64 17.39 19.86C17.58 19.95 17.78 20 18 20H20C20.83 20 21.5 19.33 21.5 18.5V16.5C21.5 15.67 20.83 15 20 15H19.72C19.74 14.83 19.75 14.67 19.75 14.5C19.75 11.79 18.48 9.27 16.43 7.75H19C19.05 7.75 19.09 7.73 19.14 7.72Z"
                                  fill="#3B82F6"></path>
                              </svg>
                            </div>
                          </div>
                          <div className="flex-1 p-3">
                            <h3
                              className="font-heading mb-2 text-xl text-gray-900 dark:text-white font-black"
                              data-config-id="auto-txt-6-2">
                              Lorem ipsum dolores
                            </h3>
                            <p
                              className="text-sm text-gray-700 dark:text-gray-300 font-bold"
                              data-config-id="auto-txt-7-2">
                              Lorem ipsum dolor sit amet sectetur adip elit
                              donec.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 p-8">
                  <img
                    className="mx-auto md:mr-0 rounded-3xl"
                    src="./img/business.png"
                    alt=""
                    data-config-id="auto-img-1-2"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-10 pb-16 overflow-hidden">
          <div className="container mx-auto px-4">
            <span
              className="inline-block mb-5 text-sm text-blue-500 font-bold uppercase tracking-widest"
              data-config-id="auto-txt-1-7">
              What we found
            </span>
            <h2
              className="font-heading mb-12 text-4xl text-gray-900 dark:text-white font-black tracking-tight"
              data-config-id="auto-txt-2-7">
              Here's what you get with InvoCamp.
            </h2>
            <div className="flex flex-wrap -m-4">
              <div className="w-full md:w-1/2 p-4">
                <div className="p-8 md:p-16 text-center h-full bg-white dark:bg-gray-800 rounded-3xl">
                  <img
                    className="mb-8 mx-auto"
                    src="./img/apple.png"
                    alt=""
                    data-config-id="auto-img-1-7"
                  />
                  <h3
                    className="font-heading mb-7 text-4xl text-gray-900 dark:text-white font-black tracking-tight"
                    data-config-id="auto-txt-3-7">
                    Build what you imagine
                  </h3>
                  <p
                    className="text-xl font-bold dark:text-gray-100"
                    data-config-id="auto-txt-4-7">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis venenatis volutpat velit, quis iaculis velit bibendum
                    a. Maecenas accumsan fermentum nisl.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2 p-4">
                <div className="p-8 md:p-16 text-center h-full bg-white dark:bg-gray-800 rounded-3xl">
                  <img
                    className="mb-8 mx-auto"
                    src="./img/work.png"
                    alt=""
                    data-config-id="auto-img-2-7"
                  />
                  <h3
                    className="font-heading mb-7 text-4xl text-gray-900 dark:text-white font-black tracking-tight"
                    data-config-id="auto-txt-5-7">
                    Take control of design &amp; development
                  </h3>
                  <p
                    className="text-xl font-bold dark:text-gray-100"
                    data-config-id="auto-txt-6-7">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis venenatis volutpat velit, quis iaculis velit bibendum
                    a. Maecenas accumsan fermentum nisl.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="py-16 px-8 md:px-16 bg-white dark:bg-gray-800 rounded-3xl">
              <div className="flex flex-wrap -m-8">
                <div className="w-full md:w-1/2 p-8">
                  <img
                    className="mx-auto md:ml-0 rounded-3xl"
                    src="./img/business.png"
                    alt=""
                    data-config-id="auto-img-1-1"
                  />
                </div>
                <div className="w-full md:w-1/2 p-8">
                  <div className="md:max-w-md">
                    <span
                      className="inline-block mb-5 text-sm text-blue-500 font-bold uppercase tracking-widest"
                      data-config-id="auto-txt-1-1">
                      Feature
                    </span>
                    <h2
                      className="font-heading mb-4 text-4xl text-gray-900 dark:text-white font-black tracking-tight"
                      data-config-id="auto-txt-2-1">
                      <span data-config-id="auto-txt-9-1">
                        Let's track your business{" "}
                      </span>
                      <span
                        className="text-blue-500"
                        data-config-id="auto-txt-3-1">
                        easily!
                      </span>
                    </h2>
                    <p
                      className="mb-16 font-bold dark:text-gray-100"
                      data-config-id="auto-txt-4-1">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Duis venenatis volutpat velit.
                    </p>
                    <div className="flex flex-wrap -m-2">
                      <div className="w-auto p-2">
                        <div className="flex flex-wrap px-3 py-2 bg-gray-100 rounded-full">
                          <div className="w-auto mr-2 pt-1">
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 12 12"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              data-config-id="auto-svg-1-1">
                              <path
                                d="M8.095 1H3.905C2.085 1 1 2.085 1 3.905V8.09C1 9.915 2.085 11 3.905 11H8.09C9.91 11 10.995 9.915 10.995 8.095V3.905C11 2.085 9.915 1 8.095 1ZM8.39 4.85L5.555 7.685C5.485 7.755 5.39 7.795 5.29 7.795C5.19 7.795 5.095 7.755 5.025 7.685L3.61 6.27C3.465 6.125 3.465 5.885 3.61 5.74C3.755 5.595 3.995 5.595 4.14 5.74L5.29 6.89L7.86 4.32C8.005 4.175 8.245 4.175 8.39 4.32C8.535 4.465 8.535 4.7 8.39 4.85Z"
                                fill="#3B82F6"></path>
                            </svg>
                          </div>
                          <div className="flex-1">
                            <p
                              className="text-sm text-gray-900 font-bold"
                              data-config-id="auto-txt-5-1">
                              Exportable code
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="w-auto p-2">
                        <div className="flex flex-wrap px-3 py-2 bg-gray-100 rounded-full">
                          <div className="w-auto mr-2 pt-1">
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 12 12"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              data-config-id="auto-svg-2-1">
                              <path
                                d="M8.095 1H3.905C2.085 1 1 2.085 1 3.905V8.09C1 9.915 2.085 11 3.905 11H8.09C9.91 11 10.995 9.915 10.995 8.095V3.905C11 2.085 9.915 1 8.095 1ZM8.39 4.85L5.555 7.685C5.485 7.755 5.39 7.795 5.29 7.795C5.19 7.795 5.095 7.755 5.025 7.685L3.61 6.27C3.465 6.125 3.465 5.885 3.61 5.74C3.755 5.595 3.995 5.595 4.14 5.74L5.29 6.89L7.86 4.32C8.005 4.175 8.245 4.175 8.39 4.32C8.535 4.465 8.535 4.7 8.39 4.85Z"
                                fill="#3B82F6"></path>
                            </svg>
                          </div>
                          <div className="flex-1">
                            <p
                              className="text-sm text-gray-900 font-bold"
                              data-config-id="auto-txt-6-1">
                              Satisfied customers
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="w-auto p-2">
                        <div className="flex flex-wrap px-3 py-2 bg-gray-100 rounded-full">
                          <div className="w-auto mr-2 pt-1">
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 12 12"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              data-config-id="auto-svg-3-1">
                              <path
                                d="M8.095 1H3.905C2.085 1 1 2.085 1 3.905V8.09C1 9.915 2.085 11 3.905 11H8.09C9.91 11 10.995 9.915 10.995 8.095V3.905C11 2.085 9.915 1 8.095 1ZM8.39 4.85L5.555 7.685C5.485 7.755 5.39 7.795 5.29 7.795C5.19 7.795 5.095 7.755 5.025 7.685L3.61 6.27C3.465 6.125 3.465 5.885 3.61 5.74C3.755 5.595 3.995 5.595 4.14 5.74L5.29 6.89L7.86 4.32C8.005 4.175 8.245 4.175 8.39 4.32C8.535 4.465 8.535 4.7 8.39 4.85Z"
                                fill="#3B82F6"></path>
                            </svg>
                          </div>
                          <div className="flex-1">
                            <p
                              className="text-sm text-gray-900 font-bold"
                              data-config-id="auto-txt-7-1">
                              Easy integration
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="w-auto p-2">
                        <div className="flex flex-wrap px-3 py-2 bg-gray-100 rounded-full">
                          <div className="w-auto mr-2 pt-1">
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 12 12"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              data-config-id="auto-svg-4-1">
                              <path
                                d="M8.095 1H3.905C2.085 1 1 2.085 1 3.905V8.09C1 9.915 2.085 11 3.905 11H8.09C9.91 11 10.995 9.915 10.995 8.095V3.905C11 2.085 9.915 1 8.095 1ZM8.39 4.85L5.555 7.685C5.485 7.755 5.39 7.795 5.29 7.795C5.19 7.795 5.095 7.755 5.025 7.685L3.61 6.27C3.465 6.125 3.465 5.885 3.61 5.74C3.755 5.595 3.995 5.595 4.14 5.74L5.29 6.89L7.86 4.32C8.005 4.175 8.245 4.175 8.39 4.32C8.535 4.465 8.535 4.7 8.39 4.85Z"
                                fill="#3B82F6"></path>
                            </svg>
                          </div>
                          <div className="flex-1">
                            <p
                              className="text-sm text-gray-900 font-bold"
                              data-config-id="auto-txt-8-1">
                              Responsive images
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 overflow-hidden">
          <div className="container mx-auto px-4">
            <div
              className="py-16 px-8 md:px-16 rounded-3xl"
              style={{
                backgroundImage: `url('./img/people.png')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              data-config-id="auto-img-1">
              <h2
                className="font-heading mb-6 text-4xl md:text-5xl text-white font-black tracking-tight md:max-w-lg"
                data-config-id="auto-txt-1-6">
                Build website animations and interactions visually.
              </h2>
              <p
                className="mb-14 text-lg text-gray-200 font-bold md:max-w-4xl"
                data-config-id="auto-txt-2-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                venenatis volutpat velit, quis iaculis velit bibendum a.
                Maecenas accumsan fermentum nisl.
              </p>
              <div className="flex flex-wrap -m-2">
                <div className="w-auto p-2">
                  <div className="flex flex-wrap px-3 py-2 bg-white rounded-full">
                    <div className="w-auto mr-2 pt-1">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        data-config-id="auto-svg-1-6">
                        <path
                          d="M8.095 1H3.905C2.085 1 1 2.085 1 3.905V8.09C1 9.915 2.085 11 3.905 11H8.09C9.91 11 10.995 9.915 10.995 8.095V3.905C11 2.085 9.915 1 8.095 1ZM8.39 4.85L5.555 7.685C5.485 7.755 5.39 7.795 5.29 7.795C5.19 7.795 5.095 7.755 5.025 7.685L3.61 6.27C3.465 6.125 3.465 5.885 3.61 5.74C3.755 5.595 3.995 5.595 4.14 5.74L5.29 6.89L7.86 4.32C8.005 4.175 8.245 4.175 8.39 4.32C8.535 4.465 8.535 4.7 8.39 4.85Z"
                          fill="#3B82F6"></path>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p
                        className="text-sm text-gray-900 font-bold"
                        data-config-id="auto-txt-3-6">
                        Exportable code
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-auto p-2">
                  <div className="flex flex-wrap px-3 py-2 bg-white rounded-full">
                    <div className="w-auto mr-2 pt-1">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        data-config-id="auto-svg-2-6">
                        <path
                          d="M8.095 1H3.905C2.085 1 1 2.085 1 3.905V8.09C1 9.915 2.085 11 3.905 11H8.09C9.91 11 10.995 9.915 10.995 8.095V3.905C11 2.085 9.915 1 8.095 1ZM8.39 4.85L5.555 7.685C5.485 7.755 5.39 7.795 5.29 7.795C5.19 7.795 5.095 7.755 5.025 7.685L3.61 6.27C3.465 6.125 3.465 5.885 3.61 5.74C3.755 5.595 3.995 5.595 4.14 5.74L5.29 6.89L7.86 4.32C8.005 4.175 8.245 4.175 8.39 4.32C8.535 4.465 8.535 4.7 8.39 4.85Z"
                          fill="#3B82F6"></path>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p
                        className="text-sm text-gray-900 font-bold"
                        data-config-id="auto-txt-4-6">
                        Easy integration
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-auto p-2">
                  <div className="flex flex-wrap px-3 py-2 bg-white rounded-full">
                    <div className="w-auto mr-2 pt-1">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        data-config-id="auto-svg-3-6">
                        <path
                          d="M8.095 1H3.905C2.085 1 1 2.085 1 3.905V8.09C1 9.915 2.085 11 3.905 11H8.09C9.91 11 10.995 9.915 10.995 8.095V3.905C11 2.085 9.915 1 8.095 1ZM8.39 4.85L5.555 7.685C5.485 7.755 5.39 7.795 5.29 7.795C5.19 7.795 5.095 7.755 5.025 7.685L3.61 6.27C3.465 6.125 3.465 5.885 3.61 5.74C3.755 5.595 3.995 5.595 4.14 5.74L5.29 6.89L7.86 4.32C8.005 4.175 8.245 4.175 8.39 4.32C8.535 4.465 8.535 4.7 8.39 4.85Z"
                          fill="#3B82F6"></path>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p
                        className="text-sm text-gray-900 font-bold"
                        data-config-id="auto-txt-5-6">
                        Satisfied customers
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-auto p-2">
                  <div className="flex flex-wrap px-3 py-2 bg-white rounded-full">
                    <div className="w-auto mr-2 pt-1">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        data-config-id="auto-svg-4-6">
                        <path
                          d="M8.095 1H3.905C2.085 1 1 2.085 1 3.905V8.09C1 9.915 2.085 11 3.905 11H8.09C9.91 11 10.995 9.915 10.995 8.095V3.905C11 2.085 9.915 1 8.095 1ZM8.39 4.85L5.555 7.685C5.485 7.755 5.39 7.795 5.29 7.795C5.19 7.795 5.095 7.755 5.025 7.685L3.61 6.27C3.465 6.125 3.465 5.885 3.61 5.74C3.755 5.595 3.995 5.595 4.14 5.74L5.29 6.89L7.86 4.32C8.005 4.175 8.245 4.175 8.39 4.32C8.535 4.465 8.535 4.7 8.39 4.85Z"
                          fill="#3B82F6"></path>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p
                        className="text-sm text-gray-900 font-bold"
                        data-config-id="auto-txt-6-6">
                        Increased conversion
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 overflow-hidden">
          <div className="container mx-auto px-4">
            <h2
              className="font-heading mb-10 text-4xl md:text-5xl text-gray-900 dark:text-white font-black tracking-tight"
              data-config-id="auto-txt-1-3">
              Meet our top tier customers
            </h2>
          </div>
          <div className="flex flex-nowrap justify-center items-center -m-4">
            <div className="flex-shrink-0 w-64 p-4">
              <div className="py-24 px-8 h-full bg-white dark:bg-gray-200 rounded-3xl">
                <img
                  className="mx-auto"
                  src="./img/brand.svg"
                  alt=""
                  data-config-id="auto-img-1-3"
                />
              </div>
            </div>
            <div className="flex-shrink-0 w-64 p-4">
              <div className="py-24 px-8 h-full bg-white dark:bg-gray-200 rounded-3xl">
                <img
                  className="mx-auto"
                  src="./img/brand3.svg"
                  alt=""
                  data-config-id="auto-img-2-3"
                />
              </div>
            </div>
            <div className="flex-shrink-0 w-64 p-4">
              <div className="py-24 px-8 h-full bg-white dark:bg-gray-200 rounded-3xl">
                <img
                  className="mx-auto"
                  src="./img/brand4.svg"
                  alt=""
                  data-config-id="auto-img-3-3"
                />
              </div>
            </div>
            <div className="flex-shrink-0 w-64 p-4">
              <div className="py-24 px-8 h-full bg-white dark:bg-gray-200 rounded-3xl">
                <img
                  className="mx-auto"
                  src="./img/brand6.svg"
                  alt=""
                  data-config-id="auto-img-4-3"
                />
              </div>
            </div>
            <div className="flex-shrink-0 w-64 p-4">
              <div className="py-24 px-8 h-full bg-white dark:bg-gray-200 rounded-3xl">
                <img
                  className="mx-auto"
                  src="./img/brand8.svg"
                  alt=""
                  data-config-id="auto-img-5-3"
                />
              </div>
            </div>
            <div className="flex-shrink-0 w-64 p-4">
              <div className="py-24 px-8 h-full bg-white dark:bg-gray-200 rounded-3xl">
                <img
                  className="mx-auto"
                  src="./img/brand3.svg"
                  alt=""
                  data-config-id="auto-img-6-3"
                />
              </div>
            </div>
            <div className="flex-shrink-0 w-64 p-4">
              <div className="py-24 px-8 h-full bg-white dark:bg-gray-200 rounded-3xl">
                <img
                  className="mx-auto"
                  src="./img/brand4.svg"
                  alt=""
                  data-config-id="auto-img-7-3"
                />
              </div>
            </div>
            <div className="flex-shrink-0 w-64 p-4">
              <div className="py-24 px-8 h-full bg-white dark:bg-gray-200 rounded-3xl">
                <img
                  className="mx-auto"
                  src="./img/brand6.svg"
                  alt=""
                  data-config-id="auto-img-8-3"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-nowrap justify-center items-center -m-4">
            <div className="flex-shrink-0 w-64 p-4">
              <div className="py-24 px-8 h-full bg-white dark:bg-gray-200 rounded-3xl">
                <img
                  className="mx-auto"
                  src="./img/brand7.svg"
                  alt=""
                  data-config-id="auto-img-9-3"
                />
              </div>
            </div>
            <div className="flex-shrink-0 w-64 p-4">
              <div className="py-24 px-8 h-full bg-white dark:bg-gray-200 rounded-3xl">
                <img
                  className="mx-auto"
                  src="./img/brand5.svg"
                  alt=""
                  data-config-id="auto-img-10-3"
                />
              </div>
            </div>
            <div className="flex-shrink-0 w-64 p-4">
              <div className="py-24 px-8 h-full bg-white dark:bg-gray-200 rounded-3xl">
                <img
                  className="mx-auto"
                  src="./img/brand2.svg"
                  alt=""
                  data-config-id="auto-img-11-3"
                />
              </div>
            </div>
            <div className="flex-shrink-0 w-64 p-4">
              <div className="py-24 px-8 h-full bg-white dark:bg-gray-200 rounded-3xl">
                <img
                  className="mx-auto"
                  src="./img/brand9.svg"
                  alt=""
                  data-config-id="auto-img-12-3"
                />
              </div>
            </div>
            <div className="flex-shrink-0 w-64 p-4">
              <div className="py-24 px-8 h-full bg-white dark:bg-gray-200 rounded-3xl">
                <img
                  className="mx-auto"
                  src="./img/brand7.svg"
                  alt=""
                  data-config-id="auto-img-13-3"
                />
              </div>
            </div>
            <div className="flex-shrink-0 w-64 p-4">
              <div className="py-24 px-8 h-full bg-white dark:bg-gray-200 rounded-3xl">
                <img
                  className="mx-auto"
                  src="./img/brand5.svg"
                  alt=""
                  data-config-id="auto-img-14-3"
                />
              </div>
            </div>
            <div className="flex-shrink-0 w-64 p-4">
              <div className="py-24 px-8 h-full bg-white dark:bg-gray-200 rounded-3xl">
                <img
                  className="mx-auto"
                  src="./img/brand2.svg"
                  alt=""
                  data-config-id="auto-img-15-3"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 overflow-hidden">
          <div className="container mx-auto px-4">
            <div
              className="relative py-20 px-8 rounded-3xl"
              style={{
                backgroundImage: `url('./img/blog-screen3.png')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              data-config-id="auto-img-1">
              <div className="max-w-7xl mx-auto">
                <div className="p-10 max-w-md bg-white dark:bg-gray-200 rounded-3xl">
                  <p
                    className="mb-3 text-xs text-gray-500 font-bold"
                    data-config-id="auto-txt-1-5">
                    Design Process
                  </p>
                  <h2
                    className="font-heading mb-6 text-4xl md:text-5xl text-gray-900 font-black"
                    data-config-id="auto-txt-2-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </h2>
                  <p
                    className="mb-28 text-gray-500 font-bold"
                    data-config-id="auto-txt-3-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque rutrum tincidunt augue, at viverra erat faucibus
                    vitae.
                  </p>
                  <a
                    className="flex items-center text-blue-500 hover:text-blue-600"
                    href="https://invocamp.com/#">
                    <span
                      className="mr-0.5 font-black"
                      data-config-id="auto-txt-4-5">
                      Read Article
                    </span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      data-config-id="auto-svg-1-5">
                      <path
                        d="M6.6805 3.5465L8.82049 5.6865L10.1338 6.99317C10.6872 7.5465 10.6872 8.4465 10.1338 8.99983L6.6805 12.4532C6.22716 12.9065 5.45383 12.5798 5.45383 11.9465V8.2065V4.05317C5.45383 3.41317 6.22716 3.09317 6.6805 3.5465Z"
                        fill="currentColor"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap lg:items-center -m-8">
              <div className="w-full md:w-1/2 p-8">
                <div className="md:max-w-md">
                  <span
                    className="inline-block mb-4 text-sm text-blue-500 font-bold uppercase tracking-widest"
                    data-config-id="auto-txt-1-2">
                    How it works
                  </span>
                  <h2
                    className="font-heading mb-6 text-4xl md:text-5xl text-gray-900 dark:text-white font-black tracking-tight"
                    data-config-id="auto-txt-2-2">
                    All-in-one, next-gen SaaS experience
                  </h2>
                  <p
                    className="mb-5 text-gray-700 dark:text-gray-100 font-bold"
                    data-config-id="auto-txt-3-2">
                    Yearly access to all products with ipsum dolor sit amet,
                    consectetur adipiscing elit. Suspendisse varius enim in eros
                    elementum tristique.
                  </p>
                  <div className="flex flex-wrap -m-2">
                    <div className="w-full md:w-auto p-2">
                      <a
                        className="block w-full px-4 py-2.5 text-sm text-center text-white font-bold bg-blue-500 hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800 focus:ring-4 focus:ring-blue-200 rounded-full"
                        href="https://invocamp.com/#"
                        data-config-id="auto-txt-4-2">
                        Learn more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 p-8">
                <div className="py-16 px-8 bg-white dark:bg-gray-800 rounded-3xl">
                  <div className="max-w-md mx-auto">
                    <div className="flex flex-wrap -m-3">
                      <div className="w-full p-3">
                        <div className="flex flex-wrap -m-4">
                          <div className="flex flex-col items-center w-auto p-4">
                            <div className="flex items-center justify-center mb-6 w-16 h-16 text-xl text-gray-900 font-black bg-gray-100 dark:bg-gray-300 dark:text-gray-100 rounded-full">
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                data-config-id="auto-svg-1-2">
                                <path
                                  d="M14 16C14 17.77 13.23 19.37 12 20.46C10.94 21.42 9.54 22 8 22C4.69 22 2 19.31 2 16C2 13.9753 3.01397 12.1814 4.5554 11.0973C4.80358 10.9228 5.1393 11.0422 5.27324 11.3145C6.21715 13.2332 7.95419 14.6699 10.02 15.23C10.65 15.41 11.31 15.5 12 15.5C12.4872 15.5 12.9539 15.4538 13.4074 15.3687C13.6958 15.3147 13.9828 15.4995 13.9955 15.7926C13.9985 15.8621 14 15.9314 14 16Z"
                                  fill="#3B82F6"></path>
                                <path
                                  d="M18 8C18 8.78 17.85 9.53 17.58 10.21C16.89 11.95 15.41 13.29 13.58 13.79C13.08 13.93 12.55 14 12 14C11.45 14 10.92 13.93 10.42 13.79C8.59 13.29 7.11 11.95 6.42 10.21C6.15 9.53 6 8.78 6 8C6 4.69 8.69 2 12 2C15.31 2 18 4.69 18 8Z"
                                  fill="#3B82F6"></path>
                                <path
                                  d="M22 16C22 19.31 19.31 22 16 22C15.2555 22 14.5393 21.8643 13.8811 21.6141C13.5624 21.4929 13.503 21.0851 13.7248 20.8262C14.8668 19.4938 15.5 17.786 15.5 16C15.5 15.66 15.47 15.32 15.42 15C15.3902 14.8155 15.4844 14.6342 15.6478 14.5437C16.9719 13.8107 18.0532 12.6876 18.727 11.3153C18.8609 11.0427 19.1968 10.923 19.4452 11.0978C20.9863 12.1818 22 13.9755 22 16Z"
                                  fill="#3B82F6"></path>
                              </svg>
                            </div>
                            <div className="w-px h-24 bg-gray-200 dark:text-gray-800"></div>
                          </div>
                          <div className="flex-1 p-4">
                            <h3
                              className="font-heading mb-3 text-2xl text-gray-900 dark:text-white font-bold"
                              data-config-id="auto-txt-5-2">
                              Connect
                            </h3>
                            <p
                              className="text-gray-700 dark:text-gray-100 font-bold"
                              data-config-id="auto-txt-6-2">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="w-full p-3">
                        <div className="flex flex-wrap -m-4">
                          <div className="flex flex-col items-center w-auto p-4">
                            <div className="flex items-center justify-center mb-6 w-16 h-16 text-xl text-gray-900 font-black bg-gray-100 dark:bg-gray-300 rounded-full">
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                data-config-id="auto-svg-2-2">
                                <path
                                  d="M14 16C14 17.77 13.23 19.37 12 20.46C10.94 21.42 9.54 22 8 22C4.69 22 2 19.31 2 16C2 13.9753 3.01397 12.1814 4.5554 11.0973C4.80358 10.9228 5.1393 11.0422 5.27324 11.3145C6.21715 13.2332 7.95419 14.6699 10.02 15.23C10.65 15.41 11.31 15.5 12 15.5C12.4872 15.5 12.9539 15.4538 13.4074 15.3687C13.6958 15.3147 13.9828 15.4995 13.9955 15.7926C13.9985 15.8621 14 15.9314 14 16Z"
                                  fill="#3B82F6"></path>
                                <path
                                  d="M18 8C18 8.78 17.85 9.53 17.58 10.21C16.89 11.95 15.41 13.29 13.58 13.79C13.08 13.93 12.55 14 12 14C11.45 14 10.92 13.93 10.42 13.79C8.59 13.29 7.11 11.95 6.42 10.21C6.15 9.53 6 8.78 6 8C6 4.69 8.69 2 12 2C15.31 2 18 4.69 18 8Z"
                                  fill="#3B82F6"></path>
                                <path
                                  d="M22 16C22 19.31 19.31 22 16 22C15.2555 22 14.5393 21.8643 13.8811 21.6141C13.5624 21.4929 13.503 21.0851 13.7248 20.8262C14.8668 19.4938 15.5 17.786 15.5 16C15.5 15.66 15.47 15.32 15.42 15C15.3902 14.8155 15.4844 14.6342 15.6478 14.5437C16.9719 13.8107 18.0532 12.6876 18.727 11.3153C18.8609 11.0427 19.1968 10.923 19.4452 11.0978C20.9863 12.1818 22 13.9755 22 16Z"
                                  fill="#3B82F6"></path>
                              </svg>
                            </div>
                            <div className="w-px h-24 bg-gray-200"></div>
                          </div>
                          <div className="flex-1 p-4">
                            <h3
                              className="font-heading mb-3 text-2xl text-gray-900 dark:text-white font-bold"
                              data-config-id="auto-txt-7-2">
                              Store
                            </h3>
                            <p
                              className="text-gray-700 dark:text-gray-100 font-bold"
                              data-config-id="auto-txt-8-2">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="w-full p-3">
                        <div className="flex flex-wrap -m-4">
                          <div className="flex flex-col items-center w-auto p-4">
                            <div className="flex items-center justify-center mb-6 w-16 h-16 text-xl text-gray-900 font-black bg-gray-100 dark:bg-gray-300 dark:text-gray-100 rounded-full">
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                data-config-id="auto-svg-3-2">
                                <path
                                  d="M14 16C14 17.77 13.23 19.37 12 20.46C10.94 21.42 9.54 22 8 22C4.69 22 2 19.31 2 16C2 13.9753 3.01397 12.1814 4.5554 11.0973C4.80358 10.9228 5.1393 11.0422 5.27324 11.3145C6.21715 13.2332 7.95419 14.6699 10.02 15.23C10.65 15.41 11.31 15.5 12 15.5C12.4872 15.5 12.9539 15.4538 13.4074 15.3687C13.6958 15.3147 13.9828 15.4995 13.9955 15.7926C13.9985 15.8621 14 15.9314 14 16Z"
                                  fill="#3B82F6"></path>
                                <path
                                  d="M18 8C18 8.78 17.85 9.53 17.58 10.21C16.89 11.95 15.41 13.29 13.58 13.79C13.08 13.93 12.55 14 12 14C11.45 14 10.92 13.93 10.42 13.79C8.59 13.29 7.11 11.95 6.42 10.21C6.15 9.53 6 8.78 6 8C6 4.69 8.69 2 12 2C15.31 2 18 4.69 18 8Z"
                                  fill="#3B82F6"></path>
                                <path
                                  d="M22 16C22 19.31 19.31 22 16 22C15.2555 22 14.5393 21.8643 13.8811 21.6141C13.5624 21.4929 13.503 21.0851 13.7248 20.8262C14.8668 19.4938 15.5 17.786 15.5 16C15.5 15.66 15.47 15.32 15.42 15C15.3902 14.8155 15.4844 14.6342 15.6478 14.5437C16.9719 13.8107 18.0532 12.6876 18.727 11.3153C18.8609 11.0427 19.1968 10.923 19.4452 11.0978C20.9863 12.1818 22 13.9755 22 16Z"
                                  fill="#3B82F6"></path>
                              </svg>
                            </div>
                            <div className="md:hidden w-px h-24 bg-gray-200"></div>
                          </div>
                          <div className="flex-1 p-4">
                            <h3
                              className="font-heading mb-3 text-2xl text-gray-900 dark:text-white font-bold"
                              data-config-id="auto-txt-9-2">
                              Ship
                            </h3>
                            <p
                              className="text-gray-700 dark:text-gray-100 font-bold"
                              data-config-id="auto-txt-10-2">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap -m-4">
              <div className="w-full md:w-1/3 p-4">
                <div className="flex flex-col justify-end p-10 pt-20 lg:pt-40 bg-white dark:bg-gray-800 h-full rounded-3xl">
                  <h2
                    className="font-heading text-3xl text-gray-900 dark:text-white font-bold tracking-tight"
                    data-config-id="auto-txt-1-1">
                    <span data-config-id="auto-txt-7-1">More than </span>
                    <span
                      className="text-4xl font-black text-transparent bg-clip-text bg-gradient-green"
                      data-config-id="auto-txt-2-1">
                      16,200
                    </span>
                    <span data-config-id="auto-txt-8-1">
                      {" "}
                      visitor to customer converted
                    </span>
                  </h2>
                </div>
              </div>
              <div className="w-full md:w-1/3 p-4">
                <div className="flex flex-col justify-end p-10 pt-20 lg:pt-40 bg-white dark:bg-gray-800 h-full rounded-3xl">
                  <h2
                    className="font-heading text-3xl text-gray-900 dark:text-white font-bold tracking-tight"
                    data-config-id="auto-txt-3-1">
                    <span data-config-id="auto-txt-9-1">Increased </span>
                    <span
                      className="text-4xl font-black text-transparent bg-clip-text bg-gradient-pink"
                      data-config-id="auto-txt-4-1">
                      117%
                    </span>
                    <span data-config-id="auto-txt-10-1">
                      {" "}
                      conversions from the first quater
                    </span>
                  </h2>
                </div>
              </div>
              <div className="w-full md:w-1/3 p-4">
                <div className="flex flex-col justify-end p-10 pt-20 lg:pt-40 bg-white dark:bg-gray-800 h-full rounded-3xl">
                  <h2
                    className="font-heading text-3xl text-gray-900 dark:text-white font-bold tracking-tight"
                    data-config-id="auto-txt-5-1">
                    <span data-config-id="auto-txt-11-1">Over </span>
                    <span
                      className="text-4xl font-black text-transparent bg-clip-text bg-gradient-aqua"
                      data-config-id="auto-txt-6-1">
                      82%
                    </span>
                    <span data-config-id="auto-txt-12-1">
                      {" "}
                      increament on demo call bookings &amp; growth
                    </span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="px-8 pt-16 bg-white dark:bg-gray-800 rounded-t-3xl">
              <div className="max-w-7xl mx-auto">
                <div className="flex flex-wrap items-center justify-between -m-4 pb-6">
                  <div className="w-full p-4">
                    <span
                      className="inline-block mb-4 text-sm text-blue-500 font-bold uppercase tracking-widest"
                      data-config-id="auto-txt-1-3">
                      We are hiring
                    </span>
                    <h2
                      className="font-heading text-4xl md:text-5xl lg:text-6xl dark:text-white text-gray-900 font-black tracking-tight"
                      data-config-id="auto-txt-2-3">
                      Open positions
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative px-8">
              <div className="max-w-7xl mx-auto">
                <div className="absolute top-0 left-0 w-full h-1/2 bg-white dark:bg-gray-800 rounded-b-3xl"></div>
                <div className="relative z-10 flex flex-nowrap -m-4">
                  <div className="flex-shrink-0 max-w-sm p-4">
                    <a
                      className="inline-block h-full overflow-hidden rounded-3xl"
                      href="https://invocamp.com/#">
                      <div className="flex flex-col justify-between p-10 h-full bg-gray-50 dark:bg-gray-700">
                        <div className="flex-initial mb-10">
                          <h3
                            className="font-heading mb-4 text-2xl text-gray-900 dark:text-white font-black"
                            data-config-id="auto-txt-3-3">
                            Product Design
                          </h3>
                          <p
                            className="text-gray-500 font-bold dark:text-gray-300"
                            data-config-id="auto-txt-4-3">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Malesuada tellus vestibulum, commodo pulvinar.
                          </p>
                        </div>
                        <div className="flex-initial">
                          <div className="flex flex-wrap justify-between -m-2">
                            <div className="w-auto p-2">
                              <p
                                className="text-gray-500 font-bold dark:text-gray-300"
                                data-config-id="auto-txt-5-3">
                                Part time • Remotly
                              </p>
                            </div>
                            <div className="w-auto p-2">
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                data-config-id="auto-svg-1-3">
                                <path
                                  d="M10.0198 5.31999L13.2298 8.52999L15.1998 10.49C16.0298 11.32 16.0298 12.67 15.1998 13.5L10.0198 18.68C9.33977 19.36 8.17977 18.87 8.17977 17.92V12.31V6.07999C8.17977 5.11999 9.33977 4.63999 10.0198 5.31999Z"
                                  fill="#3B82F6"></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="flex-shrink-0 max-w-sm p-4">
                    <a
                      className="inline-block h-full overflow-hidden rounded-3xl"
                      href="https://invocamp.com/#">
                      <div className="flex flex-col justify-between p-10 h-full bg-gray-50 dark:bg-gray-700">
                        <div className="flex-initial mb-10">
                          <h3
                            className="font-heading mb-4 text-2xl text-gray-900 dark:text-white font-black"
                            data-config-id="auto-txt-6-3">
                            Junior JS Developer
                          </h3>
                          <p
                            className="text-gray-500 font-bold dark:text-gray-300"
                            data-config-id="auto-txt-7-3">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Malesuada tellus vestibulum, commodo pulvinar.
                          </p>
                        </div>
                        <div className="flex-initial">
                          <div className="flex flex-wrap justify-between -m-2">
                            <div className="w-auto p-2">
                              <p
                                className="text-gray-500 font-bold dark:text-gray-300"
                                data-config-id="auto-txt-8-3">
                                Part time • Remotly
                              </p>
                            </div>
                            <div className="w-auto p-2">
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                data-config-id="auto-svg-2-3">
                                <path
                                  d="M10.0198 5.31999L13.2298 8.52999L15.1998 10.49C16.0298 11.32 16.0298 12.67 15.1998 13.5L10.0198 18.68C9.33977 19.36 8.17977 18.87 8.17977 17.92V12.31V6.07999C8.17977 5.11999 9.33977 4.63999 10.0198 5.31999Z"
                                  fill="#3B82F6"></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="flex-shrink-0 max-w-sm p-4">
                    <a
                      className="inline-block h-full overflow-hidden rounded-3xl"
                      href="https://invocamp.com/#">
                      <div className="flex flex-col justify-between p-10 h-full bg-gray-50 dark:bg-gray-700">
                        <div className="flex-initial mb-10">
                          <h3
                            className="font-heading mb-4 text-2xl text-gray-900 dark:text-white font-black"
                            data-config-id="auto-txt-9-3">
                            Frontend Developer
                          </h3>
                          <p
                            className="text-gray-500 font-bold dark:text-gray-300"
                            data-config-id="auto-txt-10-3">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Malesuada tellus vestibulum, commodo pulvinar.
                          </p>
                        </div>
                        <div className="flex-initial">
                          <div className="flex flex-wrap justify-between -m-2">
                            <div className="w-auto p-2">
                              <p
                                className="text-gray-500 font-bold dark:text-gray-300"
                                data-config-id="auto-txt-11-3">
                                Part time • Remotly
                              </p>
                            </div>
                            <div className="w-auto p-2">
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                data-config-id="auto-svg-3-3">
                                <path
                                  d="M10.0198 5.31999L13.2298 8.52999L15.1998 10.49C16.0298 11.32 16.0298 12.67 15.1998 13.5L10.0198 18.68C9.33977 19.36 8.17977 18.87 8.17977 17.92V12.31V6.07999C8.17977 5.11999 9.33977 4.63999 10.0198 5.31999Z"
                                  fill="#3B82F6"></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="flex-shrink-0 max-w-sm p-4">
                    <a
                      className="inline-block h-full overflow-hidden rounded-3xl"
                      href="https://invocamp.com/#">
                      <div className="flex flex-col justify-between p-10 h-full bg-gray-50 dark:bg-gray-700">
                        <div className="flex-initial mb-10">
                          <h3
                            className="font-heading mb-4 text-2xl text-gray-900 dark:text-white font-black"
                            data-config-id="auto-txt-12-3">
                            Head of design
                          </h3>
                          <p
                            className="text-gray-500 font-bold dark:text-gray-300"
                            data-config-id="auto-txt-13-3">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Malesuada tellus vestibulum, commodo pulvinar.
                          </p>
                        </div>
                        <div className="flex-initial">
                          <div className="flex flex-wrap justify-between -m-2">
                            <div className="w-auto p-2">
                              <p
                                className="text-gray-500 font-bold dark:text-gray-300"
                                data-config-id="auto-txt-14-3">
                                Part time • Remotly
                              </p>
                            </div>
                            <div className="w-auto p-2">
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                data-config-id="auto-svg-4-3">
                                <path
                                  d="M10.0198 5.31999L13.2298 8.52999L15.1998 10.49C16.0298 11.32 16.0298 12.67 15.1998 13.5L10.0198 18.68C9.33977 19.36 8.17977 18.87 8.17977 17.92V12.31V6.07999C8.17977 5.11999 9.33977 4.63999 10.0198 5.31999Z"
                                  fill="#3B82F6"></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="flex-shrink-0 max-w-sm p-4">
                    <a
                      className="inline-block h-full overflow-hidden rounded-3xl"
                      href="https://invocamp.com/#">
                      <div className="flex flex-col justify-between p-10 h-full bg-gray-50 dark:bg-gray-700">
                        <div className="flex-initial mb-10">
                          <h3
                            className="font-heading mb-4 text-2xl text-gray-900 dark:text-white font-black"
                            data-config-id="auto-txt-15-3">
                            Frontend Developer
                          </h3>
                          <p
                            className="text-gray-500 font-bold dark:text-gray-300"
                            data-config-id="auto-txt-16-3">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Malesuada tellus vestibulum, commodo pulvinar.
                          </p>
                        </div>
                        <div className="flex-initial">
                          <div className="flex flex-wrap justify-between -m-2">
                            <div className="w-auto p-2">
                              <p
                                className="text-gray-500 font-bold dark:text-gray-300"
                                data-config-id="auto-txt-17-3">
                                Part time • Remotly
                              </p>
                            </div>
                            <div className="w-auto p-2">
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                data-config-id="auto-svg-5-3">
                                <path
                                  d="M10.0198 5.31999L13.2298 8.52999L15.1998 10.49C16.0298 11.32 16.0298 12.67 15.1998 13.5L10.0198 18.68C9.33977 19.36 8.17977 18.87 8.17977 17.92V12.31V6.07999C8.17977 5.11999 9.33977 4.63999 10.0198 5.31999Z"
                                  fill="#3B82F6"></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="py-16 px-8 bg-white dark:bg-gray-800 rounded-3xl">
              <div className="max-w-7xl mx-auto">
                <div className="flex flex-wrap -m-8">
                  <div className="w-full md:w-1/2 p-8">
                    <div className="flex flex-col justify-between md:max-w-sm h-full">
                      <div className="flex-initial mb-8">
                        <h2
                          className="font-heading mb-8 text-4xl md:text-5xl text-gray-900 dark:text-white font-black tracking-tight"
                          data-config-id="auto-txt-1-4">
                          Affordable pricing plans
                        </h2>
                        <p
                          className="text-gray-700 dark:text-gray-300 font-bold"
                          data-config-id="auto-txt-2-4">
                          Amet minim mollit non deserunt ullamco an aliqua dolor
                          elit officia consequat duis.Amet minim mollit non
                          deserunt ullamco est sit aliqua.
                        </p>
                      </div>
                      <div className="flex-initial">
                        <p
                          className="mb-2 text-xs text-gray-700 dark:text-gray-200 font-bold uppercase"
                          data-config-id="auto-txt-3-4">
                          Trusted by 30k users
                        </p>
                        <div className="flex flex-wrap -m-0.5 mb-2">
                          <div className="w-auto">
                            <svg
                              width="22"
                              height="22"
                              viewBox="0 0 22 22"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              data-config-id="auto-svg-1-4">
                              <path
                                d="M9.70724 4.21267C10.0284 3.22436 11.4266 3.22436 11.7477 4.21267L12.895 7.74387C13.0387 8.18586 13.4505 8.48511 13.9153 8.48511H17.6282C18.6674 8.48511 19.0994 9.81488 18.2587 10.4257L15.2549 12.6081C14.8789 12.8813 14.7216 13.3654 14.8652 13.8074L16.0126 17.3386C16.3337 18.327 15.2025 19.1488 14.3618 18.538L11.358 16.3556C10.982 16.0824 10.4729 16.0824 10.0969 16.3556L7.09311 18.538C6.2524 19.1488 5.12123 18.327 5.44236 17.3386L6.58971 13.8074C6.73332 13.3654 6.576 12.8813 6.20002 12.6081L3.1962 10.4257C2.35549 9.81488 2.78756 8.48511 3.82674 8.48511H7.53966C8.00439 8.48511 8.41627 8.18586 8.55988 7.74387L9.70724 4.21267Z"
                                fill="#3B82F6"></path>
                            </svg>
                          </div>
                          <div className="w-auto">
                            <svg
                              width="22"
                              height="22"
                              viewBox="0 0 22 22"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              data-config-id="auto-svg-2-4">
                              <path
                                d="M9.70724 4.21267C10.0284 3.22436 11.4266 3.22436 11.7477 4.21267L12.895 7.74387C13.0387 8.18586 13.4505 8.48511 13.9153 8.48511H17.6282C18.6674 8.48511 19.0994 9.81488 18.2587 10.4257L15.2549 12.6081C14.8789 12.8813 14.7216 13.3654 14.8652 13.8074L16.0126 17.3386C16.3337 18.327 15.2025 19.1488 14.3618 18.538L11.358 16.3556C10.982 16.0824 10.4729 16.0824 10.0969 16.3556L7.09311 18.538C6.2524 19.1488 5.12123 18.327 5.44236 17.3386L6.58971 13.8074C6.73332 13.3654 6.576 12.8813 6.20002 12.6081L3.1962 10.4257C2.35549 9.81488 2.78756 8.48511 3.82674 8.48511H7.53966C8.00439 8.48511 8.41627 8.18586 8.55988 7.74387L9.70724 4.21267Z"
                                fill="#3B82F6"></path>
                            </svg>
                          </div>
                          <div className="w-auto">
                            <svg
                              width="22"
                              height="22"
                              viewBox="0 0 22 22"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              data-config-id="auto-svg-3-4">
                              <path
                                d="M9.70724 4.21267C10.0284 3.22436 11.4266 3.22436 11.7477 4.21267L12.895 7.74387C13.0387 8.18586 13.4505 8.48511 13.9153 8.48511H17.6282C18.6674 8.48511 19.0994 9.81488 18.2587 10.4257L15.2549 12.6081C14.8789 12.8813 14.7216 13.3654 14.8652 13.8074L16.0126 17.3386C16.3337 18.327 15.2025 19.1488 14.3618 18.538L11.358 16.3556C10.982 16.0824 10.4729 16.0824 10.0969 16.3556L7.09311 18.538C6.2524 19.1488 5.12123 18.327 5.44236 17.3386L6.58971 13.8074C6.73332 13.3654 6.576 12.8813 6.20002 12.6081L3.1962 10.4257C2.35549 9.81488 2.78756 8.48511 3.82674 8.48511H7.53966C8.00439 8.48511 8.41627 8.18586 8.55988 7.74387L9.70724 4.21267Z"
                                fill="#3B82F6"></path>
                            </svg>
                          </div>
                          <div className="w-auto">
                            <svg
                              width="22"
                              height="22"
                              viewBox="0 0 22 22"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              data-config-id="auto-svg-4-4">
                              <path
                                d="M9.70724 4.21267C10.0284 3.22436 11.4266 3.22436 11.7477 4.21267L12.895 7.74387C13.0387 8.18586 13.4505 8.48511 13.9153 8.48511H17.6282C18.6674 8.48511 19.0994 9.81488 18.2587 10.4257L15.2549 12.6081C14.8789 12.8813 14.7216 13.3654 14.8652 13.8074L16.0126 17.3386C16.3337 18.327 15.2025 19.1488 14.3618 18.538L11.358 16.3556C10.982 16.0824 10.4729 16.0824 10.0969 16.3556L7.09311 18.538C6.2524 19.1488 5.12123 18.327 5.44236 17.3386L6.58971 13.8074C6.73332 13.3654 6.576 12.8813 6.20002 12.6081L3.1962 10.4257C2.35549 9.81488 2.78756 8.48511 3.82674 8.48511H7.53966C8.00439 8.48511 8.41627 8.18586 8.55988 7.74387L9.70724 4.21267Z"
                                fill="#3B82F6"></path>
                            </svg>
                          </div>
                          <div className="w-auto">
                            <svg
                              width="22"
                              height="22"
                              viewBox="0 0 22 22"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              data-config-id="auto-svg-5-4">
                              <path
                                d="M9.70724 4.21267C10.0284 3.22436 11.4266 3.22436 11.7477 4.21267L12.895 7.74387C13.0387 8.18586 13.4505 8.48511 13.9153 8.48511H17.6282C18.6674 8.48511 19.0994 9.81488 18.2587 10.4257L15.2549 12.6081C14.8789 12.8813 14.7216 13.3654 14.8652 13.8074L16.0126 17.3386C16.3337 18.327 15.2025 19.1488 14.3618 18.538L11.358 16.3556C10.982 16.0824 10.4729 16.0824 10.0969 16.3556L7.09311 18.538C6.2524 19.1488 5.12123 18.327 5.44236 17.3386L6.58971 13.8074C6.73332 13.3654 6.576 12.8813 6.20002 12.6081L3.1962 10.4257C2.35549 9.81488 2.78756 8.48511 3.82674 8.48511H7.53966C8.00439 8.48511 8.41627 8.18586 8.55988 7.74387L9.70724 4.21267Z"
                                fill="#3B82F6"></path>
                            </svg>
                          </div>
                        </div>
                        <p className="font-medium text-gray-300">
                          <span
                            className="text-gray-700 dark:text-gray-300 font-bold"
                            data-config-id="auto-txt-4-4">
                            4.2/5
                          </span>
                          <span data-config-id="auto-txt-17-4">
                            {" "}
                            (45k Reviews)
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 p-8">
                    <div className="flex flex-wrap -m-4">
                      <div className="w-full lg:w-1/2 p-4">
                        <div className="flex flex-col justify-between p-8 h-full bg-gray-100 dark:bg-gray-700 rounded-3xl">
                          <div className="flex-initial mb-8">
                            <span
                              className="inline-block mb-6 text-sm text-blue-400 font-bold uppercase tracking-widest"
                              data-config-id="auto-txt-5-4">
                              Premium
                            </span>
                            <h2
                              className="font-heading mb-2 text-4xl text-gray-900 dark:text-white font-black tracking-tight"
                              data-config-id="auto-txt-6-4">
                              $25
                            </h2>
                            <p
                              className="mb-6 text-sm text-gray-100 font-bold"
                              data-config-id="auto-txt-7-4">
                              Best for medium business, owners, startups.
                            </p>
                            <div className="flex flex-wrap -m-2">
                              <div className="w-full p-2">
                                <a
                                  className="block w-full px-8 py-2.5 text-sm text-center text-white font-bold bg-blue-500 hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800 focus:ring-4 focus:ring-blue-200 rounded-full"
                                  href="https://invocamp.com/#"
                                  data-config-id="auto-txt-8-4">
                                  Purchase Now
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="flex-initial">
                            <h4
                              className="font-heading mb-4 text-gray-900 dark:text-white font-bold"
                              data-config-id="auto-txt-9-4">
                              What’s included:
                            </h4>
                            <p
                              className="text-gray-500 font-bold dark:text-gray-400"
                              data-config-id="auto-txt-10-4">
                              130+ Coded blocks Best for Developers Made with
                              Tailwind CSS Premium Support Future Updates
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="w-full lg:w-1/2 p-4">
                        <div className="flex flex-col justify-between p-8 h-full bg-gray-100 dark:bg-gray-700 rounded-3xl">
                          <div className="flex-initial mb-8">
                            <span
                              className="inline-block mb-6 text-sm text-blue-400 font-bold uppercase tracking-widest"
                              data-config-id="auto-txt-11-4">
                              Enterprise
                            </span>
                            <h2
                              className="font-heading mb-2 text-4xl text-gray-900 dark:text-white font-black tracking-tight"
                              data-config-id="auto-txt-12-4">
                              $25
                            </h2>
                            <p
                              className="mb-6 text-sm text-gray-100 font-bold"
                              data-config-id="auto-txt-13-4">
                              Best for medium business, owners, startups.
                            </p>
                            <div className="flex flex-wrap -m-2">
                              <div className="w-full p-2">
                                <a
                                  className="block w-full px-8 py-2.5 text-sm text-center text-white font-bold bg-blue-500 hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800 focus:ring-4 focus:ring-blue-200 rounded-full"
                                  href="https://invocamp.com/#"
                                  data-config-id="auto-txt-14-4">
                                  Purchase Now
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="flex-initial">
                            <h4
                              className="font-heading mb-4 text-gray-900 dark:text-white font-bold"
                              data-config-id="auto-txt-15-4">
                              What’s included:
                            </h4>
                            <p
                              className="text-gray-500 font-bold dark:text-gray-400"
                              data-config-id="auto-txt-16-4">
                              130+ Coded blocks Best for Developers Made with
                              Tailwind CSS Premium Support Future Updates
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="py-16 px-8 bg-white dark:bg-gray-800 rounded-3xl">
              <div className="max-w-7xl mx-auto">
                <div className="max-w-lg mx-auto text-center">
                  <span
                    className="inline-block mb-2 text-sm text-blue-500 font-bold uppercase tracking-widest"
                    data-config-id="auto-txt-1-3">
                    Testimonials
                  </span>
                  <h2
                    className="font-heading mb-12 text-4xl md:text-5xl text-gray-900 dark:text-white font-black tracking-tight"
                    data-config-id="auto-txt-2-3">
                    Our customer says
                  </h2>
                </div>
                <div className="flex flex-wrap -m-4">
                  <div className="w-full md:w-1/3 p-4">
                    <div className="flex flex-col justify-between px-8 pt-12 pb-8 h-full text-center bg-gray-100 dark:bg-gray-700  rounded-3xl">
                      <div className="flex-initial mb-8">
                        <img
                          className="mb-6 mx-auto rounded-full"
                          src="./img/avatar2(2).png"
                          alt=""
                          data-config-id="auto-img-1-3"
                        />
                        <p
                          className="text-base text-gray-300 font-bold"
                          data-config-id="auto-txt-3-3">
                          Had some issues where my site crashed and broke,
                          reached out to Shuffle Editor to see if they could
                          help me fix it.
                        </p>
                      </div>
                      <div className="flex-initial">
                        <h3
                          className="font-heading text-2xl text-white font-black"
                          data-config-id="auto-txt-4-3">
                          Monica Johnson
                        </h3>
                        <p
                          className="text-sm text-gray-500 dark:text-gray-300 font-bold"
                          data-config-id="auto-txt-5-3">
                          @monicajonhson
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-1/3 p-4">
                    <div className="flex flex-col justify-between px-8 pt-12 pb-8 h-full text-center bg-gray-100 dark:bg-gray-700  rounded-3xl">
                      <div className="flex-initial mb-8">
                        <img
                          className="mb-6 mx-auto rounded-full"
                          src="./img/avatar2(2).png"
                          alt=""
                          data-config-id="auto-img-2-3"
                        />
                        <p
                          className="text-base text-gray-300 font-bold"
                          data-config-id="auto-txt-6-3">
                          Had some issues where my site crashed and broke,
                          reached out to Shuffle Editor to see if they could
                          help me fix it.
                        </p>
                      </div>
                      <div className="flex-initial">
                        <h3
                          className="font-heading text-2xl text-white font-black"
                          data-config-id="auto-txt-7-3">
                          Monica Johnson
                        </h3>
                        <p
                          className="text-sm text-gray-500 dark:text-gray-300 font-bold"
                          data-config-id="auto-txt-8-3">
                          @monicajonhson
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-1/3 p-4">
                    <div className="flex flex-col justify-between px-8 pt-12 pb-8 h-full text-center bg-gray-100 dark:bg-gray-700 rounded-3xl">
                      <div className="flex-initial mb-8">
                        <img
                          className="mb-6 mx-auto rounded-full"
                          src="./img/avatar2(2).png"
                          alt=""
                          data-config-id="auto-img-3-3"
                        />
                        <p
                          className="text-base text-gray-300 font-bold"
                          data-config-id="auto-txt-9-3">
                          Had some issues where my site crashed and broke,
                          reached out to Shuffle Editor to see if they could
                          help me fix it.
                        </p>
                      </div>
                      <div className="flex-initial">
                        <h3
                          className="font-heading text-2xl text-white font-black"
                          data-config-id="auto-txt-10-3">
                          Monica Johnson
                        </h3>
                        <p
                          className="text-sm text-gray-500 dark:text-gray-300 font-bold"
                          data-config-id="auto-txt-11-3">
                          @monicajonhson
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap -m-4">
              <div className="w-full md:w-1/2 p-4">
                <div className="py-32 px-8 text-center h-full bg-white dark:bg-gray-800 overflow-hidden rounded-3xl">
                  <div className="max-w-md mx-auto">
                    <span
                      className="inline-block mb-2 text-sm text-blue-500 font-bold uppercase tracking-widest"
                      data-config-id="auto-txt-1-1">
                      Careers
                    </span>
                    <h2
                      className="font-heading mb-8 text-4xl md:text-5xl text-gray-900 dark:text-white font-black tracking-tight"
                      data-config-id="auto-txt-2-1">
                      Start your journey with us.
                    </h2>
                    <div className="flex flex-wrap justify-center -m-2">
                      <div className="w-full md:w-auto p-2">
                        <a
                          className="block w-full px-8 py-3.5 text-lg text-center text-white font-bold bg-blue-500 hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800 focus:ring-4 focus:ring-blue-200 rounded-full"
                          href="https://invocamp.com/#"
                          data-config-id="auto-txt-3-1">
                          Join our Team
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 p-4">
                <div className="py-32 px-8 text-center h-full bg-blue-500 rounded-3xl">
                  <div className="max-w-md mx-auto">
                    <span
                      className="inline-block mb-2 text-sm text-white font-bold uppercase tracking-widest"
                      data-config-id="auto-txt-4-1">
                      Applications
                    </span>
                    <h2
                      className="font-heading mb-8 text-4xl md:text-5xl text-white font-black tracking-tight"
                      data-config-id="auto-txt-5-1">
                      Subscribe and receive updates
                    </h2>
                    <div className="max-w-sm mx-auto">
                      <div className="flex flex-wrap -m-2">
                        <div className="w-full md:flex-1 p-2">
                          <input
                            className="px-6 py-3.5 w-full text-lg text-white font-bold bg-blue-400 outline-none focus:ring-4 focus:ring-blue-200 placeholder-white rounded-full"
                            id="newsletterLightReverseInput1-1"
                            type="text"
                            placeholder="Email address"
                            data-config-id="auto-input-1-1"
                          />
                        </div>
                        <div className="w-full md:w-auto p-2">
                          <div className="flex flex-wrap justify-center -m-2">
                            <div className="w-full md:w-auto p-2">
                              <a
                                className="block w-full px-8 py-3.5 text-lg text-center text-gray-900 font-bold bg-white hover:bg-gray-100 focus:ring-4 focus:ring-blue-200 rounded-full"
                                href="https://invocamp.com/#"
                                data-config-id="auto-txt-6-1">
                                Sign In
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="relative py-16 px-8 bg-white dark:bg-gray-800 overflow-hidden rounded-3xl">
              <div className="absolute top-0 left-1/2 min-w-max transform -translate-x-1/2">
                <div className="absolute bg-gradient-radial-white w-full h-full"></div>
              </div>
              <div className="relative z-10 accordion">
                <div className="mb-10 md:max-w-xl mx-auto text-center">
                  <span
                    className="inline-block mb-5 text-sm text-blue-500 font-bold uppercase tracking-widest"
                    data-config-id="auto-txt-1-1">
                    Frequently asked questions
                  </span>
                  <h2
                    className="font-heading mb-6 text-4xl md:text-5xl lg:text-6xl text-gray-900 dark:text-white font-black tracking-tight"
                    data-config-id="auto-txt-2-1">
                    Got questions? We’re here to help!
                  </h2>
                  <p
                    className="text-gray-500 dark:text-gray-200 font-bold"
                    data-config-id="auto-txt-3-1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Malesuada tellus vestibulum, commodo pulvinar.
                  </p>
                </div>
                <div className="max-w-3xl mx-auto">
                  <div id="accordion-open" data-accordion="open">
                    <h2 id="accordion-open-heading-1">
                      <button
                        type="button"
                        className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-400 dark:border-gray-400 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                        data-accordion-target="#accordion-open-body-1"
                        aria-expanded="true"
                        aria-controls="accordion-open-body-1">
                        <span className="flex items-center">
                          <svg
                            className="w-5 h-5 mr-2 shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              fillRule="evenodd"
                              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                              clipRule="evenodd"></path>
                          </svg>{" "}
                          What is InvoCamp?
                        </span>
                        <svg
                          data-accordion-icon
                          className="w-6 h-6 rotate-180 shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"></path>
                        </svg>
                      </button>
                    </h2>
                    <div
                      id="accordion-open-body-1"
                      className="hidden"
                      aria-labelledby="accordion-open-heading-1">
                      <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-900 dark:bg-gray-900">
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quo ad, eveniet praesentium tempora voluptate nobis quaerat sapiente eum dicta. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit vel excepturi aut eaque minus ea, quam facere pariatur assumenda repellendus?
                        </p>
                      </div>
                    </div>
                    <h2 id="accordion-open-heading-2">
                      <button
                        type="button"
                        className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-400 dark:border-gray-400 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                        data-accordion-target="#accordion-open-body-2"
                        aria-expanded="false"
                        aria-controls="accordion-open-body-2">
                        <span className="flex items-center">
                          <svg
                            className="w-5 h-5 mr-2 shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              fillRule="evenodd"
                              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                              clipRule="evenodd"></path>
                          </svg>
                          Is there a Figma file available?
                        </span>
                        <svg
                          data-accordion-icon
                          className="w-6 h-6 shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"></path>
                        </svg>
                      </button>
                    </h2>
                    <div
                      id="accordion-open-body-2"
                      className="hidden"
                      aria-labelledby="accordion-open-heading-2">
                      <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-900 dark:bg-gray-900">
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                          InvoCamp is first conceptualized and designed using
                          the Figma software so everything you see in the
                          library has a design equivalent in our Figma file.
                        </p>
                        <p className="text-gray-500 dark:text-gray-400">
                          Check out the{" "}
                          <a
                            href="https://invoCamp.com/figma/"
                            className="text-blue-600 dark:text-blue-500 hover:underline">
                            Figma design system
                          </a>{" "}
                          based on the utility classes from Tailwind CSS and
                          components from InvoCamp.
                        </p>
                      </div>
                    </div>
                    <h2 id="accordion-open-heading-3">
                      <button
                        type="button"
                        className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-500 dark:border-gray-400 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                        data-accordion-target="#accordion-open-body-3"
                        aria-expanded="false"
                        aria-controls="accordion-open-body-3">
                        <span className="flex items-center">
                          <svg
                            className="w-5 h-5 mr-2 shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              fillRule="evenodd"
                              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                              clipRule="evenodd"></path>
                          </svg>{" "}
                          What are the differences between InvoCamp and Tailwind
                          UI?
                        </span>
                        <svg
                          data-accordion-icon
                          className="w-6 h-6 shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"></path>
                        </svg>
                      </button>
                    </h2>
                    <div
                      id="accordion-open-body-3"
                      className="hidden"
                      aria-labelledby="accordion-open-heading-3">
                      <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-900 dark:bg-gray-900">
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                          The main difference is that the core components from
                          InvoCamp are open source under the MIT license,
                          whereas Tailwind UI is a paid product. Another
                          difference is that InvoCamp relies on smaller and
                          standalone components, whereas Tailwind UI offers
                          sections of pages.
                        </p>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                          However, we actually recommend using both InvoCamp,
                          InvoCamp Pro, and even Tailwind UI as there is no
                          technical reason stopping you from using the best of
                          two worlds.
                        </p>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                          Learn more about these technologies:
                        </p>
                        <ul className="pl-5 text-gray-500 list-disc dark:text-gray-400">
                          <li>
                            <a
                              href="https://invoCamp.com/pro/"
                              className="text-blue-600 dark:text-blue-500 hover:underline">
                              InvoCamp Pro
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://tailwindui.com/"
                              rel="nofollow"
                              className="text-blue-600 dark:text-blue-500 hover:underline">
                              Tailwind UI
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <p
                    className="text-gray-500 dark:text-gray-300 font-bold text-center mt-7"
                    data-config-id="auto-txt-9-1">
                    <span data-config-id="auto-txt-11-1">
                      Still have any questions?{" "}
                    </span>
                    <Link
                      className="text-blue-500 hover:text-blue-600"
                      href="/contact"
                      data-config-id="auto-txt-10-1">
                      Contact us
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default Home