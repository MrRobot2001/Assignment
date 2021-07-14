const Student = require('./studentModel');

exports.studentSave = async(req,res,next) => {
    try {
        const{ name, Class, contact, subjects, society, year } = req.body;
        
        const newStudent = new Student({
            name, Class, contact, subjects, society, year
        })

        await newStudent.save()
        res.json({
            msg: 'Student saved',
            student: {
                ...newStudent._doc
            }
        })
    }
    catch (err) {
        return res.status(500).json({msg: err.message});
    }
}