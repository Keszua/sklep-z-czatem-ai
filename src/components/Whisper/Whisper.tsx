import { useEffect, useRef, useState } from "react";
import { useWhisper } from "../../vendor/use-whisper-main/src"
import './whisper.scss';
import { chatBotIcon, microphoneIcon } from ".";

interface Message {
    text: string;
}

export const Whisper = () => {
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState<Message[]>([]);
    const { startRecording, stopRecording, recording, transcript } = useWhisper({
        autoTranscribe: true,
        whisperConfig: {
            language: 'pl',
        },
        onTranscribe: async (blob: Blob) => {
            const formData = new FormData();
            formData.append('file', blob, 'recording.mp3');

            const resp = await fetch('http://localhost:3001/chat/stt', {
                method: 'POST',
                body: formData,
            });

            const text = await resp.text();

            return {
                blob,
                text,
            };
        },
    });
    
    const chatMessagesRef = useRef<HTMLDivElement>(null);

    const handleMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(event.target.value);
    };

    const handleSendMessage = () => {
        if (message.trim()) {
          setMessages([...messages, { text: message }]);
          setMessage('');
        }
    };
    
    const handleKeyPress = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            handleSendMessage();
        }
    };

    const toggleRecording = () => {
        if (recording) {
            stopRecording();
        } else {
            startRecording();
        }
    };

    const startRecordingHandler = () => {
        startRecording();
    };
    
    const stopRecordingHandler = () => {
        if (recording) {
            stopRecording();
        }
    };

    useEffect(() => {
        if (transcript?.text) {
            setMessage(transcript.text);
        }
    }, [transcript]);

    // Efekt przewijania po każdej zmianie wiadomości
    useEffect(() => {
        if (chatMessagesRef.current) {
            chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
        }
    }, [messages]); 
    
    return (
        <div className="chat-container">

            {!isChatOpen && (
                <button className="chat-icon" onClick={() => setIsChatOpen(true)}>
                    <img src={chatBotIcon} alt="Chat-bot" />
                </button>
            )}

            {isChatOpen && (
                <div className="chat-box">
                    <div className="chat-header">
                        <span>Witaj, w czym mogę pomóc?</span>
                        <button onClick={() => setIsChatOpen(false)}>✖</button>
                    </div>
                    <div className="chat-messages">
                        {messages.map((msg, index) => (
                            <div key={index} className="message">
                                <div>{msg.text}</div>
                            </div>
                        ))}
                    </div>
                    <div className="chat-input">
                        <textarea
                            value={message}
                            onChange={handleMessageChange}
                            onKeyDown={handleKeyPress}
                            maxLength={200}
                            rows={3}
                        />
                        <div className="chat-actions">
                            <button 
                                onMouseDown={startRecordingHandler}
                                onMouseUp={stopRecordingHandler}
                                onMouseLeave={stopRecordingHandler}
                                onTouchStart={startRecordingHandler}
                                onTouchEnd={stopRecordingHandler}
                            >
                                {recording 
                                    ? '🔴' 
                                    : <img src={microphoneIcon} alt="🎤" style={{width: '30px', height: '30px'}}  />}
                            </button>
                            <button className="send-button" onClick={handleSendMessage}>Wyślij</button>
                        </div>
                    </div>
                </div>
            )}

            

        </div>
    )
}