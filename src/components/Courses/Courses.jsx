import  { useEffect, useState } from "react";
import Course from "../Course/Course";
import Cart from "../Cart/Cart";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [totalCreadit, setTotalCreadit] = useState(0);
  const [remainingHour, setRemainingHour] = useState(20);
  const [totalPrice, setTotalPrice] = useState(0);
  // Data Load Using Use Effect
  useEffect(() => {
    fetch("./courses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
// Handle rmeove from cart
const handleRemoveFromCart = course => {
  const remainingCourses = selectedCourses.filter(c=> c.id !== course.id)
  setSelectedCourses(remainingCourses)
  const reduceCredit = totalCreadit - course.duration;
  setTotalCreadit(parseFloat(reduceCredit))
  const reduceRemainingCredit = remainingHour + course.duration;
  setRemainingHour(parseFloat(reduceRemainingCredit))
  setTotalPrice(totalPrice - course.price)
}

console.log(selectedCourses)
  // Handle Selected Course
  const handleSelected = (course) => {
    // Declaear Initial Value Of Price
    let price = course.price;

    const isExist = selectedCourses.find(
      (singleCourse) => singleCourse.id === course.id
    );
    if (isExist) {
      Swal.fire({
        title: "It's Alrady Selected",
        text: "Try to select Another Courses",
        icon: "error",
        confirmButtonText: "Okay",
      });
      return;
    }
    let credit = course.duration;
    selectedCourses.filter((selectCours) => (credit += selectCours.duration));
    if (credit > 20) {
      Swal.fire({
        title: "Your Credit Limit finish",
        text: "Try to select Another Courses",
        icon: "error",
        confirmButtonText: "Okay",
      });
      return;
    } else {
      setTotalCreadit(credit);
    }
    selectedCourses.forEach((selectCours) => (price += selectCours.price));
    setTotalPrice(price);
    setRemainingHour(20 - credit);
    const newSelectedCourse = [...selectedCourses, course];
    setSelectedCourses(newSelectedCourse);
  };

  return (
    <div>
      <div className="flex flex-col-reverse lg:flex-row justify-between gap-5">
        <div className="flex-1 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5">
          {/* Map Loaded Data and pass course data in course component */}
          {courses.map((course) => (
            <Course
              handleSelected={handleSelected}
              key={course.id}
              course={course}
            />
          ))}
        </div>
        <div className="lg:w-[320px] xl:w-[400px} ">
          {/* Import Cart Component and Pass Require State and Function */}
          <Cart
          handleRemoveFromCart={handleRemoveFromCart}
            totalPrice={totalPrice}
            remainingHour={remainingHour}
            totalCreadit={totalCreadit}
            selectedCourses={selectedCourses}
          />
        </div>
      </div>
    </div>
  );
};

export default Courses;
