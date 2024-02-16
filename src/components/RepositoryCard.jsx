import React, { useEffect, useState } from "react"
import nesting from '../images/Nesting.svg' 
import star from '../images/Star.svg' 
import chield from '../images/Chield_alt.svg' 


export default function RepositoryCard({keyRepo, data, user}){

    const url =  `https://github.com/${user}/${data.name}`
    const [daysAgo, setDaysAgo] = useState("")


    const calculateDaysAgo = (dateString) =>  {
        //I asked CHATGPT
        // Convert the given date string to a Date object
        const givenDate = new Date(dateString)
        // Get the current date
        const currentDate = new Date()
        // Calculate the difference in milliseconds between the current date and the given date
        const differenceMs = currentDate - givenDate
        // Convert the difference from milliseconds to days
        const differenceDays = Math.floor(differenceMs / (1000 * 60 * 60 * 24))
      
        return differenceDays
      }

    useEffect(() => {
        const days = calculateDaysAgo(data.updated_at.slice(0,10))
        setDaysAgo(days)
    },[])
    return (
        <a key={keyRepo} id={keyRepo} href={url} target="_blank">
            <div className="flex flex-col p-[20px] rounded-xl bg-gradient-to-r from-[#111729] to-[#1D1B48]">
                <span className="text-[#CDD5E0] text-[20px]">{data.name}</span>
                <span className="text-[#CDD5E0] mt-[12px] text-[16px]">{data.description}</span>
                <div className="flex mt-[20px] align-center	">
                    {
                        data.license && data.license.key  === 'mit' && (
                            <div className="mr-[12px] flex gap-[4px] text-[#CDD5E0]">
                                <img src={chield}></img>
                                <span className="text-[#CDD5E0] text-[16px]">MIT</span>
                            </div>
                        )
                    }
                    <div className="flex gap-[4px] text-[#CDD5E0]">
                        <img src={nesting}></img>
                        <span className="text-[#CDD5E0] text-[16px]">{data.forks_count}</span>
                    </div>
                    <div className=" ml-[12px] mr-[24px] flex gap-[4px] text-[#CDD5E0]">
                        <img className="text-[#CDD5E0]" src={star}></img>
                        <span className="text-[#CDD5E0] text-[16px]">{data.stargazers_count}</span>
                    </div>
                    <span className="text-[#CDD5E0] text-[12px] self-center">updated {daysAgo} days ago</span>
                </div>
            </div>
        </a>
    )
}