
import React, { useEffect, useState } from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HeightIcon from '@mui/icons-material/Height';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import Person2Icon from '@mui/icons-material/Person2';
import { NavLink, useParams,useHistory } from 'react-router-dom'
import Navbbar from "./Navbbar"
const UserDetails = () => {

    const history = useHistory("");


    const [getuserdata, setDiseasedata] = useState({});
    console.log("dsdsds ",getuserdata);

    const { token } = useParams("token");
    //alert(token);


    const getdata = async () => {

        const res = await fetch(`/api/user/profile/${token}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await res.json();
        console.log(data);

        if (res.status === 422 || !data) {
            console.log("error ");

        } else {
            setDiseasedata(data.user)
            console.log("get data");
        }
    }

    useEffect(() => {
        getdata();
    }, [])

 


return (
    <>
    <Navbbar />
    <div className="container mt-3">
            <Card sx={{ maxWidth: 800 }}>
                <CardContent>
                    <div className="add_btn" align="right">
                    <NavLink to={`/enterudata/${token}`}> <button className="btn btn-primary" >edit</button></NavLink>
                    </div>
                    <br></br>
                    <div className="add_btn" align="right">
                    <NavLink to={`/imageadd/${token}`}> <button className="btn btn-primary" >change image</button></NavLink>
                    </div>
                    <div className="row">
                        <div className="left_view col-lg-6 col-md-6 col-12">
                            <img src={getuserdata.url} style={{ width: 150 }} alt="profile" />
                            <h3 className="mt-3"><Person2Icon/>Name: <span >{getuserdata.name}</span></h3>
                            <h3 className="mt-3"><MailOutlineIcon /> email: <span >{getuserdata.email}</span></h3>
                            <h3 className="mt-3"><PhoneAndroidIcon/>phoneno: <span >{getuserdata.phoneno}</span></h3>
                            <h3 className="mt-3">age: <span >{getuserdata.age}</span></h3>
                            <h3 className="mt-3"><FitnessCenterIcon/>weight: <span >{getuserdata.weight}</span></h3>
                            <h3 className="mt-3"><HeightIcon/>height: <span >{getuserdata.height}</span></h3>
                            <h3 className="mt-3"><LocationOnIcon />address: <span >{getuserdata.address}</span></h3>
                            <h3 className="mt-3"><LocationCityIcon/>city: <span >{getuserdata.city}</span></h3>
                            
                            
                        </div>
                        
                    </div>

                </CardContent>
            </Card>
        </div>
        </>
  )
}

export default UserDetails