// import React, {useState, useEffect} from 'react'
// import Header from '../Main/Header'

// import {useHistory} from "react-router-dom";
// import axios from 'axios';
// import { border } from '@mui/system';
// import Button from '@mui/material/Button';
// import { Alert } from '@mui/material';
// import { AlertTitle } from '@mui/material';
// import Sheader from '../Main/sHeader';
// import classes from "./Order.module.css"
// import { Link } from 'react-router-dom';


// const ViewArea=(props)=>{

//     const history = useHistory()   
//     const [productDetail, setproductDetail] = useState({})
//     const [roleau, setroleau] = useState ('');
//       const [userState, setUserState] = useState([]);

//       const [useremail, setuserEmail] = useState([]);

//       const [hotelname, sethotelname] = useState([]);


// const getdata = async () => {

//     const findEmail2 = localStorage.getItem('user'); 
//     // http://localhost:4000/api/allpostdata

//     // `http://localhost:4000/api/postbyemail/${useremail}`

//     // /api/allpostdata

//     const res = await fetch(`/api/allgetarea`, {
//         method: "GET",
//         headers: {
//             "Content-Type": "application/json"
//         }
        
//     });

//     const data = await res.json();
//     console.log(data, 'data');
//     setUserState(data);    

// }


// const gethotelname = async () => {
//     // http://localhost:4000/api/allpostdata

//     // `http://localhost:4000/api/postbyemail/${useremail}`
//     const findEmail = localStorage.getItem('user'); 
//     console.log(findEmail)

//     const res3 = await fetch(`/api/postbyemailsignup/${findEmail}`,{
//         method: "GET",
//         headers: {
//             "Content-Type": "application/json"
//         }
        
//     });

//     const hotel = await res3.json();
//     sethotelname(hotel[0]?.hotelname);

  
// }

// localStorage.setItem('hotel', [hotelname])  
// console.log(hotelname);

// useEffect(()=>{

//     gethotelname()
    
// }, []);


// const getrole=()=>{

//     let roleuser = localStorage.getItem('role');
  
//     setroleau(roleuser);
//     console.log(roleau, 'roleg')
  
//   }
  

// useEffect(()=>{
//     const udata = localStorage.getItem('user');    
//     setuserEmail(udata); 
    
//     getdata()



    

// }, []);


// const routeto=()=>{

//     let roleuseradmin = localStorage.getItem('role');
//            console.log(roleuseradmin, 'roleuseradmin')
    
//     if (roleuseradmin === 'Super'){
//         history.push('/viewarea')
//     }else{
//         history.push('/')
//     }
 
// }

// useEffect(() => {

//     routeto();
//     getrole();
    
    
//     }, []);


//     const [image, setImage] = useState('');
//     const [loading, setLoading] = useState(false);

// const uploadImage = async e =>{
//   const files = e.target.files
//   const data = new FormData()
//   data.append('file', files[0])
//   data.append('upload_preset', 'testforecommerce')
//   setLoading(true)

//   const res = await fetch("https://api.cloudinary.com/v1_1/fimgcloud/image/upload",
//   {
//     method: 'POST',
//     body: data
//   })

//   const file = await res.json()
//   console.log(file)

//   setImage(file.secure_url)

//   setLoading(false)

// }   






// const updatePost=(id)=>{
    
//          alert()
//         const headers = { "Content-Type": "application/json" };
//         axios.patch(`/api/areaupdate/${id}`,{
    
//                 imageURL: image,
          
     

// },{
// headers,
// })

// .then((success)=>{
// console.log('success',success)
// getdata()

// })

// .catch((err)=>{
//     console.log('error',err)

// })

// }


// ///delelte single data

// const deletedata = async (id) => {
//     // http://localhost:4000/api/allpostdata

//     const res2 = await fetch(`/api/deletearea/${id}`, {
//         method: "DELETE",
//         headers: {
//             "Content-Type": "application/json"
//         }
        
        
//     });
// alert("delete successfully")

//     // const deletepost = await res2.json();
//     // console.log(deletepost);
//     // setUserState(deletepost);
    
//     getdata()

// }



// return(

// <>
// {
           
//            (roleau === 'Admin' ? <Header />  : <Sheader />)

//     }
// <br />
// <br />

// <div className='Heading'><h1>Name: {hotelname}</h1> 
// <br />

// {/* <h1>{useremail}</h1> */}





// </div>



// <div className='MainDiva'>



// <table>
//                         <thead>
//                             <tr>
//                                 <th>S.No</th>
//                                 <th>Name</th>
//                                 <th> Image</th>
//                                 <th>ID</th>
//                                 <th> Edit</th>
//                                 <th>Update</th>
//                                 <th>Delete</th>
                               
  
                            
//                             </tr>
//                         </thead>

//                         <tbody>
            
//                             {
//                                 userState.map((element, id) => {
//                                     return (


//                                         <>
//                                             <tr>
//                                                 <th scope="row">{id + 1}</th>
                                               
//                                                 <td>{element.areaName}</td>
//                                                 <td><img src={element.imageURL} height='100px'></img></td>
//                                                 <td>{element._id}</td>
//                                                 <br />

//                     <div className="form__div">
//                     <input type="text" disabled="true" className="form__input" placeholder= "" value={productDetail.img}  onChange=  { (e)=>{setproductDetail({...productDetail, img: e.target.value})} } />
//                     <label className="form__label">Image</label>
//                 </div>

//                 <input type='file' name = 'file' onChange = {uploadImage}/>
//                 {
//       loading?( //if
//         <h3>Loading ... </h3>
//       ): ( //else

//         <img src={image} width={{width: '20px'}} />
//       )
//     }

//                                                 <td><Button sx= {{marginRight: 5}}  variant="contained" onClick={() => updatePost(element._id)}>Update</Button></td>

//                                                 <td><Button sx= {{marginRight: 5}}  variant="contained" onClick={() => deletedata(element._id)}>Delete</Button></td>
                                      

                                                
//                                             </tr>
//                                         </>
//                                     )
//                                 })
//                             }
//                         </tbody>
//                     </table>







// </div>

// {/* <div style={{ backgroundColor: "", minHeight: "100vh" }}>
//         <div className="container-xxl py-5">
//           <div className={`me-lg-4`}>
//             <div className="table-responsive px-4 pt-4">
//               <table className={`table  ${classes.table}`}>
//                 <thead className={classes.thead}>
//                   <tr>
//                     <th scope="col">S.No</th>
//                     <th scope="col">Area Name</th>
//                     <th scope="col">Area Image</th>
//                     <th scope="col">Image</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                 {
//                     userState.map((element,id)=>{
//                         return(
//                             <>
//                             <tr>
//         <td valign="middle">{id + 1}</td>
//         <td valign="middle">{element.areaName}</td>
//         <td valign="middle">{element._id}</td>
//         <td className={`${classes.item} px-2`}>
// <input type='file' name = 'file' onChange = {uploadImage}/>
//                 {
//       loading?( 
//         <h3>Loading ... </h3>
//       ): ( 

//         <img src={image} width={{width: '20px'}} />
//       )
//     }

              
//         </td>
      
//         <td onClick={() => deletedata(element._id)} className={classes.btnDelete} valign="middle"><span className="pe-1">X</span>Delete</td>
//     </tr>
//                             </>
//                         )
//                     })
//                 }
                 
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </div> */}

// </>


// )

// }

// export default ViewArea;



import React, {useState, useEffect} from 'react'
import Header from '../Main/Header'

import {useHistory} from "react-router-dom";
import axios from 'axios';
import { border } from '@mui/system';
import Button from '@mui/material/Button';
import { Alert } from '@mui/material';
import { AlertTitle } from '@mui/material';
import Sheader from '../Main/sHeader';
import classes from "./Order.module.css"
import { Link } from 'react-router-dom';


const ViewArea=(props)=>{

    const history = useHistory()   
      
    const [roleau, setroleau] = useState ('');
      const [userState, setUserState] = useState([]);

      const [useremail, setuserEmail] = useState([]);

      const [hotelname, sethotelname] = useState([]);


const getdata = async () => {

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
    setUserState(data);    

}


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


const getrole=()=>{

    let roleuser = localStorage.getItem('role');
  
    setroleau(roleuser);
    console.log(roleau, 'roleg')
  
  }
  

useEffect(()=>{
    const udata = localStorage.getItem('user');    
    setuserEmail(udata); 
    
    getdata()



    

}, []);


const routeto=()=>{

    let roleuseradmin = localStorage.getItem('role');
           console.log(roleuseradmin, 'roleuseradmin')
    
    if (roleuseradmin === 'Super'){
        history.push('/ViewArea')
    }else{
        history.push('/')
    }
 
}

useEffect(() => {

    routeto();
    getrole();
    
    
    }, []);



///delelte single data

const deletedata = async (id) => {
    // http://localhost:4000/api/allpostdata

    const res2 = await fetch(`/api/deletearea/${id}`, {
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
console.log(userState,"userState")


return(

<>
{
           
           (roleau === 'Admin' ? <Header />  : <Sheader />)

    }
<br />
<br />

{/* <div className='Heading'><h1>Name: {hotelname}</h1> 
<br />






</div> */}


<div style={{ backgroundColor: "", minHeight: "100vh" }}>
        <div className="container-xxl py-5">
          <div className={`me-lg-4`}>
            {/* <h2 className={`text-center pt-2 fw-bold`}>Order</h2> */}
            <div className="table-responsive px-4 pt-4">
              <table className={`table  ${classes.table}`}>
                <thead className={classes.thead}>
                  <tr>
                    <th scope="col">S.No</th>
                    <th scope="col">Area Name</th>
                    {/* <th scope="col">ID</th> */}
                    <th scope="col">Image</th>
                    <th scope="col">Delete</th>
                    {/* <th scope="col">productQuantity</th>
                    <th scope="col">productPrice</th> */}

                    {/* <th scope="col">productId</th>
                    <th scope="col">Image</th> */}
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
        <td valign="middle">{element.categoryName}</td>
        {/* <td valign="middle">{element._id}</td> */}
        <td className={`${classes.item} px-2`}>
<img src={element.imageURL}alt=""/> 
                {/* } */}
        </td>
        {/* <td>{element.productWeight}</td>
                                                <td>{element.qty}</td>
                                                <td>{element.productPrice}</td>

        <td  valign="middle">{element._id}</td> */}
        {/* <Link to="editcategory/${element._id}">
        <td className={classes.btn} valign="middle">{"Edit"}</td>

        </Link> */}
        <td onClick={() => deletedata(element._id)} className={classes.btnDelete} valign="middle"><span className="pe-1"></span>Delete</td>
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
                                <th>S.No</th>
                                <th>Category</th>
                                <th> Image</th>
                                <th>ID</th>
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
                                                <td>{element.categoryName}</td>
                                               
                                                <td><img src={element.imageURL} height='100px'></img></td>
                                                <td>{element._id}</td>
                                                <td><Button sx= {{marginRight: 5}}  variant="contained" href={`editcategory/${element._id}`}>Edit</Button></td>

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

export default ViewArea;
