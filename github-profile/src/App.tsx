import React, { useEffect, lazy, useState, KeyboardEvent, Suspense } from "react"
import { ProfileType, Repo } from "./types"
import { useDebounce } from "use-debounce"
import Header from "./components/header"
const Repositories = lazy(() => import("./components/repositories"))
const Profile = lazy(() => import("./components/profile"))

function App(): React.JSX.Element {
  const [viewAll, setViewAll] = useState(false)
  const [showDropdown, setShowDropdown] = useState(false)
  const [username, setUsername] = useState('')
  const [profileToShow, setProfileToShow] = useState<ProfileType>()
  const [debounceUsername] = useDebounce(username, 1000);
  const [profile, setProfile] = useState<ProfileType>()
  const [repos, setRepos] = useState<Repo[]>([])
  const [reposToShow, setReposToShow] = useState<Repo[]>([])

  useEffect(() => {
    if (isAlphanumeric() || !username) getData()
  }, [debounceUsername])
  
  const getData = (): void => {
    fetch(`https://api.github.com/users/${username || 'github'}`)
      .then(response => response.json())
      .then(data => {
        getRepos(data.repos_url)
        const newProfile: ProfileType = {
          avatar_url: '',
          followers: '',
          following: '',
          location: '',
          name: '',
          bio: ''
        }
        Object.keys(newProfile).forEach(key => newProfile[key] = data[key])
        setProfile(newProfile)
        if (debounceUsername) {
          setShowDropdown(true)
        } else {
          setProfileToShow(newProfile)
        }
      })
      .catch(error => {
        console.error(error)
      })
  }
  
  const getRepos = (url: string): void => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const newRepos: Repo[] = []
        data.forEach((repo: any) => {
          const keys = ["name", "description",
          "stargazers_count", "forks_count",
          "updated_at", "html_url", "license"]
          const newRepo = Object.fromEntries(keys.map(key => 
            key === "license" ? [key, repo[key]?.spdx_id] : [key, repo[key]]
          ));
          newRepos.push(newRepo as Repo)
        });
        setRepos(newRepos)
        if (!debounceUsername) setReposToShow(newRepos)
      })
      .catch(error => {
        console.error(error)
      })
  }

  const isAlphanumeric = () => {
    return /^[a-z0-9]+$/i.test(username);
  }

  const handleSearchKeyDown = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (profile?.name != undefined && e.key === "Enter") {
      setProfileToShow(profile)
      setReposToShow(repos)
      setShowDropdown(false)
    }
  }

  const handleSearchClick = (): void => {
    setProfileToShow(profile)
    setReposToShow(repos)
    setShowDropdown(false)
  }

  return (
    <div className="flex flex-col overflow-hidden items-center">
      <Header 
        username={username}
        setUsername={setUsername}
        showDropdown={showDropdown}
        handleSearchClick={handleSearchClick}
        handleSearchKeyDown={handleSearchKeyDown}
        profile={profile}
      />
      <Suspense fallback={<span>Loading...</span>}>
        <main className="flex z-30 flex-col self-start pb-7 px-[10%] lg:px-[6%] xl:px-[15%] w-full">
          <Profile profile={profileToShow}/>
          <Repositories repos={reposToShow} profile={profileToShow} viewAll={viewAll}/>
          {!viewAll
            ? <button onClick={() => setViewAll(true)} className="self-center py-5 px-2 my-5">View all repositories</button>
            : null}
        </main>
      </Suspense>
    </div>
  )
}

export default App
