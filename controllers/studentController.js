import Student from "../models/student.js";
function getStudents(req, res) {


    Student.find() //save wela inna studentsla okkoma enawa
      .then((studentList) => {
          res.json({
              list : studentList
          })
      })
    }

    function createStudent (req, res){

        const student = new Student(req.body);
    
        student.save()
            .then(() => {
                res.json({
                    message: "Student created"
                });
            }).catch(() => {
                res.json({
                    message: "Error creating student"
                })
            });
    }

    function deleteStudent(req, res) {
        Student.deleteOne({name: req.body.name})
            .then(() => {
                res.json({
                    message: "Student deleted"
                });

        })
    }

    export {getStudents, createStudent, deleteStudent}
