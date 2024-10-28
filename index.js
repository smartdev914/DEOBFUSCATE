const fs = require('fs');
const prettier = require('prettier');
const Terser = require("terser");

/**
 * Deobfuscates JavaScript code by prettifying and simplifying variable names.
 * @param {string} inputPath - Path to the obfuscated JS file.
 * @param {string} outputPath - Path to save the deobfuscated JS file.
 */
async function deobfuscateJS(inputPath, outputPath) {
  try {
    // Step 1: Read the obfuscated file
    const obfuscatedCode = fs.readFileSync(inputPath, 'utf-8');
    
    // Check if the file was read correctly
    if (!obfuscatedCode) {
      throw new Error("Input file is empty or could not be read.");
    }

    // Step 2: Use Terser to rename variables and beautify the code
    const deobfuscated = await Terser.minify(obfuscatedCode, {
      mangle: {
        toplevel: true,   // Renames top-level variables
        keep_fnames: true // Keeps function names for readability
      },
      compress: false,     // Turns off compression for readability
      output: {
        beautify: true     // Beautifies the output for readability
      }
    });

    if (deobfuscated.error) {
      console.error("Error during deobfuscation:", deobfuscated.error);
      return;
    }

    // Step 3: Write the deobfuscated code to the output file
    fs.writeFileSync(outputPath, deobfuscated.code);
    console.log(`Deobfuscated code saved to ${outputPath}`);
  } catch (error) {
    console.error("Error during deobfuscation process:", error);
  }
}

// Example usage
deobfuscateJS('./obfuscated.js', './deobfuscated.js');
