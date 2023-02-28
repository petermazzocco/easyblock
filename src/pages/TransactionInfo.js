import { Alchemy, Network } from "alchemy-sdk";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import { motion } from "framer-motion";
// import { ethers, BigNumber } from "ethers";

const settings = {
  apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
};
const alchemy = new Alchemy(settings);

const TransactionInfo = () => {
  const { tx } = useParams();
  const [data, setData] = useState("");
  useEffect(() => {
    async function getTxData() {
      try {
        const data = await alchemy.core.getTransaction(tx);
        setData(data);
        // console.log("Transaction data is listed.");
      } catch (err) {
        console.log("Couldn't get transaction info, error:", err);
      }
    }
    getTxData();
  }, [tx]);

  return (
    <div className="bg-animated bg-fixed bg-center bg-cover h-screen">
      <div className="text-center text-white">
        <h1 className="sm:text-3xl xs:text-lg font-extrabold">
          Transaction Details
        </h1>
        <p className="font-thin md:text-xl sm:text-md xs:text-xs italic pt-2">
          {tx.slice(0, 2) + "..." + tx.slice(50)}
        </p>
      </div>
      {!data ? (
        <div className="text-center pt-10">
          <CircularProgress color="inherit" />
        </div>
      ) : (
        <>
          <div className="text-white grid justify-center mt-20 xs:pl-10">
            <div className="ml-10 space-y-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ ease: "easeOut", duration: 0.2, delay: 0.2 }}
              >
                <p className="sm:text-2xl  xs:text-lg font-bold">
                  Transaction Hash
                </p>
                <p className="sm:text-md xs:text-xs md:text-xl">
                  {tx.slice(0, 2) + "..." + tx.slice(50)}
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ ease: "easeOut", duration: 0.2, delay: 0.4 }}
              >
                <p className="sm:text-2xl xs:text-lg font-bold">Amount</p>
                <p className="sm:text-md xs:text-xs md:text-xl">
                  {data.value.toLocaleString() / 10 ** 18} ETH
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ ease: "easeOut", duration: 0.2, delay: 0.6 }}
              >
                <p className="sm:text-2xl xs:text-lg font-bold">Receiver</p>
                <p className="sm:text-md xs:text-xs md:text-xl">{data.to}</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ ease: "easeOut", duration: 0.2, delay: 0.8 }}
              >
                <p className="sm:text-2xl xs:text-lg font-bold">Sender</p>
                <p className="sm:text-md xs:text-xs md:text-xl">{data.from}</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ ease: "easeOut", duration: 0.2, delay: 1 }}
              >
                <p className="sm:text-2xl xs:text-lg font-bold">Price of Gas</p>
                <p className="sm:text-md xs:text-xs md:text-xl">
                  {parseFloat(data.gasPrice)}
                </p>
              </motion.div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default TransactionInfo;
