export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-zinc-50 dark:bg-black text-center">
      <h1 className="text-5xl font-bold text-black dark:text-white mb-4">
        Smart Transcriber
      </h1>
      <p className="text-xl text-zinc-700 dark:text-zinc-300 mb-8">
        Fast, accurate audio transcription. Refine with AI.
      </p>
      <div className="w-full max-w-lg p-6 border rounded-lg shadow-md bg-white dark:bg-zinc-800">
        <h2 className="text-2xl font-semibold text-black dark:text-white mb-4">
          Upload Audio
        </h2>
        {/* Audio upload component will go here */}
        <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-12 text-gray-500 dark:text-gray-400">
          Drag & Drop Audio File or Click to Browse
        </div>
      </div>
    </main>
  );
}
