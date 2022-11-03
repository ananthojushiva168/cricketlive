import React, { useEffect, useState } from 'react'
// import image1 from "../images/IPLlogo.png"
import "./Design.css"

function Data() {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)

    const url = 'https://api.cricapi.com/v1/currentMatches?apikey=5f44977c-abe9-4b58-adf9-3dc205abbf62'


    async function fetchData() {
        try {
            var response = await fetch(url);
            var data = await response.json();
            console.log(data);
            setUsers(data) 
            setLoading(false)
        } catch (error) {
           console.log(error); 
        }
    }

    // const fetchData = () => {

    //         return response.json()
    //     }).then((data) => {
    //         let A = data
    //         console.log(A);
    //         setUsers(A)
    //         setLoading(false)
    //     })
    // }

    useEffect(() => {
        fetchData()
    },[])

    if (loading) {
        return <section className='loading'>
            <h1>Loading....</h1>
        </section>
    }

    return (
        <div className='background'>

            {users.data.map((item) => {
                const { id, name, status, venue, teamInfo: [a, b], score: [c, d] } = item

                return (
                    <div className='main-box' key={id}>
                        <div className='photo-box'>
                        <div>
                        <div className='image-box'>
                            <img src={a? a.img : ""} alt={a? a.name : "logo"} className='img-box' />
                            vs
                            <img src={b ? b.img :""} alt={b? b.name : "logo"} className='img-box' />
                        </div>
                            <p>{name}</p>
                            <p>{status}</p>

                            <p>{c ? c.inning : "Team-1"}:-{c ? c.r : "not yet bat"}/{c ? c.w : "0"}({c ? c.o : "0"})overs</p> 
                             <p>{(d ? d.inning : "Team-2")}:-{(d ? d.r : "not yet bat" )}/{d ? d.w : "0"}({d ? d.o : "0"})overs</p> 
                            <p>{venue}</p>
                            </div>
                        </div>
                    </div>
                )
            })}

            <div>
            
            <span>©Designed by Ananthoju Shiva Kumar</span>
            </div>
        </div>
    )
}


export default Data