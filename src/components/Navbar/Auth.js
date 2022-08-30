import { Menu } from '@headlessui/react'
import { Icon } from 'Icons'

export default function Auth() {

  const user = {
    name: 'Oguz Gencer',
    avatar: 'https://i.scdn.co/image/ab6775700000ee850e33ce82e1d61cb128624dab',
  }

  return (
    <Menu as='nav' className={"relative"}>
      {({open: boolean})  => (
        <>
          <Menu.Button className={`flex items-center h-8 rounded-3xl pr-2  hover:bg-active`}>
            <img src={user.avatar} className={"w-8 h-8 rounded-full p-0.5  mr-2"} />
            <span className='text-sm font-semibold mr-2'>{user.name}</span>
            <Icon size={16} name='downDir' />
          </Menu.Button>
          <Menu.Items className={"absolute top-full right-0 w-48 bg-active rounded translate-y-2"}>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`${active && 'bg-blue-500'}`}
                  href="/account-settings"
                >
                  Account
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`${active && 'bg-blue-500'}`}
                  href="/account-settings"
                >
                  Profile
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`${active && 'bg-blue-500'}`}
                  href="/account-settings"
                >
                  Support
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`${active && 'bg-blue-500'}`}
                  href="/account-settings"
                >
                  Download
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`${active && 'bg-blue-500'}`}
                  href="/account-settings"
                >
                  Settings
                </a>
              )}
            </Menu.Item>
          </Menu.Items>
        </>
      )}
    </Menu>
  )
}
