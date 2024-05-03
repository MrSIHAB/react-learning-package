import { useEffect, useState } from "react"
import MemeCard from "../components/Card"
import { getAllMemes } from "../apis"

const Homepage = ()=>{

    const [data, setData] = useState([])

    useEffect(()=>{
        getAllMemes().then(memes => setData(memes.data.memes))
    },[])


    return (
        <div className="memesContainer row">
            {
                data.map(elem => <MemeCard img={elem.url} title={elem.name} />)
            }
        </div>
    )
}

export default Homepage