type Grade = "A" | "B" | "C" | "D" | "E" | "F";

interface Student {
  id: number;
  name: string;
}

interface Subject {
  id: number;
  name: string;
  student_id: number[];
  grades: Grade[]
}

const students: Student[] =  [
  {id: 1, name: "Kåre"},
  {id: 2, name: "Lisa"},
  {id: 3, name: "Per"},
  {id: 4, name: "Pål"}
]

const subjects: Subject[] = [
  {id: 4813, name: "MobilProg", student_id: [1, 2, 3], grades:["A", "D", "B"]},
  {id: 1337, name: "Webapp", student_id: [2, 4], grades: ["A"]}
]

const addStudent = (student: Student) => {
  students.push(student);
}

const addSubject = (
  subject: Pick<Subject, "name">,
  student_id: number[],
  grades: Grade[] = []
) => {
  const subjectData: Subject = {
    id: subjects.length + 1,
    name: subject.name || `Subject ${subjects.length + 1}`,
    student_id,
    grades 
  }
  subjects.push(subjectData);
}