import { useEffect, useState } from 'react'
interface Data{
name:string,
points:number,
image?:string,
link:string
}
const [content,setContent] = useState<Data[]>([])
export function Card(){
    console.log(content)
    useEffect(()=>{
        fetch("/content.json")
        .then((res)=>res.json())
        .then((data)=>setContent(data))
    },[])
    console.log(content)
    return(
        <section>
             
        </section>
    )
}