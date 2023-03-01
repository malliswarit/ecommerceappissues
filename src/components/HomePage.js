import React, { useCallback, useEffect, useState } from 'react';
import {Button} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories, fetchByCategory, fetchElectronics, fetchJewellery, fetchMensClothing, fetchWomensClothing } from '../Redux/actions/products';
import './Products.css';
import SubCategories from './SubCategories';



export const HomePage = () => {
  const [electronics, setElectronics] = useState([])
    const [jewelery, setJewelery] = useState([])
    const [mensClothing, setMensClothing] = useState([])
    const [womensClothing, setWomensClothing] = useState([])

  const dispatch = useDispatch();
  const categories = useSelector(state => state.categories?.categories)
  const electronicItems = useSelector(state => state.categories?.electronics)
  const jewelleryItems = useSelector(state => state.categories?.jewelery)
  const mensItems = useSelector(state => state.categories?.mensClothing)
  const womensItems = useSelector(state => state.categories?.womensClothing)
  
  
  useEffect(() => {
    dispatch(fetchCategories())
  },[])

  useEffect(() => {
    categories && categories?.map(category => {
            if(category === 'electronics'){
              dispatch(fetchElectronics('electronics'))
                    
            }
            else if(category === 'jewelery'){
              dispatch(fetchJewellery(category))
        
        }
            else if(category === 'men\'s clothing'){
              dispatch(fetchMensClothing(category))
         
        }
            else if(category === 'women\'s clothing'){
              dispatch(fetchWomensClothing(category))
         
        }
        else return;
    })
  },[categories])

useEffect(() => { 
   setElectronics(electronicItems)   
}, [electronicItems]);


useEffect(() => { 
  setJewelery(jewelleryItems)   
}, [jewelleryItems]);

useEffect(() => { 
  setMensClothing(mensItems)   
}, [mensItems]);

useEffect(() => { 
  setWomensClothing(womensItems)   
}, [womensItems]);







   

 return (
    <div>
     {categories?.map((category,i) => {
        return (
          <section key={i} className='section-card'>
           <div className='section-card img'>
            <div style={{backgroundColor:'white',textAlign:'center',fontSize:'15px',fontWeight:'400'}}>
        <h2>Best of {category}</h2>
        <Button variant="primary">View All</Button>
        </div>
           </div>hello
           <SubCategories count = {i} category={category} />
        </section>
        )
      })}
        </div>
    )
}