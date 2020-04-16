const { Sequelize } = require('sequelize');
var sqlite3 = require('sqlite3').verbose(); 
const { DataTypes } = require("sequelize"); 

//create the connection with the database
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'C:\\Users\\ankitkaswan\\Desktop\\NodeJsProject\\config\\ProjectDatabase'
  });
  

sequelize
.authenticate()
.then(function(err) {
  console.log('Connection has been established successfully.');
}, function (err) { 
  console.log('Unable to connect to the database:', err);
});

var Task = sequelize.define('Task', {
    Id: {type: DataTypes.INTEGER, autoIncrement: true, },
    title: {type: DataTypes.STRING,primaryKey: true,allowNull: false},
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


// Task.hasMany(Notes, {foreignKey: 'title', sourceKey: 'title'});
// Notes.belongsTo(Task, {foreignKey: 'title', targetKey: 'title'});

sequelize.sync().then(() => console.log('database synchronised')).catch(console.error)
   
Task.sync({alter: true}).then(() => {
    console.log('New Task table created');
    }
    )
Notes.sync({alter: true}).then(() => {
    console.log('New Notes table created');
    }
    )

//Use this table to drop the table
// Task.drop().then(() => {
//     console.log('table deleted');
// }).finally(() => { 
// });



exports = module.exports = {
  Task, Notes
}