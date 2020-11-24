#!/usr/bin/ env node}
const shelljs = require("shelljs");
const chalk = require("chalk");
const figlet = require("figlet");
const inquirer = require("inquirer");

const inciar = () => {
  console.log(chalk.green("Creardor de ficheros con CLI"));
};

const preguntar = () => {
    const preguntas = [
        {
            name : "FICHERO",
            type : "input",
            message : "Como se va a llamar tu fichero?  (sin la extencion)"
        },
        {
            name : "EXTENCION",
            type : "list",
            message : "que extencion tiene tu fichero",
            choices : [".rb", ".js", ".ts"],
            filter : function(val) {
                return val.split(".")[1] 
            }
        }
    ]
    return inquirer.prompt(preguntas)

}

const crearFichero = (nombre, extencion) => {   
    const path = `${process.cwd()}/${nombre}.${extencion}`;
    shelljs.touch(path)

    return path
}
const ejecutar = async () => {
  // Mostar la informacion de la libreria en la cabecera
  inciar();
  // Preguntas necesarias para crear el fichero, el nombre y la extencion
  const respuestas = await preguntar()
  const {FICHERO, EXTENCION} = respuestas
  // Creamos el fichero
  const paht = crearFichero(FICHERO, EXTENCION)
  // Mensaje de creacion de fichero

};
ejecutar();
