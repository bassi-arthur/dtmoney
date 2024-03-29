import React , { useContext } from 'react'
import { Container } from "./styles";
import  incomeImg  from '../../assets/income.svg'
import  outcomeImg  from '../../assets/outcome.svg'
import  totalImg  from '../../assets/total.svg'
import { TransactionsContext } from '../../TransactionsContext';
export function Summary(){
    const { transactions } = useContext(TransactionsContext)
    const summary = transactions.reduce((acc, transaction) =>{
        if (transaction.type === 'Deposit'){
            acc.deposits+= transaction.amount
            acc.total += transaction.amount
        }else{
            acc.withdraw += transaction.amount
            acc.total -= transaction.amount
        }

        return acc
    },{
        deposits: 0,
        withdraw: 0,
        total: 0,
    })
    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt=""/>
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.deposits)}
                </strong>
            </div>
            <div>
                <header>
                    <p>Saidas</p>
                    <img src={outcomeImg} alt=""/>
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.withdraw)}
                </strong>
            </div>
            <div className="heighlight-background">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt=""/>
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.deposits-summary.withdraw)}
                </strong>
            </div>
        </Container>
    )
}
