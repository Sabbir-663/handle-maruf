import { useEffect } from "react";
import { useState } from "react";
import Card from "../Card/Card";
import Selected from "../Selected/Selected";
import ("./Cards.css")




const Cards = () => {
    const [isActive, setIsActive] = useState({
        cart:true,
        status:"Available"
        
      })
    
      const handleIsActiveState =(status)=>{
        if(status == "Available"){
          setIsActive({
            cart :true,
            status:"Available"
          })
        }
        else{
          setIsActive({
            cart:false,
            status:"Selected"
          })
        }
      }

// Data fetch
    const [cards,setCards]= useState([])
    useEffect(()=>{
        fetch('player.json')
        .then(res => res.json())
        .then(data => setCards(data))
    },[])

    return (
        <div className="mt-8 mb-[400px] mx-auto">
            <div className="flex justify-between">
                <h3 >Available Players : {cards.length} </h3>
                <div>
                    <button onClick={()=>handleIsActiveState("Available")} className={`${isActive.cart?"active":"btn"}`}>Available</button>
                    <button onClick={()=>handleIsActiveState("Selected")} className={`${isActive.cart?"btn":"active"}`}>Selected</button>
                </div>
            </div>
            {/* Cards */}


            {
                isActive.cart? <div className="grid grid-cols-3 border ">
                {
                    cards.map(card => <Card key={card.id} card={card}></Card>)
                }
           </div>:
           <div>
          <Selected></Selected>
       </div>
            }
     



        </div>
    );
};

export default Cards;