import Head from 'next/head'
import Image from 'next/image'
import {Container,
        Card, 
        Button, 
        Text, 
        Spacer,
        Grid,
        Row } from "@nextui-org/react";

export default function Home() {
  return (
    <Container xl>
      <Card gap={2} justify="center" align="center">
          <Text h1 size={60}>Haloooo 👋🏻</Text>
          <Spacer y={0.25}/>
          <Text h1 size={60}>I´m Rafael</Text>
          <Spacer y={0.25}/>
          <Text p size={20}>Blockchain and web3 developer, consultant and researcher 🌎</Text>
          <Spacer y={2}/>
        </Card>
        <Spacer y={3}/>
        <Card>
          <Grid.Container gap={2} justify="center">
            <Grid xs={3}>
              <Button color="gradient" shadow color="gradient" auto>
                Connect
              </Button>
            </Grid>
          </Grid.Container>
        </Card>
    </Container>
  )
}
