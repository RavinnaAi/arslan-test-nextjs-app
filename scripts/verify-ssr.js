#!/usr/bin/env node

/**
 * Script to verify Server-Side Rendering (SSR) is working
 * Run this after starting your dev server: node scripts/verify-ssr.js
 */

const http = require('http');

const PORT = process.env.PORT || 3000;
const HOST = 'localhost';

function checkSSR(path) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: HOST,
      port: PORT,
      path: path,
      method: 'GET',
    };

    const req = http.request(options, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        // Check if HTML contains actual content (not just a shell)
        const hasContent = data.includes('Nesti AI') || data.includes('Welcome Back') || data.includes('Sign Up');
        const isHTML = data.trim().startsWith('<!DOCTYPE html>') || data.trim().startsWith('<html');
        
        resolve({
          path,
          status: res.statusCode,
          isHTML,
          hasContent,
          contentLength: data.length,
          preview: data.substring(0, 200).replace(/\s+/g, ' ').trim(),
        });
      });
    });

    req.on('error', (error) => {
      reject({ path, error: error.message });
    });

    req.end();
  });
}

async function verifySSR() {
  console.log('🔍 Verifying Server-Side Rendering (SSR)...\n');
  console.log(`📡 Checking http://${HOST}:${PORT}\n`);

  const pages = [
    '/',
    '/login',
    '/signup',
    '/ssr-test',
  ];

  const apiRoutes = [
    '/api/ssr-info',
  ];

  try {
    // Check pages
    console.log('📄 Checking Pages:\n');
    for (const page of pages) {
      try {
        const result = await checkSSR(page);
        const status = result.hasContent && result.isHTML ? '✅ SSR Working' : '❌ SSR Not Working';
        console.log(`${status} - ${page}`);
        console.log(`   Status: ${result.status}`);
        console.log(`   Content Length: ${result.contentLength} bytes`);
        console.log(`   Has Content: ${result.hasContent}`);
        console.log(`   Preview: ${result.preview}...\n`);
      } catch (error) {
        console.log(`❌ Error - ${page}: ${error.error}\n`);
      }
    }

    // Check API routes
    console.log('\n🔌 Checking API Routes:\n');
    for (const route of apiRoutes) {
      try {
        const result = await checkSSR(route);
        const isJSON = result.preview.startsWith('{');
        const status = isJSON ? '✅ API Working' : '❌ API Not Working';
        console.log(`${status} - ${route}`);
        console.log(`   Status: ${result.status}`);
        console.log(`   Response: ${result.preview}\n`);
      } catch (error) {
        console.log(`❌ Error - ${route}: ${error.error}\n`);
      }
    }

    console.log('\n✨ Verification complete!');
    console.log('\n💡 Tips:');
    console.log('   - View page source in browser to see pre-rendered HTML');
    console.log('   - Check Network tab in DevTools to see server responses');
    console.log('   - Visit /ssr-test for interactive SSR demonstration');
    
  } catch (error) {
    console.error('❌ Verification failed:', error);
    console.log('\n⚠️  Make sure your dev server is running: npm run dev');
  }
}

// Run verification
verifySSR();

