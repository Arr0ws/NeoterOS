const chalk = require('chalk');
const fs = require('fs');
const prompt = require(`prompt-sync`)();


let installing = false;
//This is the only way to make it not double printing the install array

function install() {
    console.clear();
    console.log(chalk.blueBright("WELCOME TO NEOTER OS"))
    console.log("--------------------------------------------------------------------------------------------")
    console.log("========================      ")
    console.log("|TYPE YES TO INSTALL IT|      ")
    console.log("========================      ")
    console.log("")
    console.log("")
    console.log("")
    console.log("")
    let user = prompt(">")

    if (user === "YES") {
        console.clear();
        installOS()
    } else if (user === "MANUAL") {
        manual()
    }

    function manual() {
        console.clear();
        console.log(chalk.blueBright("WELCOME TO NEOTER OS"))
        console.log("------------------------------------------------------------------------------------------------------")
        console.log("========================      ")
        console.log("|MANUAL                |      ")
        console.log("========================      ")
        console.log("")
        console.log("(INSERT SOMETHING HERE)")
        console.log("")
        console.log("")
        let user = prompt(">")
        
        if (user === "X") {
            console.clear();
            install()
        }
    }
}

function installOS() {
    if (installing) return; // Skip if already running
    installing = true;
    const install = [
        "CHECKING COMPONENT...",
        "INSTALLING KERNEL...",
        "INSTALLING FILES...",
        "INSTALLING CORE COMPONENT...",
        "ADDED OS.JS/V1...",
        "ADDED TERMINAL...",
        "SETTING PROMPT...",
        "LOAD...",
    ]

    let load = 1000

    for (let i = 0; i < install.length; i++) {
        setTimeout(() => {
            console.log(chalk.green(install[i]))
            if (i === install.length - 1) {
                fs.writeFileSync('installed.flag', 'true');
                bootOS(); //boot right after install
            }
        }, i * load); 
    }
}

function bootOS() {
    console.clear()
    const boot = [
        chalk.blue(("LOADING...")),
        ("10%"),
        ("20%"),
        ("30%"),
        ("40%"),
        ("50%"),
        ("60%"),
        ("70%"),
        ("80%"),
        ("90%"),
        ("100%"),
        chalk.cyanBright(("WELCOME!")),
    ]

    let delay = 1000;

    for (let i = 0; i < boot.length; i++) {
        setTimeout(() => {
            console.clear()
            console.log(boot[i])
        }, i * delay);
    }

    setTimeout(() => {
        require(`./os`)
    }, boot.length * delay);
}

// Main startup check
if (!fs.existsSync('installed.flag')) {
    install();
} else {
    bootOS();
}

