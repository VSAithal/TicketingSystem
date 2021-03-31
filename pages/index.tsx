import React from 'react';
import { Header } from '../components/Header';
import { TicketsList } from '../components/TicketsList/';

export default function Home() {
  return (
    <>
      <Header />
      <TicketsList />
    </>
  );
}
