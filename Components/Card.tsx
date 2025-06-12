'use client'
import { error } from 'console'
import { useEffect, useState } from 'react'
interface Data{
name:string,
points:number,
image?:string,
link:string
}
type DataGroup = {
    [key: string]: Data[]
}

export function Card(){
    const [content,setContent] = useState<DataGroup>({})
    console.log(content)
    useEffect(()=>{
        fetch("/content.json")
        .then((res)=>res.json())
        .then((data)=>setContent(data))
        .catch((err)=>{console.error("The Fetch is failed")})
    },[])
    console.log(content.toString())
    return(
        <div>
            {Object.entries(content).map(([groupName , alternatives])=>(
                <div>
                    <div className='text-white'>{groupName}</div>
                    {alternatives.map((alter)=>
                    (
                        <div key={alter.name} className='text-white'>
                            {alter.name}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}