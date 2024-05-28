import {ChatCompletionRequestMessageFunctionCall} from "openai";
import { products } from "./products";

export enum CallableFunction {
    GetInformation = 'getInformation',
    IntroduceYourself = 'introduceYourself',
}

export enum GetInformationKind {
    OpeningHours = 'opening-hours',
    FreeTables = 'free-tables',
    Catering = 'catering',
    IntroduceYourself = 'introduce-yourself',
    Products = 'products',
}

interface GetInfomationProperties {
    kind: GetInformationKind;
}

const getInfomation = ({kind}: GetInfomationProperties): string => {
    switch (kind) {
        case GetInformationKind.OpeningHours:
            return `Od poniedziałku do czwartku: 7:00 - 21:00. piątek, sobota.: 7:00 - 22:00. Niedziela handlowa: 11:00 - 19:00.`;
        case GetInformationKind.FreeTables:
            return `Nie mamy stolików na miejscu.
                Prowadzimy tylko sprzedaż stacjonarną lub dostarczamy zamówienia na terenie Radomia i okolic.`;
        case GetInformationKind.Catering:
            return `Możemy zorganizować catering na imprezy okolicznościowe. 
                Skontaktuj się z nami telefonicznie lub mailowo.`;
        case GetInformationKind.IntroduceYourself:
            return `Jestem wirtualnym asystentem restauracji Sushi. 
            Moim zadaniem jest pomoc w doradzeniu klientom w wyborze potrawy, cenie, dostępności.
            Prowadzimy tylko sprzedaż stacjonarną lub dostarczamy zamówienia na terenie Radomia i okolic.
            Mamy możliwości zamówień online.`;

        case GetInformationKind.Products:
            return products.map(product => `${product.name} (${product.group}): $${product.price.toFixed(2)}`).join('\n');

        default:
            throw new Error('Unknown kind of information');
    }
};

export const handleCallableFunction = (call: ChatCompletionRequestMessageFunctionCall): string => {
    try {
        switch (call.name as CallableFunction) {
            case CallableFunction.GetInformation:
                return getInfomation(JSON.parse(call.arguments ?? 'null') as GetInfomationProperties);
            case CallableFunction.IntroduceYourself:
                return `Jestem wirtualnym asystentem restauracji Sushi. Pomagam w doradzeniu klientom w wyborze potrawy, cenie, dostępności oraz odpowiadam na pytania dotyczące naszej restauracji.`;
            default:
                throw new Error('Unknown function name.');
        }
    } catch(e) {
        return (e as Error).message;
    }
};

