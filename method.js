const student = {
    id: 101,
    name: 'nipa',
    isPoor: false,
    sub: ['english', 'arabic', 'science'],
    total: 0,
    bestFriend: {
        name: 'anika',
        mejor: "history"

    },
    takeExam: function () {
        console.log(this.name, 'taking exam');

    },
    getResult: function (countpresent, mark) {
        this.total = countpresent * mark;
        return this.total;


    }

}
console.log((student.total));

student.takeExam();
const result = student.getResult(10, 100);
console.log((result));
console.log((student.total));
