import Container from "./container";
import { Patrick_Hand_SC } from "next/font/google";
import LetsTalkButton from "./letsTalkButton";

const patrick = Patrick_Hand_SC({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-patrick",
});

export default function Hero() {
  return (
    <section className=" px-100 -mt-10 ">
      <Container className=" grid grid-cols-2 gap-4 ">
        <div>
          <h1
            className={` font-excon text-[60px] text-black mt-40 leading-snug`}
          >
            <span className=" text-[120px] image-text ">We craft</span>
            <br /> websites, brands & digital products
          </h1>
        </div>
        <div>
          <p className=" font-satoshiRegular text-[22px] text-black w-120 mt-60 ml-auto ">
            <b>Lazy Studio</b> is a global digital agency specializing in
            websites, e-commerce and brand experiences. We help startups and
            growing businesses build powerful digital products.
          </p>

          <div className=" grid grid-cols-2 gap-4 ">
            <LetsTalkButton
              id="letsTalkBtn"
              text="let's talk"
              textSec="Book NOw"
              className=" ml-17 "
            />
            <div className=" pt-11 ml-auto flex justify-center items-center select-none relative">
              <img
                src="images/carrow.png"
                className=" w-20 scale-x-[-1] -rotate-45 absolute -left-23 top-10 "
              />
              <p className={` ${patrick.className} text-black text-2xl`}>
                We get <br />
                <span className=" flex justify-center items-center ">
                  booked fast
                  <img src="images/fire.png" className=" w-6 " />
                </span>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
