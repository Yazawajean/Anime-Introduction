var topic = [
    "東京国立博物館",
    "秋葉原の刀剣茶寮",
    "徳島市立徳島城博物館",
    "熊本県立美術館"
];
var tou = [
    "厚藤四郎 ",
    "復元蛍丸",
    "博多藤四郎",
    "歌仙兼定"
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

setMonthAndDay(7,10);