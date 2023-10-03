import React, {useState, useCallback, useMemo, useEffect} from "react";
import { useRouter } from "next/router";
import Dashboard from "./Dashboard";
import Reimburse from "./Reimburse";
import Rentals from "./Rentals";
import { BiTask } from "react-icons/bi";
import { AiOutlineLogout, AiOutlineHome } from "react-icons/ai";
import {BsFillBuildingsFill} from "react-icons/bs";
import { CiMenuBurger } from "react-icons/ci";
import { TfiClose } from "react-icons/tfi";
import { BsPersonCheckFill } from "react-icons/bs";
import Link from "next/link";
import { toast } from "react-toastify";
import Supabase from "@/components/supabase/supabase";
import { TabsTypes } from "@/types/types";

const tabs: TabsTypes[] = [
  {
    title: (
      <div className="flex items-center">
        <AiOutlineHome /> <span className="pl-2">Dashboard</span>
      </div>
    ),
    query: "dashboard",
  },

  {
    title: (
      <div className="flex items-center">
        <BsFillBuildingsFill /> <span className="pl-2">Rentals</span>
      </div>
    ),
    query: "rentals",
  },
  {
    title: (
      <div className="flex items-center">
        <BiTask /> <span className="pl-2">Reimburse</span>
      </div>
    ),
    query: "reimburse",
  },
];

const TabsComponent: any = {
  dashboard: Dashboard,
  rentals: Rentals,
  reimburse: Reimburse,
};

const Tabs = () => {
  const router = useRouter();
  const [tabNavigation, setTabNavigation] = React.useState<boolean>(false);
  const handleTabChange = (tab: string) => {
    router.replace(
      { pathname: router.asPath.split("?")[0], query: { tab } },
      undefined,
      {
        shallow: true,
      }
    );
  };

  const CurrentTab = useMemo(
    () => (router.query.tab as string) || "blog",
    [router.query]
  );

  const Component = useCallback(() => {
    const tab = tabs.find((tab) => tab.query === CurrentTab);
    if (!tab) {
      return <Dashboard />;
    }
    const TabComponent = TabsComponent[CurrentTab || "blog"];
    return <TabComponent />;
  }, [CurrentTab]);

  const [user, setUser] = useState<any>("");
  useEffect(() => {
    const getUserData = async () => {
      await Supabase.auth.getUser().then((value) => {
        if (value.data?.user) {
          setUser(value.data.user?.email);
        }
      });
    };
    getUserData();
  }, [user]);

  const handleLogOut = async () => {
    const { error } = await Supabase?.auth.signOut();
    if (error) {
      toast.error("An error ocurred");
    } else {
      router.push("/");
    }
  };

  return (
    <main className="2xl:container 2xl:mx-auto">
      <div className="items-center sm:p-5 p-3 flex justify-between border-b">
        <Link href="/" className="flex items-center">
          <span className="pl-1 text-2xl text-primary font-bold">Urban Nest</span>
        </Link>

        <p className="md:flex hidden items-center text-3xl xl:text-2xl text-black">
          <BsPersonCheckFill />{" "}
          <span className="text-sm ml-3">
            {!user
              ? "Hello, kindly login to see your recent rentals"
              : user}
          </span>
        </p>

        <div
          onClick={() => setTabNavigation(!tabNavigation)}
          className="text-2xl md:hidden "
        >
          {!tabNavigation ? <CiMenuBurger /> : <TfiClose />}
        </div>
      </div>

      <div className="grid flex-grow w-full gap-x-1 md:grid-cols-3 lg:grid-cols-5">
        <section className="md:bg-white bg-black w-full ">
          <ul
            className={` flex md:pt-10 md:h-fit md:static md:w-full absolute px-5 w-full left-0 top-[78px] py-5 text-lg cursor-pointer flex-col md:items-start md:space-x-0 ${
              !tabNavigation
                ? "hidden  md:block"
                : " flex sm:items-center z-50 bg-white text-black  h-full"
            }`}
          >
            {tabs.map((tab) => (
              <div
                key={tab.query}
                className="pb-7"
                onClick={() => {
                  handleTabChange(tab.query);
                  setTabNavigation(false);
                }}
              >
                <li
                  className={`text-lg ${
                    tab.query === CurrentTab
                      ? "bg-green-500 rounded-lg text-white w-fit"
                      : ""
                  } p-2`}
                >
                  {tab.title}
                </li>
              </div>
            ))}
            <div
              className="flex items-center  text-lg px-2"
              onClick={handleLogOut}
            >
              <AiOutlineLogout className="mr-2" /> {!user ? "Home" : "Log Out"}
            </div>
          </ul>
        </section>

        <section className=" w-full h-full py-5 md:col-span-2 lg:col-span-4">
            <Component />
        </section>
      </div>
    </main>
  );
};

export default Tabs;