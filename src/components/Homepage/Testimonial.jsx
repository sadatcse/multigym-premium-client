import React, { useEffect, useState } from "react";
import axios from "axios";
import Marquee from "react-fast-marquee";
import Title from "./Title";

const Testimonial = () => {
  const [testimonialData, setTestimonialData] = useState([]);
  const [loading, setLoading] = useState(true);
  const maxLength = 260;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cachedData = JSON.parse(localStorage.getItem("testimonialData"));
        if (cachedData) {
          setTestimonialData(cachedData);
          setLoading(false);
          return;
        }

        const response = await axios.get(
          "https://multigym-premium-server.vercel.app/testimonial/get-all"
        );
        const newData = response.data;
        localStorage.setItem("testimonialData", JSON.stringify(newData));

        setTestimonialData(newData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="py-10 container mx-auto mt-5">
      <Title title="FEEDBACKS" subtitle="Trusted Testimonials" />
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-16 w-16"></div>
        </div>
      ) : (
        <Marquee pauseOnHover={true}>
          <div className="flex mt-8">
            {testimonialData &&
              testimonialData.map((item, ind) => (
                <div
                  key={ind}
                  className="flex flex-col justify-center px-8 mx-6 my-12 text-center rounded-md w-96 shadow bg-white transition-all duration-300 hover:bg-custom-yellow text-gray-800 hover:text-white-100 group"
                >
                  <img
                    className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full bg-gray-500 object-cover"
                    src={item?.image}
                    alt="Profile"
                  />
                  <div className="flex-1 my-4">
                    <p className="text-xl font-semibold leading-tight">
                      {item.name}
                    </p>
                    <p>{item?.title}</p>
                    <p className="mt-4">
                      <span className="text-3xl font-bold">“</span>
                      {item?.comment.length > maxLength
                        ? `${item?.comment.slice(0, maxLength)}...`
                        : item?.comment}
                      <span className="text-3xl font-bold">”</span>
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </Marquee>
      )}
    </div>
  );
};

export default Testimonial;
