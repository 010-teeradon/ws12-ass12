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
});