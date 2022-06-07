const { ethers } = require("../contracts/node_modules/ethers/lib")
const { ToastContainer, toast } = require("react-toastify");
const contractABI = require("./contractABI");
const contractAddress = require("./contractAddress");

export const buyCoffee = async () => {
    try {
      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const coffeePortalContract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );

        let count = await coffeePortalContract.getTotalCoffee();
        console.log("Retrieved total coffee count...", count.toNumber());

        /*
         * Execute the actual coffee gift from your smart contract
         */
        const coffeeTxn = await coffeePortalContract.buyCoffee(
          message ? message : "Enjoy Your Coffee",
          name ? name : "Anonymous",
          ethers.utils.parseEther("0.001"),
          {
            gasLimit: 300000,
          }
        );
        console.log("Mining...", coffeeTxn.hash);

        toast.info("Sending Fund for coffee...", {
          position: "top-left",
          autoClose: 18050,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        await coffeeTxn.wait();

        console.log("Mined -- ", coffeeTxn.hash);

        count = await coffeePortalContract.getTotalCoffee();

        console.log("Retrieved total coffee count...", count.toNumber());

        setMessage("");
        setName("");

        toast.success("Coffee Purchased!", {
          position: "top-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      toast.error(`${error.message}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };