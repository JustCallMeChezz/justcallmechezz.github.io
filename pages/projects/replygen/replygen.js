    const apiConfigurations = [
        { url: 'https://api.kastg.xyz/api/ai/llama', model: 'llama-3.1-8b-turbo', requiresModel: true },
        { url: 'https://api.kastg.xyz/api/ai/llamaV3', model: null, requiresModel: false },
        { url: 'https://api.kastg.xyz/api/ai/llamaV3-large', model: null, requiresModel: false },
        { url: 'https://api.kastg.xyz/api/ai/fast-llamaV3-large', model: null, requiresModel: false },
        { url: 'https://api.kastg.xyz/api/ai/chatgpt', model: 'gpt-4o-mini', requiresModel: true },
        { url: 'https://api.kastg.xyz/api/ai/chatgptV4', model: null, requiresModel: false },
        { url: 'https://api.kastg.xyz/api/ai/blackbox', model: null, requiresModel: false }
    ];

    let selectedChattingStyle = 'friendly';
    let generating = false;

    function updateChattingStyle() {
        const chattingStyleSelect = document.getElementById('chattingStyle');
        selectedChattingStyle = chattingStyleSelect.value;
    }

    function getChattingStylePrompt(conversationPrompt) {
        switch (selectedChattingStyle) {
            case 'friendly':
                return `Generate 5 friendly replies that sound warm and approachable. Only list your suggestions without any other words.`;
            case 'formal':
                return `Generate 5 formal replies for chat/messages that sound like a bestie and respectful. ignore grammar, use simplified words, natural like a real human conversation, informal, and dont too long. Only list your suggestions without any other words.`;
            case 'informal':
                return `Generate 5 informal, casual replies that sound laid-back, natural, like a real human, simple, use simplified words and friendly. Only list your suggestions without any other words.`;
            case 'cute':
                return `Generate 5 cute replies that sound adorable and cheerful. Only list your suggestions without any other words.`;
            case 'sad':
                return `Generate 5 sad replies that sound downhearted and melancholic. Only list your suggestions without any other words.`;
            case 'lazy':
                return `Generate 5 lazy replies that sound uninterested or tired. Only list your suggestions without any other words.`;
            case 'angry':
                return `Generate 5 angry replies that sound frustrated or annoyed. Only list your suggestions without any other words.`;
            case 'funny':
                return `Generate 5 funny replies that sound playful or humorous. Only list your suggestions without any other words.`;
            case 'introverted':
                return `Generate 5 introverted replies that sound quiet and reserved. Only list your suggestions without any other words.`;
            case 'shy':
                return `Generate 5 shy replies that sound nervous and hesitant. Only list your suggestions without any other words.`;
            case 'emo':
                return `Generate 5 emo replies that sound dark, brooding, and emotional. Only list your suggestions without any other words.`;
            case 'rizz':
                return `Generate 5 rizz replies that sound smooth, confident, flirting and charming. Only list your suggestions without any other words.`;
            default:
                return conversationPrompt;
        }
    }

    function construireUrlApi(conversationPrompt, config) {
        const { url, model, requiresModel } = config;
        const apiKey = 'Kastg_SXQxa10WTVsNYmwAoL4d_free'; //dont steal this plsss... yea... ik thiss the stupidest thing i ever do... but idk how to hide it... can someone help...? .-.
        const chattingStylePrompt = getChattingStylePrompt(conversationPrompt);
        const fullPrompt = chattingStylePrompt + " " + conversationPrompt;

        const params = new URLSearchParams({
            prompt: fullPrompt,
            key: apiKey
        });

        if (requiresModel) {
            params.append('model', model);
        }

        const proxyUrl = 'https://api.allorigins.win/get?url=';
        return `${proxyUrl}${encodeURIComponent(`${url}?${params.toString()}`)}`;
    }

    async function getAIResponse(input) {
        const config = apiConfigurations[4];
        const apiUrl = construireUrlApi(input, config);
        
        try {
            const response = await fetch(apiUrl);
            const data = await response.json();

            const botMessageText = JSON.parse(data.contents).result[0]?.response || "error";
            
            return botMessageText; 
        } catch (error) {
            console.error('Error fetching AI response:', error);
            return "no.";
        }
    }

    async function generateMessage() {
        const input = document.querySelector('#inputText');
        const messageText = input.value.trim();
        if (messageText === '' || generating) return;

        const output = document.querySelector('#reply');
        let i = 0;

        generating = true;
        const generatingMessages = ["generating replies.", "generating replies..", "generating replies..."];
        const interval = setInterval(() => {
            output.innerHTML = generatingMessages[i % 3];
            i++;
        }, 500);

        const botMessageText = await getAIResponse(messageText);
        clearInterval(interval);
        generating = false;

        const suggestions = botMessageText.split("\n").filter(suggestion => suggestion.trim() !== '');
        output.innerHTML = '';
        suggestions.forEach((suggestion, index) => {
            const suggestionContainer = document.createElement('div');
            suggestionContainer.className = 'suggestion-container';
            suggestionContainer.innerHTML = `
                <span>${suggestion}</span>
                <i class="fas fa-clipboard copy-btn" data-index="${index}"></i>
            `;
            output.appendChild(suggestionContainer);

            const copyBtn = suggestionContainer.querySelector('.copy-btn');
            copyBtn.addEventListener('click', () => copyToClipboard(suggestion));
        });
    }

    function copyToClipboard(text) {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
    }

    document.addEventListener('DOMContentLoaded', () => {
        const generateButton = document.querySelector('.generate');
        generateButton.addEventListener('click', generateMessage);

        const input = document.querySelector('#inputText');
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                generateMessage();
            }
        });

        const chattingStyleSelect = document.getElementById('chattingStyle');
        chattingStyleSelect.addEventListener('change', updateChattingStyle);
    });
    
    document.querySelectorAll('.generate, input, select').forEach(element => {
    element.addEventListener('click', function() {
        this.classList.add('cute-bouncyy');
        setTimeout(() => {
            this.classList.remove('cute-bouncyy');
        }, 400);
    });
});