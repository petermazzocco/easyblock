import Blocks from "../components/Blocks";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import SearchBar from "../components/SearchBar";

const Index = () => {
  return (
    <div className="h-screen text-white">
      <div className="sm:flex xs:grid xs:space-x-3 sm:space-x-0 place-items-center justify-evenly align-middle h-1/3">
        <motion.div
          className="sm:pl-10 xs:pl-0 flex-initial w-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ ease: "easeOut", duration: 0.2, delay: 0.5 }}
        >
          <h1 className=" xs:text-center sm:text-left sm:mb-4 xs:mb-1 md:text-5xl xs:text-3xl font-thin uppercase text-white">
            Easy<span className="font-black">Block</span>
          </h1>
          <p className="md:text-lg sm:text-sm xs:text-sm font-normal text-gray-200">
            A <span className="font-bold">beginner</span> friendly way to view
            the Ethereum blockchain.
          </p>
        </motion.div>
        <div className="text-center xs:pt-5">
          <p className="xs:text-sm sm:text-lg pb-2 font-bold">
            Most Recent Block:
          </p>
          <Blocks />
        </div>
      </div>
      <motion.div
        className="text-center mt-2 mb-20 flex flex-row row-span-2 space-x-72 justify-center xs:pt-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ ease: "easeOut", duration: 0.2, delay: 0.8 }}
      >
        <div className="grid justify-center">
          <p className="sm:text-xl xs:text-md font-bold pt-4 pb-1">
            Want to find your transactions?
          </p>
          <p className="font-thin pb-1">Enter your address:</p>
          <div>
            <SearchBar />
          </div>
        </div>
        <div className="grid justify-center">
          <h1 className="sm:text-xl xs:text-md font-bold pb-2">
            Looking for more blocks?
          </h1>
          <NavLink to="/blocks">
            <button
              type="button"
              className="  text-white hover:text-gray-900 bg-transparent border-2 focus:outline-none hover:bg-gray-200 focus:ring-4 focus:ring-gray-200 items-center justify-center inline-flex  sm:h-20 xs:h-14 font-medium rounded-lg sm:text-2xl xs:text-lg px-5 py-2.5 text-center mr-2 sm:mb-2 xs:mb-0"
            >
              Previous Blocks
            </button>
          </NavLink>
        </div>
      </motion.div>
      <motion.div
        className="md:mx-20 xs:mx-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ ease: "easeOut", duration: 0.2, delay: 1 }}
      >
        <h2 className="font-bold md:text-xl xs:text-sm">
          What are Ethereum Blocks?
        </h2>
        <p className="md:text-lg xs:text-xs">
          Simply put, Ethereum blocks hold a{" "}
          <span className="font-thin italic">bunch</span> of transactions. Once
          the block is full of transactions and a dedicated amount of time has
          passed, they get added to a chain, a.k.a a{" "}
          <span className="font-black">blockchain</span>! They are numbered and
          public for all to view. This means you can go all the way back to the{" "}
          <a
            href="https://etherscan.io/block/0"
            rel="noreferrer"
            target="_blank"
            className="underline"
          >
            first block
          </a>{" "}
          if you want! Like we said, within each block you can see the
          transactions. Within those transactions, you can see the details
          including who sent it, who recieved it, the amount sent, the fee and
          more! Find a block and click any{" "}
          <span className="font-bold">Transaction Hash</span> to get the data.
        </p>
      </motion.div>
    </div>
  );
};

export default Index;
