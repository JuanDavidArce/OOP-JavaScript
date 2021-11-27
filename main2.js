class Course
{
    constructor({name,classes=[]})
    {
        this._name=name;
        this.classes=classes;

    }
    // Getter
    get name(){
        return this._name;
    }

    // setter 
    set name(newName){
        if(newName==='Curso malo')
        {
            console.error('Web.. no');

        }
        else{

            this._name=newName;
        }
    }
}


const cursoProgramacionBasica = new Course({name:'curso gratis de programacion basica',});
const cursoDefinitivoHtml = new Course({name:'curso definitivo html y css',});
const cursoPracticoHtml = new Course({name:'curso practico html y css',});
const cursoDataBussines = new Course({name:'curso de data bussines',});
const cursoUnity = new Course({name:'curso de unity',});
const cursoUnreal = new Course({name:'curso de unreal',});


class LearningPath
{
    constructor({name,courses=[]})
    {
        this.name=name;
        this.courses=courses;

    }
}

const escuelaWeb = new LearningPath({
    name:'Escuela de data Science',
    courses:[cursoProgramacionBasica,cursoDefinitivoHtml,cursoPracticoHtml]
});
const escuelaData =   new LearningPath({
    name:'Escuela de data Scientist',
    courses:[cursoProgramacionBasica,cursoDataBussines]
});
const escuelaVgs = new LearningPath({
    name:'curso de videojuegos',
    courses:[cursoUnity,cursoUnreal]
});





class Student
{
    constructor 
    (
        {
            name,
            email,
            username,
            twitter= undefined,
            instagram=undefined,
            facebook=undefined,
            aprovedCourses= [],
            learningPaths=[],
        }
    )
    {
            this.name=name;
            this.email=email;
            this.username=username;
            this.socialMedia= {twitter,instagram,facebook};
            this.aprovedCourses=aprovedCourses;
            this.learningPaths=learningPaths;
    }
}

const juan1= new Student(
    {
        name : 'Juan David',
        username:'juanda',
        email:'juandavid@juandavid.com',
        twitter:'juandavidarce_',
        learningPaths:[escuelaWeb,escuelaVgs,]
    }
)

const miguelito1= new Student(
    {
        name : 'miguelito',
        username:'miguelito',
        email:'miguelito@jmiguelito.com',
        instagram:'miguelito_',
        learningPaths:[escuelaData,escuelaWeb]
    }
)