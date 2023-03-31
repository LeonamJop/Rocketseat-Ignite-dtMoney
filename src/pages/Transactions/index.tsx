import { useContext, useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components";
import { PriceHighLight, TransationsContainer, Transationstable } from "./styles";
import { TransactionsContext } from "../../contexts/TransactionsContext";

export function Transations() {
    const { transactions } = useContext(TransactionsContext);
    
    return (
        <div>
            <Header />
            <Summary />

            <TransationsContainer>
                <SearchForm />
                <Transationstable>
                    <tbody>
                        {transactions.map(transaction => {
                            return (
                                <tr key={transaction.id}>
                                    <td width="50%">{transaction.description}</td>
                                    <td>
                                        <PriceHighLight variant={transaction.type}>
                                            R$ {transaction.price}
                                        </PriceHighLight>
                                    </td>
                                    <td>{transaction.category}</td>
                                    <td>{transaction.createdAt}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Transationstable>
            </TransationsContainer>

        </div>
    )
}