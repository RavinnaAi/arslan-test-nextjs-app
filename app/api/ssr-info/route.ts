// API Route to demonstrate server-side execution
// This runs ONLY on the server

import { NextResponse } from 'next/server';

export async function GET() {
  // This code runs on the server, not in the browser
  const serverInfo = {
    timestamp: new Date().toISOString(),
    serverTime: new Date().toLocaleString(),
    environment: process.env.NODE_ENV,
    nodeVersion: process.version,
    isServer: true,
    message: 'This API route runs exclusively on the server',
  };

  return NextResponse.json(serverInfo);
}

