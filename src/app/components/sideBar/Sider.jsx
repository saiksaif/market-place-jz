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
      a: {
        title: "Home",
        icon: homeIcon,
        path: "/",
      },
      b: {
        title: "Orders",
        icon: categoryIcon,
        path: "/orders",
      },
    },
    {
      a: {
        title: "Profile",
        icon: profileIcon,
        path: "/gig",
      },
      b: {
        title: "Wallet",
        icon: checkoutIcon,
        path: "/wallet",
      },
    },
    {
      a: {
        title: "Boost",
        icon: settingIcon,
        path: "/boost-gig",
      },
      b: {
        title: "Community",
        icon: supportIcon,
        path: "/community",
      },
    }
  ];
  return (
    <div className={style.sidebar + ' w-5/6'}>
      <div className={style.logo + ' py-6 flex justify-center'}>
        <Image src={Logo} alt="Logo" className="img-fluid" />
      </div>

      <div className="mt-4" gutter={20}>
        {menuItems.map((menuItem, idx) => (
          <div key={idx} span={12} className="pb-2 flex flex-row justify-between">
            <Link
              href={menuItem?.a.path}
              className={`${style.cards} `}
            >
              <div className={style.imageblock}>
                <Image
                  src={menuItem.a.icon}
                  alt={menuItem.a.title}
                  className="img-fluid"
                />
              </div>
              <h3 className="pt-3">{menuItem.a.title}</h3>
            </Link>
            {menuItem.b ? 
              <Link
              href={menuItem?.b.path}
              className={`card ${style.cards} `}
              >
                <div className={style.imageblock}>
                  <Image
                    src={menuItem.b.icon}
                    alt={menuItem.b.title}
                    className="img-fluid"
                  />
                </div>
                <h3 className="pt-3">{menuItem.b.title}</h3>
              </Link>
            : ' '}
          </div>
        ))}{" "}

        <div>
          <h2>Active People</h2>
        </div>
        <div className="mb-2">
          <div className={style.activeList + ' py-2 flex flex-col gap-2'}>
            {[1, 2, 3].map((idx) => (
              <div key={idx} className="mb-2">
                <h4 className={style.title}>Nadia Alie_09</h4>
                <span>
                  <Image
                    src={personIcon}
                    alt="Profile"
                    className="img-fluid"
                  />
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
