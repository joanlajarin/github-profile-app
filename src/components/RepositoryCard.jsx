import React, { useEffect } from "react"
import nesting from '../images/Nesting.svg' 
import star from '../images/Star.svg' 

export default function RepositoryCard({keyRepo, data, user}){

    const url =  `https://github.com/${user}/${data.name}`

    return (
        <a key={keyRepo} id={keyRepo} href={url} target="_blank">
            <div className="flex flex-col p-[20px] rounded-xl bg-gradient-to-r from-[#111729] to-[#1D1B48]">
                <span className="text-[#CDD5E0] text-[20px]">{data.name}</span>
                <span className="text-[#CDD5E0] mt-[12px] text-[16px]">{data.description}</span>
                <div className="flex mt-[20px] align-center	">
                    <div className="flex gap-[4px] text-[#CDD5E0]">
                        <img src={nesting}></img>
                        <span className="text-[#CDD5E0] text-[16px]">{data.forks_count}</span>
                    </div>
                    <div className=" ml-[12px] mr-[24px] flex gap-[4px] text-[#CDD5E0]">
                        <img className="text-[#CDD5E0]" src={star}></img>
                        <span className="text-[#CDD5E0] text-[16px]">{data.stargazers_count}</span>
                    </div>
                    <span className="text-[#CDD5E0] text-[12px] self-center">{data.updated_at}</span>
                </div>
            </div>
        </a>
    )
}