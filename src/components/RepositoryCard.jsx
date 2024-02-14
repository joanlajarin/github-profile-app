import React from "react"
import nesting from '../images/Nesting.svg' 
import star from '../images/Star.svg' 

export default function RepositoryCard(){
    return (
        <div className="flex flex-col p-[20px] rounded-xl bg-gradient-to-r from-[#111729] to-[#1D1B48]">
            <span className="text-[#CDD5E0] text-[20px]">.github</span>
            <span className="text-[#CDD5E0] mt-[12px] text-[16px]">Community health files for the @GitHub organization</span>
            <div className="flex mt-[20px] align-center	">
                <div className="flex gap-[4px] text-[#CDD5E0]">
                    <img src={nesting}></img>
                    <span className="text-[#CDD5E0] text-[16px]">2,369</span>
                </div>
                <div className=" ml-[12px] mr-[24px] flex gap-[4px] text-[#CDD5E0]">
                    <img className="text-[#CDD5E0]" src={star}></img>
                    <span className="text-[#CDD5E0] text-[16px]">703</span>
                </div>
                <span className="text-[#CDD5E0] text-[12px] self-center">updated 4 days ago</span>
            </div>
        </div>
    )
}