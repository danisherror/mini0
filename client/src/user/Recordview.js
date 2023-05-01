import React, { useState, useEffect } from 'react'
// https://mui.com/material-ui/material-icons/?query=dele
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { NavLink, useParams, useHistory } from 'react-router-dom'
import Navbbar from "./Navbbar"


const Recordview = () => {


    const [getdiseasedata, setDiseasedata] = useState([]);
    console.log("----------------");
    console.log("Array Size " + getdiseasedata?.length)
    const urlarr = [];
    for (let i = 0; i < getdiseasedata?.length; i++) {
        console.log(getdiseasedata[i]?.url)
        urlarr.push(getdiseasedata[i]?.url)
    }
    // console.log("url aray "+getdiseasedata[0]?.url);

    console.log("----------------");
    const { token } = useParams("token");
    const getdata = async () => {

        const res = await fetch(`/api/record/recordview/${token}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await res.json();


        if (res.status === 422 || !data) {
            alert("no record found");

        } else {
            setDiseasedata(data)
            console.log("get data");

        }
    }

    useEffect(() => {
        getdata();
    }, [])


    // const Headings = () => {
    //     const headings = urlarr.map((hero, index)=>

    //       <img src={hero} style={{ width: 150 }} alt="profile" />

    //       )

    //     return <header>{headings}</header>
    //   }


    return (
        <>
            <Navbbar />
            <div>The List contains:</div>
            {/* <Headings /> */}
            <table class="table table-bordered table-hover">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">immage</th>
                        <th scope="col">url</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        urlarr.map((element, id) => {
                            return (
                                <>
                                    <tr>
                                        
                                    {/* style={{ width: 150, height:150 }} */}
                                    
                                        <td > <img src={element}   style={{ width: 150, height:150 }}alt="profile" />
                                        </td>
                                        
                                        <td><a href={element}>full report</a></td>

                                    </tr>
                                </>
                            )
                        })
                    }
                </tbody>
            </table>
            

        </>
    )
}

export default Recordview