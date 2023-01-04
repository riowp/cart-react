import denimBlue from "./Assets/denim-blue.jpg";
import redhoodie from "./Assets/red-hoodie.jpg";
import {useState, useEffect} from 'react';
function App() {
  const [total1, setTotal1] = useState(1);
  const [total2, setTotal2] = useState(1);
  const [price1, setPrice1] = useState(17.99);
  const [price2, setPrice2] = useState(35.99);
  const [totalAll, setTotalAll] = useState(53.98);
 
  const handleIncrement2 = () => {
    setTotal2(total2 + 1);
    setPrice2(total2 * 35.99)
  };

  const handleDecrement2 = () => {
    if (total2 > 1) {
      setTotal2(total2 - 1);
      setPrice2(total2 * 35.99)
    }
  };

  useEffect(() => {
    setPrice1(total1 * 17.99)
    setPrice2(total2 * 35.99)
    setTotalAll(price1 + price2)
  }, [total1, total2, totalAll, price1, price2])

  return (
    <>
      <div>
        <h1 className="text-center p-10 font-bold text-2xl bg-gradient-to-b from-gray-200 to-gray-50">
          Shopping Cart
        </h1>
      </div>
      <div className="container mx-auto">
        <div className="flex justify-between mt-4 gap-4">
          {/* kiri */}
          <div className="flex flex-col border rounded-lg shadow-lg bg-white w-4/6 p-4 mb-10">
            <h1 className="text-black text-xl font-semibold text-left">
              Cart (2 items)
            </h1>
            <div className="flex justify-between mt-4 mb-4">
              <div className="flex gap-3">
                <div>
                  <img className="h-56 w-40 rounded-lg" src={denimBlue} />
                </div>
                <div className="flex flex-col justify-between">
                  <div className="flex flex-col justify-around h-3/5">
                    <h1 className="font-semibold text-xl">Blue Denim Shirt</h1>
                    <h1>Shirt: Blue</h1>
                    <h1>Color: Blue</h1>
                    <h1>Size: M</h1>
                  </div>
                  <div className="mb-10 flex justify-between gap-4">
                      <button className=" fa-solid fa-trash text-sm text-gray-600">
                      <span className="ml-1 font-serif">REMOVE ITEM</span>
                      </button>
                      <button className="fa-solid fa-heart text-sm text-gray-600">
                      <span className="ml-1 font-serif">ADD TO WISH LIST</span>
                      </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between">
                <div className="">
                  <div className="flex">
                    <button className="border border-gray-300 px-4 rounded-tl-md rounded-bl-md text-xl font-semibold">
                      -
                    </button>
                    <h1 className="border border-gray-300 px-3 text-center pt-0.5 font-semibold">
                      {total1}
                    </h1>
                    <button className="border border-gray-300 px-4 rounded-tr-md rounded-br-md text-lg font-semibold">
                      +
                    </button>
                  </div>
                  <h3 className="mt-1 text-sm text-center">(Note, 1 place)</h3>
                </div>
                <div className="mb-10 ml-16">
                  <h1 className="font-bold">${price1}</h1>
                </div>
              </div>
            </div>
            <hr className="divide-solid border border-gray-300" />
            <div className="flex justify-between mt-4">
              <div className="flex gap-3">
                <div>
                  <img className="h-56 w-40 rounded-lg" src={redhoodie} />
                </div>
                <div className="flex flex-col justify-between">
                  <div className="flex flex-col justify-around h-3/5">
                    <h1 className="font-semibold text-xl">Red Sweater</h1>
                    <h1>Sweater: Red</h1>
                    <h1>Color: Red</h1>
                    <h1>Size: M</h1>
                  </div>
                  <div className="mb-10 flex justify-between gap-4">
                      <button className=" fa-solid fa-trash text-sm text-gray-600">
                      <span className="ml-1 font-serif">REMOVE ITEM</span>
                      </button>
                      <button className="fa-solid fa-heart text-sm text-gray-600">
                      <span className="ml-1 font-serif">ADD TO WISH LIST</span>
                      </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between">
                <div className="">
                  <div className="flex">
                    <button className="border border-gray-300 px-4 rounded-tl-md rounded-bl-md text-xl font-semibold"
                    onClick={handleDecrement2}>
                      -
                    </button>
                    <h1 className="border border-gray-300 px-3 text-center pt-0.5 font-semibold">
                      {total2}
                    </h1>
                    <button className="border border-gray-300 px-4 rounded-tr-md rounded-br-md text-lg font-semibold"
                    onClick={handleIncrement2}
                    >
                      +
                    </button>
                  </div>
                  <h3 className="mt-1 text-sm text-center"></h3>
                </div>
                <div className="mb-10 ml-16">
                  <h1 className="font-bold">${price2}</h1>
                </div>
              </div>
            </div>
          </div>
          {/* kiri end */}
          {/* kanan */}
          <div className="flex flex-col h-96 bg-white w-2/6  gap-6">
            <div className="rounded-lg shadow-lg border p-4">
              <h1 className="text-2xl font-semibold">The total amount of</h1>
              <div className="flex-col mt-8">
                <div className="flex justify-between my-6">
                  <h1 className="text-lg">Temporary amount</h1>
                  <h1 className="text-lg">${totalAll}</h1>
                </div>
                <div className="flex justify-between my-6">
                  <h1 className="text-lg">Shipping</h1>
                  <h1 className="text-lg">Gratis</h1>
                </div>
                <hr className="border border-gray-300" />
                <div className="flex justify-between my-6">
                  <h1 className="font-semibold text-lg">
                    The total amount of (including VAT)
                  </h1>
                  <h1 className="font-semibold text-lg">${totalAll}</h1>
                </div>
              </div>
              <div className="flex justify-center">
                <button className="bg-blue-600 rounded-lg text-white py-4 px-32">
                  GO TO CHECKOUT
                </button>
              </div>
            </div>
            <div className=" rounded-lg shadow-lg border">
              <select className="w-full p-4 rounded-lg">
                <option selected>Add a discount code (optional)</option>
                <option value="10">10%</option>
                <option value="15">15%</option>
                <option value="20">20%</option>
              </select>
            </div>
          </div>
          {/* kanan end */}
        </div>
      </div>
    </>
  );
}

export default App;
