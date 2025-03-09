const names = ['Harry', 'Ron', 'Hermione'];
const grades = [82, 93, 75];
const subjects = ['Math', 'English', 'History'];
const students = [];
for (let i = 0; i < 10; i++) {
	students.push({
		name: names[i % 3],
		grade: grades[i % 3],
		subject: subjects[i % 3]
	});
}
console.log(students);
