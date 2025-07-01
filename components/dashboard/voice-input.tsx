"use client";

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Mic, Square } from 'lucide-react';

export function VoiceInput() {
  const { t } = useTranslation();
  const [isRecording, setIsRecording] = useState(false);
  const [transcription, setTranscription] = useState('');

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    if (!isRecording) {
      setTranscription('');
    } else {
      setTranscription("Black tactical backpack for hiking and outdoor activities...");
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <button 
          onClick={toggleRecording}
          className={`h-20 w-20 rounded-full flex items-center justify-center text-white text-2xl transition-all hover:scale-105 ${
            isRecording ? 'bg-red-500 animate-pulse' : 'bg-gradient-to-r from-blue-600 to-purple-600'
          }`}
        >
          {isRecording ? <Square className="h-8 w-8" /> : <Mic className="h-8 w-8" />}
        </button>
        <p className="mt-3 text-sm text-muted-foreground">
          {isRecording ? t('voice.recording') : t('voice.start')}
        </p>
      </div>
      
      {transcription && (
        <div className="bg-muted p-4 rounded-lg">
          <p className="text-sm font-medium mb-2">{t('voice.transcription')}</p>
          <p className="text-sm">{transcription}</p>
        </div>
      )}
      
      <div className="text-center">
        <p className="text-xs text-muted-foreground">
          {t('voice.languages')}
        </p>
      </div>
    </div>
  );
}