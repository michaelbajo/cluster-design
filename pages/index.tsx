import React from "react";

const PricingCard = () => {
  return (
    <div className="w-full h-full">
      <div className="space-y-5 px-8 py-12">
        <div className="container flex space-x-2">
          <div className="no-scrollbar overflow-hidden">
            <div className="flex no-scrollbar justify-start space-x-6 items-center overflow-x-auto">
              <button className="font-semibold whitespace-nowrap text-base text-gray-500 hover:text-gray-600 transition-colors duration-300">
                Monthly
              </button>
              <button className="font-semibold whitespace-nowrap text-base hover:text-gray-600 transition-colors duration-300 text-gray-900">
                Annually
              </button>
            </div>
          </div>
          <button className="text-purple-500 font-semibold text-base">
            (2 months free)
          </button>
        </div>
        <div className="demo-container grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-[1352 px] w-[1352px] flex">
          <div className="border-[1px] border-gray-200 relative rounded-[32] rounded-t-lg py-[8] py-[4] px-[6] py-[16] my-3 p-4 rounded-br-lg rounded-bl-lg w-[320] h-[270] w-[318] h-[262] h-[262] h-[300] h-[362] w-80 h-[86] h-[336] flex bg-[#172D4C] h-72 justify-center items-center">
            <div className="w-72 flex flex-col gap-y-0 justify-center">
              <div className="h-full z-10 relative w-72 grow">
                <div className="my-0.5 flex justify-evenly flex-col gap-y-0.5">
                  <div className="flex flex-col flex-1 justify-between h-full w-72 gap-y-2">
                    <div className="flex justify-between flex-col">
                      <div className="flex grow gap-x-8 justify-between">
                        <div className="md:text-2xl font-bold flex justify-between text-[#f8f8f8ff] text-sm">
                          <span className="text-sm">Marjatta 16x</span>
                        </div>
                        <div className="text-xl md:text-2xl font-bold flex justify-between text-[#ffffffff] flex-row-reverse">
                          <span className="text-sm">H100 Cluster</span>
                        </div>
                      </div>
                      <div className="">
                        <ul className="space-y-2 pt-8">
                          <li className="flex items-center font-medium space-x-2 text-white">
                            <span className="text-xs">
                              4x 4H100 bare metal systems
                            </span>
                          </li>
                          <li className="flex items-center font-medium space-x-2 text-white">
                            <span className="text-xs">
                              2x Intel Xeon Pkatinum 8462Y+, total 64C/128T
                            </span>
                          </li>
                          <li className="flex items-center font-medium space-x-2 text-white">
                            <span className="text-xs">512GB RAM</span>
                          </li>
                          <li className="flex items-center font-medium space-x-2 text-white">
                            <span className="text-xs">7.68TB Local NVME</span>
                          </li>
                          <li className="flex items-center font-medium space-x-2 text-white">
                            <span className="text-xs">800gbit InfiniBand</span>
                          </li>
                          <li className="flex items-center font-medium space-x-2 text-white">
                            <span className="text-xs">100gbit ethernet</span>
                          </li>
                          <li className="flex items-center font-medium space-x-2 text-white">
                            <span className="text-xs">800gbit InfiniBand</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="flex justify-end pt-0">
                      <a
                        href="/billing"
                        type="button"
                        target="_blank"
                        className="appearance-none inline-flex hover:shadow-2xl transition-all duration-300 hover:scale-105 items-center group space-x-2.5 bg-black text-white rounded-2xl cursor-pointer px-5 py-1.5"
                      >
                        <span className="w-full font-semibold text-base">
                          Launch
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="hidden">
                  <ul className="space-y-2 pt-8">
                    <li className="flex items-center font-medium space-x-2 text-black">
                      <svg
                        className="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <span>Everything in Free</span>
                    </li>
                    <li className="flex items-center font-medium space-x-2 text-black">
                      <svg
                        className="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <span>5,000 events / month</span>
                    </li>
                    <li className="flex items-center font-medium space-x-2 text-black">
                      <svg
                        className="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <span>Unlimited seats</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="border-[1px] relative rounded-[32] rounded-t-lg py-[8] py-[4] px-[6] py-[16] my-3 p-4 rounded-br-lg rounded-bl-lg w-[320] h-[270] w-[318] h-[262] h-[262] h-[300] h-[362] w-80 h-[86] h-[336] flex h-72 justify-center items-center bg-white border-l border-r border-t border-b border-[#C7CDD4] border-solid">
            <div className="w-72 flex flex-col gap-y-0 justify-center text-black">
              <div className="h-full z-10 relative w-72 grow">
                <div className="my-0.5 flex justify-evenly flex-col gap-y-0.5">
                  <div className="flex flex-col flex-1 justify-between h-full w-72 gap-y-2">
                    <div className="flex justify-between flex-col">
                      <div className="flex grow gap-x-8 justify-between">
                        <div className="md:text-2xl font-bold flex justify-between text-[#f8f8f8ff] text-sm">
                          <span className="text-sm text-black">
                            Marjatta 16x
                          </span>
                        </div>
                        <div className="text-xl md:text-2xl font-bold flex justify-between text-[#ffffffff] flex-row-reverse">
                          <span className="text-sm text-black">
                            H100 Cluster
                          </span>
                        </div>
                      </div>
                      <div className="">
                        <ul className="space-y-2 pt-8">
                          <li className="flex items-center font-medium space-x-2 text-white">
                            <span className="text-xs text-black">
                              4x 4H100 bare metal systems
                            </span>
                          </li>
                          <li className="flex items-center font-medium space-x-2 text-black">
                            <span className="text-xs">
                              2x Intel Xeon Pkatinum 8462Y+, total 64C/128T
                            </span>
                          </li>
                          <li className="flex items-center font-medium space-x-2 text-white">
                            <span className="text-xs text-black">
                              512GB RAM
                            </span>
                          </li>
                          <li className="flex items-center font-medium space-x-2 text-white">
                            <span className="text-xs text-black">
                              7.68TB Local NVME
                            </span>
                          </li>
                          <li className="flex items-center font-medium space-x-2 text-white">
                            <span className="text-xs text-black">
                              800gbit InfiniBand
                            </span>
                          </li>
                          <li className="flex items-center font-medium space-x-2 text-white">
                            <span className="text-xs text-black">
                              100gbit ethernet
                            </span>
                          </li>
                          <li className="flex items-center font-medium space-x-2 text-white">
                            <span className="text-xs text-black">
                              800gbit InfiniBand
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="flex justify-end pt-0">
                      <a
                        href="/billing"
                        type="button"
                        target="_blank"
                        className="appearance-none inline-flex hover:shadow-2xl transition-all duration-300 hover:scale-105 items-center group space-x-2.5 text-white rounded-2xl cursor-pointer px-5 py-1.5 bg-[EFF2Fk] bg-gray-200"
                      >
                        <span className="w-full font-semibold text-base text-zinc-300">
                          Launch
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="hidden">
                  <ul className="space-y-2 pt-8">
                    <li className="flex items-center font-medium space-x-2 text-black">
                      <svg
                        className="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <span>Everything in Free</span>
                    </li>
                    <li className="flex items-center font-medium space-x-2 text-black">
                      <svg
                        className="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <span>5,000 events / month</span>
                    </li>
                    <li className="flex items-center font-medium space-x-2 text-black">
                      <svg
                        className="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <span>Unlimited seats</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="border-[1px] relative rounded-[32] rounded-t-lg py-[8] py-[4] px-[6] py-[16] my-3 p-4 rounded-br-lg rounded-bl-lg w-[320] h-[270] w-[318] h-[262] h-[262] h-[300] h-[362] w-80 h-[86] h-[336] flex h-72 justify-center items-center bg-white border-l border-r border-t border-b border-[#C7CDD4] border-solid">
            <h1>Text</h1>
            <div className="w-72 flex flex-col gap-y-0 justify-center text-black">
              <div className="h-full z-10 relative w-72 grow">
                <div className="my-0.5 flex justify-evenly flex-col gap-y-0.5">
                  <div className="flex flex-col flex-1 justify-between h-full w-72 gap-y-2">
                    <div className="flex justify-between flex-col">
                      <div className="flex grow gap-x-8 justify-between">
                        <div className="md:text-2xl font-bold flex justify-between text-[#f8f8f8ff] text-sm">
                          <span className="text-sm text-black">
                            Marjatta 16x
                          </span>
                        </div>
                        <div className="text-xl md:text-2xl font-bold flex justify-between text-[#ffffffff] flex-row-reverse">
                          <span className="text-sm text-black">
                            H100 Cluster
                          </span>
                        </div>
                      </div>
                      <div className="">
                        <ul className="space-y-2 pt-8">
                          <li className="flex items-center font-medium space-x-2 text-white">
                            <span className="text-xs text-black">
                              4x 4H100 bare metal systems
                            </span>
                          </li>
                          <li className="flex items-center font-medium space-x-2 text-black">
                            <span className="text-xs">
                              2x Intel Xeon Pkatinum 8462Y+, total 64C/128T
                            </span>
                          </li>
                          <li className="flex items-center font-medium space-x-2 text-white">
                            <span className="text-xs text-black">
                              512GB RAM
                            </span>
                          </li>
                          <li className="flex items-center font-medium space-x-2 text-white">
                            <span className="text-xs text-black">
                              7.68TB Local NVME
                            </span>
                          </li>
                          <li className="flex items-center font-medium space-x-2 text-white">
                            <span className="text-xs text-black">
                              800gbit InfiniBand
                            </span>
                          </li>
                          <li className="flex items-center font-medium space-x-2 text-white">
                            <span className="text-xs text-black">
                              100gbit ethernet
                            </span>
                          </li>
                          <li className="flex items-center font-medium space-x-2 text-white">
                            <span className="text-xs text-black">
                              800gbit InfiniBand
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="flex justify-end pt-0">
                      <a
                        href="/billing"
                        type="button"
                        target="_blank"
                        className="appearance-none inline-flex hover:shadow-2xl transition-all duration-300 hover:scale-105 items-center group space-x-2.5 text-white rounded-2xl cursor-pointer px-5 py-1.5 bg-[EFF2Fk] bg-gray-200"
                      >
                        <span className="w-full font-semibold text-base text-zinc-300">
                          Launch
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="hidden">
                  <ul className="space-y-2 pt-8">
                    <li className="flex items-center font-medium space-x-2 text-black">
                      <svg
                        className="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <span>Everything in Free</span>
                    </li>
                    <li className="flex items-center font-medium space-x-2 text-black">
                      <svg
                        className="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <span>5,000 events / month</span>
                    </li>
                    <li className="flex items-center font-medium space-x-2 text-black">
                      <svg
                        className="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <span>Unlimited seats</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="border-[1px] relative rounded-[32] rounded-t-lg py-[8] py-[4] px-[6] py-[16] my-3 p-4 rounded-br-lg rounded-bl-lg w-[320] h-[270] w-[318] h-[262] h-[262] h-[300] h-[362] w-80 h-[86] h-[336] flex h-72 justify-center items-center bg-white border-l border-r border-t border-b border-[#C7CDD4] border-solid">
            <div className="w-72 flex flex-col gap-y-0 justify-center text-black">
              <div className="h-full z-10 relative w-72 grow">
                <div className="my-0.5 flex justify-evenly flex-col gap-y-0.5">
                  <div className="flex flex-col flex-1 justify-between h-full w-72 gap-y-2">
                    <div className="flex justify-between flex-col">
                      <div className="flex grow gap-x-8 justify-between">
                        <div className="md:text-2xl font-bold flex justify-between text-[#f8f8f8ff] text-sm">
                          <span className="text-sm text-black">
                            Marjatta 16x
                          </span>
                        </div>
                        <div className="text-xl md:text-2xl font-bold flex justify-between text-[#ffffffff] flex-row-reverse">
                          <span className="text-sm text-black">
                            H100 Cluster
                          </span>
                        </div>
                      </div>
                      <div className="">
                        <ul className="space-y-2 pt-8">
                          <li className="flex items-center font-medium space-x-2 text-white">
                            <span className="text-xs text-black">
                              4x 4H100 bare metal systems
                            </span>
                          </li>
                          <li className="flex items-center font-medium space-x-2 text-black">
                            <span className="text-xs">
                              2x Intel Xeon Pkatinum 8462Y+, total 64C/128T
                            </span>
                          </li>
                          <li className="flex items-center font-medium space-x-2 text-white">
                            <span className="text-xs text-black">
                              512GB RAM
                            </span>
                          </li>
                          <li className="flex items-center font-medium space-x-2 text-white">
                            <span className="text-xs text-black">
                              7.68TB Local NVME
                            </span>
                          </li>
                          <li className="flex items-center font-medium space-x-2 text-white">
                            <span className="text-xs text-black">
                              800gbit InfiniBand
                            </span>
                          </li>
                          <li className="flex items-center font-medium space-x-2 text-white">
                            <span className="text-xs text-black">
                              100gbit ethernet
                            </span>
                          </li>
                          <li className="flex items-center font-medium space-x-2 text-white">
                            <span className="text-xs text-black">
                              800gbit InfiniBand
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="flex justify-end pt-0">
                      <a
                        href="/billing"
                        type="button"
                        target="_blank"
                        className="appearance-none inline-flex hover:shadow-2xl transition-all duration-300 hover:scale-105 items-center group space-x-2.5 text-white rounded-2xl cursor-pointer px-5 py-1.5 bg-[EFF2Fk] bg-gray-200"
                      >
                        <span className="w-full font-semibold text-base text-zinc-300">
                          Launch
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="hidden">
                  <ul className="space-y-2 pt-8">
                    <li className="flex items-center font-medium space-x-2 text-black">
                      <svg
                        className="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <span>Everything in Free</span>
                    </li>
                    <li className="flex items-center font-medium space-x-2 text-black">
                      <svg
                        className="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <span>5,000 events / month</span>
                    </li>
                    <li className="flex items-center font-medium space-x-2 text-black">
                      <svg
                        className="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <span>Unlimited seats</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="demo-container grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-[1352 px] w-[1352px] flex">
          <div className="border-[1px] relative rounded-[32] rounded-t-lg py-[8] py-[4] px-[6] py-[16] my-3 p-4 rounded-br-lg rounded-bl-lg w-[320] h-[270] w-[318] h-[262] h-[262] h-[300] h-[362] w-80 h-[86] h-[336] flex h-72 justify-center items-center bg-white border-l border-r border-t border-b border-[#C7CDD4] border-solid">
            <div className="w-72 flex flex-col gap-y-0 justify-center text-black">
              <div className="h-full z-10 relative w-72 grow">
                <div className="my-0.5 flex justify-evenly flex-col gap-y-0.5">
                  <div className="flex flex-col flex-1 justify-between h-full w-72 gap-y-2">
                    <div className="flex justify-between flex-col">
                      <div className="flex grow gap-x-8 justify-between">
                        <div className="md:text-2xl font-bold flex justify-between text-[#f8f8f8ff] text-sm">
                          <span className="text-sm text-black">
                            Marjatta 16x
                          </span>
                        </div>
                        <div className="text-xl md:text-2xl font-bold flex justify-between text-[#ffffffff] flex-row-reverse">
                          <span className="text-sm text-black">
                            H100 Cluster
                          </span>
                        </div>
                      </div>
                      <div className="">
                        <ul className="space-y-2 pt-8">
                          <li className="flex items-center font-medium space-x-2 text-white">
                            <span className="text-xs text-black">
                              4x 4H100 bare metal systems
                            </span>
                          </li>
                          <li className="flex items-center font-medium space-x-2 text-black">
                            <span className="text-xs">
                              2x Intel Xeon Pkatinum 8462Y+, total 64C/128T
                            </span>
                          </li>
                          <li className="flex items-center font-medium space-x-2 text-white">
                            <span className="text-xs text-black">
                              512GB RAM
                            </span>
                          </li>
                          <li className="flex items-center font-medium space-x-2 text-white">
                            <span className="text-xs text-black">
                              7.68TB Local NVME
                            </span>
                          </li>
                          <li className="flex items-center font-medium space-x-2 text-white">
                            <span className="text-xs text-black">
                              800gbit InfiniBand
                            </span>
                          </li>
                          <li className="flex items-center font-medium space-x-2 text-white">
                            <span className="text-xs text-black">
                              100gbit ethernet
                            </span>
                          </li>
                          <li className="flex items-center font-medium space-x-2 text-white">
                            <span className="text-xs text-black">
                              800gbit InfiniBand
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="flex justify-end pt-0">
                      <a
                        href="/billing"
                        type="button"
                        target="_blank"
                        className="appearance-none inline-flex hover:shadow-2xl transition-all duration-300 hover:scale-105 items-center group space-x-2.5 text-white rounded-2xl cursor-pointer px-5 py-1.5 bg-[EFF2Fk] bg-gray-200"
                      >
                        <span className="w-full font-semibold text-base text-zinc-300">
                          Launch
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="hidden">
                  <ul className="space-y-2 pt-8">
                    <li className="flex items-center font-medium space-x-2 text-black">
                      <svg
                        className="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <span>Everything in Free</span>
                    </li>
                    <li className="flex items-center font-medium space-x-2 text-black">
                      <svg
                        className="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <span>5,000 events / month</span>
                    </li>
                    <li className="flex items-center font-medium space-x-2 text-black">
                      <svg
                        className="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <span>Unlimited seats</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="border-[1px] relative rounded-[32] rounded-t-lg py-[8] py-[4] px-[6] py-[16] my-3 p-4 rounded-br-lg rounded-bl-lg w-[320] h-[270] w-[318] h-[262] h-[262] h-[300] h-[362] w-80 h-[86] h-[336] flex h-72 justify-center items-center bg-white border-l border-r border-t border-b border-[#C7CDD4] border-solid">
            <div className="w-72 flex flex-col gap-y-0 justify-center text-black">
              <div className="h-full z-10 relative w-72 grow">
                <div className="my-0.5 flex justify-evenly flex-col gap-y-0.5">
                  <div className="flex flex-col flex-1 justify-between h-full w-72 gap-y-2">
                    <div className="flex justify-between flex-col">
                      <div className="flex grow gap-x-8 justify-between">
                        <div className="md:text-2xl font-bold flex justify-between text-[#f8f8f8ff] text-sm">
                          <span className="text-sm text-black">
                            Marjatta 16x
                          </span>
                        </div>
                        <div className="text-xl md:text-2xl font-bold flex justify-between text-[#ffffffff] flex-row-reverse">
                          <span className="text-sm text-black">
                            H100 Cluster
                          </span>
                        </div>
                      </div>
                      <div className="">
                        <ul className="space-y-2 pt-8">
                          <li className="flex items-center font-medium space-x-2 text-white">
                            <span className="text-xs text-black">
                              4x 4H100 bare metal systems
                            </span>
                          </li>
                          <li className="flex items-center font-medium space-x-2 text-black">
                            <span className="text-xs">
                              2x Intel Xeon Pkatinum 8462Y+, total 64C/128T
                            </span>
                          </li>
                          <li className="flex items-center font-medium space-x-2 text-white">
                            <span className="text-xs text-black">
                              512GB RAM
                            </span>
                          </li>
                          <li className="flex items-center font-medium space-x-2 text-white">
                            <span className="text-xs text-black">
                              7.68TB Local NVME
                            </span>
                          </li>
                          <li className="flex items-center font-medium space-x-2 text-white">
                            <span className="text-xs text-black">
                              800gbit InfiniBand
                            </span>
                          </li>
                          <li className="flex items-center font-medium space-x-2 text-white">
                            <span className="text-xs text-black">
                              100gbit ethernet
                            </span>
                          </li>
                          <li className="flex items-center font-medium space-x-2 text-white">
                            <span className="text-xs text-black">
                              800gbit InfiniBand
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="flex justify-end pt-0">
                      <a
                        href="/billing"
                        type="button"
                        target="_blank"
                        className="appearance-none inline-flex hover:shadow-2xl transition-all duration-300 hover:scale-105 items-center group space-x-2.5 text-white rounded-2xl cursor-pointer px-5 py-1.5 bg-[EFF2Fk] bg-gray-200"
                      >
                        <span className="w-full font-semibold text-base text-zinc-300">
                          Launch
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="hidden">
                  <ul className="space-y-2 pt-8">
                    <li className="flex items-center font-medium space-x-2 text-black">
                      <svg
                        className="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <span>Everything in Free</span>
                    </li>
                    <li className="flex items-center font-medium space-x-2 text-black">
                      <svg
                        className="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <span>5,000 events / month</span>
                    </li>
                    <li className="flex items-center font-medium space-x-2 text-black">
                      <svg
                        className="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <span>Unlimited seats</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="border-[1px] relative rounded-[32] rounded-t-lg py-[8] py-[4] px-[6] py-[16] my-3 p-4 rounded-br-lg rounded-bl-lg w-[320] h-[270] w-[318] h-[262] h-[262] h-[300] h-[362] w-80 h-[86] h-[336] flex h-72 justify-center items-center bg-white border-l border-r border-t border-b border-[#C7CDD4] border-solid">
            <div className="w-72 flex flex-col gap-y-0 justify-center text-black">
              <div className="h-full z-10 relative w-72 grow">
                <div className="my-0.5 flex justify-evenly flex-col gap-y-0.5">
                  <div className="flex flex-col flex-1 justify-between h-full w-72 gap-y-2">
                    <div className="flex justify-between flex-col">
                      <div className="flex grow gap-x-8 justify-between">
                        <div className="md:text-2xl font-bold flex justify-between text-[#f8f8f8ff] text-sm">
                          <span className="text-sm text-black">
                            Marjatta 16x
                          </span>
                        </div>
                        <div className="text-xl md:text-2xl font-bold flex justify-between text-[#ffffffff] flex-row-reverse">
                          <span className="text-sm text-black">
                            H100 Cluster
                          </span>
                        </div>
                      </div>
                      <div className="">
                        <ul className="space-y-2 pt-8">
                          <li className="flex items-center font-medium space-x-2 text-white">
                            <span className="text-xs text-black">
                              4x 4H100 bare metal systems
                            </span>
                          </li>
                          <li className="flex items-center font-medium space-x-2 text-black">
                            <span className="text-xs">
                              2x Intel Xeon Pkatinum 8462Y+, total 64C/128T
                            </span>
                          </li>
                          <li className="flex items-center font-medium space-x-2 text-white">
                            <span className="text-xs text-black">
                              512GB RAM
                            </span>
                          </li>
                          <li className="flex items-center font-medium space-x-2 text-white">
                            <span className="text-xs text-black">
                              7.68TB Local NVME
                            </span>
                          </li>
                          <li className="flex items-center font-medium space-x-2 text-white">
                            <span className="text-xs text-black">
                              800gbit InfiniBand
                            </span>
                          </li>
                          <li className="flex items-center font-medium space-x-2 text-white">
                            <span className="text-xs text-black">
                              100gbit ethernet
                            </span>
                          </li>
                          <li className="flex items-center font-medium space-x-2 text-white">
                            <span className="text-xs text-black">
                              800gbit InfiniBand
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="flex justify-end pt-0">
                      <a
                        href="/billing"
                        type="button"
                        target="_blank"
                        className="appearance-none inline-flex hover:shadow-2xl transition-all duration-300 hover:scale-105 items-center group space-x-2.5 text-white rounded-2xl cursor-pointer px-5 py-1.5 bg-[EFF2Fk] bg-gray-200"
                      >
                        <span className="w-full font-semibold text-base text-zinc-300">
                          Launch
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="hidden">
                  <ul className="space-y-2 pt-8">
                    <li className="flex items-center font-medium space-x-2 text-black">
                      <svg
                        className="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <span>Everything in Free</span>
                    </li>
                    <li className="flex items-center font-medium space-x-2 text-black">
                      <svg
                        className="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <span>5,000 events / month</span>
                    </li>
                    <li className="flex items-center font-medium space-x-2 text-black">
                      <svg
                        className="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <span>Unlimited seats</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="border-[1px] relative rounded-[32] rounded-t-lg py-[8] py-[4] px-[6] py-[16] my-3 p-4 rounded-br-lg rounded-bl-lg w-[320] h-[270] w-[318] h-[262] h-[262] h-[300] h-[362] w-80 h-[86] h-[336] flex h-72 justify-center items-center bg-white border-l border-r border-t border-b border-[#C7CDD4] border-solid">
            <div className="w-72 flex flex-col gap-y-0 justify-center text-black">
              <div className="h-full z-10 relative w-72 grow">
                <div className="my-0.5 flex justify-evenly flex-col gap-y-0.5">
                  <div className="flex flex-col flex-1 justify-between h-full w-72 gap-y-2">
                    <div className="flex justify-between flex-col">
                      <div className="flex grow gap-x-8 justify-between">
                        <div className="md:text-2xl font-bold flex justify-between text-[#f8f8f8ff] text-sm">
                          <span className="text-sm text-black">
                            Marjatta 16x
                          </span>
                        </div>
                        <div className="text-xl md:text-2xl font-bold flex justify-between text-[#ffffffff] flex-row-reverse">
                          <span className="text-sm text-black">
                            H100 Cluster
                          </span>
                        </div>
                      </div>
                      <div className="">
                        <ul className="space-y-2 pt-8">
                          <li className="flex items-center font-medium space-x-2 text-white">
                            <span className="text-xs text-black">
                              4x 4H100 bare metal systems
                            </span>
                          </li>
                          <li className="flex items-center font-medium space-x-2 text-black">
                            <span className="text-xs">
                              2x Intel Xeon Pkatinum 8462Y+, total 64C/128T
                            </span>
                          </li>
                          <li className="flex items-center font-medium space-x-2 text-white">
                            <span className="text-xs text-black">
                              512GB RAM
                            </span>
                          </li>
                          <li className="flex items-center font-medium space-x-2 text-white">
                            <span className="text-xs text-black">
                              7.68TB Local NVME
                            </span>
                          </li>
                          <li className="flex items-center font-medium space-x-2 text-white">
                            <span className="text-xs text-black">
                              800gbit InfiniBand
                            </span>
                          </li>
                          <li className="flex items-center font-medium space-x-2 text-white">
                            <span className="text-xs text-black">
                              100gbit ethernet
                            </span>
                          </li>
                          <li className="flex items-center font-medium space-x-2 text-white">
                            <span className="text-xs text-black">
                              800gbit InfiniBand
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="flex justify-end pt-0">
                      <a
                        href="/billing"
                        type="button"
                        target="_blank"
                        className="appearance-none inline-flex hover:shadow-2xl transition-all duration-300 hover:scale-105 items-center group space-x-2.5 text-white rounded-2xl cursor-pointer px-5 py-1.5 bg-[EFF2Fk] bg-gray-200"
                      >
                        <span className="w-full font-semibold text-base text-zinc-300">
                          Launch
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="hidden">
                  <ul className="space-y-2 pt-8">
                    <li className="flex items-center font-medium space-x-2 text-black">
                      <svg
                        className="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <span>Everything in Free</span>
                    </li>
                    <li className="flex items-center font-medium space-x-2 text-black">
                      <svg
                        className="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <span>5,000 events / month</span>
                    </li>
                    <li className="flex items-center font-medium space-x-2 text-black">
                      <svg
                        className="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <span>Unlimited seats</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
