import { Truck } from "lucide-react";
import {   ArrowDownUp } from "lucide-react";
import { PackageOpen } from "lucide-react";
// import { ChartColumnIncreasing } from "lucide-react";
import { Ship } from "lucide-react";
import {  Plane } from "lucide-react";
import { TrendingUp } from "lucide-react";

import medic from "../assets/medic.webp";
import poojP from "../assets/poojaP.jpeg";
import spicesIndian from "../assets/spicesIndian.webp"
import warehouse from "../assets/warehouse.jpg";
import groundShipping from "../assets/GroundShipping.jpg";
import ship from "../assets/ship.jpg"
import logistics from "../assets/logistics.jpg"

import exportImport from "../assets/export.jpg"

import sunflower from "../assets/sunflower.jpg";
import onion1 from "../assets/onion1.jpg";
import onion2 from "../assets/onion2.jpg";
import potato from "../assets/potato.jpg";
import coconutshell from "../assets/cocoshell.jpeg";
import nut from "../assets/nut.jpg";
import aeroplane from "../assets/aeroplane.jpg";
import sesame from "../assets/sesame.jpg";

import blackPepper from "../assets/black pepper .jpg"
import cardamom from "../assets/cardamom.jpg";
import cinnamon from "../assets/cinnamon.jpg";
import cloves from "../assets/cloves.jpg";
import coriander from "../assets/coriander.jpg";
import cumin from "../assets/cumin.jpg";
import fenugreek from "../assets/fenugreek.jpg";
import mustard from "../assets/mustard.jpg";
import redchilli from "../assets/redchilli.webp";
import turmeric from "../assets/turmeric.jpeg";


import { LeafyGreen } from "lucide-react";
import {CirclePlus } from "lucide-react";
import { HandCoins } from "lucide-react";
import {Bean} from  "lucide-react";
import { Icon } from 'lucide-react';
import { coconut } from '@lucide/lab';


import coco from "../assets/coconut.jpg";
import seeds from "../assets/seeds.jpeg";
import veggies from "../assets/veggies.jpg";


export const navItems = [
  { label: "Home", href: "#"},
  { label: "About", href: "#" },
  { label: "Services", href: "#" },
  { label: "Products", href: "#" },
  { label: "Certificate", href: "#" },
  // { label: "Gallery", href: "#" },
];

export const servicesData = [
  {
    icon:<PackageOpen />,
    img: warehouse,
    text: "Warehousing",
    description:
      "Secure and organized storage solutions to keep your inventory safe and accessible, tailored to meet your specific needs."
  },
  {
    icon: <Plane />,
    img: aeroplane,
    text: "Air Delivery",
    
    description:
      "Fast and reliable air freight services for timely deliveries across the globe, ensuring your shipments arrive on schedule.",
  },
  {
    icon:<Ship />,
    img: ship,
    text: "Sea Delivery",
    description:
      "Cost-effective and efficient sea freight solutions for bulk shipments, providing global reach with dependable transit times."
  },
  {
    icon:<Truck />,
    img: groundShipping,
    text: "Ground Shipping",
    description:
      "Flexible and reliable ground transportation options for domestic and regional deliveries, optimizing your supply chain."
  },
  {
    icon:<ArrowDownUp />,
    img: exportImport,
    text:"Export/Import",
    description:
    "Expert handling of export and import processes, ensuring smooth and compliant international trade operations."
  },
  {
    icon:<TrendingUp />,
    img: logistics,
    text: "Third-Party Logistics",
    description:
      "Streamlined local logistics services to manage and distribute goods efficiently within your region, enhancing operational efficiency."
  },
];

export const prods = [
  { id:1,
    icon:<PackageOpen />,
    img: spicesIndian,
    text: "Indian Spices",
    description:
      "We offer premium, farm-fresh Indian spices, known for their rich flavor and quality. Perfect for culinary use and bulk export.",
      Separateproducts:[
        {
          "id": 1,
          "name": "Turmeric",
          "image": turmeric,
          "description": "Turmeric is a vibrant yellow spice used in Indian curries. It is known for its earthy flavor and is often used for its anti-inflammatory properties."
        },
        {
          "id": 2,
          "name": "Cumin",
          "image": cumin,
          "description": "Cumin seeds are small, elongated, and brown in color. They add a warm, nutty flavor to many dishes and are commonly used in curry powders and spice blends."
        },
        {
          "id": 3,
          "name": "Cardamom",
          "image": cardamom,
          "description": "Cardamom has a unique, complex flavor that is both sweet and savory. It is widely used in Indian sweets and savory dishes, as well as in masala chai."
        },
        {
          "id": 4,
          "name": "Coriander",
          "image": coriander,
          "description": "Coriander seeds have a light, lemony flavor and are used in both whole and ground forms in Indian cuisine. The leaves (cilantro) are also widely used for garnishing."
        },
        {
          "id": 5,
          "name": "Cloves",
          "image": cloves,
          "description": "Cloves are aromatic flower buds that have a strong, pungent flavor. They are often used in biryanis, garam masala, and a variety of Indian dishes for added depth of flavor."
        },
        {
          "id": 6,
          "name": "Cinnamon",
          "image":cinnamon,
          "description": "Cinnamon is a sweet and warm spice used in both sweet and savory dishes in India. It is an essential component in garam masala and various curries."
        },
        {
          "id": 7,
          "name": "Fenugreek",
          "image": fenugreek,
          "description": "Fenugreek seeds have a slightly bitter taste and are used in many Indian pickles, curry powders, and vegetable dishes for their unique flavor."
        },
        {
          "id": 8,
          "name": "Mustard Seeds",
          "image": mustard,
          "description": "Mustard seeds are small, round, and used whole or ground in Indian cooking. They have a sharp, pungent taste and are often used to temper oil in South Indian dishes."
        },
        {
          "id": 9,
          "name": "Red Chili Powder",
          "image": redchilli,
          "description": "Red chili powder is made from dried red chilies and is widely used in Indian cuisine for heat and color. It is a staple spice in most Indian households."
        },
        {
          "id": 10,
          "name": "Black Pepper",
          "image": blackPepper,
          "description": "Black pepper is a versatile spice used in Indian dishes for its pungent heat. It is a key ingredient in various spice blends, including garam masala."
        }
      ]
      
        

  },
  { id:2,
    icon:<LeafyGreen />,
    img: veggies,
    text: "Vegetables",
    description:
      "Supplying fresh, top-grade vegetables like onions and potatoes, sourced directly from trusted farms for consistent and timely delivery.",
      Separateproducts:[
        {
          "id": 1,
          "name": "Small Onion",
          "image": onion1,
          "description": "Small onions, also known as shallots, have a mild, sweet flavor. They are often used in South Indian dishes, sambar, and pickles."
        },
        {
          "id": 2,
          "name": "Big Onion",
          "image": onion2,
          "description": "Big onions are a staple in cooking, adding a strong, pungent flavor. They are commonly used in gravies, curries, and salads."
        },
        {
          "id": 3,
          "name": "Potato",
          "image": potato,
          "description": "Potatoes are versatile vegetables used in a variety of dishes, from curries to fries. They are rich in carbohydrates and fiber."
        }
      ]
      
  },
  { id:3,
    icon:<Bean />,
    img: seeds,
    text: "Oil Seeds",
    description:
      "Our high-quality oil seeds are ideal for oil production and industrial use, ensuring purity and reliability.",
      Separateproducts:[
        
          {
            "id": 1,
            "name": "Sunflower",
            "image": sunflower,
            "description": "Sunflower oil is a light, healthy oil rich in Vitamin E and commonly used for frying and cooking. It has a mild flavor that doesn't overpower dishes."
          },
          {
            "id": 2,
            "name": "Coconut",
            "image": coconutshell,
            "description": "Coconut oil is widely used in cooking and for skin care. It has a rich flavor and high smoke point, making it ideal for frying and baking."
          },
          {
            "id": 3,
            "name": "Sesame",
            "image": sesame,
            "description": "Sesame oil has a distinct nutty flavor and is rich in antioxidants. It is commonly used in Indian, Chinese, and Southeast Asian cuisines."
          },
          {
            "id": 4,
            "name": "Groundnut",
            "image": nut,
            "description": "Groundnut oil, also known as peanut oil, is a versatile oil with a mild flavor. It’s great for deep frying and cooking, offering a high smoke point."
          }
        
        
      ]
  },
  { id:4,
    icon: <Icon iconNode={coconut} />,
    img: coco,
    text: "Coconut (Raw,Powder)",
    
    description:
      "We provide both raw coconuts and processed coconut powder, sourced from quality plantations, suitable for food, cosmetic, and industrial applications.",
  },
  { id:5,
    icon:<CirclePlus strokeWidth={3} />,
    img: medic,
    text: "Pharmateucal Products",
    description:
      "Offering a range of pharmaceutical products that meet global health standards, ensuring safety and reliability for medical use."
  },
 
  { id:6,
    icon:<HandCoins />,
    img: poojP,
    text:"Pooja Products",
    description:
    "Supplying pure and authentic pooja items, perfect for religious ceremonies and spiritual practices."
  },
  ]


