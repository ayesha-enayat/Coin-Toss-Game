function tossCoin() {
    const coin = document.getElementById('coin');
    const resultText = document.getElementById('result');
    
    // Remove any existing flip animation
    coin.classList.remove('flip');
    
    // Randomly decide heads or tails
    const result = Math.random() < 0.5 ? 'Heads' : 'Tails';
    
    // Add the flip animation
    setTimeout(() => {
        coin.classList.add('flip');
        
        // Display the result after the flip animation completes
        setTimeout(() => {
            resultText.textContent = result + " Wins";
            
            // Update the side of the coin to display the result
            const side = document.getElementById('side');
            side.textContent = result;
        }, 1000); // match the duration of the flip animation (2s)
    }, 100);
}
