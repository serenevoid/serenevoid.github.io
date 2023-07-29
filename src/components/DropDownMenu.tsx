import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { IoMenu } from "react-icons/io5/index";

export default function DropDownMenu() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex justify-center rounded-md border border-zinc-400 dark:border-zinc-700 p-2 text-sm font-medium shadow-sm hover:bg-orange-200 dark:hover:bg-zinc-800 outline-none transition-all" aria-label="menu">
          <IoMenu className="h-5 w-5"/>
        </Menu.Button>
      </div>
      <Transition 
        as={Fragment} 
        enter="transition ease-out duration-100" 
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-out duration-75" 
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md border border-zinc-400 dark:border-zinc-700 bg-orange-50 dark:bg-zinc-800 shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none divide-zinc-400 dark:divide-zinc-700">
          <div className="flex flex-col">
            <Menu.Item>
              <a className="p-4 hover:bg-orange-50 dark:hover:bg-zinc-700 rounded-t-md" href="/projects">
                Projects
              </a>
            </Menu.Item>
            <Menu.Item>
              <a className="p-4 hover:bg-orange-50 dark:hover:bg-zinc-700" href="/blog">
                Blog
              </a>
            </Menu.Item>
            <Menu.Item>
              <a className="p-4 hover:bg-orange-50 dark:hover:bg-zinc-700 rounded-b-md" href="/about">
                About
              </a>
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
