document.addEventListener("DOMContentLoaded", function() {
    // Function to load signal strength information
    function loadSignalStrength() {
        const signalInfo = document.getElementById("signal-info");
        // Simulating signal strength data loading
        setTimeout(() => {
            signalInfo.innerHTML = `
                <p>Signal Strength: <strong>Good</strong></p>
                <p>Nearest Tower: <strong>5 miles away</strong></p>
            `;
        }, 1000);
    }

    // Load signal strength information on page load
    loadSignalStrength();
});
