import { GlobalStyle } from "./styles/global"
import { Header } from "./components/Header"
import { Dashboard } from "./components/Dashboard";
import React, { useState } from "react";
import Modal from 'react-modal';
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsContext, TransactionsProvider } from './TransactionsContext';


export function App() {
  
  const [isNewTransactionOpen, setIsNewTransactionOpen] = useState(false);

  function handleOpenNewTransactionModal(){
      setIsNewTransactionOpen(true)
  }

  function handleCloseNewTransactionModal(){
      setIsNewTransactionOpen(false)
  }

  return (
    <TransactionsProvider>
      <Header onOpenNewTransitionModal={handleOpenNewTransactionModal}/>
      <Dashboard/>
      <NewTransactionModal
        isOpen={isNewTransactionOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyle/>
    </TransactionsProvider>
  );
}


