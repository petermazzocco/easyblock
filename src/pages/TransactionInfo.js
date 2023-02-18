import { Alchemy, Network } from "alchemy-sdk";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import { motion } from "framer-motion";

const settings = {
  apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
};

const alchemy = new Alchemy(settings);

const TransactionInfo = () => {
  const { tx } = useParams();

  const [data, setData] = useState();
  useEffect(() => {
    async function getTxData() {
      try {
        const data = await alchemy.core.getTransactionReceipt(tx, true);
        setData(data);
        console.log("Transaction data is listed.");
      } catch {
        console.log("Couldn't get transaction info");
      }
    }

    getTxData();
  }, [tx]);

  // const [timestamp, setTimestamp] = useState();
  // useEffect(() => {
  //   async function getTimestamp() {
  //     try {
  //       const time = await alchemy.core.getBlockWithTransactions(tx);
  //       setTimestamp(time.timestamp);
  //       console.log(`Date: ${time.timestamp}`);
  //     } catch {
  //       console.log("Invalid Date");
  //     }
  //   }
  //   getTimestamp();
  // }, []);

  return (
    <div className="bg-animated bg-fixed bg-center bg-cover h-screen">
      <div className="text-center text-white">
        <h1 className="sm:text-3xl xs:text-lg font-extrabold">
          Transaction Details
        </h1>
        <p className="font-thin md:text-xl sm:text-md xs:text-xs italic pt-2">
          {tx}
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
                <p className="sm:text-md xs:text-xs md:text-xl">{tx}</p>
              </motion.div>
              {/* <p className="text-2xl font-bold">Timestamp</p>
              <p>{new Date(timestamp * 1000).toLocaleString()}</p> */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ ease: "easeOut", duration: 0.2, delay: 0.4 }}
              >
                <p className="sm:text-2xl xs:text-lg font-bold">Amount</p>
                <p className="sm:text-md xs:text-xs md:text-xl">{data.value}</p>
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
                <p className="sm:text-2xl xs:text-lg font-bold">Gas Used</p>
                <p className="sm:text-md xs:text-xs md:text-xl">
                  {data.gasUsed.toString()}
                </p>
              </motion.div>
            </div>
          </div>
          {/* <div className="mx-20 text-white mt-20 ">
            <h2 className="font-bold text-xl">What Does It Mean?</h2>
            <p>
              Let's dive into what each of these mean <br></br>
              <span className="font-black underline">
                Transaction Hash:
              </span>{" "}
              You know how when you get a long CVS receipt and it has a order
              number on it? Consider this the order number of the receipt.{" "}
              <br></br>
              <span className="font-black underline">Amount:</span> This is
              pretty self explanitory, but it's the amount that was sent in ETH
              to either another person or a smart contract. <br></br>
              <span className="font-black underline">
                Sender & Receiver:
              </span>{" "}
              This is who sent, or approved, the transaction, and who, or what,
              recieved the transaction. Receivers can either be another
              externally owned account like another persons wallet, or it could
              be a smart contract, like buying an NFT. <br></br>
              <span className="font-black underline">Nonce:</span> Now this is a
              little tricky. Simply put, <span className="italic">nonce's</span>{" "}
              are a way to prevent duplicate transactions. It tells the miner
              that it's a new transaction and it gets pushed through. This is
              crucial for security!<br></br>
              <span className="font-black underline">Gas Used:</span> Look at
              this as the fee for the transaction. Each transaction comes with a
              fee to the network.<br></br>
            </p>
          </div> */}
        </>
      )}
    </div>
  );
};

export default TransactionInfo;
