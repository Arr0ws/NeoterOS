const prompt = require(`prompt-sync`)();
const chalk = require("chalk");
const fs = require("fs");
const { Console } = require("console");
const keypress = require("keypress");
const { fail } = require("assert");
keypress(process.stdin);
process.stdin.setRawMode(true);
process.stdin.resume();

if (!fs.existsSync("installed.flag")) {
  console.clear();
  console.log(chalk.red("UH OH"));
  console.log("LOOKS LIKE YOU CANT ACCESS THIS");
  console.log(":(");
  process.exit(); // Stop the script
}

function mainos() {
  console.clear();
  console.log(chalk.blueBright("V.1"));
  console.log(chalk.white("=========================================================================================="));
  console.log(chalk.white("                                                                                          "));
  console.log(chalk.white("                                   __(  (  )                                              "));
  console.log(chalk.white("                                __(  (    )  )__                                          "));
  console.log(chalk.white("   _--_                       _(-  ( (  )  ( (  -                                         "));
  console.log(chalk.white("  (  ( )        ___          (___(__( )__(__.---->                                        "));
  console.log(chalk.white(" (_   __)_)   ./////>__                                                   ////>           "));
  console.log(chalk.white("(__(___)     ///////>>//>_-._                   N E O T E R              ///////>         "));
  console.log(chalk.white("     .///>__/  ___.------._  >-___--_           0S                     //////////>        "));
  console.log(chalk.white("   _/    __---/  _         >_        >--___                           /           >---.._ "));
  console.log(chalk.white("__/_--_.<     __/ >_______--->-___-___----_>----__          ___------<                    "));
  console.log(chalk.white("        >--._/---_.----___                 _______----__-__/            ____--__          "));
  console.log(chalk.white("                          >--__-----__----/                ---____-----/_______ >--_____--"));
  console.log(chalk.blueBright("=========================================================================================="));
  console.log(chalk.white("||🖥️ (APP) ||  🧮CALC  📁FILE 🌐WEBSURF "));
  console.log(chalk.blueBright("=========================================================================================="));
  let user = prompt(">");

  switch (user) {
    case "CALC":
      calc();
      break;

    case "FILE":
      file();
      break;

    case "APP":
      app();
      break;

    case "SHUTDOWN":
      shutdown();
      break;
    
    case "WEBSURF":
      require(`./browser`)
      break;

    case "FLAPPYBIRD":
      flappybird();
      break;
    
    case "NC":
      command();
      break;

    default:
      break;
  }
}

mainos();

//NC (neocommand)

function command(skipClear = false) {
  if (!skipClear) {
    console.clear()
  }
  
  let currentDir = "USER";

  let nc = prompt(`/${currentDir} >`)

  if (nc.startsWith("ECHO")) {
    const message = nc.slice(5); // slice from index 5 to the end
    console.log(message);
    // Call command again to loop
    command(true);
    return; // Exit so it doesn't fall into switchreturn; // Exit so it doesn't fall into switch return; // Exit so it doesn't fall into switch
  }


  switch (nc) {
    case "FLAPPYBIRD":
      flappybird()
      break;
    
    case "CLEAR":
      console.clear()
      setTimeout(() => {
        command()
      }, 10);
      break;

    case "DONUT":
      donut();
      break;

    case "DATE":
      showDate();
      break;

    case "WEBSURF":
      browser();
      break;

    case "UD R -AF":
      destruct();
      break;

    case "AURA":
      auraboat();
      break;

    case "VER":
      console.log("NEOTER OS VERSION: 1.0");
      setTimeout(() => {
        command(true)
      }, 10);
      break;
    
    case "UD R -AF":
      destruct();
      break;

    case "LS":
      console.log("DOCUMENTS  APPS  MEDIAHUB");
      console.log("SYSTEM     NC")
      setTimeout(() => {
        command(true)
      }, 10);
      break;
    
    case "UD PET INSTALL SHOWINFO":
      showinfo();
      break;
    
    case "SHOWINFO": 
      showinfo();
      break;

    case "EXIT": 
      mainos();
      break;

    default:
      break;
  }
}

function shutdown() {
  let what = [
    "SHUTTING DOWN",
    "SHUTTING DOWN.",
    "SHUTTING DOWN..",
    "SHUTTING DOWN...",
    "SHUTTING DOWN",
    "SHUTTING DOWN.",
    "SHUTTING DOWN..",
    "SHUTTING DOWN...",
    "SHUTTING DOWN",
    "SHUTTING DOWN.",
    "SHUTTING DOWN..",
    "SHUTTING DOWN...",
    "SHUTTING DOWN",
    "SHUTTING DOWN.",
    "SHUTTING DOWN..",
    "SHUTTING DOWN...",
  ];

  for (let i = 0; i < what.length; i++) {
    setTimeout(() => {
      console.clear();
      console.log(what[i]);
      if (i === what.length - 1) {
        console.clear();
        console.log("GOODBYE!");
        process.exit();
      }
    }, i * 1000);
  }
}

//easter egg qnd random stuff
//BEWARE OF SHITTY CODE

function donut() {
  const torus = [
    `
           000000
         (00000000)
        (000(__)000)
         (00000000)
           000000
        `,
    `
            0000
          (000000)
         (000(_)00)
          (000000)
            0000
        `,
    `
             00
           (0000)
          (00(_)0)
           (0000)
             00
        `,
    `
             0o
            (00)
            (00)
            (00)
             00
        `,
    `
             00
           (0000)
          (0(_)00)
           (0000)
             00
        `,
    `
            0000
          (000000)
         (00(_)000)
          (000000)
            0000
        `,
    `
           000000
         (00000000)
        (000(__)000)
         (00000000)
           000000
        `,
    `
           000000
         (00000000)
        (000(__)000)
         (00000000)
           000000
        `,
    `
            0000
          (000000)
         (000(_)00)
          (000000)
            0000
        `,
    `
             00
           (0000)
          (00(_)0)
           (0000)
             00
        `,
    `
             0o
            (00)
            (00)
            (00)
             00
        `,
    `
             00
           (0000)
          (0(_)00)
           (0000)
             00
        `,
    `
            0000
          (000000)
         (00(_)000)
          (000000)
            0000
        `,
    `
           000000
         (00000000)
        (000(__)000)
         (00000000)
           000000
        `,
    `
           000000
         (00000000)
        (000(__)000)
         (00000000)
           000000
        `,
    `
            0000
          (000000)
         (000(_)00)
          (000000)
            0000
        `,
    `
             00
           (0000)
          (00(_)0)
           (0000)
             00
        `,
    `
             0o
            (00)
            (00)
            (00)
             00
        `,
    `
             00
           (0000)
          (0(_)00)
           (0000)
             00
        `,
    `
            0000
          (000000)
         (00(_)000)
          (000000)
            0000
        `,
    `
           000000
         (00000000)
        (000(__)000)
         (00000000)
           000000
        `,
  ];

  for (let i = 0; i < torus.length; i++) {
    setTimeout(() => {
      console.clear();
      console.log(torus[i]);

      if (i === torus.length - 1) {
        setTimeout(() => {
          command(true);
        }, 300);
      }
    }, i * 100);
  }
}

function showinfo() {
  
  function install() {
    const ins = [
      'GETTING STUFF',
      'INSTALLING SHOWINFO...',
      'UPDATE LATEST TO LATEST VERSION',
      'WAIT [|]',
      'WAIT [/]',
      'WAIT [-]',
      String.raw`WAIT [\]`,
      'WAIT [|]',
      'WAIT [/]',
      'WAIT [-]',
      String.raw`WAIT [\]`,
    ]

    for (let i = 0; i < ins.length; i++) {
      setTimeout(() => {
        console.log(ins[i])

        if (i === ins.length - 1) {
          fs.writeFileSync('installed.info', 'true');
          command(true)
        }
      }, i * 500);
    }
  }

  function show() {
    const info = [
      '         NEOTER OS', 
      '         ---------',
      '         OS: NEOTER OS 25.8',
      chalk.blue('  _      ') + 'CPU: INTEL OR AMD IDK ', 
      chalk.blue('<(o)_    ') + 'GPU: NO CLUE',
      chalk.blue(' (___)   ') + 'KERNEL: 5.10.6',
      '         NC: 4.9.1',
      '         PACKAGE MANAGER: PET',
      '', 
    ]

    for (let i = 0; i < info.length; i++) {
      console.log(info[i])
    }

    command(true)
  }

  if (!fs.existsSync('installed.info')) {
    install();
  } else {
    show();
  }
  
}

function auraboat() {
  const aura = [
    `
         O
        <|>
      <_/|__________>
    ~-~-~-~-~-~-~-~-~
    `,
    `
       __O__
         |
      <_/|__________>
    -~-~-~-~-~-~-~-~-
    `,
    `
        <O__
         |
      <_/|__________>
    ~-~-~-~-~-~-~-~-~
    `,
    `
       __O__
         |
      <_/|__________>
    -~-~-~-~-~-~-~-~-
    `,
    `
         O
        <|>
      <_/|__________>
    ~-~-~-~-~-~-~-~-~
    `,
    `
       __O__
         |
      <_/|__________>
    -~-~-~-~-~-~-~-~-
    `,
    `
       __O>
         |
      <_/|__________>
    ~-~-~-~-~-~-~-~-~
    `,
    `
       __O__
         |
      <_/|__________>
    -~-~-~-~-~-~-~-~-
    `,
    `
         O
        <|>
      <_/|__________>
    ~-~-~-~-~-~-~-~-~
    `,
    `
       __O__
         |
      <_/|__________>
    -~-~-~-~-~-~-~-~-
    `,
    `
        <O__
         |
      <_/|__________>
    ~-~-~-~-~-~-~-~-~
    `,
    `
       __O__
         |
      <_/|__________>
    -~-~-~-~-~-~-~-~-
    `,
    `
         O
        <|>
      <_/|__________>
    ~-~-~-~-~-~-~-~-~
    `,
    `
       __O__
         |
      <_/|__________>
    -~-~-~-~-~-~-~-~-
    `,
    `
       __O>
         |
      <_/|__________>
    ~-~-~-~-~-~-~-~-~
    `,
    `
       __O__
         |
      <_/|__________>
    -~-~-~-~-~-~-~-~-
    `,
    `
         O
        <|>
      <_/|__________>
    ~-~-~-~-~-~-~-~-~
    `,
  ];

  for (let i = 0; i < aura.length; i++) {
    setTimeout(() => {
      console.clear();
      console.log(aura[i]);
      if (i === aura.length - 1) {
        setTimeout(() => {
          command(true);
        }, 200);
      }
    }, i * 300);
  }
}

function showDate() {
  console.log("📅 " + new Date().toLocaleString());
  command(true);
}

function destruct() {
  if (fs.existsSync("installed.flag") || fs.existsSync("installed.info")) {
    try { fs.unlinkSync("installed.flag"); } catch {} // Deletes the install flag
    try { fs.unlinkSync("installed.info"); } catch {} // Deletes the installed.info
    setTimeout(() => {
      console.clear();
      deletion();
    }, 1000);
  } else {
    console.log("⚠️ OS PANIC");
  }

  function deletion() {
    const del = [
      "CHECKING COMPONENT...",
      "DELETING KERNEL [OK]",
      "DELETING FILES...",
      "DELETING CORE COMPONENT...",
      "DELETING OS.JS/V1 [OK]",
      "DELETING TERMINAL...",
      "DELETING PROMPT [OK]",
      "LOAD [NO]",
    ];

    for (let i = 0; i < del.length; i++) {
      setTimeout(() => {
        console.log(del[i]);

        if (i === del.length - 1) {
          setTimeout(() => {
            const originalString = "ERROR";
            const repeatedString = originalString.repeat(200);
            console.log(chalk.red(repeatedString));
            process.exit()
          }, i * 300);
        }
      }, i * 100);
    }
  }
}

function app() {
  console.clear();
  console.log(chalk.blueBright("V.1"));
  console.log(chalk.white("=========================================================================================="));
  console.log(chalk.white("                                                                                          "));
  console.log(chalk.white("___________________________        __(  (  )                                              "));
  console.log(chalk.white("APP                       |     __(  (    )  )__                                          "));
  console.log(chalk.white("==========================|   _(-  ( (  )  ((  -                                         "));
  console.log(chalk.white("                          |  (___(__( )__(__.---->                                        "));
  console.log(chalk.white("  CALC   FILE   WEBSURF   |                                               ////>           "));
  console.log(chalk.white("                          |._                   N E O T E R              ///////>         "));
  console.log(chalk.white("                          |  >-___--_           0S                     //////////>        "));
  console.log(chalk.white("                          |>_        >--___                           /           >---.._ "));
  console.log(chalk.white("                          |-->-___-___----_>----__          ___------<                    "));
  console.log(chalk.white("                          |                _______----__-__/            ____--__          "));
  console.log(chalk.white("                          |--__-----__----/                ---____-----/_______ >--_____--"));
  console.log(chalk.blueBright("=========================================================================================="));
  console.log(chalk.white("||🖥️ (APP) ||  🧮CALC  📁FILE 🌐WEBSURF "));
  console.log(chalk.blueBright("=========================================================================================="));
  let user = prompt(">");
  if (user === "X") {
    mainos()
  }
}

function calc() {
  const getvalues = () => {
    const num1 = +prompt("ENTER THE FIRST NUMBER : >");
    const num2 = +prompt("ENTER THE SECOND NUMBER : >");

    return { num1, num2 };
  };

  function calculator() {
    console.clear();
    console.log(chalk.white("=========================================================================================="));
    console.log(chalk.white("=========================================================================================="));
    console.log(chalk.green("[x]  [( C A L C U L A T O R )]"));
    console.log(chalk.white("=========================================================================================="));
    console.log(chalk.white("=========================================================================================="));
    console.log(chalk.white(""));
    console.log(chalk.white(""));
    console.log(chalk.white("  _________   _________   _________"));
    console.log(chalk.white("  | A D D |   | M U L |   | M I N |"));
    console.log(chalk.white("  |_______|   |_______|   |_______|"));
    console.log(chalk.white(""));
    console.log(chalk.white(""));
    console.log(chalk.white("=========================================================================================="));
    let user = prompt(">");

    if (user === "ADD") {
      add();
    } else if (user === "MIN") {
      min();
    } else if (user === "MUL") {
      mul();
    } else if (user === "X") {
      mainos();
    } else {
      console.log("UKNOWN COMMAND");

      setTimeout(() => {
        calculator();
      }, 3000);
    }

    function add() {
      const { num1, num2 } = getvalues();
      console.log("= " + (num1 + num2));

      setTimeout(() => {
        calculator();
      }, 3000);
    }

    function min() {
      const { num1, num2 } = getvalues();
      console.log("= " + (num1 - num2));

      setTimeout(() => {
        calculator();
      }, 3000);
    }

    function mul() {
      const { num1, num2 } = getvalues();
      console.log("= " + num1 * num2);

      setTimeout(() => {
        calculator();
      }, 3000);
    }
  }

  calculator();
}

function flappybird() {
  let score = 0;

  const crash = () => {
    console.clear();
    console.log("GAMEOVER (X)>, SCORE: " + score);
    setTimeout(() => {
      flappybird();
    }, 6000);
  };

  menu();

  function menu() {
    console.clear();
    console.log("[X]======================================");
    console.log("=========================================");
    console.log("FLAPPY BIRD (SHIT VERSION)");
    console.log("=========================================");
    console.log("=========================================");
    console.log("");
    console.log("");
    console.log("");
    console.log("");
    console.log("   <WOULD YOU LIKE TO PLAY THIS GAME?>");
    console.log("    [[[YES]]]                [[[NO]]]");
    console.log("");
    console.log("");
    console.log("");
    let user = prompt(">");

    if (user === "YES") {
      screen1();
    } else if (user === "NO") {
      console.log("D:");
      setTimeout(() => {
        mainos();
      }, 700);
    } else {
      console.log("UKNOWN COMMAND");
      setTimeout(() => {
        menu();
      }, 700);
    }

    function screen1() {
      console.clear();
      console.log("              |   |            ");
      console.log("              |   |            ");
      console.log("              |   |            ");
      console.log("              =====            ");
      console.log("                               ");
      console.log("                               ");
      console.log("    (')>                       ");
      console.log("              =====            ");
      console.log("              |   |            ");
      console.log("              |   |            ");
      console.log("              |   |            ");
      console.log("______________|___|____________");
      let done = false;

      const timeout = setTimeout(() => {
        if (!done) {
          crash();
        }
      }, 600);

      process.stdin.once("keypress", (ch, key) => {
        if (key && key.name === "return") {
          done = true;
          clearTimeout(timeout);
          score++;
          screen2();
        } else {
          console.log("ERROR!");
        }
      });
    }

    function screen2() {
      console.clear();
      console.log("|             |   |            ");
      console.log("|             |   |            ");
      console.log("|             =====            ");
      console.log("=                              ");
      console.log("                               ");
      console.log("                               ");
      console.log("     (')>     =====            ");
      console.log("=             |   |            ");
      console.log("|             |   |            ");
      console.log("|             |   |            ");
      console.log("|             |   |            ");
      console.log("|_____________|___|____________");
      let done = false;

      const timeout = setTimeout(() => {
        if (!done) {
          crash();
        }
      }, 600);

      process.stdin.once("keypress", (ch, key) => {
        if (key && key.name === "return") {
          done = true;
          clearTimeout(timeout);
          score++;
          screen3();
        } else {
          console.log("ERROR!");
        }
      });
    }

    function screen3() {
      console.clear();
      console.log("|             |   |            ");
      console.log("|             |   |            ");
      console.log("=             |   |            ");
      console.log("              =====            ");
      console.log("                               ");
      console.log("                               ");
      console.log("=        (')>                  ");
      console.log("|                              ");
      console.log("|                              ");
      console.log("|             =====            ");
      console.log("|             |   |            ");
      console.log("|_____________|___|____________");
      let done = false;

      const timeout = setTimeout(() => {
        if (!done) {
          crash();
        }
      }, 600);

      process.stdin.once("keypress", (ch, key) => {
        if (key && key.name === "return") {
          done = true;
          clearTimeout(timeout);
          score++;
          screen4();
        } else {
          console.log("ERROR!");
        }
      });
    }

    function screen4() {
      console.clear();
      console.log("|             |   |            ");
      console.log("|             |   |            ");
      console.log("|             |   |            ");
      console.log("=             |   |            ");
      console.log("              =====            ");
      console.log("                               ");
      console.log("                               ");
      console.log("              =====            ");
      console.log("        (')>  |   |            ");
      console.log("=             |   |            ");
      console.log("|             |   |            ");
      console.log("|_____________|___|____________");
      let done = false;

      const timeout = setTimeout(() => {
        if (!done) {
          crash();
        }
      }, 600);

      process.stdin.once("keypress", (ch, key) => {
        if (key && key.name === "return") {
          done = true;
          clearTimeout(timeout);
          score++;
          setTimeout(() => {
            console.clear();
            console.log("YOU WIN! SCORE: " + score);
            setTimeout(() => {
              flappybird();
            }, 3000);
          }, 1000);
        } else {
          console.log("ERROR!");
        }
      });
    }
  }
}

function file() {
  console.clear();
  console.log(chalk.white("=========================================================================================="));
  console.log(chalk.white("=========================================================================================="));
  console.log(chalk.green("[x]  [( FILE )]"));
  console.log(chalk.white("=========================================================================================="));
  console.log(chalk.white("=========================================================================================="));
  console.log(chalk.white("||<HOME>           |<RECENTLY OPENED/MADE/DOWNLOAD>         "));
  console.log(chalk.white("||                 |                                        "));
  console.log(chalk.white(">| 🖥️  SYSTEM       | 🎵 WOULD?_ALICEINCHAIN.MP3             "));
  console.log(chalk.white(">| 📁 DOCUMENT     | 📝 PASSWORD.TXT                        "));
  console.log(chalk.white(">| 📁 APPS         |                                        "));
  console.log(chalk.white(">| 🖼️  MEDIA HUB    |                                        "));
  console.log(chalk.white("||                 |                                        "));
  console.log(chalk.white("=========================================================================================="));
  let user = prompt(">");

  if (user === "DOCUMENT") {
    document();
  } else if (user === "DESKTOP") {
    desktop();
  } else if (user === "MEDIA HUB") {
    mediahub();
  } else if (user === "SYSTEM") {
    system();
  } else if (user === "APPS") {
    apps()
  }else if (user === "X") {
    mainos()
  }

  function document() {
    console.clear();
    console.log(chalk.white("=========================================================================================="));
    console.log(chalk.white("=========================================================================================="));
    console.log(chalk.green("[x]  [( FILE )] DOCUMENT"));
    console.log(chalk.white("=========================================================================================="));
    console.log(chalk.white("=========================================================================================="));
    console.log(chalk.white("||<HOME>           |"));
    console.log(chalk.white("||                 |                                        "));
    console.log(chalk.white(">| 🖥️ SYSTEM       |              "));
    console.log(chalk.white(">| 📁 DOCUMENT     |                               E M P T Y                              "));
    console.log(chalk.white(">| 📁 APPS         |                                        "));
    console.log(chalk.white(">| 🖼️ MEDIA HUB    |                                        "));
    console.log(chalk.white("||                 |                                        "));
    console.log(chalk.white("=========================================================================================="));
    let user = prompt(">")

    if (user === "EXIT") {
      file()
    } else if (user === "X") {
      mainos()
    }
  }

  function desktop() {
    console.clear();
    console.log(chalk.white("=========================================================================================="));
    console.log(chalk.white("=========================================================================================="));
    console.log(chalk.green("[x]  [( FILE )] DESKTOP"));
    console.log(chalk.white("=========================================================================================="));
    console.log(chalk.white("=========================================================================================="));
    console.log(chalk.white("||<HOME>           |                                        "));
    console.log(chalk.white("||                 |                                        "));
    console.log(chalk.white(">| 🖥️ SYSTEM       | 🧮 CALCULATOR (CALC)                   "));
    console.log(chalk.white(">| 📁 DOCUMENT     | 🌐 WEBSURF "));
    console.log(chalk.white(">| 📁 APPS         |                           "));
    console.log(chalk.white(">| 🖼️ MEDIA HUB    |                                        "));
    console.log(chalk.white("||                 |                                        "));
    console.log(chalk.white("=========================================================================================="));
    let user = prompt(">")

    if (user === "EXIT") {
      file()
    } else if (user === "X") {
      mainos()
    }
  }

  function mediahub() {
    console.clear();
    console.log(chalk.white("=========================================================================================="));
    console.log(chalk.white("=========================================================================================="));
    console.log(chalk.green("[x]  [( FILE )] MEDIAHUB"));
    console.log(chalk.white("=========================================================================================="));
    console.log(chalk.white("=========================================================================================="));
    console.log(chalk.white("||<HOME>           |                                        "));
    console.log(chalk.white("||                 |                                        "));
    console.log(chalk.white(">| 🖥️ SYSTEM        | 🎵 WOULD?_ALICEINCHAIN.MP3                    "));
    console.log(chalk.white(">| 📁 DOCUMENT     | 📝 PASSWORD.TXT    "));
    console.log(chalk.white(">| 📁 APPS         | 📸 ME.PNG"));
    console.log(chalk.white(">| 🖼️ MEDIA HUB    |                                        "));
    console.log(chalk.white("||                 |                                        "));
    console.log(chalk.white("=========================================================================================="));
    let user = prompt(">")

    if (user === "EXIT") {
      file()
    } else if (user === "X") {
      mainos()
    }
  }

  function system() {
    console.clear();
    console.log(chalk.white("=========================================================================================="));
    console.log(chalk.white("=========================================================================================="));
    console.log(chalk.green("[x]  [( FILE )] SYSTEM"));
    console.log(chalk.white("=========================================================================================="));
    console.log(chalk.white("=========================================================================================="));
    console.log(chalk.white("||<HOME>           |                                        "));
    console.log(chalk.white("||                 |                                        "));
    console.log(chalk.white(">| 🖥️ SYSTEM       | 💾 KERNEL                   "));
    console.log(chalk.white(">| 📁 DOCUMENT     | 📝 DEVNOTE.TXT    "));
    console.log(chalk.white(">| 📁 APPS         | 📁 IMPORTANT "));
    console.log(chalk.white(">| 🖼️ MEDIA HUB    | 📁 PROGRAM   "));
    console.log(chalk.white("||                 |                                        "));
    console.log(chalk.white("=========================================================================================="));
    let user = prompt(">")

    if (user === "EXIT") {
      file()
    } else if (user === "X") {
      mainos()
    }
  }

  function apps() {
    console.clear();
    console.log(chalk.white("=========================================================================================="));
    console.log(chalk.white("=========================================================================================="));
    console.log(chalk.green("[x]  [( FILE )] APPS"));
    console.log(chalk.white("=========================================================================================="));
    console.log(chalk.white("=========================================================================================="));
    console.log(chalk.white("||<HOME>           |                                        "));
    console.log(chalk.white("||                 |                                        "));
    console.log(chalk.white(">| 🖥️ SYSTEM       | 🐦 FLAPPYBIRDSHIT"));
    console.log(chalk.white(">| 📁 DOCUMENT     | 🧮 CALCULATOR (CALC)  "));
    console.log(chalk.white(">| 📁 APPS         | 🌐 WEBSURF "));
    console.log(chalk.white(">| 🖼️ MEDIA HUB    | 🖵 NC (NEOCOMMAND)"));
    console.log(chalk.white("||                 |                                        "));
    console.log(chalk.white("=========================================================================================="));
    let user = prompt(">")

    if (user === "EXIT") {
      file()
    } else if (user === "X") {
      mainos()
    }
  }
}
//wow
