/* eslint-disable react/prop-types */
import PropTypes from "prop-types";


const Card = ({card}) => {
const {name,country,image,biddingPrice,bowlingType} = card

    return (
        <div className="mx-auto border-2 border-black ">
            
            <img className="w-[200px] h-[220px]" src={image} alt="" />
            <p className="font-semibold">{name}</p>
            <div>
                <p>{country}</p>
                <p>{bowlingType}</p>
                <p>{biddingPrice}</p>
                <button className="px-3 py-2 bg-red-500">Choose Player</button>
            </div>
        </div>
    );
};
Card.PropTypes ={
    card:PropTypes.object.isRequired
}

export default Card;


// "id": 2,
// "name": "Shakib Al Hasan",
// "country": "Bangladesh",
// "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsWhe-KJUIo5bnF4avTW6KvyuV6iuB62NrCQ&s",
// "role": "All-Rounder",
// "battingType": "Left-hand bat",
// "bowlingType": "Left-arm orthodox",
// "biddingPrice": 10000000
// },