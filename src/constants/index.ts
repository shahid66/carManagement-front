import { Bot, HousePlus, LayoutDashboard, Send, User } from "lucide-react";

export const protectedRoutes = [


  "/admin",
  "/admin/:page",
  "/landlord",
  "/landlord/:page",
  "/tenant",
  "/tenant/:page",
];

export const tenantRoutes = [
  {
    title: "Dashboard",
    url: "/tenant/dashboard",
    icon: LayoutDashboard,
    isActive: true,
  },
  {
    title: "Request",
    url: "/tenant/request",
    icon: Bot,
    items: [
      {
        title: "Manage Request",
        url: "/tenant/request",
      },
    ],
  },
  {
    title: "Profile",
    url: "/tenant/profile",
    icon: User,
    isActive: true,
  },
];
export const landlordRoutes = [
  {
    title: "Dashboard",
    url: "/landlord/dashboard",
    icon: LayoutDashboard,
    isActive: true,
  },
  {
    title: "Listings",
    url: "/landlord/listing",
    icon: Bot,
    items: [
      {
        title: "Manage Listings",
        url: "/landlord/listing",
      },
    ],
  },

  {
    title: "Request",
    url: "/landlord/request",
    icon: Bot,
    items: [
      {
        title: "Manage Request",
        url: "/landlord/request",
      },
    ],
  },
  {
    title: "Profile",
    url: "/landlord/profile",
    icon: User,
    isActive: true,
  },
];
export const adminRoutes = [
  {
    title: "Dashboard",
    url: "/admin/dashboard",
    icon: LayoutDashboard,
    isActive: true,
  },
  {
    title: "Listings",
    url: "/admin/listing",
    icon: HousePlus,
    items: [
      {
        title: "Manage Listing",
        url: "/admin/listing",
      },
    ],
  },

  {
    title: "User",
    url: "/admin/user",
    icon: Bot,
    items: [
      {
        title: "Manage User",
        url: "/admin/user",
      },
    ],
  },
  {
    title: "Profile",
    url: "/admin/profile",
    icon: User,
    isActive: true,
  },
];

export const Category = [
  "Apartment",
  "Condominium ",
  "Single-Family Home",
  "Multi-Family Home",
  "Townhouse",
  "Duplex",
  "Triplex",
  "Bungalow ",
  "Cottage",
  "Mansion",
  "Villa",
];
