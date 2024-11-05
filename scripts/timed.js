document.addEventListener('DOMContentLoaded', () => {
    const socialMedia = document.querySelector('.social-media');
    const titleElement = document.getElementById('social-section-title');
    const iconsContainer = document.getElementById('icons-container');
    let isSocialMedia = true;

    function fadeInOut(element, newText, timeout = 600) {
        element.classList.add('fade-out');
        setTimeout(() => {
            element.textContent = newText;
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
        }, timeout);
        setTimeout(() => element.classList.remove('fade-in'), timeout * 2);
    }

    function toggleSection() {
        iconsContainer.classList.add('fade-out');
        
        setTimeout(() => {
            isSocialMedia = !isSocialMedia;
            const newTitle = isSocialMedia ? 'ଘ‧˚꒰．My socials!．꒱˚꒦꒷' : 'ଘ‧˚꒰．My games!．꒱˚꒦꒷';
            fadeInOut(titleElement, newTitle);
            iconsContainer.innerHTML = isSocialMedia ? getSocialMediaIcons() : getGamesIcons();
            iconsContainer.classList.remove('fade-out');
            setTimeout(() => {
                iconsContainer.classList.add('fade-in');
                setTimeout(() => iconsContainer.classList.remove('fade-in'), 600);
            }, 50);
        }, 600);
    }

    setInterval(toggleSection, 5000);

    titleElement.textContent = 'ଘ‧˚꒰．My socials!．꒱˚꒦꒷';
    iconsContainer.innerHTML = getSocialMediaIcons();

    function getSocialMediaIcons() {
        return `
        <div class="fade">
        <div class="huuu">
        <p>
            <a href="https://youtube.com/@chezzy_lily"><img src="icons/youtube.png" alt="yt" style="width: 40px; height: 40px;"></a>
            <a href="https://www.tiktok.com/@sleepychezz"><img src="icons/tiktok.png" alt="tt" style="width: 40px; height: 40px;"></a>
            <a href="https://discord.gg/CSc32EpttY"><img src="icons/discord.png" alt="dsc" style="width: 40px; height: 40px;"></a>
            <a href="https://github.com/JustCallMeChezz"><img src="icons/github.png" alt="git" style="width: 40px; height: 40px;"></a>
            <a href="https://instagram.com/chezzy_lily"><img src="icons/instagram.png" alt="ig" style="width: 40px; height: 40px;"></a>
        </p>
        </div>
        </div>
        `;
    }

    function getGamesIcons() {
        return `
        <div class="fade">
        <div class="huuu">
        <p>
            <a id="roblox-icon" href="https://www.roblox.com/users/4379659969/profile"><img src="icons/roblox.png" alt="Roblox" style="width: 40px; height: 40px;"></a>
            <a id="minecraft-icon" href="https://launch.minecraft.net/profile/Chezzy%20Lily"><img src="icons/minecraft.png" alt="Minecraft" style="width: 40px; height: 40px;"></a>
            <a id="mobile-legends-icon" href="https://www.mobilelegends.com"><img src="icons/mlbb.png" alt="Mobile Legends" style="width: 40px; height: 40px;"></a>
        </p>
        </div>
        </div>
        `;
    }
});
