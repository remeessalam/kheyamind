import logo from "../assets/logo/logo.png";

// services icons (website)
import { ReactComponent as icon1 } from "../assets/svg/services/AI Development.svg";
import { ReactComponent as icon2 } from "../assets/svg/services/Web Development.svg";
import { ReactComponent as icon3 } from "../assets/svg/services/App Development.svg";
import { ReactComponent as icon4 } from "../assets/svg/services/Hybrid App Development.svg";
import { ReactComponent as icon5 } from "../assets/svg/services/IT consultancy and strategy.svg";
import { ReactComponent as icon6 } from "../assets/svg/services/IT Infrastructure.svg";

// app development services icons
import { ReactComponent as appIcon1 } from "../assets/svg/services/iOS App Development.svg";
import { ReactComponent as appIcon2 } from "../assets/svg/services/Android.svg";
import { ReactComponent as appIcon3 } from "../assets/svg/services/Flutter.svg";
import { ReactComponent as appIcon4 } from "../assets/svg/services/Hybrid App Development.svg";

// web development services icons
import { ReactComponent as webIcon1 } from "../assets/svg/services/E-Commerce Development.svg";
import { ReactComponent as webIcon2 } from "../assets/svg/services/Social Media Websites.svg";
import { ReactComponent as webIcon3 } from "../assets/svg/services/Web Development.svg";
import { ReactComponent as webIcon4 } from "../assets/svg/services/UIUX Design.svg";
import { FaGlobe } from "react-icons/fa";
import { AiFillAppstore } from "react-icons/ai";
import {
  RiRobot2Line,
  RiChatSmile2Line,
  RiCloudLine,
  RiDashboardLine,
  RiSmartphoneLine,
  RiBrushLine,
} from "react-icons/ri";

// porfolio image
// Import all images at the top (Web Development)
import FiveGHomesImg from "../assets/web-development-portfolio/5ghomes.png";
import ColdCreekcapImg from "../assets/web-development-portfolio/cold creekcap.png";
import ThinkRealityImg from "../assets/web-development-portfolio/think reality.png";
import AkashMegaMart from "../assets/web-development-portfolio/Akash Mega Mart.png";
import MidwamImmersive from "../assets/web-development-portfolio/Midwam – Immersive Experience Design Company.png";

// Import all images at the top (App Development)
import RentopBikeAndCarImgapp from "../assets/app-development-portfolio/Rentop – Bike & Car Rentals.jpg";
import AkashMegaMartApp from "../assets/app-development-portfolio/Akash Mega Mart Mobile App.jpg";
import FeelItMobileApp from "../assets/app-development-portfolio/FeelIt Mobile App.jpg";
import KlikomicsMobileApp from "../assets/app-development-portfolio/Klikomics Mobile App.jpg";
import AutoSnapMobileApp from "../assets/app-development-portfolio/AutoSnap Mobile App.jpg";
export { logo };

export const companyDetails = {
  email: "hello@kheyamind.ai",
  phone: "+0000000000",
  phone2: "+0000000000",
  address: " Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
};

export const testimonials = [
  {
    name: "Arjun Mehta",
    designation: "CEO, TechNova Solutions",
    image: require("../assets/images/testimonial/2.jpg"),
    review:
      "The AI chatbot developed by KheyaMind AI  transformed our customer support. Response times improved by 70% while maintaining 98% satisfaction rates. Their team understood our business needs perfectly and delivered a solution that integrated seamlessly with our existing systems. The ongoing optimization has been invaluable.",
  },
  {
    name: "Priya Sharma",
    designation: "Head of Digital, LexCorp",
    // image: require("../assets/images/testimonial/1.jpg"),
    review:
      "Our custom GPT knowledge agent has revolutionized how our legal team accesses case files. KheyaMind AI 's NLP expertise helped us create a secure, accurate system that saves hundreds of research hours monthly. Their attention to data security and domain-specific tuning was exceptional.",
  },
  {
    name: "Ravi Patel",
    designation: "Operations Director, RetailChain",
    // image: require("../assets/images/testimonial/3.jpg"),
    review:
      "The AI-powered inventory module developed by KheyaMind AI  reduced our stockouts by 45% and improved cash flow significantly. Their team built predictive models that adapt to our seasonal patterns and supplier lead times. The ROI was evident within the first quarter of implementation.",
  },
  {
    name: "Ananya Desai",
    designation: "CTO, HealthTrack Systems",
    // image: require("../assets/images/testimonial/4.jpg"),
    review:
      "KheyaMind AI 's mobile app with integrated AI diagnostics has been a game-changer for our healthcare platform. They delivered exceptional UI/UX for complex medical data visualization while ensuring HIPAA compliance. The app's accuracy and usability have received outstanding feedback from both doctors and patients.",
  },
  {
    name: "Vikram Joshi",
    designation: "DevOps Lead, Finova Inc.",
    // image: require("../assets/images/testimonial/5.jpg"),
    review:
      "Our AI-optimized cloud infrastructure handles 3x more transactions with lower costs thanks to KheyaMind AI 's intelligent auto-scaling solutions. Their team implemented robust monitoring and security while training our staff on the new systems. The transition was seamless with no downtime.",
  },
  {
    name: "Neha Gupta",
    designation: "Product Director, EduTech Global",
    // image: require("../assets/images/testimonial/6.jpg"),
    review:
      "The AI interface design work by KheyaMind AI  made our complex adaptive learning system intuitive for teachers and students alike. Their human-centered approach to AI explainability built trust in our platform. User engagement metrics have doubled since the redesign launched.",
  },
];
// web development services
export const webDevelopmentServices = [
  {
    id: 1,
    title: "E-commerce Websites",
    icon: webIcon1,
    desc: "Empowering your online business with tailored ecommerce solutions. Our platforms boost customer engagement, streamline operations, and drive revenue growth. ",
  },
  {
    id: 2,
    title: "Social Media Websites",
    icon: webIcon2,
    desc: "Get custom social media websites that captivate and engage your audience, driving growth and brand loyalty effortlessly",
  },
  {
    id: 3,
    title: "Landing Websites",
    icon: webIcon3,
    desc: " Creating high-converting landing pages that capture attention and drive action. Tailored designs that showcase your brand’s message and maximize conversions.",
  },
  {
    id: 4,
    title: "Custom Websites",
    icon: webIcon4,
    desc: "Delivering tailor-made websites designed to meet your unique business needs. Our solutions blend creativity and functionality for an exceptional online experience.",
  },
];

// app development services
export const appDevelopmentServices = [
  {
    id: 1,
    title: "iOS App Development",
    icon: appIcon1,
    desc: "Our skilled developers work with both Swift and Objective-C to build robust and efficient apps. We optimize your app for performance, speed, and responsiveness.",
  },
  {
    id: 2,
    title: "Android App Development",
    icon: appIcon2,
    desc: "We design and develop tailor-made Android apps that align with your vision and business goals.Proficient in both Java and Kotlin, we build robust and efficient apps.",
  },
  {
    id: 3,
    title: "Flutter App Development",
    icon: appIcon3,
    desc: "Flutter allows you to build apps for both iOS and Android using a single codebase. While Flutter's default web app architecture presents challenges, we can overcome them with smart strategies. ",
  },
  {
    id: 4,
    title: "Hybrid App Development",
    icon: appIcon4,
    desc: "We build feature-rich hybrid apps tailored to your business needs. We create mobile-friendly apps that work seamlessly across iOS and Android devices.",
  },
];

// portfolio links
export const portfolio = {
  appDevelopment: {
    icon: <AiFillAppstore size={30} />,
    list: [
      {
        id: 1,
        img: AkashMegaMartApp,
        title: "Akash Mega Mart Mobile App",
        link: "https://play.google.com/store/apps/details?id=com.app.akash_mega_mart",
      },
      {
        id: 2,
        img: FeelItMobileApp,
        title: "FeelIt Mobile App",
        link: "https://play.google.com/store/apps/details?id=com.app.akash_mega_mart",
      },
      {
        id: 3,
        img: KlikomicsMobileApp,
        title: "Klikomics Mobile App",
        link: "https://play.google.com/store/apps/details?id=com.klikomics.android&pcampaignid=web_share",
      },
      {
        id: 4,
        img: AutoSnapMobileApp,
        title: "AutoSnap Mobile App",
        link: "https://play.google.com/store/apps/details?id=com.Zigna.AutoSnap&pcampaignid=web_share",
      },
      {
        id: 8,
        img: RentopBikeAndCarImgapp,
        title: "Rentop Bike and Car",
        link: "https://play.google.com/store/apps/details?id=com.rentop&pcampaignid=web_share",
      },
    ],
  },
  webDevelopment: {
    icon: <FaGlobe size={30} />,
    list: [
      {
        id: 1,
        img: FiveGHomesImg,
        title: "5g Homes",
        link: "https://5ghighspeedinternet.co",
      },
      {
        id: 3,
        img: ColdCreekcapImg,
        title: "Cold Creekcap",
        link: "https://www.coldcreekcap.com",
      },
      {
        id: 9,
        img: ThinkRealityImg,
        title: "Think Reality",
        link: "https://thinkrealty.ae",
      },
      {
        id: 90,
        img: AkashMegaMart,
        title: "Akash Mega Mart",
        link: "https://akashmegamart.com/",
      },
      {
        id: 91,
        img: MidwamImmersive,
        title: "Midwam – Immersive Experience Design Company",
        link: "https://www.midwam.com/en/about",
      },
    ],
  },
};

// complete service and details

export const services = [
  {
    id: 1,
    title: "AI Chatbots & Voice Bots",
    icon: RiRobot2Line,

    desc: "Automate customer support, sales processes, and onboarding with intelligent conversational AI solutions that deliver 24/7 service.",
    detailsPage: {
      banner: require("../assets/images/service-details/ai-chatbots.jpg"),
      img1: require("../assets/images/service-details/chatbot-1.jpg"),
      img2: require("../assets/images/service-details/chatbot-2.jpg"),
      img3: require("../assets/images/service-details/chatbot-3.jpg"),
      firstSection: `
        <div class="space-y-6">
          <div class="space-y-4">
            <h2 class="text-xl font-bold">
              Intelligent Conversational AI for Your Business
            </h2>
            <p>
              Transform customer interactions with our advanced AI chatbots and voice bots that understand natural language, learn from conversations, and provide human-like responses.
            </p>
            <p>
              Our solutions automate up to 80% of routine inquiries while maintaining the personal touch your customers expect.
            </p>
          </div>
        </div>
      `,
      secondSection: `
        <div class="py-6">
          <div class="space-y-6">
            <h2 class="text-xl font-bold">
              Key Features of Our AI Bots
            </h2>
            <ul class="space-y-5 list-decimal pl-6">
              <li>
                <h3 class="font-bold mb-2">24/7 Automated Support</h3>
                <p>
                  Handle customer inquiries anytime with instant responses, reducing wait times and improving satisfaction.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Multi-Channel Deployment</h3>
                <p>
                  Deploy across websites, mobile apps, WhatsApp, Facebook Messenger, and voice assistants.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Contextual Understanding</h3>
                <p>
                  Our NLP-powered bots maintain conversation context for more natural interactions.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Seamless Human Handoff</h3>
                <p>
                  Complex queries are automatically routed to human agents with full context.
                </p>
              </li>
            </ul>
          </div>
        </div>
      `,
      thirdSection: `
        <div class="py-6">
          <div class="space-y-6">
            <h2 class="text-xl font-bold">
              Implementation Process
            </h2>
            <ul class="space-y-5 list-decimal pl-6">
              <li>
                <h3 class="font-bold mb-2">Workflow Analysis</h3>
                <p>
                  We map your customer journeys to identify automation opportunities.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Knowledge Base Development</h3>
                <p>
                  Building your custom FAQ database and training materials.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Personality Design</h3>
                <p>
                  Crafting bot personalities that match your brand voice.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Continuous Learning</h3>
                <p>
                  Our bots improve over time through machine learning and regular updates.
                </p>
              </li>
            </ul>
          </div>
        </div>
      `,
    },
  },
  {
    id: 2,
    title: "NLP & Custom GPT Solutions",
    icon: RiChatSmile2Line,

    desc: "Semantic search, prompt engineering tools, and knowledge agents that transform how you interact with data and customers.",
    detailsPage: {
      banner: require("../assets/images/service-details/nlp-solutions.jpg"),
      img1: require("../assets/images/service-details/nlp-1.jpg"),
      img2: require("../assets/images/service-details/nlp-2.jpg"),
      img3: require("../assets/images/service-details/nlp-3.jpg"),
      firstSection: `
        <div class="space-y-6">
          <div class="space-y-4">
            <h2 class="text-xl font-bold">
              Advanced Language AI for Smarter Business
            </h2>
            <p>
              Our custom NLP and GPT solutions help enterprises unlock the value in their unstructured data and automate complex language tasks.
            </p>
            <p>
              From semantic search to automated document processing, we build AI that understands your specific domain terminology and business context.
            </p>
          </div>
        </div>
      `,
      secondSection: `
        <div class="py-6">
          <div class="space-y-6">
            <h2 class="text-xl font-bold">
              Our NLP Capabilities
            </h2>
            <ul class="space-y-5 list-decimal pl-6">
              <li>
                <h3 class="font-bold mb-2">Semantic Search Engines</h3>
                <p>
                  Go beyond keyword matching with AI that understands intent and context.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Custom Knowledge Agents</h3>
                <p>
                  AI assistants trained on your specific documents, policies, and procedures.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Document Intelligence</h3>
                <p>
                  Automate extraction, classification, and analysis of contracts, reports, and emails.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Sentiment Analysis</h3>
                <p>
                  Understand customer emotions in feedback, reviews, and support tickets.
                </p>
              </li>
            </ul>
          </div>
        </div>
      `,
      thirdSection: `
        <div class="py-6">
          <div class="space-y-6">
            <h2 class="text-xl font-bold">
              Implementation Approach
            </h2>
            <ul class="space-y-5 list-decimal pl-6">
              <li>
                <h3 class="font-bold mb-2">Domain Adaptation</h3>
                <p>
                  Fine-tuning models with your industry-specific terminology and data.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Prompt Engineering</h3>
                <p>
                  Developing optimized prompts for your specific use cases.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Knowledge Graph Integration</h3>
                <p>
                  Connecting AI to your structured data sources for more accurate responses.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Continuous Evaluation</h3>
                <p>
                  Regular performance monitoring and model refinement.
                </p>
              </li>
            </ul>
          </div>
        </div>
      `,
    },
  },
  {
    id: 3,
    title: "AI-Powered ERP Tools",
    icon: RiDashboardLine,
    desc: "Custom backend logic and automation for ecommerce, inventory, and business operations powered by intelligent algorithms.",
    detailsPage: {
      banner: require("../assets/images/service-details/ai-erp.jpg"),
      img1: require("../assets/images/service-details/erp-1.jpg"),
      img2: require("../assets/images/service-details/erp-2.jpg"),
      img3: require("../assets/images/service-details/erp-3.jpg"),
      firstSection: `
        <div class="space-y-6">
          <div class="space-y-4">
            <h2 class="text-xl font-bold">
              Intelligent Business Process Automation
            </h2>
            <p>
              Transform your enterprise operations with AI-enhanced ERP solutions that automate decision-making and optimize workflows.
            </p>
            <p>
              Our custom-built modules integrate with your existing systems to add predictive capabilities and intelligent automation.
            </p>
          </div>
        </div>
      `,
      secondSection: `
        <div class="py-6">
          <div class="space-y-6">
            <h2 class="text-xl font-bold">
              Key AI ERP Modules
            </h2>
            <ul class="space-y-5 list-decimal pl-6">
              <li>
                <h3 class="font-bold mb-2">Smart Inventory Management</h3>
                <p>
                  Predictive stock level optimization and automated reordering.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Intelligent Procurement</h3>
                <p>
                  Vendor selection and price negotiation powered by market analysis.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Automated Financial Analysis</h3>
                <p>
                  Real-time cash flow forecasting and anomaly detection.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">HR Process Automation</h3>
                <p>
                  AI-assisted recruitment, onboarding, and performance analysis.
                </p>
              </li>
            </ul>
          </div>
        </div>
      `,
      thirdSection: `
        <div class="py-6">
          <div class="space-y-6">
            <h2 class="text-xl font-bold">
              Implementation Strategy
            </h2>
            <ul class="space-y-5 list-decimal pl-6">
              <li>
                <h3 class="font-bold mb-2">Process Audit</h3>
                <p>
                  Identifying automation opportunities in your current workflows.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Custom Module Development</h3>
                <p>
                  Building AI components that integrate with your existing ERP.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Change Management</h3>
                <p>
                  Training and transition support for your teams.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Continuous Optimization</h3>
                <p>
                  Regular model retraining based on new data and feedback.
                </p>
              </li>
            </ul>
          </div>
        </div>
      `,
    },
  },
  {
    id: 4,
    title: "Cloud & DevOps Setup",
    icon: RiCloudLine,
    desc: "Intelligent infrastructure solutions designed for smart scaling, automated deployments, and seamless operations.",
    detailsPage: {
      banner: require("../assets/images/service-details/cloud-devops.jpg"),
      img1: require("../assets/images/service-details/devops-1.jpg"),
      img2: require("../assets/images/service-details/devops-2.jpg"),
      img3: require("../assets/images/service-details/devops-3.jpg"),
      firstSection: `
        <div class="space-y-6">
          <div class="space-y-4">
            <h2 class="text-xl font-bold">
              AI-Optimized Infrastructure for Modern Businesses
            </h2>
            <p>
              Our cloud and DevOps solutions combine automation with intelligent scaling to give you a robust, cost-effective infrastructure foundation.
            </p>
            <p>
              We implement infrastructure-as-code practices with built-in monitoring and AI-driven optimization for peak performance.
            </p>
          </div>
        </div>
      `,
      secondSection: `
        <div class="py-6">
          <div class="space-y-6">
            <h2 class="text-xl font-bold">
              Our Cloud & DevOps Services
            </h2>
            <ul class="space-y-5 list-decimal pl-6">
              <li>
                <h3 class="font-bold mb-2">AI-Driven Auto Scaling</h3>
                <p>
                  Infrastructure that automatically adjusts based on predictive load analysis.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">GitOps Implementation</h3>
                <p>
                  Automated CI/CD pipelines with built-in quality gates.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Multi-Cloud Strategy</h3>
                <p>
                  Optimal workload placement across providers for cost and performance.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Observability Stack</h3>
                <p>
                  Comprehensive monitoring with AI-powered anomaly detection.
                </p>
              </li>
            </ul>
          </div>
        </div>
      `,
      thirdSection: `
        <div class="py-6">
          <div class="space-y-6">
            <h2 class="text-xl font-bold">
              Implementation Methodology
            </h2>
            <ul class="space-y-5 list-decimal pl-6">
              <li>
                <h3 class="font-bold mb-2">Architecture Review</h3>
                <p>
                  Assessing current infrastructure and identifying optimization areas.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Blueprint Development</h3>
                <p>
                  Creating your customized cloud architecture and DevOps roadmap.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Migration & Automation</h3>
                <p>
                  Seamless transition with automated provisioning and configuration.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Team Enablement</h3>
                <p>
                  Training your staff on the new tools and processes.
                </p>
              </li>
            </ul>
          </div>
        </div>
      `,
    },
  },
  {
    id: 5,
    title: "UI-UX for AI Interfaces",
    icon: RiBrushLine,
    desc: "Specialized interface design for AI decision systems, dashboards, and complex data visualization.",
    detailsPage: {
      banner: require("../assets/images/service-details/ai-uiux.jpg"),
      img1: require("../assets/images/service-details/uiux-1.jpg"),
      img2: require("../assets/images/service-details/uiux-2.jpg"),
      img3: require("../assets/images/service-details/uiux-3.jpg"),
      firstSection: `
        <div class="space-y-6">
          <div class="space-y-4">
            <h2 class="text-xl font-bold">
              Human-Centered Design for AI Systems
            </h2>
            <p>
              We create intuitive interfaces that make complex AI systems accessible and actionable for users at all technical levels.
            </p>
            <p>
              Our designs focus on explainability, trust-building, and efficient human-AI collaboration.
            </p>
          </div>
        </div>
      `,
      secondSection: `
        <div class="py-6">
          <div class="space-y-6">
            <h2 class="text-xl font-bold">
              Our UI/UX Specialties
            </h2>
            <ul class="space-y-5 list-decimal pl-6">
              <li>
                <h3 class="font-bold mb-2">AI Dashboard Design</h3>
                <p>
                  Clean, actionable interfaces for monitoring AI systems and outputs.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Explainability Interfaces</h3>
                <p>
                  Visualizing AI decision processes to build user trust and understanding.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Conversational UI</h3>
                <p>
                  Natural interaction patterns for chatbots and voice interfaces.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Data Visualization</h3>
                <p>
                  Transforming complex AI outputs into clear, actionable insights.
                </p>
              </li>
            </ul>
          </div>
        </div>
      `,
      thirdSection: `
        <div class="py-6">
          <div class="space-y-6">
            <h2 class="text-xl font-bold">
              Design Process
            </h2>
            <ul class="space-y-5 list-decimal pl-6">
              <li>
                <h3 class="font-bold mb-2">AI Capability Mapping</h3>
                <p>
                  Understanding what your AI can do and how users need to interact with it.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">User Journey Design</h3>
                <p>
                  Creating optimal workflows for human-AI collaboration.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Prototype Testing</h3>
                <p>
                  Validating designs with real users before development.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Design System Development</h3>
                <p>
                  Creating reusable UI components for consistent AI experiences.
                </p>
              </li>
            </ul>
          </div>
        </div>
      `,
    },
  },
  {
    id: 6,
    title: "Mobile App Development",
    icon: RiSmartphoneLine,
    desc: "Custom mobile applications with integrated AI capabilities for real estate, HR, productivity, and specialized industries.",
    detailsPage: {
      banner: require("../assets/images/banners/app-development.webp"),
      img1: require("../assets/images/service-details/app-dev-1.webp"),
      img2: require("../assets/images/service-details/app-dev-2.webp"),
      img3: require("../assets/images/service-details/app-dev-3.webp"),
      firstSection: `
        <div class="space-y-6">
          <div class="space-y-4">
            <h2 class="text-xl font-bold">
              AI-Enhanced Mobile Experiences
            </h2>
            <p>
              We build mobile applications that leverage AI to deliver personalized, intelligent functionality tailored to your industry needs.
            </p>
            <p>
              Our apps combine beautiful design with powerful backend AI integration for transformative user experiences.
            </p>
          </div>
        </div>
      `,
      secondSection: `
        <div class="py-6">
          <div class="space-y-6">
            <h2 class="text-xl font-bold">
              Our Mobile App Specializations
            </h2>
            <ul class="space-y-5 list-decimal pl-6">
              <li>
                <h3 class="font-bold mb-2">Real Estate AI Apps</h3>
                <p>
                  Property recommendation engines, virtual tours, and automated valuation models.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">HR & Productivity Tools</h3>
                <p>
                  Intelligent scheduling, meeting assistants, and employee engagement trackers.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Industry-Specific Solutions</h3>
                <p>
                  Custom mobile AI for healthcare, education, retail, and other verticals.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Cross-Platform Development</h3>
                <p>
                  Native-quality apps for both iOS and Android from a single codebase.
                </p>
              </li>
            </ul>
          </div>
        </div>
      `,
      thirdSection: `
        <div class="py-6">
          <div class="space-y-6">
            <h2 class="text-xl font-bold">
              Development Approach
            </h2>
            <ul class="space-y-5 list-decimal pl-6">
              <li>
                <h3 class="font-bold mb-2">AI Integration Planning</h3>
                <p>
                  Identifying where AI can add the most value in your mobile experience.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Edge AI Implementation</h3>
                <p>
                  On-device AI processing for faster performance and privacy.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Progressive Enhancement</h3>
                <p>
                  Building core functionality first, then layering in AI features.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Performance Optimization</h3>
                <p>
                  Ensuring smooth operation even with complex AI workloads.
                </p>
              </li>
            </ul>
          </div>
        </div>
      `,
    },
  },
];
