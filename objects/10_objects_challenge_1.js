const cohort = {
  name: 'May2022',
  id: 1234,
  studentNames: ['Conor', 'Alexis', 'Jordan', 'Bal']
};

const reportCohort = (cohort) => {
  console.log(
    `${cohort.id} - ${cohort.name} - ${cohort.studentNames.length} students in this cohort`
  )
}

console.log(reportCohort(cohort));

// module.exports = reportCohort;