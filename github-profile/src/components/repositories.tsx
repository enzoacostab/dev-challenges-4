import React from "react";
import { ProfileType, Repo } from "../types";
import RepositoryCard from "./repository-card";

interface Props {
  repos: Repo[]
  profile: ProfileType | undefined
  viewAll: boolean
}

export default function Repositories ({ repos, viewAll, profile }: Props): React.JSX.Element {
  return (
    <div className="flex flex-wrap ml-5 gap-5 mt-5">
      <div className="w-full h-fit">
        <h1 className="text-4xl ">{profile?.name}</h1>
        <h2 className="opacity-80 my-2">{profile?.bio}</h2>
      </div>
      {repos?.slice(0, viewAll ? Infinity : 4).map(({ name, html_url, stargazers_count, forks_count, description, updated_at, license }) => 
        <RepositoryCard key={name} name={name} html_url={html_url} 
          stargazers_count={stargazers_count} forks_count={forks_count} 
          description={description} updated_at={updated_at}
          license={license}
        />
      )}
    </div>
  )
}