let courses = [
    {
        id: 1,
        title: "ReactJS Tutorial",
        rating: 4.2,
    },
    {
        id: 2,
        title: "Angular Tutorial",
        rating: 2.5,
    },
    {
        id: 3,
        title: "VueJS Tutorial",
        rating: 3.8,
    },
    {
        id: 4,
        title: "Java Tutorial",
        rating: 4,
    },
    {
        id: 5,
        title: "JavaScript Tutorial",
        rating: 3.5,
    },
];

let a = courses.filter((element) => element.rating >= 4)
console.log(a);

let b = courses.filter((e) => e.rating < 4).map((e) => { 
    return e.id + "-" + e.title + "-" + e.rating }
);

b.forEach((e) => {
    console.log(e)
})

const mergeArray = (a,b) => {
return [...a,...b];
}

let addedCourses = [
    {
        id: 6,
        title: "PHP Tutorial",
        rating: 3,
    },
    {
        id: 7,
        title: "C# Tutorial",
        rating: 2,
    },
    {
        id: 8,
        title: "Docker Tutorial",
        rating: 3.8,
    }
];


console.log(mergeArray(courses,addedCourses));
