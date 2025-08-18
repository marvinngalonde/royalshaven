import React from "react"
import { Button } from "@/components/ui/button"
import comfortableRooms from "@/assets/comfortable-rooms.jpg";

const features = [
  { number: "10+", label: "Restaurant" },
  { number: "05+", label: "Gym" },
  { number: "03+", label: "Beach" },
  { number: "115", label: "Rooms" },
]

export default function ReasonToStay() {
  return (
    <section className="relative bg-white py-12 px-4 md:px-16 flex flex-col lg:flex-row items-center justify-between gap-10">
      {/* Left Content */}
      <div className="max-w-xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Top Reasons <span className="text-blue-500">to Stay</span>
        </h2>
        <p className="text-gray-600 mb-6 leading-relaxed">
          We provide best quality service for you. You can enjoy your all kind of pleasures in one place. If you want, we are always ready to serve our clients. We provide best quality service for you, so you can enjoy all kind of pleasures.
        </p>
        <Button>Read More</Button>

        {/* Features */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-8">
          {features.map((item, index) => (
            <div key={index} className="text-center">
              <div className="text-xl font-bold text-blue-600">{item.number}</div>
              <div className="text-sm text-gray-700">{item.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Image */}
      <div className="relative rounded-lg overflow-hidden shadow-md">
        <img
          src={comfortableRooms}  // Put your image in public folder or use full URL
          alt="Hotel Room"
          className="w-[500px] h-[320px] object-cover rounded-lg"
        />
        {/* Background blobs */}
        <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-300 rounded-full opacity-60 -z-10" />
        <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-blue-100 rounded-full opacity-60 -z-10" />
      </div>
    </section>
  )
}
