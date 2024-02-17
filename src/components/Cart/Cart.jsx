/* eslint-disable react/prop-types */
import { IoMdClose } from "react-icons/io";

const Cart = ({ selectedCourses, totalCreadit, remainingHour, totalPrice,handleRemoveFromCart }) => {
  return (
    <div className="backdrop-blur-lg bg-white/60 p-3 rounded-2xl">
      <h1 className="text-xl text-center text-blue-800 font-bold">
        Credit Hour Remaining {remainingHour}hr
      </h1>
      <hr className="my-2" />
      <div>
        <ol className="list-decimal  list-inside">
          {selectedCourses?.map((course) => (
            <div
              className="font-semibold  backdrop-blur-lg bg-white/10 my-2 px-3 py-2 rounded-lg flex justify-between items-center"
              key={course.id}
            >
              <li>{course.name}</li>
              <button onClick={()=> handleRemoveFromCart(course)} className="border-red-600 border p-1 rounded-full hover:text-red-500">
                <IoMdClose />
              </button>
            </div>
          ))}
        </ol>
        <hr className="my-2" />
        <h2 className="text-xl font-semibold text-white">
          Total Credit : {totalCreadit}hr
        </h2>
        <hr className="my-2" />
        <h2 className="text-xl font-semibold text-white">
          Total Price: ${totalPrice.toFixed(2)}
        </h2>
      </div>
    </div>
  );
};

export default Cart;
