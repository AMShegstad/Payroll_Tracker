import CommandLine from './classes/CommandLine.js';
import { pool, connectToDb } from './db/Connection.js';
import Queries from './classes/Query.js';

// connect to postgreSql database.
await connectToDb();

// Tests
//await Queries.test();

//const test = await Queries.getAllDepartments();
//console.log(test);

// call the command line interface to start the application.
//const testNumber = await CommandLine.chooseDepartment(Queries.getAllDepartments());
//console.log(testNumber);
CommandLine.chooseAction();
