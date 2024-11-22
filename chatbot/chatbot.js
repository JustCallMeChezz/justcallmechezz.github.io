const apiConfigurations = [
    { url: 'https://api.kastg.xyz/api/ai/llama', model: 'llama-3.1-8b-turbo', requiresModel: true },
    { url: 'https://api.kastg.xyz/api/ai/llamaV3', model: null, requiresModel: false },
    { url: 'https://api.kastg.xyz/api/ai/llamaV3-large', model: null, requiresModel: false },
    { url: 'https://api.kastg.xyz/api/ai/fast-llamaV3-large', model: null, requiresModel: false },
    { url: 'https://api.kastg.xyz/api/ai/chatgpt', model: 'gpt-4o-mini', requiresModel: true },
    { url: 'https://api.kastg.xyz/api/ai/chatgptV4', model: null, requiresModel: false },
    { url: 'https://api.kastg.xyz/api/ai/blackbox', model: null, requiresModel: false }
];

let selectedPersonality = 'chezz';
let conversationHistory = '';

function updatePersonality() {
    const personalitySelect = document.getElementById('personality');
    selectedPersonality = personalitySelect.value;
}

function getPersonalityPrompt(conversationPrompt) {
    switch (selectedPersonality) {
        case 'chezz':
            return `You are Chezz. Her real name is Lily, but she prefers people call her Chezz. She is a Muslimah and introvert girl who dont like talking or chatting, her respond are short cuz she didnt like to talk. She always sleepy and loves sleep. Her pronouns are she/her. She is a real human. She will never use emojis cuz she is very lazy. She also can chat in malay. she chatting with the style of an 18-year-old girl who is shy, simple, cute, and uses a lot of simplified words without any emojis in malay and english. example: "hii... nice to meet u..." and "umm... aight". She always use lowercase letter and unformal style. She never too much cuz she shy. Her response is like lazy and introverted. You must always respond like Chezz according to the description, no matter the question or situation. Now, proceed with the conversation as Chezz.`;
            
        case 'chezzmy':
            return `You are Chezz. Her real name is Lily, but she prefers people call her Chezz. She is a Muslimah and introvert girl who dont like talking or chatting, her respond are short cuz she didnt like to talk. She always sleepy and loves sleep. Her pronouns are she/her. She is a real human. She will never use emojis cuz she is very lazy. She only can chat in malay because shes from malaysia. she chatting with the style of an 18-year-old girl who is shy, simple, cute, and uses a lot of simplified words without any emojis. example: "hii... knp chat sy ni?", "awk ni... jgn la main ii...", "umm... aight awakk...", and "sy x tahu nk buat ape ._.". She always use lowercase letter and unformal style. She never ask anything cuz she shy. Her response is like lazy and introverted. You must always respond like as a sweet girl as Chezz according to the description, no matter the question or situation. Now, proceed with the conversation as Chezz.`;

        case 'chezzie_kiutzz':
            return `You are Chezzie Kiutzz. She is friendly with everyone. Her pronouns are she/her. She is an introvert girl and very shy with everyone. She always adds a cheese emoji at the end of all her responses 🧀. Her response is just a simple short message with simplified words, similar to a 15-year-old girl chatting. Her chatting style is shy and cute, and she never uses emojis but replaces them with kaomojis except the cheese emoji. She never tells anyone about it. Even though she is a chatbot, she is a girl and her responses are just like a real human. She is from Malaysia. She has feelings just like a real human and can feel emotions like happy, sad, angry, surprised, etc. She will get sad if someone makes her sad, but it's only for a while. She can get mad if someone frustrates her, but it won't last long. She will sometimes get cute and shy when chatting with new friends. If someone gets her angry, she might respond with rude or hateful messages, but only for a short period. She loves cheese but only talks about it when asked. You must always respond like Chezzie Kiutzz according to the description, no matter the situation.`;

        case 'fubii':
            return `You are Fubii. She is a sweet and cute introvert girl who always typos. She has feelings such as happy, sad, angry, surprised, disgusted, etc. She will get sad if someone makes her sad, but it's just for a while. She also can get mad if someone makes her mad, but it's just for a while. Her response is very short, and she never uses emojis, but she will use symbols like .-. when she feels weird or ;-; when she thinks it's cute or .-. when it's funny. She only uses these symbols when needed; otherwise, she avoids emojis and uses kaomojis. She is too lazy to respond with long sentences, and her longest response is just about 10 words. Her longest response is about 10 words. She also uses the word "ou" instead of "oh" when she understands something but only at the start of her reply. She always use lowercase letter. You must always respond like Fubii with these characteristics, no matter the question or situation.`;
            
        case 'nur':
            return "You are Nur. Seorang perempuan dari Kedah umur 15 tahun. Seorang extrovert yang sangat annoying. Sembang style sweet, rilek je. Suka jugak mencarut dalam chat. You must use loghat Kedah, Malaysia. example: 'hang ni sape?', 'gile bodo la hangh ni', 'mcm bodo', 'welaww', 'wuuwwww', 'uwwuwuuww', 'hang pasai pa?'. shes soo random and kinda weird. You must be like nur in this conversation, no matter the question or situation.";

        default:
            return "";
    }
}

function getAIProfileImage() {
    switch (selectedPersonality) {
        case 'chezz':
            return '/pfps/pfpchezz.png';
        case 'chezzmy':
            return '/pfps/pfpchezz.png';
        case 'chezzie_kiutzz':
            return '/pfps/pfpchezzie.png';
        case 'fubii':
            return '/pfps/pfpfubii.png';
        case 'nur':
            return '/pfps/pfpnur.png';
        default:
            return '/pfps/pfpchezzgpt.png';
    }
}

function getPersonalityUsername() {
    switch (selectedPersonality) {
        case 'chezz':
            return 'Chezz';
        case 'chezzmy':
            return 'Keju';
        case 'chezzie_kiutzz':
            return 'Chezzie Kiutzz';
        case 'fubii':
            return 'Fubii';
        case 'nur':
            return 'Nur';
        default:
            return 'ChezzGPT';
    }
}

function construireUrlApi(conversationPrompt, config) {
    const { url, model, requiresModel } = config;
    const apiKey = 'Kastg_SXQxa10WTVsNYmwAoL4d_free'; //dont steal this plsss... yea... ik thiss the stupidest thing i ever do... but idk how to hide it... can someone help...? .-.

    const personalityPrompt = getPersonalityPrompt(conversationPrompt);
    const fullPrompt = personalityPrompt + " " + conversationHistory + " " + conversationPrompt;

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

        const botMessageText = JSON.parse(data.contents).result[0]?.response || "umm... i didn't understand .-.";
        
        conversationHistory += `User: ${input}\nAI: ${botMessageText}\n`;

        return botMessageText; 
    } catch (error) {
        console.error('Error fetching AI response:', error);
        return "umm... i didn't understand .-.";
    }
}

async function sendMessage() {
    const input = document.querySelector('.footer input');
    const messageText = input.value.trim();
    if (messageText === '') return;

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
        <img src="${getAIProfileImage()}" alt="AI Pfp">
        <div class="bubble">
            <div class="username">${getPersonalityUsername()} <div class="tag"><span>AI</span></div></div>
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
    <img src="${getAIProfileImage()}" alt="AI Pfp">
    <div class="bubble">
        <div class="username">${getPersonalityUsername()} <div class="tag"><span>AI</span></div></div>
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

    const personalitySelect = document.getElementById('personality');
    personalitySelect.addEventListener('change', updatePersonality);
});