/**
 * Function to set greeting based on current time
 */
function setGreeting() {
    // Get current time
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    
    // Get the h1 element
    const greetingElement = document.getElementById("greeting");
    
    // Set greeting based on time
    let greeting;
    
    if (hours >= 0 && hours < 11) {
        greeting = "SELAMAT PAGI";
        greetingElement.style.backgroundColor = "#FFF7D6"; // Light yellow for morning
        greetingElement.style.color = "#FF8C00";
    } else if (hours >= 11 && hours < 14) {
        greeting = "SELAMAT SIANG";
        greetingElement.style.backgroundColor = "#FFEDCC"; // Light orange for afternoon
        greetingElement.style.color = "#FF6347";
    } else if (hours >= 14 && hours < 18) {
        greeting = "SELAMAT SORE";
        greetingElement.style.backgroundColor = "#FFE8D6"; // Light orange-red for evening
        greetingElement.style.color = "#B22222";
    } else {
        greeting = "SELAMAT PETANG";
        greetingElement.style.backgroundColor = "#E8E8FF"; // Light blue for night
        greetingElement.style.color = "#483D8B";
    }
    
    // Update the content of the h1 element
    greetingElement.innerHTML = greeting;
    
    // Add current time display
    const timeString = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
    const timeDisplay = document.createElement("div");
    timeDisplay.style.fontSize = "1rem";
    timeDisplay.style.marginTop = "10px";
    timeDisplay.style.color = "#666";
    timeDisplay.textContent = `Waktu saat ini: ${timeString}`;
    greetingElement.appendChild(timeDisplay);
    
    console.log(`Current time: ${timeString}, Greeting: ${greeting}`);
}

// Call the function when the page loads
window.onload = setGreeting;
