import {useEffect, useState} from "react";

export function FirstSlide() {
  const [thingy,setThingy] = useState(true)
  const thing = <p>words</p>
  useEffect(() => {
    setInterval(() => {
      console.log('interval')
      setThingy(!thingy);
    },1000)
  },[])
  return (
    <>
      <h1>My first Slide</h1>
      {thingy?thing:undefined}
    </>
  )
}