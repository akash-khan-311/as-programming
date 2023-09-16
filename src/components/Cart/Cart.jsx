import React from "react";

const Cart = ({ selectedCourses, totalCreadit, remainingHour, totalPrice }) => {
  return (
    <div className="backdrop-blur-lg bg-white/60 p-3 rounded-2xl">
      <h1 className="text-xl text-center text-blue-800 font-bold">
        Creadit Hour Remaining {remainingHour}hr
      </h1>
      <hr className="my-2" />
      <div>
        <ol className="list-decimal  list-inside">
          {selectedCourses.map((course) => (
            <li
              key={course.id}
              className="font-semibold  backdrop-blur-lg bg-white/10 my-2 px-3 py-2 rounded-lg"
            >
              {course.name}
            </li>
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
