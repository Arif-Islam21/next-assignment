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

// Question 4
const getCngFare = (distance, isNight = false, waitingMinutes = 0) => {
  let totalFare = 0;
  if (distance <= 2) {
    totalFare = 50;
  } else if (distance > 2) {
    totalFare = 50 + (distance - 2) * 15;
  }
  if (waitingMinutes) {
    totalFare += waitingMinutes * 2;
  }
  if (isNight) {
    const fareWithExtraCharge = (totalFare * 20) / 100;
    totalFare += fareWithExtraCharge;
  }
  return totalFare;
};
