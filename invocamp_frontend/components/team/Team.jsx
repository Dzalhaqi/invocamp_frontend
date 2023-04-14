import React from 'react'
import { FaRegUserCircle } from "react-icons/fa"

const Team = () => {
  return (
    <section
      data-section-id="1"
      data-share=""
      data-category="team-light-reverse"
      data-component-id="4b75b4ef_02_awz"
      className="py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center -m-8 lg:-m-16">
          <div className="w-full md:w-1/2 p-8 lg:p-16">
            <div className="p-8 bg-white dark:bg-gray-800 rounded-3xl">
              <img
                className="mb-40 h-20 w-20"
                src="./img/logo.png"
                alt=""
                data-config-id="auto-img-1-2"
              />
              <h2
                className="font-heading mb-4 text-4xl md:text-5xl text-gray-900 dark:text-gray-100 font-black tracking-tight"
                data-config-id="auto-txt-1-2">
                Our Philosophy
              </h2>
              <p
                className="text-gray-700 dark:text-gray-100 font-bold"
                data-config-id="auto-txt-2-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                venenatis volutpat velit, quis iaculis velit bibendum a.
                Maecenas accumsan fermentum nisl.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-8 lg:p-16">
            <div className="flex flex-wrap -m-4">
              <div className="w-auto lg:w-1/2 p-4">
                <div className="flex flex-wrap items-center -m-2">
                  <div className="w-auto p-2">
                    <FaRegUserCircle className="text-[4rem] text-gray-500 dark:text-gray-50" />
                  </div>
                  <div className="flex-1 p-2">
                    <h3
                      className="font-heading mb-0.5 text-xl font-bold dark:text-gray-100"
                      data-config-id="auto-txt-3-2">
                      Arya Pratama
                    </h3>
                    <p
                      className="text-sm text-gray-500 font-bold"
                      data-config-id="auto-txt-4-2">
                      3321600017
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-auto lg:w-1/2 p-4">
                <div className="flex flex-wrap items-center -m-2">
                  <div className="w-auto p-2">
                    <FaRegUserCircle className="text-[4rem] text-gray-500 dark:text-gray-50" />
                  </div>
                  <div className="flex-1 p-2">
                    <h3
                      className="font-heading mb-0.5 text-xl font-bold dark:text-gray-100"
                      data-config-id="auto-txt-5-2">
                      Rafif Fauzan
                    </h3>
                    <p
                      className="text-sm text-gray-500 font-bold"
                      data-config-id="auto-txt-6-2">
                      3321600018
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-auto lg:w-1/2 p-4">
                <div className="flex flex-wrap items-center -m-2">
                  <div className="w-auto p-2">
                    <FaRegUserCircle className="text-[4rem] text-gray-500 dark:text-gray-50" />
                  </div>
                  <div className="flex-1 p-2">
                    <h3
                      className="font-heading mb-0.5 text-xl font-bold dark:text-gray-100"
                      data-config-id="auto-txt-7-2">
                      Nadine Aliyah Mustafa
                    </h3>
                    <p
                      className="text-sm text-gray-500 font-bold"
                      data-config-id="auto-txt-8-2">
                      3321600021
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-auto lg:w-1/2 p-4">
                <div className="flex flex-wrap items-center -m-2">
                  <div className="w-auto p-2">
                    {/* <img
                      className="rounded-3xl"
                      src="./img/avatar2(1).png"
                      alt=""
                      data-config-id="auto-img-5-2"
                    /> */}
                    <FaRegUserCircle className="text-[4rem] text-gray-500 dark:text-gray-50" />
                  </div>
                  <div className="flex-1 p-2">
                    <h3
                      className="font-heading mb-0.5 text-xl font-bold dark:text-gray-100"
                      data-config-id="auto-txt-9-2">
                      Muhammad Dzalhaqi
                    </h3>
                    <p
                      className="text-sm text-gray-500 font-bold"
                      data-config-id="auto-txt-10-2">
                      3321600023
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-auto lg:w-1/2 p-4">
                <div className="flex flex-wrap items-center -m-2">
                  <div className="w-auto p-2">
                    <FaRegUserCircle className="text-[4rem] text-gray-500 dark:text-gray-50" />
                  </div>
                  <div className="flex-1 p-2">
                    <h3
                      className="font-heading mb-0.5 text-xl font-bold dark:text-gray-100"
                      data-config-id="auto-txt-11-2">
                      Wiradika Nur Fadhillah
                    </h3>
                    <p
                      className="text-sm text-gray-500 font-bold"
                      data-config-id="auto-txt-12-2">
                      3321600028
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team