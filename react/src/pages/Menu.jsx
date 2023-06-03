import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, selectAllProducts } from '../redux/menu/productsSlice';
import { FiLoader } from 'react-icons/fi';
import ProductCardDetail from '../components/ProductCardDetail';
import Tabs from '../components/Tabs';
import { addToCart } from '../redux/cart/cartSlice';


const Menu = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectAllProducts);
  const [activeTab, setActiveTab] = useState('')
  const [activeTabIndex, setActiveTabIndex] = useState(0)

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const onAddProduct = (product) => {
    dispatch(addToCart(product))
  }

  const onTabSwith = (newActiveTab) => {
    setActiveTab(newActiveTab)
    let categories = products.products.map(product => product.name.name)
    let index = categories.findIndex(category => newActiveTab === category) 
    if(index > -1) {
      setActiveTabIndex (index)
    }else{
      setActiveTabIndex(0)
    }
  }



  return (
    <div className='text-white'>
      {products.status !== 'fulfilled' ? (
       <div className='flex justify-center items-center h-[500px]'>
         <FiLoader className='text-center text-white font-medium text-8xl animate-spin'/>
       </div> 
      ) : (
        <div className=''>
          {
            products.products && products.products.length > 0 && 
            <Tabs
              list={products.products.map((product, index) => product.name.name)}
              activeTab={activeTab}
            
              onTabSwitch={onTabSwith}
            />
          }
          {products.products && products.products.length > 0 &&
            products.products[activeTabIndex].products.map((product, index) => {

              return(
              <div className='grid grid-cols-3 gap-4'>
                <div className='col-span-1'></div>
                <div className='col-span-2'>
                  <ProductCardDetail onAddProduct={onAddProduct} product={product} key={index} />
                </div>
              </div>
              ) 
            })}
        </div>
      )}
    </div>
  );
};

export default Menu;
