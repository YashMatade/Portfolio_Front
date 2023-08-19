import React, { useState, useEffect } from 'react';
import reactLogo from '../assets/logo512.png';
const { Configuration, OpenAIApi } = require("openai");

const apikey = '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';
const configuration = new Configuration({
    apiKey: apikey,
});
const openai = new OpenAIApi(configuration);

const OPenAI = () => {
    const [transcript, setTranscript] = useState('');
    const [response, setResponse] = useState('');
    const [isListening, setIsListening] = useState(false);
    const recognition = new window.webkitSpeechRecognition();

    useEffect(() => {
        recognition.continuous = true;
        recognition.onresult = (event) => {
            const result = event.results[event.results.length - 1];
            const transcript = result[0].transcript;
            setTranscript(transcript);
            handleQuery(transcript); // Call a function to handle the user's speech input
        };

        recognition.onerror = (event) => {
            console.error('Speech recognition error:', event.error);
        };

        return () => {
            recognition.stop();
        };
    }, []);

    const startListening = () => {
        setResponse("Welcome back sir, I am sunday, How can i help you??");
        speak("Welcome back sir, I am sunday, How can i help you??");
        setIsListening(true);
        recognition.start();
    };

    const stopListening = () => {
        setIsListening(false);
        recognition.stop();
    };

    const handleQuery = async (query) => {
        // const websites = [
        //     { command: 'open youtube', url: 'https://www.youtube.com' },
        //     { command: 'open google', url: 'https://www.google.com' },
        //     { command: 'open wikipedia', url: 'https://www.wikipedia.org' },
        // ];

        // for (const website of websites) {
        //     if (query.toLowerCase().includes(`open ${website.command.split(' ')[1]}`)) {
        //         setResponse(`Opening ${website.command.split(' ')[1]}...`);
        //         speak(`Opening ${website.command.split(' ')[1]}...`);
        //         window.open(website.url, '_blank');
        //         break;
        //     }
        // }

        if (query.toLowerCase().includes('hello')) {
            setResponse('Hello! How can I assist you?');
            speak('Hello! How can I assist you?');
        } else if (query.toLowerCase().includes('time')) {
            const currentTime = new Date().toLocaleTimeString();
            setResponse(`The current time is ${currentTime}`);
            speak(`The current time is ${currentTime}`);
        } else if (query.toLowerCase().includes('what is your goal')) {
            setResponse("My goal is to assist you!");
            speak("My goal is to assist you!");
        }
        else {
            try {
                const result = await openai.createCompletion({
                    model: "text-davinci-003",
                    prompt: query,
                    temperature: 0.7,
                    max_tokens: 1500,
                });
                const generatedText = result.data.choices[0].text.trim();
                setResponse(generatedText);
                speak(generatedText);
            } catch (error) {
                console.error('AI model error:', error);
                setResponse("Sorry, I couldn't generate a response.");
                speak("Sorry, I couldn't generate a response.");
            }
        }
    };

    const speak = (text) => {
        const synth = window.speechSynthesis;
        const utterance = new SpeechSynthesisUtterance(text);
        synth.speak(utterance);
    };

    return (
        <div>
            <img src={reactLogo} alt="React Logo" style={{
                width: "100px",
                animation: "App-logo-spin 2s linear infinite"
            }}
            />
            <h1 className='text-white'>Speech Recognition with CHAT GPT</h1>
            <p className='text-white text-start'>{transcript}</p>
            <p className='text-white text-start'>{response}</p>
            <button className='mt-5' onClick={startListening} disabled={isListening}>
                Click to Ask me
            </button>
            <button className='mt-5' onClick={() => window.location.reload()}>
                stop
            </button>
        </div>
    );
};

export default OPenAI;