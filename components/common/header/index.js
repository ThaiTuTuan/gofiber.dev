/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";
import Link from "next/link";
import Image from "next/image";

import logo from "../../../assets/images/logo-gofiber.png";

const tools = [
  {
    name: "Công cụ kiểm tra lỗ hổng ProxyNotFound",
    href: "#",
  },
  {
    name: "Công cụ kiểm tra lỗ hổng ProxyLogon",
    href: "#",
  },
  {
    name: "Chiến dịch rà quét mã độc",
    href: "#",
  },
  {
    name: "Kiểm tra mạng máy tính ma",
    href: "#",
  },
  {
    name: "Kiểm tra lộ lọt thông tin tài khoản cá nhân",
    href: "#",
  },
  {
    name: "Giải mã, nhận diện mã độc tống tiền",
    href: "#",
  },
  {
    name: "Kho tri thức về tấn công có chủ đích",
    href: "#",
  },
];

const solutions = [
  {
    name: "Hệ thống Bug Bounty & Vulnerability Disclosure",
    href: "#",
  },
  {
    name: "Hệ thống cảnh báo điểm yếu và rà soát lỗ hổng bảo mật tự động",
    href: "#",
  },
  {
    name: "Hệ thống gán nhãn Website Tín nhiệm mạng",
    href: "#",
  },
  {
    name: "Hệ thống phân tích và chia sẻ nguy cơ tấn công mạng",
    href: "#",
  },
  {
    name: "Open API (Coming soon)",
    href: "#",
  },
];

const warningInfo = [
  {
    name: "Cảnh báo ATTT",
    href: "#",
  },
  {
    name: "Lỗ hổng đang bị khai thác",
    href: "#",
  },
  {
    name: "Cảnh báo lỗ hổng CVE nguy hiểm",
    href: "#",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  return (
    <>
      <div className="bg-blue-50">
        <div className="container mx-auto px-2 py-1">
          <Link href="">
            <a className=" text-sm font-normal text-gray-600 hover:text-blue-500 ">
              Công Ty Công Nghệ Phần Mềm Gobiber
            </a>
          </Link>
        </div>
      </div>
      <Popover className="relative bg-white ">
        <div className="container mx-auto">
          <div className="flex justify-between items-center py-5 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1 ">
              <Link href="/">
                <a>
                  <span className="sr-only">Workflow</span>
                  <Image
                    className="h-8 w-auto sm:h-10"
                    src={logo}
                    alt=""
                    width={220}
                    height={50}
                    layout="fixed"
                  />
                </a>
              </Link>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-700 hover:text-gray-900 hover:bg-gray-100 ">
                <span className="sr-only">Open menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>

            <Popover.Group as="nav" className="hidden md:flex space-x-10">
              <Link href="/">
                <a className="text-base font-medium text-gray-700 hover:text-gray-900">
                  Trang chủ
                </a>
              </Link>
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? "text-gray-900" : "text-gray-700",
                        "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none "
                      )}
                    >
                      <span>Công cụ</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? "text-gray-600" : "text-gray-400",
                          "ml-2 h-5 w-5 group-hover:text-gray-500"
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-sm sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                          <div className="relative grid gap-6 bg-white px-5 py-6 ">
                            {tools.map((item) => (
                              <Link key={item.name} href={item.href}>
                                <a className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                                  <div className="">
                                    <p className="text-base font-medium text-gray-700 hover:text-gray-900">
                                      {item.name}
                                    </p>
                                    {/* <p className="mt-1 text-sm text-gray-500">{item.description}</p> */}
                                  </div>
                                </a>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? "text-gray-900" : "text-gray-700",
                        "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none"
                      )}
                    >
                      <span>Giải pháp</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? "text-gray-600" : "text-gray-400",
                          "ml-2 h-5 w-5 group-hover:text-gray-500"
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-sm sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                          <div className="relative grid gap-6 bg-white px-5 py-6 ">
                            {solutions.map((item) => (
                              <Link key={item.name} href={item.href}>
                                <a className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                                  <div className="">
                                    <p className="text-base font-medium text-gray-700 hover:text-gray-900">
                                      {item.name}
                                    </p>
                                    {/* <p className="mt-1 text-sm text-gray-500">{item.description}</p> */}
                                  </div>
                                </a>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? "text-gray-900" : "text-gray-700",
                        "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none"
                      )}
                    >
                      <span>Thông tin cảnh báo</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? "text-gray-600" : "text-gray-400",
                          "ml-2 h-5 w-5 group-hover:text-gray-500"
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-sm sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                          <div className="relative grid gap-6 bg-white px-5 py-6 ">
                            {warningInfo.map((item) => (
                              <Link key={item.name} href={item.href}>
                                <a className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                                  <div className="">
                                    <p className="text-base font-medium text-gray-700 hover:text-gray-900">
                                      {item.name}
                                    </p>
                                    {/* <p className="mt-1 text-sm text-gray-500">{item.description}</p> */}
                                  </div>
                                </a>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
              <Link href="/posts">
                <a className="text-base font-medium text-gray-700 hover:text-gray-900">
                  Blog
                </a>
              </Link>
              <Link href="/tuyen-dung">
                <a className="text-base font-medium text-gray-700 hover:text-gray-900">
                  Tuyển dụng
                </a>
              </Link>
              <Link href="#">
                <a
                  href="#"
                  className="text-base font-medium text-gray-700 hover:text-gray-900"
                >
                  Liên hệ
                </a>
              </Link>
            </Popover.Group>
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <Link href="#">
                <a
                  href="#"
                  className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
                >
                  Thông tin mới nhất
                </a>
              </Link>
            </div>
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                  <div>
                    {/* <img
                      className="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                      alt="Workflow"
                    /> */}
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-700 hover:text-gray-900 hover:bg-gray-100 ">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-8">
                    {solutions.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                      >
                        {/* <item.icon
												className="flex-shrink-0 h-6 w-6 text-indigo-600"
												aria-hidden="true"
											/> */}
                        <span className="ml-3 text-base font-medium text-gray-900">
                          {item.name}
                        </span>
                      </a>
                    ))}
                  </nav>
                </div>
              </div>
              <div className="py-6 px-5 space-y-6">
                <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                  <a
                    href="#"
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    Pricing
                  </a>

                  <a
                    href="#"
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    Docs
                  </a>
                  {tools.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-base font-medium text-gray-900 hover:text-gray-700"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div>
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    Sign up
                  </a>
                  <p className="mt-6 text-center text-base font-medium text-gray-500">
                    Existing customer?{" "}
                    <a
                      href="#"
                      className="text-indigo-600 hover:text-indigo-500"
                    >
                      Sign in
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </>
  );
}
