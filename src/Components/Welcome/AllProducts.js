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
// import "./Welcome.css"

const AllProducts=({data})=>{
    console.log(data,"dataprop")
    
    const history = useHistory()   
    
    const [roleau, setroleau] = useState ('');
    const [userState, setUserState] = useState([]);
    const [userState1, setUserState1] = useState([]);
    const [userState2, setUserState2] = useState([]);
    const [userState3, setUserState3] = useState([]);
    
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
        console.log(data);
        setUserState3(data);    
    
    }
    
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



    

}, []);


const routeto=()=>{

    let roleuseradmin = localStorage.getItem('role');
           console.log(roleuseradmin, 'roleuseradmin')

 
}

useEffect(() => {

    routeto()
    getrole()
    
    
    }, []);


const update = (e)=>{
    history.push(`/Edit/${e}`)

}
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



{/* <div className='Heading'><h1>Name: {hotelname}</h1> 
<br />







</div> */}


<div style={{ backgroundColor: "",fontFamily:"cursive", minHeight: "100vh" }}>
        <div className="container-xxl py-5">
          <div className={`me-lg-4`}>
            {/* <h2 className={`text-center pt-2 fw-bold`}>Order</h2> */}
            <div className="table-responsive px-4 pt-4">
              <table className={`table  ${classes.table}`}>
                <thead className={classes.thead}>
                  <tr>
                    <th scope="col">S.No</th>
                    <th scope="col">productTitle</th>
                    <th scope="col">productName</th>
                    <th scope="col">productWeight</th>
                    <th scope="col">productQuantity</th>
                    <th scope="col">productPrice</th>

                    {/* <th scope="col">productId</th> */}
                    <th scope="col">Image</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {/* {
                    Orders.map((item)=>(
                      <OrderItem item={item}/>
                    ))
                  } */}
                {
                    userState.map((element,id)=>{
                        return(
                            <>
                            <tr>
        <td valign="middle">{id + 1}</td>
        <td valign="middle">{element.productTitle}</td>
        <td valign="middle">{element.productName}</td>
        {/* <a> */}
        {/* <td valign="middle">{"Edit"}</td> */}

        {/* </a> */}

                {/* <Link to={`Edit/${element._id}`}>
        <td className={`classes.btn`} valign="middle">{"Edit"}</td>

        </Link> */}

        <td>{element.productWeight}</td>
                                                <td>{element.qty}</td>
                                                <td>{element.productPrice}</td>

        {/* <td  valign="middle">{element._id}</td> */}
        <td className={`${classes.item} px-2`}>
<img src={element.imageURL}alt=""/> 
                {/* } */}
        </td>
        <td onClick={() => deletedata(element._id)} className={`${classes.btnDelete} mt-4`} valign="middle">Delete</td>
        <td onClick={() => update(element._id)} className={`${classes.btn} mt-4`} valign="middle">Edit</td>
    </tr>
                            </>
                        )
                    })
                }
                 
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
{/* <div className='MainDiva'>



<table>
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>Category</th>
                                <th>Title</th>
                                <th>Weight</th>
                                <th> Qty</th>
                                <th> Price</th>
                                <th> Image</th>
                                <th> Seller Info</th>
                                <th>Product ID</th>
                                <th>Edit</th>
                                <th>Delete</th>
                               
  
                            
                            </tr>
                        </thead>

                        <tbody>
            
                            {
                                userState.map((element, id) => {
                                    return (


                                        <>
                                            <tr>
                                                <th scope="row">{id + 1}</th>
                                                <td>{element.productName}</td>
                                                <td>{element.productTitle}</td>
                                                <td>{element.productWeight}</td>
                                                <td>{element.qty}</td>
                                                <td>{element.productPrice}</td>
                                               
                                                <td><img src={element.imageURL} height='100px'></img></td>

                                                <td>{element.hotelname}
                                                <br />
                                                {element.userEmail}
                                                </td>

                                                <td>{element._id}</td>
                                                <td><Button sx= {{marginRight: 5}}  variant="contained" href={`Edit/${element._id}`}>Edit</Button></td>

                                                <td><Button sx= {{marginRight: 5}}  variant="contained" onClick={() => deletedata(element._id)}>Delete</Button></td>
                                      

                                                
                                            </tr>
                                        </>
                                    )
                                })
                            }
                        </tbody>
                    </table>







</div> */}

</>


)

}

export default AllProducts;
