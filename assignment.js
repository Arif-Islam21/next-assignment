// Question 1
const describeValue = (value) => {
  const type = typeof value;
  const truthyOrFalsy = value ? "truthy" : "falsy";
  return `"${type} | ${truthyOrFalsy}"`;
};

// Question 2
const getDayType = (day) => {
  const dayLowerCase = day.toLowerCase();
  const days = [
    "Friday",
    "Saturday",
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
  ];
  const daysLowerCase = days.map((day) => day.toLowerCase());
  if (typeof day != "string" || !daysLowerCase.includes(dayLowerCase)) {
    return "Invalid Day";
  }
  if (dayLowerCase === "friday" || dayLowerCase === "saturday") {
    return "Weekend";
  } else {
    return "Working Day";
  }
};

console.log(getDayType("FRiday"));
