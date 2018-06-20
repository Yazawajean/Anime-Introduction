var topic = [
    "尚未開學",
    "奕語請客",
    "包包請客",
    "妮妮請客",
    "妮妮再請客"
];

var startDate = new Date();

function setMonthAndDay(startMonth, startDay)
{
    startDate.setMonth(startMonth-1);
    startDate.setDate(startDay);
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}

setMonthAndDay(4,20);