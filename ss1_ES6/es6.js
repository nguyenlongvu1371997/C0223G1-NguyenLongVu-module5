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

const goodCourses = courses.filter(courses => courses.rating >= 4);
console.log(goodCourses);



const badCourses = courses.filter(courses => courses.rating < 4).map(e => {
  return e.id + '-' + e.title + '-' + e.rating;
});

console.log(badCourses);

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

const mergeArray = (arr1, arr2) => {
  return [...arr1, ...arr2];
};

console.log(mergeArray(courses, addedCourses))



