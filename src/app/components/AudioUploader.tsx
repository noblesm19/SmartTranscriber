'use client';

import React, { useState } from 'react';

export default function AudioUploader() {
  const [audioFile, setAudioFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setAudioFile(event.target.files[0]);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (event.dataTransfer.files && event.dataTransfer.files[0]) {
      setAudioFile(event.dataTransfer.files[0]);
    }
  };

  return (
    <div className="w-full max-w-lg p-6 border rounded-lg shadow-md bg-white dark:bg-zinc-800 text-center">
      <h2 className="text-2xl font-semibold text-black dark:text-white mb-4">
        Upload Audio
      </h2>
      <div
        className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-12 text-gray-500 dark:text-gray-400 cursor-pointer hover:border-blue-500 transition-colors"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onClick={() => document.getElementById('audioInput')?.click()}
      >
        {audioFile ? (
          <p>Selected file: {audioFile.name}</p>
        ) : (
          <p>Drag & Drop Audio File or Click to Browse</p>
        )}
        <input
          id="audioInput"
          type="file"
          accept="audio/*"
          className="hidden"
          onChange={handleFileChange}
        />
      </div>
      {audioFile && (
        <button
          className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          onClick={() => alert('Transcribe functionality coming soon!')}
        >
          Transcribe Audio
        </button>
      )}
    </div>
  );
}
