import { useState, useEffect } from "react";
import img from "../images/img.png"

const Slider = () => {
  const [sliderIndex, setSliderIndex] = useState(0);
  const sliderContent = [
    {
      heading: "The Motive",
      paragraphs: [
        "Our story began with a personal experience that ignited a vision for change. Faced with a prescription for a vital medication, our founder embarked on a time-consuming and frustrating journey, visiting multiple pharmacies in search of the elusive product. This experience sparked a revolutionary idea - a solution that would empower individuals to easily locate the exact pharmacy they need, right from the comfort of their homes.",
        "Whether you're a store looking to expand your reach or a customer in search of a specific product, PharmAssist is here to make your life easier. No more wasted time and energy. No more frustration or rigmarole. With our innovative solution, you can effortlessly connect with stores that cater to your unique needs, even if they're outside your local area. Say goodbye to scarcity and reservations for scarce items are just a few taps away.",
        "Welcome to PharmAssist, where convenience and accessibility meet innovation and empowerment. Together, let's shape a future where no one is left without the products they need, and pharmacies become beacons of efficiency and customer satisfaction.",
      ],
      // backgroundColor: "bg-red-500",
    },
    {
      heading: "Identity",
      paragraphs: [
        "Pharmassist, developed by Devstrike Digital Limited, is a cutting-edge software revolutionizing the pharmacy industry. Our comprehensive suite of solutions bridges the gap between customers and pharmacies, ensuring seamless product availability and exceptional customer experience.",
        "From effortless store registration and precise inventory management to seamless reservation handling and the ability to advertise your products through our sponsored ads feature, Pharmassist equips pharmacies with the tools they need to stay ahead of the competition and deliver exceptional service.",
        "Our platform is meticulously designed to enhance convenience, saving you valuable time and ensuring a hassle-free experience for customers. Discover the availability of desired products, easily locate nearby stores, reserve scarce items, and enjoy a seamless shopping experience.",
        "Pharmassist will be available on both web and mobile, providing seamless access across devices., whether you're a pharmacy owner or a customer in need,Join Pharmassist today and be part of the future of pharmacy! ",
      ],
      // backgroundColor: "bg-blue-500",
    },
    // {
    //   heading: "Slide 3",
    //   paragraphs: [
    //     "Paragraph 1 - Donec malesuada metus a ligula commodo, sed pulvinar orci efficitur.",
    //     "Paragraph 2 - Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.",
    //     "Paragraph 3 - Et harum quidem rerum facilis est et expedita distinctio.",
    //   ],
    //   backgroundColor: "bg-green-500",
    // },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setSliderIndex((prevIndex) => (prevIndex + 1) % sliderContent.length);
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex mx-3">
      <div className="w-[70%]">
        <div className="flex justify-between ">
          <div className="relative w-full">
            {sliderContent.map((content, index) => (
              <div
                key={index}
                className={`absolute top-0 left-0 w-full h-full transition-transform duration-1000 ${index === sliderIndex ? "scale-100" : "scale-0"
                  } ${content.backgroundColor}`}
              >
                <h2 className="text-2xl font-bold text-black">{content.heading}</h2>
                {content.paragraphs.map((paragraph, pIndex) => (
                  <p key={pIndex} className=" text-black py-2 text-[14px]">
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}
          </div>
          <div>
            <p>
              <img src={img} alt="" />
            </p>
          </div>

        </div>
        <div className="mt-28 flex  text-[14px]">
          <div className="shadow-2xl  w-[60%] mx-2  text-center ">
            <h2 className="text-3xl py-3 text-center text-[#3C9386] font-bold">
              Mission
            </h2>
            <div className="px-3">
              <p className="text-[14px] my-2">Our mission at Pharmassist is to revolutionize the pharmacy industry by seamlessly connecting pharmacies and customers, ensuring easy access to essential medications and healthcare products. </p>

              <p className="text-[14px]">Through innovative technology and user-centric solutions, we aim to empower lives, enhance healthcare experiences, and foster a future where every individual can lead a healthier and happier life.</p>
            </div>
          </div>
          <div className="shadow-2xl  w-[60%] mx-2  text-center">
            <h2 className="text-3xl py-3 text-center text-[#3C9386] font-bold">Vision</h2>
            <div className="px-3 ">
              <p className="text-[14px]">  Our vision at Pharmassist is to create a world where pharmacies and customers are seamlessly connected, enabling effortless access to life-saving medications and healthcare products. </p>

              <p className="text-[14px] my-2">We envision a future where no one faces the frustration of product unavailability, where pharmacies thrive as trusted healthcare partners, and where individuals can easily obtain the medications they need to lead healthy and fulfilling lives. Through our innovative platform, we aspire to transform the pharmacy industry and empower individuals to take control of their well-being.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[30%] bg-[#E6C7A4]">
        <p>lorem ipsum oqojijfbhrjbvhetbh Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus modi, vel quam voluptas impedit magnam maxime minima deserunt hic illum! Corrupti repellat odio sapiente nulla incidunt nobis quam nam eum!</p>
      </div>
    </div>
  );
};

export default Slider;
