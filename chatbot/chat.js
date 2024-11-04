const apiConfigurations = [
            { url: 'https://api.kastg.xyz/api/ai/llama', model: 'llama-3.1-8b-turbo', requiresModel: true },
            { url: 'https://api.kastg.xyz/api/ai/llamaV3', model: null, requiresModel: false },
            { url: 'https://api.kastg.xyz/api/ai/llamaV3-large', model: null, requiresModel: false },
            { url: 'https://api.kastg.xyz/api/ai/fast-llamaV3-large', model: null, requiresModel: false },
            { url: 'https://api.kastg.xyz/api/ai/chatgpt', model: 'gpt-4o-mini', requiresModel: true },
            { url: 'https://api.kastg.xyz/api/ai/chatgptV4', model: null, requiresModel: false },
            { url: 'https://api.kastg.xyz/api/ai/blackbox', model: null, requiresModel: false }
        ];

        function construireUrlApi(conversationPrompt, config) {
            const { url, model, requiresModel } = config;
            const apiKey = 'Kastg_SXQxa10WTVsNYmwAoL4d_free'; // dont steal it plss...

            const params = new URLSearchParams({
                prompt: conversationPrompt,
                key: apiKey
            });

            if (requiresModel) {
                params.append('model', model);
            }

            const proxyUrl = 'https://api.allorigins.win/get?url=';
            return `${proxyUrl}${encodeURIComponent(`${url}?${params.toString()}`)}`;
        }

        async function getAIResponse(input) {
            const config = apiConfigurations[0]; 
            const apiUrl = construireUrlApi(input, config);
            
            try {
                const response = await fetch(apiUrl);
                const data = await response.json();

                const botMessageText = JSON.parse(data.contents).result[0]?.response || "Sorry, I couldn't get a response.";
                return botMessageText; 
            } catch (error) {
                console.error('Error fetching AI response:', error);
                return "Sorry, I couldn't get a response.";
            }
        }

        async function sendMessage() {
            const input = document.querySelector('.footer input');
            const messageText = input.value;
            if (messageText.trim() === '') return;

            const content = document.querySelector('.content');
            const userMessage = document.createElement('div');
            userMessage.className = 'message right';
            userMessage.innerHTML = `
                <img src="/pfps/pfp_user.jpg" alt="User Pfp">
                <div class="bubble">
                    <div class="text">${messageText}</div>
                </div>
            `;
            content.appendChild(userMessage);
            input.value = '';

            const typingMessage = document.createElement('div');
            typingMessage.className = 'message';
            typingMessage.innerHTML = `
                <img src="/pfps/pfp1.jpg" alt="AI Pfp">
                <div class="bubble">
                    <div class="text">...</div>
                </div>
            `;
            content.appendChild(typingMessage);
            content.scrollTop = content.scrollHeight;

            await new Promise(resolve => setTimeout(resolve, 1000));

            content.removeChild(typingMessage);

            const botMessageText = await getAIResponse(messageText);
            const botMessage = document.createElement('div');
            botMessage.className = 'message';
            botMessage.innerHTML = `
                <img src="/pfps/pfp1.jpg" alt="AI Pfp">
                <div class="bubble">
                    <div class="text">${botMessageText}</div>
                </div>
            `;
            content.appendChild(botMessage);
            content.scrollTop = content.scrollHeight;
        }

        document.addEventListener('DOMContentLoaded', () => {
            const sendButton = document.querySelector('.footer .send');
            sendButton.addEventListener('click', sendMessage);

            const input = document.querySelector('.footer input');
            input.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    sendMessage();
                }
            });
        });