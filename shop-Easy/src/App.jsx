import './App.css'
import {useState ,useEffect,useMemo,useCallBack,useRef} from 'react';
import Header from './components/Header'
import Hero from './components/Hero';
import Categories from './components/Categories';
import ProductList from './components/ProductList';
import Teacher from './components/Teacher'
import useCounter from './hooks/useCounter';
import useToggle from './hooks/useToggle';
function Login(){
     const[showPassword,togglePassword]=useToggle(false);
     return(
      <>
       <h2>Login Form</h2>
       <input type="text" placeholder='Enter Username' />
       <input type={showPassword ? "text" : "password"} placeholder='Enter Password' />
       <button onClick={togglePassword}>{showPassword?"Hide" : "Show"}</button>
      </>
     )
}
function UseCounterhook(){
  const {count,increase,decrease}=useCounter();
  return(
    <>
    <Login />
     <h2>Count : {count}</h2>
     <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </>
  )
}
function UseRefExm(){
      const[count, setCount]=useState(0);
      const clickCount=useRef(0);
      function handleClick(){
        setCount(count+1);
        clickCount.current = clickCount.current+1;
        console.log("Button clicked",clickCount.current);
      }
      return (
        <>
        <UseCounterhook />
          <h2>Count: {count}</h2>
          <button onClick={handleClick}>Click Me</button>
        </>
      )
}
function UseRefEx(){
  const inputRef = useRef();
  function focusInput(){
     inputRef.current.focus();
  }
  return(
    <>
       <input ref={inputRef} />
       <button onClick={focusInput}>Focus</button>
    </>
  )
}
function AddProduct(){
 const[cart, setCart] =useState(0);
    const addToCart= useCallback(()=>{
      setCart(cart+1)
    },[cart])
    return(
      <>
       <h2>Cart: {cart}</h2>
      <button onClick={addToCart}>Add to cart</button>
      
      </>
    )
}
function  UseCallBackEx(){
      const [count, setCount] = useState(0);
      function increase(){
        setCount(count + 1);
     }
      const showMessage= useCallback(()=>{
        console.log("Hello World");
      })
     return(
      <>
      <AddProduct />
      <h1>Count : {count}</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={showMessage}>ShowMessage</button>
      </>
     )

}
function UseMemoEx(){
     const[number,setNumber]=useState(5);
      const [count, setCount] = useState(0);
      function increase(){
        setCount(count + 1);
     }
      const square = useMemo(() => {
    console.log("calculating Square...");
    return number * number;
  }, [number]);

  function calSquare() {
    setNumber(number + 1);
  }
     
     return(
      <>
      <h1>Count : {count}</h1>
      <button onClick={increase}>Increase</button>
      <h2>Number :{number}</h2>
      <h2>Square :{square}</h2>
      <button onClick={calSquare}>Increase</button>
      </>
     )
}
function UseStateDemo(){
      const [count, setCount] = useState(0);
      
      const[isOn,setIsOn]=useState(false);
      const[name,setName]=useState("Aabid");
      useEffect(()=>{
        document.title = `Count: ${count}`;
      },[name]);
      function chnageName(){
        setName("Adil");
      }
      function setStatus(){
        setIsOn(!isOn);
      }
  function increase(){
    setCount(count + 1);
  }
  function decrease(){
    setCount(count - 1);
  }
  return (
    <>
    <p>Name: {name}</p>
    <button onClick={chnageName}>Changename</button>
    <p>Status : {isOn ? 'ON' : 'OFF'}</p>
    <h1>Count : {count}</h1>
    <button onClick={increase}>Increase</button>
    <button onClick={decrease}>decrease</button>
    <button onClick={setStatus}>Toggle Status</button>
   
    </>
  )


}
function Student({name,course}){
  return (
    <>
    <h2>Name: {name}</h2>
    <p>Course : {course} </p>   
    </>
  )
}
function MiddleComp({userName}){
  
  return(
    <>
    
    <Child userName={userName}/>
    </>
  )
}
function Child({userName}){
  return(
    <>
    <h1>Prop Drilling</h1>
    <p >{userName}</p>
    </>
  )
}

function App() {
  const userName="Gazi";
  return (
    <>
    <UseRefExm />
    <MiddleComp userName={userName}/>
    <Teacher  name="aabid" subject="FEE"/>
    <Student name="Gazi" course="CSE AI/ML" />
    <Student  name="ADil" course="MBA"/>
    <Student name="Afnan" course = "MCA" />
    <Header /> 
    <Hero />
    <Categories />
    <ProductList />
    </>
  )
}

export default App
