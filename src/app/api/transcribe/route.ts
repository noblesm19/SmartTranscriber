import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const formData = await request.formData();
  const audioFile = formData.get('audio');

  if (!audioFile) {
    return NextResponse.json({ error: 'No audio file provided' }, { status: 400 });
  }

  // For now, we'll just log the file name and return a success message.
  // The actual transcription logic will be added here later.
  console.log('Received audio file:', (audioFile as File).name);

  return NextResponse.json({
    message: 'Audio file received and processing initiated (placeholder)',
    fileName: (audioFile as File).name,
    jobId: 'mock-job-id-123', // Placeholder for a real job ID
  }, { status: 202 });
}
