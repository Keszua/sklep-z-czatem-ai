import {Widget, addResponseMessage, toggleMsgLoader} from "react-chat-widget";
import 'react-chat-widget/lib/styles.css';
import {OpenAiChat} from "../../lib/open-ai-chat.ts";
import {handleCallableFunction} from "../../lib/callable-functions.ts";
import {ChatCompletionRequestMessageRoleEnum} from "openai";
import { sushiChatBot } from ".";

export const ChatBot = () => {
    const chat = new OpenAiChat(
        `Jesteś wirtualnym asystentem restauracji Sushi. 
        Twoim zadaniem jest pomoc w doradzeniu klientom w wyborze potrawy, cenie, dostępności.
        Prowadzimy tylko sprzedaż stacjonarną lub dostarczamy zamówienia na terenie Radomia i okolic.
        Mamy możliwości zamówień online.
        Możesz również odpowiedzieć na pytania dotyczące naszych produktów.`
    );

    const handleNewUserMessage = async (
        message: string,
        role: ChatCompletionRequestMessageRoleEnum = ChatCompletionRequestMessageRoleEnum.User,
        functionName?: string,
    ) => {
        toggleMsgLoader();

        try {
            const res = await chat.say(message, role, functionName);

            console.log('res', res);

            if (res?.functionCall) {
                handleNewUserMessage(
                    handleCallableFunction(res.functionCall),
                    ChatCompletionRequestMessageRoleEnum.Function,
                    res.functionCall.name,
                );
            }

            if (res?.content) {
                addResponseMessage(res?.content);
            }

        } finally {
            toggleMsgLoader();
            console.log('OpenAI not response');
        }
    };

    return <Widget
        title="Sushi Bot"
        subtitle="W czym możemy Ci pomóc?"
        handleNewUserMessage={handleNewUserMessage}
        resizable={true}
        launcherOpenImg={sushiChatBot}
    />;
};
