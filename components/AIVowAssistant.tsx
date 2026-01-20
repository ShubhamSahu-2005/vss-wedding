import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Sparkles, ScrollText, Loader2, X } from 'lucide-react';

export const AIVowAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [tone, setTone] = useState('');
  const [partnerName, setPartnerName] = useState('');
  const [generatedVow, setGeneratedVow] = useState('');
  const [loading, setLoading] = useState(false);

  const generateVow = async () => {
    if (!tone || !partnerName) return;
    setLoading(true);
    setGeneratedVow('');

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const model = "gemini-3-flash-preview";

      const prompt = `Write a short, emotional, and ${tone} wedding vow for my partner named ${partnerName}. Keep it under 100 words.`;

      const response = await ai.models.generateContent({
        model: model,
        contents: prompt,
      });

      setGeneratedVow(response.text || "May your love shine brighter than the stars.");
    } catch (error) {
      console.error(error);
      setGeneratedVow("Unable to consult the stars at this moment. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-luxury-black text-luxury-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform border border-luxury-gold/30 hover:border-luxury-gold flex items-center gap-2 group"
      >
        <Sparkles className="w-5 h-5 text-luxury-gold animate-pulse" />
        <span className="hidden group-hover:block font-serif tracking-widest text-xs uppercase">Write My Vows</span>
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-luxury-black/90 backdrop-blur-sm p-4">
          <div className="bg-luxury-white text-luxury-black border border-luxury-gold p-8 max-w-md w-full relative shadow-2xl">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-luxury-black/30 hover:text-luxury-gold transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="font-serif text-3xl text-luxury-black mb-2 text-center italic">
              Vow Assistant
            </h3>
            <div className="w-12 h-[1px] bg-luxury-gold mx-auto mb-8"></div>

            <div className="space-y-6">
              <div>
                <label className="block text-xs uppercase tracking-ultra-wide text-luxury-black/60 mb-2 font-bold">Partner's Name</label>
                <input
                  type="text"
                  value={partnerName}
                  onChange={(e) => setPartnerName(e.target.value)}
                  className="w-full bg-luxury-grey/30 border-b border-luxury-black/10 p-3 text-luxury-black focus:outline-none focus:border-luxury-gold transition-colors font-serif text-lg"
                  placeholder="e.g., Priya"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-ultra-wide text-luxury-black/60 mb-2 font-bold">Vibe / Tone</label>
                <select
                  value={tone}
                  onChange={(e) => setTone(e.target.value)}
                  className="w-full bg-luxury-grey/30 border-b border-luxury-black/10 p-3 text-luxury-black focus:outline-none focus:border-luxury-gold transition-colors font-serif text-lg appearance-none"
                >
                  <option value="">Select a Vibe</option>
                  <option value="romantic and poetic">Romantic & Poetic</option>
                  <option value="funny and witty">Funny & Witty</option>
                  <option value="traditional and solemn">Traditional & Solemn</option>
                  <option value="minimalist and modern">Minimalist & Modern</option>
                </select>
              </div>

              <button
                onClick={generateVow}
                disabled={loading || !tone || !partnerName}
                className="w-full bg-luxury-black text-white text-[10px] uppercase tracking-ultra-wide font-bold py-4 hover:bg-luxury-gold transition-colors flex justify-center items-center gap-2 mt-4"
              >
                {loading ? <Loader2 className="animate-spin w-4 h-4" /> : <ScrollText className="w-4 h-4" />}
                {loading ? "Composing..." : "Generate Vows"}
              </button>
            </div>

            {generatedVow && (
              <div className="mt-8 pt-8 border-t border-luxury-black/5 animate-fade-in">
                <p className="font-serif italic text-xl text-luxury-black/80 leading-loose text-center">
                  "{generatedVow}"
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};
