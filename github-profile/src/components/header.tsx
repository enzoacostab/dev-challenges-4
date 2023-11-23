import React, { Dispatch, SetStateAction, KeyboardEvent } from "react"
import { ProfileType } from "../types"

interface Props {
  username: string
  setUsername: Dispatch<SetStateAction<string>>
  showDropdown: boolean
  handleSearchClick: () => void
  handleSearchKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void
  profile: ProfileType | undefined
}

export default function Header ({ username, setUsername, showDropdown, handleSearchClick, handleSearchKeyDown, profile }: Props): React.JSX.Element {
  return (
    <header className="p-5 w-full flex overflow-hidden flex-col gap-2 relative z-20 items-center">
      <img src="/assets/hero-image-github-profile.png" className="-z-10 absolute top-0 min-w-[1300px]"/>
      <div className="bg-[#20293A] p-4 mt-3 flex items-center focus-within:outline w-[80%] max-w-[500px] focus-within:outline-[#3662E3] gap-4 rounded-xl">
        <img src="/assets/Search.svg" alt=""/>
        <input value={username} onKeyDown={handleSearchKeyDown} onChange={({target}): void => setUsername(target.value)} placeholder="username" type="text" className="text-[#CDD5E0] focus-visible:outline-none placeholder:text-[#4A5567] bg-transparent w-full" />
      </div>
      <div onClick={handleSearchClick} className={`${profile?.name != undefined && showDropdown ? 'visible opacity-100' : 'invisible opacity-0'} cursor-pointer hover:bg-[#1D1B48] flex transition-all gap-3 p-2 w-[70%] max-w-[500px] h-[100px] bg-[#111729] rounded-xl`}>
        <img src={profile?.avatar_url} alt="profile image" className="h-full rounded-xl"/>
        <div className="flex gap-2 justify-center flex-col ">
          <h2 className="text-xl text-[#CDD5E0]">{profile?.name}</h2>
          <h3 className="text-sm opacity-80 text-[#CDD5E0]">{profile?.bio}</h3>
        </div>
      </div>
    </header>
  )
}