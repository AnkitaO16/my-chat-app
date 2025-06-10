// simpleAI.ts
export function getAIResponse(msg: string): string {
  if (msg.toLowerCase().includes('hello')) return "Hi there!";
  if (msg.toLowerCase().includes('bye')) return "Goodbye!";
  return `I'm not smart yet, but I heard you say: ${msg}`;
}
