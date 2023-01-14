import React, {useState, useEffect} from 'react'
import HomeNavbar from './HomeNavbar';
import { useHistory } from 'react-router-dom';
import UserNavbar from './UserNavbar';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import loadingimg from '../images/loading.gif'







const Getsubcategory=(props)=>{
 
    const history = useHistory()

const [loading, setLoading] = useState(false);
const [roleau, setroleau] = useState ('');
    

    document.title = "Home -  Shop Hub";

    const { qty } = useParams("");
    console.log(qty);

  
      const [hotel, setHotel] = useState([]);


      useEffect(() => {

        const fetchHotels = async () => {
            setLoading(true)
            const res = await fetch(`/api/postbysubcategory/${qty}`);

            const data = await res.json();
            console.log(data);
        
            setHotel(data);
            setLoading(false)
        };
        
        fetchHotels()

    }, []);




const getrole=()=>{

    let roleuser = localStorage.getItem('role');

    setroleau(roleuser);
    console.log(roleau, 'roleg')


}


useEffect(() => {

getrole()

// console.log(roleau, 'getroleuseeffect')

}, []);


    

    return (

      
        <>
        
        

        {
           
               (roleau === 'User' ? <UserNavbar />  : <HomeNavbar />)

        }

        <br />
        <br />
        <br />

  

        <h1>{qty} Products</h1>
        
        <br />
        <br />

        {
      loading?( //if
        // <h3>Loading ... </h3>
        <img src={loadingimg} />
      ): ( //else


     <Container>
      <Row>

          
            {hotel.map((product) => (
             

            
                    <Col>                    
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={product.imageURL}/>
                        <Card.Body>
                            <Card.Title>{product.hotelname}</Card.Title>
                            <Card.Text>
                        Rs.{product.productPrice}/-

                            </Card.Text>
                            <Button  variant="primary" href={`../Details/${product._id}`}>Products Details</Button> 
                        </Card.Body>
                        </Card>
                        <br />
                        </Col>
         
                        
            ))}
      
            </Row>
      </Container>

           )
        } 


        
        


        </>
    );
};

export default Getsubcategory;