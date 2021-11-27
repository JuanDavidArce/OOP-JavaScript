
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

const juanita = new Student('Juanita Alejandra',15,['Curso de introduccion a los videojuegos','creacion de personajes']);


//Prototipos con la sintaxis de clases

class Student2 
{   
    // Es como el init en python
    constructor ({name,age,cursosAprobados,})
    {
        this.name= name;
        this.age=age;
        this.cursosAprobados=cursosAprobados;
    }

    aprobarCurso(nuevoCurso)
    {
        this.cursosAprobados.push(nuevoCurso);
    }
};

const miguelito= new Student2({
    name:'Miguel',
    age:28,
    cursosAprobados:['Curso de analisis de negocios para ds',
    'Principios de visualizacion de datos']});



// const juan1 = 
// {
//     name:"juandavid",
//     username : "juandc",
//     points:100,
//     socialMedia : 
//     {
//         twitter:'juandavid',
//         facebook:undefined,
//         instagram:'juandavid',
//     },
//     approvedCourses:
//     [
//         'Curso definitvo de html y css',
//         'curso practico de html y css'
//     ],

//     learningPaths: 
//     [
//         {
//             name:"Escuela de desarrollo web",
//             courses: 
//             [
//                 'Curso definitvo de html y css',
//                 'curso practico de html y css',
//                 'curso de responsive design'
//             ]

//         },
//         {
//             name: "Escuela de videojuegos",
//             courses : 
//             [
//                 "Curso de introduccion a la produccion de vj",
//                 "Curso de unreal engine",
//                 "curso de unity 3d",
//             ]

//         }

//     ]
// }

// const miguelito1 = 
// {
//     name:"miguelito",
//     username : "miguelito",
//     points:1000,
//     socialMedia : 
//     {
//         twitter:'miguelito',
//         facebook:undefined,
//         instagram:'miguelito',
//     },
//     approvedCourses:
//     [
//         'Curso data bussines',
//         'curso de data scient',
//     ],

//     learningPaths: 
//     [
//         {
//             name:"Escuela de desarrollo web",
//             courses: 
//             [
//                 'Curso definitvo de html y css',
//                 'curso practico de html y css',
//                 'curso de responsive design'
//             ]

//         },
//         {
//             name: "Escuela de data scients",
//             courses : 
//             [
//                 'Curso data bussines',
//                 'curso de data scient',
//             ]

//         }

//     ]
// }

