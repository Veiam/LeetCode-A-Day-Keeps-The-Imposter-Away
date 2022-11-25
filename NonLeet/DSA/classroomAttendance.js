// Given an object, classroom, return an array of student names
// - The classroom object is structured with two values: hasTeachingAssistant (boolean) and classList (array of strings)
// - The teacher will always be the first item in the classList array
// - If `hasTeachingAssitant` is true, the teaching assistant will be the second item in the classList array

function getStudents(classroom) {
  let { hasTeachingAssistant, classList } = classroom;
  let teacher, teachingAssistant, students;

  if (hasTeachingAssistant) {
    [tearcer, teachingAssistant, ...students] = classList;
  }
  else {
    [teacher, ...students] = classList;
  }

  return students;
}

console.log(getStudents({
  hasTeachingAssistant: false,
  classList: ["Rashida", "John", "Roman", "Lisa", "Omair", "Lukas"],
}));