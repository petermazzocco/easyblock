import { Alchemy, Network } from "alchemy-sdk";
import { useEffect, useState } from "react";
import React from "react";
import { CircularProgress } from "@mui/material";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const settings = {
  apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
};

const alchemy = new Alchemy(settings);

const Transactions = (props) => {
  // const { tx } = useParams();
  const [transactions, setTransactions] = useState();
  useEffect(() => {
    async function getTransactions() {
      try {
        const data = await alchemy.core.getBlockWithTransactions(props.block);
        setTransactions(data.transactions);
        console.log("Transactions are listed");
      } catch {
        console.log("Couldn't get transactions");
      }
    }

    getTransactions();
  }, [props.block]);

  return (
    <div>
      {!transactions ? (
        <div className="h-screen text-white">
          <CircularProgress color="inherit" />
        </div>
      ) : (
        <div class="grid md:grid-cols-5 xs:grid-cols-1 justify center gap-6 mx-10 truncate  text-ellipsis overflow-hidden ">
          {transactions &&
            transactions.map((tr, i) => {
              return (
                <NavLink to={`/transactions/${tr.hash}`}>
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
                    className="w-4/5 text-center flex-wrap  p-6 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-200 focus:ring-4 focus:ring-gray-200 rounded-md cursor-pointer"
                  >
                    <h4 className="text-xs font-bold text-ellipsis overflow-hidden">
                      TX Hash: <span className="font-thin"> {tr.hash} </span>
                    </h4>
                  </motion.button>
                </NavLink>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default Transactions;
