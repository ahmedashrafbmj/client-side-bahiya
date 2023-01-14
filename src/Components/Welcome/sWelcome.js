import React, {useState, useEffect,useContext} from 'react'
import Header from '../Main/Header'
import Sheader from '../Main/sHeader'

import {useHistory} from "react-router-dom";
import axios from 'axios';
import { border } from '@mui/system';
import Button from '@mui/material/Button';
import { Alert } from '@mui/material';
import { AlertTitle } from '@mui/material';
import classes from './Order.module.css';
import { Link } from 'react-router-dom';
import "./Welcome.css"

const Welcome2=({data})=>{
    console.log(data,"dataprop")
    
    const history = useHistory()   
    
    const [roleau, setroleau] = useState ('');
    const [userState, setUserState] = useState([]);
    const [userState1, setUserState1] = useState([]);
    const [userState2, setUserState2] = useState([]);
    const [userState3, setUserState3] = useState([]);
    const [userState4, setUserState4] = useState([]);
    
    const [useremail, setuserEmail] = useState([]);
    
    const [hotelname, sethotelname] = useState([]);
    const getdata3 = async () => {

        const findEmail2 = localStorage.getItem('user'); 
        // http://localhost:4000/api/allpostdata
    
        // `http://localhost:4000/api/postbyemail/${useremail}`
    
        // /api/allpostdata
    
        const res = await fetch(`/api/allgetcategory`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
            
        });
    
        const data = await res.json();
        console.log(data,"datacater");
        setUserState3(data);    
    
    }
    console.log(userState3,"userState3")
    const getdata = async () => {
        
        const findEmail2 = localStorage.getItem('user'); 
        // http://localhost:4000/api/allpostdata

    // `http://localhost:4000/api/postbyemail/${useremail}`

    // /api/allpostdata

    const res = await fetch(`/api/allpostdata`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
        
    });

    const data = await res.json();
    console.log(data);
    setUserState(data);    
    
}
const getdata2 = async () => {


    const res = await fetch(`/api/allsignup`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
        
    });

    const data = await res.json();
    console.log(data);
    setUserState1(data); 

}


const getdata1 = async () => {


    const res = await fetch(`/api/allpostbook`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
        
    });

    const data = await res.json();
    console.log(data);
    setUserState2(data); 

}
const getdata4 = async () => {

    const findEmail2 = localStorage.getItem('user'); 
    // http://localhost:4000/api/allpostdata

    // `http://localhost:4000/api/postbyemail/${useremail}`

    // /api/allpostdata

    const res = await fetch(`/api/allgetarea`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
        
    });

    const data = await res.json();
    console.log(data,'data');
    setUserState4(data);    

}

const PetDataContext = useContext(userState)
console.log(PetDataContext,"usecontextdata")

const gethotelname = async () => {
    // http://localhost:4000/api/allpostdata

    // `http://localhost:4000/api/postbyemail/${useremail}`
    const findEmail = localStorage.getItem('user'); 
    console.log(findEmail)

    const res3 = await fetch(`/api/postbyemailsignup/${findEmail}`,{
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
        
    });

    const hotel = await res3.json();
    sethotelname(hotel[0]?.hotelname);

  
}

localStorage.setItem('hotel', [hotelname])  
console.log(hotelname);

useEffect(()=>{

    gethotelname()
    
}, []);


     

useEffect(()=>{
    const udata = localStorage.getItem('user');    
    setuserEmail(udata); 
    
    getdata()
    getdata1()
    getdata2()
    getdata3()
    getdata4()



    

}, []);


const routeto=()=>{

    let roleuseradmin = localStorage.getItem('role');
           console.log(roleuseradmin, 'roleuseradmin')
    
    if (roleuseradmin === 'Admin'){
        history.push('/welcome')
    }

    else if (roleuseradmin === 'Super'){
        history.push('/welcome2')
    }
    
    else{
        history.push('/')
    }
 
}

useEffect(() => {

    routeto()
    getrole()
    
    
    }, []);



///delelte single data

const deletedata = async (id) => {
    // http://localhost:4000/api/allpostdata

    const res2 = await fetch(`/api/deletepost/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
        
        
    });
alert("delete successfully")

    // const deletepost = await res2.json();
    // console.log(deletepost);
    // setUserState(deletepost);
    
    getdata()
  

}

const getrole=()=>{

    let roleuser = localStorage.getItem('role');

    setroleau(roleuser);
    console.log(roleau, 'roleg')


}


return(

<>

{
           
           (roleau === 'Admin' ? <Header />  : <Sheader />)

    }
    
   <div className="row mt-5 mx-5">
        <div className="col-xl-3 col-lg-6">
          <div className="card l-bg-style1" onClick={()=> history.push('/AllOrderUsers')}>
            <div className="card-statistic-3">
              <div className="card-icon card-icon-large"><i className="fa fa-award" /></div>
              <div className="card-content">
                <h4 className="card-title">New Orders</h4>
                {/* <span>{userState2.length}</span> */}
                {/* s */}
                <p className="mb-0 text-sm">
                  <span className="mr-2"><i className="fa fa-arrow-up" /> {userState2.length}%</span>
                  <span className="text-nowrap">Since last month</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-6" onClick={()=> history.push('/allUsers')}>
          <div className="card l-bg-style2">
            <div className="card-statistic-3">
              <div className="card-icon card-icon-large"><i className="fa fa-briefcase" /></div>
              <div className="card-content">
                <h4 className="card-title">All Users</h4>
                {/* <span>{userState1.length}</span> */}
               
                <p className="mb-0 text-sm">
                  <span className="mr-2"><i className="fa fa-arrow-up" /> {userState1.length}%</span>
                  <span className="text-nowrap">Since last month</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-6" onClick={()=> history.push('/AllProduct')}>
          <div className="card l-bg-style3">
            <div className="card-statistic-3">
              <div className="card-icon card-icon-large"><i className="fa fa-globe" /></div>
              <div className="card-content">
                <h4 className="card-title">Total Products</h4>
                {/* <span>{userState?.length}</span> */}
              
                <p className="mb-0 text-sm">
                  <span className="mr-2"><i className="fa fa-arrow-up" /> {userState?.length}%</span>
                  <span className="text-nowrap">Since last month</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-6" onClick={()=> history.push('/viewcategory')}>
          <div className="card l-bg-style4">
            <div className="card-statistic-3">
              <div className="card-icon card-icon-large"><i className="fa fa-money-bill-alt" /></div>
              <div className="card-content">
                <h4 className="card-title">All Categorires</h4>
                {/* <span>{userState3.length}</span> */}
                {/* <div className="progress mt-1 mb-1" data-height={8}>
                  <div className="progress-bar l-bg-green" role="progressbar" data-width="25%" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                </div> */}
                <p className="mb-0 text-sm">
                  <span className="mr-2"><i className="fa fa-arrow-up" /> {userState3.length}%</span>
                  <span className="text-nowrap">Since last month</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-6" onClick={()=> history.push('/ViewArea')}>
          <div className="card l-bg-style4">
            <div className="card-statistic-3">
              <div className="card-icon card-icon-large"><i className="fa fa-money-bill-alt" /></div>
              <div className="card-content">
                <h4 className="card-title">All Areas</h4>
                {/* <span>{userState4.length}</span> */}
                {/* <div className="progress mt-1 mb-1" data-height={8}>
                  <div className="progress-bar l-bg-green" role="progressbar" data-width="25%" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                </div> */}
                <p className="mb-0 text-sm">
                  <span className="mr-2"><i className="fa fa-arrow-up" /> {userState4.length}%</span>
                  <span className="text-nowrap">Since last month</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      








</>


)

}

export default Welcome2;
