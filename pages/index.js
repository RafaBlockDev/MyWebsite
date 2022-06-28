import Head from 'next/head'
import Image from 'next/image'
import { Button } from "@nextui-org/react";

export default function Home() {
  return (
    <div>
      <h1>Hello World</h1>
      <Button color="gradient">
        Connect
      </Button>
    </div>
  )
}
