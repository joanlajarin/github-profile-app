import React, { useEffect, useState } from "react"
import RepositoryCard from "./RepositoryCard"


export default function GithubProfile({dataProfile}) {

    const [repositories,setRepositories] = useState()
    const [showMoreRepos, setShowMoreRepos] = useState(false)

    const getRepositories = (user) => {
        const url = `https://api.github.com/users/${user}/repos`
        fetch(url)
            .then(response => response.json())
                .then(data => {
                    console.log(data)
                    setRepositories(data)
                })
                .catch(error => {
                    console.log(error)
                })
    }
    useEffect(() => {
        setShowMoreRepos(false)
        const user = dataProfile.login
        getRepositories(user)
    },[dataProfile])

    const handleShowMoreRepos = () => {
        showMoreRepos ? setShowMoreRepos(false) : setShowMoreRepos(true)
    }
    return (
        <main className='flex flex-col items-center h-full'>
        <header className='relative w-[1000px]'>
            <div className='flex gap-[20px] justify-center text-[16px] font-medium'>
              <div className='flex bg-[#111729] w-fit py-[16px] rounded-xl'>
                <span className="text-[#364153] px-[20px] border-r border-[#364153]">Followers</span>
                <span className="text-[#CDD5E0] px-[20px]">{dataProfile.followers}</span>
              </div>
              <div className='flex bg-[#111729] w-fit py-[16px] rounded-xl'>
                <span className="text-[#364153] px-[20px] border-r border-[#364153]">Following</span>
                <span className="text-[#CDD5E0] px-[20px]">{dataProfile.following}</span>
              </div>
              <div className='flex bg-[#111729] w-fit py-[16px] rounded-xl'>
                <span className="text-[#364153] px-[20px] border-r border-[#364153]">Location</span>
                <span className="text-[#CDD5E0] px-[20px]">{dataProfile.location}</span>
              </div>
            </div>
            <img className=" absolute size-[120px] bottom-0 left-0" src={dataProfile.avatar_url}></img>
        </header>

        <main className='w-[1000px] flex flex-col mt-[20px] h-fit'>
            <h1 className='text-[#CDD5E0] text-[32px]'>{dataProfile.name}</h1>
            <h2 className='text-[#CDD5E0] text-[16px] mt-[8px]'>{dataProfile.bio}</h2>
            <section className='mt-[34px] grid grid-cols-2 h-fit gap-y-[34px] gap-x-[32px]'>
                {
                    repositories ? ( 
                        repositories.length > 4 ? (
                            showMoreRepos ? (
                                repositories.map( repository => ( <RepositoryCard keyRepo={repository.id}  data={repository} user={dataProfile.login}/> ))
                                ) : (
                                    repositories.slice(0,4).map( repository => ( <RepositoryCard keyRepo={repository.id} data={repository} user={dataProfile.login}/> ))
                                )
                            ) 
                            : (  repositories.map( repository => ( <RepositoryCard keyRepo={repository.id}  data={repository} user={dataProfile.login}/> ))
                        ) 
                    ) :  (
                            <p>Loading...</p>
                    )
                }
            </section>
            <span onClick={handleShowMoreRepos} className='text-[#CDD5E0] text-center mt-[46px] mb-[100px]'>View all repositories</span>
        </main>
      </main>
    )
}