const { Sequelize } = require('sequelize');
var sqlite3 = require('sqlite3').verbose(); 
const { DataTypes } = require("sequelize"); 

//create the connection with the database
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'C:\\Users\\ankitkaswan\\Desktop\\NodeJsProject\\config\\ProjectDatabase'
  });
  
//authenticate the connection
// sequelize
// .authenticate()
// .then(function(err) {
//   console.log('Connection has been established successfully.');
// }, function (err) { 
//   console.log('Unable to connect to the database:', err);
// });

var Task = sequelize.define('Task', {
    title: {type: DataTypes.STRING,primaryKey: true,},
    description: {type: DataTypes.STRING, allowNull: true},
    due_date: {type: DataTypes.DATEONLY, allowNull: false},
    status: {type: DataTypes.STRING, defaultValue: 'incomplete', allowNull: true},
    priority: {type: DataTypes.STRING, allowNull: true, defaultValue: 'medium'}},
    {timestamps : false});

var Notes = sequelize.define('Notes', {
    Id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    Note: {type: DataTypes.STRING, allowNull: false},
    title: {type: DataTypes.STRING, allowNull: false}},
    {timestamps : false});

//We would use this functions to create foreign and primary keys inside the table
// Task.hasMany(Notes, {foreignKey: 'title', sourceKey: 'title'});
// Notes.belongsTo(Task, {foreignKey: 'title', targetKey: 'title'});


// We would use this code if table needs to be altered    
// ---Task.sync({alter: true}).then(() => {
//     console.log('New table created');
//     }
//     )---


// We would use this function to seed sample values
// ---Task.create({
//     title: 'Game',
//     description: 'play football',
//     due_date: 12/12/2020,
//     status: 'incomplete',
//     priority: 'high'
//   })
//   .then(newTask => {
//     console.log(`New task ${newTask.title}, with date ${newTask.due_date} has been created.`);
//   });---


// Use this function to get single row result
// ---var task = sequelize.Task;
// task.findOne({ where: { title: 'Game' } }).then(note => {
//     console.log(note.get({ plain: true }));
// }).finally(() => {
//     sequelize.close();
// });---


sequelize.sync().then(() => console.log('database synchronised')).catch(console.error)

// It would help update an existing row data
// ---async function updateRow() {
//     let id = await Task.update(
//         { due_date: '2020-12-12' },
//         { where: { title: 'Game' } });
// }
// updateRow();---


//This function would help count the no of rows in table
// ---async function countRows() {
//     let n = await Task.count();
//     console.log(`There are ${n} rows`);  
// }
// countRows();---


//Use this table to drop the table
// Task.drop().then(() => {
//     console.log('table deleted');
// }).finally(() => { 
// });



exports = module.exports = {
  Task, Notes
}