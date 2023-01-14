import React, {useState, useEffect} from 'react'
import HomeNavbar from './HomeNavbar';
import { Link, useHistory } from 'react-router-dom';
import UserNavbar from './UserNavbar';
import { Button, Card, Container, Row, Col, Carousel } from 'react-bootstrap';
import banner1 from '../images/banner1.jpg'
import banner2 from '../images/banner2.jpg'
import { useDispatch } from 'react-redux';
import {add} from '../../store/orderslice';
// import { add } from '../../store/cartSlice';
import { addToCart } from "../../store/cartSlice";

import loadingimg from '../images/loading.gif'
import Products from '../Products'
import ImageSlider from './ImageSlider';
import "./index.css"







const Home=(props)=>{
 


    const history = useHistory()



const [loading, setLoading] = useState(false);
const [roleau, setroleau] = useState ('');

const [areaData, setAreaData] = useState (['']);

const [SliderData, setSliderData] = useState([0])

useEffect(() => {
  fetchCarousel()
  
}, []);

    document.title = "Home -  Shop Hub";
  
      const [hotel, setHotel] = useState([]);

      const [category, setCategory] = useState([]);
      const [subcategory, setsubCategory] = useState([]);
      const [categoryCount, setCategoryCount] = useState([]);
      const [subcategoryCount, setsubCategoryCount] = useState([]);
      const [accountStatus, setAccountStatus] = useState([]);

      const dispatch = useDispatch();

      const [products, setProducts] = useState([]);
      const [orders, setOrders] = useState([]);

      const getdata = async () => {

        const findEmail2 = localStorage.getItem('user'); 
    
        const res = await fetch(`/api/allbookbyemail/${findEmail2}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
            
        });
    
        const data = await res.json();
        console.log(data[4].cartItems[0].hotelname, 'obj');
        setOrders(data); 
        
       
     
    }
    

    //   useEffect(() => {
    
    //     const fetchHotels = async () => {
    //         setLoading(true)
    //         const res = await fetch('/api/allpostdata');

    //         const data = await res.json();
    //         console.log(data);
        
    //         setHotel(data);

          
    //         setLoading(false)
    //     };
        
    //     fetchHotels()

    // }, []);

    const getroleauth = async () => {
    
        let femail = localStorage.getItem('user');
    
        const res3 = await fetch(`/api/postbyemailsignup/${femail}`,{
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
            
        });
    
    
       
        const role = await res3.json();
    
        setAccountStatus(role[0]?.accountsstatus)
    
        console.log(role[0]?.accountsstatus, 'status')

        localStorage.setItem('accountstatus', [accountStatus]);
    
    
    }
    


    useEffect(() => {
        // getroleauth()
        getdata()

        

        const fetchProducts = async () => {
            const res = await fetch('/api/allpostdata');
            const data = await res.json();
            console.log(data, "data");
            setProducts(data);
        };
        fetchProducts();
      
    }, [accountStatus]);





    const handleAdd = (product) => {
        dispatch(addToCart(product));
        // history.push("/cart");
    };  

    useEffect(() => {

        const fetcharea = async () => {
            const res = await fetch(`/api/allgetarea`);
    
            const dataarea = await res.json();
            console.log(dataarea);
        
            setAreaData(dataarea);
         
        };
        
        fetcharea()
    
    }, []);

    useEffect(() => {

       
        const fetchCategory = async () => {
            const res = await fetch(`/api/allgetcategory`);

            const datacategory = await res.json();
            console.log(datacategory);

            const countCategory =   datacategory.length;
        
            setCategory(datacategory);

            setCategoryCount(countCategory)
            
            console.log(countCategory, 'category count')
         
        };
        
        fetchCategory()

    }, [accountStatus]);


    useEffect(() => {

        const fetchsubCategory = async () => {
            const res = await fetch('/api/allgetsubcategory');

            const datasubcategory = await res.json();
            console.log(datasubcategory);
            const countsubCategory =   datasubcategory.length;
        
            setsubCategory(datasubcategory);   
            setsubCategoryCount(countsubCategory)

            console.log(countsubCategory, 'subcategory count')
         
        };
        
        fetchsubCategory()
        // fetchCarousel()

    }, []);


    const fetchCarousel = async () => {
        const res = await fetch('/api/allgetcarousel');

        const datacarousel = await res.json();
        
        console.log(datacarousel, 'carousel');
    
        setSliderData(datacarousel);  
     
    };
    



    console.log(products, "products")
const getrole=()=>{

    let roleuser = localStorage.getItem('role');

    setroleau(roleuser);
    console.log(roleau, 'roleg')


}


useEffect(() => {
takeorder()
getrole()

// console.log(roleau, 'getroleuseeffect')

}, [accountStatus]);


const routeto=()=>{
    
    

    let roleuseradmin = localStorage.getItem('role');
    console.log(roleuseradmin, 'roleuseradmin')

    const roleua3 = localStorage.getItem('accountstatus'); 
    
    if (roleuseradmin === 'User'){
        history.push('/')
    }
    
    else if (roleuseradmin === 'Admin'){
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
    
    
    }, [accountStatus]);
    

    const takeorder = (orders) => {
        dispatch(add(orders));
      };


    return (

      
        <>
        
        <marquee  behavior="" direction="left">Ab kisi bhi market ki koi bhi ghomain  ghar baythay 13 karachi par</marquee>

        {
           
               (roleau === 'User' ? <UserNavbar />  : <HomeNavbar />)

        }

    {/* <div classname="row">
    {category.map((category) => (
             

            <Row>
             <Col>                    
             <Card style={{ width: '18rem' }}>
             <Card.Img variant="top" src={category.imageURL}/>
                 <Card.Body>
                     <Card.Title>{category.categoryName} </Card.Title>
                   

                     <Button  variant="primary" href={`ShowGallery/${category.categoryName}`}> Show Products By Category</Button>
                 
                 </Card.Body>
                 </Card>
                 <br />
                 </Col>
    </Row>
                               
     ))}
    </div> */}

{/* <ImageSlider slides = {SliderData} />
    

    <h1>All Category Total: ({categoryCount})</h1>
    <Container>
      <Row>

          
            {category.map((category) => (
             

            
                    <Col>                    
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={category.imageURL}/>
                        <Card.Body>
                            <Card.Title>{category.categoryName} </Card.Title>
                          

                            <Button  variant="primary" href={`ShowGallery/${category.categoryName}`}> Show Products By Category</Button>
                        
                        </Card.Body>
                        </Card>
                        <br />
                        </Col>
         
                        
            ))}
      
            </Row>
      </Container> */}

    <h1 class="text-center" style={{fontFamily:"cursive",fontWeight:"bold"}}> <u class="text-center" style={{fontFamily:"cursive",fontWeight:"bold"}}>All Areas:</u> </h1>
    <Container>
      <Row>

          
            {areaData.map((category) => (
             

            
                    <Col>                    
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={category.imageURL}/>
                        <Card.Body>
                            <Card.Title>{category.categoryName} </Card.Title>
                          

                            <Button  variant="primary" href={`ShowMarket/${category.categoryName}`}> Show Market</Button>
                        
                        </Card.Body>
                        </Card>
                        <br />
                        </Col>
         
                        
            ))}
      
            </Row>
      </Container>

  
        
        <br />
        <br />
        <br />




        <br />
    <br />
    <br />
    <br />

  
        
        <br />
        <br />
        <br />












        {/* <h1>All Sub Category Total: ({subcategoryCount})</h1>
    <br />
    <br />
    <Container>
      <Row>

          
            {subcategory.map((subcategory) => (
             

            
                    <Col>                    
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={'https://t3.ftcdn.net/jpg/04/34/72/82/360_F_434728286_OWQQvAFoXZLdGHlObozsolNeuSxhpr84.jpg'}/>
                        <Card.Body>
                            <Card.Title>{subcategory.subcategoryName} </Card.Title>
                          

                            <Button  variant="primary" href={`ShowSub/${subcategory.subcategoryName}`}> Show Products</Button> 
                        </Card.Body>
                        </Card>
                        <br />
                        </Col>
         
                        
            ))}
      
            </Row>
      </Container>

  
        
        <br />
        <br />
        <br /> */}
        {/* <h1>All Products</h1>
        
        <br />
        <br /> */}

        {/* {
      loading?( 
        <img src={loadingimg} />
      ): ( 


     <Container>
      <Row>

          
            {products.map((product) => (
             

            
                    <Col>                    
                    <Card style={{ width: '18rem' }} >

                    <Link to={`Details/${product._id}`}> 
                
                    <Card.Img variant="top"  src={product.imageURL} />

                    </Link>

                        <Card.Body>
                            <Card.Title><h4>{product.productTitle}</h4></Card.Title>
                            
                            {
                            
                           (product.productwasPrice === null)

                            ? (product.productwasPrice === "" || `Rs.${product.productPrice}/-`) 
                           
                            
                            :
                            
                            <Card.Text>

                            <h4><b>Rs.{product.productPrice}/- &nbsp; <del>Rs.{product.productwasPrice}/-</del></b></h4>
                    
                 

                            </Card.Text>
                        }
                            <br />
                           
                            <Button  variant="primary" onClick={() => handleAdd(product)}>Add to Cart</Button> 
                         
                        </Card.Body>
                        </Card>
                        <br />
                        </Col>
         
                        
            ))}
      
            </Row>
      </Container>

           )
        }  */}


        
        

        </>
       
    );
};

export default Home;