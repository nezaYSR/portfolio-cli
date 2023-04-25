import { createSpinner } from "nanospinner";
import { workListQuest } from "./tasks.js";
import { about, skill, portfolio } from "./descs.js";

let workSelected;

export const todoHandler = async (todo, sleepAwhile) => {
  const spinner = createSpinner("Loading ...").start();

  await sleepAwhile();
  switch (todo) {
    case "About me":
      spinner.success();
      console.log(about);
      break;

    case "My work":
      spinner.success({ text: "Proceed.." });
      workSelected = await workListQuest();
      await workSelectHandler(workSelected, sleepAwhile);
      break;

    case "My skill":
      spinner.success();
      console.log(skill);
      break;

    default:
      spinner.success();
      console.log("Bye bye see ya...");
      break;
  }
};

export const workSelectHandler = async (workSelected, sleepAwhile) => {
  const spinner = createSpinner("Loading ...").start();
  await sleepAwhile();

  switch (workSelected) {
    case "🤖 lms-tech v0.0.2":
      spinner.success({ text: "Data fetched.." });
      console.log(`

      Title : ${portfolio[0].title}
      Story : ${portfolio[0].desc}
      Explanation : ${portfolio[0].explanation}

      `);
      break;

    case "👽 lms-uiux v3.0.1":
      spinner.success({ text: "Data fetched.." });
      console.log(`

        Title : ${portfolio[1].title}
        Story : ${portfolio[1].desc}
        Explanation : ${portfolio[1].explanation}

        Mobile Prototype Link : ${portfolio[1].link[0]}
        Desktop Prototype Link : ${portfolio[1].link[1]}

      `);
      break;

    default:
      break;
  }
};
