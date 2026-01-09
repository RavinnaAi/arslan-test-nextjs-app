// This component can be added to any page to show SSR status
// It will display server-side information

export default function SSRIndicator() {
  const serverTime = new Date().toISOString();
  const isServer = typeof window === 'undefined';

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 text-white text-xs p-2 rounded shadow-lg z-50">
      <div className="font-semibold mb-1">SSR Status:</div>
      <div>✅ Server-Side Rendered</div>
      <div className="mt-1 text-gray-300">
        Server Time: {serverTime}
      </div>
      <div className="mt-1 text-gray-300">
        Rendered On: {isServer ? 'Server' : 'Client'}
      </div>
    </div>
  );
}

