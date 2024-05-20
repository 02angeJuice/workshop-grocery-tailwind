import React from "react"
import Navbar from "../components/Navbar"
import Content from "../components/Content"

export default function HomePage({}) {
  return (
    <div
      style={{ backgroundImage: "url(images/image.png)" }}
      className={`min-h-screen bg-center bg-cover px-24 py-4`}
    >
      <Navbar />
      <Content />
    </div>
  )
}
