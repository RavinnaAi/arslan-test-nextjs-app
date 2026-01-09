// This page demonstrates Server-Side Rendering (SSR)
// In Next.js App Router, components are Server Components by default
// They render on the server and send HTML to the client

export default function SSRTestPage() {
  // Server-side data fetching (this runs on the server)
  const serverTimestamp = new Date().toISOString();
  const serverTime = new Date().toLocaleString();
  
  // This will be different on each request because it's rendered on the server
  const randomNumber = Math.floor(Math.random() * 10000);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 page-container">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Server-Side Rendering (SSR) Test Page
        </h1>

        <div className="space-y-6">
          <div className="bg-green-50 border-l-4 border-primary p-4">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              ✅ This page is Server-Side Rendered
            </h2>
            <p className="text-gray-700">
              In Next.js App Router, all components are Server Components by default.
              They render on the server and send pre-rendered HTML to the client.
            </p>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Server-Side Information:
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>
                <strong>Server Timestamp:</strong> {serverTimestamp}
              </li>
              <li>
                <strong>Server Time:</strong> {serverTime}
              </li>
              <li>
                <strong>Random Number (generated on server):</strong> {randomNumber}
              </li>
              <li>
                <strong>Node Environment:</strong> {process.env.NODE_ENV || 'not set'}
              </li>
            </ul>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              How to Verify SSR:
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>
                <strong>View Page Source:</strong> Right-click → "View Page Source" 
                (you should see the HTML content pre-rendered)
              </li>
              <li>
                <strong>Check Network Tab:</strong> The initial HTML response contains 
                all the content (not just a shell)
              </li>
              <li>
                <strong>Disable JavaScript:</strong> The page still displays content 
                because it's server-rendered
              </li>
              <li>
                <strong>Refresh the page:</strong> The random number changes on each 
                refresh (proving server-side execution)
              </li>
            </ol>
          </div>

          <div className="bg-purple-50 border-l-4 border-purple-500 p-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Your Pages Status:
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>✅ <code className="bg-gray-200 px-2 py-1 rounded">/</code> - Server Component (SSR)</li>
              <li>✅ <code className="bg-gray-200 px-2 py-1 rounded">/login</code> - Server Component (SSR)</li>
              <li>✅ <code className="bg-gray-200 px-2 py-1 rounded">/signup</code> - Server Component (SSR)</li>
              <li>✅ <code className="bg-gray-200 px-2 py-1 rounded">/ssr-test</code> - Server Component (SSR)</li>
            </ul>
          </div>

          <div className="bg-red-50 border-l-4 border-red-500 p-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              ⚠️ Note:
            </h3>
            <p className="text-gray-700">
              If you need client-side interactivity (useState, useEffect, event handlers),
              you must add <code className="bg-gray-200 px-2 py-1 rounded">"use client"</code> at the top of the file.
              This converts it to a Client Component and disables SSR for that component.
            </p>
          </div>

          <div className="pt-4">
            <a 
              href="/" 
              className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-dark transition-colors"
            >
              ← Back to Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

