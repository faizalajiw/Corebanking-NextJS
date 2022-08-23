import React from 'react'
import { FaStar } from 'react-icons/fa'
export const TestimoniCard = ({image, name, job, review, star}) => {
  return (
    <div>
        <div className="bg-grey w-80 h-auto rounded-xl flex-row px-6 py-5">
            <div className="container flex items-center mb-6">
                <img src={image} className=" pr-4"/>
                <div className="container">
                    <h4 className="text-black text-lg font-bold">{name}</h4>
                    <p className="text-black text-xs">{job}</p>
                </div>
            </div>
            <div className="container text-black text-base leading-7 mb-6">
                <p>{review}</p>
            </div>
            <div className="container flex gap-1">
                {Array(star).fill(0).map(() => (
                    <FaStar className=" text-yellow-400 text-2xl"/>
                ))}
            </div>
        </div>
    </div>
  )
}
