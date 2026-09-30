import { BaseDAO} from "./BaseDAO";
import {Student} from "./Student";

export class StudentDAO extends BaseDAO{
    protected initTable(): void {
        this.db.exec(`
            CREATE TABLE IF NOT EXISTS students (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                studentCode TEXT NOT NULL UNIQUE,
                Fullname TEXT NOT NULL,
                gpa REAL NOT NULL
            )
        `)
    }
    public insert(studentCode:string,Fullname:string,gpa:number): boolean{
        const stmt = this.db.prepare(`INSERT INTO students (studentCode,Fullname,gpa) VALUES (?,?,?)`);
        const result = stmt.run(studentCode,Fullname,gpa);
        return result.changes > 0;
    }
    public findAll():Student[]{
        const stmt = this.db.prepare(`SELECT * FROM Students`);
        const rows = stmt.all() as {id:number,studentCode:string,Fullname:string,gpa:number}[];
        return rows.map(row => new Student(row.id,row.studentCode, row.Fullname, row.gpa));
    }
}