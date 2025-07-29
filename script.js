const previewBox = document.getElementById('previewBox');
const color1 = document.getElementById('color1');
const color2 = document.getElementById('color2');
const direction = document.getElementById('direction');
const gradientType = document.getElementById('gradientType');
const cssOutput = document.getElementById('cssOutput');
const generateBtn = document.getElementById('generateBtn');
const copyBtn = document.getElementById('copyBtn');

function setGradient() {
  const type = gradientType.value;
  const dir = direction.value;
  const col1 = color1.value;
  const col2 = color2.value;

  const gradient = `${type}(${dir}, ${col1}, ${col2})`;
  previewBox.style.background = gradient;
  cssOutput.textContent = `background: ${gradient};`;
}

function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
}

function generateRandomGradient() {
  color1.value = getRandomColor();
  color2.value = getRandomColor();
  direction.selectedIndex = Math.floor(Math.random() * direction.length);
  gradientType.selectedIndex = Math.floor(Math.random() * 2);
  setGradient();
}

function copyToClipboard() {
  navigator.clipboard.writeText(cssOutput.textContent);
  copyBtn.textContent = "✅ Copied!";
  setTimeout(() => copyBtn.textContent = "📋 Copy CSS", 1500);
}

// Event Listeners
color1.addEventListener('input', setGradient);
color2.addEventListener('input', setGradient);
direction.addEventListener('change', setGradient);
gradientType.addEventListener('change', setGradient);
generateBtn.addEventListener('click', generateRandomGradient);
copyBtn.addEventListener('click', copyToClipboard);

// Init on load
setGradient();
