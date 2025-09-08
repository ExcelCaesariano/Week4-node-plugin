import chalk from 'chalk';
import cowsay from 'cowsay';
import figlet from 'figlet';

import boxen from 'boxen';
import gradient from 'gradient-string';
import dayjs from 'dayjs';

const name = process.argv[2] || "Excel Caesariano";
const nim = process.argv[3] || "F1D022118";

const boxOptions = {
    padding: 1,
    margin: 1,
    borderStyle: 'double',
    borderColor: 'blue',
    title: 'Tugas Week 4',
    titleAlignment: 'center',
    textAlignment: 'center',
};

const run = async () => {
    try {
        const currTime = dayjs().format('dddd, DD MMMM YYYY [pukul] HH:mm:ss');
        console.log(chalk.dim.italic(currTime)); 

        const data = `
${chalk.green.bold('Full Name:')}    ${chalk.yellow(name)}
${chalk.green.bold('Student ID:')}   ${chalk.yellow(nim)}
        `;
        console.log(boxen(data, boxOptions));

        const figletPromise = () => new Promise((resolve, reject) => {
            figlet.text(name, { font: 'Big' }, (err, data) => {
                if (err) return reject(err);
                
                console.log(gradient.mind(data)); 
                resolve();
            });
        });

        await figletPromise();
        
        const quotes = "Kalau orang lain bisa, kenapa harus saya?";
        const character = cowsay.say({
            text: quotes,
            f: "mona-lisa", 
            e: "oO",
            T: "U "
        });
        console.log(gradient.mind(character)); 

    } catch (error) {
        console.error(chalk.red.bgBlack('Error:'), error);
    }
};

run();