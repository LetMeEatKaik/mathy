function getCurrentTime() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  const amPm = hours < 12 ? 'AM' : 'PM';
  hours = hours % 12 || 12; // Convert to 12-hour format
  minutes = minutes < 10 ? '0' + minutes : minutes; // Add leading zero if minutes < 10
  // return `${hours}:${minutes} ${amPm}`;
  return `12:00pm`;

}
let timeNow = getCurrentTime();

export const introMessages =
  [{ author: "You", text: "Hello, Mathy. How can you help me?", time: "12:00pm", math: false},
  { author: "Agent", text: "Input your algebra problems and I'll help you solve them :)", time: timeNow, math: false },
  { author: "You", text: "sqrt(60 + 4)", time: timeNow, math: false },
  { author: "Agent", text: "The answer is 8.", time: timeNow, math: false },
  { author: "You", text: "simplify 3x^2 + 4x^2", time: timeNow, math: false },
  { author: "Agent", text: "7x^2", time: timeNow, math: true },
  { author: "Agent", text: "Please input your algebra problems", time: timeNow, math: false }]