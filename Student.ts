export class Student{
    constructor(private id:number, private studentCode: string, private Fullname:string, private gpa: number){}
    public getId():number{ return this.id};
    public getstudentCode():string{ return this.studentCode};
    public getFullname():string{ return this.Fullname};
    public getgpa():number{ return this.gpa};
    public GetInfo():string{
        return `User: ${this.id} ${this.studentCode} ${this.Fullname} ${this.gpa}`;
    }
    public isHonors():boolean{
        if(this.gpa >= 3.5) return true;
        else return false;
    }
}