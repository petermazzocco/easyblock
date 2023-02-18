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
        <CircularProgress color="inherit" />
      ) : (
        <div class="grid grid-cols-5 justify center gap-6 mx-10 truncate  text-ellipsis overflow-hidden ">
          {transactions &&
            transactions.map((tr, i) => {
              return (
                <NavLink to={`/transactions/${tr.hash}`}>
                  <button
                    key={i}
                    className="w-4/5 text-center flex-wrap  p-6 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-200 focus:ring-4 focus:ring-gray-200 rounded-md cursor-pointer"
                  >
                    <h4 className="text-xs font-bold text-ellipsis overflow-hidden">
                      TX Hash: <span className="font-thin"> {tr.hash} </span>
                    </h4>
                  </button>
                </NavLink>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default Transactions;
