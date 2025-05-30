interface GeneratedData {
    hex: string
    rgb: number[]
}

interface FullGeneratedData {
    hex: string
    rgb: number[]
    name: string
}

function hexToRGB(hex: string) {
  // Remove the hash sign if it's included
  hex = hex.replace(/^#/, "");

  // Parse the hex values
  let bigint = parseInt(hex, 16);

  // Extract RGB components
  let r = (bigint >> 16) & 255;
  let g = (bigint >> 8) & 255;
  let b = bigint & 255;

  // Return the RGB values as an array
  return [r, g, b];
}

const generateHex = (size: number) => {
  let result = [];
  let hexRef = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

  for (let n = 0; n < size; n++) {
    result.push(hexRef[Math.floor(Math.random() * 16)]);
  }
  return result.join('');
}

export function generateNumData(): GeneratedData {
    const hex = generateHex(6)
    const rgb = hexToRGB(hex)
    return {
        hex: hex,
        rgb: rgb
    }
}

export function generateFullData(): FullGeneratedData {
    const { hex, rgb } = generateNumData()
    // TODO: generate names using AI
}