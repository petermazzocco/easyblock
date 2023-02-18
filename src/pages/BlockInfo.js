import React from "react";
import { useParams } from "react-router-dom";
import Transactions from "../components/Transactions";

const BlockInfo = () => {
  const { id, block } = useParams();
  const refresh = () => {
    window.location.reload();
  };

  return (
    <div className="bg-animated bg-fixed bg-center bg-cover h-max pb-10">
      <div className="text-center text-white h-full pb-10 grid grid-cols-2 justify-center gap-6 mx-10 place-items-center">
        <h1 className="text-2xl mt-10 font-extrabold text-center">
          BLOCK #{id}
        </h1>

        <button
          onClick={refresh}
          className="w-1/3 border border-gray-300 focus:outline-none hover:bg-gray-100 hover:text-black focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2"
        >
          Refresh
        </button>
      </div>
      <div className="h-full text-center">
        <p className=" text-xl font-bold pb-2 text-white text-center">
          All Transactions
        </p>
        <p className="text-white text-md font-thin italic pb-5">
          Click a transaction hash to explore more!
        </p>
        <Transactions block={block} />
      </div>
    </div>
  );
};

export default BlockInfo;
