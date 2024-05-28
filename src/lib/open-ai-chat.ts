import {
    ChatCompletionRequestMessage, ChatCompletionRequestMessageFunctionCall, ChatCompletionRequestMessageRoleEnum,
    Configuration,
    CreateChatCompletionRequest,
    CreateChatCompletionResponse,
    OpenAIApi
} from "openai";
import {CallableFunction, GetInformationKind} from "./callable-functions.ts";
import {config} from "../config/config.ts";

const parameters: CreateChatCompletionRequest = {
    n: 1,               // ilość odpowiedzi
    top_p: 1,           // im większa wartość tym bardziej zróżnicowane odpowiedzi
    temperature: 0.1,   // im mniejsza wartość tym bardziej przewidywalne odpowiedzi
    max_tokens: 200,
    stream: false,
    model: 'gpt-4o',    // https://platform.openai.com/docs/models
    messages: [],
    functions: [
        {
            name: CallableFunction.GetInformation,
            description: 'Uzyskaj informacje o restauracji Sushi, gdy użytkownik o to poprosi.',
            parameters: {
                type: 'object',
                properties: {
                    kind: {
                        type: 'string',
                        description: 'Rodzaj informacji, które należy uzyskać.',
                        enum: [
                            GetInformationKind.OpeningHours, 
                            GetInformationKind.FreeTables,
                            GetInformationKind.Catering,
                            GetInformationKind.Products,
                        ],
                    },
                },
            },
        },
    ],
};

// export const isValidInformationKind = (message: string): boolean => {
//     return Object.values(GetInformationKind).includes(message as GetInformationKind);
// }

const openAiConfig = {
    apiKey: config.openAiKey,
    parameters,
};

export type ChatResponse = null | {
    content: null | string;
    functionCall: null | ChatCompletionRequestMessageFunctionCall;
};

const extractFirstChoice = (data: CreateChatCompletionResponse): ChatResponse => {
    const firstChoice = data?.choices?.[0]?.message;

    if (!firstChoice) {
        return null;
    }

    return {
        content: firstChoice.content ?? null,
        functionCall: firstChoice.function_call ?? null,
    };
};

export class OpenAiChat {
    private readonly openai = new OpenAIApi(new Configuration({
        apiKey: openAiConfig.apiKey,
    }));
    private readonly messages: ChatCompletionRequestMessage[];

    constructor(system: string) {
        this.messages = [
            {
                role: 'system',
                content: system,
            },
        ];
    }

    async say(
        prompt: string,
        role: ChatCompletionRequestMessageRoleEnum = ChatCompletionRequestMessageRoleEnum.User,
        functionName?: string,
    ): Promise<ChatResponse> {
        this.messages.push({
            role,
            content: prompt,
            name: functionName,
        });

        const {data} = await this.openai.createChatCompletion({
            ...openAiConfig.parameters,
            messages: this.messages,
        });

        const s = extractFirstChoice(data);

        if (s?.content) {
             this.messages.push({
                 role: 'assistant',
                 content: s.content,
             });
        }

        return s;
    }
}
