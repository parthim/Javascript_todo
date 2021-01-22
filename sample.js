let problem = [
    {
        "name" : "Parthi",
        "Diabetes": 
        [
            {
                "medications": 
                [
                    {
                        "medicationsClasses": 
                        [
                            {
                                "className":   
                                [
                                    {
                                        "associatedDrug": 
                                        [
                                            {
                                                "name": "asprin",
                                                "dose": "",
                                                "strength": "500 mg"
                                            }
                                        ],
                                        "associatedDrug#2": 
                                        [
                                            {
                                                "name": "somethingElse",
                                                "dose": "",
                                                "strength": "500 mg"
                                            }
                                        ]
                                    }
                                ],
                                "className2": 
                                [
                                    {
                                        "associatedDrug": 
                                        [
                                            {
                                                "name": "asprin",
                                                "dose": "",
                                                "strength": "500 mg"
                                            }
                                        ],
                                        "associatedDrug#2": 
                                        [
                                            {
                                                "name": "somethingElse",
                                                "dose": "",
                                                "strength": "500 mg"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "labs": 
                [
                    {
                        "missing_field": "missing_value"
                    }
                ]
            }
        ],
       "Asthma": 
        [
           {}
        ],
        "Cancer": 
        [
            {
                "medications": 
                [
                    {
                        "medicationsClasses": 
                        [
                            {
                                "className": 
                                [
                                    {
                                        "associatedDrug": 
                                        [
                                            {
                                                "name": "asprin",
                                                "dose": "",
                                                "strength": "500 mg"
                                            }
                                        ],
                                        "associatedDrug#2": 
                                        [
                                            {
                                                "name": "somethingElse",
                                                "dose": "",
                                                "strength": "500 mg"
                                            }
                                        ]
                                    }
                                ],
                                "className2": 
                                [
                                    {
                                        "associatedDrug": 
                                        [
                                            {
                                                "name": "asprin",
                                                "dose": "",
                                                "strength": "500 mg"
                                            }
                                        ],
                                        "associatedDrug#2": 
                                        [
                                            {
                                                "name": "somethingElse",
                                                "dose": "",
                                                "strength": "500 mg"
                                            }
                                        ]
                                    }
                                ]   
                            }
                        ]
                    }
                ],
                "labs": 
                [
                    {
                        "missing_field": "missing_value"
                    }
                ]
            }
        ]
    }
];

function renderproblems(params=[])
{
    let problems = [...params]
    let AllproblemsDOM = problems.map(function(problem,index) {
        let singleproblemDOM = `
        <div class="carousel-inner">
            <div class= "item active">     
                <h1 class="animate__animated animate__fadeInDown">Diabetes</h1 class="animate__animated animate__fadeInDown">
                <ul class= "Dia">
                    ${problem.Diabetes.map(function (diabetees,index) 
                        {
                            return` 
                            <li>
                            <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                            Medications</button>
                            <div class="collapse multi-collapse" id="collapseExample">
                                <ul class="Dia_med ">
                                    ${diabetees.medications.map(function(medication,index)
                                        {
                                            return `
                                            <li>
                                                <h3>MedicactionClasses</h3>
                                                <ul class= "Dia_medc">
                                                    ${medication.medicationsClasses.map(function(medicationsClass,index)
                                                        {
                                                            return `
                                                            <li>
                                                                <h4>ClassName</h5>
                                                                <ul class="Dia_medc_c">
                                                                    ${medicationsClass.className.map(function(classNames,index)
                                                                        {
                                                                            return `
                                                                            <li>
                                                                                <h5>AssociatedDrug</h5>
                                                                                <ul>
                                                                                    ${classNames.associatedDrug.map(function(associatedDrugs,index)
                                                                                        {
                                                                                            return `
                                                                                            <li>Name : ${associatedDrugs.name}, <br> Dose: ${associatedDrugs.dose}, <br> Strength: ${associatedDrugs.strength} </li>`
                                                                                        }
                                                                                    ).join("")}
                                                                                </ul>
                                                                                <h5>AssociattdDrug#2</h5>
                                                                                <ul>
                                                                                    ${classNames['associatedDrug#2'].map(function(associatedDrugs2,index)
                                                                                        {
                                                                                            return `
                                                                                            <li>Name : ${associatedDrugs2.name}, <br>Dose: ${associatedDrugs2.dose}, <br>Strength: ${associatedDrugs2.strength} </li>
                                                                                            `
                                                                                        }
                                                                                    )}
                                                                                </ul>
                                                                            </li>
                                                                            `
                                                                        }
                                                                    ).join("")}
                                                                </ul>
                                                            <li>
                                                            
                                                            <li>
                                                                <h4>ClassName2</h5>
                                                                <ul>
                                                                    ${medicationsClass.className2.map(function(classNames2,index)
                                                                        {
                                                                            return `
                                                                            <li>
                                                                                <h5>AssociatedDrug</h5>
                                                                                <ul>
                                                                                    ${classNames2.associatedDrug.map(function(associatedDrugs,index)
                                                                                        {
                                                                                            return `
                                                                                            <li>Name : ${associatedDrugs.name}, <br>Dose: ${associatedDrugs.dose}, <br>Strength: ${associatedDrugs.strength} </li>`
                                                                                        }
                                                                                    ).join("")}
                                                                                </ul>
                                                                                <h5>AssociattdDrug#2</h5>
                                                                                <ul>
                                            
                                                                                    ${classNames2['associatedDrug#2'].map(function(associatedDrugs,index)
                                                                                        {
                                                                                            return `
                                                                                            <li>Name : ${associatedDrugs.name}, <br>Dose: ${associatedDrugs.dose}, <br>Strength: ${associatedDrugs.strength} </li>
                                                                                            `
                                                                                        }
                                                                                    )}
                                                                                </ul>
                                                                            </li>
                                                                            `
                                                                        }
                                                                    ).join("")}
                                                                </ul>
                                                            <li>`
                                                        }
                                                    ).join("")}
                                                </ul>
                                            </li>`
                                        }
                                    ).join("")}
                                    
                                </ul>
                            </div>
                            </li>
                            <li>
                            <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample">
                            Labs</button>
                            <div class="collapse multi-collapse " id="collapseExample1">
                                <ul>
                                        ${diabetees.labs.map(function(lab,index)
                                            {
                                                return `
                                                <li>
                                                 Missing Value : ${lab.missing_field}
                                                </li>
                                                `
                                            }
                                        )}
                                </ul>
                            </div>
                            </li>`
                        }
                    ).join("")}
                </ul>
            </div>
            <div class="item">   
                <h1 class="animate__animated animate__fadeInDown">Ashtma</h1 class="animate__animated animate__fadeInDown">
                <ul>
                    ${problem.Asthma.map(function(asthmas,index)
                        {

                        }
                    )}
                </ul>
            </div>
            <div class="item">
    
                <h1 class="animate__animated animate__fadeInDown">Cancer</h1 class="animate__animated animate__fadeInDown">
                <ul>
                    ${problem.Cancer.map(function (cancers,index) 
                        {
                            return` 
                            <li>
                                <h2>Medications</h2>
                                <ul>
                                    ${cancers.medications.map(function(medication,index)
                                        {
                                            return `
                                            <li>
                                                <h3>MedicactionClasses</h3>
                                                <ul>
                                                    ${medication.medicationsClasses.map(function(medicationsClass,index)
                                                        {
                                                            return `
                                                            <li>
                                                                <h4>ClassName</h5>
                                                                <ul>
                                                                    ${medicationsClass.className.map(function(classNames,index)
                                                                        {
                                                                            return `
                                                                            <li>
                                                                                <h5>AssociatedDrug</h5>
                                                                                <ul>
                                                                                    ${classNames.associatedDrug.map(function(associatedDrugs,index)
                                                                                        {
                                                                                            return `
                                                                                            <li>     Name : ${associatedDrugs.name}, <br>Dose: ${associatedDrugs.dose}, <br>Strength: ${associatedDrugs.strength} </li>`
                                                                                        }
                                                                                    ).join("")}
                                                                                </ul>
                                                                                <h5>AssociattdDrug#2</h5>
                                                                                <ul>
                                                                                    ${classNames['associatedDrug#2'].map(function(associatedDrugs,index)
                                                                                        {
                                                                                            return `
                                                                                            <li>     Name : ${associatedDrugs.name}, <br>Dose: ${associatedDrugs.dose}, <br>Strength: ${associatedDrugs.strength} </li>
                                                                                            `
                                                                                        }
                                                                                    )}
                                                                                </ul>
                                                                            </li>
                                                                            `
                                                                        }
                                                                    ).join("")}
                                                                </ul>
                                                            <li>
                                                            
                                                            <li>
                                                                <h4>ClassName2</h5>
                                                                <ul>
                                                                    ${medicationsClass.className2.map(function(classNames2,index)
                                                                        {
                                                                            return `
                                                                            <li>
                                                                                <h5>AssociatedDrug</h5>
                                                                                <ul>
                                                                                    ${classNames2.associatedDrug.map(function(associatedDrugs,index)
                                                                                        {
                                                                                            return `
                                                                                            <li>     Name : ${associatedDrugs.name}, <br>Dose: ${associatedDrugs.dose}, <br>Strength: ${associatedDrugs.strength} </li>`
                                                                                        }
                                                                                    ).join("")}
                                                                                </ul>
                                                                                <h5>AssociattdDrug#2</h5>
                                                                                <ul>
                                            
                                                                                    ${classNames2['associatedDrug#2'].map(function(associatedDrugs,index)
                                                                                        {
                                                                                            return `
                                                                                            <li>     Name : ${associatedDrugs.name}, <br>Dose: ${associatedDrugs.dose}, <br>Strength: ${associatedDrugs.strength} </li>
                                                                                            `
                                                                                        }
                                                                                    )}
                                                                                </ul>
                                                                            </li>
                                                                            `
                                                                        }
                                                                    ).join("")}
                                                                </ul>
                                                            <li>`
                                                        }
                                                    ).join("")}
                                                </ul>
                                            </li>`
                                        }
                                    ).join("")}
                                    
                                </ul>
                            </li>
                            <li>
                                <h2>Labs</h2>
                                <ul>
                                        ${cancers.labs.map(function(lab,index)
                                            {
                                                return `
                                                <li>
                                                 Missing Value : ${lab.missing_field}
                                                </li>
                                                `
                                            }
                                        )}
                                </ul>
                            </li>`
                        }
                    ).join("")}
                </ul>
            </div>
        </div>`
    return singleproblemDOM
    })
    let finalDOM = `${AllproblemsDOM.join("")}`
    // console.log(finalDOM);
     document.getElementById("medicine").innerHTML= finalDOM;
}

renderproblems(problem)

console.log(problem[0]['Diabetes'][0]['medications'][0]['medicationsClasses'][0]);
console.log(problem[0]['Diabetes']
);