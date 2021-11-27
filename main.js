
//Objeto Literal
const natalia = 
{
    name:'Natalia',
    edad:20,
    cursosAprobados:
    [
        'Curso definitivo de HTML y CSS',
        'Curso Practico de HTML y CSS'
    ],
    // Metodo
    aprobarCurso(nuevoCurso) {
        this.cursosAprobados.push(nuevoCurso);
    }
};

// Prototipo

function Student(name,age,cursosAprobados)
{
    this.name= name;
    this.age=age;
    this.cursosAprobados=cursosAprobados;

    // this.aprobarCurso= function (nuevoCurso) {
    //     this.cursosAprobados.push(nuevoCurso);
    // }

};

Student.prototype.aprobarCurso = function (nuevoCurso) {
    this.cursosAprobados.push(nuevoCurso);
}

const juanita = new Student('Juanita Alejandra',15,['Curso de introduccion a los videojuegos','creacion de personajes'])
