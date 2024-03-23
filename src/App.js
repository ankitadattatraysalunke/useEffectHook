
import './App.css';
import { useState , useEffect} from 'react'


function useEffectHook() {
  const [count, setCount] = useState(0);
const [showText, setShowText] = useState(false);
const [productList, setProductList] = useState([]);

async function fetchAllProducts(){
  try{
      const response = await fetch('https://dummyjson.com/products');
      const reslult = await response.json();

      if(reslult && reslult.products) setProductList(reslult.products);


  }catch(error)
  {
    console.log(error);
  }
}

useEffect(()=>{
  
},[]);


  useEffect(()=>{
        if(count === 5) setShowText(true);
  },[count])

  useEffect(() => {
    if(count === 10) fetchAllProducts();
  }, [count]);

  useEffect(()=> {
      return () => {
        
      }
  }, []);


  return (
   <>
    <div>
      <h1>Use Effect Hook</h1>
      <p>Count is {count}</p>
      {
        showText? <h3>Hello World</h3> : null}
      
      <h3>Hello World</h3>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <ul>
        {
           productList && productList.length >0? productList.map(item=> <li>{item.title}</li>) : null}
      </ul>
    </div>
   </>
      
  );
}

export default useEffectHook;
