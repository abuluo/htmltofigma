// Main JavaScript file for handling page interactions

// Update iOS status bar time
function updateStatusBarTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    document.querySelectorAll('.ios-status-bar .time').forEach(el => {
        el.textContent = `${hours}:${minutes}`;
    });
}

// Initialize status bar time and update every minute
setInterval(updateStatusBarTime, 60000);
updateStatusBarTime();

// Handle iframe content loading
function handleIframeLoad(iframe) {
    // Adjust iframe height to match content
    iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px';
    
    // Add iOS status bar and tab bar to iframe content if needed
    const iframeDoc = iframe.contentWindow.document;
    if (!iframeDoc.querySelector('.ios-status-bar')) {
        const statusBar = document.createElement('div');
        statusBar.className = 'ios-status-bar';
        statusBar.innerHTML = `
            <span class="time">9:41</span>
            <div class="icons">
                <i class="fas fa-signal"></i>
                <i class="fas fa-wifi"></i>
                <i class="fas fa-battery-full"></i>
            </div>
        `;
        iframeDoc.body.insertBefore(statusBar, iframeDoc.body.firstChild);
    }
}

// Initialize iframes
document.querySelectorAll('iframe').forEach(iframe => {
    iframe.addEventListener('load', () => handleIframeLoad(iframe));
});

// Handle signal card interactions
document.addEventListener('click', function(e) {
    // Handle follow button clicks
    if (e.target.closest('.btn-telegram')) {
        const button = e.target.closest('.btn-telegram');
        if (button.textContent.trim() === '关注') {
            button.textContent = '已关注';
            button.classList.remove('btn-telegram');
            button.classList.add('bg-gray-200', 'text-gray-600');
        }
    }

    // Handle heart button clicks
    if (e.target.closest('.fa-heart')) {
        const heart = e.target.closest('.fa-heart');
        if (heart.classList.contains('far')) {
            heart.classList.remove('far');
            heart.classList.add('fas', 'text-red-500');
        } else {
            heart.classList.remove('fas', 'text-red-500');
            heart.classList.add('far');
        }
    }
});

// Handle filter tabs
document.addEventListener('click', function(e) {
    if (e.target.closest('.px-4.py-2.text-sm')) {
        const tabs = e.target.closest('.flex').querySelectorAll('.px-4.py-2.text-sm');
        tabs.forEach(tab => {
            tab.classList.remove('text-blue-600', 'border-b-2', 'border-blue-600');
            tab.classList.add('text-gray-500');
        });
        e.target.classList.remove('text-gray-500');
        e.target.classList.add('text-blue-600', 'border-b-2', 'border-blue-600');
    }
});

// Handle modal interactions
function showModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }
}

function hideModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
    }
}

// Handle form submissions
document.addEventListener('submit', function(e) {
    e.preventDefault();
    // Add form submission logic here
});

// Handle Telegram integration
function connectTelegram() {
    // Add Telegram connection logic here
    console.log('Connecting to Telegram...');
}

// Handle auto-trading settings
function updateAutoTradingSettings(settings) {
    // Add auto-trading settings update logic here
    console.log('Updating auto-trading settings:', settings);
}

// Handle signal creation
function createSignal(signalData) {
    // Add signal creation logic here
    console.log('Creating new signal:', signalData);
}

// Handle wallet operations
function handleWalletOperation(operation, amount) {
    // Add wallet operation logic here
    console.log('Handling wallet operation:', operation, amount);
}

// Dynamic Island animations
function animateDynamicIsland(type, data) {
    const island = document.querySelector('.dynamic-island');
    if (!island) return;

    switch (type) {
        case 'signal':
            island.style.width = '350px';
            island.innerHTML = `
                <div class="p-2 text-white">
                    <div class="flex items-center">
                        <i class="fas fa-chart-line mr-2"></i>
                        <span>新信号: ${data.pair} ${data.direction}</span>
                    </div>
                </div>
            `;
            break;
        case 'notification':
            island.style.width = '300px';
            island.innerHTML = `
                <div class="p-2 text-white">
                    <div class="flex items-center">
                        <i class="fas fa-bell mr-2"></i>
                        <span>${data.message}</span>
                    </div>
                </div>
            `;
            break;
    }

    setTimeout(() => {
        island.style.width = '126px';
        island.innerHTML = '';
    }, 3000);
}

// Export functions for use in other files
window.app = {
    showModal,
    hideModal,
    connectTelegram,
    updateAutoTradingSettings,
    createSignal,
    handleWalletOperation,
    animateDynamicIsland
};
