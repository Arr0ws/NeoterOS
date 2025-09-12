const prompt =
require(`prompt-sync`)();
const chalk = require('chalk');

function browser() {
    console.clear()
    console.log(chalk.white("=========================================================================================="))
    console.log(chalk.blueBright("V.1"))
    console.log(chalk.white("=========================================================================================="))
    console.log(chalk.white(""))
    console.log(chalk.white("          ~~~~~~~~~~~~~~"))
    console.log(chalk.blue.bold("          W E B S U R F"))    
    console.log(chalk.white("                                                                     ___"))
    console.log(chalk.white("          VIRAL                                                      | |"))
    console.log(chalk.white("          - A KID GOT SUED BY NINTENDO FOR HAVING <MARIO>           ========"))  
    console.log(chalk.white("            AS ITS LAST NAME                                       =========="))
    console.log(chalk.white("          - ANOTHER BIG ASS CORRUPTION IN INDONESIA               ============"))
    console.log(chalk.white("  o/        UP TO RP 500 TRILLION                                 | ____ ====|"))
    console.log(chalk.white(" <|       - TOP 5 RECIPES OF THE MONTH                            | |  | |  ||"))
    console.log(chalk.white(" /|                                                               | |  | ====|"))                                   
    console.log(chalk.white("=========================================================================================="))
    console.log(chalk.white("------------------------------------------------------------------------------------------"))
          let user = prompt(">")
    
    switch (user) {
        case "BURJ KHALIFA COST?":
            burjkhalifa()
            break;

        case "YOUTUBE.COM":
            youtube()
            break;

        case "EXIT":
            delete require.cache[require.resolve('./os')]; // remove from cache
            require('./os')
            break;
  
        default:
            break;
    }
}

browser()

function burjkhalifa() {
    
    console.clear()
    console.log(chalk.white("=========================================================================================="))
    console.log(chalk.blueBright("WEBSURF"))
    console.log(chalk.white("=========================================================================================="))
    console.log(chalk.white("          "))
    console.log(chalk.white("          ~~~~~~~~~~~~~~"))
    console.log(chalk.blue.bold("          W E B S U R F"))    
    console.log(chalk.white(""))
    console.log(chalk.white(""))
    console.log(chalk.white("          <The Burj Khalifa's construction cost was approximately $1.5 billion.> "))  
    console.log(chalk.white("          <The project took roughly six years, from 2004 to 2010, to complete. >"))
    console.log(chalk.white(""))
    console.log(chalk.white("  o/"))
    console.log(chalk.white(" <|"))
    console.log(chalk.white(" /|"))
    console.log(chalk.white("=========================================================================================="))
    console.log(chalk.white("------------------------------------------------------------------------------------------"))
    let user = prompt(">")

    if (user === "EXIT") {
        browser()
    } 
}

function youtube() {
    
    console.clear()
    console.log(chalk.white("=========================================================================================="))
    console.log(chalk.blueBright("WEBSURF"))
    console.log(chalk.white("=========================================================================================="))
    console.log("")
    console.log(chalk.redBright("YOUTUBE ( > )"))
    console.log(chalk.white("                  _____________________________ "))
    console.log(chalk.white("HOME              |>__________________________|"))
    console.log(chalk.white("SHORTS            _____________      _____________     _____________"))
    console.log(chalk.white("SUBSCRIPTION      |           |      |           |     |           |"))
    console.log(chalk.white("------------      |     💩    |      |   👦🔪😵  |     | SORRY...  |"))
    console.log(chalk.white("YOU >             |VEVO_______|      |___________|     |___________|"))
    console.log(chalk.white("HISTORY           EW - S.H.I.T       I MAKE KIDS       MY APOLOGIES"))
    console.log(chalk.white("PLAYLIST          (OFFICIAL VID)     FIGHT TO DEATH"))
    console.log(chalk.white("YOUR VIDEO        EWGROUP(✓)         MR BEAST(✓)       GUY1000 "))
    console.log(chalk.white("=========================================================================================="))
    console.log(chalk.white("------------------------------------------------------------------------------------------"))
    let user = prompt(">")

    if (user === "EXIT") {
        browser()
    } 
}

