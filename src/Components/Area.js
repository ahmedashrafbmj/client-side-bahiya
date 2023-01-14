// // import React, {useState, useEffect} from 'react'
// // import Header from './Main/Header';

// // import {useHistory} from "react-router-dom";
// // import axios from 'axios';
// // import Sheader from '../Components/Main/sHeader';



// // const Area=(props)=>{



// // const history = useHistory()
// // const [roleau, setroleau] = useState ('');
// // const [image, setImage] = useState("");
// // const [loading, setLoading] = useState(false);
// // const [area, setArea] = useState({
  
// //     areaName: "",


// // })
    

// // const uploadImage = async e =>{
// //     const files = e.target.files
// //     const data = new FormData()
// //     data.append('file', files[0])
// //     data.append('upload_preset', 'testforecommerce')
// //     data.append('areaName',area)
// //     setLoading(true)
    
  
// //     const res = await fetch("https://api.cloudinary.com/v1_1/fimgcloud/image/upload",
// //     {
// //       method: 'POST',
// //       body: data
// //     })
  
// //     const file = await res.json()
// //     console.log(file)
  
// //     setImage(file.secure_url)
  
  
// //     setLoading(false)
  
// //   }   
// //   console.log(image,"image")
  

// // const addPost=()=>{
    
// //     if(!area.areaName.trim()){
// //         alert("Enter Area");
// //         }
// //     else{

// //         const headers = { "Content-Type": "application/json" };
// //         axios.post(`/api/allpostarea`,{
// //             areaName:area.areaName,
// //             img: image,
// //             userEmail: localStorage.getItem('user'),
// //             hotelname: localStorage.getItem('hotel'),
// // },{
// // headers,
// // })

// // .then((success)=>{
// // console.log('success',success)
// // history.push('/viewarea')
// // })

// // .catch((err)=>{
// //     console.log('error',err)

// // })

// // }
      
// // }
            

// // const routeto=()=>{

// //     let roleuseradmin = localStorage.getItem('role');
// //     console.log(roleuseradmin, 'roleuseradmin')
    
// //  if (roleuseradmin === 'Super'){
// //         history.push('/area')
// //     }
    
    
// //     else{
// //         history.push('/')
// //     }
 
// // }

// // const getrole=()=>{

// //     let roleuser = localStorage.getItem('role');
  
// //     setroleau(roleuser);
// //     console.log(roleau, 'roleg')
  
// //   }

// // useEffect(() => {

// //     routeto();
// //     getrole();
    
    
// //     }, []);


// // return(

// // <>

// // {
           
// //            (roleau === 'Admin' ? <Header />  : <Sheader />)

// //     }




// // <div className='MainDiva'>


// // <div className="l-form">
// //             <form action="" className="form">
// //                 <h1 className="form__title">Add Area</h1>

// //                 <div className="form__div">
// //                     <input type="text" className="form__input" placeholder=" "   onChange=  { (e)=>{setArea({...area, areaName: e.target.value})} } />
// //                     <label className="form__label"> Area Name</label>
// //                 </div>

// //                 <input type='file' name = 'file' class="form-control-file" onChange = {uploadImage}/>
// //                 {/* <div className="form__div">
// //                     <input type="text" className="form__input" placeholder=" " onChange={ (e)=>{setcategoryDetail({...categoryDetail, imageURL: e.target.value})} } />
// //                     <label  className="form__label"> Image</label>
// //                 </div> */}



// // {
// //       loading?( //if
// //         <h3>Loading ... </h3>
// //       ): ( //else


// //         <img src={image} width={{width: '20px'}} />
// //       )
// //     }
// //                 <input type="button" className="form__button" value="Add" onClick={()=>{addPost()}} />
// //             </form>

// //         {/* <h1>{productDetail.productName}</h1>
// //         <h1>{productDetail.productPrice}</h1>
// //         <h1>{productDetail.productImage}</h1> */}

// //         </div>




     


// // </div>

// // <br/>
// // <br/>
// // <br/>
// // <br/>
// // <br/>
// // <br/>
// // <br/>

// // </>


// // )

// // }

// // export default Area;



// import React, {useState, useEffect} from 'react'
// import Header from './Main/Header';

// import {useHistory} from "react-router-dom";
// import axios from 'axios';
// import Sheader from '../Components/Main/sHeader';



// const Category=(props)=>{



// const history = useHistory()
// const [roleau, setroleau] = useState ('');
// const [categoryDetail, setcategoryDetail] = useState({
  
//   categoryName: "",
//   imageURL: ""

// })
    


// const addPost=()=>{
    
//     if(!categoryDetail.categoryName.trim()){
//         alert("Enter Category");
//         }
//     else{

//         const headers = { "Content-Type": "application/json" };
//         axios.post(`/api/allpostarea`,{
//             areaName:categoryDetail.categoryName,
//             imageURL:categoryDetail.imageURL,
//             userEmail: localStorage.getItem('user'),
//             hotelname: localStorage.getItem('hotel'),
// },{
// headers,
// })

// .then((success)=>{
// console.log('success',success)
// history.push('/Welcome2')
// })

// .catch((err)=>{
//     console.log('error',err)

// })

// }
      
// }
            

// const routeto=()=>{

//     let roleuseradmin = localStorage.getItem('role');
//     console.log(roleuseradmin, 'roleuseradmin')
    
//  if (roleuseradmin === 'Super'){
//         history.push('/Category')
//     }
    
    
//     else{
//         history.push('/')
//     }
 
// }

// const getrole=()=>{

//     let roleuser = localStorage.getItem('role');
  
//     setroleau(roleuser);
//     console.log(roleau, 'roleg')
  
//   }

// useEffect(() => {

//     routeto();
//     getrole();
    
    
//     }, []);


// return(

// <>

// {
           
//            (roleau === 'Admin' ? <Header />  : <Sheader />)

//     }




// <div className='MainDiva'>


// <div className="l-form">
//             <form action="" className="form">
//                 <h1 className="form__title">Add Category</h1>

//                 <div className="form__div">
//                     <input type="text" className="form__input" placeholder=" "   onChange=  { (e)=>{setcategoryDetail({...categoryDetail, categoryName: e.target.value})} } />
//                     <label className="form__label"> area Name</label>
//                 </div>


//                 <div className="form__div">
//                     <input type="text" className="form__input" placeholder=" " onChange={ (e)=>{setcategoryDetail({...categoryDetail, imageURL: e.target.value})} } />
//                     <label  className="form__label"> Image</label>
//                 </div>

//                 <input type="button" className="form__button" value="Add" onClick={()=>{addPost()}} />
//             </form>

//         {/* <h1>{productDetail.productName}</h1>
//         <h1>{productDetail.productPrice}</h1>
//         <h1>{productDetail.productImage}</h1> */}

//         </div>




     


// </div>

// <br/>
// <br/>
// <br/>
// <br/>
// <br/>
// <br/>
// <br/>

// </>


// )

// }

// export default Category;




import React, {useState, useEffect} from 'react'
import Header from './Main/Header';

import {useHistory} from "react-router-dom";
import axios from 'axios';
import Sheader from '../Components/Main/sHeader';



const Addarea=(props)=>{



const history = useHistory()
const [roleau, setroleau] = useState ('');
const [categoryDetail, setcategoryDetail] = useState({
  
  categoryName: "",
//   imageURL: ""

})
const [loading, setLoading] = useState(false);
const [image, setImage] = useState("");

const uploadImage = async e =>{
    const files = e.target.files
    const data = new FormData()
    data.append('file', files[0])
    data.append('upload_preset', 'testforecommerce')
    setLoading(true)
  
    const res = await fetch("https://api.cloudinary.com/v1_1/fimgcloud/image/upload",
    {
      method: 'POST',
      body: data
    })
  
    const file = await res.json()
    console.log(file.url,'file')
  
    setImage(file.url)
  
    setLoading(false)
  
  }
    


const addPost=()=>{
    
    // if(!categoryDetail.categoryName.trim()){
    //     alert("Enter Category");
    //     }
    // else

        const headers = { "Content-Type": "application/json" };
        axios.post(`/api/allpostarea`,{
            categoryName:categoryDetail.categoryName,
            imageURL:image,
            userEmail: localStorage.getItem('user'),
            hotelname: localStorage.getItem('hotel'),
},{
headers,
})


.then((success)=>{
console.log('success',success)
history.push('/viewarea')
})


.catch((err)=>{
    console.log('error',err)

})


      
}
console.log(image,'image')
            

const routeto=()=>{

    let roleuseradmin = localStorage.getItem('role');
    console.log(roleuseradmin, 'roleuseradmin')
    
//  if (roleuseradmin === 'Super'){
//         history.push('/Category')
//     }
    
    
//     else{
//         history.push('/')
//     }
 
}

const getrole=()=>{

    let roleuser = localStorage.getItem('role');
  
    setroleau(roleuser);
    console.log(roleau, 'roleg')
  
  }

useEffect(() => {

    routeto();
    getrole();
    
    
    }, []);

console.log(categoryDetail,'categoryDetail')
return(

<>

{
           
           (roleau === 'Admin' ? <Header />  : <Sheader />)

    }




<div className='MainDiva'>


<div className="l-form">
            <form action="" className="form">
                <h1 className="form__title">Add Area</h1>

                <div className="form__div">
                    <input type="text" className="form__input" placeholder=" "   onChange=  { (e)=>{setcategoryDetail({...categoryDetail, categoryName: e.target.value})} } />
                    <label className="form__label"> Area Name</label>
                </div>


                {/* <div className="form__div">
                    <input type="text" className="form__input" placeholder=" " onChange={ (e)=>{setcategoryDetail({...categoryDetail, imageURL: e.target.value})} } />
                    <label  className="form__label"> Image</label>
                </div> */}
                <input type='file' name = 'file' onChange = {uploadImage}/>
                {
      loading?( //if
        <h3>Loading ... </h3>
      ): ( //else

        <img src={image} width={{width: '20px'}} />
      )
    }

                <input type="button" className="form__button" value="Add" onClick={()=>{addPost()}} />
            </form>

        {/* <h1>{productDetail.productName}</h1>
        <h1>{productDetail.productPrice}</h1>
        <h1>{productDetail.productImage}</h1> */}

        </div>




     


</div>

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

</>


)

}

export default Addarea;
