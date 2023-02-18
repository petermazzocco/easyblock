import Blocks from "../components/Blocks";
import SearchBar from "../components/SearchBar";

const Index = () => {
  return (
    <div className="h-screen text-white w-screen">
      <div className="flex place-items-center align-middle h-1/2">
        <div className="pl-10 flex-initial w-1/2">
          <h1 className=" mb-4 text-5xl font-thin uppercase text-white">
            Easy<span className="font-black">Block</span>
          </h1>
          <p className="text-sm font-normal text-gray-200 lg:text-xl">
            A <span className="font-bold">beginner</span> friendly way to view
            the Ethereum blockchain.
          </p>
        </div>
        <div className="text-center flex-initial w-1/2">
          <p className="pb-2 font-bold">Most Recent Block:</p>
          <Blocks />
        </div>
      </div>
      <div className="text-center mt-2 mb-20 grid justify-center">
        <h1 className="text-xl font-bold">Looking For A Specific Block?</h1>
        <p className="text-md font-normal pb-1">
          Type a number and find a block!
        </p>
        <div className="pt-2 ">
          <SearchBar />
        </div>
        {/* <NavLink to="/blocks">
          <button
            type="button"
            className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-200 focus:ring-4 focus:ring-gray-200 items-center justify-center inline-flex   h-20 font-medium rounded-lg text-2xl px-5 py-2.5 text-center mr-2 mb-2"
          >
            Previous Blocks
          </button>
        </NavLink> */}
      </div>
      <div className="mx-20">
        <h2 className="font-bold text-xl">What are Ethereum Blocks?</h2>
        <p>
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
      </div>
    </div>
  );
};

export default Index;
