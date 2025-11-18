const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

console.log('🎨 Starting image optimization...\n');

// Step 1: Extract JPEGs from SVG files
const svgFiles = [
  { svg: 'src/app/home/heroimage.svg', jpg: 'src/app/home/heroimage-original.jpg' },
  { svg: 'src/app/home/heroimg.svg', jpg: 'src/app/home/heroimg-original.jpg' },
  { svg: 'src/app/home/hero-tab.svg', jpg: 'src/app/home/hero-tab-original.jpg' },
  { svg: 'src/app/home/hero-lap.svg', jpg: 'src/app/home/hero-lap-original.jpg' }
];

console.log('📦 Step 1: Extracting images from SVG files...\n');

svgFiles.forEach(file => {
  if (fs.existsSync(file.svg)) {
    const svgContent = fs.readFileSync(file.svg, 'utf8');
    const base64Match = svgContent.match(/data:image\/jpeg;base64,([^"]+)/);

    if (base64Match) {
      const imageBuffer = Buffer.from(base64Match[1], 'base64');
      fs.writeFileSync(file.jpg, imageBuffer);
      const sizeMB = (imageBuffer.length / 1024 / 1024).toFixed(2);
      console.log(`✓ Extracted: ${path.basename(file.jpg)} (${sizeMB} MB)`);
    }
  }
});

// Step 2: Optimize images
const optimizations = [
  { input: 'src/app/home/heroimage-original.jpg', output: 'src/app/home/heroimage.jpg', width: 1920, quality: 82 },
  { input: 'src/app/home/heroimg-original.jpg', output: 'src/app/home/heroimg.jpg', width: 768, quality: 80 },
  { input: 'src/app/home/hero-tab-original.jpg', output: 'src/app/home/hero-tab.jpg', width: 1024, quality: 80 },
  { input: 'src/app/home/hero-lap-original.jpg', output: 'src/app/home/hero-lap.jpg', width: 1440, quality: 82 }
];

console.log('\n⚡ Step 2: Optimizing images with sharp...\n');

async function optimizeImages() {
  let totalOriginal = 0;
  let totalOptimized = 0;

  for (const opt of optimizations) {
    if (!fs.existsSync(opt.input)) continue;

    const inputSize = fs.statSync(opt.input).size;
    totalOriginal += inputSize;

    // Optimize JPEG
    await sharp(opt.input)
      .resize(opt.width, null, { fit: 'cover', position: 'center' })
      .jpeg({ quality: opt.quality, progressive: true, mozjpeg: true })
      .toFile(opt.output);

    const outputSize = fs.statSync(opt.output).size;
    totalOptimized += outputSize;
    const reduction = ((1 - outputSize / inputSize) * 100).toFixed(1);

    console.log(`✓ ${path.basename(opt.output)}: ${(inputSize / 1024 / 1024).toFixed(2)} MB → ${(outputSize / 1024).toFixed(0)} KB (${reduction}% smaller)`);

    // Create WebP version
    const webpOutput = opt.output.replace('.jpg', '.webp');
    await sharp(opt.input)
      .resize(opt.width, null, { fit: 'cover', position: 'center' })
      .webp({ quality: opt.quality + 3, effort: 6 })
      .toFile(webpOutput);

    const webpSize = fs.statSync(webpOutput).size;
    console.log(`✓ ${path.basename(webpOutput)}: ${(webpSize / 1024).toFixed(0)} KB\n`);
  }

  // Clean up original extracted files
  console.log('🧹 Cleaning up original extracted files...\n');
  svgFiles.forEach(file => {
    if (fs.existsSync(file.jpg)) {
      fs.unlinkSync(file.jpg);
      console.log(`✓ Removed: ${path.basename(file.jpg)}`);
    }
  });

  const totalReduction = ((1 - totalOptimized / totalOriginal) * 100).toFixed(1);
  console.log(`\n✅ Optimization complete!`);
  console.log(`📊 Total: ${(totalOriginal / 1024 / 1024).toFixed(2)} MB → ${(totalOptimized / 1024).toFixed(0)} KB (${totalReduction}% reduction)\n`);
}

optimizeImages().catch(console.error);
