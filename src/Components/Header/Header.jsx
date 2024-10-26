import { useState } from "react";


const Header = () => {
const [coin,setCoin]= useState(0)
const handleCoin = () =>{
       setCoin(coin+500)
}
    return (
        <div className="mt-9 ">
            {/* Nav Bar */}
            <div className="flex justify-between w-9/11 mx-auto items-center mb-4">
                <div>
                    <img src="../../../Images/logo.png" alt="" />
                </div>
                <div className=" space-x-4">
                    <a href="">Home</a>
                    <a href="">Fixture</a>
                    <a href="">Teams</a>
                    <a href="">Schedules</a>
                    <span> {coin} Coin</span>
                </div>
            </div>
            {/* Banner Part */}
            
           <div
  className="flex flex-col gap-4 items-center justify-center p-6 rounded-xl bg-black"
   style={{ backgroundImage: "url('../../../Images/bg-shadow.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
>
  <img className="" src="../../../Images/banner-main.png" alt="" />
  <h2 className="text-xl font-bold text-center text-stone-400">
    Assemble Your Ultimate Dream 11 Cricket Team
  </h2>
  <h4 className="text-lg font-medium text-center text-stone-400">
    Beyond Boundaries, Beyond Limits
  </h4>
  <button onClick={handleCoin} className="px-6 py-2 text-black font-semibold rounded-lg shadow-lg border-2 border-black bg-gradient-to-r from-pink-500 via-yellow-400 to-yellow-500 hover:from-pink-600 hover:via-yellow-500 hover:to-yellow-600">
    Claim Free Credit
  </button>
</div>

            
        </div>
    );
};

export default Header;