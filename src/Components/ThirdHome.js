import React, { useEffect, useState }  from 'react'
import Card from 'react-bootstrap/Card';
import t1 from '../Photos/Photos/t1.jpg'
import t2 from '../Photos/Photos/t2.jpg'
import t3 from '../Photos/Photos/t3.jpg'
import t4 from '../Photos/Photos/t4.jpg'
import Button from 'react-bootstrap/Button';
import { FaCartPlus } from 'react-icons/fa';
import {useNavigate} from 'react-router-dom'
import axios from 'axios';
const ThirdHome=(props)=>  {

 
  



    return (
  
      props.products1.map((n)=>(
        <div  key={n.id} className='col-lg-4 col-md-3 col-sm-3 d-flex justify-content-center thrd '>
            <Card style={{ width: '17rem' }} >
          <Card.Img variant="top" src={n.productImage}  />
          <Card.Body>
            <Card.Title>{n.productName}</Card.Title>
            <Card.Text>
             ${n.productPrice}
            </Card.Text>
            <Button variant="light" onClick={()=>props.y(n)} >
            <FaCartPlus/>
            </Button>
          </Card.Body>
        </Card>
          </div>
          
    
          
            ))
            


       
    )
  }



export default ThirdHome