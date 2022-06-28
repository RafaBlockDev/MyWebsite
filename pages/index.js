import Head from 'next/head'
import Image from 'next/image'
import { Container, Card, Button, Text, Spacer } from "@nextui-org/react";

export default function Home() {
  return (
    <Container xl>
      <Card justify="center" align="center">
        <Text h1 size={60}>Haloooo 👋🏻</Text>
        <Spacer y={0.25}/>
        <Text h1 size={60}>I´m Rafael</Text>
        <Spacer y={0.25}/>
        <Text p size={20}>Blockchain and web3 developer, consultant and researcher 🌎</Text>
        <Spacer y={2}/>
        <Button color="gradient">
          Connect
        </Button>
      </Card>
    </Container>
  )
}
