
let courseList=localStorage.getItem('tasks')?JSON.parse(localStorage.getItem('tasks')):[];
let listFormEle = document.querySelector('#list-form');
let listInputEle = document.querySelector('#task-box');

listFormEle.addEventListener('submit', function (event) {
  event.preventDefault();
  let enteredTask = listInputEle.value.trim();

  

  courseList.unshift(enteredTask);
  localStorage.setItem('tasks',JSON.stringify(courseList));
  displayCourse(courseList);
  listInputEle.value = "";
});

function displayCourse(course) {
  if (courseList.length === 0) {
    document.getElementById('list-ele').innerHTML = "Your list is empty!!!!!";
    return;
  }

  let eachCourse = "";
  courseList.forEach(function (course, index) {
    eachCourse += `<li class="list-group-item list-group-item-info">
        <span class="fw-bold">${course}</span>
        <button class="float-end btn btn-info text-white me-2" onClick="updateCourse(${index})">
          <i class="fa-solid fa-pen"></i>
        </button>
        <button class="float-end btn btn-info text-white me-2" onClick="deleteCourse(${index})">
          <i class="fa-solid fa-trash"></i>
        </button>
      </li>`;
   });

  document.getElementById('list-ele').innerHTML = eachCourse;
}

function deleteCourse(id) {
  courseList.splice(id, 1);
  displayCourse(courseList);
}

function updateCourse(id) {
  listInputEle.value = courseList[id];
  localStorage.setItem('tasks',JSON.stringify(courseList));
  deleteCourse(id);
}

// Initial display
displayCourse(courseList);