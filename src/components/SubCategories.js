import React, { useEffect, useMemo, useState } from "react";
import { Carousel} from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { fetchByCategory } from "../Redux/actions/products";

const SubCategories = ({category,count}) => {
    const [electronics, setElectronics] = useState([])
    const [jewelery, setJewelery] = useState([])
    const [mensClothing, setMensClothing] = useState([])
    const [womensClothing, setWomensClothing] = useState([])

    const dispatch = useDispatch();
    const categories = useSelector(state => state.categories?.categoryDetails)
    const electronicItems = useSelector(state => state.categories?.electronics)
    const jewelleryItems = useSelector(state => state.categories?.jewelery)
    const mensItems = useSelector(state => state.categories?.mensClothing)
    const womensItems = useSelector(state => state.categories?.womensClothing)

     const ItemsList =  category === 'electronics' ? electronicItems : (category === 'jewelery' ? jewelleryItems : (category === 'men\'s clothing' ? mensItems :womensItems)) 
    

    

    return (
        
        
        
        <Carousel style={{display: 'inline'}}>
            {ItemsList?.map((item,i) => {
                return (
                    <Carousel.Item key={i}>
                    <img
                      className="section-card"
                      src={item.image}
                      alt="First slide"
                    />
                    <Carousel.Caption>
                      <h3>{item.title}</h3>
                      <p>{item.price}</p>
                    </Carousel.Caption>
                    </Carousel.Item>
                )
            } )}
       
</Carousel> 
    )
}

export default SubCategories;