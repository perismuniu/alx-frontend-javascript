export default function iterateThroughObject(reportWithIterator) {
  // Initialize an array to hold employee names
  const employeeNames = [];

  // Use the for...of loop to iterate through each value provided by the iterator
  for (const employeeName of reportWithIterator) {
    employeeNames.push(employeeName);
  }

  // Join all employee names into a single string, separated by '|'
  return employeeNames.join(' | ');
}
