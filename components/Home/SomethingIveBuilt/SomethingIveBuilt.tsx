import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import ArrowIcon from "../../Icons/ArrowIcon";
import Img from "../../smallComp/image/Img";
import GithubIcon from "../../Icons/GithubIconForSomethingIveBuild";
import ExternalLink from "../../Icons/ExternalLink";
import CloudImage from "../../smallComp/cloudImage";

export default function SomethingIveBuilt() {
  const router = useRouter();
  return (
    <div
      id="SomethingIveBuiltSection"
      className=" flex flex-col xl:space-y-28 space-y-12 bg-AAprimary w-full  
     2xl:px-72 lg:px-24 md:px-16 sm:px-16 py-32 px-4"
    >
      {/* // ? Title  */}
      <div data-aos="fade-up" className=" flex flex-row  items-center md:px-0">
        <ArrowIcon className={"flex-none h-5 md:h-6 w-5 md:w-5 translate-y-[2px] text-AAsecondary"} />
        <div className="flex-none flex-row space-x-2 items-center pr-2">
          <span className="text-AAsecondary font-sans text-sm  sm:text-xl"> 03.</span>
          <span className=" font-bold tracking-wider text-gray-200 text-lg md:text-2xl w-44 md:w-56 opacity-85">
            {" "}
            Some Things I&apos;ve Built
          </span>
        </div>
        <div className="bg-gray-400 h-[0.2px] w-full xl:w-1/3 md:w-1/2"></div>
      </div>

      <div className="flex flex-col   xl:space-y-36 space-y-8 md:space-y-28">
        {/* // ?  Project  1*/}
        <div data-aos="fade-up" className="overflow-hidden relative md:grid md:grid-cols-12 w-full md:h-96 ">
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center"
          >
            <div className="relative rounded w-full h-full col-span-7 ">
              {/* <Link href={"/typing"}>
                <div
                  // onClick={}
                  className="absolute w-full h-full rounded bg-AAsecondary 
           transition-opacity opacity-20 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </Link> */}

              <a href="https://www.ens.vision" target={"_blank"} rel="noreferrer">
                <div
                  // onClick={}
                  className="absolute w-full h-full rounded bg-AAprimary 
           transition-opacity opacity-30 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>

              {/*<Img src={"/ensvision.jpg"} alt={"Project Screen shot"} className={`w-full rounded h-full `} />*/}
              <CloudImage publicId={'gamification_ygpo3u'} className={`w-full rounded h-auto max-h-[600px]`} />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                {/*<Img src={"/ensvision.jpg"} alt={"Project Screen shot"} className={`w-full h-full `} />*/}
                <CloudImage publicId={'gamification_ygpo3u'} className={`w-full h-full object-cover`} />

              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5 
            col-span-8 flex flex-col items-start md:items-end space-y-3"
            >
              <div className="flex flex-col space-y-1 md:items-end z-10">
                <span className="text-AAsecondary text-base">VinID / VinShop </span>
                <a href="https://ens.vision" target="_blank" rel="noopener noreferrer">
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Loyalty - Gamification
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left md:text-right ">
                  At <span className="text-AAsecondary">One Mount</span>, I played a role in developing webview
                  components for their <span className="text-AAsecondary">gamification concepts</span> using Next.js.
                  Our focus was on integrating new features and improving the user interface. One notable
                  achievement was the release of <span className="text-AAsecondary">Loyalty Rewards</span> with <span className="text-AAsecondary">TCB Client</span>{" "}
                  , enabling users to play game on <span className="text-AAsecondary">TCB Mobile App</span>. This showcased
                  our commitment to delivering innovative solutions.
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-end"
              >
                <span className="pr-4 z-10">Nextjs</span>
                <span className="pr-4 z-10">Reactjs</span>
                <span className="pr-4 z-10">Golang</span>
                <span className="pr-4 z-10">MySql</span>
                <span className="pr-4 z-10">Tailwind CSS</span>
              </ul>
              {/*<div className="z-10 flex fle-row space-x-5 ">*/}
              {/*  <a href="https://www.ens.vision/" target={"_blank"} rel="noreferrer">*/}
              {/*    <ExternalLink url={""} router={router} />*/}
              {/*  </a>*/}
              {/*</div>*/}
            </div>
          </div>
        </div>
        {/* // ?  Project 2 */}
        <div data-aos="fade-up" className="overflow-hidden relative md:grid md:grid-cols-12 w-full md:h-96  ">
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center "
          >
            <div className="relative rounded w-full h-full col-start-6 col-span-7 ">
              <a href={"https://ubiquitous-bublanina-da84ec.netlify.app/"} target="_blank" rel="noreferrer">
                <div
                  className="absolute w-full h-full rounded bg-AAprimary 
           transition-opacity opacity-50 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>
              {/*<Img src={"/img/YPredict-v1.jpg"} alt={"Project Screen shot"} className={`w-full rounded h-full `} />*/}
              <CloudImage publicId={'air-closet_ouegbz'} className={`w-full rounded h-auto max-h-[600px]`} />

            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0 md:order-2">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                {/*<Img src={"/hackme.jpg"} alt={"Project Screen shot"} className={`w-full h-full`} />*/}
                <CloudImage publicId={'air-closet_ouegbz'} className={`w-full h-full object-cover`} />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6   
            col-span-8 flex flex-col items-start  space-y-3 md:order-1"
            >
              <div className="flex flex-col space-y-1  z-10">
                <span className="text-AAsecondary text-base">Recent Project</span>
                <a href="https://www.air-closet.com/" target="_blank" rel="noopener noreferrer">
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    AirCloset
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left ">
                  I had the opportunity to join the development of a outsource project called <span className="text-AAsecondary"> AirCloset </span> with Japan Client.
                  This is a <span className="text-AAsecondary">fashion rental service</span> where you can find something that suits you.
                  A professional stylist will deliver the outfit selected just for you to your home.
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-start"
              >
                <span className="pr-4 z-10">Reactjs</span>
                <span className="pr-4 z-10">Nodejs</span>
                <span className="pr-4 z-10">React Native</span>
                <span className="pr-4 z-10">MySql</span>
              </ul>
              {/*<div className="z-10 flex fle-row space-x-5 ">*/}
              {/*  <GithubIcon link="https://github.com/hktitof/Ypredict" />*/}
              {/*  <a href="https://ubiquitous-bublanina-da84ec.netlify.app/" target={"_blank"} rel="noreferrer">*/}
              {/*    <ExternalLink url={""} router={router} />*/}
              {/*  </a>*/}
              {/*</div>*/}
            </div>
          </div>
        </div>
        {/* // ?  Project  3*/}
        <div data-aos="fade-up" className="overflow-hidden relative md:grid md:grid-cols-12 w-full md:h-96 ">
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center"
          >
            <div className="relative rounded w-full h-full col-span-7 ">
              <Link href={"/"}>
                <div
                  // onClick={}
                  className="absolute w-full h-full rounded bg-AAsecondary 
           transition-opacity opacity-10 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </Link>

              {/*<Img src={"/typing.png"} alt={"Project Screen shot"} className={`w-full rounded h-full `} />*/}
              <CloudImage publicId={'antalyser_qvjevb'} className={`w-full rounded h-auto max-h-[600px]`} />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                {/*<Img src={"/typing.png"} alt={"Project Screen shot"} className={`w-full h-full `} />*/}
                <CloudImage publicId={'antalyser_qvjevb'} className={`w-full h-full object-cover`} />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5 
            col-span-8 flex flex-col items-start md:items-end space-y-3"
            >
              <div className="flex flex-col space-y-1 md:items-end z-10">
                <span className="text-AAsecondary text-base">Recent Project</span>
                <Link href={"/"}>
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Antalyser
                  </span>
                </Link>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left md:text-right">
                  This project helps you create <span className="text-AAsecondary">real-time</span> data reports,
                  helping you effectively track sales and marketing campaigns.
                  By aggregating data from <span className="text-AAsecondary">multiple sources</span> and displaying them on charts
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-end"
              >
                <span className="pr-4 z-10">Algorithms</span>
                <span className="pr-4 z-10">Reactjs</span>
                <span className="pr-4 z-10">Webpack</span>
                <span className="pr-4 z-10">TypeScript</span>
                <span className="pr-4 z-10">Recharts</span>
              </ul>
              {/*<div className="z-10 flex fle-row space-x-5 ">*/}
              {/*  <GithubIcon link="https://github.com/hktitof/Typing" />*/}
              {/*  <ExternalLink url={"typing"} router={router} />*/}
              {/*</div>*/}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
