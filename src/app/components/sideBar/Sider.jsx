"use client"

import style from "./style.module.css";
import Image from "next/image";
import Logo from "../../../../public/assets/images/LOGO-HERE.png";
import homeIcon from "../../../../public/assets/images/home.png";
import categoryIcon from "../../../../public/assets/images/category.png";
import profileIcon from "../../../../public/assets/images/profile.png";
import checkoutIcon from "../../../../public/assets/images/checkout.png";
import settingIcon from "../../../../public/assets/images/setting.png";
import supportIcon from "../../../../public/assets/images/support.png";
import personIcon from "../../../../public/assets/images/profileimg.png";
import Link from "next/link";
// import { useRouter } from "next/router";

const SideBar = () => {
  // const router = useRouter();
  // const location =
  //   typeof window !== "undefined" ? window.location.pathname : "/home";
  const menuItems = [
    {
      title: "Home",
      icon: homeIcon,
      path: "/",
    },
    {
      title: "Orders",
      icon: categoryIcon,
      path: "/orders",
    },
    {
      title: "Profile",
      icon: profileIcon,
      path: "/gig",
    },
    {
      title: "Wallet",
      icon: checkoutIcon,
      path: "/wallet",
    },
    {
      title: "Boost",
      icon: settingIcon,
      path: "/boost-gig",
    },
    {
      title: "Community",
      icon: supportIcon,
      path: "/community",
    },
  ];
  return (
    <div className={style.sidebar + ' border border-red-800'}>
      <div className={style.logo}>
        <Image src={Logo} alt="Logo" className="img-fluid" />
      </div>
      <div className="mt-4" gutter={20}>
        {menuItems.map((menuItem, idx) => (
          <div key={idx} span={12} className="mb-2">
            <Link
              href={menuItem?.path}
              className={`card ${style.cards} `}
            >
              <div className={style.imageblock}>
                <Image
                  src={menuItem.icon}
                  alt={menuItem.title}
                  className="img-fluid"
                />
              </div>
              <h3>{menuItem.title}</h3>
            </Link>
          </div>
        ))}{" "}
        <div span={24} className="mb-2">
          <h2>Active People</h2>
        </div>
        <div span={24} className="mb-2">
          <ul className={style.activeList}>
            {[1, 2, 3].map((item, idx) => (
              <li key={idx} className="mb-2">
                <h4 className={style.title}>Nadia Alie_09</h4>
                <span>
                  <Image
                    src={personIcon}
                    alt="Profile"
                    className="img-fluid"
                  />
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
