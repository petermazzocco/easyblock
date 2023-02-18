import { Alchemy, Network } from "alchemy-sdk";
import { useEffect, useState } from "react";
import React from "react";
import { CircularProgress } from "@mui/material";
import { NavLink } from "react-router-dom";

const settings = {
  apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
};

const alchemy = new Alchemy(settings);
const Blocks = () => {
  const [blockNumber, setBlockNumber] = useState();

  useEffect(() => {
    async function getBlocks() {
      try {
        const blockNumber = await alchemy.core.getBlockNumber();
        setBlockNumber(blockNumber);
      } catch {
        console.log("Cannot get recent block");
      }
    }
    getBlocks();
    const interval = setInterval(() => {
      getBlocks();
    }, 5000);
    return () => clearInterval(interval);
    //eslint-disable-next-line
  }, [blockNumber]);

  return (
    <div className="grid justify-center">
      {!blockNumber ? (
        <CircularProgress color="inherit" />
      ) : (
        <div className="text-center grid justify-center">
          <NavLink to={`blocks/${blockNumber}`}>
            <button className=" block max-w-sm p-6 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-200 focus:ring-4 focus:ring-gray-200 rounded-md cursor-pointer">
              <p className="text-xl font-extrabold">{blockNumber}</p>
            </button>
          </NavLink>
          <p className="text-xs font-thin pt-2">Updates Every 5 Seconds</p>
        </div>
      )}
    </div>
  );
};

export default Blocks;
