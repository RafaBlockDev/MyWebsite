import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useState } from "react";
import styles from '../styles/Home.module.css'
import abi from "../utils/Contract.json";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { ethers } from '../contracts/node_modules/ethers/lib';

export default function Home() {
  // Contract address and ABI
  const contractAddress = "0x3bE20B28657Ff1b9a915f16B0263D5F1D65e0c9d";
  const contractABI = abi.abi

  // Component State
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [memos, setMemos] = useState("");

  const onNameChange = (event) => {
    setName(event.target.value);
  }

  const onMessageChange = (event) => {
    setMessage(event.target.value);
  }

  const buyCoFFee = async () => {
    try {
      const {ethereum} = window;

      if(ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum, "any");
        const signer = provider.getSigners();
        const BuyMeACoffee = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );

        console.log("Buying coffee...")
        const coffeeTxn = await buyCoffee.buyCoFFee(
          name ? name : "anon",
          message ? message : "Enjoy your coffee",
          {value: ethers.utils.parseEther("1")}
        );

        await coffeeTxn.wait();

        console.log("mined ", coffeeTxn.hash);
        console.log("coffee purchased");

        // Clear the form fields
        setName("");
        setMessage("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getMemos = async () => {
    try {
      const { ethereum } = window;
      if(ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const buyCoffee = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );

        console.log("Fetching memos from the blockchian...");
        const memos = await buyCoffee.getMemos();
        console.log("Fetched!!");
        setMemos(memos);
      } else {
        console.log("Metamask is not connected");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    let buyCoffee;
    getMemos();

    const onNewMemos = (from, timestamp, name, message) => {
      console.log.log("Memo received ", from, timestamp, name, message);
      setMemos((prevState) => [
        ...prevState,
        {
          address: from,
          timestamp: newDate(timestamp * 1000),
          message,
          className
        }
      ]);
    };

    const { ethereum } = window;

    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum, "any");
      const signer = provider.getSigner();
      buyCoffee = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      );

      buyCoffee.on("NewMemo", onNewMemos);
    }
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Rafael</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/rafa.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hello!  👋🏻  I am <a href="https://twitter.com/Rafael41603219">rafaelfuentes.eth! 👨🏻‍💻</a>
        </h1>

        <ConnectButton />

        <p className={styles.description}>
          I am blockchain and web3 developer, consultant and researcher 🌎
        </p>


        <div className={styles.grid}>
          <a href="https://github.com/RafaBlockDev" className={styles.card}>
            <h2>Github &rarr;</h2>
            <p>Look my github and find interesting projects in blockchain and web3! 🚀</p>
          </a>

          <a href="https://twitter.com/Rafael41603219" className={styles.card}>
            <h2>Twitter &rarr;</h2>
            <p>Find me on Twitter where I share and tweet very good content! 👻</p>
          </a>

          <a
            href="https://www.linkedin.com/in/rafael-f-b4809120a/"
            className={styles.card}
          >
            <h2>LinkedIn &rarr;</h2>
            <p>Found my experiences, my skills, posts and my professional profile! 😎</p>
          </a>

          <a
          href="https://medium.com/@rafafuentesrangel"
            className={styles.card}
          >
            <h2>Articles &rarr;</h2>
            <p>
              Look my articles, and researcher done for me, about blockchain! 📚
            </p>
          </a>

          <a
          href="https://medium.com/@rafafuentesrangel"
            className={styles.card}
          >
            <h2>Portafolio &rarr;</h2>
            <p>
              This is my portafolio where you will find my own projects... 🦾
            </p>
          </a>
        </div>

        <div className={styles.buyCoffe}>
          <h2 className={styles.secondTitle}>Buy me a Coffee ☕️</h2>

          <div>
            <form>
              <div className={styles.formgroup}>
                <label>
                    Name
                </label>
                <br/>

                <input
                  id="name"
                  type="text"
                  placeholer="anon"
                  onChange={onNameChange}
                />
              </div>
              <br/>

              <div className={styles.formgroup}>
                  <label>
                    Send to Rafa a message
                  </label>
                <br/>

                <textarea
                  rows={3}
                  placeholder="Enjoy your coffee!"
                  id="message"
                  onChange={onMessageChange}
                  required
                >
                </textarea>
              </div>
              <div>
                <button
                  type={styles.button}
                  onClick={buyCoFFee}
                >
                  Send 1 Coffee for 1 Matic
                </button>
              </div>
            </form>
          </div>
        </div>

      </main>

      <footer className={styles.footer}>
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          Cypherpunk and anarchist
          <span className={styles.logo}>
            <Image src="/rafa.png" alt="Rafa Face" width={20} height={20} />
          </span>
        </a>
      </footer>
    </div>
  )
}
