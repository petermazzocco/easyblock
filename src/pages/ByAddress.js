import { Alchemy, Network } from "alchemy-sdk";
import { useState, useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";

const settings = {
  apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
};
const alchemy = new Alchemy(settings);

const ByAddress = () => {
  const { add } = useParams("");
  const [listTx, setListTx] = useState("");

  useEffect(() => {
    async function getAllTx() {
      try {
        const tx = await alchemy.core.getTransactionCount(add);
        setListTx(tx);
        console.log(tx);
      } catch (err) {
        console.log(err);
      }
    }
    getAllTx();
  }, [add]);

  return (
    <>
      <div className="bg-animated bg-fixed bg-cover bg-center text-white h-screen">
        {listTx}
      </div>
      <Outlet />
    </>
  );
};

export default ByAddress;
