const fs = require('fs');
const Terser = require('terser');
const acorn = require('acorn');

async function deobfuscateJS(inputPath, outputPath) {
  try {
    // Read the obfuscated file
    const obfuscatedCode = fs.readFileSync(inputPath, 'utf-8');

    const wrappedCode = obfuscatedCode.trim().startsWith("return")
      ? `(async () => { ${obfuscatedCode} })();`
      : obfuscatedCode;


    // Try to deobfuscate using Terser
    const deobfuscated = await Terser.minify(wrappedCode, {
      mangle: {
        toplevel: true,
        keep_fnames: true
      },
      compress: false,
      output: {
        beautify: true
      }
    });

    if (deobfuscated.error) {
      throw new Error(`Error during deobfuscation: ${deobfuscated.error}`);
    }

    // Write the deobfuscated code to the output file
    fs.writeFileSync(outputPath, deobfuscated.code);
    console.log(`Deobfuscated code saved to ${outputPath}`);
  } catch (error) {
    console.error("Error during deobfuscation process:", error);
  }
}

function isValidJS(code) {
  try {
    acorn.parse(code, { ecmaVersion: 'latest' });
    return true;
  } catch (error) {
    console.error("Parsing error:", error);
    return false;
  }
}

// Example usage
deobfuscateJS('./obfuscated.js', './deobfuscated.js');
