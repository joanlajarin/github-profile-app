import { useEffect } from "react"

export default function getProfileDataSearchBar({dataProfileSearchBar, showProfileGithub}) {

    const handleClick = () => {
        showProfileGithub()
    } 

    return(
        <div id="search-bar-profile" onClick={handleClick} className='p-[8px] rounded-lg bg-[#20293A] w-[400px] flex gap-[12px]'>
            <img className='size-[60px] rounded-lg' src={dataProfileSearchBar.avatar_url}></img>
            <div className='flex flex-col justify-center'>
                <span className='text-[#CDD5E0] text-[16px]'>{dataProfileSearchBar.name}</span>
                <span className='text-[#CDD5E0] text-[12px]'>{dataProfileSearchBar.bio}</span>
            </div>
      </div>
    )
}