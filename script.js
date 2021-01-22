let employees = [
    {
        "name": "Mano",
        "skills": ["es6", "node"],
        "projects": [
            {
                "name": "ABC",
                "Role": "Dev"
            },
            {
                "name": "XYZ",
                "Role": "Lead"
            }
        ]
    },
    {
        "name": "Bava",
        "skills": ["php", "laravel"],
        "projects": [
            {
                "name": "ABC",
                "Role": "Senior Dev"
            },
            {
                "name": "XYZ",
                "Role": "Team Lead"
            }
        ]
    },
];

function renderEmplonameyees(params = []) {
    let employess = [...params]
    let AllEmployessDOM = employess.map(function(employee, index) 
    {
        let singleEmployeeDOM = `
        <div class="col-3">
            <div class="card shadow">
                <div class="card-body">
                    <h1 class="animate__animated animate__fadeInDown">Name: ${employee.name}</h1 class="animate__animated animate__fadeInDown">
                    <p>Skills</p>
                    <ul>
                        ${employee.skills.map(function(skill, index) 
                        {
                            return `<li> ${skill}</li>`
                        }).join("")}
                    </ul>
                    <p>Projects</p>
                    <ul>
                        ${employee.projects.map(function(project, index) 
                        {
                            return `<li> Project Name: ${project.name}, Role: ${project.Role}</li>`
                        }).join("")}
                    </ul>
                </div>                    
            </div>
        </div>
        `;
        return singleEmployeeDOM;
    })
    let finalDOM = `<div class="row">${AllEmployessDOM.join("")}</div>`
    // console.log(finalDOM);
    document.getElementById("medicine").innerHTML = finalDOM;
}

renderEmplonameyees(employees)


// function Sample(params) {
//     let abc = ["Mano", "Bava"];
//     let xyz = abc.map(function(value, index) {
//         return value + index;
//     })
//     console.log(xyz);
// }


// Sample()

// let abc = [1,2]
// document.getElementById("app").innerHTML = abc.join("")




function name(params) {
    
}


// let abc = 12;
// var so = 12;
// const xyz = 12


// abc = 24
// so = 24
// xyz = 24

// console.log(abc);
// console.log(so);
// console.log(xyz);
