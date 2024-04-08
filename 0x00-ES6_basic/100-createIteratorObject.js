export default function createIteratorObject(report) {
  // Generator function
  function* employeeGenerator() {
    // Iterate through each department
    for (const department of Object.keys(report.allEmployees)) {
      // Iterate through each employee in the department
      for (const employee of report.allEmployees[department]) {
        yield employee; // Yield each employee one by one
      }
    }
  }

  return employeeGenerator(); // Return the iterator created by the generator
}
