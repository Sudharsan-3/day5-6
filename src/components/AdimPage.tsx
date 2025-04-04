import React from "react"
import {TaskCreateEdit} from "./TaskCreateEdit"


const AdimPage = () => {
  return (
    <div className="bg-blue-1 h-screen">
      <div className="flex justify-center p-5">
              <h1>Welcom to admin Dashboard</h1>
      </div>
      <div>
        
    <TaskCreateEdit />
        
        </div>    


    </div>
  )
}

export default AdimPage
