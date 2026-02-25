import AudioUploader from './components/AudioUploader';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-zinc-50 dark:bg-black text-center">
      <h1 className="text-5xl font-bold text-black dark:text-white mb-4">
        Smart Transcriber
      </h1>
      <p className="text-xl text-zinc-700 dark:text-zinc-300 mb-8">
        Fast, accurate audio transcription. Refine with AI.
      </p>
      <AudioUploader />
    </main>
  );
}
