import { Request, Response } from 'express';
import { UserType, UserLogin, UserRegsiter, TeacherType, StudentType } from "../types"


const isLoginUser = (req: Request, res: Response, next: Function) => {
    const body = req.body
    if (
        body.email !== undefined &&
        body.password !== undefined &&
        body.type !== undefined && body.type === "teacher" || body.type === 'student'
    ){
        next()
    }else{
        res.status(400).json({
            error: 400,
            message: "bad input"
        })
    }
}


const isRegisterTeacher = (req: Request, res: Response, next: Function) => {
    const body = req.body
    if (
        body.username !== undefined &&
        body.email !== undefined &&
        body.password !== undefined 
    ){
        next()
    }else{
        res.status(400).json({
            error: 400,
            message: "bad input"
        })
    }
}


const isRegisterStudent = (req: Request, res: Response, next: Function) => {
    const body = req.body
    if (
        body.username !== undefined &&
        body.email !== undefined &&
        body.password !== undefined &&
        body.grade !== undefined &&
        body.year !== undefined
    ){
        next()
    }else{
        res.status(400).json({
            error: 400,
            message: "bad input"
        })
    }
}





const isGlobalNotesReq = (req: Request, res: Response, next: Function) => {
    const body = req.body
    if (
        body.grade !== undefined &&
        body.year !== undefined && typeof(body.year) === "number"
    ){
        next()
    }else{
        res.status(400).json({
            error: 400,
            message: "bad input"
        })
    }
}




const isComplaint = (req: Request, res: Response, next: Function) => {
    const body = req.body
    if (
        body.note !== undefined &&
        body.message !== undefined
    ){
        next()
    }else{
        res.status(400).json({
            message: "bad input"
        })
    }
}




const studentEdit = (req: Request, res: Response, next: Function) => {
    const allowed = [ "username" ,"email" ,"grade" ,"year"]
    const body = req.body
    var keys = Object.keys(body);
    for (let i = 0; i < keys.length; i++) {
        if (!allowed.includes(keys[i])){
            res.status(400).json({
                message: "un allowed parametre  only [username ,email ,password ,profile_image ,grade, year] allowed"
            })
        }
    }
    next()
}



const teacherEdit = (req: Request, res: Response, next: Function) => {
    const allowed = [ "username" ,"email" ,"subjects" ,"isAdmin"]
    const body = req.body
    var keys = Object.keys(body);
    for (let i = 0; i < keys.length; i++) {
        if (!allowed.includes(keys[i])){
            res.status(400).json({
                message: "un allowed parametre  only [username ,email ,password ,profile_image ,subjects ,isAdmin] allowed"
            })
        }
    }
    next()
}






const note = (req: Request, res: Response, next: Function) => {
    const allowed = [ "td", "tp", "exam" ]
    const body = req.body
    var keys = Object.keys(body);
    for (let i = 0; i < keys.length; i++) {
        if (!allowed.includes(keys[i])){
            if(typeof(keys[i]) !== 'number'){
                res.status(400).json({
                    message: "only numbers allowed"
                })
            }
            res.status(400).json({
                message: "un allowed parametre  only [ td, tp, exam] allowed"
            })
        }

    }
    next()
}




export {
    isRegisterTeacher,
    isLoginUser,
    isRegisterStudent,
    isGlobalNotesReq,
    isComplaint,
    studentEdit,
    teacherEdit,
    note
}