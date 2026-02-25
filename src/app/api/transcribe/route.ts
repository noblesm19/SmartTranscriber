import { NextResponse } from 'next/server';

const MAC_MINI_TAILSCALE_IP = process.env.MAC_MINI_TAILSCALE_IP || '100.98.62.14';
const FLASK_API_PORT = process.env.FLASK_API_PORT || '5000';
const OLLAMA_TRANSCRIPTION_ENDPOINT = `http://${MAC_MINI_TAILSCALE_IP}:${FLASK_API_PORT}/transcribe`;

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const audioFile = formData.get('audio');

    if (!audioFile) {
      return NextResponse.json({ error: 'No audio file provided' }, { status: 400 });
    }

    // Forward the audio file to the local Mac mini Flask API
    const macMiniResponse = await fetch(OLLAMA_TRANSCRIPTION_ENDPOINT, {
      method: 'POST',
      body: formData,
    });

    const macMiniData = await macMiniResponse.json();

    if (!macMiniResponse.ok) {
      console.error('Mac mini API error:', macMiniData.error);
      return NextResponse.json(
        { error: `Transcription failed: ${macMiniData.error || 'Unknown error from Mac mini'}` },
        { status: macMiniResponse.status || 500 }
      );
    }

    return NextResponse.json({
      message: 'Audio transcribed successfully',
      transcription: macMiniData.transcription,
      jobId: 'mock-job-id-123', // Still a placeholder, but now with real transcription
    }, { status: 200 });
  } catch (error) {
    console.error('API route error:', error);
    return NextResponse.json(
      { error: 'Internal server error occurred during transcription' },
      { status: 500 }
    );
  }
}
