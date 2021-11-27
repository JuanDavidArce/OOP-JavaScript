function videoPlay(id){
    const urlSecreta='https://secret.com'+id
    console.log('se esta reproduciendo desde'+urlSecreta)
}

function videoStop(id){
    const urlSecreta='https://secret.com'+id
    console.log('se esta Pausando desde'+urlSecreta)
}

class PlatziClass
{
    constructor({
        name,videoID,
    }){

        this.name=name;
        this.videoID=videoID;
    }

    reproucir()
    {
        videoPlay(this.videoID)
    }
    pausar()
    {
        videoStop(this.videoID)
    }
}



class Course
{
    constructor({name,classes=[],isFree=false,lang="spanish"})
    {
        this._name=name;
        this.classes=classes;
        this.isFree=isFree;
        this.lang=lang;

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


const cursoProgramacionBasica = new Course({name:'curso gratis de programacion basica',isFree:true,lang:'english'});
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



class FreeStudent extends Student
{
    constructor(props){
        super(props); //Call the constructor of Student
    }

    approveCourse(newCourse)
    {
        if (newCourse.isFree)
        {
            this.aprovedCourses.push(newCourse)
        }
        else
        {
            console.warn("lo siento, "+this.name + "Solo puedes tomar cursos abiertos")
        }
    }
}

class BasicStudent extends Student
{
    constructor(props){
        super(props); //Call the constructor of Student
    }

    approveCourse(newCourse)
    {
        if (newCourse.lang!=="english")
        {
            this.aprovedCourses.push(newCourse)
        }
        else
        {
            console.warn("lo siento, "+this.name + "Solo puedes tomar cursos en ingles")
        }
    }
    
}

class ExpertStudent extends Student
{
    constructor(props){
        super(props); //Call the constructor of Student
    }
    approveCourse(newCourse)
    {
        this.aprovedCourses.push(newCourse)
    }
}


const juan1= new FreeStudent(
    {
        name : 'Juan David',
        username:'juanda',
        email:'juandavid@juandavid.com',
        twitter:'juandavidarce_',
        learningPaths:[escuelaWeb,escuelaVgs,]
    }
)

const miguelito1= new BasicStudent(
    {
        name : 'miguelito',
        username:'miguelito',
        email:'miguelito@jmiguelito.com',
        instagram:'miguelito_',
        learningPaths:[escuelaData,escuelaWeb]
    }
)