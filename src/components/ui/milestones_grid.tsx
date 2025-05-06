import React from 'react'
import { CounterAnimation } from "@/utils/counter_animation";


const MilestoneGrid = () => {
    const motionSpeed = false;
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
                <div className="text-2xl md:text-4xl font-heading leading-tight tracking-tight font-bold">
                    {motionSpeed ?
                        <span>
                            100
                        </span> : <CounterAnimation from={0} to={100} suffix=" %" />}
                </div>
                <div className="text-xl xl:text-2xl font-heading max-w-full mt-2">
                    <h3>Built Success</h3>
                </div>
                <div className="mt-2 text-neutral-600 font-normal">
                    <p>Our team has successfully crafted numerous signature Apparels.</p>
                </div>
            </div>

            <div>
                <div className="text-2xl md:text-4xl font-heading leading-tight tracking-tight font-bold">
                    {motionSpeed ?
                        <span>
                            100
                        </span> : <CounterAnimation from={0} to={100} suffix=" %" />}
                </div>
                <div className="text-xl xl:text-2xl font-heading max-w-full mt-2">
                    <h3>Client Satisfaction</h3>
                </div>
                <div className="mt-2 text-neutral-600 font-normal">
                    <p>At the heart of our approach is a focus on Customer.</p>
                </div>
            </div>

            <div>
                <div className="text-2xl md:text-4xl font-heading leading-tight tracking-tight font-bold">
                    {motionSpeed ?
                        <span>
                            200
                        </span> : <CounterAnimation from={0} to={200} suffix=" +" />}
                </div>
                <div className="text-xl xl:text-2xl font-heading max-w-full mt-2">
                    <h3>Apparels Mastery</h3>
                </div>
                <div className="mt-2 text-neutral-600 font-normal">
                    <p>We believe that the comfort of our customers is essential.</p>
                </div>
            </div>

            <div>
                <div className="text-2xl md:text-4xl font-heading leading-tight tracking-tight font-bold">
                    {motionSpeed ?
                        <span>
                            20
                        </span> : <CounterAnimation from={0} to={20} suffix=" +" />}
                </div>
                <div className="text-xl xl:text-2xl font-heading max-w-full mt-2">
                    <h3>Professional History</h3>
                </div>
                <div className="mt-2 text-neutral-600 font-normal">
                    <p>Our team brings a wealth of knowledge in the industry</p>
                </div>
            </div>
        </div>
    )
}

export default MilestoneGrid