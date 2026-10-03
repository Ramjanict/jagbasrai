export function logMemory() {
  if (typeof window !== "undefined") return;

  const usage = process.memoryUsage();
  console.log(
    `[MEMORY] Heap: ${Math.round(usage.heapUsed / 1024 / 1024)}MB / ${Math.round(usage.heapTotal / 1024 / 1024)}MB | RSS: ${Math.round(usage.rss / 1024 / 1024)}MB`,
  );
}

export function startMemoryMonitor() {
  if (typeof window !== "undefined") return;

  setInterval(() => {
    logMemory();
  }, 30000); // Every 30 seconds
}
