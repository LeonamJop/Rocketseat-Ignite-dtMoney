import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { PriceHighLight, TransationsContainer, Transationstable } from "./styles";

export function Transations() {
    return (
        <div>
            <Header/>
            <Summary />

            <TransationsContainer>
                <Transationstable>
                    <tbody>
                        <tr>
                            <td width="50%">Desenvolvimeto de site</td>
                            <td>
                                <PriceHighLight variant="income">
                                    R$ 12.000,00
                                </PriceHighLight>
                            </td>
                            <td>Venda</td>
                            <td>13/04/2022</td>
                        </tr>
                        <tr>
                            <td width="50%">Hamburguer</td>
                            <td>
                                <PriceHighLight variant="outcome">
                                    -R$ 59,00
                                </PriceHighLight>
                            </td>
                            <td>Alimentação</td>
                            <td>13/04/2022</td>
                        </tr>
                    </tbody>
                </Transationstable>
            </TransationsContainer>

        </div>
    )
}