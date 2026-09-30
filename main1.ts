<<<<<<< HEAD
import { UserDAO } from "./UserDAO";

const userDAO = new UserDAO();

userDAO.insert("อำพร","amporn@gmail.com");
userDAO.insert("พรเพ็ญ","pornpen@gmail.com");
userDAO.insert("สามารถ","samart@gmail.com");

const users = userDAO.findAll();
users.forEach(u=> {
    console.log(u.GetInfo());
=======
import { StudentDAO } from "./StudentDAO";

const studentDAO = new StudentDAO();

studentDAO.insert("684245010","ธีรดนย์",3.50);
studentDAO.insert("684245003","อาวุธ",3.24);
studentDAO.insert("684245040","อำนาจ",2.22);
studentDAO.insert("684245041","อำพร",2.22);

const students = studentDAO.findAll();
let honor: string;
students.forEach(s=> {
    if(s.isHonors() === true) honor= "เกียรตินิยม";
    else honor= "";
    console.log(`${s.getstudentCode()} ${s.getFullname()} ${s.getgpa()} ${honor}`);
>>>>>>> a636822ef0cad292c6bcf5cf7ad75a8698b16b0c
});