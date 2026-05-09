import { get } from 'node:http';
import readline from 'node:readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



rl.question(`github-activity`, async (username) => {
  try {
    const response = await fetch(`https://api.github.com/users/${username.trim()}/events`);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`)
    }
    const result = await response.json()
  }
  catch (error) {
    console.error(error.message);
  }
})