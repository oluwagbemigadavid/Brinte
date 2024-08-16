import { LinkedInIcon, SlackIcon, xIcon, YoutubeIcon } from "../../assets";
import { CONTACTPAGE } from "../../pages";
import { FooterLinkType, MenuLinkType, RouteConfigType } from "../types";

export const menuLinks : MenuLinkType[] = [
    {
       name: "Products",
       target: '/' 
    },
    {
       name: "Customers",
       target: '/customers' 
    },
    {
       name: "Docs",
       target: '/documentation' 
    },
    {
       name: "Our story",
       target: '/our-story' 
    },
    {
       name: "Pricing",
       target: '/pricing' 
    },
    {
       name: "Contact",
       target: '/contact' 
    },
]


export const menuRoutes: RouteConfigType[] = [
   { path: '/', component: CONTACTPAGE, title: 'Contact' },
   { path: '/', component: CONTACTPAGE, title: 'Contact' },
   { path: '/', component: CONTACTPAGE, title: 'Contact' },
   { path: '/', component: CONTACTPAGE, title: 'Contact' },
   { path: '/', component: CONTACTPAGE, title: 'Contact' },
 ];

export const footerLinks: FooterLinkType[] = [
   {
      header: 'RESOURCES',
      links: menuLinks.slice(0, -1) 
   }, 
   {
      header: 'CONNECT WITH US',
      links: [
         {
            name: 'LinkedIn',
            target: '/',
            icon: LinkedInIcon
         },
         {
            name: 'X',
            target: '/',
            icon: xIcon
         },
         {
            name: 'Youtube',
            target: '/',
            icon: YoutubeIcon
         },
         {
            name: 'Slack',
            target: '/',
            icon: SlackIcon
         }
      ]
   }, 
   {
      header: 'LEGAL',
      links: [
         {
            name: 'Terms',
            target: '/',
         }, 
         {
            name: 'Privacy',
            target: '/',
         }
      ]
   }
]