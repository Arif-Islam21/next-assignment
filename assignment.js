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

const validateUsername = (name) => {
  const nameLowerCase = name.toLowerCase();
  if (typeof name !== "string") {
    return "Invalid user name";
  }
  if (nameLowerCase.length < 4) {
    return "Too Short";
  } else if (nameLowerCase.includes(" ")) {
    return "No Space Allowed";
  } else if (nameLowerCase.includes("admin")) {
    return "Reserved Word";
  } else {
    return "Available";
  }
};
