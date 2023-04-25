import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import { todoQuest } from "./tasks.js";
import { todoHandler } from "./handlers.js";

let username;
let todoSelected;

const sleepAwhile = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

export const home = async () => {
  const title = await chalkAnimation.glitch(`
    Hello Friend! Welcome to nezaysrcli
    `);

  await sleepAwhile();
  title.stop();

  console.log(`
      ${chalk.bgBlueBright("  Quick Tips  ")}

      ${chalk.bgBlueBright(
        `  You can access this from bash/cmd/powershell terminal  `
      )}
      ${chalk.bgRed(`  Press ctrl + C for quit  `)}
      ${chalk.bgBlue(
        `  You can repeat "npx nezaysrcli" simply by type ↑ on your keyboard  `
      )}

      `);
};

console.clear();
await home();
todoSelected = await todoQuest();
await todoHandler(todoSelected, sleepAwhile);
