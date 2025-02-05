import CommandLine from './classes/CommandLine.js';
import { pool, connectToDb } from './db/Connection.js';
import Queries from './classes/Query.js';

// connect to postgreSql database.
await connectToDb();

// Tests
//await Queries.test();

//const test = await Queries.getAllDepartments();
//console.log(test);

// const test1 = await CommandLine.chooseDepartment(Queries.getAllDepartments());
// console.log(`test1 = ${test1}`);

// const test2 = CommandLine.chooseRole(Queries.getAllRoles());
// console.log(`test2 = ${test2}`);

// const test3 = CommandLine.chooseEmployee(Queries.getAllEmployees());
// console.log(`test3 = ${test3}`);

// const test4 = CommandLine.chooseManager(Queries.getAllEmployees());
// console.log(`test4 = ${test4}`);

//const test2 = await CommandLine.chooseDepartment(Queries.getAllDepartments());

// call the command line interface to start the application.
CommandLine.chooseAction();
