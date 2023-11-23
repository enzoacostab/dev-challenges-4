import React from "react";
import { Repo } from "../types";
import moment from "moment";

export default function RepositoryCard ({ name, html_url, description, forks_count, stargazers_count, updated_at, license }: Repo): React.JSX.Element {
  const lastUpdate = (date: Date) => {
    const date1 = moment(date)
    const date2 = moment(new Date())
    return `updated ${date2.diff(date1, 'days')} days ago`
  }
  
  return (
    <a className="rounded-xl my-3 w-full lg:w-[48%] h-fit" target="_blank" href={html_url}>
      <div className="p-5 rounded-xl bg-gradient-to-r from-[#111729] to-[#1D1B48]">
        <h2 className="text-xl">{name}</h2>
        <p className="my-4 opacity-80">{description}</p>
        <div className="flex gap-3">
          {license ? <div className="flex gap-1 opacity-80"><img src="/assets/Chield_alt.svg" />{license}</div> : null}
          <div className="flex gap-1 opacity-80"><img src="/assets/Nesting.svg" />{forks_count}</div>
          <div className="flex gap-1 opacity-80"><img src="/assets/Star.svg" />{stargazers_count}</div>
          <div className="flex gap-1 opacity-80 ml-3">{lastUpdate(updated_at)}</div>
        </div>
      </div>
    </a>
  )
}