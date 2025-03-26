// Initialize AOS
AOS.init({
    duration: 1000,
    once: false
});

// Initialize counts
let subhanCount = 0;
let alhamdCount = 0;
let akbarCount = 0;
let salawatCount = 0;
let haulaCount = 0;

// Get the click sound element
const clickSound = document.getElementById('clickSound');

function incrementCount(type) {
    // Play click sound
    clickSound.currentTime = 0; // Reset sound to start
    clickSound.play();

    let textToShow = '';
    let targetElement = null;

    // Increment count and get the text
    switch(type) {
        case 'subhan':
            subhanCount++;
            textToShow = 'سُبْحَانَ اللَّهِ ';
            targetElement = document.getElementById('subhanCount');
            break;
        case 'alhamd':
            alhamdCount++;
            textToShow = 'سُبْحَانَ اللَّهِ وَبِحَمْدِهِ ';
            targetElement = document.getElementById('alhamdCount');
            break;
        case 'akbar':
            akbarCount++;
            textToShow = 'أستغفر الله';
            targetElement = document.getElementById('akbarCount');
            break;
        case 'salawat':
            salawatCount++;
            textToShow = 'اللهم صلِّ على محمد';
            targetElement = document.getElementById('salawatCount');
            break;
        case 'haula':
            haulaCount++;
            textToShow = 'لا حول ولا قوة إلا بالله';
            targetElement = document.getElementById('haulaCount');
            break;
    }

    // Update the count
    targetElement.textContent = type === 'subhan' ? subhanCount : 
                                type === 'alhamd' ? alhamdCount : 
                                type === 'akbar' ? akbarCount :
                                type === 'salawat' ? salawatCount :
                                haulaCount;

    // Create floating text
    const floatingText = document.createElement('div');
    floatingText.classList.add('floating-text');
    floatingText.textContent = textToShow;

    // Position the text randomly within the body
    const bodyRect = document.body.getBoundingClientRect();
    const x = Math.random() * (bodyRect.width - 200) + 100; // Ensure text is within body width
    const y = Math.random() * (bodyRect.height - 200) + 100; // Ensure text is within body height

    floatingText.style.left = `${x}px`;
    floatingText.style.top = `${y}px`;

    // Add to body
    document.body.appendChild(floatingText);

    // Remove the text after animation
    setTimeout(() => {
        document.body.removeChild(floatingText);
    }, 1500);
}

function resetSingleCount(type, event) {
    // Stop event propagation to prevent triggering card click
    event.stopPropagation();

    // Play click sound
    clickSound.currentTime = 0;
    clickSound.play();

    // Reset specific count
    switch(type) {
        case 'subhan':
            subhanCount = 0;
            document.getElementById('subhanCount').textContent = '0';
            break;
        case 'alhamd':
            alhamdCount = 0;
            document.getElementById('alhamdCount').textContent = '0';
            break;
        case 'akbar':
            akbarCount = 0;
            document.getElementById('akbarCount').textContent = '0';
            break;
        case 'salawat':
            salawatCount = 0;
            document.getElementById('salawatCount').textContent = '0';
            break;
        case 'haula':
            haulaCount = 0;
            document.getElementById('haulaCount').textContent = '0';
            break;
    }
}

function resetCount() {
    // Play click sound for reset
    clickSound.currentTime = 0;
    clickSound.play();

    subhanCount = 0;
    alhamdCount = 0;
    akbarCount = 0;
    salawatCount = 0;
    haulaCount = 0;
    
    document.getElementById('subhanCount').textContent = '0';
    document.getElementById('alhamdCount').textContent = '0';
    document.getElementById('akbarCount').textContent = '0';
    document.getElementById('salawatCount').textContent = '0';
    document.getElementById('haulaCount').textContent = '0';
}