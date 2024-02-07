import Exam from "../models/questionModel.js";

const registerExam = async (req, res) => {
  const { title, examCode, instructions, time, faculty, duration } = req.body;
  console.log(req.body);
  const examExists = await Exam.findOne({ examCode });

  if (examExists) {
    res.status(400);
    console.log("hii")
    throw new Error("Course already exists");
  }

  const exam = await Exam.create({
    title,
    examCode,
    instructions,
    time,
    faculty,
    duration,
  });

  if (exam) {
    res.status(201).json({
      _id: exam._id,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
};
export { registerExam };
