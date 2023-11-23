import React from "react";
import { ProfileType } from "../types";

export default function Profile ({ profile }: { profile: ProfileType | undefined }): React.JSX.Element {
  return (
    <div className="flex gap-10">
      <img src={profile?.avatar_url} className="w-[130px] bg-[#20293A] -mt-10 rounded-3xl p-2 h-min text-center" alt="profile image" />
      <div className="flex flex-col lg:flex-row  gap-4 mt-4">
        <div className="flex bg-[#111729] p-3 h-fit rounded-xl w-fit">
          <p className="text-[#4A5567] border-r border-[#4A5567] py-2 px-4 w-[110px]">Followers</p>
          <span className="py-2 px-4">{profile?.followers}</span>
        </div>
        <div className="flex bg-[#111729] p-3 h-fit rounded-xl w-fit">
          <p className="text-[#4A5567] border-r border-[#4A5567] py-2 px-4 w-[110px]">Following</p>
          <span className="py-2 px-4">{profile?.following}</span>
        </div>
        <div className="flex bg-[#111729] p-3 rounded-xl h-fit w-fit">
          <p className="text-[#4A5567] border-r border-[#4A5567] py-2 px-4 w-[110px]">Location</p>
          <span className="py-2 px-4">{profile?.location}</span>
        </div>
      </div>
    </div>
  )
}