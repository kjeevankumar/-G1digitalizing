class TactileAudio {
  constructor() {
    this.audioCtx = null;
  }

  init() {
    if (!this.audioCtx) {
      this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  playPop() {
    this.init();
    if (!this.audioCtx) return;

    const t = this.audioCtx.currentTime;
    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();

    // Characteristics of a subtle physical "pop" or "tick"
    osc.type = 'sine';
    
    // Frequency envelope (creates the "tick" transient)
    osc.frequency.setValueAtTime(800, t);
    osc.frequency.exponentialRampToValueAtTime(50, t + 0.02);

    // Amplitude envelope
    gain.gain.setValueAtTime(0.3, t);
    gain.gain.exponentialRampToValueAtTime(0.01, t + 0.02);
    
    osc.connect(gain);
    gain.connect(this.audioCtx.destination);
    
    osc.start(t);
    osc.stop(t + 0.02);
  }

  playSubtleClick() {
    this.init();
    if (!this.audioCtx) return;

    const t = this.audioCtx.currentTime;
    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(1000, t);
    osc.frequency.exponentialRampToValueAtTime(100, t + 0.015);

    gain.gain.setValueAtTime(0.15, t);
    gain.gain.exponentialRampToValueAtTime(0.01, t + 0.015);
    
    osc.connect(gain);
    gain.connect(this.audioCtx.destination);
    
    osc.start(t);
    osc.stop(t + 0.015);
  }
}

export const tactileAudio = new TactileAudio();
