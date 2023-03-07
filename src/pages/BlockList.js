import { Alchemy, Network } from "alchemy-sdk";
import { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
import { Outlet, NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const settings = {
  apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
};

const alchemy = new Alchemy(settings);

const BlocksList = () => {
  const [blockNumber, setBlockNumber] = useState();
  const [blockList, setBlockList] = useState();

  useEffect(() => {
    const listBlocks = [];

    async function getBlocks() {
      try {
        const blockNumber = await alchemy.core.getBlockNumber();
        setBlockNumber(blockNumber);
        for (let i = blockNumber; i >= blockNumber - 51; i--) {
          const block = await alchemy.core.getBlock(i);
          listBlocks.push(block);
        }
        setBlockList(listBlocks);
      } catch {
        console.log("Cannot get recent block");
      }
    }

    getBlocks();
  }, [blockNumber]);

  return (
    <div className="bg-animated bg-fixed bg-cover bg-center text-white">
      {!blockList ? (
        <div className="h-screen pb-10 pt-10 text-center">
          <h1 className="text-xl">Fetching Blocks</h1>
          <div className="pt-10">
            <CircularProgress color="inherit" />
          </div>
        </div>
      ) : (
        <>
          <div className="pb-10 pt-10 text-center">
            <h1 className="text-xl">Recent Blocks</h1>
            <p className="text-lg font-thin italic">Click For More Details</p>
          </div>
          <div className="grid lg:grid-cols-5 sm:grid-cols-3 xs:grid-cols-1 place-items-center xs:w-auto justify center gap-6 mx-12 text-center">
            {blockList.map((block, i) => {
              return (
                <NavLink to={`${block.number}`}>
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ ease: "easeOut", duration: 1 }}
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.2 },
                    }}
                    key={i}
                    className=" block max-w-sm sm:p-6 xs:p-4 text-white hover:text-gray-900 bg-transparent border-2 border-gray-300 focus:outline-none hover:bg-gray-200 focus:ring-4 focus:ring-gray-200 rounded-md cursor-pointer"
                  >
                    <p className="text-lg font-bold">{block.number}</p>
                  </motion.button>
                </NavLink>
              );
            })}
          </div>
        </>
      )}
      <Outlet />
    </div>
  );
};

export default BlocksList;
