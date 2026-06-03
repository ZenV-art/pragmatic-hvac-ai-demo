window.CALL_MANIFEST = [
  {
    "file": "line-01.mp3",
    "speaker": "maya",
    "text": "Thanks for calling Pragmatic HVAC, this is Maya. I can get a technician out to you — what's the problem today?"
  },
  {
    "file": "line-02.mp3",
    "speaker": "caller",
    "text": "Hi, my AC has completely stopped and it's unbearable — it must be 44 degrees outside.",
    "action": {
      "set": "issue",
      "value": "AC not cooling — breakdown"
    }
  },
  {
    "file": "line-03.mp3",
    "speaker": "maya",
    "text": "Oh, in this heat that's really tough — let's get it sorted fast. Is there an infant, an elderly person, or anyone unwell at home? I want to flag the urgency correctly."
  },
  {
    "file": "line-04.mp3",
    "speaker": "caller",
    "text": "Yes — we have a six-month-old baby and my mother is seventy.",
    "action": {
      "set": "priority",
      "value": "HIGH",
      "status": "⚠ Vulnerable occupant detected — escalated to priority dispatch."
    }
  },
  {
    "file": "line-05.mp3",
    "speaker": "maya",
    "text": "Understood — I'm marking this as a priority call so we reach you first. May I have your full name?"
  },
  {
    "file": "line-06.mp3",
    "speaker": "caller",
    "text": "Rohit Sharma.",
    "action": {
      "set": "name",
      "value": "Rohit Sharma"
    }
  },
  {
    "file": "line-07.mp3",
    "speaker": "maya",
    "text": "Thank you, Rohit. What's the service address?"
  },
  {
    "file": "line-08.mp3",
    "speaker": "caller",
    "text": "Flat 402, Sunshine Residency, Koramangala, Bangalore.",
    "action": {
      "set": "address",
      "value": "Flat 402, Sunshine Residency, Koramangala"
    }
  },
  {
    "file": "line-09.mp3",
    "speaker": "maya",
    "text": "Got it. And the best mobile number, in case the call drops?"
  },
  {
    "file": "line-10.mp3",
    "speaker": "caller",
    "text": "It's nine eight seven six five, four three two one zero.",
    "action": {
      "set": "phone",
      "value": "+91 98765 43210"
    }
  },
  {
    "file": "line-11.mp3",
    "speaker": "maya",
    "text": "Perfect. I can send a technician today between 4 and 6 PM, or first thing tomorrow at 9 AM. Which works better?"
  },
  {
    "file": "line-12.mp3",
    "speaker": "caller",
    "text": "Today please — as soon as possible.",
    "action": {
      "set": "time",
      "value": "Today · 4:00–6:00 PM"
    }
  },
  {
    "file": "line-13.mp3",
    "speaker": "maya",
    "text": "Done. I've booked Ramesh for today between 4 and 6 PM for a priority AC breakdown visit. You'll get a confirmation SMS shortly. Our visit and diagnosis charge is two hundred ninety-nine rupees, adjusted against any repair. Anything else, Rohit?",
    "action": {
      "set": "tech",
      "value": "Ramesh · ETA 4–6 PM"
    }
  },
  {
    "file": "line-14.mp3",
    "speaker": "caller",
    "text": "No, that's perfect — thank you so much."
  },
  {
    "file": "line-15.mp3",
    "speaker": "maya",
    "text": "You're all set — help is on the way, stay cool. Thank you for calling Pragmatic HVAC.",
    "action": {
      "book": true
    }
  }
];
