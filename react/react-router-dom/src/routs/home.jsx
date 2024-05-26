import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "./Navbar";
import "./css.css";
import Fotter from "./footer";
{
  /* <div><Link to={"/"}> home</Link></div> */
}
//
export const Home = () => {
  return (
    <>
      <Navbar />
      <div className="px-8 flex gap-3 mt-8 justify-between">
        <div className=" shadow-2xl p-3 w-[70%] h-[100%]">
          <div className="w-[100%]">
            <img
              className="w-[100%]"
              src="https://wallpapers.com/images/high/naruto-pictures-ifftdoc33971s72e.webp"
              alt="nature photo"
            />
          </div>
          <div className="w-[100%]">
            <div className="flex flex-col gap-2">
              <h1 className="text-zinc-800 font-bold text-2xl pt-2">
                TITLE HEADING
              </h1>
              <p className="text-zinc-800 font-semibold pb-3">
                Title description , April 7,2014
              </p>
            </div>
            <p className="pb-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos tempora ut id fugiat eum odit quaerat dicta aliquam
              quae similique reprehenderit atque dolor quod laboriosam
              consequatur, velit, adipisci minima provident.
            </p>
            <div className="flex items-center justify-between">
              <button className="shadow-lg px-3 py-2 ">READ MORE</button>
              <button className="shadow-lg px-3 py-2 ">Comments 0</button>
            </div>
          </div>
        </div>
        <div className="p-2 w-[30%]">
          <div className="shadow-xl p-3">
            <div className="w-[100%]">
              <img
                className="w-[100%] border"
                src="https://wallpapers.com/images/thumbnail/tobi-naruto-red-aesthetic-crescent-moon-fkk67jirija5t7pj.webp"
                alt=""
              />
            </div>
            <h1 className="font-bold text-2xl text-zinc-800 pb-3">My Name</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis eveniet odit vitae sed iste consequatur ut dignissimos
              odio
            </p>
          </div>
          <div className="shadow-xl p-3 flex flex-col gap-4 mt-3">
            <h1 className="">Popular Posts</h1>
            <div className=" flex gap-2">
              <img
                className="w-[50px] "
                src="https://wallpapers.com/images/thumbnail/naruto-baryon-mode-kurama-qbjkeuetdokock1x.webp"
                alt=""
              />
              <div>
                <h3>Lorem</h3>
                <p>Lorem, ipsum dolor.</p>
              </div>
            </div>
            <div className=" flex gap-2">
              <img
                className="w-[50px] "
                src="https://wallpapers.com/images/thumbnail/itachi-uchiha-iphone-high-resolution-lemguuh7rz2wyx8k.webp"
                alt=""
              />
              <div>
                <h3>Lorem</h3>
                <p>Lorem, ipsum dolor.</p>
              </div>
            </div>
            <div className=" flex gap-2">
              <img
                className="w-[50px] "
                src="https://wallpapers.com/images/thumbnail/sharingan-live-sasuke-rinnegan-ttyyk8y73dbpv2vg.webp"
                alt=""
              />
              <div>
                <h3>Lorem</h3>
                <p>Lorem, ipsum dolor.</p>
              </div>
            </div>
            <div className=" flex gap-2">
              <img
                className="w-[50px]"
                src="https://wallpapers.com/images/thumbnail/kakashi-pictures-27o6z7g1eevwp0c5.webp"
                alt=""
              />
              <div>
                <h3>Lorem</h3>
                <p>Lorem, ipsum dolor.</p>
              </div>
            </div>
          </div>
          <div className="p-4 mt-3 shadow-xl">
            <h1 className="pb-3 text-2xl font-bold text-zinc-800">Tag</h1>
            <div className="flex flex-wrap gap-1">
              <span className="px-2 pb-1 mb-2 bg-black text-white text-xs ">
                Travel
              </span>
              <span className="px-2 pb-1 mb-2 bg-black text-white text-xs ">
                New Yourk
              </span>
              <span className="px-2 pb-1 mb-2 bg-black text-white text-xs ">
                London IKIA
              </span>
              <span className="px-2 pb-1 mb-2 bg-black text-white text-xs ">
                NORWAY
              </span>
              <span className="px-2 pb-1 mb-2 bg-black text-white text-xs ">
                DY DY ideas
              </span>
              <span className="px-2 pb-1 mb-2 bg-black text-white text-xs ">
                Baby
              </span>
              <span className="px-2 pb-1 mb-2 bg-black text-white text-xs ">
                Family
              </span>
              <span className="px-2 pb-1 mb-2 bg-black text-white text-xs ">
                News
              </span>
              <span className="px-2 pb-1 mb-2 bg-black text-white text-xs ">
                Clothing
              </span>
              <span className="px-2 pb-1 mb-2 bg-black text-white text-xs ">
                Shopping sports
              </span>
              <span className="px-2 pb-1 mb-2 bg-black text-white text-xs ">
                Games
              </span>
            </div>
          </div>
        </div>
      </div>
      <Fotter />
    </>
  );
};
