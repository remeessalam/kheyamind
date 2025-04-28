import React from "react";
import ReactPlayer from "react-player";
import bannerVid from "../assets/vid/banner.mp4";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import HrLine from "../Components/HrLine";
import { companyDetails, services } from "../data/constant";
import aboutImg from "../assets/images/about.webp";
import whyChooseImg from "../assets/images/whychooseus.webp";
import Services from "../Components/Services";
import ContactForm from "../Components/ContactForm";
import { BsPersonArmsUp } from "react-icons/bs";
import {
  FaBrain,
  FaDraftingCompass,
  FaCloudUploadAlt,
  FaLightbulb,
} from "react-icons/fa";
import { GiCheckMark } from "react-icons/gi";
import { BiSupport } from "react-icons/bi";
import { FaPeopleGroup } from "react-icons/fa6";
import Testimonials from "../Components/Testimonials";
import BlogsSection from "../Components/Website/BlogsSection";
import PortfolioList from "../Components/Website/PortfolioList";

const Home = () => {
  return (
    <div className="pt-[5rem]">
      <section className="relative min-h-screen flex items-center justify-center bg-black/30">
        <div className="pt-[4rem] md:pt-[8rem] pb-[4rem]">
          <div
            data-aos="fade-up"
            className="wrapper flex flex-col text-center text-white gap-5 justify-center h-full"
          >
            <p className="heading">
              {" "}
              Vision Beyond AI: Intelligent Solutions for the Next Era
            </p>
            <h1 className="section-heading">
              KheyaMind combines cognitive automation, design-led thinking, and
              future-focused AI to help enterprises grow smarter.
            </h1>
            <div className="flex sm:flex-row flex-col justify-center gap-5 mt-5">
              <Link to="/services" className="primary-btn">
                Discover Services
              </Link>
              <Link to="/contact-us" className="transparent-btn">
                Free Consultation
              </Link>
            </div>
          </div>
        </div>
        <div className="">
          <ReactPlayer
            url={bannerVid}
            playing
            muted
            loop
            playsinline
            width="100%"
            height="100%"
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: -1,
            }}
            config={{
              file: {
                attributes: {
                  style: {
                    objectFit: "cover",
                    width: "100%",
                    height: "100%",
                  },
                },
              },
            }}
          />
        </div>
      </section>
      <div className="wrapper pt-[3rem] sm:pt-0 sm:-translate-y-1/3 md:-translate-y-1/2">
        <div className="grid md:grid-cols-3">
          <div
            data-aos="fade-up"
            className="bg-primary w-full text-white flex gap-3 justify-center p-6"
          >
            <div className="bg-white h-full aspect-square flex justify-center items-center p-3">
              <BsPersonArmsUp size={50} className="text-primary" />
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-semibold text-xl">Happy Clients</p>
              <h3 className="heading-2">
                <CountUp
                  end={150}
                  suffix="+"
                  duration={3}
                  enableScrollSpy
                  scrollSpyOnce
                />
              </h3>
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="bg-[#EAF9FF] w-full text-primary flex gap-3 justify-center p-6"
          >
            <div className="bg-primary h-full aspect-square flex justify-center items-center p-3">
              <GiCheckMark size={45} className="text-white" />
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-semibold text-xl">Projects Done</p>
              <h3 className="heading-2 text-secondary">
                <CountUp
                  end={130}
                  suffix="+"
                  duration={3}
                  enableScrollSpy
                  scrollSpyOnce
                />
              </h3>
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="bg-primary w-full text-white flex gap-3 justify-center p-6"
          >
            <div className="bg-white h-full aspect-square flex justify-center items-center p-3">
              <FaPeopleGroup size={50} className="text-primary" />
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-semibold text-xl">Tech Experts</p>
              <h3 className="heading-2">
                <CountUp
                  end={30}
                  suffix="+"
                  duration={3}
                  enableScrollSpy
                  scrollSpyOnce
                />
              </h3>
            </div>
          </div>
        </div>
      </div>

      <section className="pt-[5rem]">
        <div className="wrapper grid md:grid-cols-2 gap-7">
          <div data-aos="fade-up" className="space-y-4">
            <p className="uppercase text-primary text-center md:text-start">
              About us
            </p>
            <div className="md:hidden flex flex-col pb-3">
              <img
                src={aboutImg}
                alt="About Us"
                className="h-full w-full aspect-video object-cover rounded-xl"
              />
            </div>
            <h3 className="section-heading">Welcome to KheyaMind.ai</h3>
            <HrLine />
            <p>
              Welcome to KheyaMind.ai Text: Founded in 2025 by Niraj Modak,
              KheyaMind is a boutique AI consulting and solutions company based
              in India with global aspirations. We specialize in deploying
              AI-driven automation and digital products across enterprise
              verticals, empowering clients to rethink operations, service
              delivery, and intelligence. Image: Replace with
              founder/team-in-action photo or AI workspace visual
            </p>
            <div className="grid grid-cols-2 gap-5 pt-5">
              {[
                "Award Winning",
                "24/7 Support",
                "Professional Staff",
                "Fair Prices",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <GiCheckMark size={25} className="text-primary" />
                  <p>{item}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col-reverse sm:flex-row items-center gap-5 sm:gap-10 pt-5">
              <Link to="/about-us" className="primary-btn sm:w-fit w-full">
                Know More
              </Link>
              <div className="flex gap-3 sm:justify-center sm:w-fit w-full">
                <div className="bg-primary h-full aspect-square flex justify-center items-center p-3">
                  <BiSupport size={25} className="text-white" />
                </div>
                <div className="flex flex-col">
                  <p className="">Call Us Now</p>
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
          <div data-aos="fade-up" className="hidden md:flex flex-col">
            <img
              src={aboutImg}
              alt="About Us"
              className="h-full w-full object-cover rounded-xl"
            />
          </div>
        </div>
      </section>
      <section className="wrapper pt-[5rem]">
        <div
          data-aos="fade-up"
          className="space-y-4 flex flex-col sm:items-center sm:text-center max-w-2xl mx-auto"
        >
          <p className="uppercase text-primary">Why Choose Us</p>{" "}
          {/* Blue color */}
          <h3 className="section-heading">
            {" "}
            {/* Gold accent */}
            We Are Here to Grow Your Business Exponentially
          </h3>
          <HrLine />
        </div>

        <div className="mt-[2rem] grid sm:grid-cols-2 md:grid-cols-3 gap-7">
          {/* Left side */}
          <div data-aos="fade-up" className="flex flex-col gap-7">
            {/* AI-First Thinking */}
            <div className="space-y-3">
              <div className="bg-[#007BFF] w-[3.5rem] aspect-square flex justify-center items-center p-3 rounded-md">
                <FaBrain size={30} className="text-[#FFD700]" />{" "}
                {/* Blue background, Gold icon */}
              </div>
              <div className="space-y-1">
                <p className="font-bold text-lg ">AI-First Thinking</p>
                <p>
                  AI isn’t a feature — it’s the foundation of every solution we
                  build
                </p>
              </div>
            </div>

            {/* Clarity-Driven Design */}
            <div className="space-y-3">
              <div className="bg-[#007BFF] w-[3.5rem] aspect-square flex justify-center items-center p-3 rounded-md">
                <FaDraftingCompass size={30} className="text-[#FFD700]" />
              </div>
              <div className="space-y-1">
                <p className="font-bold text-lg ">Clarity-Driven Design</p>
                <p>We pair intuitive UI with intelligent workflows</p>
              </div>
            </div>
          </div>

          {/* Center Image */}
          <div
            data-aos="fade-up"
            className="sm:row-span-2 md:row-span-1 w-full h-full aspect-[4/3] sm:aspect-auto md:aspect-square overflow-hidden rounded-xl"
          >
            <img
              src={whyChooseImg}
              alt="Why Choose Us"
              className="md:aspect-[2/3] w-full h-full object-cover object-bottom rounded-xl"
            />
          </div>

          {/* Right side */}
          <div data-aos="fade-up" className="flex flex-col gap-7">
            {/* Scalable Architecture */}
            <div className="space-y-3">
              <div className="bg-[#007BFF] w-[3.5rem] aspect-square flex justify-center items-center p-3 rounded-md">
                <FaCloudUploadAlt size={30} className="text-[#FFD700]" />
              </div>
              <div className="space-y-1">
                <p className="font-bold text-lg ">Scalable Architecture</p>
                <p>Cloud-native, API-ready systems built to scale globally</p>
              </div>
            </div>

            {/* Strategic Consulting */}
            <div className="space-y-3">
              <div className="bg-[#007BFF] w-[3.5rem] aspect-square flex justify-center items-center p-3 rounded-md">
                <FaLightbulb size={30} className="text-[#FFD700]" />
              </div>
              <div className="space-y-1">
                <p className="font-bold text-lg ">Strategic Consulting</p>
                <p>We don’t just deliver projects — we guide transformations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Services
        title="our services"
        heading="AI-Powered Services Crafted to Deliver Business Results"
        data={services}
      />
      <PortfolioList />
      <ContactForm />
      <Testimonials />
      <BlogsSection />
    </div>
  );
};

export default Home;
