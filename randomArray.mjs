export default function randomArray(size,max) {
  return Array.from({length: size}, () => Math.floor(Math.random() * max));
}