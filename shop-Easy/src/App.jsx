import './App.css'
import Header from './components/Header'
import Hero from './components/Hero';
import Categories from './components/Categories';
import ProductList from './components/ProductList';
import Teacher from './components/Teacher'
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
