document.addEventListener('DOMContentLoaded', (event) => {
            let dateElement = document.getElementById('chat-date');
            let today = new Date();
            let options = { month: 'long', day: 'numeric' };
            let currentDate = today.toLocaleDateString('en-US', options);
            dateElement.textContent = currentDate;
        });