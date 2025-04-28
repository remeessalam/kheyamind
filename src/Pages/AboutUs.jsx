import React from "react";
import banner from "../assets/images/banners/aboutus.webp";
import PageBanner from "../Components/Website/PageBanner";
import HrLine from "../Components/HrLine";
import { Link } from "react-router-dom";
import { companyDetails } from "../data/constant";
import visionImg from "../assets/images/vision.webp";
import missionImg from "../assets/images/mission.webp";
import { ImPhone } from "react-icons/im";
import Testimonials from "../Components/Testimonials";

const AboutUs = () => {
  return (
    <>
      <PageBanner banner={banner} title="About Us" />
      <section className="pt-[5rem] wrapper grid md:grid-cols-2 gap-7">
        <div data-aos="fade-up" className="space-y-4">
          <p className="uppercase text-primary text-start">Our Vision</p>
          <h3 className="section-heading">
            Pioneering Intelligent Solutions for the AI Era
          </h3>
          <HrLine />
          <p>
            At KheyaMind AI , we envision a future where businesses of all sizes
            harness the transformative power of artificial intelligence to solve
            complex challenges and create exceptional value. Our goal is to
            become the world's most trusted partner for AI-powered digital
            transformation, developing intelligent systems that learn, adapt,
            and evolve with our clients' needs.
          </p>
          <p>
            We're committed to pushing the boundaries of conversational AI,
            predictive analytics, and intelligent automation to create solutions
            that don't just respond to today's demands but anticipate tomorrow's
            opportunities.
          </p>
          <div className="flex flex-col-reverse sm:flex-row items-center gap-5 sm:gap-10 pt-5">
            <Link to="/contact-us" className="primary-btn sm:w-fit w-full">
              Request A Quote
            </Link>
            <div className="flex gap-3 sm:justify-center sm:w-fit w-full">
              <div className="bg-primary h-full aspect-square flex justify-center items-center p-3">
                <ImPhone size={25} className="text-white" />
              </div>
              <div className="flex flex-col capitalize">
                <p className="">Call to ask any question</p>
                <Link
                  to={`tel:${companyDetails.phone}`}
                  className="font-semibold"
                >
                  {companyDetails.phone}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" className="w-full h-full">
          <img
            src={visionImg}
            className="w-full h-full object-cover object-bottom rounded-lg"
            alt="AI Vision"
          />
        </div>
      </section>
      <section className="pt-[5rem] wrapper grid md:grid-cols-2 gap-7">
        <div data-aos="fade-up" className="md:block hidden w-full h-full">
          <img
            src={missionImg}
            className="w-full h-full object-cover rounded-lg"
            alt="AI Mission"
          />
        </div>
        <div data-aos="fade-up" className="space-y-4">
          <p className="uppercase text-primary text-center">Our Mission</p>
          <h3 className="section-heading">Building AI That Works for Humans</h3>
          <HrLine />
          <div
            data-aos="fade-up"
            className="block md:hidden w-full aspect-square"
          >
            <img
              src={missionImg}
              className="w-full h-full object-cover rounded-lg"
              alt="AI Mission"
            />
          </div>
          <p>
            Our mission is to democratize artificial intelligence by creating
            practical, ethical solutions that deliver immediate business value.
            We specialize in developing conversational interfaces, intelligent
            automation systems, and predictive analytics tools that enhance
            human capabilities rather than replace them.
          </p>
          <p>
            Through continuous research and responsible innovation, we're
            building AI systems that understand context, learn from
            interactions, and make increasingly valuable contributions to our
            clients' operations, customer experiences, and strategic
            decision-making.
          </p>
          <div className="flex flex-col-reverse sm:flex-row items-center gap-5 sm:gap-10 pt-5">
            <Link to="/contact-us" className="primary-btn sm:w-fit w-full">
              Request A Quote
            </Link>
            <div className="flex gap-3 sm:justify-center sm:w-fit w-full">
              <div className="bg-primary h-full aspect-square flex justify-center items-center p-3">
                <ImPhone size={25} className="text-white" />
              </div>
              <div className="flex flex-col capitalize">
                <p className="">Call to ask any question</p>
                <Link
                  to={`tel:${companyDetails.phone}`}
                  className="font-semibold"
                >
                  {companyDetails.phone}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Testimonials />
    </>
  );
};

export default AboutUs;
