import { Home } from 'lucide-react'
import React, { useState } from 'react'

const GlassButton = () => {

    const [current,setCurrent] = useState("")

    const color = 
 [
  {
    "id": 1,
    "name": "Ocean Blue",
    "color": "#00aeff62",
    "category": "blue",
    "text":"#a0a0a0",
  },
  {
    "id": 2,
    "name": "Forest Green", 
    "color": "#8affb762",
    "category": "green",
     "text":"#a0a0a0"
  },
  {
    "id": 3,
    "name": "Sunset Orange",
    "color": "#ffe88a62",
    "category": "orange",
     "text":"#a0a0a0",
  },
  {
    "id": 4,
    "name": "Berry Pink",
    "color": "#ff79eb62",
    "category": "pink",
     "text":"#a0a0a0",
  }
]


const handleColor = (item)=>{
    setCurrent(item)
    console.log(item)

}
  return (
    <div className='h-screen bg-[#e0e0e0] flex  flex-col items-center  gap-5 justify-evenly'>
      
      <div className="glass h-[150px] w-[150px] rounded-[40px] bg-gradient-to-b from-white via-black to-white flex items-center justify-center">
        <div className="h-[140px] w-[145px] rounded-[40px] bg-[#cdcdcd] backdrop-blur-lg flex items-center justify-center " style={{backgroundColor:current.color,color:current.text}}>
            <Home size={75}/>
        </div>
      </div>


<div className="flex items-center justify-center gap-3 rounded-full border-black/30 shadow-black shadow-md border-[5px] px-1 py-3">


      {color.map((item,index)=>(
        <div className={`h-[50px] w-[50px] shadow-md shadow-black rounded-full flex items-center justify-center ${item.id === current.id ? "border-black border-[1px]" :""}`} style={{backgroundColor:item.color}} onClick={()=>handleColor(item)}>{item.id}</div>
      ))}
    </div>
</div>
  )
}

export default GlassButton
