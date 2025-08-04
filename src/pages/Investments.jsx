import React from 'react';
import vector from '../assets/vector.png';
import talk from '../assets/icon.png'

const Investments = () => {
  return (
<section>
     <div className="relative isolate min-h-screen flex items-center justify-center px-6 lg:px-10">



        {/* Hero Section */}
              <div className="relative isolate h-[620px] px-6 pt-14 lg:px-10">
            <div
            className="absolute inset-0 -z-10 overflow-hidden bg-no-repeat bg-center bg-cover"
            style={{ backgroundImage: `url(${vector})`, opacity: 0.5 }}
          >
            </div>
          {/* Top Abstract Background */}
          {/* <div
            aria-hidden="true"
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div> */}

          {/* Main Content */}
          <div className="mx-auto max-w-2xl py-20 sm:py-32 lg:py-27">

            <div className="text-center">
              <h1 className="text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
                Our Investments
              </h1>
              <p className="mt-8 text-lg font-medium text-gray-500 sm:text-xl">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.
              </p>

            </div>
          </div>

          {/* Bottom Abstract Background */}
          {/* <div
            aria-hidden="true"
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div> */}
        </div>
      </div>

      
<div className="grid grid-cols-2 grid-rows-2 gap-4 max-w-4xl py-8 mx-auto">


  {/* Top-left (Large) */}
<div className="w-[539px] h-[560px] ml-35">
  <img
    src="https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?auto=format&fit=crop&w=800&q=80"
    alt="Large Top Left"
    className="w-full h-full object-cover rounded-lg"
  />
  <p className="mt-2 text-center text-lg font-semibold">ABC</p>
</div>


{/* Top-right (Small) */}
<div className="w-[559px] h-[423px] ml-65 ">
  <img
    src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=400&q=80"
    alt="Small Top Right"
    className="w-full h-full object-cover rounded-lg"
  />
  <p className="mt-2 text-center text-lg font-semibold">ABC</p>
</div>


  {/* Bottom-left (Small) */}
  <div className="w-[539px] h-[423px] ml-35 mt-25">
    <img
      src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=400&q=80"
      alt="Small Bottom Left"
      className="w-full h-full object-cover rounded-lg"
    />
    <p className="mt-2 text-center text-lg font-semibold">ABC</p>
  </div> 

  {/* Bottom-right (Large) */}
   <div className="w-[539px] h-[560px]  ml-65  -mt-[38px]">
    <img
      src="https://images.unsplash.com/photo-1598257006458-087169a1f08d?auto=format&fit=crop&w=800&q=80"
      alt="Large Bottom Right"
      className="w-full h-full object-cover rounded-lg"
    />
    <p className="mt-2 text-center text-lg font-semibold">ABC</p>
  </div> 
</div>


<div className="relative py-24 sm:py-19 bg-white">
  <div
  className="absolute inset-0 -z-10 overflow-hidden bg-no-repeat bg-center bg-cover"
  style={{ backgroundImage: `url(${vector})`, opacity: 0.5 }}
>
  </div>
  <div className="mx-auto max-w-6xl px-10 pl-30 pr-10 py-5 bg-gray-700 rounded-md relative w-full h-[200px]">
    <dl className="text-left"> {/* or text-center if you want */}
      <div className="flex flex-col gap-y-4"> {/* Removed max-w-xs and mx-auto */}
        <div>
<div className="absolute top-[-45px] left-9 w-24 h-24 bg-[#0a1534] rounded-full shadow-lg flex items-center justify-center">
          <img
            src={talk}
            alt="Support Icon"
            className="w-16 h-16 object-contain"
          />
        </div>

        
        </div>
        <dd
          className=" text-left order-first text-3xl font-semibold tracking-tight sm:text-5xl my-10 mx-12"
          style={{ color: '#ae8625' }}
        >
          We will Deliver you the<br/> best experience
        </dd>
          <div className="mt-10 flex items-center justify-center gap-x-6">


         <a
            href="#"
             className="absolute top-15 right-30 rounded-md bg-indigo-600 px-8 py-5 text-xl font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 my-2 "
            >
                +91 9149976788
            </a>
            </div>
      </div>
    </dl>
  </div>
</div>


   
      </section>
      
  );
};

export default Investments;


