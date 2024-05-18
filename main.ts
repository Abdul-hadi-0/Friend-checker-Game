import inquirer from "inquirer";
import chalk from "chalk";


let isFriend = await inquirer.prompt ([{
    name: "name",
    type: "string",
    message: "Enter your friend name",
}])

if (isFriend.name === "2" || isFriend.name === "1") {
    console.log(chalk.blue(`${isFriend.name} is your friend`));
}
else {
console.log(chalk.red(`${isFriend.name} is not your friend`));
}
