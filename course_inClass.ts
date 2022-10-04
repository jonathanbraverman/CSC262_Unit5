// defining a COurse class
class Course{

    // attributes
    name:string
    description:string
    num:number
    instructor:string
    credit_hours:number
    enrolled_students:number
    cap_students:number

    // methods 
    constructor( name:string, 
        description:string, 
        num:number,
        credit_hours:number, 
        cap_students:number ){
            this.name = name
            this.description = description
            this.num = num
            this.credit_hours = credit_hours
            this.cap_students = cap_students

            this.enrolled_students = 0
    }

    // this method will increment the enrolled_students attribute
    enroll(){
        this.enrolled_students++
    }

    // this method will decrement the enrolled_students attribute
    unenroll(){}

    // this method will return the name of the course
    get_name(){}

    // this method will set/update the name of the course
    set_name( name:string ){}

    // this method will print all the information related to the course
    info(){
        console.log( this.name )
        console.log( this.description )
        console.log( this.num )
        console.log( this.credit_hours )
        if( this.instructor != undefined ){
           console.log( this.instructor )
        }
        console.log( "Number of enrolled students: " + this.enrolled_students )
    }
}


// creating a course object
let c1 = new Course( "Quilting", "Learn to make the most beautiful quilts!", 1001, 1, 15 )

// invoking the method enroll()
c1.enroll()

// invoking the method info()
c1.info()
