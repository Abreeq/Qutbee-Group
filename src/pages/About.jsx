import React from 'react';

const AboutUs = () => {
  return (
    <section>
      {/* Hero Section */}
      <div className="bg-white">
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            ></div>
          </div>

          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 text-center">
            <h1 className="heading mb-6  " style={{ color: '#ae8625' }}>About Us</h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto" style={{ color: '#d2ac47' }}>
              Legacy of Excellence in Investment Management
            </p>
          </div>

          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            ></div>
          </div>
        </div>
      </div>

      {/* Section 1: Strategy Text Only */}
      <section className="py-16 px-4 sm:px-8 lg:px-16 text-center">
        <h2 className="text-3xl font-semibold mb-4" style={{ color: '#ae8625' }}>
          Strategic minds. Bold moves. Lasting impact.
        </h2>
        <p className="text-xl leading-relaxed max-w-3xl mx-auto" style={{ color: '#d2ac47' }}>
          We bring together strategic thinking, bold execution, and a commitment to creating lasting impact across every venture.
        </p>
      </section>

      {/* Section 2: Mission + Image Grid */}
<section className="py-16 px-4 sm:px-8 lg:px-16">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

    {/* Left: Image Grid */}
    <div className="grid grid-cols-2 gap-6">
      <div className="flex flex-col gap-6">
        <img
          src="https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?&auto=format&fit=crop&crop=center&w=500&h=600&q=90"
          alt=""
          className="rounded-xl object-cover w-full h-64 shadow-md"
        />
        <img
          src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?&auto=format&fit=crop&crop=center&w=500&h=600&q=90"
          alt=""
          className="rounded-xl object-cover w-full h-64 shadow-md"
        />
      </div>
      <div className="flex flex-col gap-6">
        <img
          src="https://images.unsplash.com/photo-1557804506-669a67965ba0?&auto=format&fit=crop&crop=center&w=500&h=600&q=90"
          alt=""
          className="rounded-xl object-cover w-full h-64 shadow-md"
        />
        <img
          src="https://images.unsplash.com/photo-1598257006458-087169a1f08d?&auto=format&fit=crop&crop=center&w=500&h=600&q=90"
          alt=""
          className="rounded-xl object-cover w-full h-64 shadow-md"
        />
      </div>
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
</section>
  );
};

export default AboutUs;