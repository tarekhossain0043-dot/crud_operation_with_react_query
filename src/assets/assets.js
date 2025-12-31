import { AiOutlineDelete } from "react-icons/ai";
import { BiDollar } from "react-icons/bi";
import { CiBookmark, CiSettings, CiUser } from "react-icons/ci";
import { FiEdit2 } from "react-icons/fi";
import { GoHome } from "react-icons/go";
import { LiaHandHoldingUsdSolid } from "react-icons/lia";
import { LuGraduationCap } from "react-icons/lu";
import { PiGraduationCapThin } from "react-icons/pi";
import { RiFileChartLine } from "react-icons/ri";

export const sideMenu = [
  {
    id: 1,
    to: "/home",
    label: "Home",
    icon: GoHome,
  },
  {
    id: 2,
    to: "/course",
    label: "Course",
    icon: CiBookmark,
  },
  {
    id: 3,
    to: "/students",
    label: "Students",
    icon: LuGraduationCap,
  },
  {
    id: 4,
    to: "/payment",
    label: "Payment",
    icon: LiaHandHoldingUsdSolid,
  },
  {
    id: 5,
    to: "/report",
    label: "Report",
    icon: RiFileChartLine,
  },
  {
    id: 6,
    to: "/settings",
    label: "Settings",
    icon: CiSettings,
  },
];

export const courseUpdate = [
  {
    id: 1,
    icon: PiGraduationCapThin,
    label: "Students",
    bg: "#F0F9FF",
    value: "0",
  },
  {
    id: 2,
    icon: CiBookmark,
    label: "Course",
    bg: "#EE95C5",
    value: "0",
  },
  {
    id: 3,
    icon: BiDollar,
    label: "Payments",
    bg: "#F6C762",
    value: "INR 0.00",
  },
  {
    id: 4,
    icon: CiUser,
    label: "Users",
    bg: "#fff",
    gradient: "linear-to-r from-amber-400 to-amber-600",
    value: "1",
  },
];

export const tableHead = [
  {
    id: 1,
    label: "Name",
  },
  {
    id: 2,
    label: "Email",
  },
  {
    id: 3,
    label: "Phone",
  },
  {
    id: 4,
    label: "Enroll Number",
  },
  {
    id: 5,
    label: "Date of admission",
  },
];

export const studentData = [
  {
    id: 1,
    img: "/admin-img.png",
    name: "Karthi",
    email: "karthi@gmmail.com",
    phone: 7305477760,
    enroll_num: 1234567305477760,
    icons: [FiEdit2, AiOutlineDelete],
  },
  {
    id: 2,
    img: "/admin-img.png",
    name: "Karthi",
    email: "karthi@gmmail.com",
    phone: 7305477760,
    enroll_num: 1234567305477760,
    icons: [FiEdit2, AiOutlineDelete],
  },
  {
    id: 3,
    img: "/admin-img.png",
    name: "Karthi",
    email: "karthi@gmmail.com",
    phone: 7305477760,
    enroll_num: 1234567305477760,
    icons: [FiEdit2, AiOutlineDelete],
  },
  {
    id: 4,
    img: "/admin-img.png",
    name: "Karthi",
    email: "karthi@gmmail.com",
    phone: 7305477760,
    enroll_num: 1234567305477760,
    icons: [FiEdit2, AiOutlineDelete],
  },
  {
    id: 5,
    img: "/admin-img.png",
    name: "Karthi",
    email: "karthi@gmmail.com",
    phone: 7305477760,
    enroll_num: 1234567305477760,
    icons: [FiEdit2, AiOutlineDelete],
  },
  {
    id: 6,
    img: "/admin-img.png",
    name: "Karthi",
    email: "karthi@gmmail.com",
    phone: 7305477760,
    enroll_num: 1234567305477760,
    icons: [FiEdit2, AiOutlineDelete],
  },
];
