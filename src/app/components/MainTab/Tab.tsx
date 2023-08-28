"use client";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import React from "react";
import AllDolares from "../Dolar/AllDolares";
import AllCriptos from "../Cripto/AllCriptos";

interface DolarData {
  oficial: number;
  blue: number;
  solidario: number;
  ccb: number;
  mep: number;
  mepal30ci: number;
  mepgd30: number;
  mepgd30ci: number;
  ccl: number;
  cclal30: number;
  cclal30ci: number;
  cclgd30: number;
  cclgd30ci: number;
  blue_bid: number;
  qatar: number;
  mep_var: number;
  ccl_var: number;
  ccb_var: number;
  blue_var: number;
  time: string;
}

const MainTab = () => {
  const data1 = [
    {
      label: "Dolares",
      value: "componente1",
      desc: <AllDolares />,
    },
    {
      label: "Criptomonedas",
      value: "componente2",
      desc: <AllCriptos />,
    },
  ];

  return (
   
    <Tabs id="custom-animation" value="componente1" className='py-8'>
      <TabsHeader
        className="bg-transparent md:w-[20rem]"
        indicatorProps={{
          className: "dark:bg-red-500 border border-black ",
        }}
      >
        {data1.map(({ label, value }) => (
          <Tab key={value} value={value}>
            <h1 className="text-gray-800 dark:text-gray-100 font-bold text-lg md:text-xl">
              {label}
            </h1>
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody
        animate={{
          initial: { y: -250 },
          mount: { y: 0 },
          unmount: { y: -250 },
        }}
      >
        {data1.map(({ value, desc }) => (
          <TabPanel key={value} value={value} className="h-full p-0">
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
    
  );
};

export default MainTab;
