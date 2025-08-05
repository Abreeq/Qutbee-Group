import React from 'react';
// import image from '../assets/image.png';
import vector from '../assets/vector.png';
import about from '../assets/about1.png';
import palm from '../assets/palm.png'
import talk from '../assets/icon.png'
import Counter from '../components/Counter'; 




const AboutUs = () => {
  const formatNumber = (number, label) => {
    if (label === "Assets under holding") {
      return `$${number.toLocaleString()} trillion`;
    }
    if (label === "Transactions every 24 hours") {
      return `${number.toLocaleString()} million`;
    }
    return number.toLocaleString(); // Add commas for "New users annually"
  };
  return (
    <section>
      {/* Hero Section */}
      <div className="bg-white" >
        <div className="relative isolate h-[510px] px-6 pt-14 lg:px-10">


        
<div
  className="absolute inset-0 -z-10 overflow-hidden bg-no-repeat bg-center bg-cover"
  style={{ backgroundImage: `url(${vector})`, opacity: 0.5 }}
>
  
</div>

          <div
            aria-hidden="true"
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            {/* <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            ></div> */}
          </div>

          <div className="mx-auto max-w-2xl py-30 sm:py-48 lg:py-45 text-center">
            <h1 className="heading mb-6  " style={{ color: '#ae8625' }}>About Us</h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto" style={{ color: '#d2ac47' }}>
              Legacy of Excellence in Investment Management
            </p>
          </div>

          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          >
            {/* <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            ></div> */}
          </div>
        </div>
      </div>

      {/* Section 1: Strategy Text Only */}
      <section className=" relative py-16 px-4 sm:px-8 lg:px-16 text-center">

        <h2 className="text-3xl font-semibold mb-4" style={{ color: '#ae8625' }}>
          Strategic minds. Bold moves. Lasting impact.
        </h2>
        <p className="text-xl leading-relaxed max-w-3xl mx-auto" style={{ color: '#d2ac47' }}>
          We bring together strategic thinking, bold execution, and a commitment to creating lasting impact across every venture.
        </p>
      </section>






      {/* Section 2: Mission + Image Grid */}
<section className="py-16 px-4 sm:px-8 lg:px-16">
  <div className=" relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    {/* background vector pattern */}
{/* background image */}
<div
  className="absolute inset-0 -z-10 overflow-hidden bg-no-repeat bg-center bg-cover"
  style={{ backgroundImage: `url(${vector})`, opacity: 0.5 }}
>
  
</div>




    {/* Left: Image Grid */}
<div className="col-span-1">
  <img
    src={palm}
    alt=""
    className="rounded-xl object-cover w-full h-[400px] shadow-md"
/>
</div>


    {/* Right: Text Content */}
    <div>
      <h2 className="text-3xl font-semibold mb-4" style={{ color: '#ae8625' }}>
        Our Mission
      </h2>
      <p className="text-xl leading-relaxed" style={{ color: '#d2ac47' }}>
        Working on our mission and subsequently chasing our vision, where we madly chase our mission to empower bold ideas in order to speed up business transformation. Guiding tech investments at every step — real estate and business consulting — we create powerful impact across UAE and beyond. We invest in what matters: people, purpose, and performance.
      </p>
    </div>

  </div>
</section>


     {/* <div class="bg-gray-700 py-24 sm:py-20 ">
  <div className="mx-auto max-w-7xl px-6 lg:px-6">
    <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
      <div className="mx-auto flex max-w-xs flex-col gap-y-4">
        <dt className="text-base/7 " style={{ color: '#d2ac47' }} >Transactions every 24 hours</dt>
        <dd className="order-first text-3xl font-semibold tracking-tight  sm:text-5xl" style={{ color: '#ae8625' }}>44 million</dd>
      </div>
      <div className="mx-auto flex max-w-xs flex-col gap-y-4">
        <dt className="text-base/7 " style={{ color: '#d2ac47' }}>Assets under holding</dt>
        <dd className="order-first text-3xl font-semibold tracking-tight  sm:text-5xl" style={{ color: '#ae8625' }}>$119 trillion</dd>
      </div>
      <div className="mx-auto flex max-w-xs flex-col gap-y-4">
        <dt className="text-base/7 " style={{ color: '#d2ac47' }}>New users annually</dt>
        <dd className="order-first text-3xl font-semibold tracking-tight  sm:text-5xl" style={{ color: '#ae8625' }}>46,000</dd>
      </div>
    </dl>
  </div>
</div> */}


<div className="bg-gray-700 py-24 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-6">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {/* 44 million */}
          <div className="mx-auto flex max-w-xs flex-col gap-y-4">
            <dt className="text-base/7" style={{ color: '#d2ac47' }}>
              Transactions every 24 hours
            </dt>
            <dd className="order-first text-3xl font-semibold tracking-tight sm:text-5xl" style={{ color: '#ae8625' }}>
              <Counter from={0} to={44} duration={2} format={n => formatNumber(n, "Transactions every 24 hours")} />
            </dd>
          </div>
          {/* $119 trillion */}
          <div className="mx-auto flex max-w-xs flex-col gap-y-4">
            <dt className="text-base/7" style={{ color: '#d2ac47' }}>
              Assets under holding
            </dt>
            <dd className="order-first text-3xl font-semibold tracking-tight sm:text-5xl" style={{ color: '#ae8625' }}>
              <Counter from={0} to={119} duration={2.5} format={n => formatNumber(n, "Assets under holding")} />
            </dd>
          </div>
          {/* 46,000 */}
          <div className="mx-auto flex max-w-xs flex-col gap-y-4">
            <dt className="text-base/7" style={{ color: '#d2ac47' }}>
              New users annually
            </dt>
            <dd className="order-first text-3xl font-semibold tracking-tight sm:text-5xl" style={{ color: '#ae8625' }}>
              <Counter from={0} to={46000} duration={3} format={n => formatNumber(n, "New users annually")} />
            </dd>
          </div>
        </dl>
      </div>
    </div>

{/* next section */}

<div class="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
  {/* background vector pattern */}
<div
  className="absolute inset-0 -z-10 overflow-hidden bg-no-repeat bg-center bg-cover"
  style={{ backgroundImage: `url(${vector})`, opacity: 0.5}}
>
  
</div>

  <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2  lg:gap-y-10">
    <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
      <div className="lg:pr-4">
        <div className="lg:max-w-lg">
          <p className="text-base/7 font-semibold text-indigo-600" style={{ color: '#ae8625' }}>Deploy faster</p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl" style={{ color: '#ae8625' }}>Preparing for your success, we provide truly prominent IT solutions</h1>
          <p className="mt-6 text-xl/8 text-gray-700" style={{ color: '#d2ac47' }}>Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at vitae feugiat egestas.</p>
        </div>
      </div>
    </div>
    { <div className="-mt-12 -ml-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <div>
          <p className="mt-8" style={{ color: '#d2ac47' }}>Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.</p>
          <h2 className="mt-16 text-2xl font-bold tracking-tight " style={{ color: '#ae8625' }}>No server? No problem.</h2>
          <p className="mt-6" style={{ color: '#d2ac47' }}>Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in. Convallis arcu ipsum urna nibh. Pharetra, euismod vitae interdum mauris enim, consequat vulputate nibh. Maecenas pellentesque id sed tellus mauris, ultrices mauris. Tincidunt enim cursus ridiculus mi. Pellentesque nam sed nullam sed diam turpis ipsum eu a sed convallis diam.</p>
            </div>
      {/* <img src={image} alt="" class="w-3xl max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-228" /> */}
    </div> }
    <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
      <div className="lg:pr-4">
        <div className="max-w-xl text-base/7 text-gray-600 lg:max-w-lg" style={{ color: '#d2ac47' }}>
          <p>Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id.</p>
          <ul role="list" className="mt-8 space-y-8 text-gray-600">
            <li className="flex gap-x-3">
              <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" class="mt-1 size-5 flex-none text-indigo-600"style={{ color: '#ae8625' }}>
                <path d="M5.5 17a4.5 4.5 0 0 1-1.44-8.765 4.5 4.5 0 0 1 8.302-3.046 3.5 3.5 0 0 1 4.504 4.272A4 4 0 0 1 15 17H5.5Zm3.75-2.75a.75.75 0 0 0 1.5 0V9.66l1.95 2.1a.75.75 0 1 0 1.1-1.02l-3.25-3.5a.75.75 0 0 0-1.1 0l-3.25 3.5a.75.75 0 1 0 1.1 1.02l1.95-2.1v4.59Z" clip-rule="evenodd" fill-rule="evenodd" />
              </svg>
              <span style={{ color: '#d2ac47' }}><strong class="font-semibold text-gray-900" style={{ color: '#ae8625' }} >Push to deploy.</strong> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</span>
            </li>
            <li className="flex gap-x-3">
              <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" class="mt-1 size-5 flex-none text-indigo-600"style={{ color: '#ae8625' }}>
                <path d="M10 1a4.5 4.5 0 0 0-4.5 4.5V9H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-.5V5.5A4.5 4.5 0 0 0 10 1Zm3 8V5.5a3 3 0 1 0-6 0V9h6Z" clip-rule="evenodd" fill-rule="evenodd" />
              </svg>
              <span style={{ color: '#d2ac47' }}><strong class="font-semibold text-gray-900" style={{ color: '#ae8625' }}>SSL certificates.</strong> Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.</span>
            </li>
            <li className="flex gap-x-3">
              <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" class="mt-1 size-5 flex-none text-indigo-600" style={{ color: '#ae8625' }}>
                <path d="M4.632 3.533A2 2 0 0 1 6.577 2h6.846a2 2 0 0 1 1.945 1.533l1.976 8.234A3.489 3.489 0 0 0 16 11.5H4c-.476 0-.93.095-1.344.267l1.976-8.234Z" />
                <path d="M4 13a2 2 0 1 0 0 4h12a2 2 0 1 0 0-4H4Zm11.24 2a.75.75 0 0 1 .75-.75H16a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75h-.01a.75.75 0 0 1-.75-.75V15Zm-2.25-.75a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75H13a.75.75 0 0 0 .75-.75V15a.75.75 0 0 0-.75-.75h-.01Z" clip-rule="evenodd" fill-rule="evenodd" />
              </svg>
              <span style={{ color: '#d2ac47' }}><strong class="font-semibold text-gray-900" style={{ color: '#ae8625' }}>Database backups.</strong> Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</span>
            </li>
          </ul>
      </div>
        </div>
    </div>
  </div>
</div>






<div className="relative py-16 sm:py-20 bg-white">
  {/* Optional background image */}
  {/* <div
    className="absolute inset-0 -z-10 overflow-hidden bg-no-repeat bg-center bg-cover"
    style={{ backgroundImage: `url(${vector})`, opacity: 0.5 }}
  ></div> */}

  <div className="mx-auto max-w-6xl px-4 sm:px-10 py-10 bg-gray-700 rounded-md w-full">
    <div className="flex flex-col items-center sm:items-start sm:flex-row sm:justify-between gap-6 relative">
      
      {/* Icon Bubble */}
      <div className="w-20 h-20 sm:w-24 sm:h-24 bg-[#0a1534] rounded-full shadow-lg flex items-center justify-center -mt-10 sm:-mt-16">
        <img
          src={talk}
          alt="Support Icon"
          className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
        />
      </div>

      {/* Heading Text */}
      <dd className="text-center sm:text-left text-2xl sm:text-4xl font-semibold tracking-tight text-[#ae8625]">
        We will Deliver you the<br /> best experience
      </dd>

      {/* Phone Button */}
      <div className="flex justify-center sm:justify-end">
        <a
          href="#"
          className="inline-block rounded-md bg-indigo-600 px-6 py-3 text-base sm:text-xl font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600"
        >
          +91 9149976788
        </a>
      </div>
    </div>
  </div>
</div>




</section>
  );
};

export default AboutUs;




