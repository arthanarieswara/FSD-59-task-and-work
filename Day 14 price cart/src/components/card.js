import { useState } from "react"
import { Card } from "react-bootstrap"
import Button from "./button"

export function Cards ({prod,idx,count,setCount}){
  const [show , setshow] = useState(false)

  function addToCart (){
    setshow(!show)
    setCount(count+1)
    window.scroll({
      top: 0,
      behavior: 'smooth',
    })
  }
  function removeFromCart(){
    setshow(!show)
    setCount(count-1)
    window.scroll({
      top: 0,
      behavior: 'smooth',
    })
  }
  return(
 
<Card className='card-data' style={{ width: '18rem' }}>
<Card.Img variant="top" className='size' src={prod.productImage} />
<Card.Body>
  <Card.Title>{prod.productName}</Card.Title>
  <Card.Text>{prod.price}</Card.Text>
  <Card.Text>{prod.rating}</Card.Text>

  {!show ? <Button
  name="Add Cart"
  bgClr="white" 
  onClick={addToCart}
  /> : ""}
 

{show ? <Button
 name="Remove Cart"
 bgClr="red"
 clr="white"
 onClick={removeFromCart}
/> : ""}

</Card.Body>
</Card>

  
  
  )

}