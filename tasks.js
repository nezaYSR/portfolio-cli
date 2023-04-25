import inquirer from "inquirer";

export const usernameQuest = async () => {
  let username;

  const answer = await inquirer.prompt({
    name: "user_name",
    type: "input",
    message: `Type your username ... \n`,
    default() {
      return "username";
    },
  });

  username = answer.user_name;
  return username;
};

export const todoQuest = async () => {
  let todo;

  const answer = await inquirer.prompt({
    name: "todo",
    type: "list",
    message: `What do you wanna see? \n`,
    choices: ["About me", "My work", "My skill", "Nevermind, Bye.."],
    default() {
      return "please select one";
    },
  });

  todo = answer.todo;
  return todo;
};

export const workListQuest = async () => {
  let workSelected;

  const answer = await inquirer.prompt({
    name: "work_list",
    type: "list",
    message: `Select one of my work to see it's detail \n`,
    choices: ["🤖 lms-tech v0.0.2", "👽 lms-uiux v3.0.1"],
    default() {
      return "worklist";
    },
  });
  workSelected = answer.work_list;
  return workSelected;
};
