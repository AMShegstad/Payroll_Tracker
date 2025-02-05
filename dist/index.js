import CommandLine from './classes/CommandLine.js';
import { connectToDb } from './db/Connection.js';
// connect to postgreSql database.
await connectToDb();
console.log(" ___                             _    _       _____                   _                  ");
console.log("(  _`\\                          (_ ) (_ )    (_   _)                 ( )                 ");
console.log("| |_) ) _ _   _   _  _ __   _    | |  | |      | | _ __   _ _    ___ | |/')    __   _ __ ");
console.log("| ,__/ /'_` )( ) ( )( '__)/'_`\\  | |  | |      | |( '__)/'_` ) /'___)| , <   /'__`\\( '__)");
console.log("| |   ( (_| || (_) || |  ( (_) ) | |  | |      | || |  ( (_| |( (___ | |\\`\\ (  ___/| |   ");
console.log("(_)   `\\__,_)`\\__, |(_)  `\\___/'(___)(___)     (_)(_)  `\\__,_)`\\____)(_) (_)`\\____)(_)   ");
console.log("             ( )_| |                                                                     ");
console.log("             `\\___/'                                                                     ");
console.log();
CommandLine.chooseAction();
