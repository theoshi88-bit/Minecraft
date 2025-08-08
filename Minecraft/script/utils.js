// scripts/utils.js

// Clamp value within bounds
function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

// Convert mouse position to grid coordinates
function getTileCoordinates(mouseX, mouseY, canvas, tileSize) {
  const rect = canvas.getBoundingClientRect();
  const x = Math.floor((mouseX - rect.left) / tileSize);
  const y = Math.floor((mouseY - rect.top) / tileSize);
  return { x, y };
}

// Load a world from a JSON file
async function loadWorldFromFile(url) {
  const res = await fetch(url);
  const data = await res.json();
  return data;
}
