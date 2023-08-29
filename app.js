// global scope

const coffee = require('./coffee');
const {namaDepan,namaBelakang} = require('./user');
const Tiger = require('./tugas-satu/Tiger')
const Wolf = require('./tugas-satu/Wolf')
const moment = require('moment');

/* Test Run Console.log*/
console.log(coffee);
console.log(namaBelakang);
console.log(`Halo ${namaDepan}`);

/**
 * 
 *  Tugas
 */

const macan = new Tiger()
macan.growl();

const serigala = new Wolf()
serigala.howl();

const fight = () => {
    if (macan !== serigala){
        return `Macan VS Serigala`;
    }   
}

console.log(fight());

/** npm momemt */
const date = moment().format("MMM Do YY");
console.log(date);