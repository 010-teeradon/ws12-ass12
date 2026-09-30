import Database from "better-sqlite3";

<<<<<<< HEAD
export abstract class BaseDAO {
    protected db: Database.Database;
    constructor(dbPath: string = 'inventory.db'){
        this.db = new Database(dbPath);
        this.iniTable();
    }
    protected abstract iniTable():void;
=======
export abstract class BaseDAO{
    protected db: Database.Database;
<<<<<<< HEAD
    constructor(dbpath: string = "app.db"){
        this.db=new Database(dbpath);
=======
    constructor(dbName: string = "school.db"){
        this.db=new Database(dbName);
>>>>>>> a636822ef0cad292c6bcf5cf7ad75a8698b16b0c
        this.initTable();
    }
    protected abstract initTable(): void;
>>>>>>> 2ac84acacac327b8dbfb167344d30e833eff13fd
}