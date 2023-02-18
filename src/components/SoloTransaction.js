import { Alchemy, Network } from "alchemy-sdk";
import { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
import { motion } from "framer-motion";

const settings = {
  apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
};

const alchemy = new Alchemy(settings);

const SoloTransaction = (props) => {
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
        <CircularProgress color="inherit" />
      ) : (
        <div class="grid grid-cols-4 justify center gap-6 mx-10 ">
          {transactions &&
            transactions.map((tr, i) => {
              return (
                <div
                  key={i}
                  className="truncate text-center flex-wrap  p-6 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-200 focus:ring-4 focus:ring-gray-200 rounded-md cursor-pointer"
                >
                  <h4 className="text-xs font-bold text-ellipsis overflow-hidden">
                    TX Hash: <span className="font-thin"> {tr.hash} </span>
                  </h4>
                  <p className="text-xs font-bold">
                    From: <span className="font-thin">{tr.from}</span>
                  </p>
                  <p className="text-xs font-bold">
                    To: <span className="font-thin">{tr.to}</span>
                  </p>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default SoloTransaction;
