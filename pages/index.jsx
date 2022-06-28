import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useState } from "react";
import styles from '../styles/Home.module.css'

export default function Home() {

  return (
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
  )
}
