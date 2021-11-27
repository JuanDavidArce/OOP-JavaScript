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
        twitter:'juandavidarce_'
    }
)

const miguelito1= new Student(
    {
        name : 'miguelito',
        username:'miguelito',
        email:'miguelito@jmiguelito.com',
        instagram:'miguelito_'
    }
)