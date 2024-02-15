import './App.css'
import heroImage from '../src/images/hero-image-github-profile.png'
import { useEffect, useState } from 'react'
import GithubProfile from './components/GithubProfile'
import ProfileCardSearch from './components/ProfileCardSearchBar'

function App() {

  const [dataProfile, setDataProfile] = useState("")
  const [dataProfileSearchBar, setDataProfileSearchBar] = useState("")

  function getProfileData(user = "github") {
    const url = `https://api.github.com/users/${user}`
    fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      changeDataProfile(data)
    })
    .catch(error => {
      console.log(error)
    })
  }
  function getProfileDataSearchBar(user) {
    const url = `https://api.github.com/users/${user}`
    fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setDataProfileSearchBar(data) 
    })
    .catch(error => {
      console.log(error)
    })
  }
  const changeDataProfile = (data) => {
    setDataProfile(data)

  }
  useEffect(() => {
    getProfileData()
  },[])

  const handleSearchProfile = (event) => {

    const user = event.target.value
    getProfileDataSearchBar(user)
  } 

  const handleProfileGithub = () => {
    setDataProfile(dataProfileSearchBar)
  }

  return (
    <div className="flex flex-col gap-[12px] bg-[#20293A] h-full">
      <header className='relative'>
          <img className='' src={heroImage}/>
          <div className='absolute right-[50%] translate-x-1/2 top-[32px] flex flex-col w-fit gap-[8px]'>
              <input id="text-area" onChange={handleSearchProfile} className="p-[16px] rounded-lg bg-[#20293A] text-[#CDD5E0] w-[400px] bg-[url('./images/Search.svg')] bg-no-repeat	bg-[center_left_16px] pl-[50px]	" placeholder='username'></input>
              { dataProfileSearchBar && <ProfileCardSearch dataProfileSearchBar={dataProfileSearchBar} showProfileGithub={handleProfileGithub}/> }
          </div>
        </header>
        {
          dataProfile ? ( 
             <GithubProfile dataProfile={dataProfile}/>
          )  : (
            <p>Loading...</p>
          )
        }
    </div>
  )
}

export default App
