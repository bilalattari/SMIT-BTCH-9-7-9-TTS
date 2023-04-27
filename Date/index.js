var now = new Date()

var month = now.getMonth()
console.log('month->' , month)


var day = now.getDay()
console.log('day->' , day)


var miliSecondsFrom1970 = now.getTime()
var secondsFrom1970 = miliSecondsFrom1970 / 1000
var minutesFrom1970 = secondsFrom1970 / 60
var hoursFrom1970 = minutesFrom1970 / 60
var daysFrom1970 = hoursFrom1970 / 24
var monthsFrom1970 = daysFrom1970 / 30.5
var yearsFrom1970 = monthsFrom1970 / 12

console.log('miliSecondsFrom1970->' , miliSecondsFrom1970)
console.log('secondsFrom1970->' , secondsFrom1970)
console.log('minutesFrom1970->' , minutesFrom1970)
console.log('hoursFrom1970->' , hoursFrom1970)
console.log('daysFrom1970->' , daysFrom1970)
console.log('monthsFrom1970->' , monthsFrom1970)
console.log('yearsFrom1970->' , yearsFrom1970)

var car = {
    carName: 'Mehran',
    model: 2001
}

var ongoing = []
var past = []
var upcoming = []

var events = [
    {
        eventName: 'A',
        startDate: new Date("April 30, 2023"),
        endDate: new Date("May 01, 2023")
    },
    {
        eventName: 'B',
        startDate: new Date("April 22, 2023"),
        endDate: new Date("April 25, 2023")
    },
    {
        eventName: 'C',
        startDate: new Date("April 26, 2023"),
        endDate: new Date("April 28, 2023")
    },

]

var currentMilliSeconds = new Date().getTime()

for (var i = 0; i < events.length; i++) {
    var miliSecondsStartDate = events[i].startDate.getTime()
    var miliSecondsEndDate = events[i].endDate.getTime()
    //UPCOMING
    if (miliSecondsStartDate > currentMilliSeconds) {
        console.log('Upcoming-->', miliSecondsStartDate, currentMilliSeconds)
        upcoming.push(events[i])
    }
    else if (miliSecondsEndDate < currentMilliSeconds) {
        console.log('Past-->', miliSecondsEndDate, currentMilliSeconds)

        past.push(events[i])
    } else if (miliSecondsStartDate < currentMilliSeconds && miliSecondsEndDate > currentMilliSeconds) {
        console.log('Ongoing-->', miliSecondsStartDate, currentMilliSeconds, miliSecondsEndDate)
        ongoing.push(events[i])
    }
}

console.log('Past', past)
console.log('Upcoming', upcoming)
console.log('ongoing', ongoing)



var faizBirthday = new Date()

faizBirthday.setDate(5)
faizBirthday.setMonth(10)
faizBirthday.setFullYear(2003)

console.log(faizBirthday)