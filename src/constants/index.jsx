import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Features", href: "#" },
  { label: "Workflow", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Testimonials", href: "#" },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable.  ",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Working with the team at Fusion Dynamics was a game-changer for our project. Their attention to detail and solutions helped us achieve our goals faster than we thought possible.",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Interactive Pie-Chart",
    description:
      "Easily view your spending levels with a user-friendly pie-chart that distributes your spendings into core sub-categories",
  },
  {
    icon: <Fingerprint />,
    text: "Multi-Platform Compatibility",
    description:
      "Luna is an application that will eventually run seamlessly through multiple platforms, including mobile, and desktop",
  },
  {
    icon: <ShieldHalf />,
    text: "Built-in Templates",
    description:
      "Jumpstart your financial goals with a variety of built-in budget templates for different types of lifestyles",
  },
  {
    icon: <BatteryCharging />,
    text: "Real-Time Preview",
    description:
      "Preview your potential financial wins and losses in real-time as you make changes to your spending, allowing for quick adjustments.",
  },
  {
    icon: <PlugZap />,
    text: "Interactive Calendar",
    description:
      "Easily holds you accountable for your budgeting goals, it seamlessly awards you by displaying your streaks and also reminds you when you are slacking on budgeting",
  },
  {
    icon: <GlobeLock />,
    text: "Analytics Dashboard",
    description:
      "Gain valuable insights into your own spending habits over the course of a set time you decide.",
  },
];

export const checklistItems = [
  {
    title: "Tracking budgets made easy",
    description:
      "Track the performance of your budgeting easily with our many features",
  },
  {
    title: "Review your budgeting in a secure manner",
    description:
      "Review your budgeting with confidence, with security measures through AWS databases",
  },
  {
    title: "AI Assistance",
    description:
      "Evaluate your budgeting performance score with a 24/7 AI chatbot",
  },
  {
    title: "Share streaks with friends",
    description:
      "Make budgeting fun in a friendly competition manner",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Pie-Chart",
      "Interactive Calendar",
      "AI assistance",
      "Streak Counter",
    ],
  },
  {
    title: "Pro",
    price: "N/A",
    features: [
      "N/A",
      "N/A",
      "N/A",
      "N/A",
    ],
  },
  {
    title: "Enterprise",
    price: "N/A",
    features: [
      "N/A",
      "N/A",
      "N/A",
      "N/A",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
