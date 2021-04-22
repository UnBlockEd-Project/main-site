export default [
    {
        "name": "Term 1",
        "plan_items": [
            {
                "name": "General Chemistry Lab I",
                "requirement": {
                    "name": "CHE 111L - General Chemistry Lab I",
                    "attempts": 1,
                    "minimum_grade": "C",
                    "id": "4bd86de4-d7b5-4360-8c93-76923f464333",
                    "parent_id": null,
                    "credits": 1.0,
                    "course": {
                        "maximum_credits": 1.0,
                        "minimum_credits": 1.0,
                        "created_at": "2019-09-11T18:54:30.083Z",
                        "full_number": "CHE 111L",
                        "code": "CHE 111L",
                        "coreq": {
                            "course": {
                                "name": "General Chemistry I",
                                "maximum_credits": 3.0,
                                "minimum_credits": 3.0,
                                "id": 1973019,
                                "full_name": "CHE 111 - General Chemistry I",
                                "full_number": "CHE 111",
                                "code": "CHE 111"
                            },
                            "type": "course"
                        },
                        "name": "General Chemistry Lab I",
                        "id": 1973020,
                        "updated_at": "2019-10-30T15:44:29.671Z",
                        "description": "I, II.  Formerly CHE 115.  Prerequisite or Corequisite: CHE 111.  Laboratory component of CHE 111.  Basic laboratory techniques, methods of separation, types of chemical reactions, solution preparation and standardization, titrations, molecular modeling, qualitative analysis, gases, virtual labs on computer.  Credit will not be awarded to students who have credit for CHE 115. 3 Lab.  Gen. Ed. IVB with CHE 111.",
                        "prereq": null,
                        "academic_period": {
                            "term": "Fall",
                            "name": "Fall 2018",
                            "year": 2018,
                            "id": 96,
                            "academic_year": "2018-2019",
                            "code": "2018.75"
                        },
                        "full_name": "CHE 111L - General Chemistry Lab I"
                    },
                    "type": "CourseRequirement",
                    "advanced": false
                },
                "id": 12153,
                "position": 2,
                "credits": 1.0,
                "custom": false,
                "plan_item_spec": null
            },
            {
                "name": "General Chemistry I",
                "requirement": {
                    "name": "CHE 111 - General Chemistry I",
                    "attempts": 1,
                    "minimum_grade": "C",
                    "id": "e30a4ed6-3430-4c4f-bc27-f601a5c8159b",
                    "parent_id": null,
                    "credits": 3.0,
                    "course": {
                        "maximum_credits": 3.0,
                        "minimum_credits": 3.0,
                        "created_at": "2019-09-11T18:54:30.080Z",
                        "full_number": "CHE 111",
                        "code": "CHE 111",
                        "coreq": null,
                        "name": "General Chemistry I",
                        "id": 1973019,
                        "updated_at": "2019-09-11T18:54:30.080Z",
                        "description": "I, II. Prerequisite or Corequisite: CHE 111L and ACT math score of 22 or higher; or SAT math score equivalent; or MAT 112B (C or better) or MAT 114 (C or better) or higher or departmental approval. Principles of atomic and molecular structure and reactivity, stoichiometry, states of matter. Prepares students for further studies in chemistry. One year of high school chemistry is recommended. A withdrawal from CHE 111 must be matched by a withdrawal from CHE 111L. Gen. Ed. VII (NS) or IVB with CHE 111L.",
                        "prereq": null,
                        "academic_period": {
                            "term": "Fall",
                            "name": "Fall 2018",
                            "year": 2018,
                            "id": 96,
                            "academic_year": "2018-2019",
                            "code": "2018.75"
                        },
                        "full_name": "CHE 111 - General Chemistry I"
                    },
                    "type": "CourseRequirement",
                    "advanced": false
                },
                "id": 12152,
                "position": 1,
                "credits": 3.0,
                "custom": false,
                "plan_item_spec": null
            },
            {
                "name": "Modern Physics",
                "requirement": {
                    "name": "PHY 302 - Modern Physics",
                    "attempts": 1,
                    "minimum_grade": "C",
                    "id": "abd3551f-89fb-46ef-bec1-757bb3293bd7",
                    "parent_id": null,
                    "credits": 4.0,
                    "course": {
                        "maximum_credits": 4.0,
                        "minimum_credits": 4.0,
                        "created_at": "2019-09-11T18:54:34.085Z",
                        "full_number": "PHY 302",
                        "code": "PHY 302",
                        "coreq": null,
                        "name": "Modern Physics",
                        "id": 1974256,
                        "updated_at": "2019-09-11T18:54:34.085Z",
                        "description": "(4) A. Prerequisites: PHY 132 or PHY 202; MAT 211, MAT 234 or MAT 234H or departmental approval. Physics of the 20th century. Topics include special relativity, quantum effects, wave theory, Bohr theory, nuclear structure, nuclear reactions, and other topics related to 20th century modern physics. Credit will not be awarded to students who have credit for PHY 302W.",
                        "prereq": {
                            "operands": [
                                {
                                    "operands": [
                                        {
                                            "minimum_course_grade": "C",
                                            "concurrency_ind": false,
                                            "course": {
                                                "name": "College Physics II",
                                                "maximum_credits": 5.0,
                                                "minimum_credits": 5.0,
                                                "id": 1974253,
                                                "full_name": "PHY 132 - College Physics II",
                                                "full_number": "PHY 132",
                                                "code": "PHY 132"
                                            },
                                            "type": "course"
                                        },
                                        {
                                            "minimum_course_grade": "C",
                                            "concurrency_ind": false,
                                            "course": {
                                                "name": "University Physics II",
                                                "maximum_credits": 5.0,
                                                "minimum_credits": 5.0,
                                                "id": 1974255,
                                                "full_name": "PHY 202 - University Physics II",
                                                "full_number": "PHY 202",
                                                "code": "PHY 202"
                                            },
                                            "type": "course"
                                        }
                                    ],
                                    "type": "or"
                                },
                                {
                                    "operands": [
                                        {
                                            "minimum_course_grade": "C",
                                            "concurrency_ind": false,
                                            "course": {
                                                "name": "Applied Calculus",
                                                "maximum_credits": 3.0,
                                                "minimum_credits": 3.0,
                                                "id": 1973795,
                                                "full_name": "MAT 211 - Applied Calculus",
                                                "full_number": "MAT 211",
                                                "code": "MAT 211"
                                            },
                                            "type": "course"
                                        },
                                        {
                                            "minimum_course_grade": "C",
                                            "concurrency_ind": false,
                                            "course": {
                                                "name": "Calculus I",
                                                "maximum_credits": 4.0,
                                                "minimum_credits": 4.0,
                                                "id": 1973799,
                                                "full_name": "MAT 234 - Calculus I",
                                                "full_number": "MAT 234",
                                                "code": "MAT 234"
                                            },
                                            "type": "course"
                                        }
                                    ],
                                    "type": "or"
                                }
                            ],
                            "type": "and"
                        },
                        "academic_period": {
                            "term": "Fall",
                            "name": "Fall 2018",
                            "year": 2018,
                            "id": 96,
                            "academic_year": "2018-2019",
                            "code": "2018.75"
                        },
                        "full_name": "PHY 302 - Modern Physics"
                    },
                    "type": "CourseRequirement",
                    "advanced": false
                },
                "id": 12170,
                "position": 0,
                "credits": 4.0,
                "custom": false,
                "plan_item_spec": null
            },
            {
                "name": "Gen. Ed. E-1B (ENG 102)",
                "requirement": {
                    "name": "Gen. Ed. E-1B (ENG 102)",
                    "maximum_credits": 3.0,
                    "minimum_credits": 3.0,
                    "required": 1,
                    "id": "2186e401-be07-4580-b601-a081b2e248d7",
                    "parent_id": null,
                    "type": "DegreeRequirement",
                    "advanced": false,
                    "subrequirements": [
                        {
                            "name": "ENG 102 - Research, Writing, & Rhetoric",
                            "attempts": 1,
                            "minimum_grade": "C",
                            "id": "a44272fe-4448-4eb1-983b-975dc196bff9",
                            "parent_id": "2186e401-be07-4580-b601-a081b2e248d7",
                            "credits": 3.0,
                            "course": {
                                "maximum_credits": 3.0,
                                "minimum_credits": 3.0,
                                "created_at": "2019-09-11T18:54:31.184Z",
                                "full_number": "ENG 102",
                                "code": "ENG 102",
                                "coreq": null,
                                "name": "Research, Writing, & Rhetoric",
                                "id": 1973344,
                                "updated_at": "2019-09-11T18:54:31.184Z",
                                "description": "(3) I, II. Prerequisite: ENG 101 (C) or ENG 101R (A). A writing course refining component of ENG 101/101R studying information sources and research methods; accessing, critically reading, evaluating, integrating, and documenting primary and secondary sources; utilizing information technology for inquiry, analysis, and argumentation. Credit will not be awarded for both ENG 102 and ENG 102R. Gen. Ed. E-1B [WC].",
                                "prereq": {
                                    "operands": [
                                        {
                                            "minimum_course_grade": "C",
                                            "concurrency_ind": false,
                                            "course": {
                                                "name": "Reading, Writing, & Rhetoric",
                                                "maximum_credits": 3.0,
                                                "minimum_credits": 3.0,
                                                "id": 1973342,
                                                "full_name": "ENG 101 - Reading, Writing, & Rhetoric",
                                                "full_number": "ENG 101",
                                                "code": "ENG 101"
                                            },
                                            "type": "course"
                                        },
                                        {
                                            "minimum_course_grade": "C",
                                            "concurrency_ind": false,
                                            "course": {
                                                "name": "Rding Wrting & Rhtrc Support",
                                                "maximum_credits": 4.0,
                                                "minimum_credits": 4.0,
                                                "id": 1973343,
                                                "full_name": "ENG 101R - Rding Wrting & Rhtrc Support",
                                                "full_number": "ENG 101R",
                                                "code": "ENG 101R"
                                            },
                                            "type": "course"
                                        }
                                    ],
                                    "type": "or"
                                },
                                "academic_period": {
                                    "term": "Fall",
                                    "name": "Fall 2018",
                                    "year": 2018,
                                    "id": 96,
                                    "academic_year": "2018-2019",
                                    "code": "2018.75"
                                },
                                "full_name": "ENG 102 - Research, Writing, & Rhetoric"
                            },
                            "type": "CourseRequirement",
                            "advanced": false
                        }
                    ]
                },
                "id": 12161,
                "position": 4,
                "credits": 3.0,
                "custom": false,
                "plan_item_spec": null
            },
            {
                "name": "Calculus I",
                "requirement": {
                    "name": "MAT 234 - Calculus I",
                    "attempts": 1,
                    "minimum_grade": "C",
                    "id": "e67117ba-d946-4be8-a286-823a1b7485e2",
                    "parent_id": null,
                    "credits": 4.0,
                    "course": {
                        "maximum_credits": 4.0,
                        "minimum_credits": 4.0,
                        "created_at": "2019-09-11T18:54:32.588Z",
                        "full_number": "MAT 234",
                        "code": "MAT 234",
                        "coreq": null,
                        "name": "Calculus I",
                        "id": 1973799,
                        "updated_at": "2019-09-11T18:54:32.588Z",
                        "description": "Formerly MAT 124. Prerequisite: MAT 122 with a grade of \"C\" or better, a minimum score of 27 on the mathematics portion of the ACT, or a minimum score of 640 on the mathematics portion of the SAT or a passing score on a calculus placement test. Functions, limits, and continuity, derivatives and applications, integration, and introduction to and use of the computer package Mathematica or other appropriate technology. Credit will not be awarded to students who have credit for MAT 124. Gen. Ed. E-2.",
                        "prereq": {
                            "minimum_course_grade": "C",
                            "concurrency_ind": false,
                            "course": {
                                "name": "Precalculus Mathematics",
                                "maximum_credits": 5.0,
                                "minimum_credits": 5.0,
                                "id": 1973794,
                                "full_name": "MAT 122 - Precalculus Mathematics",
                                "full_number": "MAT 122",
                                "code": "MAT 122"
                            },
                            "type": "course"
                        },
                        "academic_period": {
                            "term": "Fall",
                            "name": "Fall 2018",
                            "year": 2018,
                            "id": 96,
                            "academic_year": "2018-2019",
                            "code": "2018.75"
                        },
                        "full_name": "MAT 234 - Calculus I"
                    },
                    "type": "CourseRequirement",
                    "advanced": false
                },
                "id": 12154,
                "position": 3,
                "credits": 4.0,
                "custom": false,
                "plan_item_spec": null
            }
        ],
        "position": 1,
        "credits": 15.0
    },
    {
        "name": "Term 2",
        "plan_items": [
            {
                "name": "4 Natural Sciences",
                "requirement": {
                    "name": "4 Natural Sciences",
                    "core": {
                        "name": "4 Natural Sciences",
                        "maximum_credits": 5.0,
                        "minimum_credits": 3.0,
                        "required": 1,
                        "id": "c36a8f69-5185-4502-b95e-80ba1275d58b",
                        "parent_id": null,
                        "type": "DegreeRequirement",
                        "advanced": true,
                        "subrequirements": [
                            {
                                "name": "FMT 140 - Introduction to Fermentation",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "ac5a78c0-4884-4bcb-9ad4-df6c177ea299",
                                "parent_id": "c36a8f69-5185-4502-b95e-80ba1275d58b",
                                "credits": 4.0,
                                "course": {
                                    "maximum_credits": 4.0,
                                    "minimum_credits": 4.0,
                                    "created_at": "2019-10-07T16:31:37.301Z",
                                    "full_number": "FMT 140",
                                    "code": "FMT 140",
                                    "coreq": null,
                                    "name": "Introduction to Fermentation",
                                    "id": 1977165,
                                    "updated_at": "2019-10-07T16:31:37.301Z",
                                    "description": " ",
                                    "prereq": null,
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "FMT 140 - Introduction to Fermentation"
                                },
                                "type": "CourseRequirement",
                                "advanced": false
                            },
                            {
                                "name": "CHE 100 - Inquiry Chemistry for Teachers",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "25834a03-7b78-4048-b44c-316ee77ff9b6",
                                "parent_id": "c36a8f69-5185-4502-b95e-80ba1275d58b",
                                "credits": 3.0,
                                "course": {
                                    "maximum_credits": 3.0,
                                    "minimum_credits": 3.0,
                                    "created_at": "2019-10-07T16:28:23.752Z",
                                    "full_number": "CHE 100",
                                    "code": "CHE 100",
                                    "coreq": null,
                                    "name": "Inquiry Chemistry for Teachers",
                                    "id": 1977164,
                                    "updated_at": "2019-10-07T16:28:23.752Z",
                                    "description": " ",
                                    "prereq": null,
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "CHE 100 - Inquiry Chemistry for Teachers"
                                },
                                "type": "CourseRequirement",
                                "advanced": false
                            },
                            {
                                "name": "ANT 201 - Intro to Physical Anthropology",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "528b63fd-997e-46b4-b99f-027583b73910",
                                "parent_id": "c36a8f69-5185-4502-b95e-80ba1275d58b",
                                "credits": 0.0,
                                "course": {
                                    "maximum_credits": 3.0,
                                    "minimum_credits": 3.0,
                                    "created_at": "2019-09-11T18:54:29.331Z",
                                    "full_number": "ANT 201",
                                    "code": "ANT 201",
                                    "coreq": null,
                                    "name": "Intro to Physical Anthropology",
                                    "id": 1972735,
                                    "updated_at": "2019-11-07T21:52:38.408Z",
                                    "description": "I, II. General survey of the human biological species and its evolution, emphasizing the study of genetics, osteology, primate behavior and biology, fossil populations, and comtemporary human biological variation. 2 Lec/2 Lab. Gen. Ed. E-4A.",
                                    "prereq": null,
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "ANT 201 - Intro to Physical Anthropology"
                                },
                                "type": "CourseRequirement",
                                "advanced": false
                            },
                            {
                                "name": "PHY 201 - University Physics I",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "2e92398e-2cb5-429b-92a1-6697ad31d009",
                                "parent_id": "c36a8f69-5185-4502-b95e-80ba1275d58b",
                                "credits": 0.0,
                                "course": {
                                    "maximum_credits": 5.0,
                                    "minimum_credits": 5.0,
                                    "created_at": "2019-09-11T18:54:34.078Z",
                                    "full_number": "PHY 201",
                                    "code": "PHY 201",
                                    "coreq": null,
                                    "name": "University Physics I",
                                    "id": 1974254,
                                    "updated_at": "2019-10-30T16:15:49.761Z",
                                    "description": "I. Prerequisite: MAT 211, 234 or 234H or departmental approval.  Composition and resolution of forces, laws of equilibrium, Newton's laws of motion, work and energy, momentum, simple harmonic motion, hydrodynamics, heat phenomena.  Credit will not be awarded to students who have credit for PHY 131 and PHY 201. 6 Lec/Lab. Gen. Ed. IVB or VII (NS).",
                                    "prereq": {
                                        "operands": [
                                            {
                                                "minimum_course_grade": "C",
                                                "concurrency_ind": false,
                                                "course": {
                                                    "name": "Applied Calculus",
                                                    "maximum_credits": 3.0,
                                                    "minimum_credits": 3.0,
                                                    "id": 1973795,
                                                    "full_name": "MAT 211 - Applied Calculus",
                                                    "full_number": "MAT 211",
                                                    "code": "MAT 211"
                                                },
                                                "type": "course"
                                            },
                                            {
                                                "minimum_course_grade": "C",
                                                "concurrency_ind": false,
                                                "course": {
                                                    "name": "Calculus I",
                                                    "maximum_credits": 4.0,
                                                    "minimum_credits": 4.0,
                                                    "id": 1973799,
                                                    "full_name": "MAT 234 - Calculus I",
                                                    "full_number": "MAT 234",
                                                    "code": "MAT 234"
                                                },
                                                "type": "course"
                                            }
                                        ],
                                        "type": "or"
                                    },
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "PHY 201 - University Physics I"
                                },
                                "type": "CourseRequirement",
                                "advanced": false
                            },
                            {
                                "name": "PHY 131 - College Physics I",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "15f7451c-9c26-49b4-9f30-3d94cb765a96",
                                "parent_id": "c36a8f69-5185-4502-b95e-80ba1275d58b",
                                "credits": 0.0,
                                "course": {
                                    "maximum_credits": 5.0,
                                    "minimum_credits": 5.0,
                                    "created_at": "2019-09-11T18:54:34.071Z",
                                    "full_number": "PHY 131",
                                    "code": "PHY 131",
                                    "coreq": null,
                                    "name": "College Physics I",
                                    "id": 1974252,
                                    "updated_at": "2019-10-30T16:14:46.073Z",
                                    "description": "I, II.  Prerequisite: MAT 120 or higher or departmental approval. Alegebra and trigonometry based approach to Newtonian mechanics, including Kinematics, Newton's laws, momentum, energy, and rotation. Credit will not be awarded to students who have credit for PHY 201.  A withdrawal from PHY 131 must be matched by a withdrawal from PHY 129 if enrolled in both courses.  6 Lec/Lab.  Gen. Ed. IVB or VII (NS).",
                                    "prereq": {
                                        "minimum_course_grade": "C",
                                        "concurrency_ind": false,
                                        "course": {
                                            "name": "Trigonometry",
                                            "maximum_credits": 3.0,
                                            "minimum_credits": 3.0,
                                            "id": 1973793,
                                            "full_name": "MAT 120 - Trigonometry",
                                            "full_number": "MAT 120",
                                            "code": "MAT 120"
                                        },
                                        "type": "course"
                                    },
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "PHY 131 - College Physics I"
                                },
                                "type": "CourseRequirement",
                                "advanced": false
                            },
                            {
                                "name": "PHY 101 - Concepts of the Physical World",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "0588f0e9-f638-4829-a6df-d5b7573d2477",
                                "parent_id": "c36a8f69-5185-4502-b95e-80ba1275d58b",
                                "credits": 0.0,
                                "course": {
                                    "maximum_credits": 3.0,
                                    "minimum_credits": 3.0,
                                    "created_at": "2019-09-11T18:54:34.064Z",
                                    "full_number": "PHY 101",
                                    "code": "PHY 101",
                                    "coreq": null,
                                    "name": "Concepts of the Physical World",
                                    "id": 1974250,
                                    "updated_at": "2019-10-24T18:41:47.692Z",
                                    "description": "I, II. Prerequisite: MAT 105 or higher or departmental approval.  Conceptual approach to topics such as kinematics, Newtonian mechanics, electricity, magnetism, and optics. Not intended for science majors. Credit will not be awarded to students who have credit for PHY 102. 4 Lec/Lab. Gen. Ed. E-4.",
                                    "prereq": {
                                        "minimum_course_grade": "C",
                                        "concurrency_ind": false,
                                        "course": {
                                            "name": "Mathematics with Applications",
                                            "maximum_credits": 3.0,
                                            "minimum_credits": 3.0,
                                            "id": 1973786,
                                            "full_name": "MAT 105 - Mathematics with Applications",
                                            "full_number": "MAT 105",
                                            "code": "MAT 105"
                                        },
                                        "type": "course"
                                    },
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "PHY 101 - Concepts of the Physical World"
                                },
                                "type": "CourseRequirement",
                                "advanced": false
                            },
                            {
                                "name": "HON 317 - Honors Seminar in Natural Scie",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "5e1e1848-0139-4538-aab6-733783e219a7",
                                "parent_id": "c36a8f69-5185-4502-b95e-80ba1275d58b",
                                "credits": 3.0,
                                "course": {
                                    "maximum_credits": 3.0,
                                    "minimum_credits": 3.0,
                                    "created_at": "2019-09-11T18:54:32.318Z",
                                    "full_number": "HON 317",
                                    "code": "HON 317",
                                    "coreq": null,
                                    "name": "Honors Seminar in Natural Scie",
                                    "id": 1973715,
                                    "updated_at": "2019-09-11T18:54:32.318Z",
                                    "description": "A. Prerequisite: ENG 102, 105 (B) or HON 102 and Admission to the honors program; or departmental approval. A topics course in the natural sciences meeting the goals of the Honors Program. Credit will not be awarded for both HON 317 and HON 316W. 2 Lec./2 Lab. Honors Core. Gen Ed. E-4.",
                                    "prereq": null,
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "HON 317 - Honors Seminar in Natural Scie"
                                },
                                "type": "CourseRequirement",
                                "advanced": false
                            },
                            {
                                "name": "GLY 109 - Great Moments in Earth History",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "d33e7dd0-0212-4bb3-941a-226258df814d",
                                "parent_id": "c36a8f69-5185-4502-b95e-80ba1275d58b",
                                "credits": 3.0,
                                "course": {
                                    "maximum_credits": 3.0,
                                    "minimum_credits": 0.0,
                                    "created_at": "2019-09-11T18:54:31.746Z",
                                    "full_number": "GLY 109",
                                    "code": "GLY 109",
                                    "coreq": null,
                                    "name": "Great Moments in Earth History",
                                    "id": 1973536,
                                    "updated_at": "2019-09-11T18:54:31.746Z",
                                    "description": "I, II. Investigation of the origin of the Earth as a planet and its evolutionary development of physical and biological systems through time. Important turning points in the EarthÅ¼s history will be emphasized. 2 Lec/2 Lab. Gen. Ed. IVB or VII (NS).",
                                    "prereq": null,
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "GLY 109 - Great Moments in Earth History"
                                },
                                "type": "CourseRequirement",
                                "advanced": true
                            },
                            {
                                "name": "GLY 108 - Plate Tectonics: The Act Earth",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "bebf45a8-dc3d-49f6-b514-62d1ebdfea68",
                                "parent_id": "c36a8f69-5185-4502-b95e-80ba1275d58b",
                                "credits": 0.0,
                                "course": {
                                    "maximum_credits": 3.0,
                                    "minimum_credits": 3.0,
                                    "created_at": "2019-09-11T18:54:31.743Z",
                                    "full_number": "GLY 108",
                                    "code": "GLY 108",
                                    "coreq": null,
                                    "name": "Plate Tectonics: The Act Earth",
                                    "id": 1973535,
                                    "updated_at": "2019-10-30T17:13:53.250Z",
                                    "description": "I, II. Investigation of the Earth as it exists and functions today, the materials that compose the Earth, the processes that act upon and within the Earth, and the interrelationship of both materials and processes with human activity. 2 Lec/2 Lab. Gen. Ed. IVB or VII (NS).",
                                    "prereq": null,
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "GLY 108 - Plate Tectonics: The Act Earth"
                                },
                                "type": "CourseRequirement",
                                "advanced": false
                            },
                            {
                                "name": "GLY 104 - The World Ocean",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "6840df60-0fff-42c3-8146-a511e784feb9",
                                "parent_id": "c36a8f69-5185-4502-b95e-80ba1275d58b",
                                "credits": 3.0,
                                "course": {
                                    "maximum_credits": 3.0,
                                    "minimum_credits": 3.0,
                                    "created_at": "2019-09-11T18:54:31.740Z",
                                    "full_number": "GLY 104",
                                    "code": "GLY 104",
                                    "coreq": null,
                                    "name": "The World Ocean",
                                    "id": 1973534,
                                    "updated_at": "2019-09-11T18:54:31.740Z",
                                    "description": "(3) Formerly GLY 304. I, II. Investigation of the geologic, physical, biogeochemical, and biologic processes that occur within the oceans of the world. The course emphasizes connections between these processes, and hom those connections interact with our planet's life. 2 Lec/2 Lab. Gen Ed E-4. Credit will not be awarded to students who have credit for GLY 304.",
                                    "prereq": null,
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "GLY 104 - The World Ocean"
                                },
                                "type": "CourseRequirement",
                                "advanced": false
                            },
                            {
                                "name": "GLY 102 - Earth Sci for Elem Teachers",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "10101378-7818-4904-b737-fc1fce973ded",
                                "parent_id": "c36a8f69-5185-4502-b95e-80ba1275d58b",
                                "credits": 3.0,
                                "course": {
                                    "maximum_credits": 3.0,
                                    "minimum_credits": 3.0,
                                    "created_at": "2019-09-11T18:54:31.737Z",
                                    "full_number": "GLY 102",
                                    "code": "GLY 102",
                                    "coreq": null,
                                    "name": "Earth Sci for Elem Teachers",
                                    "id": 1973533,
                                    "updated_at": "2019-09-11T18:54:31.737Z",
                                    "description": "I, II. Prerequisite: Elementary, special education elementary, and elementary DHH education majors only or departmental approval. This inquiry-based course for elementary teachers integrates content, pedagogy and technology to explore Earth as an integrated set of systems and as part of the Solar System. 1 Lec/4 Lab. Gen. Ed. IVB or VII (NS).",
                                    "prereq": null,
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "GLY 102 - Earth Sci for Elem Teachers"
                                },
                                "type": "CourseRequirement",
                                "advanced": false
                            },
                            {
                                "name": "GEO 210 - Intro to Physical Geography",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "93f1f4ce-bc53-473f-b810-da20a7d6a3ba",
                                "parent_id": "c36a8f69-5185-4502-b95e-80ba1275d58b",
                                "credits": 3.0,
                                "course": {
                                    "maximum_credits": 3.0,
                                    "minimum_credits": 3.0,
                                    "created_at": "2019-09-11T18:54:31.702Z",
                                    "full_number": "GEO 210",
                                    "code": "GEO 210",
                                    "coreq": null,
                                    "name": "Intro to Physical Geography",
                                    "id": 1973521,
                                    "updated_at": "2019-11-27T20:50:28.068Z",
                                    "description": "A. Study of natural processes operating at the earthÅ¼s surface with special emphasis on weather and climate and landforms as explanations for how and why physical and human phenomena vary from place to place. 2 Lec/2 Lab. Gen. Ed. IVB or VII (NS).",
                                    "prereq": null,
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "GEO 210 - Intro to Physical Geography"
                                },
                                "type": "CourseRequirement",
                                "advanced": true
                            },
                            {
                                "name": "GEO 110 - Environmental Geography",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "6d2a2f01-ce21-4968-8d73-a776bbc31f05",
                                "parent_id": "c36a8f69-5185-4502-b95e-80ba1275d58b",
                                "credits": 3.0,
                                "course": {
                                    "maximum_credits": 3.0,
                                    "minimum_credits": 3.0,
                                    "created_at": "2019-09-11T18:54:31.696Z",
                                    "full_number": "GEO 110",
                                    "code": "GEO 110",
                                    "coreq": null,
                                    "name": "Environmental Geography",
                                    "id": 1973519,
                                    "updated_at": "2019-09-11T18:54:31.696Z",
                                    "description": "(3) A. Prerequisites: Freshman and Sophomore standing. A focus on ecological function and the physical and human dynamics contributing to environmental change across the globe and at various geographical scales. Environmental issues are examined through a geographical lens, and include clean air and water, energy systems, biodiversity, natural hazards, climate change, and food production. 2Lec/2Lab. Gen. Ed. E-4.",
                                    "prereq": null,
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "GEO 110 - Environmental Geography"
                                },
                                "type": "CourseRequirement",
                                "advanced": false
                            },
                            {
                                "name": "CHE 111/111L",
                                "maximum_credits": 4.0,
                                "minimum_credits": 4.0,
                                "required": 2,
                                "id": "626e7917-0079-4bee-8622-d2c3c64d0c71",
                                "parent_id": "c36a8f69-5185-4502-b95e-80ba1275d58b",
                                "type": "DegreeRequirement",
                                "advanced": false,
                                "subrequirements": [
                                    {
                                        "name": "CHE 111L - General Chemistry Lab I",
                                        "attempts": 1,
                                        "minimum_grade": "C",
                                        "id": "729e9086-89eb-4817-b341-1081089ecaaf",
                                        "parent_id": "626e7917-0079-4bee-8622-d2c3c64d0c71",
                                        "credits": 1.0,
                                        "course": {
                                            "maximum_credits": 1.0,
                                            "minimum_credits": 1.0,
                                            "created_at": "2019-09-11T18:54:30.083Z",
                                            "full_number": "CHE 111L",
                                            "code": "CHE 111L",
                                            "coreq": {
                                                "course": {
                                                    "name": "General Chemistry I",
                                                    "maximum_credits": 3.0,
                                                    "minimum_credits": 3.0,
                                                    "id": 1973019,
                                                    "full_name": "CHE 111 - General Chemistry I",
                                                    "full_number": "CHE 111",
                                                    "code": "CHE 111"
                                                },
                                                "type": "course"
                                            },
                                            "name": "General Chemistry Lab I",
                                            "id": 1973020,
                                            "updated_at": "2019-10-30T15:44:29.671Z",
                                            "description": "I, II.  Formerly CHE 115.  Prerequisite or Corequisite: CHE 111.  Laboratory component of CHE 111.  Basic laboratory techniques, methods of separation, types of chemical reactions, solution preparation and standardization, titrations, molecular modeling, qualitative analysis, gases, virtual labs on computer.  Credit will not be awarded to students who have credit for CHE 115. 3 Lab.  Gen. Ed. IVB with CHE 111.",
                                            "prereq": null,
                                            "academic_period": {
                                                "term": "Fall",
                                                "name": "Fall 2018",
                                                "year": 2018,
                                                "id": 96,
                                                "academic_year": "2018-2019",
                                                "code": "2018.75"
                                            },
                                            "full_name": "CHE 111L - General Chemistry Lab I"
                                        },
                                        "type": "CourseRequirement",
                                        "advanced": false
                                    },
                                    {
                                        "name": "CHE 111 - General Chemistry I",
                                        "attempts": 1,
                                        "minimum_grade": "C",
                                        "id": "f10a0060-597a-4f3c-a719-c503653a0250",
                                        "parent_id": "626e7917-0079-4bee-8622-d2c3c64d0c71",
                                        "credits": 3.0,
                                        "course": {
                                            "maximum_credits": 3.0,
                                            "minimum_credits": 3.0,
                                            "created_at": "2019-09-11T18:54:30.080Z",
                                            "full_number": "CHE 111",
                                            "code": "CHE 111",
                                            "coreq": null,
                                            "name": "General Chemistry I",
                                            "id": 1973019,
                                            "updated_at": "2019-09-11T18:54:30.080Z",
                                            "description": "I, II. Prerequisite or Corequisite: CHE 111L and ACT math score of 22 or higher; or SAT math score equivalent; or MAT 112B (C or better) or MAT 114 (C or better) or higher or departmental approval. Principles of atomic and molecular structure and reactivity, stoichiometry, states of matter. Prepares students for further studies in chemistry. One year of high school chemistry is recommended. A withdrawal from CHE 111 must be matched by a withdrawal from CHE 111L. Gen. Ed. VII (NS) or IVB with CHE 111L.",
                                            "prereq": null,
                                            "academic_period": {
                                                "term": "Fall",
                                                "name": "Fall 2018",
                                                "year": 2018,
                                                "id": 96,
                                                "academic_year": "2018-2019",
                                                "code": "2018.75"
                                            },
                                            "full_name": "CHE 111 - General Chemistry I"
                                        },
                                        "type": "CourseRequirement",
                                        "advanced": false
                                    }
                                ]
                            },
                            {
                                "name": "CHE 105/105L",
                                "maximum_credits": 4.0,
                                "minimum_credits": 4.0,
                                "required": 2,
                                "id": "647251e8-b445-4b4c-9258-f025a8c267e4",
                                "parent_id": "c36a8f69-5185-4502-b95e-80ba1275d58b",
                                "type": "DegreeRequirement",
                                "advanced": false,
                                "subrequirements": [
                                    {
                                        "name": "CHE 105L - Health Science CHE Lab",
                                        "attempts": 1,
                                        "minimum_grade": "C",
                                        "id": "9b3b1e1c-bde4-4804-8be5-93bffd6810b3",
                                        "parent_id": "647251e8-b445-4b4c-9258-f025a8c267e4",
                                        "credits": 1.0,
                                        "course": {
                                            "maximum_credits": 1.0,
                                            "minimum_credits": 1.0,
                                            "created_at": "2019-09-11T18:54:30.077Z",
                                            "full_number": "CHE 105L",
                                            "code": "CHE 105L",
                                            "coreq": null,
                                            "name": "Health Science CHE Lab",
                                            "id": 1973018,
                                            "updated_at": "2019-09-11T18:54:30.077Z",
                                            "description": "I, II.  Prerequisite: completion of all academic readiness requirements in English and reading; math ACT score of 19 or higher, math SAT score of 510 or higher, MAT105 or higher, or STA 215 or higher.  Prerequisite or Corequisite: CHE 105.  Laboratory experiments that demonstrate chemical concepts and laboratory techniques related to the health science profession. 2 Lab.  Gen. Ed, VII (NS) or IVB with CHE 105.",
                                            "prereq": null,
                                            "academic_period": {
                                                "term": "Fall",
                                                "name": "Fall 2018",
                                                "year": 2018,
                                                "id": 96,
                                                "academic_year": "2018-2019",
                                                "code": "2018.75"
                                            },
                                            "full_name": "CHE 105L - Health Science CHE Lab"
                                        },
                                        "type": "CourseRequirement",
                                        "advanced": false
                                    },
                                    {
                                        "name": "CHE 105 - Chemistry for Health Science",
                                        "attempts": 1,
                                        "minimum_grade": "C",
                                        "id": "89711053-6e64-4ec9-a54d-3839fb6a1629",
                                        "parent_id": "647251e8-b445-4b4c-9258-f025a8c267e4",
                                        "credits": 3.0,
                                        "course": {
                                            "maximum_credits": 3.0,
                                            "minimum_credits": 3.0,
                                            "created_at": "2019-09-11T18:54:30.075Z",
                                            "full_number": "CHE 105",
                                            "code": "CHE 105",
                                            "coreq": null,
                                            "name": "Chemistry for Health Science",
                                            "id": 1973017,
                                            "updated_at": "2019-09-11T18:54:30.075Z",
                                            "description": "I, II.  Prerequisite: completion of all academic readiness indicators in English and reading; math ACT score of 19 or higher, math SAT score of 510 or higher, MAT 105 or higher or STA 215 or higher.  Prerequisite or Corequisite: CHE 105L.  An introductory course for students in allied health.  Principles of bonding structure, and reactivity related to biological processes.  A withdrawal from CHE 105 must be matched by a withdrawal form CHE 105L.  Gen.Ed. VII (NS) or IVB with CHE 105L.",
                                            "prereq": null,
                                            "academic_period": {
                                                "term": "Fall",
                                                "name": "Fall 2018",
                                                "year": 2018,
                                                "id": 96,
                                                "academic_year": "2018-2019",
                                                "code": "2018.75"
                                            },
                                            "full_name": "CHE 105 - Chemistry for Health Science"
                                        },
                                        "type": "CourseRequirement",
                                        "advanced": false
                                    }
                                ]
                            },
                            {
                                "name": "CHE 101/101L",
                                "maximum_credits": 4.0,
                                "minimum_credits": 4.0,
                                "required": 2,
                                "id": "2d787e2f-59bd-41c2-9e11-2ee8a4a2f00a",
                                "parent_id": "c36a8f69-5185-4502-b95e-80ba1275d58b",
                                "type": "DegreeRequirement",
                                "advanced": false,
                                "subrequirements": [
                                    {
                                        "name": "CHE 101L - Introductory Chemistry Lab",
                                        "attempts": 1,
                                        "minimum_grade": "C",
                                        "id": "53750d68-7519-49b5-861c-f26b06b3de9d",
                                        "parent_id": "2d787e2f-59bd-41c2-9e11-2ee8a4a2f00a",
                                        "credits": 1.0,
                                        "course": {
                                            "maximum_credits": 1.0,
                                            "minimum_credits": 1.0,
                                            "created_at": "2019-09-11T18:54:30.064Z",
                                            "full_number": "CHE 101L",
                                            "code": "CHE 101L",
                                            "coreq": null,
                                            "name": "Introductory Chemistry Lab",
                                            "id": 1973013,
                                            "updated_at": "2019-09-11T18:54:30.064Z",
                                            "description": "I, II.  Prerequisite: completion of all developmental requirements in English and reading.  Prerequisite or Corequisite: CHE 101.  Laboratory component of CHE 101.  Basic laboratory techniques, methods of separation, types of chemical reactions, solution preparation, titrations, household chemicals, molecular modeling.  2 Lab.  Gen. Ed. IVB with CHE 101.  Credit will not be awarded for both CHE 101L and CHE 107.",
                                            "prereq": null,
                                            "academic_period": {
                                                "term": "Fall",
                                                "name": "Fall 2018",
                                                "year": 2018,
                                                "id": 96,
                                                "academic_year": "2018-2019",
                                                "code": "2018.75"
                                            },
                                            "full_name": "CHE 101L - Introductory Chemistry Lab"
                                        },
                                        "type": "CourseRequirement",
                                        "advanced": false
                                    },
                                    {
                                        "name": "CHE 101 - Introductory Chemistry",
                                        "attempts": 1,
                                        "minimum_grade": "C",
                                        "id": "250b7fea-f844-4c95-af00-9b5c74d59acc",
                                        "parent_id": "2d787e2f-59bd-41c2-9e11-2ee8a4a2f00a",
                                        "credits": 3.0,
                                        "course": {
                                            "maximum_credits": 3.0,
                                            "minimum_credits": 3.0,
                                            "created_at": "2019-09-11T18:54:30.061Z",
                                            "full_number": "CHE 101",
                                            "code": "CHE 101",
                                            "coreq": {
                                                "course": {
                                                    "name": "Introductory Chemistry Lab",
                                                    "maximum_credits": 1.0,
                                                    "minimum_credits": 1.0,
                                                    "id": 1973013,
                                                    "full_name": "CHE 101L - Introductory Chemistry Lab",
                                                    "full_number": "CHE 101L",
                                                    "code": "CHE 101L"
                                                },
                                                "type": "course"
                                            },
                                            "name": "Introductory Chemistry",
                                            "id": 1973012,
                                            "updated_at": "2019-09-11T18:54:30.061Z",
                                            "description": "I, II. Prerequisite: completion of all academic readiness requirements in English and reading; Math ACT score of 21 or higher, or Math SAT score of 530 or higher, or MAT 105 or higher. Corequisite: CHE 101L. For students who plan to take no more than one year of chemistry. Basic principles of structure and properties of matter, chemical nomenclature and reactivity. Relates chemistry concepts to everyday life phenomena. A withdrawal from CHE 101 must be matched by a withdrawal from CHE 101L. Gen. Ed. E-4 with CHE 101L [NS]",
                                            "prereq": {
                                                "type": "custom",
                                                "description": "completion of all academic readiness requirements in English and reading; Math ACT score of 21 or higher, or Math SAT score of 530 or higher, or MAT 105 or higher."
                                            },
                                            "academic_period": {
                                                "term": "Fall",
                                                "name": "Fall 2018",
                                                "year": 2018,
                                                "id": 96,
                                                "academic_year": "2018-2019",
                                                "code": "2018.75"
                                            },
                                            "full_name": "CHE 101 - Introductory Chemistry"
                                        },
                                        "type": "CourseRequirement",
                                        "advanced": false
                                    }
                                ]
                            },
                            {
                                "name": "BIO 112 - Ecology and Evolution",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "ece02ed4-896b-4bf9-848c-8a3980bf6589",
                                "parent_id": "c36a8f69-5185-4502-b95e-80ba1275d58b",
                                "credits": 0.0,
                                "course": {
                                    "maximum_credits": 4.0,
                                    "minimum_credits": 4.0,
                                    "created_at": "2019-09-11T18:54:29.748Z",
                                    "full_number": "BIO 112",
                                    "code": "BIO 112",
                                    "coreq": null,
                                    "name": "Ecology and Evolution",
                                    "id": 1972900,
                                    "updated_at": "2019-10-30T15:50:23.391Z",
                                    "description": "I, II. Prerequisite: Completion of all academic readiness requirements in English and reading; Math ACT score of 19 or higher, Math SAT score of 510 or higher, MAT 105 or higher, or STA 215 or higher. An introduction to the fundamental principles of ecology and evolution: interactions among plants, animals, microbes, and their environment, and the diversification of life through evolutionary processes. Designed for biology majors. 3 Lec/2 Lab. Gen. Ed. E-4 [NS].",
                                    "prereq": null,
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "BIO 112 - Ecology and Evolution"
                                },
                                "type": "CourseRequirement",
                                "advanced": false
                            },
                            {
                                "name": "BIO 111 - Cell and Molecular Biology",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "a631bbbe-62b1-4d64-80b8-67dabf3bf415",
                                "parent_id": "c36a8f69-5185-4502-b95e-80ba1275d58b",
                                "credits": 0.0,
                                "course": {
                                    "maximum_credits": 4.0,
                                    "minimum_credits": 4.0,
                                    "created_at": "2019-09-11T18:54:29.745Z",
                                    "full_number": "BIO 111",
                                    "code": "BIO 111",
                                    "coreq": null,
                                    "name": "Cell and Molecular Biology",
                                    "id": 1972899,
                                    "updated_at": "2019-10-30T15:40:28.258Z",
                                    "description": "(4) I, II. Prerequisites: completion of all developmental requirements. An introduction to fundamental principles of cell and molecular biology as they apply to plants, animals; and microbes; the molecular basis of life, cellular structure and function, genetic and molecular biology. Designed for biology majors. Credit will not be awarded for both BIO 111 and BIO 121. 3 Lec/2 Lab. Gen. Ed. E4.",
                                    "prereq": null,
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "BIO 111 - Cell and Molecular Biology"
                                },
                                "type": "CourseRequirement",
                                "advanced": false
                            },
                            {
                                "name": "BIO 102 - Inquiry Biology for Teachers",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "08d00a7b-21a5-4781-83d2-355fba735bcd",
                                "parent_id": "c36a8f69-5185-4502-b95e-80ba1275d58b",
                                "credits": 3.0,
                                "course": {
                                    "maximum_credits": 3.0,
                                    "minimum_credits": 3.0,
                                    "created_at": "2019-09-11T18:54:29.742Z",
                                    "full_number": "BIO 102",
                                    "code": "BIO 102",
                                    "coreq": null,
                                    "name": "Inquiry Biology for Teachers",
                                    "id": 1972898,
                                    "updated_at": "2019-09-11T18:54:29.742Z",
                                    "description": "I, II. Prerequisites: completion of all academic readiness requirements in English and reading; Math ACT score of 19 or higher, Math SAT score of 510 or higher, MAT 105 or higher; pre-teaching or teaching elementary, and middle school, special education, and DHH majors only, or departmental approval. An inquiry-based, conceptual-approach biological sciences course for teaching majors. Topics include the nature of science, cell biology, biodiversity, inheritance, ecology and ecosystems, evolution and adaptation. May not be used to satisfy area, major, or minor requirements. Credit will not be awarded to students who have credit for BIO 100 or 101. 2 Lec/2 Lab. Gen. Ed. E-4 [NS]",
                                    "prereq": null,
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "BIO 102 - Inquiry Biology for Teachers"
                                },
                                "type": "CourseRequirement",
                                "advanced": false
                            },
                            {
                                "name": "BIO 101 - Essentials of Biology",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "9949ef61-2f46-4598-86b3-0f280417966e",
                                "parent_id": "c36a8f69-5185-4502-b95e-80ba1275d58b",
                                "credits": 3.0,
                                "course": {
                                    "maximum_credits": 3.0,
                                    "minimum_credits": 0.0,
                                    "created_at": "2019-09-11T18:54:29.740Z",
                                    "full_number": "BIO 101",
                                    "code": "BIO 101",
                                    "coreq": null,
                                    "name": "Essentials of Biology",
                                    "id": 1972897,
                                    "updated_at": "2019-09-11T18:54:29.740Z",
                                    "description": "I, II.  ONLINE ONLY. Prerequisite: Completion of all academic readiness requirements in English and reading; MAT ACT score of 19 or higher, MAT SAT score of 510 or higher, MAT 105 or higher, or STA 215 or higher. Biological principles and applications as relates to life on earth from the molecular to ecosphere scale; current topics in genetics, evolution, ecology, plant and animal diversity, and human biology will be discussed. May not be used to satisfy area, major, or minor requirements. Credit will not be awarded to students who have credit for BIO 100 or 102. 2 Lec/2 Lab. Gen. Ed. E-4 [NS].",
                                    "prereq": null,
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "BIO 101 - Essentials of Biology"
                                },
                                "type": "CourseRequirement",
                                "advanced": true
                            },
                            {
                                "name": "BIO 100 - Introductory Biology",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "6d8c03be-1052-43c4-bfac-71aaa6683860",
                                "parent_id": "c36a8f69-5185-4502-b95e-80ba1275d58b",
                                "credits": 3.0,
                                "course": {
                                    "maximum_credits": 3.0,
                                    "minimum_credits": 3.0,
                                    "created_at": "2019-09-11T18:54:29.737Z",
                                    "full_number": "BIO 100",
                                    "code": "BIO 100",
                                    "coreq": null,
                                    "name": "Introductory Biology",
                                    "id": 1972896,
                                    "updated_at": "2019-11-12T22:24:17.368Z",
                                    "description": "I, II. Prerequisite: Completion of all academic readiness requirements in English and reading; MAT ACT score of 19 or higher, MAT SAT score of 510 or higher, MA T105 or higher, or STA 215 or higher. The course will deal with introductory principles of biology that are fundamental to an individualÂ’s knowledge as it pertains to the interrelationships of organisms in the natural world. Topics to be addressed: cellular basis of life, metabolism, genetics, biological diversity, reproduction, evolution, ecology, and environmental biology. May not be used to satisfy area, major, or minor requirements. Credit will not be awarded to students who have credit for BIO 101 or 102. 2 Lec/2 Lab. Gen. Ed. E-4 [NS]",
                                    "prereq": null,
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "BIO 100 - Introductory Biology"
                                },
                                "type": "CourseRequirement",
                                "advanced": true
                            },
                            {
                                "name": "AST 335 - Stars, Galaxies & Cosmology",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "5357f19a-dd84-48b5-8474-3e3481138fd7",
                                "parent_id": "c36a8f69-5185-4502-b95e-80ba1275d58b",
                                "credits": 3.0,
                                "course": {
                                    "maximum_credits": 3.0,
                                    "minimum_credits": 3.0,
                                    "created_at": "2019-09-11T18:54:29.543Z",
                                    "full_number": "AST 335",
                                    "code": "AST 335",
                                    "coreq": null,
                                    "name": "Stars, Galaxies & Cosmology",
                                    "id": 1972822,
                                    "updated_at": "2019-09-11T18:54:29.543Z",
                                    "description": "(3) A. Prerequisite: MAT 105 or higher or ACT mathematics subscore of 20 or higher or departmental approval; and ENG 102 or ENG 105(B) or HON 102. A survey course describing the origin and evolution of stars, including black holes, galaxies, and the Universe. We will demonstrate how observations, models and quantitative analysis with graphs lead to the current state of knowledge. Credit will not awarded for both AST 335 and AST 330. 4 Lec/Lab. Gen. Ed. E-4.",
                                    "prereq": {
                                        "operands": [
                                            {
                                                "minimum_course_grade": "C",
                                                "concurrency_ind": false,
                                                "course": {
                                                    "name": "Mathematics with Applications",
                                                    "maximum_credits": 3.0,
                                                    "minimum_credits": 3.0,
                                                    "id": 1973786,
                                                    "full_name": "MAT 105 - Mathematics with Applications",
                                                    "full_number": "MAT 105",
                                                    "code": "MAT 105"
                                                },
                                                "type": "course"
                                            },
                                            {
                                                "operands": [
                                                    {
                                                        "minimum_course_grade": "C",
                                                        "concurrency_ind": false,
                                                        "course": {
                                                            "name": "Research, Writing, & Rhetoric",
                                                            "maximum_credits": 3.0,
                                                            "minimum_credits": 3.0,
                                                            "id": 1973344,
                                                            "full_name": "ENG 102 - Research, Writing, & Rhetoric",
                                                            "full_number": "ENG 102",
                                                            "code": "ENG 102"
                                                        },
                                                        "type": "course"
                                                    },
                                                    {
                                                        "minimum_course_grade": "C",
                                                        "concurrency_ind": false,
                                                        "course": {
                                                            "name": "First Year Writing Seminar",
                                                            "maximum_credits": 3.0,
                                                            "minimum_credits": 3.0,
                                                            "id": 1977160,
                                                            "full_name": "ENG 105 - First Year Writing Seminar",
                                                            "full_number": "ENG 105",
                                                            "code": "ENG 105"
                                                        },
                                                        "type": "course"
                                                    },
                                                    {
                                                        "minimum_course_grade": "C",
                                                        "concurrency_ind": false,
                                                        "course": {
                                                            "name": "Honors Rhetoric",
                                                            "maximum_credits": 6.0,
                                                            "minimum_credits": 6.0,
                                                            "id": 1973709,
                                                            "full_name": "HON 102 - Honors Rhetoric",
                                                            "full_number": "HON 102",
                                                            "code": "HON 102"
                                                        },
                                                        "type": "course"
                                                    }
                                                ],
                                                "type": "or"
                                            }
                                        ],
                                        "type": "and"
                                    },
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "AST 335 - Stars, Galaxies & Cosmology"
                                },
                                "type": "CourseRequirement",
                                "advanced": false
                            },
                            {
                                "name": "AST 135 - Introductory Astronomy",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "06c45233-be3d-4fdf-ad14-95e97abb89e4",
                                "parent_id": "c36a8f69-5185-4502-b95e-80ba1275d58b",
                                "credits": 3.0,
                                "course": {
                                    "maximum_credits": 3.0,
                                    "minimum_credits": 0.0,
                                    "created_at": "2019-09-11T18:54:29.541Z",
                                    "full_number": "AST 135",
                                    "code": "AST 135",
                                    "coreq": null,
                                    "name": "Introductory Astronomy",
                                    "id": 1972821,
                                    "updated_at": "2019-09-11T18:54:29.541Z",
                                    "description": "I, II. Prerequisite: MAT 105 or higher, or ACT mathematics subscore of 20 or higher, or departmental approval. Conceptual survey course; topics include backyard astronomy, motion of the Moon and stars, the use of light in astronomy, telescopes, the Solar System, and the Sun. Credit will not be awarded to students who have credit for AST 130. 2 Lec/2 Lab. Gen. Ed. E-4B.",
                                    "prereq": {
                                        "minimum_course_grade": "C",
                                        "concurrency_ind": false,
                                        "course": {
                                            "name": "Mathematics with Applications",
                                            "maximum_credits": 3.0,
                                            "minimum_credits": 3.0,
                                            "id": 1973786,
                                            "full_name": "MAT 105 - Mathematics with Applications",
                                            "full_number": "MAT 105",
                                            "code": "MAT 105"
                                        },
                                        "type": "course"
                                    },
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "AST 135 - Introductory Astronomy"
                                },
                                "type": "CourseRequirement",
                                "advanced": true
                            },
                            {
                                "name": "AST 133 - Astronomy Transition Lab",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "d063ba1a-e6c7-48d3-95d9-4f609c82349f",
                                "parent_id": "c36a8f69-5185-4502-b95e-80ba1275d58b",
                                "credits": 1.0,
                                "course": {
                                    "maximum_credits": 1.0,
                                    "minimum_credits": 1.0,
                                    "created_at": "2019-09-11T18:54:29.538Z",
                                    "full_number": "AST 133",
                                    "code": "AST 133",
                                    "coreq": null,
                                    "name": "Astronomy Transition Lab",
                                    "id": 1972820,
                                    "updated_at": "2019-09-11T18:54:29.538Z",
                                    "description": "(1) I,II. Prerequisite: AST 130 or departmental approval. A transition laboratory that will allow students with credit for AST 130 to gain credit for a laboratory science course that is equivalent to AST 135. 2 Lab. Gen. Ed. E4B [NS].",
                                    "prereq": null,
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "AST 133 - Astronomy Transition Lab"
                                },
                                "type": "CourseRequirement",
                                "advanced": false
                            }
                        ]
                    },
                    "id": "e72a0b67-3f9b-4027-b9af-ae9ed9073205",
                    "parent_id": null,
                    "type": "CoreRequirement"
                },
                "id": 12156,
                "position": 5,
                "credits": 3.0,
                "custom": false,
                "plan_item_spec": null
            },
            {
                "name": "CSC 174 or 190",
                "requirement": {
                    "name": "CSC 174 or 190",
                    "maximum_credits": 3.0,
                    "minimum_credits": 3.0,
                    "required": 1,
                    "id": "6063599a-581d-4793-a164-a3d3eeb366e6",
                    "parent_id": null,
                    "type": "DegreeRequirement",
                    "advanced": false,
                    "subrequirements": [
                        {
                            "name": "CSC 190 - Object-Oriented Programming I",
                            "attempts": 1,
                            "minimum_grade": "C",
                            "id": "7db95f40-df60-4255-a24c-f11a5bf6e326",
                            "parent_id": "6063599a-581d-4793-a164-a3d3eeb366e6",
                            "credits": 3.0,
                            "course": {
                                "maximum_credits": 3.0,
                                "minimum_credits": 3.0,
                                "created_at": "2019-09-11T18:54:30.659Z",
                                "full_number": "CSC 190",
                                "code": "CSC 190",
                                "coreq": null,
                                "name": "Object-Oriented Programming I",
                                "id": 1973155,
                                "updated_at": "2019-11-13T20:18:00.543Z",
                                "description": "I, II. Prerequisite: MAT 122 or higher with a grade of \"C\" or higher, a minimum of 25 on the mathematics portion of the ACT or a minimum of 590 on the mathematics portion of the SAT. Introduction to problem solving with computers using an object-oriented programming language. Concepts include data types, input/output, classes, control structures, and arrays. 3 Lec/2 Lab. Gen. Ed. VII (QS).",
                                "prereq": {
                                    "minimum_course_grade": "C",
                                    "concurrency_ind": false,
                                    "course": {
                                        "name": "Precalculus Mathematics",
                                        "maximum_credits": 5.0,
                                        "minimum_credits": 5.0,
                                        "id": 1973794,
                                        "full_name": "MAT 122 - Precalculus Mathematics",
                                        "full_number": "MAT 122",
                                        "code": "MAT 122"
                                    },
                                    "type": "course"
                                },
                                "academic_period": {
                                    "term": "Fall",
                                    "name": "Fall 2018",
                                    "year": 2018,
                                    "id": 96,
                                    "academic_year": "2018-2019",
                                    "code": "2018.75"
                                },
                                "full_name": "CSC 190 - Object-Oriented Programming I"
                            },
                            "type": "CourseRequirement",
                            "advanced": false
                        },
                        {
                            "name": "CSC 174 - Introduction to Programming for Science & Engineering",
                            "attempts": 1,
                            "minimum_grade": "C",
                            "id": "0ad94639-0532-40b6-b4b3-b37e7faca966",
                            "parent_id": "6063599a-581d-4793-a164-a3d3eeb366e6",
                            "credits": 3.0,
                            "course": {
                                "maximum_credits": 3.0,
                                "minimum_credits": 3.0,
                                "created_at": "2019-11-11T22:22:47.762Z",
                                "full_number": "CSC 174",
                                "code": "CSC 174",
                                "coreq": null,
                                "name": "Introduction to Programming for Science & Engineering",
                                "id": 1977221,
                                "updated_at": "2019-11-11T22:22:47.762Z",
                                "description": "Prerequisite: MAT 122 or higher with a grade of â€œCâ€ or higher, or a minimum score of 25 on the mathematics portion of the ACT, or a minimum score of 590 on the math portion of the SAT. Introductory programming for scientific and engineering applications, input/output, decision, loops, arrays, subroutines, functions, files and simulation",
                                "prereq": {
                                    "minimum_course_grade": "C",
                                    "concurrency_ind": false,
                                    "course": {
                                        "name": "Algebra: Polynomials",
                                        "maximum_credits": 3.0,
                                        "minimum_credits": 3.0,
                                        "id": 1973788,
                                        "full_name": "MAT 112A - Algebra: Polynomials",
                                        "full_number": "MAT 112A",
                                        "code": "MAT 112A"
                                    },
                                    "type": "course"
                                },
                                "academic_period": {
                                    "term": "Fall",
                                    "name": "Fall 2018",
                                    "year": 2018,
                                    "id": 96,
                                    "academic_year": "2018-2019",
                                    "code": "2018.75"
                                },
                                "full_name": "CSC 174 - Introduction to Programming for Science & Engineering"
                            },
                            "type": "CourseRequirement",
                            "advanced": false
                        }
                    ]
                },
                "id": 12166,
                "position": 0,
                "credits": 3.0,
                "custom": false,
                "plan_item_spec": null
            },
            {
                "name": "University Physics I",
                "requirement": {
                    "name": "PHY 201 - University Physics I",
                    "attempts": 1,
                    "minimum_grade": "C",
                    "id": "c1de19f9-42aa-4ea7-8dca-7db43ec3879c",
                    "parent_id": null,
                    "credits": 5.0,
                    "course": {
                        "maximum_credits": 5.0,
                        "minimum_credits": 5.0,
                        "created_at": "2019-09-11T18:54:34.078Z",
                        "full_number": "PHY 201",
                        "code": "PHY 201",
                        "coreq": null,
                        "name": "University Physics I",
                        "id": 1974254,
                        "updated_at": "2019-10-30T16:15:49.761Z",
                        "description": "I. Prerequisite: MAT 211, 234 or 234H or departmental approval.  Composition and resolution of forces, laws of equilibrium, Newton's laws of motion, work and energy, momentum, simple harmonic motion, hydrodynamics, heat phenomena.  Credit will not be awarded to students who have credit for PHY 131 and PHY 201. 6 Lec/Lab. Gen. Ed. IVB or VII (NS).",
                        "prereq": {
                            "operands": [
                                {
                                    "minimum_course_grade": "C",
                                    "concurrency_ind": false,
                                    "course": {
                                        "name": "Applied Calculus",
                                        "maximum_credits": 3.0,
                                        "minimum_credits": 3.0,
                                        "id": 1973795,
                                        "full_name": "MAT 211 - Applied Calculus",
                                        "full_number": "MAT 211",
                                        "code": "MAT 211"
                                    },
                                    "type": "course"
                                },
                                {
                                    "minimum_course_grade": "C",
                                    "concurrency_ind": false,
                                    "course": {
                                        "name": "Calculus I",
                                        "maximum_credits": 4.0,
                                        "minimum_credits": 4.0,
                                        "id": 1973799,
                                        "full_name": "MAT 234 - Calculus I",
                                        "full_number": "MAT 234",
                                        "code": "MAT 234"
                                    },
                                    "type": "course"
                                }
                            ],
                            "type": "or"
                        },
                        "academic_period": {
                            "term": "Fall",
                            "name": "Fall 2018",
                            "year": 2018,
                            "id": 96,
                            "academic_year": "2018-2019",
                            "code": "2018.75"
                        },
                        "full_name": "PHY 201 - University Physics I"
                    },
                    "type": "CourseRequirement",
                    "advanced": false
                },
                "id": 12160,
                "position": 3,
                "credits": 5.0,
                "custom": false,
                "plan_item_spec": null
            },
            {
                "name": "Calculus II",
                "requirement": {
                    "name": "MAT 244 - Calculus II",
                    "attempts": 1,
                    "minimum_grade": "C",
                    "id": "15291b36-052f-49d3-a7f8-057fd5eea92c",
                    "parent_id": null,
                    "credits": 4.0,
                    "course": {
                        "maximum_credits": 4.0,
                        "minimum_credits": 4.0,
                        "created_at": "2019-09-11T18:54:32.594Z",
                        "full_number": "MAT 244",
                        "code": "MAT 244",
                        "coreq": null,
                        "name": "Calculus II",
                        "id": 1973801,
                        "updated_at": "2019-09-11T18:54:32.594Z",
                        "description": "I, II. Formerly MAT 224. Prerequisite: MAT 234, or 234H with minimum grade of \"C\" or better. Fundamental integration techniques, numerical integration, applications of integration, improper integrals, differential equations, infinite series, polar and parametric equations, and use of Mathematica or other appropriate technology. Credit will not be awarded to students who have credit for MAT 224, 224H, or 244N.",
                        "prereq": {
                            "minimum_course_grade": "C",
                            "concurrency_ind": false,
                            "course": {
                                "name": "Calculus I",
                                "maximum_credits": 4.0,
                                "minimum_credits": 4.0,
                                "id": 1973799,
                                "full_name": "MAT 234 - Calculus I",
                                "full_number": "MAT 234",
                                "code": "MAT 234"
                            },
                            "type": "course"
                        },
                        "academic_period": {
                            "term": "Fall",
                            "name": "Fall 2018",
                            "year": 2018,
                            "id": 96,
                            "academic_year": "2018-2019",
                            "code": "2018.75"
                        },
                        "full_name": "MAT 244 - Calculus II"
                    },
                    "type": "CourseRequirement",
                    "advanced": false
                },
                "id": 12159,
                "position": 2,
                "credits": 4.0,
                "custom": false,
                "plan_item_spec": null
            }
        ],
        "position": 2,
        "credits": 15.0
    },
    {
        "name": "Term 3",
        "plan_items": [
            {
                "name": "Calculus III",
                "requirement": {
                    "name": "MAT 254 - Calculus III",
                    "attempts": 1,
                    "minimum_grade": "C",
                    "id": "6f5b77ed-7ac0-412a-bfbf-59a3c0769da5",
                    "parent_id": null,
                    "credits": 4.0,
                    "course": {
                        "maximum_credits": 4.0,
                        "minimum_credits": 4.0,
                        "created_at": "2019-09-11T18:54:32.597Z",
                        "full_number": "MAT 254",
                        "code": "MAT 254",
                        "coreq": null,
                        "name": "Calculus III",
                        "id": 1973802,
                        "updated_at": "2019-09-11T18:54:32.597Z",
                        "description": "I, II. Formerly: MAT 225. Prerequisite: MAT 244 with a minimum grade of \"C\" or better. Functions of several variables, limits and continuity, partial derivatives, multiple integrals, vector calculus including Green's, Divergence, and Stoke's theorems, cylindrical and spherical coordinates and use of Mathematica. Credit will not be awarded to students who have credit for MAT 225, 225H.",
                        "prereq": {
                            "minimum_course_grade": "C",
                            "concurrency_ind": false,
                            "course": {
                                "name": "Calculus II",
                                "maximum_credits": 4.0,
                                "minimum_credits": 4.0,
                                "id": 1973801,
                                "full_name": "MAT 244 - Calculus II",
                                "full_number": "MAT 244",
                                "code": "MAT 244"
                            },
                            "type": "course"
                        },
                        "academic_period": {
                            "term": "Fall",
                            "name": "Fall 2018",
                            "year": 2018,
                            "id": 96,
                            "academic_year": "2018-2019",
                            "code": "2018.75"
                        },
                        "full_name": "MAT 254 - Calculus III"
                    },
                    "type": "CourseRequirement",
                    "advanced": false
                },
                "id": 12162,
                "position": 0,
                "credits": 4.0,
                "custom": false,
                "plan_item_spec": null
            },
            {
                "name": "5A Historical Perspectives ",
                "requirement": {
                    "name": "5A Historical Perspectives ",
                    "core": {
                        "name": "5A Historical Perspectives ",
                        "maximum_credits": 3.0,
                        "minimum_credits": 3.0,
                        "required": 1,
                        "id": "961bd74b-92ab-46a1-b354-1696e239a5f6",
                        "parent_id": null,
                        "type": "DegreeRequirement",
                        "advanced": false,
                        "subrequirements": [
                            {
                                "name": "POL 212 - Intro to Comparative Politics",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "46a0caef-825c-49da-b90b-6a86c34c3ad0",
                                "parent_id": "961bd74b-92ab-46a1-b354-1696e239a5f6",
                                "credits": 3.0,
                                "course": {
                                    "maximum_credits": 3.0,
                                    "minimum_credits": 3.0,
                                    "created_at": "2019-09-11T18:54:34.155Z",
                                    "full_number": "POL 212",
                                    "code": "POL 212",
                                    "coreq": null,
                                    "name": "Intro to Comparative Politics",
                                    "id": 1974276,
                                    "updated_at": "2019-09-11T18:54:34.155Z",
                                    "description": "I, II. A study of the purpose, concepts, and methods used in the cross-national study of politics and government with a focus on selected countries. Gen. Ed. VB or VC or VII (SBS). [SB] E-5A or E-5B.",
                                    "prereq": null,
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "POL 212 - Intro to Comparative Politics"
                                },
                                "type": "CourseRequirement",
                                "advanced": false
                            },
                            {
                                "name": "POL 101 - Intro to American Government",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "b7b7c245-02c0-42b1-a4ab-871a103c6464",
                                "parent_id": "961bd74b-92ab-46a1-b354-1696e239a5f6",
                                "credits": 3.0,
                                "course": {
                                    "maximum_credits": 3.0,
                                    "minimum_credits": 3.0,
                                    "created_at": "2019-09-11T18:54:34.152Z",
                                    "full_number": "POL 101",
                                    "code": "POL 101",
                                    "coreq": null,
                                    "name": "Intro to American Government",
                                    "id": 1974275,
                                    "updated_at": "2019-09-11T18:54:34.152Z",
                                    "description": "I, II. Principles, functions, and basic political institutions of the American system of government at the national level. Gen. Ed. VB, VC, or VII (SBS). [SB] E-5A, E-5B. Credit will not be awared for both POL 101 and POL 101S.",
                                    "prereq": null,
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "POL 101 - Intro to American Government"
                                },
                                "type": "CourseRequirement",
                                "advanced": false
                            },
                            {
                                "name": "MSL 303 - American Military History",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "36c092f6-a2c2-4e5f-97d6-040b8be97ac8",
                                "parent_id": "961bd74b-92ab-46a1-b354-1696e239a5f6",
                                "credits": 3.0,
                                "course": {
                                    "maximum_credits": 3.0,
                                    "minimum_credits": 3.0,
                                    "created_at": "2019-09-11T18:54:32.866Z",
                                    "full_number": "MSL 303",
                                    "code": "MSL 303",
                                    "coreq": null,
                                    "name": "American Military History",
                                    "id": 1973886,
                                    "updated_at": "2019-09-11T18:54:32.866Z",
                                    "description": "I. Prerequisite: ENG 102 or ENG 105(B) or HON 102. Examines U.S. Military History from pre-revolutionary times to Global War on Terrorism, Applies the THreads of Continuity model, defines the (9) principles of war; (5) forms of maneuver, analyzes the political-economic-technological-social impacts on the military. Develops leadership through individual/group contribution participation in case studies, classroom presentations, book report, battle analysis, and battlefield staff ride/museum tour. Gen Ed Element 5A-History.",
                                    "prereq": null,
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "MSL 303 - American Military History"
                                },
                                "type": "CourseRequirement",
                                "advanced": false
                            },
                            {
                                "name": "HON 310W - Seminar in History",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "952269d8-6904-46d2-bdf4-fe4bf3e65c44",
                                "parent_id": "961bd74b-92ab-46a1-b354-1696e239a5f6",
                                "credits": 3.0,
                                "course": {
                                    "maximum_credits": 3.0,
                                    "minimum_credits": 3.0,
                                    "created_at": "2019-09-11T18:54:32.312Z",
                                    "full_number": "HON 310W",
                                    "code": "HON 310W",
                                    "coreq": null,
                                    "name": "Seminar in History",
                                    "id": 1973713,
                                    "updated_at": "2019-09-11T18:54:32.312Z",
                                    "description": "A. Prerequisite: ENG 102 or 105(B) or HON 102 and admission to the Honors Program; or departmental approval. A topics course in history meeting the goals of the Honors Program. May be retaken with different topics to a maximum of six hours. Honors Core. Gen Ed. Element 5A.",
                                    "prereq": null,
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "HON 310W - Seminar in History"
                                },
                                "type": "CourseRequirement",
                                "advanced": false
                            },
                            {
                                "name": "HIS 204W - Women in the Ancient World",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "77831313-0341-4cdf-9119-a26994487cae",
                                "parent_id": "961bd74b-92ab-46a1-b354-1696e239a5f6",
                                "credits": 3.0,
                                "course": {
                                    "maximum_credits": 3.0,
                                    "minimum_credits": 3.0,
                                    "created_at": "2019-10-08T19:02:36.243Z",
                                    "full_number": "HIS 204W",
                                    "code": "HIS 204W",
                                    "coreq": null,
                                    "name": "Women in the Ancient World",
                                    "id": 1977166,
                                    "updated_at": "2019-10-08T19:02:36.243Z",
                                    "description": " ",
                                    "prereq": {
                                        "operands": [
                                            {
                                                "minimum_course_grade": "C",
                                                "concurrency_ind": false,
                                                "course": {
                                                    "name": "Research, Writing, & Rhetoric",
                                                    "maximum_credits": 3.0,
                                                    "minimum_credits": 3.0,
                                                    "id": 1973344,
                                                    "full_name": "ENG 102 - Research, Writing, & Rhetoric",
                                                    "full_number": "ENG 102",
                                                    "code": "ENG 102"
                                                },
                                                "type": "course"
                                            },
                                            {
                                                "minimum_course_grade": "C",
                                                "concurrency_ind": false,
                                                "course": {
                                                    "name": "First Year Writing Seminar",
                                                    "maximum_credits": 3.0,
                                                    "minimum_credits": 3.0,
                                                    "id": 1977159,
                                                    "full_name": "ENG 105 - First Year Writing Seminar",
                                                    "full_number": "ENG 105",
                                                    "code": "ENG 105"
                                                },
                                                "type": "course"
                                            },
                                            {
                                                "minimum_course_grade": "C",
                                                "concurrency_ind": false,
                                                "course": {
                                                    "name": "Honors Rhetoric",
                                                    "maximum_credits": 6.0,
                                                    "minimum_credits": 6.0,
                                                    "id": 1973709,
                                                    "full_name": "HON 102 - Honors Rhetoric",
                                                    "full_number": "HON 102",
                                                    "code": "HON 102"
                                                },
                                                "type": "course"
                                            }
                                        ],
                                        "type": "and"
                                    },
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "HIS 204W - Women in the Ancient World"
                                },
                                "type": "CourseRequirement",
                                "advanced": false
                            },
                            {
                                "name": "HIS 103 - American Civ Since 1877",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "56c69b23-8390-43a8-b8fc-cc20f69cea01",
                                "parent_id": "961bd74b-92ab-46a1-b354-1696e239a5f6",
                                "credits": 3.0,
                                "course": {
                                    "maximum_credits": 3.0,
                                    "minimum_credits": 3.0,
                                    "created_at": "2019-09-11T18:54:32.146Z",
                                    "full_number": "HIS 103",
                                    "code": "HIS 103",
                                    "coreq": null,
                                    "name": "American Civ Since 1877",
                                    "id": 1973661,
                                    "updated_at": "2019-09-11T18:54:32.146Z",
                                    "description": "(3) A. Formerly: HIS 203. Conflicts between demands of an industrial society and agrarian values; interrelationships between world expressions and American exprience. Required of all majors and minors in history. Credit will not be awarded to students who have credit for HIS 203. Gen-Ed E-5A.",
                                    "prereq": null,
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "HIS 103 - American Civ Since 1877"
                                },
                                "type": "CourseRequirement",
                                "advanced": false
                            },
                            {
                                "name": "HIS 102 - American Civilization to 1877",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "f2b14091-d905-4a94-bf56-92ea9c9a2b88",
                                "parent_id": "961bd74b-92ab-46a1-b354-1696e239a5f6",
                                "credits": 3.0,
                                "course": {
                                    "maximum_credits": 3.0,
                                    "minimum_credits": 3.0,
                                    "created_at": "2019-09-11T18:54:32.143Z",
                                    "full_number": "HIS 102",
                                    "code": "HIS 102",
                                    "coreq": null,
                                    "name": "American Civilization to 1877",
                                    "id": 1973660,
                                    "updated_at": "2019-09-11T18:54:32.143Z",
                                    "description": "(3) A. Formerly: HIS 202. Transition from colonial to independent republic; social, cultural, and economic instutitons derived from agrarian conditions; the influence of European foundations. Reuqired of all majors and minors in history. Credit will not be awarded to students who have credit for HIS 202. Gen. Ed. E-5A.",
                                    "prereq": null,
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "HIS 102 - American Civilization to 1877"
                                },
                                "type": "CourseRequirement",
                                "advanced": false
                            },
                            {
                                "name": "HIS 101 - World Topics Since 1500:______",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "334d7ac4-ef12-471b-9ed5-c82f46017198",
                                "parent_id": "961bd74b-92ab-46a1-b354-1696e239a5f6",
                                "credits": 3.0,
                                "course": {
                                    "maximum_credits": 3.0,
                                    "minimum_credits": 3.0,
                                    "created_at": "2019-09-11T18:54:32.139Z",
                                    "full_number": "HIS 101",
                                    "code": "HIS 101",
                                    "coreq": null,
                                    "name": "World Topics Since 1500:______",
                                    "id": 1973659,
                                    "updated_at": "2019-09-11T18:54:32.139Z",
                                    "description": "(3) A. Introductory exploration of a broad regional or thematic topic in world history since 1500. Credit will not be awarded to students who have credit for HIS 147, 232, or 247. Limited to three credit hours. Gen. Ed. E-5A.",
                                    "prereq": null,
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "HIS 101 - World Topics Since 1500:______"
                                },
                                "type": "CourseRequirement",
                                "advanced": false
                            },
                            {
                                "name": "HIS 100 - World Topics to 1500:_______",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "f8fbea43-73da-4fba-8a1b-6340c3898a22",
                                "parent_id": "961bd74b-92ab-46a1-b354-1696e239a5f6",
                                "credits": 3.0,
                                "course": {
                                    "maximum_credits": 3.0,
                                    "minimum_credits": 3.0,
                                    "created_at": "2019-09-11T18:54:32.136Z",
                                    "full_number": "HIS 100",
                                    "code": "HIS 100",
                                    "coreq": null,
                                    "name": "World Topics to 1500:_______",
                                    "id": 1973658,
                                    "updated_at": "2019-09-11T18:54:32.136Z",
                                    "description": "(3) A. Introductory exploration of a broad regional or thematic topic in world history prior to 1500. Credit will not be awarded to students who have credit for HIS 231 or 246. Limit to three credit hours. Gen. Ed. A-5A.",
                                    "prereq": null,
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "HIS 100 - World Topics to 1500:_______"
                                },
                                "type": "CourseRequirement",
                                "advanced": false
                            },
                            {
                                "name": "ANT 200 - Anthropology of Human Society",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "cac88e11-3346-4472-92ee-ccccf5a0fccf",
                                "parent_id": "961bd74b-92ab-46a1-b354-1696e239a5f6",
                                "credits": 3.0,
                                "course": {
                                    "maximum_credits": 3.0,
                                    "minimum_credits": 3.0,
                                    "created_at": "2019-09-11T18:54:29.328Z",
                                    "full_number": "ANT 200",
                                    "code": "ANT 200",
                                    "coreq": null,
                                    "name": "Anthropology of Human Society",
                                    "id": 1972734,
                                    "updated_at": "2019-09-11T18:54:29.328Z",
                                    "description": "A. Anthropology of human cultures through time and over space, using archaeological and ethnographic methods to understand the multifaceted study of cultural change.Gen. Ed. VA, VC, or VII (SBS).",
                                    "prereq": null,
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "ANT 200 - Anthropology of Human Society"
                                },
                                "type": "CourseRequirement",
                                "advanced": false
                            },
                            {
                                "name": "HIS 147 - World Civilizations Since 1500",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "1eedf845-4d9f-4253-918f-253f2eee6d67",
                                "parent_id": "961bd74b-92ab-46a1-b354-1696e239a5f6",
                                "credits": 3.0,
                                "course": {
                                    "maximum_credits": 3.0,
                                    "minimum_credits": 3.0,
                                    "created_at": "2019-11-11T18:20:00.603Z",
                                    "full_number": "HIS 147",
                                    "code": "HIS 147",
                                    "coreq": null,
                                    "name": "World Civilizations Since 1500",
                                    "id": 1977194,
                                    "updated_at": "2019-11-22T00:17:36.851Z",
                                    "description": "Formerly HIS 247. Analyzes patterns of historical\nchange and interaction in various world civilizations\nduring the modern period. Credit will not be awarded to\nstudents who have credit for HIS 101 or 247. Gen. Ed.\nE-5A [SB].",
                                    "prereq": null,
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "HIS 147 - World Civilizations Since 1500"
                                },
                                "type": "CourseRequirement",
                                "advanced": false
                            }
                        ]
                    },
                    "id": "46eb3fe4-632b-4864-97cb-42b85e9ff450",
                    "parent_id": null,
                    "type": "CoreRequirement"
                },
                "id": 12172,
                "position": 2,
                "credits": 3.0,
                "custom": false,
                "plan_item_spec": null
            },
            {
                "name": "University Physics II",
                "requirement": {
                    "name": "PHY 202 - University Physics II",
                    "attempts": 1,
                    "minimum_grade": "C",
                    "id": "d39a36d1-0abf-4113-af73-8613bccdddb5",
                    "parent_id": null,
                    "credits": 5.0,
                    "course": {
                        "maximum_credits": 5.0,
                        "minimum_credits": 5.0,
                        "created_at": "2019-09-11T18:54:34.081Z",
                        "full_number": "PHY 202",
                        "code": "PHY 202",
                        "coreq": null,
                        "name": "University Physics II",
                        "id": 1974255,
                        "updated_at": "2019-10-30T17:13:35.068Z",
                        "description": "II.  Prerequisite: PHY 201 with a grade of \"C\" or better.  Prerequisite or Corequisite: MAT 244 or 244H or departmental approval.  Electrostatics, electric potential, dielectrics, A.C. and D.C. circuits, magnetic fields, Faraday's Law, sound, wave motion, geometrical and physical optics.  Credit will not be awarded to students who have credit for PHY 132. 6 Lec/Lab.",
                        "prereq": {
                            "operands": [
                                {
                                    "minimum_course_grade": "C",
                                    "concurrency_ind": false,
                                    "course": {
                                        "name": "University Physics I",
                                        "maximum_credits": 5.0,
                                        "minimum_credits": 5.0,
                                        "id": 1974254,
                                        "full_name": "PHY 201 - University Physics I",
                                        "full_number": "PHY 201",
                                        "code": "PHY 201"
                                    },
                                    "type": "course"
                                },
                                {
                                    "minimum_course_grade": "C",
                                    "concurrency_ind": true,
                                    "course": {
                                        "name": "Calculus II",
                                        "maximum_credits": 4.0,
                                        "minimum_credits": 4.0,
                                        "id": 1973801,
                                        "full_name": "MAT 244 - Calculus II",
                                        "full_number": "MAT 244",
                                        "code": "MAT 244"
                                    },
                                    "type": "course"
                                }
                            ],
                            "type": "and"
                        },
                        "academic_period": {
                            "term": "Fall",
                            "name": "Fall 2018",
                            "year": 2018,
                            "id": 96,
                            "academic_year": "2018-2019",
                            "code": "2018.75"
                        },
                        "full_name": "PHY 202 - University Physics II"
                    },
                    "type": "CourseRequirement",
                    "advanced": false
                },
                "id": 12164,
                "position": 2,
                "credits": 5.0,
                "custom": false,
                "plan_item_spec": null
            }
        ],
        "position": 3,
        "credits": 12.0
    },
    {
        "name": "Term 4",
        "plan_items": [
            {
                "name": "Advanced Physics Laboratory.",
                "requirement": {
                    "name": "PHY 406W - Advanced Physics Laboratory.",
                    "attempts": 1,
                    "minimum_grade": "C",
                    "id": "962a2f19-d360-4c28-9a79-504485f6b29a",
                    "parent_id": null,
                    "credits": 3.0,
                    "course": {
                        "maximum_credits": 3.0,
                        "minimum_credits": 3.0,
                        "created_at": "2019-12-08T21:14:28.016Z",
                        "full_number": "PHY 406W",
                        "code": "PHY 406W",
                        "coreq": null,
                        "name": "Advanced Physics Laboratory.",
                        "id": 1978272,
                        "updated_at": "2019-12-08T21:14:28.016Z",
                        "description": "Prerequisites: ENG 102 or 102R, 105(B), or HON\n102; PHY 302 or 302W, or departmental approval.\nExperiments in mechanics, optics, electricity, and nuclear\nphysics. Computer simulations of physical situations.\nMeasurement and data analysis techniques, including\nerror analysis. Credit will not be awarded to students\nwho have credit for PHY 406. 5 Lec/Lab. ",
                        "prereq": {
                            "operands": [
                                {
                                    "operands": [
                                        {
                                            "minimum_course_grade": "C",
                                            "concurrency_ind": false,
                                            "course": {
                                                "name": "Research, Writing, & Rhetoric",
                                                "maximum_credits": 3.0,
                                                "minimum_credits": 3.0,
                                                "id": 1973344,
                                                "full_name": "ENG 102 - Research, Writing, & Rhetoric",
                                                "full_number": "ENG 102",
                                                "code": "ENG 102"
                                            },
                                            "type": "course"
                                        },
                                        {
                                            "minimum_course_grade": "C",
                                            "concurrency_ind": false,
                                            "course": {
                                                "name": "Research, Writing, & Rhetoric",
                                                "maximum_credits": 4.0,
                                                "minimum_credits": 4.0,
                                                "id": 1973345,
                                                "full_name": "ENG 102R - Research, Writing, & Rhetoric",
                                                "full_number": "ENG 102R",
                                                "code": "ENG 102R"
                                            },
                                            "type": "course"
                                        },
                                        {
                                            "minimum_course_grade": "C",
                                            "concurrency_ind": false,
                                            "course": {
                                                "name": "First Year Writing Seminar",
                                                "maximum_credits": 3.0,
                                                "minimum_credits": 3.0,
                                                "id": 1977160,
                                                "full_name": "ENG 105 - First Year Writing Seminar",
                                                "full_number": "ENG 105",
                                                "code": "ENG 105"
                                            },
                                            "type": "course"
                                        },
                                        {
                                            "minimum_course_grade": "C",
                                            "concurrency_ind": false,
                                            "course": {
                                                "name": "Honors Rhetoric",
                                                "maximum_credits": 6.0,
                                                "minimum_credits": 6.0,
                                                "id": 1973709,
                                                "full_name": "HON 102 - Honors Rhetoric",
                                                "full_number": "HON 102",
                                                "code": "HON 102"
                                            },
                                            "type": "course"
                                        }
                                    ],
                                    "type": "or"
                                },
                                {
                                    "operands": [
                                        {
                                            "minimum_course_grade": "C",
                                            "concurrency_ind": false,
                                            "course": {
                                                "name": "Modern Physics",
                                                "maximum_credits": 4.0,
                                                "minimum_credits": 4.0,
                                                "id": 1974256,
                                                "full_name": "PHY 302 - Modern Physics",
                                                "full_number": "PHY 302",
                                                "code": "PHY 302"
                                            },
                                            "type": "course"
                                        },
                                        {
                                            "minimum_course_grade": "C",
                                            "concurrency_ind": false,
                                            "course": {
                                                "name": "Modern Physics",
                                                "maximum_credits": 4.0,
                                                "minimum_credits": 4.0,
                                                "id": 1978271,
                                                "full_name": "PHY 302W - Modern Physics",
                                                "full_number": "PHY 302W",
                                                "code": "PHY 302W"
                                            },
                                            "type": "course"
                                        }
                                    ],
                                    "type": "or"
                                }
                            ],
                            "type": "and"
                        },
                        "academic_period": {
                            "term": "Fall",
                            "name": "Fall 2018",
                            "year": 2018,
                            "id": 96,
                            "academic_year": "2018-2019",
                            "code": "2018.75"
                        },
                        "full_name": "PHY 406W - Advanced Physics Laboratory."
                    },
                    "type": "CourseRequirement",
                    "advanced": false
                },
                "id": 12174,
                "position": 0,
                "credits": 3.0,
                "custom": false,
                "plan_item_spec": null
            },
            {
                "name": "Theoretical Methods in Physics",
                "requirement": {
                    "name": "PHY 310 - Theoretical Methods in Physics",
                    "attempts": 1,
                    "minimum_grade": "C",
                    "id": "40eb5f8b-88e9-4d0c-812f-5f9d403d9b89",
                    "parent_id": null,
                    "credits": 3.0,
                    "course": {
                        "maximum_credits": 3.0,
                        "minimum_credits": 3.0,
                        "created_at": "2019-09-11T18:54:34.088Z",
                        "full_number": "PHY 310",
                        "code": "PHY 310",
                        "coreq": null,
                        "name": "Theoretical Methods in Physics",
                        "id": 1974257,
                        "updated_at": "2019-09-11T18:54:34.088Z",
                        "description": "(3) A. Prerequisites: MAT 254 or 254H, or departmental approval. Prerequisite/Corequisite: PHY 202 with a grade of \"C\" or better or departmental approval. Analytical methods for characterizing physics models and solving physics problems in advanced topics are discussed, including vector analysis, linear algebra, complex analysis, infinate series, waves and Fourier series, differential equations and other techniques.",
                        "prereq": {
                            "operands": [
                                {
                                    "minimum_course_grade": "C",
                                    "concurrency_ind": false,
                                    "course": {
                                        "name": "Calculus III",
                                        "maximum_credits": 4.0,
                                        "minimum_credits": 4.0,
                                        "id": 1973802,
                                        "full_name": "MAT 254 - Calculus III",
                                        "full_number": "MAT 254",
                                        "code": "MAT 254"
                                    },
                                    "type": "course"
                                },
                                {
                                    "minimum_course_grade": "C",
                                    "concurrency_ind": false,
                                    "course": {
                                        "name": "University Physics II",
                                        "maximum_credits": 5.0,
                                        "minimum_credits": 5.0,
                                        "id": 1974255,
                                        "full_name": "PHY 202 - University Physics II",
                                        "full_number": "PHY 202",
                                        "code": "PHY 202"
                                    },
                                    "type": "course"
                                }
                            ],
                            "type": "and"
                        },
                        "academic_period": {
                            "term": "Fall",
                            "name": "Fall 2018",
                            "year": 2018,
                            "id": 96,
                            "academic_year": "2018-2019",
                            "code": "2018.75"
                        },
                        "full_name": "PHY 310 - Theoretical Methods in Physics"
                    },
                    "type": "CourseRequirement",
                    "advanced": false
                },
                "id": 12171,
                "position": 1,
                "credits": 3.0,
                "custom": false,
                "plan_item_spec": null
            },
            {
                "name": "300+ Level PHY Elective",
                "requirement": {
                    "name": "300+ Level PHY Elective",
                    "maximum_credits": 3.0,
                    "minimum_credits": 3.0,
                    "minimum_grade": null,
                    "id": "9eb2ebff-dde0-4797-8e66-82c754f7cef9",
                    "parent_id": null,
                    "rules": [
                        {
                            "requirement_id": "9eb2ebff-dde0-4797-8e66-82c754f7cef9",
                            "max_hours": "",
                            "exclude": false,
                            "code_string": "PHY",
                            "minimum_match_number": "300",
                            "min_hours": "",
                            "id": "f1712325-1786-4ae7-a8ce-c7502ed96cdd",
                            "match_string": "",
                            "maximum_match_number": ""
                        }
                    ],
                    "type": "WildCardRequirement"
                },
                "id": 12173,
                "position": 3,
                "credits": 3.0,
                "custom": false,
                "plan_item_spec": null
            },
            {
                "name": "Differential Equations.",
                "requirement": {
                    "name": "MAT 353 - Differential Equations.",
                    "attempts": 1,
                    "minimum_grade": "C",
                    "id": "3e356e1c-a5cf-4a62-b514-b0f57193e5cc",
                    "parent_id": null,
                    "credits": 3.0,
                    "course": {
                        "maximum_credits": 3.0,
                        "minimum_credits": 3.0,
                        "created_at": "2019-09-11T18:54:32.616Z",
                        "full_number": "MAT 353",
                        "code": "MAT 353",
                        "coreq": null,
                        "name": "Differential Equations.",
                        "id": 1973808,
                        "updated_at": "2019-09-11T18:54:32.616Z",
                        "description": "A. Prerequisite: MAT 224 or 224H with a minimum grade of Å¼C.Å¼ Differential equations of first order, applications, singular solutions, linear equations with constant coefficients, miscellaneous methods for equations of higher order, solution in series, total differential equations, qualitative methods, systems of linear differential equations, the computer algebra systems.",
                        "prereq": {
                            "minimum_course_grade": "C",
                            "concurrency_ind": false,
                            "course": {
                                "name": "Calculus II",
                                "maximum_credits": 4.0,
                                "minimum_credits": 4.0,
                                "id": 1973801,
                                "full_name": "MAT 244 - Calculus II",
                                "full_number": "MAT 244",
                                "code": "MAT 244"
                            },
                            "type": "course"
                        },
                        "academic_period": {
                            "term": "Fall",
                            "name": "Fall 2018",
                            "year": 2018,
                            "id": 96,
                            "academic_year": "2018-2019",
                            "code": "2018.75"
                        },
                        "full_name": "MAT 353 - Differential Equations."
                    },
                    "type": "CourseRequirement",
                    "advanced": false
                },
                "id": 12163,
                "position": 1,
                "credits": 3.0,
                "custom": false,
                "plan_item_spec": null
            },
            {
                "name": "Intermediate Physics",
                "requirement": {
                    "name": "PHY 211 - Intermediate Physics",
                    "attempts": 1,
                    "minimum_grade": "C",
                    "id": "48646c15-d778-449d-8afd-6b8f29d17631",
                    "parent_id": null,
                    "credits": 4.0,
                    "course": {
                        "maximum_credits": 4.0,
                        "minimum_credits": 4.0,
                        "created_at": "2019-12-08T00:31:37.745Z",
                        "full_number": "PHY 211",
                        "code": "PHY 211",
                        "coreq": null,
                        "name": "Intermediate Physics",
                        "id": 1978270,
                        "updated_at": "2019-12-08T00:31:37.745Z",
                        "description": "Prerequisites: PHY 201 with a grade of â€œCâ€ or better\nor PHY 131 with a grade of â€œBâ€ or better; MAT 234 or\n234H; or departmental approval. Applications of calculus\nto physical principles. Topics include fluid mechanics,\nthermodynamics, and wave optics",
                        "prereq": {
                            "operands": [
                                {
                                    "minimum_course_grade": "C",
                                    "concurrency_ind": false,
                                    "course": {
                                        "name": "University Physics I",
                                        "maximum_credits": 5.0,
                                        "minimum_credits": 5.0,
                                        "id": 1974254,
                                        "full_name": "PHY 201 - University Physics I",
                                        "full_number": "PHY 201",
                                        "code": "PHY 201"
                                    },
                                    "type": "course"
                                },
                                {
                                    "minimum_course_grade": "C",
                                    "concurrency_ind": false,
                                    "course": {
                                        "name": "College Physics I",
                                        "maximum_credits": 5.0,
                                        "minimum_credits": 5.0,
                                        "id": 1974252,
                                        "full_name": "PHY 131 - College Physics I",
                                        "full_number": "PHY 131",
                                        "code": "PHY 131"
                                    },
                                    "type": "course"
                                },
                                {
                                    "minimum_course_grade": "C",
                                    "concurrency_ind": false,
                                    "course": {
                                        "name": "Calculus I",
                                        "maximum_credits": 4.0,
                                        "minimum_credits": 4.0,
                                        "id": 1973799,
                                        "full_name": "MAT 234 - Calculus I",
                                        "full_number": "MAT 234",
                                        "code": "MAT 234"
                                    },
                                    "type": "course"
                                }
                            ],
                            "type": "or"
                        },
                        "academic_period": {
                            "term": "Fall",
                            "name": "Fall 2018",
                            "year": 2018,
                            "id": 96,
                            "academic_year": "2018-2019",
                            "code": "2018.75"
                        },
                        "full_name": "PHY 211 - Intermediate Physics"
                    },
                    "type": "CourseRequirement",
                    "advanced": false
                },
                "id": 12167,
                "position": 1,
                "credits": 4.0,
                "custom": false,
                "plan_item_spec": null
            }
        ],
        "position": 4,
        "credits": 16.0
    },
    {
        "name": "Term 5",
        "plan_items": [
            {
                "name": "Stdt Success Sem-Physics",
                "requirement": {
                    "name": "SCO 100P - Stdt Success Sem-Physics",
                    "attempts": 1,
                    "minimum_grade": "C",
                    "id": "f2c12728-90fa-488a-ab52-096ad207f89f",
                    "parent_id": null,
                    "credits": 1.0,
                    "course": {
                        "maximum_credits": 1.0,
                        "minimum_credits": 1.0,
                        "created_at": "2019-09-11T18:54:34.705Z",
                        "full_number": "SCO 100P",
                        "code": "SCO 100P",
                        "coreq": null,
                        "name": "Stdt Success Sem-Physics",
                        "id": 1974430,
                        "updated_at": "2019-09-11T18:54:34.705Z",
                        "description": "I, II. Prerequisite: Physics majors only. An introduction to the programs of the University and College of Science, specifically for Physics majors. Discussion of how to study, what to consider in choosing a profession and what career opportunities exist for graduates from the CollegeÂ’s programs. Additional topics include University regulations and calendar, catalog details, registration, and program requirements. All new students are expected to enroll in a Student Success Seminar their first semester at the University.",
                        "prereq": null,
                        "academic_period": {
                            "term": "Fall",
                            "name": "Fall 2018",
                            "year": 2018,
                            "id": 96,
                            "academic_year": "2018-2019",
                            "code": "2018.75"
                        },
                        "full_name": "SCO 100P - Stdt Success Sem-Physics"
                    },
                    "type": "CourseRequirement",
                    "advanced": false
                },
                "id": 12151,
                "position": 0,
                "credits": 1.0,
                "custom": false,
                "plan_item_spec": null
            },
            {
                "name": "General Chemistry II",
                "requirement": {
                    "name": "CHE 112 - General Chemistry II",
                    "attempts": 1,
                    "minimum_grade": "C",
                    "id": "f53fea08-9866-477d-b77c-3f495a856588",
                    "parent_id": null,
                    "credits": 3.0,
                    "course": {
                        "maximum_credits": 3.0,
                        "minimum_credits": 3.0,
                        "created_at": "2019-09-11T18:54:30.086Z",
                        "full_number": "CHE 112",
                        "code": "CHE 112",
                        "coreq": null,
                        "name": "General Chemistry II",
                        "id": 1973021,
                        "updated_at": "2019-10-30T15:49:00.436Z",
                        "description": "I, II.  Prerequisite: CHE 111 and 111L with a grade of \"C\" or better.  Prerequisite or Corequisite: CHE 112L or CHE 112HL with a grade of \"C\" or better.  Continuation of CHE 111.  Kinetics and equilibrium, solution chemistry, energy changes in chemical reactions, descriptive inogranic chemistry.  Prepares students for further studies in chemistry.  A withdrawal from CHE 112 must be matched by a withdrawal from CHE 112L or CHE 112HL.  Gen. Ed. VII (NS) or IVB with CHE 112L or CHE 112HL.",
                        "prereq": {
                            "operands": [
                                {
                                    "minimum_course_grade": "C",
                                    "concurrency_ind": false,
                                    "course": {
                                        "name": "General Chemistry I",
                                        "maximum_credits": 3.0,
                                        "minimum_credits": 3.0,
                                        "id": 1973019,
                                        "full_name": "CHE 111 - General Chemistry I",
                                        "full_number": "CHE 111",
                                        "code": "CHE 111"
                                    },
                                    "type": "course"
                                },
                                {
                                    "minimum_course_grade": "C",
                                    "concurrency_ind": false,
                                    "course": {
                                        "name": "General Chemistry Lab I",
                                        "maximum_credits": 1.0,
                                        "minimum_credits": 1.0,
                                        "id": 1973020,
                                        "full_name": "CHE 111L - General Chemistry Lab I",
                                        "full_number": "CHE 111L",
                                        "code": "CHE 111L"
                                    },
                                    "type": "course"
                                }
                            ],
                            "type": "and"
                        },
                        "academic_period": {
                            "term": "Fall",
                            "name": "Fall 2018",
                            "year": 2018,
                            "id": 96,
                            "academic_year": "2018-2019",
                            "code": "2018.75"
                        },
                        "full_name": "CHE 112 - General Chemistry II"
                    },
                    "type": "CourseRequirement",
                    "advanced": false
                },
                "id": 12157,
                "position": 0,
                "credits": 3.0,
                "custom": false,
                "plan_item_spec": null
            },
            {
                "name": "300+ Level Elective",
                "requirement": {
                    "name": "300+ Level Elective",
                    "maximum_credits": 3.0,
                    "minimum_credits": 3.0,
                    "minimum_grade": null,
                    "id": "6202737e-b45b-4346-91c8-58aab66a1b8b",
                    "parent_id": null,
                    "rules": [
                        {
                            "requirement_id": "6202737e-b45b-4346-91c8-58aab66a1b8b",
                            "max_hours": "",
                            "exclude": false,
                            "code_string": "",
                            "minimum_match_number": "300",
                            "min_hours": "",
                            "id": "c1249414-725d-4d83-8bc5-02817d8d83ea",
                            "match_string": "",
                            "maximum_match_number": ""
                        }
                    ],
                    "type": "WildCardRequirement"
                },
                "id": 12182,
                "position": 3,
                "credits": 3.0,
                "custom": false,
                "plan_item_spec": null
            },
            {
                "name": "300+ Level Elective",
                "requirement": {
                    "name": "300+ Level Elective",
                    "maximum_credits": 3.0,
                    "minimum_credits": 3.0,
                    "minimum_grade": null,
                    "id": "fe2ba929-1d45-4c0f-baf3-fb1bd4887e11",
                    "parent_id": null,
                    "rules": [
                        {
                            "requirement_id": "fe2ba929-1d45-4c0f-baf3-fb1bd4887e11",
                            "max_hours": "",
                            "exclude": false,
                            "code_string": "",
                            "minimum_match_number": "300",
                            "min_hours": "",
                            "id": "533b83e2-3196-4aaf-ae29-2bb1008b40f5",
                            "match_string": "",
                            "maximum_match_number": ""
                        }
                    ],
                    "type": "WildCardRequirement"
                },
                "id": 12183,
                "position": 4,
                "credits": 3.0,
                "custom": false,
                "plan_item_spec": null
            },
            {
                "name": "300+ Level Elective",
                "requirement": {
                    "name": "300+ Level Elective",
                    "maximum_credits": 3.0,
                    "minimum_credits": 3.0,
                    "minimum_grade": null,
                    "id": "a45c9a25-28d0-4c2e-b4ad-f04d227c8a45",
                    "parent_id": null,
                    "rules": [
                        {
                            "requirement_id": "a45c9a25-28d0-4c2e-b4ad-f04d227c8a45",
                            "max_hours": "",
                            "exclude": false,
                            "code_string": "",
                            "minimum_match_number": "300",
                            "min_hours": "",
                            "id": "24d06b7c-d526-4898-9c68-3bfe981683ea",
                            "match_string": "",
                            "maximum_match_number": ""
                        }
                    ],
                    "type": "WildCardRequirement"
                },
                "id": 12186,
                "position": 2,
                "credits": 3.0,
                "custom": false,
                "plan_item_spec": null
            },
            {
                "name": "Classical Mechanics. ",
                "requirement": {
                    "name": "PHY 460 - Classical Mechanics. ",
                    "attempts": 1,
                    "minimum_grade": "C",
                    "id": "30d8f003-cefc-4d0b-88d1-483edfcba355",
                    "parent_id": null,
                    "credits": 4.0,
                    "course": {
                        "maximum_credits": 4.0,
                        "minimum_credits": 4.0,
                        "created_at": "2019-12-08T21:17:36.007Z",
                        "full_number": "PHY 460",
                        "code": "PHY 460",
                        "coreq": null,
                        "name": "Classical Mechanics. ",
                        "id": 1978273,
                        "updated_at": "2019-12-08T21:17:36.007Z",
                        "description": "Prerequisite: PHY 310 with a grade of â€œCâ€ or better or\ndepartmental approval. Prerequisite/Corequisite: MAT\n353. Applications of calculus to the principles of classical\nmechanics. Topics include rectilinear motion in 1-D,\nmotion in 3-D, non-inertial frames, central forces, manybodied systems, rigid bodies, Lagrangian mechanics, and\nother topics related to classical mechanics",
                        "prereq": {
                            "operands": [
                                {
                                    "minimum_course_grade": "C",
                                    "concurrency_ind": false,
                                    "course": {
                                        "name": "Theoretical Methods in Physics",
                                        "maximum_credits": 3.0,
                                        "minimum_credits": 3.0,
                                        "id": 1974257,
                                        "full_name": "PHY 310 - Theoretical Methods in Physics",
                                        "full_number": "PHY 310",
                                        "code": "PHY 310"
                                    },
                                    "type": "course"
                                },
                                {
                                    "minimum_course_grade": "C",
                                    "concurrency_ind": false,
                                    "course": {
                                        "name": "Differential Equations.",
                                        "maximum_credits": 3.0,
                                        "minimum_credits": 3.0,
                                        "id": 1973808,
                                        "full_name": "MAT 353 - Differential Equations.",
                                        "full_number": "MAT 353",
                                        "code": "MAT 353"
                                    },
                                    "type": "course"
                                }
                            ],
                            "type": "and"
                        },
                        "academic_period": {
                            "term": "Fall",
                            "name": "Fall 2018",
                            "year": 2018,
                            "id": 96,
                            "academic_year": "2018-2019",
                            "code": "2018.75"
                        },
                        "full_name": "PHY 460 - Classical Mechanics. "
                    },
                    "type": "CourseRequirement",
                    "advanced": false
                },
                "id": 12175,
                "position": 1,
                "credits": 4.0,
                "custom": false,
                "plan_item_spec": null
            },
            {
                "name": "General Chemistry Lab II",
                "requirement": {
                    "name": "CHE 112L - General Chemistry Lab II",
                    "attempts": 1,
                    "minimum_grade": "C",
                    "id": "c38ebc6b-bd13-47f6-bc2e-95cc839715ac",
                    "parent_id": null,
                    "credits": 1.0,
                    "course": {
                        "maximum_credits": 1.0,
                        "minimum_credits": 1.0,
                        "created_at": "2019-09-11T18:54:30.089Z",
                        "full_number": "CHE 112L",
                        "code": "CHE 112L",
                        "coreq": null,
                        "name": "General Chemistry Lab II",
                        "id": 1973022,
                        "updated_at": "2019-10-30T15:48:52.851Z",
                        "description": "I, II.  Formerly CHE 116.  Prerequisites: CHE 111 and 111L with a grade of \"C\" or better.   Prerequisite or Corequisite: CHE 112 with a grade of \"C\" or better. Laboratory component of CHE 112.  Kinetics, equilibrium, UV-VIS spectroscopy, introductory qualitative and quantitative analysis, electrochemistry, virtual labs on computer.  Credit will not be awarded to students who have credit for CHE 116.  3 Lab.  Gen. Ed. IVB with CHE 112.",
                        "prereq": {
                            "operands": [
                                {
                                    "minimum_course_grade": "C",
                                    "concurrency_ind": false,
                                    "course": {
                                        "name": "General Chemistry I",
                                        "maximum_credits": 3.0,
                                        "minimum_credits": 3.0,
                                        "id": 1973019,
                                        "full_name": "CHE 111 - General Chemistry I",
                                        "full_number": "CHE 111",
                                        "code": "CHE 111"
                                    },
                                    "type": "course"
                                },
                                {
                                    "minimum_course_grade": "C",
                                    "concurrency_ind": false,
                                    "course": {
                                        "name": "General Chemistry Lab I",
                                        "maximum_credits": 1.0,
                                        "minimum_credits": 1.0,
                                        "id": 1973020,
                                        "full_name": "CHE 111L - General Chemistry Lab I",
                                        "full_number": "CHE 111L",
                                        "code": "CHE 111L"
                                    },
                                    "type": "course"
                                },
                                {
                                    "minimum_course_grade": "C",
                                    "concurrency_ind": true,
                                    "course": {
                                        "name": "General Chemistry II",
                                        "maximum_credits": 3.0,
                                        "minimum_credits": 3.0,
                                        "id": 1973021,
                                        "full_name": "CHE 112 - General Chemistry II",
                                        "full_number": "CHE 112",
                                        "code": "CHE 112"
                                    },
                                    "type": "course"
                                }
                            ],
                            "type": "and"
                        },
                        "academic_period": {
                            "term": "Fall",
                            "name": "Fall 2018",
                            "year": 2018,
                            "id": 96,
                            "academic_year": "2018-2019",
                            "code": "2018.75"
                        },
                        "full_name": "CHE 112L - General Chemistry Lab II"
                    },
                    "type": "CourseRequirement",
                    "advanced": false
                },
                "id": 12158,
                "position": 1,
                "credits": 1.0,
                "custom": false,
                "plan_item_spec": null
            }
        ],
        "position": 5,
        "credits": 18.0
    },
    {
        "name": "Term 6",
        "plan_items": [
            {
                "name": " 6 Diversity of Perspectives and Experiences",
                "requirement": {
                    "name": " 6 Diversity of Perspectives and Experiences",
                    "core": {
                        "name": " 6 Diversity of Perspectives and Experiences",
                        "maximum_credits": 3.0,
                        "minimum_credits": 3.0,
                        "required": 1,
                        "id": "d1bb35b6-7e63-470c-9e7c-8cede7ee26d6",
                        "parent_id": null,
                        "type": "DegreeRequirement",
                        "advanced": false,
                        "subrequirements": [
                            {
                                "name": "AFA 201 - The African Experience",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "89313912-e810-483d-8f14-27fa95ad376f",
                                "parent_id": "d1bb35b6-7e63-470c-9e7c-8cede7ee26d6",
                                "credits": 3.0,
                                "course": {
                                    "maximum_credits": 3.0,
                                    "minimum_credits": 3.0,
                                    "created_at": "2019-09-11T18:54:29.192Z",
                                    "full_number": "AFA 201",
                                    "code": "AFA 201",
                                    "coreq": null,
                                    "name": "The African Experience",
                                    "id": 1972680,
                                    "updated_at": "2019-09-11T18:54:29.192Z",
                                    "description": "A.  Introduces students to the historical, socio-economic, cultural, and political experiences of African people in Africa and the Diaspora.  It fulfills a core requirement for African/African-American Studies. Credit will not be awarded to students who have credit for AFA 201W. Gen. Ed. Element 3B and Element 6",
                                    "prereq": null,
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "AFA 201 - The African Experience"
                                },
                                "type": "CourseRequirement",
                                "advanced": false
                            },
                            {
                                "name": "AFA 202 - The African-American Exper",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "ea801e8d-da48-4eab-adca-5aa88a50710f",
                                "parent_id": "d1bb35b6-7e63-470c-9e7c-8cede7ee26d6",
                                "credits": 3.0,
                                "course": {
                                    "maximum_credits": 3.0,
                                    "minimum_credits": 3.0,
                                    "created_at": "2019-09-11T18:54:29.197Z",
                                    "full_number": "AFA 202",
                                    "code": "AFA 202",
                                    "coreq": null,
                                    "name": "The African-American Exper",
                                    "id": 1972682,
                                    "updated_at": "2019-09-11T18:54:29.197Z",
                                    "description": "A. An overview of the historical, social, political, economic, and cultural factors that have helped shape the experiences of African Americans in the United States. It fulfills a core requirement for African/African-American Studies. Credit will not be awarded for both AFA202 and AFA202W. Gen. Ed. VII (SBS) and VIII.",
                                    "prereq": null,
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "AFA 202 - The African-American Exper"
                                },
                                "type": "CourseRequirement",
                                "advanced": false
                            },
                            {
                                "name": "HIS 205 - The Marginalized in History___",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "0272e811-740d-4c9f-a463-6984498fe277",
                                "parent_id": "d1bb35b6-7e63-470c-9e7c-8cede7ee26d6",
                                "credits": 3.0,
                                "course": {
                                    "maximum_credits": 3.0,
                                    "minimum_credits": 3.0,
                                    "created_at": "2019-09-11T18:54:32.149Z",
                                    "full_number": "HIS 205",
                                    "code": "HIS 205",
                                    "coreq": null,
                                    "name": "The Marginalized in History___",
                                    "id": 1973662,
                                    "updated_at": "2019-09-11T18:54:32.149Z",
                                    "description": "(3). A. Introductory exploration of the experiences of specific historically marginalized groups or cultures. May be repeated up to 6 hours as long as content varies. Gen. Ed. Element 6.",
                                    "prereq": null,
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "HIS 205 - The Marginalized in History___"
                                },
                                "type": "CourseRequirement",
                                "advanced": false
                            },
                            {
                                "name": "HEA 310 - Introduction to Global Health",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "d034c0e9-7bfb-4129-b1a7-ff894e3863ca",
                                "parent_id": "d1bb35b6-7e63-470c-9e7c-8cede7ee26d6",
                                "credits": 3.0,
                                "course": {
                                    "maximum_credits": 3.0,
                                    "minimum_credits": 3.0,
                                    "created_at": "2019-09-11T18:54:32.076Z",
                                    "full_number": "HEA 310",
                                    "code": "HEA 310",
                                    "coreq": null,
                                    "name": "Introduction to Global Health",
                                    "id": 1973638,
                                    "updated_at": "2019-09-11T18:54:32.076Z",
                                    "description": "(3) A. Prerequisite: ENG 102 or 105 or HON 102. Exploration of epidemiological, economic, political, sociological and cultural factors that impact global health with special emphasis on applying public health prinicples in developing as well as developed countires. Gen. Ed. Element 6.",
                                    "prereq": {
                                        "operands": [
                                            {
                                                "minimum_course_grade": "C",
                                                "concurrency_ind": false,
                                                "course": {
                                                    "name": "Research, Writing, & Rhetoric",
                                                    "maximum_credits": 3.0,
                                                    "minimum_credits": 3.0,
                                                    "id": 1973344,
                                                    "full_name": "ENG 102 - Research, Writing, & Rhetoric",
                                                    "full_number": "ENG 102",
                                                    "code": "ENG 102"
                                                },
                                                "type": "course"
                                            },
                                            {
                                                "minimum_course_grade": "C",
                                                "concurrency_ind": false,
                                                "course": {
                                                    "name": "First Year Writing Seminar",
                                                    "maximum_credits": 3.0,
                                                    "minimum_credits": 3.0,
                                                    "id": 1977160,
                                                    "full_name": "ENG 105 - First Year Writing Seminar",
                                                    "full_number": "ENG 105",
                                                    "code": "ENG 105"
                                                },
                                                "type": "course"
                                            },
                                            {
                                                "minimum_course_grade": "C",
                                                "concurrency_ind": false,
                                                "course": {
                                                    "name": "Honors Rhetoric",
                                                    "maximum_credits": 6.0,
                                                    "minimum_credits": 6.0,
                                                    "id": 1973709,
                                                    "full_name": "HON 102 - Honors Rhetoric",
                                                    "full_number": "HON 102",
                                                    "code": "HON 102"
                                                },
                                                "type": "course"
                                            }
                                        ],
                                        "type": "or"
                                    },
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "HEA 310 - Introduction to Global Health"
                                },
                                "type": "CourseRequirement",
                                "advanced": false
                            },
                            {
                                "name": "GER 102 - Conversational German II",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "015136f3-1636-4c8d-8c15-51650a2b93d1",
                                "parent_id": "d1bb35b6-7e63-470c-9e7c-8cede7ee26d6",
                                "credits": 3.0,
                                "course": {
                                    "maximum_credits": 3.0,
                                    "minimum_credits": 3.0,
                                    "created_at": "2019-09-11T18:54:31.734Z",
                                    "full_number": "GER 102",
                                    "code": "GER 102",
                                    "coreq": null,
                                    "name": "Conversational German II",
                                    "id": 1973532,
                                    "updated_at": "2019-09-11T18:54:31.734Z",
                                    "description": "I, II. Recommended: GER 101 or equivalent proficiency. Continuation of GER 101. (Students entering GER 102 by referral or placement receive three hours credit for GER 101 if they make an Å¼AÅ¼ in 102.) Continuing work on basic communicative skills. Taught within the context of Germanic cultures. Laboratory work required. Gen. Ed. VIII.",
                                    "prereq": {
                                        "minimum_course_grade": "C",
                                        "concurrency_ind": false,
                                        "course": {
                                            "name": "Conversational German I",
                                            "maximum_credits": 3.0,
                                            "minimum_credits": 3.0,
                                            "id": 1973531,
                                            "full_name": "GER 101 - Conversational German I",
                                            "full_number": "GER 101",
                                            "code": "GER 101"
                                        },
                                        "type": "course"
                                    },
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "GER 102 - Conversational German II"
                                },
                                "type": "CourseRequirement",
                                "advanced": false
                            },
                            {
                                "name": "GER 101 - Conversational German I",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "95fb6a03-4383-4342-b22a-1ec51cd89daa",
                                "parent_id": "d1bb35b6-7e63-470c-9e7c-8cede7ee26d6",
                                "credits": 3.0,
                                "course": {
                                    "maximum_credits": 3.0,
                                    "minimum_credits": 3.0,
                                    "created_at": "2019-09-11T18:54:31.731Z",
                                    "full_number": "GER 101",
                                    "code": "GER 101",
                                    "coreq": null,
                                    "name": "Conversational German I",
                                    "id": 1973531,
                                    "updated_at": "2019-09-11T18:54:31.731Z",
                                    "description": "I, II. Prerequisite: all required developmental reading and writing courses. Beginning German conversation, grammar, and language skills. Emphasis on speaking and listening comprehension, with introduction to basic written forms. Taught within the context of Germanic cultures. Laboratory work required. Gen. Ed. VIII.",
                                    "prereq": null,
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "GER 101 - Conversational German I"
                                },
                                "type": "CourseRequirement",
                                "advanced": false
                            },
                            {
                                "name": "FRE 102 - Conversational French II",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "6c934eb0-53ed-4318-95f4-79226b341240",
                                "parent_id": "d1bb35b6-7e63-470c-9e7c-8cede7ee26d6",
                                "credits": 3.0,
                                "course": {
                                    "maximum_credits": 3.0,
                                    "minimum_credits": 3.0,
                                    "created_at": "2019-09-11T18:54:31.591Z",
                                    "full_number": "FRE 102",
                                    "code": "FRE 102",
                                    "coreq": null,
                                    "name": "Conversational French II",
                                    "id": 1973483,
                                    "updated_at": "2019-09-11T18:54:31.591Z",
                                    "description": "I, II. Recommended: FRE 101 or equivalent proficiency. (Students entering FRE 102 by referral or placement, with two years high school French or equivalent, receive three hours credit for FRE 101 if they make an Å¼AÅ¼ in 102.) Continuing work on communicative skills and correct usage, with introduction to reading short passages on relevant French and francophone cultural topics. Laboratory work required. Gen. Ed. VIII.",
                                    "prereq": {
                                        "minimum_course_grade": "C",
                                        "concurrency_ind": false,
                                        "course": {
                                            "name": "Conversational French I",
                                            "maximum_credits": 3.0,
                                            "minimum_credits": 3.0,
                                            "id": 1973482,
                                            "full_name": "FRE 101 - Conversational French I",
                                            "full_number": "FRE 101",
                                            "code": "FRE 101"
                                        },
                                        "type": "course"
                                    },
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "FRE 102 - Conversational French II"
                                },
                                "type": "CourseRequirement",
                                "advanced": false
                            },
                            {
                                "name": "FRE 101 - Conversational French I",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "46f5db56-7d25-4ae9-b7e9-46db5f208f18",
                                "parent_id": "d1bb35b6-7e63-470c-9e7c-8cede7ee26d6",
                                "credits": 3.0,
                                "course": {
                                    "maximum_credits": 3.0,
                                    "minimum_credits": 3.0,
                                    "created_at": "2019-09-11T18:54:31.588Z",
                                    "full_number": "FRE 101",
                                    "code": "FRE 101",
                                    "coreq": null,
                                    "name": "Conversational French I",
                                    "id": 1973482,
                                    "updated_at": "2019-09-11T18:54:31.588Z",
                                    "description": "I, II. Prerequisite: all required developmental reading and writing courses. Beginning French conversation, grammar, and language skills. Emphasis on speaking and listening comprehension, with introduction to basic written forms. Taught in context of French and francophone cultures. Laboratory work required. Gen. Ed. VIII.",
                                    "prereq": null,
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "FRE 101 - Conversational French I"
                                },
                                "type": "CourseRequirement",
                                "advanced": false
                            },
                            {
                                "name": "ANT 330 - American Indians",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "f7e24c74-653d-4964-9722-e003ccc97937",
                                "parent_id": "d1bb35b6-7e63-470c-9e7c-8cede7ee26d6",
                                "credits": 3.0,
                                "course": {
                                    "maximum_credits": 3.0,
                                    "minimum_credits": 3.0,
                                    "created_at": "2019-09-11T18:54:29.333Z",
                                    "full_number": "ANT 330",
                                    "code": "ANT 330",
                                    "coreq": null,
                                    "name": "American Indians",
                                    "id": 1972736,
                                    "updated_at": "2019-09-11T18:54:29.333Z",
                                    "description": "A. Prerequisite:  ENG 102, 105(B), or HON 102. Explores the cultural diversity of American Indians by examining their historical and contemporary lives. Focus on cultural similarities and differences of American Indian groups living in ecologically diverse areas. Gen Ed Element 6.",
                                    "prereq": {
                                        "operands": [
                                            {
                                                "minimum_course_grade": "C",
                                                "concurrency_ind": false,
                                                "course": {
                                                    "name": "Research, Writing, & Rhetoric",
                                                    "maximum_credits": 3.0,
                                                    "minimum_credits": 3.0,
                                                    "id": 1973344,
                                                    "full_name": "ENG 102 - Research, Writing, & Rhetoric",
                                                    "full_number": "ENG 102",
                                                    "code": "ENG 102"
                                                },
                                                "type": "course"
                                            },
                                            {
                                                "minimum_course_grade": "C",
                                                "concurrency_ind": false,
                                                "course": {
                                                    "name": "First Year Writing Seminar",
                                                    "maximum_credits": 3.0,
                                                    "minimum_credits": 3.0,
                                                    "id": 1977160,
                                                    "full_name": "ENG 105 - First Year Writing Seminar",
                                                    "full_number": "ENG 105",
                                                    "code": "ENG 105"
                                                },
                                                "type": "course"
                                            },
                                            {
                                                "minimum_course_grade": "C",
                                                "concurrency_ind": false,
                                                "course": {
                                                    "name": "Honors Rhetoric",
                                                    "maximum_credits": 6.0,
                                                    "minimum_credits": 6.0,
                                                    "id": 1973709,
                                                    "full_name": "HON 102 - Honors Rhetoric",
                                                    "full_number": "HON 102",
                                                    "code": "HON 102"
                                                },
                                                "type": "course"
                                            }
                                        ],
                                        "type": "and"
                                    },
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "ANT 330 - American Indians"
                                },
                                "type": "CourseRequirement",
                                "advanced": false
                            },
                            {
                                "name": "LAT 101 - Beginning Latin I",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "5ce8a819-a717-490a-a4a6-6868b894371a",
                                "parent_id": "d1bb35b6-7e63-470c-9e7c-8cede7ee26d6",
                                "credits": 3.0,
                                "course": {
                                    "maximum_credits": 3.0,
                                    "minimum_credits": 3.0,
                                    "created_at": "2019-09-11T18:54:32.494Z",
                                    "full_number": "LAT 101",
                                    "code": "LAT 101",
                                    "coreq": null,
                                    "name": "Beginning Latin I",
                                    "id": 1973769,
                                    "updated_at": "2019-09-11T18:54:32.494Z",
                                    "description": "A. Study of basic inflections, syntax, pronunciation, and vocabulary necessary for the reading and progressive understanding of the Latin language. Particular attention is given to cultural topics and to the relationship of Latin to English. Gen. Ed. VIII.",
                                    "prereq": null,
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "LAT 101 - Beginning Latin I"
                                },
                                "type": "CourseRequirement",
                                "advanced": false
                            },
                            {
                                "name": "JPN 201 - Intermediate Japanese I",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "1b650a7e-83e9-4c14-b686-7c87c71bae23",
                                "parent_id": "d1bb35b6-7e63-470c-9e7c-8cede7ee26d6",
                                "credits": 3.0,
                                "course": {
                                    "maximum_credits": 3.0,
                                    "minimum_credits": 3.0,
                                    "created_at": "2019-09-11T18:54:32.451Z",
                                    "full_number": "JPN 201",
                                    "code": "JPN 201",
                                    "coreq": null,
                                    "name": "Intermediate Japanese I",
                                    "id": 1973755,
                                    "updated_at": "2019-09-11T18:54:32.451Z",
                                    "description": "A. Recommended: JPN 102 or equivalent proficiency. Continuation of JPN 102. Practice in writing kanji, reading, and speaking on cultural topics for diverse social settings requiring increasingly complex structural patterns. Students entering JPN 201 by referral or placement receive six hours credit for JPN 101 and 102 if they make an Å¼AÅ¼ or Å¼BÅ¼ in 201. Gen. Ed. VIII.",
                                    "prereq": {
                                        "minimum_course_grade": "C",
                                        "concurrency_ind": false,
                                        "course": {
                                            "name": "Conversational Japanese II",
                                            "maximum_credits": 3.0,
                                            "minimum_credits": 3.0,
                                            "id": 1973754,
                                            "full_name": "JPN 102 - Conversational Japanese II",
                                            "full_number": "JPN 102",
                                            "code": "JPN 102"
                                        },
                                        "type": "course"
                                    },
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "JPN 201 - Intermediate Japanese I"
                                },
                                "type": "CourseRequirement",
                                "advanced": false
                            },
                            {
                                "name": "ENG 365W - Appalachian Literature",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "b63aedcf-be58-40c1-9639-3e990096be86",
                                "parent_id": "d1bb35b6-7e63-470c-9e7c-8cede7ee26d6",
                                "credits": 3.0,
                                "course": {
                                    "maximum_credits": 3.0,
                                    "minimum_credits": 3.0,
                                    "created_at": "2019-09-11T18:54:31.243Z",
                                    "full_number": "ENG 365W",
                                    "code": "ENG 365W",
                                    "coreq": null,
                                    "name": "Appalachian Literature",
                                    "id": 1973365,
                                    "updated_at": "2019-09-11T18:54:31.243Z",
                                    "description": "Cross-listed as APP 365W.  Prerequisite: ENG 102 or 105(B) or HON 102.  Writing-intensive study of selected Appalachian artists, with emphasis on interdiscplinary, cultural, and aesthetic concerns raised in works by writers such as Arnow, Berry, and Still.  Credit will not be awarded to students who have credit for ENG 365, APP 365 or APP 365W.  Gen. Ed. Element 3B and 6.",
                                    "prereq": {
                                        "operands": [
                                            {
                                                "minimum_course_grade": "C",
                                                "concurrency_ind": false,
                                                "course": {
                                                    "name": "Research, Writing, & Rhetoric",
                                                    "maximum_credits": 3.0,
                                                    "minimum_credits": 3.0,
                                                    "id": 1973344,
                                                    "full_name": "ENG 102 - Research, Writing, & Rhetoric",
                                                    "full_number": "ENG 102",
                                                    "code": "ENG 102"
                                                },
                                                "type": "course"
                                            },
                                            {
                                                "minimum_course_grade": "C",
                                                "concurrency_ind": false,
                                                "course": {
                                                    "name": "First Year Writing Seminar",
                                                    "maximum_credits": 3.0,
                                                    "minimum_credits": 3.0,
                                                    "id": 1977160,
                                                    "full_name": "ENG 105 - First Year Writing Seminar",
                                                    "full_number": "ENG 105",
                                                    "code": "ENG 105"
                                                },
                                                "type": "course"
                                            },
                                            {
                                                "minimum_course_grade": "C",
                                                "concurrency_ind": false,
                                                "course": {
                                                    "name": "Honors Rhetoric",
                                                    "maximum_credits": 6.0,
                                                    "minimum_credits": 6.0,
                                                    "id": 1973709,
                                                    "full_name": "HON 102 - Honors Rhetoric",
                                                    "full_number": "HON 102",
                                                    "code": "HON 102"
                                                },
                                                "type": "course"
                                            }
                                        ],
                                        "type": "or"
                                    },
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "ENG 365W - Appalachian Literature"
                                },
                                "type": "CourseRequirement",
                                "advanced": false
                            },
                            {
                                "name": "ENG 362 - North American Native Lit.",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "0ec5f2c6-cd98-4419-ad82-c0ec36fadd52",
                                "parent_id": "d1bb35b6-7e63-470c-9e7c-8cede7ee26d6",
                                "credits": 3.0,
                                "course": {
                                    "maximum_credits": 3.0,
                                    "minimum_credits": 3.0,
                                    "created_at": "2019-09-11T18:54:31.240Z",
                                    "full_number": "ENG 362",
                                    "code": "ENG 362",
                                    "coreq": null,
                                    "name": "North American Native Lit.",
                                    "id": 1973364,
                                    "updated_at": "2019-09-11T18:54:31.240Z",
                                    "description": "A. Prerequisite: ENG 102, 105 (B), or HON 102. A study of representative literature written by North American Native authors. Gen. Ed. Element 6.",
                                    "prereq": {
                                        "operands": [
                                            {
                                                "minimum_course_grade": "C",
                                                "concurrency_ind": false,
                                                "course": {
                                                    "name": "Research, Writing, & Rhetoric",
                                                    "maximum_credits": 3.0,
                                                    "minimum_credits": 3.0,
                                                    "id": 1973344,
                                                    "full_name": "ENG 102 - Research, Writing, & Rhetoric",
                                                    "full_number": "ENG 102",
                                                    "code": "ENG 102"
                                                },
                                                "type": "course"
                                            },
                                            {
                                                "minimum_course_grade": "C",
                                                "concurrency_ind": false,
                                                "course": {
                                                    "name": "First Year Writing Seminar",
                                                    "maximum_credits": 3.0,
                                                    "minimum_credits": 3.0,
                                                    "id": 1977160,
                                                    "full_name": "ENG 105 - First Year Writing Seminar",
                                                    "full_number": "ENG 105",
                                                    "code": "ENG 105"
                                                },
                                                "type": "course"
                                            },
                                            {
                                                "minimum_course_grade": "C",
                                                "concurrency_ind": false,
                                                "course": {
                                                    "name": "Honors Rhetoric",
                                                    "maximum_credits": 6.0,
                                                    "minimum_credits": 6.0,
                                                    "id": 1973709,
                                                    "full_name": "HON 102 - Honors Rhetoric",
                                                    "full_number": "HON 102",
                                                    "code": "HON 102"
                                                },
                                                "type": "course"
                                            }
                                        ],
                                        "type": "or"
                                    },
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "ENG 362 - North American Native Lit."
                                },
                                "type": "CourseRequirement",
                                "advanced": false
                            },
                            {
                                "name": "WGS 232 - Identity and Sexuality",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "504b22f8-7626-48a0-8b3e-00d52a841d08",
                                "parent_id": "d1bb35b6-7e63-470c-9e7c-8cede7ee26d6",
                                "credits": 3.0,
                                "course": {
                                    "maximum_credits": 3.0,
                                    "minimum_credits": 3.0,
                                    "created_at": "2019-09-11T18:54:35.161Z",
                                    "full_number": "WGS 232",
                                    "code": "WGS 232",
                                    "coreq": null,
                                    "name": "Identity and Sexuality",
                                    "id": 1974556,
                                    "updated_at": "2019-09-11T18:54:35.161Z",
                                    "description": "I, II. Cross listed as CDF 232. An exploration of the changing attitudes about and among men/women and their effect on choices and interpersonal relationships. Emphasis will be on promotion and maintenance of positive mental, physical, emotional, and sexual development. Credit will not be awarded to students who have credit for CDF 232. Gen. Ed. Block VIII and Element 6.",
                                    "prereq": null,
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "WGS 232 - Identity and Sexuality"
                                },
                                "type": "CourseRequirement",
                                "advanced": false
                            },
                            {
                                "name": "CDF 232 - Identity and Sexuality",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "822eb6ee-f8a7-4145-bd5d-caf68db0e288",
                                "parent_id": "d1bb35b6-7e63-470c-9e7c-8cede7ee26d6",
                                "credits": 3.0,
                                "course": {
                                    "maximum_credits": 3.0,
                                    "minimum_credits": 3.0,
                                    "created_at": "2019-09-11T18:54:29.893Z",
                                    "full_number": "CDF 232",
                                    "code": "CDF 232",
                                    "coreq": null,
                                    "name": "Identity and Sexuality",
                                    "id": 1972957,
                                    "updated_at": "2019-09-11T18:54:29.893Z",
                                    "description": "I, II. An exploration of the changing attitudes about and among men/women and their effect on choices and interpersonal relationships. Emphasis will be on promotion and maintenance of positive mental, physical, emotional, and sexual development. Credit will not be awarded to students who have credit for WGS 232.  Gen. Ed. Block VIII, and Element 6.",
                                    "prereq": null,
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "CDF 232 - Identity and Sexuality"
                                },
                                "type": "CourseRequirement",
                                "advanced": false
                            },
                            {
                                "name": "APP 365W - Appalachian Literature",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "cb1b7c09-f7b3-4eb7-97dd-201894e09aec",
                                "parent_id": "d1bb35b6-7e63-470c-9e7c-8cede7ee26d6",
                                "credits": 3.0,
                                "course": {
                                    "maximum_credits": 3.0,
                                    "minimum_credits": 3.0,
                                    "created_at": "2019-09-11T18:54:29.351Z",
                                    "full_number": "APP 365W",
                                    "code": "APP 365W",
                                    "coreq": null,
                                    "name": "Appalachian Literature",
                                    "id": 1972743,
                                    "updated_at": "2019-09-11T18:54:29.351Z",
                                    "description": "(3) 1. Crosslisted as ENG 365W. Prerequisite: ENG 102 or 105(B) or HON 102. Writing-intensive study of selected Appalachian artists, with emphasis on interdisciplinary, cultural, and aesthetic concerns raised in works by writers such as Arnow, Berry, and Still. Credit will not be awarded to students who have credit for ENG 365, ENG 365W or APP 365. Gen. Ed. Element 3B and 6.",
                                    "prereq": {
                                        "operands": [
                                            {
                                                "minimum_course_grade": "C",
                                                "concurrency_ind": false,
                                                "course": {
                                                    "name": "Research, Writing, & Rhetoric",
                                                    "maximum_credits": 3.0,
                                                    "minimum_credits": 3.0,
                                                    "id": 1973344,
                                                    "full_name": "ENG 102 - Research, Writing, & Rhetoric",
                                                    "full_number": "ENG 102",
                                                    "code": "ENG 102"
                                                },
                                                "type": "course"
                                            },
                                            {
                                                "minimum_course_grade": "C",
                                                "concurrency_ind": false,
                                                "course": {
                                                    "name": "First Year Writing Seminar",
                                                    "maximum_credits": 3.0,
                                                    "minimum_credits": 3.0,
                                                    "id": 1977160,
                                                    "full_name": "ENG 105 - First Year Writing Seminar",
                                                    "full_number": "ENG 105",
                                                    "code": "ENG 105"
                                                },
                                                "type": "course"
                                            },
                                            {
                                                "minimum_course_grade": "C",
                                                "concurrency_ind": false,
                                                "course": {
                                                    "name": "Honors Rhetoric",
                                                    "maximum_credits": 6.0,
                                                    "minimum_credits": 6.0,
                                                    "id": 1973709,
                                                    "full_name": "HON 102 - Honors Rhetoric",
                                                    "full_number": "HON 102",
                                                    "code": "HON 102"
                                                },
                                                "type": "course"
                                            }
                                        ],
                                        "type": "or"
                                    },
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "APP 365W - Appalachian Literature"
                                },
                                "type": "CourseRequirement",
                                "advanced": false
                            },
                            {
                                "name": "APP 200 - Introduction to Appalachia",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "41e1b916-b208-4b1b-8ac4-8ab3f597ec17",
                                "parent_id": "d1bb35b6-7e63-470c-9e7c-8cede7ee26d6",
                                "credits": 3.0,
                                "course": {
                                    "maximum_credits": 3.0,
                                    "minimum_credits": 3.0,
                                    "created_at": "2019-09-11T18:54:29.346Z",
                                    "full_number": "APP 200",
                                    "code": "APP 200",
                                    "coreq": null,
                                    "name": "Introduction to Appalachia",
                                    "id": 1972741,
                                    "updated_at": "2019-09-11T18:54:29.346Z",
                                    "description": "A.  An introduction to the interdisciplinary study of the Appalachian region.  Special emphasis on the region's place in a national and global context, and on internal and external definitions of the region. Gen. Ed. VII and Element 5B and 6.",
                                    "prereq": null,
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "APP 200 - Introduction to Appalachia"
                                },
                                "type": "CourseRequirement",
                                "advanced": false
                            },
                            {
                                "name": "REL 340 - Religions of India",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "4295c0d7-5546-4488-bbf7-6cbb3f88ffdf",
                                "parent_id": "d1bb35b6-7e63-470c-9e7c-8cede7ee26d6",
                                "credits": 3.0,
                                "course": {
                                    "maximum_credits": 3.0,
                                    "minimum_credits": 3.0,
                                    "created_at": "2019-09-11T18:54:34.651Z",
                                    "full_number": "REL 340",
                                    "code": "REL 340",
                                    "coreq": null,
                                    "name": "Religions of India",
                                    "id": 1974415,
                                    "updated_at": "2019-09-11T18:54:34.651Z",
                                    "description": "A. Prerequisite: ENG 102 or 105(B) or HON 102. Study of the major religions of India including the Vedic Period, classical systems, Epic Period, heterodox systems, orthodox systems, and contemporary thought. Gen Ed. Element 6",
                                    "prereq": {
                                        "operands": [
                                            {
                                                "minimum_course_grade": "C",
                                                "concurrency_ind": false,
                                                "course": {
                                                    "name": "Research, Writing, & Rhetoric",
                                                    "maximum_credits": 3.0,
                                                    "minimum_credits": 3.0,
                                                    "id": 1973344,
                                                    "full_name": "ENG 102 - Research, Writing, & Rhetoric",
                                                    "full_number": "ENG 102",
                                                    "code": "ENG 102"
                                                },
                                                "type": "course"
                                            },
                                            {
                                                "minimum_course_grade": "C",
                                                "concurrency_ind": false,
                                                "course": {
                                                    "name": "First Year Writing Seminar",
                                                    "maximum_credits": 3.0,
                                                    "minimum_credits": 3.0,
                                                    "id": 1977160,
                                                    "full_name": "ENG 105 - First Year Writing Seminar",
                                                    "full_number": "ENG 105",
                                                    "code": "ENG 105"
                                                },
                                                "type": "course"
                                            },
                                            {
                                                "minimum_course_grade": "C",
                                                "concurrency_ind": false,
                                                "course": {
                                                    "name": "Honors Rhetoric",
                                                    "maximum_credits": 6.0,
                                                    "minimum_credits": 6.0,
                                                    "id": 1973709,
                                                    "full_name": "HON 102 - Honors Rhetoric",
                                                    "full_number": "HON 102",
                                                    "code": "HON 102"
                                                },
                                                "type": "course"
                                            }
                                        ],
                                        "type": "or"
                                    },
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "REL 340 - Religions of India"
                                },
                                "type": "CourseRequirement",
                                "advanced": false
                            },
                            {
                                "name": "WGS 201 - Intro Women & Gender Studies",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "714ecbe9-3b5e-4cee-ab7a-42aafe0d7779",
                                "parent_id": "d1bb35b6-7e63-470c-9e7c-8cede7ee26d6",
                                "credits": 3.0,
                                "course": {
                                    "maximum_credits": 3.0,
                                    "minimum_credits": 3.0,
                                    "created_at": "2019-09-11T18:54:35.158Z",
                                    "full_number": "WGS 201",
                                    "code": "WGS 201",
                                    "coreq": null,
                                    "name": "Intro Women & Gender Studies",
                                    "id": 1974555,
                                    "updated_at": "2019-09-11T18:54:35.158Z",
                                    "description": "A. Introduction to interdisciplinary field of women and gender studies and feminist scholarship. Provides overview of the diversity of womenÅ¼s experiences, images, and issues from a wide variety of disciplinary perspectives. Gen. Ed. Element 6",
                                    "prereq": null,
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "WGS 201 - Intro Women & Gender Studies"
                                },
                                "type": "CourseRequirement",
                                "advanced": false
                            },
                            {
                                "name": "VTS 200 - Intro to Veterans Studies",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "40dd6371-2c31-4d2e-a19d-d5df7fb0e02f",
                                "parent_id": "d1bb35b6-7e63-470c-9e7c-8cede7ee26d6",
                                "credits": 3.0,
                                "course": {
                                    "maximum_credits": 3.0,
                                    "minimum_credits": 3.0,
                                    "created_at": "2019-09-11T18:54:35.151Z",
                                    "full_number": "VTS 200",
                                    "code": "VTS 200",
                                    "coreq": null,
                                    "name": "Intro to Veterans Studies",
                                    "id": 1974553,
                                    "updated_at": "2019-09-11T18:54:35.151Z",
                                    "description": "A.  Prerequisite: Completion of all developmental reading and writing requirements. Multidisciplinary study of military/veteran issues and perceptions of veterans. Explores impact of training/service on reintegration into civilian life and relationships. First course in VTS minor. Designed for non-veterans and veterans. Gen. Ed. Element 6.",
                                    "prereq": null,
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "VTS 200 - Intro to Veterans Studies"
                                },
                                "type": "CourseRequirement",
                                "advanced": false
                            },
                            {
                                "name": "SPA 206 - Conversational Fluency",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "15c53dcb-d225-4f1e-8d01-166a84db6797",
                                "parent_id": "d1bb35b6-7e63-470c-9e7c-8cede7ee26d6",
                                "credits": 3.0,
                                "course": {
                                    "maximum_credits": 3.0,
                                    "minimum_credits": 3.0,
                                    "created_at": "2019-09-11T18:54:34.850Z",
                                    "full_number": "SPA 206",
                                    "code": "SPA 206",
                                    "coreq": null,
                                    "name": "Conversational Fluency",
                                    "id": 1974471,
                                    "updated_at": "2019-09-11T18:54:34.850Z",
                                    "description": "A. Recommended: SPA 202 or equivalent proficiency (not open to students who have native or near-native fluency in Spanish). Active development of skills and strategies for functional fluency in Spanish in real cultural contexts.",
                                    "prereq": {
                                        "minimum_course_grade": "C",
                                        "concurrency_ind": false,
                                        "course": {
                                            "name": "Intermediate Conver Spanish II",
                                            "maximum_credits": 3.0,
                                            "minimum_credits": 3.0,
                                            "id": 1974470,
                                            "full_name": "SPA 202 - Intermediate Conver Spanish II",
                                            "full_number": "SPA 202",
                                            "code": "SPA 202"
                                        },
                                        "type": "course"
                                    },
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "SPA 206 - Conversational Fluency"
                                },
                                "type": "CourseRequirement",
                                "advanced": false
                            },
                            {
                                "name": "ASL 102 - American Sign Language II",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "96b3ba2b-7b45-4424-80e5-cff64d4715d3",
                                "parent_id": "d1bb35b6-7e63-470c-9e7c-8cede7ee26d6",
                                "credits": 3.0,
                                "course": {
                                    "maximum_credits": 3.0,
                                    "minimum_credits": 0.0,
                                    "created_at": "2019-09-11T18:54:29.502Z",
                                    "full_number": "ASL 102",
                                    "code": "ASL 102",
                                    "coreq": null,
                                    "name": "American Sign Language II",
                                    "id": 1972806,
                                    "updated_at": "2019-09-11T18:54:29.502Z",
                                    "description": "I, II. Prerequisite: ASL 101 with a minimum grade of \"C\" or departmental permission.  Continued development of basic knowledge of and understanding of conversational ASL and cultural features of the language and community. 3 Lec/ 1 Lab. Gen Ed. VIII.",
                                    "prereq": {
                                        "minimum_course_grade": "C",
                                        "concurrency_ind": false,
                                        "course": {
                                            "name": "American Sign Language I",
                                            "maximum_credits": 3.0,
                                            "minimum_credits": 0.0,
                                            "id": 1972805,
                                            "full_name": "ASL 101 - American Sign Language I",
                                            "full_number": "ASL 101",
                                            "code": "ASL 101"
                                        },
                                        "type": "course"
                                    },
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "ASL 102 - American Sign Language II"
                                },
                                "type": "CourseRequirement",
                                "advanced": true
                            },
                            {
                                "name": "SPA 202 - Intermediate Conver Spanish II",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "ce95ca41-3c54-4ce7-9c1b-ea75069dca7d",
                                "parent_id": "d1bb35b6-7e63-470c-9e7c-8cede7ee26d6",
                                "credits": 3.0,
                                "course": {
                                    "maximum_credits": 3.0,
                                    "minimum_credits": 3.0,
                                    "created_at": "2019-09-11T18:54:34.846Z",
                                    "full_number": "SPA 202",
                                    "code": "SPA 202",
                                    "coreq": null,
                                    "name": "Intermediate Conver Spanish II",
                                    "id": 1974470,
                                    "updated_at": "2019-09-11T18:54:34.846Z",
                                    "description": "I, II. Recommended: SPA 201 or equivalent proficiency. Development of more advanced skills for speaking, listening, reading, and writing, with increased emphasis on short readings, discussions, and compositions on cultural topics. Laboratory work required. Students entering SPA 202 by referral or placement receive nine hours credit for SPA 101, 102, and 201 if they make an Å¼AÅ¼ or Å¼BÅ¼ in 202. Gen. Ed. VIII.",
                                    "prereq": {
                                        "minimum_course_grade": "C",
                                        "concurrency_ind": false,
                                        "course": {
                                            "name": "Intermediate Conver Spanish I",
                                            "maximum_credits": 3.0,
                                            "minimum_credits": 3.0,
                                            "id": 1974469,
                                            "full_name": "SPA 201 - Intermediate Conver Spanish I",
                                            "full_number": "SPA 201",
                                            "code": "SPA 201"
                                        },
                                        "type": "course"
                                    },
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "SPA 202 - Intermediate Conver Spanish II"
                                },
                                "type": "CourseRequirement",
                                "advanced": false
                            },
                            {
                                "name": "SPA 201 - Intermediate Conver Spanish I",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "268f4c43-7096-467d-acdf-d20a00a54d41",
                                "parent_id": "d1bb35b6-7e63-470c-9e7c-8cede7ee26d6",
                                "credits": 3.0,
                                "course": {
                                    "maximum_credits": 3.0,
                                    "minimum_credits": 3.0,
                                    "created_at": "2019-09-11T18:54:34.843Z",
                                    "full_number": "SPA 201",
                                    "code": "SPA 201",
                                    "coreq": null,
                                    "name": "Intermediate Conver Spanish I",
                                    "id": 1974469,
                                    "updated_at": "2019-09-11T18:54:34.843Z",
                                    "description": "I, II. Recommended: SPA 102 or equivalent proficiency. Development of more advanced skills for speaking, listening, reading, and writing in contemporary cultural contexts. Laboratory work required. Students entering SPA 201 by referral or placement receive six hours credit for SPA 101 and 102 if they make an Å¼AÅ¼ or Å¼BÅ¼ in 201. Gen. Ed. VIII.",
                                    "prereq": {
                                        "minimum_course_grade": "C",
                                        "concurrency_ind": false,
                                        "course": {
                                            "name": "Conversational Spanish II",
                                            "maximum_credits": 3.0,
                                            "minimum_credits": 3.0,
                                            "id": 1974468,
                                            "full_name": "SPA 102 - Conversational Spanish II",
                                            "full_number": "SPA 102",
                                            "code": "SPA 102"
                                        },
                                        "type": "course"
                                    },
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "SPA 201 - Intermediate Conver Spanish I"
                                },
                                "type": "CourseRequirement",
                                "advanced": false
                            },
                            {
                                "name": "SPA 102 - Conversational Spanish II",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "554219de-d1fa-4559-a2db-5259c871e82e",
                                "parent_id": "d1bb35b6-7e63-470c-9e7c-8cede7ee26d6",
                                "credits": 3.0,
                                "course": {
                                    "maximum_credits": 3.0,
                                    "minimum_credits": 3.0,
                                    "created_at": "2019-09-11T18:54:34.839Z",
                                    "full_number": "SPA 102",
                                    "code": "SPA 102",
                                    "coreq": null,
                                    "name": "Conversational Spanish II",
                                    "id": 1974468,
                                    "updated_at": "2019-09-11T18:54:34.839Z",
                                    "description": "I, II. Prerequisite: SPA 101, or equivalent proficiency. (Students with three or four successful years of high school Spanish should begin their study in SPA 102, 105, or higher. Students entering SPA 102 by referral or placement will receive three hours credit for SPA 101 if they make an A in 102.) Continuation of SPA 101. Conducted in Spanish. Not open to students who have native or near-native fluency in Spanish.",
                                    "prereq": {
                                        "minimum_course_grade": "C",
                                        "concurrency_ind": false,
                                        "course": {
                                            "name": "Conversational Spanish I",
                                            "maximum_credits": 3.0,
                                            "minimum_credits": 3.0,
                                            "id": 1974467,
                                            "full_name": "SPA 101 - Conversational Spanish I",
                                            "full_number": "SPA 101",
                                            "code": "SPA 101"
                                        },
                                        "type": "course"
                                    },
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "SPA 102 - Conversational Spanish II"
                                },
                                "type": "CourseRequirement",
                                "advanced": false
                            },
                            {
                                "name": "SPA 101 - Conversational Spanish I",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "db853bfa-1294-428e-9b48-24f9839a5647",
                                "parent_id": "d1bb35b6-7e63-470c-9e7c-8cede7ee26d6",
                                "credits": 3.0,
                                "course": {
                                    "maximum_credits": 3.0,
                                    "minimum_credits": 3.0,
                                    "created_at": "2019-09-11T18:54:34.835Z",
                                    "full_number": "SPA 101",
                                    "code": "SPA 101",
                                    "coreq": null,
                                    "name": "Conversational Spanish I",
                                    "id": 1974467,
                                    "updated_at": "2019-09-11T18:54:34.835Z",
                                    "description": "I, II. Prerequisite: completion of all required developmental reading and writing courses. Beginning Spanish for students with little or no previous study of Spanish. Qualified students should enroll at a higher level. Proficiency-based course emphasizing active communication in Spanish, and introducing the cultural diversity of the Spanish-speaking world.  Conducted in Spanish.  Not open to students who have native or near-native fluency in Spanish.  Gen. Ed. E-6.",
                                    "prereq": null,
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "SPA 101 - Conversational Spanish I"
                                },
                                "type": "CourseRequirement",
                                "advanced": false
                            },
                            {
                                "name": "SOC 400 - Racial and Ethnic Relations",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "ccf12e12-5849-489d-8289-10490b856dd7",
                                "parent_id": "d1bb35b6-7e63-470c-9e7c-8cede7ee26d6",
                                "credits": 3.0,
                                "course": {
                                    "maximum_credits": 3.0,
                                    "minimum_credits": 3.0,
                                    "created_at": "2019-09-11T18:54:34.822Z",
                                    "full_number": "SOC 400",
                                    "code": "SOC 400",
                                    "coreq": null,
                                    "name": "Racial and Ethnic Relations",
                                    "id": 1974463,
                                    "updated_at": "2019-09-11T18:54:34.822Z",
                                    "description": "A. Cross-listed as AFA 400. Prerequisites: SOC 131 or SOC235; ENG 102 or ENG 102R or ENG 105 (B) or HON 102. Analysis of the development of racial and ethnic relations from the perspective of sociology and related social sciences. Examination of issues related to dominant and minority group status in the United States and cross-culturally. Gen. Ed. E-6. Credit will not be awarded for both SOC 400 and AFA 400.",
                                    "prereq": {
                                        "operands": [
                                            {
                                                "operands": [
                                                    {
                                                        "minimum_course_grade": "C",
                                                        "concurrency_ind": false,
                                                        "course": {
                                                            "name": "Introductory Sociology",
                                                            "maximum_credits": 3.0,
                                                            "minimum_credits": 3.0,
                                                            "id": 1974456,
                                                            "full_name": "SOC 131 - Introductory Sociology",
                                                            "full_number": "SOC 131",
                                                            "code": "SOC 131"
                                                        },
                                                        "type": "course"
                                                    },
                                                    {
                                                        "minimum_course_grade": "C",
                                                        "concurrency_ind": false,
                                                        "course": {
                                                            "name": "Social Problems",
                                                            "maximum_credits": 3.0,
                                                            "minimum_credits": 3.0,
                                                            "id": 1974458,
                                                            "full_name": "SOC 235 - Social Problems",
                                                            "full_number": "SOC 235",
                                                            "code": "SOC 235"
                                                        },
                                                        "type": "course"
                                                    }
                                                ],
                                                "type": "or"
                                            },
                                            {
                                                "operands": [
                                                    {
                                                        "minimum_course_grade": "C",
                                                        "concurrency_ind": false,
                                                        "course": {
                                                            "name": "Research, Writing, & Rhetoric",
                                                            "maximum_credits": 3.0,
                                                            "minimum_credits": 3.0,
                                                            "id": 1973344,
                                                            "full_name": "ENG 102 - Research, Writing, & Rhetoric",
                                                            "full_number": "ENG 102",
                                                            "code": "ENG 102"
                                                        },
                                                        "type": "course"
                                                    },
                                                    {
                                                        "minimum_course_grade": "C",
                                                        "concurrency_ind": false,
                                                        "course": {
                                                            "name": "First Year Writing Seminar",
                                                            "maximum_credits": 3.0,
                                                            "minimum_credits": 3.0,
                                                            "id": 1977160,
                                                            "full_name": "ENG 105 - First Year Writing Seminar",
                                                            "full_number": "ENG 105",
                                                            "code": "ENG 105"
                                                        },
                                                        "type": "course"
                                                    },
                                                    {
                                                        "minimum_course_grade": "C",
                                                        "concurrency_ind": false,
                                                        "course": {
                                                            "name": "Honors Rhetoric",
                                                            "maximum_credits": 6.0,
                                                            "minimum_credits": 6.0,
                                                            "id": 1973709,
                                                            "full_name": "HON 102 - Honors Rhetoric",
                                                            "full_number": "HON 102",
                                                            "code": "HON 102"
                                                        },
                                                        "type": "course"
                                                    }
                                                ],
                                                "type": "or"
                                            }
                                        ],
                                        "type": "and"
                                    },
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "SOC 400 - Racial and Ethnic Relations"
                                },
                                "type": "CourseRequirement",
                                "advanced": false
                            },
                            {
                                "name": "SED 104 - Special Education Introduction",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "dbf4a2cf-9ce1-4a9f-bcd8-cdba36bec4ab",
                                "parent_id": "d1bb35b6-7e63-470c-9e7c-8cede7ee26d6",
                                "credits": 3.0,
                                "course": {
                                    "maximum_credits": 3.0,
                                    "minimum_credits": 3.0,
                                    "created_at": "2019-09-11T18:54:34.708Z",
                                    "full_number": "SED 104",
                                    "code": "SED 104",
                                    "coreq": null,
                                    "name": "Special Education Introduction",
                                    "id": 1974431,
                                    "updated_at": "2019-09-11T18:54:34.708Z",
                                    "description": "I, II, A. Overview of major categories of exceptionalities and the educational, legal, and social issues in the area of disabilities and special education. Observations/participation through field experience required. Gen. Ed Element 6.",
                                    "prereq": null,
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "SED 104 - Special Education Introduction"
                                },
                                "type": "CourseRequirement",
                                "advanced": false
                            },
                            {
                                "name": "JPN 102 - Conversational Japanese II",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "4e25eb30-bc38-4fa2-be05-f3b03f34dc64",
                                "parent_id": "d1bb35b6-7e63-470c-9e7c-8cede7ee26d6",
                                "credits": 3.0,
                                "course": {
                                    "maximum_credits": 3.0,
                                    "minimum_credits": 3.0,
                                    "created_at": "2019-09-11T18:54:32.448Z",
                                    "full_number": "JPN 102",
                                    "code": "JPN 102",
                                    "coreq": null,
                                    "name": "Conversational Japanese II",
                                    "id": 1973754,
                                    "updated_at": "2019-09-11T18:54:32.448Z",
                                    "description": "A. Recommended: JPN 101 or equivalent proficiency. Continuation of JPN 101. Emphasis on conversation. Students entering JPN 102 by referral or placement will receive three hours credit for JPN 101 if they make an Å¼AÅ¼ in 102. Laboratory work required. Gen. Ed. VIII.",
                                    "prereq": {
                                        "minimum_course_grade": "C",
                                        "concurrency_ind": false,
                                        "course": {
                                            "name": "Conversational Japanese I",
                                            "maximum_credits": 3.0,
                                            "minimum_credits": 3.0,
                                            "id": 1973753,
                                            "full_name": "JPN 101 - Conversational Japanese I",
                                            "full_number": "JPN 101",
                                            "code": "JPN 101"
                                        },
                                        "type": "course"
                                    },
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "JPN 102 - Conversational Japanese II"
                                },
                                "type": "CourseRequirement",
                                "advanced": false
                            },
                            {
                                "name": "JPN 101 - Conversational Japanese I",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "4b31ac67-2fc3-4be9-824a-5160f788ff5a",
                                "parent_id": "d1bb35b6-7e63-470c-9e7c-8cede7ee26d6",
                                "credits": 3.0,
                                "course": {
                                    "maximum_credits": 3.0,
                                    "minimum_credits": 3.0,
                                    "created_at": "2019-09-11T18:54:32.445Z",
                                    "full_number": "JPN 101",
                                    "code": "JPN 101",
                                    "coreq": null,
                                    "name": "Conversational Japanese I",
                                    "id": 1973753,
                                    "updated_at": "2019-09-11T18:54:32.445Z",
                                    "description": "I, II. An introduction to the grammar and structure of Japanese taught in cultural context. Practice in pronunciation, reading, and writing systems with an emphasis on conversation. Gen. Ed. VIII.",
                                    "prereq": null,
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "JPN 101 - Conversational Japanese I"
                                },
                                "type": "CourseRequirement",
                                "advanced": false
                            },
                            {
                                "name": "HON 320W - Dvrsty of Perspectives & Exp",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "44c5c76d-9b76-42a7-beeb-a4ea4320562a",
                                "parent_id": "d1bb35b6-7e63-470c-9e7c-8cede7ee26d6",
                                "credits": 3.0,
                                "course": {
                                    "maximum_credits": 3.0,
                                    "minimum_credits": 3.0,
                                    "created_at": "2019-09-11T18:54:32.322Z",
                                    "full_number": "HON 320W",
                                    "code": "HON 320W",
                                    "coreq": null,
                                    "name": "Dvrsty of Perspectives & Exp",
                                    "id": 1973716,
                                    "updated_at": "2019-09-11T18:54:32.322Z",
                                    "description": "A. Prerequisite: Admission to the Honors Program or departmental approval and ENG 102 or 105(B) or HON 102. A topics course in the diversity of perspectives and experiences meeting the goals of the Honors Program. May be retaken with different topics to a maximum of six hours. Honors Core. Gen Ed. Element 6.",
                                    "prereq": {
                                        "operands": [
                                            {
                                                "operands": [
                                                    {
                                                        "minimum_course_grade": "C",
                                                        "concurrency_ind": false,
                                                        "course": {
                                                            "name": "Research, Writing, & Rhetoric",
                                                            "maximum_credits": 3.0,
                                                            "minimum_credits": 3.0,
                                                            "id": 1973344,
                                                            "full_name": "ENG 102 - Research, Writing, & Rhetoric",
                                                            "full_number": "ENG 102",
                                                            "code": "ENG 102"
                                                        },
                                                        "type": "course"
                                                    },
                                                    {
                                                        "minimum_course_grade": "C",
                                                        "concurrency_ind": false,
                                                        "course": {
                                                            "name": "First Year Writing Seminar",
                                                            "maximum_credits": 3.0,
                                                            "minimum_credits": 3.0,
                                                            "id": 1977160,
                                                            "full_name": "ENG 105 - First Year Writing Seminar",
                                                            "full_number": "ENG 105",
                                                            "code": "ENG 105"
                                                        },
                                                        "type": "course"
                                                    },
                                                    {
                                                        "minimum_course_grade": "C",
                                                        "concurrency_ind": false,
                                                        "course": {
                                                            "name": "Honors Rhetoric",
                                                            "maximum_credits": 6.0,
                                                            "minimum_credits": 6.0,
                                                            "id": 1973709,
                                                            "full_name": "HON 102 - Honors Rhetoric",
                                                            "full_number": "HON 102",
                                                            "code": "HON 102"
                                                        },
                                                        "type": "course"
                                                    }
                                                ],
                                                "type": "or"
                                            },
                                            {
                                                "type": "custom",
                                                "description": "Admission to the Honors Program or departmental approval"
                                            }
                                        ],
                                        "type": "and"
                                    },
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "HON 320W - Dvrsty of Perspectives & Exp"
                                },
                                "type": "CourseRequirement",
                                "advanced": false
                            },
                            {
                                "name": "ASL 101 - American Sign Language I",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "39af1945-21c6-4ca7-8bd6-4eb6cb15f1e8",
                                "parent_id": "d1bb35b6-7e63-470c-9e7c-8cede7ee26d6",
                                "credits": 3.0,
                                "course": {
                                    "maximum_credits": 3.0,
                                    "minimum_credits": 0.0,
                                    "created_at": "2019-09-11T18:54:29.500Z",
                                    "full_number": "ASL 101",
                                    "code": "ASL 101",
                                    "coreq": null,
                                    "name": "American Sign Language I",
                                    "id": 1972805,
                                    "updated_at": "2019-09-11T18:54:29.500Z",
                                    "description": "I, II.  A functional notional approach to learning beginning American Sign Language (ASL).  Development of basic knowledge of and understanding of conversational ASL and cultural features of the language and community. 3 Lec/ 1 Lab. Gen Ed. VIII.",
                                    "prereq": null,
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "ASL 101 - American Sign Language I"
                                },
                                "type": "CourseRequirement",
                                "advanced": true
                            }
                        ]
                    },
                    "id": "6cedc023-43ff-4add-abed-2098aaebcd5f",
                    "parent_id": null,
                    "type": "CoreRequirement"
                },
                "id": 12177,
                "position": 3,
                "credits": 3.0,
                "custom": false,
                "plan_item_spec": null
            },
            {
                "name": " 6 Diversity of Perspectives and Experiences",
                "requirement": {
                    "name": " 6 Diversity of Perspectives and Experiences",
                    "core": {
                        "name": " 6 Diversity of Perspectives and Experiences",
                        "maximum_credits": 3.0,
                        "minimum_credits": 3.0,
                        "required": 1,
                        "id": "d1bb35b6-7e63-470c-9e7c-8cede7ee26d6",
                        "parent_id": null,
                        "type": "DegreeRequirement",
                        "advanced": false,
                        "subrequirements": [
                            {
                                "name": "AFA 201 - The African Experience",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "89313912-e810-483d-8f14-27fa95ad376f",
                                "parent_id": "d1bb35b6-7e63-470c-9e7c-8cede7ee26d6",
                                "credits": 3.0,
                                "course": {
                                    "maximum_credits": 3.0,
                                    "minimum_credits": 3.0,
                                    "created_at": "2019-09-11T18:54:29.192Z",
                                    "full_number": "AFA 201",
                                    "code": "AFA 201",
                                    "coreq": null,
                                    "name": "The African Experience",
                                    "id": 1972680,
                                    "updated_at": "2019-09-11T18:54:29.192Z",
                                    "description": "A.  Introduces students to the historical, socio-economic, cultural, and political experiences of African people in Africa and the Diaspora.  It fulfills a core requirement for African/African-American Studies. Credit will not be awarded to students who have credit for AFA 201W. Gen. Ed. Element 3B and Element 6",
                                    "prereq": null,
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "AFA 201 - The African Experience"
                                },
                                "type": "CourseRequirement",
                                "advanced": false
                            },
                            {
                                "name": "AFA 202 - The African-American Exper",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "ea801e8d-da48-4eab-adca-5aa88a50710f",
                                "parent_id": "d1bb35b6-7e63-470c-9e7c-8cede7ee26d6",
                                "credits": 3.0,
                                "course": {
                                    "maximum_credits": 3.0,
                                    "minimum_credits": 3.0,
                                    "created_at": "2019-09-11T18:54:29.197Z",
                                    "full_number": "AFA 202",
                                    "code": "AFA 202",
                                    "coreq": null,
                                    "name": "The African-American Exper",
                                    "id": 1972682,
                                    "updated_at": "2019-09-11T18:54:29.197Z",
                                    "description": "A. An overview of the historical, social, political, economic, and cultural factors that have helped shape the experiences of African Americans in the United States. It fulfills a core requirement for African/African-American Studies. Credit will not be awarded for both AFA202 and AFA202W. Gen. Ed. VII (SBS) and VIII.",
                                    "prereq": null,
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "AFA 202 - The African-American Exper"
                                },
                                "type": "CourseRequirement",
                                "advanced": false
                            },
                            {
                                "name": "HIS 205 - The Marginalized in History___",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "0272e811-740d-4c9f-a463-6984498fe277",
                                "parent_id": "d1bb35b6-7e63-470c-9e7c-8cede7ee26d6",
                                "credits": 3.0,
                                "course": {
                                    "maximum_credits": 3.0,
                                    "minimum_credits": 3.0,
                                    "created_at": "2019-09-11T18:54:32.149Z",
                                    "full_number": "HIS 205",
                                    "code": "HIS 205",
                                    "coreq": null,
                                    "name": "The Marginalized in History___",
                                    "id": 1973662,
                                    "updated_at": "2019-09-11T18:54:32.149Z",
                                    "description": "(3). A. Introductory exploration of the experiences of specific historically marginalized groups or cultures. May be repeated up to 6 hours as long as content varies. Gen. Ed. Element 6.",
                                    "prereq": null,
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "HIS 205 - The Marginalized in History___"
                                },
                                "type": "CourseRequirement",
                                "advanced": false
                            },
                            {
                                "name": "HEA 310 - Introduction to Global Health",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "d034c0e9-7bfb-4129-b1a7-ff894e3863ca",
                                "parent_id": "d1bb35b6-7e63-470c-9e7c-8cede7ee26d6",
                                "credits": 3.0,
                                "course": {
                                    "maximum_credits": 3.0,
                                    "minimum_credits": 3.0,
                                    "created_at": "2019-09-11T18:54:32.076Z",
                                    "full_number": "HEA 310",
                                    "code": "HEA 310",
                                    "coreq": null,
                                    "name": "Introduction to Global Health",
                                    "id": 1973638,
                                    "updated_at": "2019-09-11T18:54:32.076Z",
                                    "description": "(3) A. Prerequisite: ENG 102 or 105 or HON 102. Exploration of epidemiological, economic, political, sociological and cultural factors that impact global health with special emphasis on applying public health prinicples in developing as well as developed countires. Gen. Ed. Element 6.",
                                    "prereq": {
                                        "operands": [
                                            {
                                                "minimum_course_grade": "C",
                                                "concurrency_ind": false,
                                                "course": {
                                                    "name": "Research, Writing, & Rhetoric",
                                                    "maximum_credits": 3.0,
                                                    "minimum_credits": 3.0,
                                                    "id": 1973344,
                                                    "full_name": "ENG 102 - Research, Writing, & Rhetoric",
                                                    "full_number": "ENG 102",
                                                    "code": "ENG 102"
                                                },
                                                "type": "course"
                                            },
                                            {
                                                "minimum_course_grade": "C",
                                                "concurrency_ind": false,
                                                "course": {
                                                    "name": "First Year Writing Seminar",
                                                    "maximum_credits": 3.0,
                                                    "minimum_credits": 3.0,
                                                    "id": 1977160,
                                                    "full_name": "ENG 105 - First Year Writing Seminar",
                                                    "full_number": "ENG 105",
                                                    "code": "ENG 105"
                                                },
                                                "type": "course"
                                            },
                                            {
                                                "minimum_course_grade": "C",
                                                "concurrency_ind": false,
                                                "course": {
                                                    "name": "Honors Rhetoric",
                                                    "maximum_credits": 6.0,
                                                    "minimum_credits": 6.0,
                                                    "id": 1973709,
                                                    "full_name": "HON 102 - Honors Rhetoric",
                                                    "full_number": "HON 102",
                                                    "code": "HON 102"
                                                },
                                                "type": "course"
                                            }
                                        ],
                                        "type": "or"
                                    },
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "HEA 310 - Introduction to Global Health"
                                },
                                "type": "CourseRequirement",
                                "advanced": false
                            },
                            {
                                "name": "GER 102 - Conversational German II",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "015136f3-1636-4c8d-8c15-51650a2b93d1",
                                "parent_id": "d1bb35b6-7e63-470c-9e7c-8cede7ee26d6",
                                "credits": 3.0,
                                "course": {
                                    "maximum_credits": 3.0,
                                    "minimum_credits": 3.0,
                                    "created_at": "2019-09-11T18:54:31.734Z",
                                    "full_number": "GER 102",
                                    "code": "GER 102",
                                    "coreq": null,
                                    "name": "Conversational German II",
                                    "id": 1973532,
                                    "updated_at": "2019-09-11T18:54:31.734Z",
                                    "description": "I, II. Recommended: GER 101 or equivalent proficiency. Continuation of GER 101. (Students entering GER 102 by referral or placement receive three hours credit for GER 101 if they make an Å¼AÅ¼ in 102.) Continuing work on basic communicative skills. Taught within the context of Germanic cultures. Laboratory work required. Gen. Ed. VIII.",
                                    "prereq": {
                                        "minimum_course_grade": "C",
                                        "concurrency_ind": false,
                                        "course": {
                                            "name": "Conversational German I",
                                            "maximum_credits": 3.0,
                                            "minimum_credits": 3.0,
                                            "id": 1973531,
                                            "full_name": "GER 101 - Conversational German I",
                                            "full_number": "GER 101",
                                            "code": "GER 101"
                                        },
                                        "type": "course"
                                    },
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "GER 102 - Conversational German II"
                                },
                                "type": "CourseRequirement",
                                "advanced": false
                            },
                            {
                                "name": "GER 101 - Conversational German I",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "95fb6a03-4383-4342-b22a-1ec51cd89daa",
                                "parent_id": "d1bb35b6-7e63-470c-9e7c-8cede7ee26d6",
                                "credits": 3.0,
                                "course": {
                                    "maximum_credits": 3.0,
                                    "minimum_credits": 3.0,
                                    "created_at": "2019-09-11T18:54:31.731Z",
                                    "full_number": "GER 101",
                                    "code": "GER 101",
                                    "coreq": null,
                                    "name": "Conversational German I",
                                    "id": 1973531,
                                    "updated_at": "2019-09-11T18:54:31.731Z",
                                    "description": "I, II. Prerequisite: all required developmental reading and writing courses. Beginning German conversation, grammar, and language skills. Emphasis on speaking and listening comprehension, with introduction to basic written forms. Taught within the context of Germanic cultures. Laboratory work required. Gen. Ed. VIII.",
                                    "prereq": null,
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "GER 101 - Conversational German I"
                                },
                                "type": "CourseRequirement",
                                "advanced": false
                            },
                            {
                                "name": "FRE 102 - Conversational French II",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "6c934eb0-53ed-4318-95f4-79226b341240",
                                "parent_id": "d1bb35b6-7e63-470c-9e7c-8cede7ee26d6",
                                "credits": 3.0,
                                "course": {
                                    "maximum_credits": 3.0,
                                    "minimum_credits": 3.0,
                                    "created_at": "2019-09-11T18:54:31.591Z",
                                    "full_number": "FRE 102",
                                    "code": "FRE 102",
                                    "coreq": null,
                                    "name": "Conversational French II",
                                    "id": 1973483,
                                    "updated_at": "2019-09-11T18:54:31.591Z",
                                    "description": "I, II. Recommended: FRE 101 or equivalent proficiency. (Students entering FRE 102 by referral or placement, with two years high school French or equivalent, receive three hours credit for FRE 101 if they make an Å¼AÅ¼ in 102.) Continuing work on communicative skills and correct usage, with introduction to reading short passages on relevant French and francophone cultural topics. Laboratory work required. Gen. Ed. VIII.",
                                    "prereq": {
                                        "minimum_course_grade": "C",
                                        "concurrency_ind": false,
                                        "course": {
                                            "name": "Conversational French I",
                                            "maximum_credits": 3.0,
                                            "minimum_credits": 3.0,
                                            "id": 1973482,
                                            "full_name": "FRE 101 - Conversational French I",
                                            "full_number": "FRE 101",
                                            "code": "FRE 101"
                                        },
                                        "type": "course"
                                    },
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "FRE 102 - Conversational French II"
                                },
                                "type": "CourseRequirement",
                                "advanced": false
                            },
                            {
                                "name": "FRE 101 - Conversational French I",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "46f5db56-7d25-4ae9-b7e9-46db5f208f18",
                                "parent_id": "d1bb35b6-7e63-470c-9e7c-8cede7ee26d6",
                                "credits": 3.0,
                                "course": {
                                    "maximum_credits": 3.0,
                                    "minimum_credits": 3.0,
                                    "created_at": "2019-09-11T18:54:31.588Z",
                                    "full_number": "FRE 101",
                                    "code": "FRE 101",
                                    "coreq": null,
                                    "name": "Conversational French I",
                                    "id": 1973482,
                                    "updated_at": "2019-09-11T18:54:31.588Z",
                                    "description": "I, II. Prerequisite: all required developmental reading and writing courses. Beginning French conversation, grammar, and language skills. Emphasis on speaking and listening comprehension, with introduction to basic written forms. Taught in context of French and francophone cultures. Laboratory work required. Gen. Ed. VIII.",
                                    "prereq": null,
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "FRE 101 - Conversational French I"
                                },
                                "type": "CourseRequirement",
                                "advanced": false
                            },
                            {
                                "name": "ANT 330 - American Indians",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "f7e24c74-653d-4964-9722-e003ccc97937",
                                "parent_id": "d1bb35b6-7e63-470c-9e7c-8cede7ee26d6",
                                "credits": 3.0,
                                "course": {
                                    "maximum_credits": 3.0,
                                    "minimum_credits": 3.0,
                                    "created_at": "2019-09-11T18:54:29.333Z",
                                    "full_number": "ANT 330",
                                    "code": "ANT 330",
                                    "coreq": null,
                                    "name": "American Indians",
                                    "id": 1972736,
                                    "updated_at": "2019-09-11T18:54:29.333Z",
                                    "description": "A. Prerequisite:  ENG 102, 105(B), or HON 102. Explores the cultural diversity of American Indians by examining their historical and contemporary lives. Focus on cultural similarities and differences of American Indian groups living in ecologically diverse areas. Gen Ed Element 6.",
                                    "prereq": {
                                        "operands": [
                                            {
                                                "minimum_course_grade": "C",
                                                "concurrency_ind": false,
                                                "course": {
                                                    "name": "Research, Writing, & Rhetoric",
                                                    "maximum_credits": 3.0,
                                                    "minimum_credits": 3.0,
                                                    "id": 1973344,
                                                    "full_name": "ENG 102 - Research, Writing, & Rhetoric",
                                                    "full_number": "ENG 102",
                                                    "code": "ENG 102"
                                                },
                                                "type": "course"
                                            },
                                            {
                                                "minimum_course_grade": "C",
                                                "concurrency_ind": false,
                                                "course": {
                                                    "name": "First Year Writing Seminar",
                                                    "maximum_credits": 3.0,
                                                    "minimum_credits": 3.0,
                                                    "id": 1977160,
                                                    "full_name": "ENG 105 - First Year Writing Seminar",
                                                    "full_number": "ENG 105",
                                                    "code": "ENG 105"
                                                },
                                                "type": "course"
                                            },
                                            {
                                                "minimum_course_grade": "C",
                                                "concurrency_ind": false,
                                                "course": {
                                                    "name": "Honors Rhetoric",
                                                    "maximum_credits": 6.0,
                                                    "minimum_credits": 6.0,
                                                    "id": 1973709,
                                                    "full_name": "HON 102 - Honors Rhetoric",
                                                    "full_number": "HON 102",
                                                    "code": "HON 102"
                                                },
                                                "type": "course"
                                            }
                                        ],
                                        "type": "and"
                                    },
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "ANT 330 - American Indians"
                                },
                                "type": "CourseRequirement",
                                "advanced": false
                            },
                            {
                                "name": "LAT 101 - Beginning Latin I",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "5ce8a819-a717-490a-a4a6-6868b894371a",
                                "parent_id": "d1bb35b6-7e63-470c-9e7c-8cede7ee26d6",
                                "credits": 3.0,
                                "course": {
                                    "maximum_credits": 3.0,
                                    "minimum_credits": 3.0,
                                    "created_at": "2019-09-11T18:54:32.494Z",
                                    "full_number": "LAT 101",
                                    "code": "LAT 101",
                                    "coreq": null,
                                    "name": "Beginning Latin I",
                                    "id": 1973769,
                                    "updated_at": "2019-09-11T18:54:32.494Z",
                                    "description": "A. Study of basic inflections, syntax, pronunciation, and vocabulary necessary for the reading and progressive understanding of the Latin language. Particular attention is given to cultural topics and to the relationship of Latin to English. Gen. Ed. VIII.",
                                    "prereq": null,
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "LAT 101 - Beginning Latin I"
                                },
                                "type": "CourseRequirement",
                                "advanced": false
                            },
                            {
                                "name": "JPN 201 - Intermediate Japanese I",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "1b650a7e-83e9-4c14-b686-7c87c71bae23",
                                "parent_id": "d1bb35b6-7e63-470c-9e7c-8cede7ee26d6",
                                "credits": 3.0,
                                "course": {
                                    "maximum_credits": 3.0,
                                    "minimum_credits": 3.0,
                                    "created_at": "2019-09-11T18:54:32.451Z",
                                    "full_number": "JPN 201",
                                    "code": "JPN 201",
                                    "coreq": null,
                                    "name": "Intermediate Japanese I",
                                    "id": 1973755,
                                    "updated_at": "2019-09-11T18:54:32.451Z",
                                    "description": "A. Recommended: JPN 102 or equivalent proficiency. Continuation of JPN 102. Practice in writing kanji, reading, and speaking on cultural topics for diverse social settings requiring increasingly complex structural patterns. Students entering JPN 201 by referral or placement receive six hours credit for JPN 101 and 102 if they make an Å¼AÅ¼ or Å¼BÅ¼ in 201. Gen. Ed. VIII.",
                                    "prereq": {
                                        "minimum_course_grade": "C",
                                        "concurrency_ind": false,
                                        "course": {
                                            "name": "Conversational Japanese II",
                                            "maximum_credits": 3.0,
                                            "minimum_credits": 3.0,
                                            "id": 1973754,
                                            "full_name": "JPN 102 - Conversational Japanese II",
                                            "full_number": "JPN 102",
                                            "code": "JPN 102"
                                        },
                                        "type": "course"
                                    },
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "JPN 201 - Intermediate Japanese I"
                                },
                                "type": "CourseRequirement",
                                "advanced": false
                            },
                            {
                                "name": "ENG 365W - Appalachian Literature",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "b63aedcf-be58-40c1-9639-3e990096be86",
                                "parent_id": "d1bb35b6-7e63-470c-9e7c-8cede7ee26d6",
                                "credits": 3.0,
                                "course": {
                                    "maximum_credits": 3.0,
                                    "minimum_credits": 3.0,
                                    "created_at": "2019-09-11T18:54:31.243Z",
                                    "full_number": "ENG 365W",
                                    "code": "ENG 365W",
                                    "coreq": null,
                                    "name": "Appalachian Literature",
                                    "id": 1973365,
                                    "updated_at": "2019-09-11T18:54:31.243Z",
                                    "description": "Cross-listed as APP 365W.  Prerequisite: ENG 102 or 105(B) or HON 102.  Writing-intensive study of selected Appalachian artists, with emphasis on interdiscplinary, cultural, and aesthetic concerns raised in works by writers such as Arnow, Berry, and Still.  Credit will not be awarded to students who have credit for ENG 365, APP 365 or APP 365W.  Gen. Ed. Element 3B and 6.",
                                    "prereq": {
                                        "operands": [
                                            {
                                                "minimum_course_grade": "C",
                                                "concurrency_ind": false,
                                                "course": {
                                                    "name": "Research, Writing, & Rhetoric",
                                                    "maximum_credits": 3.0,
                                                    "minimum_credits": 3.0,
                                                    "id": 1973344,
                                                    "full_name": "ENG 102 - Research, Writing, & Rhetoric",
                                                    "full_number": "ENG 102",
                                                    "code": "ENG 102"
                                                },
                                                "type": "course"
                                            },
                                            {
                                                "minimum_course_grade": "C",
                                                "concurrency_ind": false,
                                                "course": {
                                                    "name": "First Year Writing Seminar",
                                                    "maximum_credits": 3.0,
                                                    "minimum_credits": 3.0,
                                                    "id": 1977160,
                                                    "full_name": "ENG 105 - First Year Writing Seminar",
                                                    "full_number": "ENG 105",
                                                    "code": "ENG 105"
                                                },
                                                "type": "course"
                                            },
                                            {
                                                "minimum_course_grade": "C",
                                                "concurrency_ind": false,
                                                "course": {
                                                    "name": "Honors Rhetoric",
                                                    "maximum_credits": 6.0,
                                                    "minimum_credits": 6.0,
                                                    "id": 1973709,
                                                    "full_name": "HON 102 - Honors Rhetoric",
                                                    "full_number": "HON 102",
                                                    "code": "HON 102"
                                                },
                                                "type": "course"
                                            }
                                        ],
                                        "type": "or"
                                    },
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "ENG 365W - Appalachian Literature"
                                },
                                "type": "CourseRequirement",
                                "advanced": false
                            },
                            {
                                "name": "ENG 362 - North American Native Lit.",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "0ec5f2c6-cd98-4419-ad82-c0ec36fadd52",
                                "parent_id": "d1bb35b6-7e63-470c-9e7c-8cede7ee26d6",
                                "credits": 3.0,
                                "course": {
                                    "maximum_credits": 3.0,
                                    "minimum_credits": 3.0,
                                    "created_at": "2019-09-11T18:54:31.240Z",
                                    "full_number": "ENG 362",
                                    "code": "ENG 362",
                                    "coreq": null,
                                    "name": "North American Native Lit.",
                                    "id": 1973364,
                                    "updated_at": "2019-09-11T18:54:31.240Z",
                                    "description": "A. Prerequisite: ENG 102, 105 (B), or HON 102. A study of representative literature written by North American Native authors. Gen. Ed. Element 6.",
                                    "prereq": {
                                        "operands": [
                                            {
                                                "minimum_course_grade": "C",
                                                "concurrency_ind": false,
                                                "course": {
                                                    "name": "Research, Writing, & Rhetoric",
                                                    "maximum_credits": 3.0,
                                                    "minimum_credits": 3.0,
                                                    "id": 1973344,
                                                    "full_name": "ENG 102 - Research, Writing, & Rhetoric",
                                                    "full_number": "ENG 102",
                                                    "code": "ENG 102"
                                                },
                                                "type": "course"
                                            },
                                            {
                                                "minimum_course_grade": "C",
                                                "concurrency_ind": false,
                                                "course": {
                                                    "name": "First Year Writing Seminar",
                                                    "maximum_credits": 3.0,
                                                    "minimum_credits": 3.0,
                                                    "id": 1977160,
                                                    "full_name": "ENG 105 - First Year Writing Seminar",
                                                    "full_number": "ENG 105",
                                                    "code": "ENG 105"
                                                },
                                                "type": "course"
                                            },
                                            {
                                                "minimum_course_grade": "C",
                                                "concurrency_ind": false,
                                                "course": {
                                                    "name": "Honors Rhetoric",
                                                    "maximum_credits": 6.0,
                                                    "minimum_credits": 6.0,
                                                    "id": 1973709,
                                                    "full_name": "HON 102 - Honors Rhetoric",
                                                    "full_number": "HON 102",
                                                    "code": "HON 102"
                                                },
                                                "type": "course"
                                            }
                                        ],
                                        "type": "or"
                                    },
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "ENG 362 - North American Native Lit."
                                },
                                "type": "CourseRequirement",
                                "advanced": false
                            },
                            {
                                "name": "WGS 232 - Identity and Sexuality",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "504b22f8-7626-48a0-8b3e-00d52a841d08",
                                "parent_id": "d1bb35b6-7e63-470c-9e7c-8cede7ee26d6",
                                "credits": 3.0,
                                "course": {
                                    "maximum_credits": 3.0,
                                    "minimum_credits": 3.0,
                                    "created_at": "2019-09-11T18:54:35.161Z",
                                    "full_number": "WGS 232",
                                    "code": "WGS 232",
                                    "coreq": null,
                                    "name": "Identity and Sexuality",
                                    "id": 1974556,
                                    "updated_at": "2019-09-11T18:54:35.161Z",
                                    "description": "I, II. Cross listed as CDF 232. An exploration of the changing attitudes about and among men/women and their effect on choices and interpersonal relationships. Emphasis will be on promotion and maintenance of positive mental, physical, emotional, and sexual development. Credit will not be awarded to students who have credit for CDF 232. Gen. Ed. Block VIII and Element 6.",
                                    "prereq": null,
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "WGS 232 - Identity and Sexuality"
                                },
                                "type": "CourseRequirement",
                                "advanced": false
                            },
                            {
                                "name": "CDF 232 - Identity and Sexuality",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "822eb6ee-f8a7-4145-bd5d-caf68db0e288",
                                "parent_id": "d1bb35b6-7e63-470c-9e7c-8cede7ee26d6",
                                "credits": 3.0,
                                "course": {
                                    "maximum_credits": 3.0,
                                    "minimum_credits": 3.0,
                                    "created_at": "2019-09-11T18:54:29.893Z",
                                    "full_number": "CDF 232",
                                    "code": "CDF 232",
                                    "coreq": null,
                                    "name": "Identity and Sexuality",
                                    "id": 1972957,
                                    "updated_at": "2019-09-11T18:54:29.893Z",
                                    "description": "I, II. An exploration of the changing attitudes about and among men/women and their effect on choices and interpersonal relationships. Emphasis will be on promotion and maintenance of positive mental, physical, emotional, and sexual development. Credit will not be awarded to students who have credit for WGS 232.  Gen. Ed. Block VIII, and Element 6.",
                                    "prereq": null,
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "CDF 232 - Identity and Sexuality"
                                },
                                "type": "CourseRequirement",
                                "advanced": false
                            },
                            {
                                "name": "APP 365W - Appalachian Literature",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "cb1b7c09-f7b3-4eb7-97dd-201894e09aec",
                                "parent_id": "d1bb35b6-7e63-470c-9e7c-8cede7ee26d6",
                                "credits": 3.0,
                                "course": {
                                    "maximum_credits": 3.0,
                                    "minimum_credits": 3.0,
                                    "created_at": "2019-09-11T18:54:29.351Z",
                                    "full_number": "APP 365W",
                                    "code": "APP 365W",
                                    "coreq": null,
                                    "name": "Appalachian Literature",
                                    "id": 1972743,
                                    "updated_at": "2019-09-11T18:54:29.351Z",
                                    "description": "(3) 1. Crosslisted as ENG 365W. Prerequisite: ENG 102 or 105(B) or HON 102. Writing-intensive study of selected Appalachian artists, with emphasis on interdisciplinary, cultural, and aesthetic concerns raised in works by writers such as Arnow, Berry, and Still. Credit will not be awarded to students who have credit for ENG 365, ENG 365W or APP 365. Gen. Ed. Element 3B and 6.",
                                    "prereq": {
                                        "operands": [
                                            {
                                                "minimum_course_grade": "C",
                                                "concurrency_ind": false,
                                                "course": {
                                                    "name": "Research, Writing, & Rhetoric",
                                                    "maximum_credits": 3.0,
                                                    "minimum_credits": 3.0,
                                                    "id": 1973344,
                                                    "full_name": "ENG 102 - Research, Writing, & Rhetoric",
                                                    "full_number": "ENG 102",
                                                    "code": "ENG 102"
                                                },
                                                "type": "course"
                                            },
                                            {
                                                "minimum_course_grade": "C",
                                                "concurrency_ind": false,
                                                "course": {
                                                    "name": "First Year Writing Seminar",
                                                    "maximum_credits": 3.0,
                                                    "minimum_credits": 3.0,
                                                    "id": 1977160,
                                                    "full_name": "ENG 105 - First Year Writing Seminar",
                                                    "full_number": "ENG 105",
                                                    "code": "ENG 105"
                                                },
                                                "type": "course"
                                            },
                                            {
                                                "minimum_course_grade": "C",
                                                "concurrency_ind": false,
                                                "course": {
                                                    "name": "Honors Rhetoric",
                                                    "maximum_credits": 6.0,
                                                    "minimum_credits": 6.0,
                                                    "id": 1973709,
                                                    "full_name": "HON 102 - Honors Rhetoric",
                                                    "full_number": "HON 102",
                                                    "code": "HON 102"
                                                },
                                                "type": "course"
                                            }
                                        ],
                                        "type": "or"
                                    },
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "APP 365W - Appalachian Literature"
                                },
                                "type": "CourseRequirement",
                                "advanced": false
                            },
                            {
                                "name": "APP 200 - Introduction to Appalachia",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "41e1b916-b208-4b1b-8ac4-8ab3f597ec17",
                                "parent_id": "d1bb35b6-7e63-470c-9e7c-8cede7ee26d6",
                                "credits": 3.0,
                                "course": {
                                    "maximum_credits": 3.0,
                                    "minimum_credits": 3.0,
                                    "created_at": "2019-09-11T18:54:29.346Z",
                                    "full_number": "APP 200",
                                    "code": "APP 200",
                                    "coreq": null,
                                    "name": "Introduction to Appalachia",
                                    "id": 1972741,
                                    "updated_at": "2019-09-11T18:54:29.346Z",
                                    "description": "A.  An introduction to the interdisciplinary study of the Appalachian region.  Special emphasis on the region's place in a national and global context, and on internal and external definitions of the region. Gen. Ed. VII and Element 5B and 6.",
                                    "prereq": null,
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "APP 200 - Introduction to Appalachia"
                                },
                                "type": "CourseRequirement",
                                "advanced": false
                            },
                            {
                                "name": "REL 340 - Religions of India",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "4295c0d7-5546-4488-bbf7-6cbb3f88ffdf",
                                "parent_id": "d1bb35b6-7e63-470c-9e7c-8cede7ee26d6",
                                "credits": 3.0,
                                "course": {
                                    "maximum_credits": 3.0,
                                    "minimum_credits": 3.0,
                                    "created_at": "2019-09-11T18:54:34.651Z",
                                    "full_number": "REL 340",
                                    "code": "REL 340",
                                    "coreq": null,
                                    "name": "Religions of India",
                                    "id": 1974415,
                                    "updated_at": "2019-09-11T18:54:34.651Z",
                                    "description": "A. Prerequisite: ENG 102 or 105(B) or HON 102. Study of the major religions of India including the Vedic Period, classical systems, Epic Period, heterodox systems, orthodox systems, and contemporary thought. Gen Ed. Element 6",
                                    "prereq": {
                                        "operands": [
                                            {
                                                "minimum_course_grade": "C",
                                                "concurrency_ind": false,
                                                "course": {
                                                    "name": "Research, Writing, & Rhetoric",
                                                    "maximum_credits": 3.0,
                                                    "minimum_credits": 3.0,
                                                    "id": 1973344,
                                                    "full_name": "ENG 102 - Research, Writing, & Rhetoric",
                                                    "full_number": "ENG 102",
                                                    "code": "ENG 102"
                                                },
                                                "type": "course"
                                            },
                                            {
                                                "minimum_course_grade": "C",
                                                "concurrency_ind": false,
                                                "course": {
                                                    "name": "First Year Writing Seminar",
                                                    "maximum_credits": 3.0,
                                                    "minimum_credits": 3.0,
                                                    "id": 1977160,
                                                    "full_name": "ENG 105 - First Year Writing Seminar",
                                                    "full_number": "ENG 105",
                                                    "code": "ENG 105"
                                                },
                                                "type": "course"
                                            },
                                            {
                                                "minimum_course_grade": "C",
                                                "concurrency_ind": false,
                                                "course": {
                                                    "name": "Honors Rhetoric",
                                                    "maximum_credits": 6.0,
                                                    "minimum_credits": 6.0,
                                                    "id": 1973709,
                                                    "full_name": "HON 102 - Honors Rhetoric",
                                                    "full_number": "HON 102",
                                                    "code": "HON 102"
                                                },
                                                "type": "course"
                                            }
                                        ],
                                        "type": "or"
                                    },
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "REL 340 - Religions of India"
                                },
                                "type": "CourseRequirement",
                                "advanced": false
                            },
                            {
                                "name": "WGS 201 - Intro Women & Gender Studies",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "714ecbe9-3b5e-4cee-ab7a-42aafe0d7779",
                                "parent_id": "d1bb35b6-7e63-470c-9e7c-8cede7ee26d6",
                                "credits": 3.0,
                                "course": {
                                    "maximum_credits": 3.0,
                                    "minimum_credits": 3.0,
                                    "created_at": "2019-09-11T18:54:35.158Z",
                                    "full_number": "WGS 201",
                                    "code": "WGS 201",
                                    "coreq": null,
                                    "name": "Intro Women & Gender Studies",
                                    "id": 1974555,
                                    "updated_at": "2019-09-11T18:54:35.158Z",
                                    "description": "A. Introduction to interdisciplinary field of women and gender studies and feminist scholarship. Provides overview of the diversity of womenÅ¼s experiences, images, and issues from a wide variety of disciplinary perspectives. Gen. Ed. Element 6",
                                    "prereq": null,
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "WGS 201 - Intro Women & Gender Studies"
                                },
                                "type": "CourseRequirement",
                                "advanced": false
                            },
                            {
                                "name": "VTS 200 - Intro to Veterans Studies",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "40dd6371-2c31-4d2e-a19d-d5df7fb0e02f",
                                "parent_id": "d1bb35b6-7e63-470c-9e7c-8cede7ee26d6",
                                "credits": 3.0,
                                "course": {
                                    "maximum_credits": 3.0,
                                    "minimum_credits": 3.0,
                                    "created_at": "2019-09-11T18:54:35.151Z",
                                    "full_number": "VTS 200",
                                    "code": "VTS 200",
                                    "coreq": null,
                                    "name": "Intro to Veterans Studies",
                                    "id": 1974553,
                                    "updated_at": "2019-09-11T18:54:35.151Z",
                                    "description": "A.  Prerequisite: Completion of all developmental reading and writing requirements. Multidisciplinary study of military/veteran issues and perceptions of veterans. Explores impact of training/service on reintegration into civilian life and relationships. First course in VTS minor. Designed for non-veterans and veterans. Gen. Ed. Element 6.",
                                    "prereq": null,
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "VTS 200 - Intro to Veterans Studies"
                                },
                                "type": "CourseRequirement",
                                "advanced": false
                            },
                            {
                                "name": "SPA 206 - Conversational Fluency",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "15c53dcb-d225-4f1e-8d01-166a84db6797",
                                "parent_id": "d1bb35b6-7e63-470c-9e7c-8cede7ee26d6",
                                "credits": 3.0,
                                "course": {
                                    "maximum_credits": 3.0,
                                    "minimum_credits": 3.0,
                                    "created_at": "2019-09-11T18:54:34.850Z",
                                    "full_number": "SPA 206",
                                    "code": "SPA 206",
                                    "coreq": null,
                                    "name": "Conversational Fluency",
                                    "id": 1974471,
                                    "updated_at": "2019-09-11T18:54:34.850Z",
                                    "description": "A. Recommended: SPA 202 or equivalent proficiency (not open to students who have native or near-native fluency in Spanish). Active development of skills and strategies for functional fluency in Spanish in real cultural contexts.",
                                    "prereq": {
                                        "minimum_course_grade": "C",
                                        "concurrency_ind": false,
                                        "course": {
                                            "name": "Intermediate Conver Spanish II",
                                            "maximum_credits": 3.0,
                                            "minimum_credits": 3.0,
                                            "id": 1974470,
                                            "full_name": "SPA 202 - Intermediate Conver Spanish II",
                                            "full_number": "SPA 202",
                                            "code": "SPA 202"
                                        },
                                        "type": "course"
                                    },
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "SPA 206 - Conversational Fluency"
                                },
                                "type": "CourseRequirement",
                                "advanced": false
                            },
                            {
                                "name": "ASL 102 - American Sign Language II",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "96b3ba2b-7b45-4424-80e5-cff64d4715d3",
                                "parent_id": "d1bb35b6-7e63-470c-9e7c-8cede7ee26d6",
                                "credits": 3.0,
                                "course": {
                                    "maximum_credits": 3.0,
                                    "minimum_credits": 0.0,
                                    "created_at": "2019-09-11T18:54:29.502Z",
                                    "full_number": "ASL 102",
                                    "code": "ASL 102",
                                    "coreq": null,
                                    "name": "American Sign Language II",
                                    "id": 1972806,
                                    "updated_at": "2019-09-11T18:54:29.502Z",
                                    "description": "I, II. Prerequisite: ASL 101 with a minimum grade of \"C\" or departmental permission.  Continued development of basic knowledge of and understanding of conversational ASL and cultural features of the language and community. 3 Lec/ 1 Lab. Gen Ed. VIII.",
                                    "prereq": {
                                        "minimum_course_grade": "C",
                                        "concurrency_ind": false,
                                        "course": {
                                            "name": "American Sign Language I",
                                            "maximum_credits": 3.0,
                                            "minimum_credits": 0.0,
                                            "id": 1972805,
                                            "full_name": "ASL 101 - American Sign Language I",
                                            "full_number": "ASL 101",
                                            "code": "ASL 101"
                                        },
                                        "type": "course"
                                    },
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "ASL 102 - American Sign Language II"
                                },
                                "type": "CourseRequirement",
                                "advanced": true
                            },
                            {
                                "name": "SPA 202 - Intermediate Conver Spanish II",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "ce95ca41-3c54-4ce7-9c1b-ea75069dca7d",
                                "parent_id": "d1bb35b6-7e63-470c-9e7c-8cede7ee26d6",
                                "credits": 3.0,
                                "course": {
                                    "maximum_credits": 3.0,
                                    "minimum_credits": 3.0,
                                    "created_at": "2019-09-11T18:54:34.846Z",
                                    "full_number": "SPA 202",
                                    "code": "SPA 202",
                                    "coreq": null,
                                    "name": "Intermediate Conver Spanish II",
                                    "id": 1974470,
                                    "updated_at": "2019-09-11T18:54:34.846Z",
                                    "description": "I, II. Recommended: SPA 201 or equivalent proficiency. Development of more advanced skills for speaking, listening, reading, and writing, with increased emphasis on short readings, discussions, and compositions on cultural topics. Laboratory work required. Students entering SPA 202 by referral or placement receive nine hours credit for SPA 101, 102, and 201 if they make an Å¼AÅ¼ or Å¼BÅ¼ in 202. Gen. Ed. VIII.",
                                    "prereq": {
                                        "minimum_course_grade": "C",
                                        "concurrency_ind": false,
                                        "course": {
                                            "name": "Intermediate Conver Spanish I",
                                            "maximum_credits": 3.0,
                                            "minimum_credits": 3.0,
                                            "id": 1974469,
                                            "full_name": "SPA 201 - Intermediate Conver Spanish I",
                                            "full_number": "SPA 201",
                                            "code": "SPA 201"
                                        },
                                        "type": "course"
                                    },
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "SPA 202 - Intermediate Conver Spanish II"
                                },
                                "type": "CourseRequirement",
                                "advanced": false
                            },
                            {
                                "name": "SPA 201 - Intermediate Conver Spanish I",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "268f4c43-7096-467d-acdf-d20a00a54d41",
                                "parent_id": "d1bb35b6-7e63-470c-9e7c-8cede7ee26d6",
                                "credits": 3.0,
                                "course": {
                                    "maximum_credits": 3.0,
                                    "minimum_credits": 3.0,
                                    "created_at": "2019-09-11T18:54:34.843Z",
                                    "full_number": "SPA 201",
                                    "code": "SPA 201",
                                    "coreq": null,
                                    "name": "Intermediate Conver Spanish I",
                                    "id": 1974469,
                                    "updated_at": "2019-09-11T18:54:34.843Z",
                                    "description": "I, II. Recommended: SPA 102 or equivalent proficiency. Development of more advanced skills for speaking, listening, reading, and writing in contemporary cultural contexts. Laboratory work required. Students entering SPA 201 by referral or placement receive six hours credit for SPA 101 and 102 if they make an Å¼AÅ¼ or Å¼BÅ¼ in 201. Gen. Ed. VIII.",
                                    "prereq": {
                                        "minimum_course_grade": "C",
                                        "concurrency_ind": false,
                                        "course": {
                                            "name": "Conversational Spanish II",
                                            "maximum_credits": 3.0,
                                            "minimum_credits": 3.0,
                                            "id": 1974468,
                                            "full_name": "SPA 102 - Conversational Spanish II",
                                            "full_number": "SPA 102",
                                            "code": "SPA 102"
                                        },
                                        "type": "course"
                                    },
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "SPA 201 - Intermediate Conver Spanish I"
                                },
                                "type": "CourseRequirement",
                                "advanced": false
                            },
                            {
                                "name": "SPA 102 - Conversational Spanish II",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "554219de-d1fa-4559-a2db-5259c871e82e",
                                "parent_id": "d1bb35b6-7e63-470c-9e7c-8cede7ee26d6",
                                "credits": 3.0,
                                "course": {
                                    "maximum_credits": 3.0,
                                    "minimum_credits": 3.0,
                                    "created_at": "2019-09-11T18:54:34.839Z",
                                    "full_number": "SPA 102",
                                    "code": "SPA 102",
                                    "coreq": null,
                                    "name": "Conversational Spanish II",
                                    "id": 1974468,
                                    "updated_at": "2019-09-11T18:54:34.839Z",
                                    "description": "I, II. Prerequisite: SPA 101, or equivalent proficiency. (Students with three or four successful years of high school Spanish should begin their study in SPA 102, 105, or higher. Students entering SPA 102 by referral or placement will receive three hours credit for SPA 101 if they make an A in 102.) Continuation of SPA 101. Conducted in Spanish. Not open to students who have native or near-native fluency in Spanish.",
                                    "prereq": {
                                        "minimum_course_grade": "C",
                                        "concurrency_ind": false,
                                        "course": {
                                            "name": "Conversational Spanish I",
                                            "maximum_credits": 3.0,
                                            "minimum_credits": 3.0,
                                            "id": 1974467,
                                            "full_name": "SPA 101 - Conversational Spanish I",
                                            "full_number": "SPA 101",
                                            "code": "SPA 101"
                                        },
                                        "type": "course"
                                    },
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "SPA 102 - Conversational Spanish II"
                                },
                                "type": "CourseRequirement",
                                "advanced": false
                            },
                            {
                                "name": "SPA 101 - Conversational Spanish I",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "db853bfa-1294-428e-9b48-24f9839a5647",
                                "parent_id": "d1bb35b6-7e63-470c-9e7c-8cede7ee26d6",
                                "credits": 3.0,
                                "course": {
                                    "maximum_credits": 3.0,
                                    "minimum_credits": 3.0,
                                    "created_at": "2019-09-11T18:54:34.835Z",
                                    "full_number": "SPA 101",
                                    "code": "SPA 101",
                                    "coreq": null,
                                    "name": "Conversational Spanish I",
                                    "id": 1974467,
                                    "updated_at": "2019-09-11T18:54:34.835Z",
                                    "description": "I, II. Prerequisite: completion of all required developmental reading and writing courses. Beginning Spanish for students with little or no previous study of Spanish. Qualified students should enroll at a higher level. Proficiency-based course emphasizing active communication in Spanish, and introducing the cultural diversity of the Spanish-speaking world.  Conducted in Spanish.  Not open to students who have native or near-native fluency in Spanish.  Gen. Ed. E-6.",
                                    "prereq": null,
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "SPA 101 - Conversational Spanish I"
                                },
                                "type": "CourseRequirement",
                                "advanced": false
                            },
                            {
                                "name": "SOC 400 - Racial and Ethnic Relations",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "ccf12e12-5849-489d-8289-10490b856dd7",
                                "parent_id": "d1bb35b6-7e63-470c-9e7c-8cede7ee26d6",
                                "credits": 3.0,
                                "course": {
                                    "maximum_credits": 3.0,
                                    "minimum_credits": 3.0,
                                    "created_at": "2019-09-11T18:54:34.822Z",
                                    "full_number": "SOC 400",
                                    "code": "SOC 400",
                                    "coreq": null,
                                    "name": "Racial and Ethnic Relations",
                                    "id": 1974463,
                                    "updated_at": "2019-09-11T18:54:34.822Z",
                                    "description": "A. Cross-listed as AFA 400. Prerequisites: SOC 131 or SOC235; ENG 102 or ENG 102R or ENG 105 (B) or HON 102. Analysis of the development of racial and ethnic relations from the perspective of sociology and related social sciences. Examination of issues related to dominant and minority group status in the United States and cross-culturally. Gen. Ed. E-6. Credit will not be awarded for both SOC 400 and AFA 400.",
                                    "prereq": {
                                        "operands": [
                                            {
                                                "operands": [
                                                    {
                                                        "minimum_course_grade": "C",
                                                        "concurrency_ind": false,
                                                        "course": {
                                                            "name": "Introductory Sociology",
                                                            "maximum_credits": 3.0,
                                                            "minimum_credits": 3.0,
                                                            "id": 1974456,
                                                            "full_name": "SOC 131 - Introductory Sociology",
                                                            "full_number": "SOC 131",
                                                            "code": "SOC 131"
                                                        },
                                                        "type": "course"
                                                    },
                                                    {
                                                        "minimum_course_grade": "C",
                                                        "concurrency_ind": false,
                                                        "course": {
                                                            "name": "Social Problems",
                                                            "maximum_credits": 3.0,
                                                            "minimum_credits": 3.0,
                                                            "id": 1974458,
                                                            "full_name": "SOC 235 - Social Problems",
                                                            "full_number": "SOC 235",
                                                            "code": "SOC 235"
                                                        },
                                                        "type": "course"
                                                    }
                                                ],
                                                "type": "or"
                                            },
                                            {
                                                "operands": [
                                                    {
                                                        "minimum_course_grade": "C",
                                                        "concurrency_ind": false,
                                                        "course": {
                                                            "name": "Research, Writing, & Rhetoric",
                                                            "maximum_credits": 3.0,
                                                            "minimum_credits": 3.0,
                                                            "id": 1973344,
                                                            "full_name": "ENG 102 - Research, Writing, & Rhetoric",
                                                            "full_number": "ENG 102",
                                                            "code": "ENG 102"
                                                        },
                                                        "type": "course"
                                                    },
                                                    {
                                                        "minimum_course_grade": "C",
                                                        "concurrency_ind": false,
                                                        "course": {
                                                            "name": "First Year Writing Seminar",
                                                            "maximum_credits": 3.0,
                                                            "minimum_credits": 3.0,
                                                            "id": 1977160,
                                                            "full_name": "ENG 105 - First Year Writing Seminar",
                                                            "full_number": "ENG 105",
                                                            "code": "ENG 105"
                                                        },
                                                        "type": "course"
                                                    },
                                                    {
                                                        "minimum_course_grade": "C",
                                                        "concurrency_ind": false,
                                                        "course": {
                                                            "name": "Honors Rhetoric",
                                                            "maximum_credits": 6.0,
                                                            "minimum_credits": 6.0,
                                                            "id": 1973709,
                                                            "full_name": "HON 102 - Honors Rhetoric",
                                                            "full_number": "HON 102",
                                                            "code": "HON 102"
                                                        },
                                                        "type": "course"
                                                    }
                                                ],
                                                "type": "or"
                                            }
                                        ],
                                        "type": "and"
                                    },
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "SOC 400 - Racial and Ethnic Relations"
                                },
                                "type": "CourseRequirement",
                                "advanced": false
                            },
                            {
                                "name": "SED 104 - Special Education Introduction",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "dbf4a2cf-9ce1-4a9f-bcd8-cdba36bec4ab",
                                "parent_id": "d1bb35b6-7e63-470c-9e7c-8cede7ee26d6",
                                "credits": 3.0,
                                "course": {
                                    "maximum_credits": 3.0,
                                    "minimum_credits": 3.0,
                                    "created_at": "2019-09-11T18:54:34.708Z",
                                    "full_number": "SED 104",
                                    "code": "SED 104",
                                    "coreq": null,
                                    "name": "Special Education Introduction",
                                    "id": 1974431,
                                    "updated_at": "2019-09-11T18:54:34.708Z",
                                    "description": "I, II, A. Overview of major categories of exceptionalities and the educational, legal, and social issues in the area of disabilities and special education. Observations/participation through field experience required. Gen. Ed Element 6.",
                                    "prereq": null,
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "SED 104 - Special Education Introduction"
                                },
                                "type": "CourseRequirement",
                                "advanced": false
                            },
                            {
                                "name": "JPN 102 - Conversational Japanese II",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "4e25eb30-bc38-4fa2-be05-f3b03f34dc64",
                                "parent_id": "d1bb35b6-7e63-470c-9e7c-8cede7ee26d6",
                                "credits": 3.0,
                                "course": {
                                    "maximum_credits": 3.0,
                                    "minimum_credits": 3.0,
                                    "created_at": "2019-09-11T18:54:32.448Z",
                                    "full_number": "JPN 102",
                                    "code": "JPN 102",
                                    "coreq": null,
                                    "name": "Conversational Japanese II",
                                    "id": 1973754,
                                    "updated_at": "2019-09-11T18:54:32.448Z",
                                    "description": "A. Recommended: JPN 101 or equivalent proficiency. Continuation of JPN 101. Emphasis on conversation. Students entering JPN 102 by referral or placement will receive three hours credit for JPN 101 if they make an Å¼AÅ¼ in 102. Laboratory work required. Gen. Ed. VIII.",
                                    "prereq": {
                                        "minimum_course_grade": "C",
                                        "concurrency_ind": false,
                                        "course": {
                                            "name": "Conversational Japanese I",
                                            "maximum_credits": 3.0,
                                            "minimum_credits": 3.0,
                                            "id": 1973753,
                                            "full_name": "JPN 101 - Conversational Japanese I",
                                            "full_number": "JPN 101",
                                            "code": "JPN 101"
                                        },
                                        "type": "course"
                                    },
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "JPN 102 - Conversational Japanese II"
                                },
                                "type": "CourseRequirement",
                                "advanced": false
                            },
                            {
                                "name": "JPN 101 - Conversational Japanese I",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "4b31ac67-2fc3-4be9-824a-5160f788ff5a",
                                "parent_id": "d1bb35b6-7e63-470c-9e7c-8cede7ee26d6",
                                "credits": 3.0,
                                "course": {
                                    "maximum_credits": 3.0,
                                    "minimum_credits": 3.0,
                                    "created_at": "2019-09-11T18:54:32.445Z",
                                    "full_number": "JPN 101",
                                    "code": "JPN 101",
                                    "coreq": null,
                                    "name": "Conversational Japanese I",
                                    "id": 1973753,
                                    "updated_at": "2019-09-11T18:54:32.445Z",
                                    "description": "I, II. An introduction to the grammar and structure of Japanese taught in cultural context. Practice in pronunciation, reading, and writing systems with an emphasis on conversation. Gen. Ed. VIII.",
                                    "prereq": null,
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "JPN 101 - Conversational Japanese I"
                                },
                                "type": "CourseRequirement",
                                "advanced": false
                            },
                            {
                                "name": "HON 320W - Dvrsty of Perspectives & Exp",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "44c5c76d-9b76-42a7-beeb-a4ea4320562a",
                                "parent_id": "d1bb35b6-7e63-470c-9e7c-8cede7ee26d6",
                                "credits": 3.0,
                                "course": {
                                    "maximum_credits": 3.0,
                                    "minimum_credits": 3.0,
                                    "created_at": "2019-09-11T18:54:32.322Z",
                                    "full_number": "HON 320W",
                                    "code": "HON 320W",
                                    "coreq": null,
                                    "name": "Dvrsty of Perspectives & Exp",
                                    "id": 1973716,
                                    "updated_at": "2019-09-11T18:54:32.322Z",
                                    "description": "A. Prerequisite: Admission to the Honors Program or departmental approval and ENG 102 or 105(B) or HON 102. A topics course in the diversity of perspectives and experiences meeting the goals of the Honors Program. May be retaken with different topics to a maximum of six hours. Honors Core. Gen Ed. Element 6.",
                                    "prereq": {
                                        "operands": [
                                            {
                                                "operands": [
                                                    {
                                                        "minimum_course_grade": "C",
                                                        "concurrency_ind": false,
                                                        "course": {
                                                            "name": "Research, Writing, & Rhetoric",
                                                            "maximum_credits": 3.0,
                                                            "minimum_credits": 3.0,
                                                            "id": 1973344,
                                                            "full_name": "ENG 102 - Research, Writing, & Rhetoric",
                                                            "full_number": "ENG 102",
                                                            "code": "ENG 102"
                                                        },
                                                        "type": "course"
                                                    },
                                                    {
                                                        "minimum_course_grade": "C",
                                                        "concurrency_ind": false,
                                                        "course": {
                                                            "name": "First Year Writing Seminar",
                                                            "maximum_credits": 3.0,
                                                            "minimum_credits": 3.0,
                                                            "id": 1977160,
                                                            "full_name": "ENG 105 - First Year Writing Seminar",
                                                            "full_number": "ENG 105",
                                                            "code": "ENG 105"
                                                        },
                                                        "type": "course"
                                                    },
                                                    {
                                                        "minimum_course_grade": "C",
                                                        "concurrency_ind": false,
                                                        "course": {
                                                            "name": "Honors Rhetoric",
                                                            "maximum_credits": 6.0,
                                                            "minimum_credits": 6.0,
                                                            "id": 1973709,
                                                            "full_name": "HON 102 - Honors Rhetoric",
                                                            "full_number": "HON 102",
                                                            "code": "HON 102"
                                                        },
                                                        "type": "course"
                                                    }
                                                ],
                                                "type": "or"
                                            },
                                            {
                                                "type": "custom",
                                                "description": "Admission to the Honors Program or departmental approval"
                                            }
                                        ],
                                        "type": "and"
                                    },
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "HON 320W - Dvrsty of Perspectives & Exp"
                                },
                                "type": "CourseRequirement",
                                "advanced": false
                            },
                            {
                                "name": "ASL 101 - American Sign Language I",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "39af1945-21c6-4ca7-8bd6-4eb6cb15f1e8",
                                "parent_id": "d1bb35b6-7e63-470c-9e7c-8cede7ee26d6",
                                "credits": 3.0,
                                "course": {
                                    "maximum_credits": 3.0,
                                    "minimum_credits": 0.0,
                                    "created_at": "2019-09-11T18:54:29.500Z",
                                    "full_number": "ASL 101",
                                    "code": "ASL 101",
                                    "coreq": null,
                                    "name": "American Sign Language I",
                                    "id": 1972805,
                                    "updated_at": "2019-09-11T18:54:29.500Z",
                                    "description": "I, II.  A functional notional approach to learning beginning American Sign Language (ASL).  Development of basic knowledge of and understanding of conversational ASL and cultural features of the language and community. 3 Lec/ 1 Lab. Gen Ed. VIII.",
                                    "prereq": null,
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "ASL 101 - American Sign Language I"
                                },
                                "type": "CourseRequirement",
                                "advanced": true
                            }
                        ]
                    },
                    "id": "a6ddc436-371a-4877-8090-ffb6403ff636",
                    "parent_id": null,
                    "type": "CoreRequirement"
                },
                "id": 12181,
                "position": 2,
                "credits": 3.0,
                "custom": false,
                "plan_item_spec": null
            },
            {
                "name": "Electricty & Magnetism I",
                "requirement": {
                    "name": "PHY 421 - Electricty & Magnetism I",
                    "attempts": 1,
                    "minimum_grade": "C",
                    "id": "078e5b52-8ee7-4dc7-84e0-9ab50f9a706b",
                    "parent_id": null,
                    "credits": 3.0,
                    "course": {
                        "maximum_credits": 3.0,
                        "minimum_credits": 3.0,
                        "created_at": "2019-09-11T18:54:34.103Z",
                        "full_number": "PHY 421",
                        "code": "PHY 421",
                        "coreq": null,
                        "name": "Electricty & Magnetism I",
                        "id": 1974261,
                        "updated_at": "2019-09-11T18:54:34.103Z",
                        "description": "(3) A. Prerequisites: PHY 310 or departmental approval. Electrostatics in vacuum and dielectrics, solutions of Laplace's and Poisson's equations, magnetic fields, indeed EMF's, magnetic materials, and Maxwell's equations.",
                        "prereq": {
                            "minimum_course_grade": "C",
                            "concurrency_ind": false,
                            "course": {
                                "name": "Theoretical Methods in Physics",
                                "maximum_credits": 3.0,
                                "minimum_credits": 3.0,
                                "id": 1974257,
                                "full_name": "PHY 310 - Theoretical Methods in Physics",
                                "full_number": "PHY 310",
                                "code": "PHY 310"
                            },
                            "type": "course"
                        },
                        "academic_period": {
                            "term": "Fall",
                            "name": "Fall 2018",
                            "year": 2018,
                            "id": 96,
                            "academic_year": "2018-2019",
                            "code": "2018.75"
                        },
                        "full_name": "PHY 421 - Electricty & Magnetism I"
                    },
                    "type": "CourseRequirement",
                    "advanced": false
                },
                "id": 12179,
                "position": 0,
                "credits": 3.0,
                "custom": false,
                "plan_item_spec": null
            },
            {
                "name": "PHY Elective",
                "requirement": {
                    "name": "PHY Elective",
                    "maximum_credits": 3.0,
                    "minimum_credits": 3.0,
                    "minimum_grade": null,
                    "id": "0e494149-6da4-4a00-9607-7049404b0079",
                    "parent_id": null,
                    "rules": [
                        {
                            "requirement_id": "0e494149-6da4-4a00-9607-7049404b0079",
                            "max_hours": "",
                            "exclude": false,
                            "code_string": "PHY",
                            "minimum_match_number": "",
                            "min_hours": "",
                            "id": "7bbecb45-7182-4ceb-9da1-abc712c6f881",
                            "match_string": "",
                            "maximum_match_number": ""
                        }
                    ],
                    "type": "WildCardRequirement"
                },
                "id": 12176,
                "position": 2,
                "credits": 3.0,
                "custom": false,
                "plan_item_spec": null
            },
            {
                "name": "Gen. Ed. E-1A (ENG 101)",
                "requirement": {
                    "name": "Gen. Ed. E-1A (ENG 101)",
                    "maximum_credits": 3.0,
                    "minimum_credits": 3.0,
                    "required": 1,
                    "id": "7854ee39-1737-44fb-aaa6-fc985a0ccda2",
                    "parent_id": null,
                    "type": "DegreeRequirement",
                    "advanced": false,
                    "subrequirements": [
                        {
                            "name": "ENG 101 - Reading, Writing, & Rhetoric",
                            "attempts": 1,
                            "minimum_grade": "C",
                            "id": "2fa4c6e8-cf34-4ef1-9bf3-33806be11be5",
                            "parent_id": "7854ee39-1737-44fb-aaa6-fc985a0ccda2",
                            "credits": 3.0,
                            "course": {
                                "maximum_credits": 3.0,
                                "minimum_credits": 3.0,
                                "created_at": "2019-09-11T18:54:31.178Z",
                                "full_number": "ENG 101",
                                "code": "ENG 101",
                                "coreq": null,
                                "name": "Reading, Writing, & Rhetoric",
                                "id": 1973342,
                                "updated_at": "2019-09-11T18:54:31.178Z",
                                "description": "(3) I, II. Prerequisite: ENG 090 or an ACT subscore of 18 or higher ACT English subscore of 18 or higher and ACT Reading subscore of 20; or SAT writing score of 430 or higher and SAT reading score of 470 or higher; or SAT Evidence-Based Reading & Writing score of score of 480 or higher. A writing course developing critical reading skills which integrating and responding to varied sources; composing texts including summaries, analyses, evaluations, responses, and arguments; emphasizing style, organization, coherence, purpose, and persuasion for different audiences. Credit will not be awarded to students who have credit for ENG 101R.  Gen. Ed. E-1A [WC].",
                                "prereq": null,
                                "academic_period": {
                                    "term": "Fall",
                                    "name": "Fall 2018",
                                    "year": 2018,
                                    "id": 96,
                                    "academic_year": "2018-2019",
                                    "code": "2018.75"
                                },
                                "full_name": "ENG 101 - Reading, Writing, & Rhetoric"
                            },
                            "type": "CourseRequirement",
                            "advanced": false
                        }
                    ]
                },
                "id": 12155,
                "position": 4,
                "credits": 3.0,
                "custom": false,
                "plan_item_spec": null
            }
        ],
        "position": 6,
        "credits": 15.0
    },
    {
        "name": "Term 7",
        "plan_items": [
            {
                "name": "Electricity and Magnetism II. ",
                "requirement": {
                    "name": "PHY 422 - Electricity and Magnetism II. ",
                    "attempts": 1,
                    "minimum_grade": "C",
                    "id": "a482115d-b335-425c-af2f-3be65bac4eed",
                    "parent_id": null,
                    "credits": 3.0,
                    "course": {
                        "maximum_credits": 3.0,
                        "minimum_credits": 3.0,
                        "created_at": "2019-12-08T21:20:15.778Z",
                        "full_number": "PHY 422",
                        "code": "PHY 422",
                        "coreq": null,
                        "name": "Electricity and Magnetism II. ",
                        "id": 1978274,
                        "updated_at": "2019-12-08T21:20:15.778Z",
                        "description": "Prerequisites: PHY 421 or departmental approval.\nMaxwellâ€™s equations, electromagnetic waves in insulators\nand conductors, energy and momentum,\nelectromagnetic radiation, dipole radiation, special\nrelativity, special applications.",
                        "prereq": {
                            "minimum_course_grade": "C",
                            "concurrency_ind": false,
                            "course": {
                                "name": "Electricty & Magnetism I",
                                "maximum_credits": 3.0,
                                "minimum_credits": 3.0,
                                "id": 1974261,
                                "full_name": "PHY 421 - Electricty & Magnetism I",
                                "full_number": "PHY 421",
                                "code": "PHY 421"
                            },
                            "type": "course"
                        },
                        "academic_period": {
                            "term": "Fall",
                            "name": "Fall 2018",
                            "year": 2018,
                            "id": 96,
                            "academic_year": "2018-2019",
                            "code": "2018.75"
                        },
                        "full_name": "PHY 422 - Electricity and Magnetism II. "
                    },
                    "type": "CourseRequirement",
                    "advanced": false
                },
                "id": 12184,
                "position": 0,
                "credits": 3.0,
                "custom": false,
                "plan_item_spec": null
            },
            {
                "name": "3A Arts",
                "requirement": {
                    "name": "3A Arts",
                    "core": {
                        "name": "3A Arts",
                        "maximum_credits": 3.0,
                        "minimum_credits": 3.0,
                        "required": 1,
                        "id": "0e7dc214-d306-4d90-99cf-b32310748573",
                        "parent_id": null,
                        "type": "DegreeRequirement",
                        "advanced": false,
                        "subrequirements": [
                            {
                                "name": "MUH 273 - Survey of Amer Popular Music",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "f2886aa5-a15d-409e-952c-7d529d5b914f",
                                "parent_id": "0e7dc214-d306-4d90-99cf-b32310748573",
                                "credits": 3.0,
                                "course": {
                                    "maximum_credits": 3.0,
                                    "minimum_credits": 3.0,
                                    "created_at": "2019-09-11T18:54:32.888Z",
                                    "full_number": "MUH 273",
                                    "code": "MUH 273",
                                    "coreq": null,
                                    "name": "Survey of Amer Popular Music",
                                    "id": 1973893,
                                    "updated_at": "2019-09-11T18:54:32.888Z",
                                    "description": "I, II. Survey of American popular music establishing its origins and tracing its development to the present time. Gen. Ed. Element 3A",
                                    "prereq": null,
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "MUH 273 - Survey of Amer Popular Music"
                                },
                                "type": "CourseRequirement",
                                "advanced": false
                            },
                            {
                                "name": "MUH 272 - Music Literature",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "dc4d84dc-e042-4409-bd7e-83b49de12d14",
                                "parent_id": "0e7dc214-d306-4d90-99cf-b32310748573",
                                "credits": 3.0,
                                "course": {
                                    "maximum_credits": 3.0,
                                    "minimum_credits": 3.0,
                                    "created_at": "2019-09-11T18:54:32.884Z",
                                    "full_number": "MUH 272",
                                    "code": "MUH 272",
                                    "coreq": null,
                                    "name": "Music Literature",
                                    "id": 1973892,
                                    "updated_at": "2019-09-11T18:54:32.884Z",
                                    "description": "I, II. Critical listening and scorereading of the standard repertory of music in Western Civilization from Gregorian plainchant to the Contemporary era. Gen. Ed. Element 3A",
                                    "prereq": null,
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "MUH 272 - Music Literature"
                                },
                                "type": "CourseRequirement",
                                "advanced": false
                            },
                            {
                                "name": "MUH 271 - Jazz History",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "5de2ae0e-5594-4bc4-9ff4-be0b90aa1e16",
                                "parent_id": "0e7dc214-d306-4d90-99cf-b32310748573",
                                "credits": 3.0,
                                "course": {
                                    "maximum_credits": 3.0,
                                    "minimum_credits": 3.0,
                                    "created_at": "2019-09-11T18:54:32.881Z",
                                    "full_number": "MUH 271",
                                    "code": "MUH 271",
                                    "coreq": null,
                                    "name": "Jazz History",
                                    "id": 1973891,
                                    "updated_at": "2019-09-11T18:54:32.881Z",
                                    "description": "I, II. A listening survey course tracing the development of jazz from its roots in the music of West Africa, African American folk music, and European music styles to the present. Gen. Ed. Element 3A",
                                    "prereq": null,
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "MUH 271 - Jazz History"
                                },
                                "type": "CourseRequirement",
                                "advanced": false
                            },
                            {
                                "name": "MUH 171 - Music Appreciation",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "833468aa-d753-49f2-9097-3bd3f9d91749",
                                "parent_id": "0e7dc214-d306-4d90-99cf-b32310748573",
                                "credits": 3.0,
                                "course": {
                                    "maximum_credits": 3.0,
                                    "minimum_credits": 3.0,
                                    "created_at": "2019-09-11T18:54:32.878Z",
                                    "full_number": "MUH 171",
                                    "code": "MUH 171",
                                    "coreq": null,
                                    "name": "Music Appreciation",
                                    "id": 1973890,
                                    "updated_at": "2019-09-11T18:54:32.878Z",
                                    "description": "I, II. May not count toward a music major or minor. Provides the general college student with a cultural background in music. Masterpieces of music, composers, and techniques presented through listening materials and concert attendance. Gen. Ed. Element 3A",
                                    "prereq": null,
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "MUH 171 - Music Appreciation"
                                },
                                "type": "CourseRequirement",
                                "advanced": false
                            },
                            {
                                "name": "HUM 300 - Humanity in the Postmodern Age",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "742078e1-934a-41bd-9bdc-bcee60969cb5",
                                "parent_id": "0e7dc214-d306-4d90-99cf-b32310748573",
                                "credits": 3.0,
                                "course": {
                                    "maximum_credits": 3.0,
                                    "minimum_credits": 3.0,
                                    "created_at": "2019-09-11T18:54:32.378Z",
                                    "full_number": "HUM 300",
                                    "code": "HUM 300",
                                    "coreq": null,
                                    "name": "Humanity in the Postmodern Age",
                                    "id": 1973734,
                                    "updated_at": "2019-09-11T18:54:32.378Z",
                                    "description": "(3) A. Prerequisites: ENG 102, 105(B), or HON 102. COmparative and interdisciplinary approaches to the study of culture since 1945, including study of Western and non-Western works of literature, visual art, music, film, and religion/philosophy; focus on integrative thinking as a means toward affirming values for living meaningfully in the contemporary world. Credit will not be awarded for both HUM 300 and 300W. Gen. Ed. E 3A, 3B.",
                                    "prereq": null,
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "HUM 300 - Humanity in the Postmodern Age"
                                },
                                "type": "CourseRequirement",
                                "advanced": false
                            },
                            {
                                "name": "HUM 228 - Search for Meaning Mod World",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "6d7b95fc-8584-4ebb-be77-4e0cccf4e4a7",
                                "parent_id": "0e7dc214-d306-4d90-99cf-b32310748573",
                                "credits": 3.0,
                                "course": {
                                    "maximum_credits": 3.0,
                                    "minimum_credits": 3.0,
                                    "created_at": "2019-09-11T18:54:32.374Z",
                                    "full_number": "HUM 228",
                                    "code": "HUM 228",
                                    "coreq": null,
                                    "name": "Search for Meaning Mod World",
                                    "id": 1973733,
                                    "updated_at": "2019-09-11T18:54:32.374Z",
                                    "description": "I, II. An introduction to the comparative and interdisciplinary study of culture in the modern world, including Western and non-Western literature, visual art, music, film, and religion/philosophy; emphasis on intergrative thinking and exploration of values for living meaningfully in the modern world. Gen. Ed. Element 3A. 3B.",
                                    "prereq": null,
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "HUM 228 - Search for Meaning Mod World"
                                },
                                "type": "CourseRequirement",
                                "advanced": false
                            },
                            {
                                "name": "HUM 226 - Search for Meaning Anct World",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "7d877978-c6a5-4692-b84a-441765a59ea8",
                                "parent_id": "0e7dc214-d306-4d90-99cf-b32310748573",
                                "credits": 3.0,
                                "course": {
                                    "maximum_credits": 3.0,
                                    "minimum_credits": 3.0,
                                    "created_at": "2019-09-11T18:54:32.371Z",
                                    "full_number": "HUM 226",
                                    "code": "HUM 226",
                                    "coreq": null,
                                    "name": "Search for Meaning Anct World",
                                    "id": 1973732,
                                    "updated_at": "2019-09-11T18:54:32.371Z",
                                    "description": "I, II. Comparative and interdisciplinary approaches to the study of culture in the ancient world, including Western and non-Western literature, drama, visual art, architecture, and religion/philosophy in historical context; emphasis on integrative thinking and exploration of living meaningfully from the ancient perspective. Gen. Ed. Element 3A, 3B.",
                                    "prereq": null,
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "HUM 226 - Search for Meaning Anct World"
                                },
                                "type": "CourseRequirement",
                                "advanced": false
                            },
                            {
                                "name": "HUM 124 - Humanities/Search for Meaning",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "336183f5-707b-4913-8062-b5a7d9301396",
                                "parent_id": "0e7dc214-d306-4d90-99cf-b32310748573",
                                "credits": 3.0,
                                "course": {
                                    "maximum_credits": 3.0,
                                    "minimum_credits": 3.0,
                                    "created_at": "2019-09-11T18:54:32.368Z",
                                    "full_number": "HUM 124",
                                    "code": "HUM 124",
                                    "coreq": null,
                                    "name": "Humanities/Search for Meaning",
                                    "id": 1973731,
                                    "updated_at": "2019-09-11T18:54:32.368Z",
                                    "description": "(3) I, II. An introduction to the comparative and interdisciplinary study of culture, including Western and non-Western literature, visual art, music, and design, emphasizing integrative thinking as a means toward affirming values for living meaningfully in today's world. Gen. Ed. Element 3A, 3B.",
                                    "prereq": null,
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "HUM 124 - Humanities/Search for Meaning"
                                },
                                "type": "CourseRequirement",
                                "advanced": false
                            },
                            {
                                "name": "HON 307W - Seminar in the Arts",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "501f1cfc-38bc-41c8-ae12-f9e195027daa",
                                "parent_id": "0e7dc214-d306-4d90-99cf-b32310748573",
                                "credits": 3.0,
                                "course": {
                                    "maximum_credits": 3.0,
                                    "minimum_credits": 3.0,
                                    "created_at": "2019-09-11T18:54:32.305Z",
                                    "full_number": "HON 307W",
                                    "code": "HON 307W",
                                    "coreq": null,
                                    "name": "Seminar in the Arts",
                                    "id": 1973711,
                                    "updated_at": "2019-09-11T18:54:32.305Z",
                                    "description": "A. Prerequiste: ENG 102 or 105(B) or HON 102 and Admission to the Honors Program; or deparmental approval. A topics course in the arts meeting the goals of the Honors Program. May be retaken with different topics to a maximum of six hours. Gen. Ed. Element 3A.",
                                    "prereq": null,
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "HON 307W - Seminar in the Arts"
                                },
                                "type": "CourseRequirement",
                                "advanced": false
                            },
                            {
                                "name": "ESS 200 - Dance and Culture",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "ae44479d-a654-4338-91e0-b70814f46c04",
                                "parent_id": "0e7dc214-d306-4d90-99cf-b32310748573",
                                "credits": 3.0,
                                "course": {
                                    "maximum_credits": 3.0,
                                    "minimum_credits": 3.0,
                                    "created_at": "2019-09-11T18:54:31.385Z",
                                    "full_number": "ESS 200",
                                    "code": "ESS 200",
                                    "coreq": null,
                                    "name": "Dance and Culture",
                                    "id": 1973413,
                                    "updated_at": "2019-09-11T18:54:31.385Z",
                                    "description": "I. Formerly PHE 200. Introduction to dance and its role as a non-verbal means of expression. The course examines several dance forms and their cultural context including folk, social, ethnic, entertainment, and dance as an art form. Gen. Ed. Element 3A",
                                    "prereq": null,
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "ESS 200 - Dance and Culture"
                                },
                                "type": "CourseRequirement",
                                "advanced": false
                            },
                            {
                                "name": "ENG 335W - Modern Drama",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "df1c0489-7bf8-4e36-909f-2e9d6de6ac7e",
                                "parent_id": "0e7dc214-d306-4d90-99cf-b32310748573",
                                "credits": 3.0,
                                "course": {
                                    "maximum_credits": 3.0,
                                    "minimum_credits": 3.0,
                                    "created_at": "2019-09-11T18:54:31.226Z",
                                    "full_number": "ENG 335W",
                                    "code": "ENG 335W",
                                    "coreq": null,
                                    "name": "Modern Drama",
                                    "id": 1973359,
                                    "updated_at": "2019-09-11T18:54:31.226Z",
                                    "description": "(3). Prerequisite: ENG 102 or 105 (B) or HON 102. Study of representative modren plays from Ibsen to the present. Gen. Ed. Element 3A. Credit will not be awarded for both ENG 335W and ENG 335.",
                                    "prereq": null,
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "ENG 335W - Modern Drama"
                                },
                                "type": "CourseRequirement",
                                "advanced": false
                            },
                            {
                                "name": "BEM 351 - Cinema History II",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "e4c8a4e0-f0db-41f6-996a-88282902af4e",
                                "parent_id": "0e7dc214-d306-4d90-99cf-b32310748573",
                                "credits": 3.0,
                                "course": {
                                    "maximum_credits": 3.0,
                                    "minimum_credits": 0.0,
                                    "created_at": "2019-09-11T18:54:29.703Z",
                                    "full_number": "BEM 351",
                                    "code": "BEM 351",
                                    "coreq": null,
                                    "name": "Cinema History II",
                                    "id": 1972884,
                                    "updated_at": "2019-09-11T18:54:29.703Z",
                                    "description": "A. Historical survey from 1939 to present. Includes theories, styles, and critical positions related to the sound film and considers origins and implications for future directions. Feature length and short films viewed. Gen. Ed. VII (AH). 2 Lec/2 Lab.",
                                    "prereq": null,
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "BEM 351 - Cinema History II"
                                },
                                "type": "CourseRequirement",
                                "advanced": true
                            },
                            {
                                "name": "BEM 350 - Cinema History I",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "f48f33f5-71f2-4d0d-803f-0e2c2711ca3d",
                                "parent_id": "0e7dc214-d306-4d90-99cf-b32310748573",
                                "credits": 3.0,
                                "course": {
                                    "maximum_credits": 3.0,
                                    "minimum_credits": 0.0,
                                    "created_at": "2019-09-11T18:54:29.701Z",
                                    "full_number": "BEM 350",
                                    "code": "BEM 350",
                                    "coreq": null,
                                    "name": "Cinema History I",
                                    "id": 1972883,
                                    "updated_at": "2019-09-11T18:54:29.701Z",
                                    "description": "A. Prerequisite: ENG 102 or ENG 105(B) or HON 102. Historical survey of cinema from its origins to 1939. Examines developments in directing, acting, editing, and other areas of cinema as an art form. Feature length and short films viewed. Gen. Ed. VII (AH).  2 Lec/2 Lab.",
                                    "prereq": null,
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "BEM 350 - Cinema History I"
                                },
                                "type": "CourseRequirement",
                                "advanced": true
                            },
                            {
                                "name": "ART 200 - Art Appreciation:  Orientation",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "94004900-39e0-4d97-9547-b5faa1af5d85",
                                "parent_id": "0e7dc214-d306-4d90-99cf-b32310748573",
                                "credits": 3.0,
                                "course": {
                                    "maximum_credits": 3.0,
                                    "minimum_credits": 3.0,
                                    "created_at": "2019-09-11T18:54:29.383Z",
                                    "full_number": "ART 200",
                                    "code": "ART 200",
                                    "coreq": null,
                                    "name": "Art Appreciation:  Orientation",
                                    "id": 1972756,
                                    "updated_at": "2019-09-11T18:54:29.383Z",
                                    "description": "I, II. Introduction to the visual arts and their purposes, emphasis on ways and means available to the artist. Not open to art majors or minors. Gen. Ed. Element 3A",
                                    "prereq": null,
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "ART 200 - Art Appreciation:  Orientation"
                                },
                                "type": "CourseRequirement",
                                "advanced": false
                            },
                            {
                                "name": "THE 391 - Theatre History II",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "524de225-81e3-4084-b204-942fd4af86d6",
                                "parent_id": "0e7dc214-d306-4d90-99cf-b32310748573",
                                "credits": 3.0,
                                "course": {
                                    "maximum_credits": 3.0,
                                    "minimum_credits": 3.0,
                                    "created_at": "2019-10-03T22:13:44.663Z",
                                    "full_number": "THE 391",
                                    "code": "THE 391",
                                    "coreq": null,
                                    "name": "Theatre History II",
                                    "id": 1977163,
                                    "updated_at": "2019-10-03T22:13:44.663Z",
                                    "description": " ",
                                    "prereq": {
                                        "operands": [
                                            {
                                                "minimum_course_grade": "C",
                                                "concurrency_ind": false,
                                                "course": {
                                                    "name": "Research, Writing, & Rhetoric",
                                                    "maximum_credits": 3.0,
                                                    "minimum_credits": 3.0,
                                                    "id": 1973344,
                                                    "full_name": "ENG 102 - Research, Writing, & Rhetoric",
                                                    "full_number": "ENG 102",
                                                    "code": "ENG 102"
                                                },
                                                "type": "course"
                                            },
                                            {
                                                "minimum_course_grade": "C",
                                                "concurrency_ind": false,
                                                "course": {
                                                    "name": "First Year Writing Seminar",
                                                    "maximum_credits": 3.0,
                                                    "minimum_credits": 3.0,
                                                    "id": 1977160,
                                                    "full_name": "ENG 105 - First Year Writing Seminar",
                                                    "full_number": "ENG 105",
                                                    "code": "ENG 105"
                                                },
                                                "type": "course"
                                            },
                                            {
                                                "minimum_course_grade": "C",
                                                "concurrency_ind": false,
                                                "course": {
                                                    "name": "Honors Rhetoric",
                                                    "maximum_credits": 6.0,
                                                    "minimum_credits": 6.0,
                                                    "id": 1973709,
                                                    "full_name": "HON 102 - Honors Rhetoric",
                                                    "full_number": "HON 102",
                                                    "code": "HON 102"
                                                },
                                                "type": "course"
                                            }
                                        ],
                                        "type": "or"
                                    },
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "THE 391 - Theatre History II"
                                },
                                "type": "CourseRequirement",
                                "advanced": false
                            },
                            {
                                "name": "THE 390 - Theatre History I",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "6a5b591f-fc1a-414d-9ed7-b49545f91f93",
                                "parent_id": "0e7dc214-d306-4d90-99cf-b32310748573",
                                "credits": 3.0,
                                "course": {
                                    "maximum_credits": 3.0,
                                    "minimum_credits": 3.0,
                                    "created_at": "2019-09-11T18:54:35.119Z",
                                    "full_number": "THE 390",
                                    "code": "THE 390",
                                    "coreq": null,
                                    "name": "Theatre History I",
                                    "id": 1974544,
                                    "updated_at": "2019-09-11T18:54:35.119Z",
                                    "description": "I, A. Intensive examination of development of theatre from the Greeks to the French Renaissance. The historic origins of theatrical conventions will also be examined through attendance at live theatre, and readings of dramatic litereature. Gen Ed. E-3A or E-3B.",
                                    "prereq": null,
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "THE 390 - Theatre History I"
                                },
                                "type": "CourseRequirement",
                                "advanced": false
                            },
                            {
                                "name": "THE 135 - Acting I",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "4248319f-5333-4345-9968-cc43832f1f4c",
                                "parent_id": "0e7dc214-d306-4d90-99cf-b32310748573",
                                "credits": 3.0,
                                "course": {
                                    "maximum_credits": 3.0,
                                    "minimum_credits": 3.0,
                                    "created_at": "2019-09-11T18:54:35.094Z",
                                    "full_number": "THE 135",
                                    "code": "THE 135",
                                    "coreq": null,
                                    "name": "Acting I",
                                    "id": 1974537,
                                    "updated_at": "2019-09-11T18:54:35.094Z",
                                    "description": "I, II. Investigation and practice of the fundamentals in the acting process. Course work will include physical and mental preparation for the actor, improvisation, and beginning scene work.",
                                    "prereq": null,
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "THE 135 - Acting I"
                                },
                                "type": "CourseRequirement",
                                "advanced": false
                            },
                            {
                                "name": "THE 100 - Introduction to Theatre",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "a4a6458a-ad35-43d7-9fc9-2ea3e3ecd112",
                                "parent_id": "0e7dc214-d306-4d90-99cf-b32310748573",
                                "credits": 3.0,
                                "course": {
                                    "maximum_credits": 3.0,
                                    "minimum_credits": 3.0,
                                    "created_at": "2019-10-03T22:10:22.541Z",
                                    "full_number": "THE 100",
                                    "code": "THE 100",
                                    "coreq": null,
                                    "name": "Introduction to Theatre",
                                    "id": 1977162,
                                    "updated_at": "2019-10-03T22:10:22.541Z",
                                    "description": " ",
                                    "prereq": null,
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "THE 100 - Introduction to Theatre"
                                },
                                "type": "CourseRequirement",
                                "advanced": false
                            }
                        ]
                    },
                    "id": "90b2c07b-c44e-4827-bdd8-539ad624158b",
                    "parent_id": null,
                    "type": "CoreRequirement"
                },
                "id": 12168,
                "position": 2,
                "credits": 3.0,
                "custom": false,
                "plan_item_spec": null
            },
            {
                "name": "Quantum Mechanics",
                "requirement": {
                    "name": "PHY 470 - Quantum Mechanics",
                    "attempts": 1,
                    "minimum_grade": "C",
                    "id": "a626712b-7277-4729-b9a0-d98a24505c87",
                    "parent_id": null,
                    "credits": 3.0,
                    "course": {
                        "maximum_credits": 3.0,
                        "minimum_credits": 3.0,
                        "created_at": "2019-12-09T00:55:38.780Z",
                        "full_number": "PHY 470",
                        "code": "PHY 470",
                        "coreq": null,
                        "name": "Quantum Mechanics",
                        "id": 1978275,
                        "updated_at": "2019-12-09T00:55:38.780Z",
                        "description": "Prerequisite: PHY 310 and PHY 460 or departmental\napproval. Basic principles of wave mechanics, solutions\nof Schrodinger wave equation for simple systems,\ninterpretation of solutions and application to atomic and\nmolecular problems.",
                        "prereq": {
                            "operands": [
                                {
                                    "minimum_course_grade": "C",
                                    "concurrency_ind": false,
                                    "course": {
                                        "name": "Theoretical Methods in Physics",
                                        "maximum_credits": 3.0,
                                        "minimum_credits": 3.0,
                                        "id": 1974257,
                                        "full_name": "PHY 310 - Theoretical Methods in Physics",
                                        "full_number": "PHY 310",
                                        "code": "PHY 310"
                                    },
                                    "type": "course"
                                },
                                {
                                    "minimum_course_grade": "C",
                                    "concurrency_ind": false,
                                    "course": {
                                        "name": "Classical Mechanics. ",
                                        "maximum_credits": 4.0,
                                        "minimum_credits": 4.0,
                                        "id": 1978273,
                                        "full_name": "PHY 460 - Classical Mechanics. ",
                                        "full_number": "PHY 460",
                                        "code": "PHY 460"
                                    },
                                    "type": "course"
                                }
                            ],
                            "type": "and"
                        },
                        "academic_period": {
                            "term": "Fall",
                            "name": "Fall 2018",
                            "year": 2018,
                            "id": 96,
                            "academic_year": "2018-2019",
                            "code": "2018.75"
                        },
                        "full_name": "PHY 470 - Quantum Mechanics"
                    },
                    "type": "CourseRequirement",
                    "advanced": false
                },
                "id": 12185,
                "position": 1,
                "credits": 3.0,
                "custom": false,
                "plan_item_spec": null
            },
            {
                "name": "3B Humanities ",
                "requirement": {
                    "name": "3B Humanities ",
                    "core": {
                        "name": "3B Humanities ",
                        "maximum_credits": 3.0,
                        "minimum_credits": 3.0,
                        "required": 1,
                        "id": "96bb7450-3fc0-4b71-8ea7-fbb9d6b57e1e",
                        "parent_id": null,
                        "type": "DegreeRequirement",
                        "advanced": false,
                        "subrequirements": [
                            {
                                "name": "THE 391 - Theatre History II",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "11296674-c111-4910-8e2c-f157f01b939e",
                                "parent_id": "96bb7450-3fc0-4b71-8ea7-fbb9d6b57e1e",
                                "credits": 3.0,
                                "course": {
                                    "maximum_credits": 3.0,
                                    "minimum_credits": 3.0,
                                    "created_at": "2019-10-03T22:13:44.663Z",
                                    "full_number": "THE 391",
                                    "code": "THE 391",
                                    "coreq": null,
                                    "name": "Theatre History II",
                                    "id": 1977163,
                                    "updated_at": "2019-10-03T22:13:44.663Z",
                                    "description": " ",
                                    "prereq": {
                                        "operands": [
                                            {
                                                "minimum_course_grade": "C",
                                                "concurrency_ind": false,
                                                "course": {
                                                    "name": "Research, Writing, & Rhetoric",
                                                    "maximum_credits": 3.0,
                                                    "minimum_credits": 3.0,
                                                    "id": 1973344,
                                                    "full_name": "ENG 102 - Research, Writing, & Rhetoric",
                                                    "full_number": "ENG 102",
                                                    "code": "ENG 102"
                                                },
                                                "type": "course"
                                            },
                                            {
                                                "minimum_course_grade": "C",
                                                "concurrency_ind": false,
                                                "course": {
                                                    "name": "First Year Writing Seminar",
                                                    "maximum_credits": 3.0,
                                                    "minimum_credits": 3.0,
                                                    "id": 1977160,
                                                    "full_name": "ENG 105 - First Year Writing Seminar",
                                                    "full_number": "ENG 105",
                                                    "code": "ENG 105"
                                                },
                                                "type": "course"
                                            },
                                            {
                                                "minimum_course_grade": "C",
                                                "concurrency_ind": false,
                                                "course": {
                                                    "name": "Honors Rhetoric",
                                                    "maximum_credits": 6.0,
                                                    "minimum_credits": 6.0,
                                                    "id": 1973709,
                                                    "full_name": "HON 102 - Honors Rhetoric",
                                                    "full_number": "HON 102",
                                                    "code": "HON 102"
                                                },
                                                "type": "course"
                                            }
                                        ],
                                        "type": "or"
                                    },
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "THE 391 - Theatre History II"
                                },
                                "type": "CourseRequirement",
                                "advanced": false
                            },
                            {
                                "name": "THE 390 - Theatre History I",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "342fc35d-cdd0-4db7-a727-e3f14d7725e8",
                                "parent_id": "96bb7450-3fc0-4b71-8ea7-fbb9d6b57e1e",
                                "credits": 3.0,
                                "course": {
                                    "maximum_credits": 3.0,
                                    "minimum_credits": 3.0,
                                    "created_at": "2019-09-11T18:54:35.119Z",
                                    "full_number": "THE 390",
                                    "code": "THE 390",
                                    "coreq": null,
                                    "name": "Theatre History I",
                                    "id": 1974544,
                                    "updated_at": "2019-09-11T18:54:35.119Z",
                                    "description": "I, A. Intensive examination of development of theatre from the Greeks to the French Renaissance. The historic origins of theatrical conventions will also be examined through attendance at live theatre, and readings of dramatic litereature. Gen Ed. E-3A or E-3B.",
                                    "prereq": null,
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "THE 390 - Theatre History I"
                                },
                                "type": "CourseRequirement",
                                "advanced": false
                            },
                            {
                                "name": "REL 301 - World Religions",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "94ee24cd-889e-4718-b1f4-a9c3f7d47e3b",
                                "parent_id": "96bb7450-3fc0-4b71-8ea7-fbb9d6b57e1e",
                                "credits": 3.0,
                                "course": {
                                    "maximum_credits": 3.0,
                                    "minimum_credits": 3.0,
                                    "created_at": "2019-09-11T18:54:34.648Z",
                                    "full_number": "REL 301",
                                    "code": "REL 301",
                                    "coreq": null,
                                    "name": "World Religions",
                                    "id": 1974414,
                                    "updated_at": "2019-09-11T18:54:34.648Z",
                                    "description": "I, II. Study  of the basic notions found in the worldÅ¼s great religions. Attention is given to the historical context of the development of these religions and to the doctrines, rituals and literature produced by them. Credit will not be awarded to students who have credit for REL 301W. Gen. Ed. Element 3B",
                                    "prereq": null,
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "REL 301 - World Religions"
                                },
                                "type": "CourseRequirement",
                                "advanced": false
                            },
                            {
                                "name": "POL 250 - Intro to Political Philosophy",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "2a03fe40-720c-4131-96f9-54c08bb1b92d",
                                "parent_id": "96bb7450-3fc0-4b71-8ea7-fbb9d6b57e1e",
                                "credits": 3.0,
                                "course": {
                                    "maximum_credits": 3.0,
                                    "minimum_credits": 3.0,
                                    "created_at": "2019-09-11T18:54:34.162Z",
                                    "full_number": "POL 250",
                                    "code": "POL 250",
                                    "coreq": null,
                                    "name": "Intro to Political Philosophy",
                                    "id": 1974278,
                                    "updated_at": "2019-09-11T18:54:34.162Z",
                                    "description": "(3) I, II. Examination of Western politcical theory from the ancient greeks to the contemporary era with a focus on selected philosophers. Gen. Ed. Elements 3B and 5B.",
                                    "prereq": null,
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "POL 250 - Intro to Political Philosophy"
                                },
                                "type": "CourseRequirement",
                                "advanced": false
                            },
                            {
                                "name": "PHI 240 - Philosophy of Religion",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "63830ab7-6b8d-4220-89f0-1e1d2615a43d",
                                "parent_id": "96bb7450-3fc0-4b71-8ea7-fbb9d6b57e1e",
                                "credits": 3.0,
                                "course": {
                                    "maximum_credits": 3.0,
                                    "minimum_credits": 3.0,
                                    "created_at": "2019-09-11T18:54:34.043Z",
                                    "full_number": "PHI 240",
                                    "code": "PHI 240",
                                    "coreq": null,
                                    "name": "Philosophy of Religion",
                                    "id": 1974244,
                                    "updated_at": "2019-09-11T18:54:34.043Z",
                                    "description": "A. Study of religious experience, faith and knowledge, the nature and existence of God, the problem of evil, religious ethics, and religious language. Credit will not be awarded to students who have credit for PHI 240W. Gen. Ed. Element 3B",
                                    "prereq": null,
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "PHI 240 - Philosophy of Religion"
                                },
                                "type": "CourseRequirement",
                                "advanced": false
                            },
                            {
                                "name": "PHI 130 - Beginning Ethics",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "32eed1c8-b41a-4714-89c9-8a0bec57c53c",
                                "parent_id": "96bb7450-3fc0-4b71-8ea7-fbb9d6b57e1e",
                                "credits": 3.0,
                                "course": {
                                    "maximum_credits": 3.0,
                                    "minimum_credits": 3.0,
                                    "created_at": "2019-09-11T18:54:34.040Z",
                                    "full_number": "PHI 130",
                                    "code": "PHI 130",
                                    "coreq": null,
                                    "name": "Beginning Ethics",
                                    "id": 1974243,
                                    "updated_at": "2019-09-11T18:54:34.040Z",
                                    "description": "I, II. Survey of theories concerning the nature of right and wrong, emphasizing how these theories can be applied to personal moral choices. Credit will not awarded for both PHI 130 and PHI 130S. Gen. Ed. Element 3B",
                                    "prereq": null,
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "PHI 130 - Beginning Ethics"
                                },
                                "type": "CourseRequirement",
                                "advanced": false
                            },
                            {
                                "name": "PHI 110 - Beginning Philosophy",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "c79e9b96-e7a0-4584-ba54-e46272488586",
                                "parent_id": "96bb7450-3fc0-4b71-8ea7-fbb9d6b57e1e",
                                "credits": 3.0,
                                "course": {
                                    "maximum_credits": 3.0,
                                    "minimum_credits": 3.0,
                                    "created_at": "2019-09-11T18:54:34.036Z",
                                    "full_number": "PHI 110",
                                    "code": "PHI 110",
                                    "coreq": null,
                                    "name": "Beginning Philosophy",
                                    "id": 1974242,
                                    "updated_at": "2019-09-11T18:54:34.036Z",
                                    "description": "I, II.  Basic introductory course in philosophy. Consideration of perennial questions of the human experience, especially questions about reality, knowledge, self, values, and religious belief.  Credit will not be awarded to students who have credit for PHI 110W.  Gen. Ed. Element 3B",
                                    "prereq": null,
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "PHI 110 - Beginning Philosophy"
                                },
                                "type": "CourseRequirement",
                                "advanced": false
                            },
                            {
                                "name": "HUM 300 - Humanity in the Postmodern Age",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "1a82271b-35a9-47ce-872c-d1cfe5de48e6",
                                "parent_id": "96bb7450-3fc0-4b71-8ea7-fbb9d6b57e1e",
                                "credits": 3.0,
                                "course": {
                                    "maximum_credits": 3.0,
                                    "minimum_credits": 3.0,
                                    "created_at": "2019-09-11T18:54:32.378Z",
                                    "full_number": "HUM 300",
                                    "code": "HUM 300",
                                    "coreq": null,
                                    "name": "Humanity in the Postmodern Age",
                                    "id": 1973734,
                                    "updated_at": "2019-09-11T18:54:32.378Z",
                                    "description": "(3) A. Prerequisites: ENG 102, 105(B), or HON 102. COmparative and interdisciplinary approaches to the study of culture since 1945, including study of Western and non-Western works of literature, visual art, music, film, and religion/philosophy; focus on integrative thinking as a means toward affirming values for living meaningfully in the contemporary world. Credit will not be awarded for both HUM 300 and 300W. Gen. Ed. E 3A, 3B.",
                                    "prereq": null,
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "HUM 300 - Humanity in the Postmodern Age"
                                },
                                "type": "CourseRequirement",
                                "advanced": false
                            },
                            {
                                "name": "HUM 228 - Search for Meaning Mod World",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "edb5d3d1-8215-4e29-ac87-9bac284f03b9",
                                "parent_id": "96bb7450-3fc0-4b71-8ea7-fbb9d6b57e1e",
                                "credits": 3.0,
                                "course": {
                                    "maximum_credits": 3.0,
                                    "minimum_credits": 3.0,
                                    "created_at": "2019-09-11T18:54:32.374Z",
                                    "full_number": "HUM 228",
                                    "code": "HUM 228",
                                    "coreq": null,
                                    "name": "Search for Meaning Mod World",
                                    "id": 1973733,
                                    "updated_at": "2019-09-11T18:54:32.374Z",
                                    "description": "I, II. An introduction to the comparative and interdisciplinary study of culture in the modern world, including Western and non-Western literature, visual art, music, film, and religion/philosophy; emphasis on intergrative thinking and exploration of values for living meaningfully in the modern world. Gen. Ed. Element 3A. 3B.",
                                    "prereq": null,
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "HUM 228 - Search for Meaning Mod World"
                                },
                                "type": "CourseRequirement",
                                "advanced": false
                            },
                            {
                                "name": "HUM 226 - Search for Meaning Anct World",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "2c5f9991-089a-4066-95cb-162ada521543",
                                "parent_id": "96bb7450-3fc0-4b71-8ea7-fbb9d6b57e1e",
                                "credits": 3.0,
                                "course": {
                                    "maximum_credits": 3.0,
                                    "minimum_credits": 3.0,
                                    "created_at": "2019-09-11T18:54:32.371Z",
                                    "full_number": "HUM 226",
                                    "code": "HUM 226",
                                    "coreq": null,
                                    "name": "Search for Meaning Anct World",
                                    "id": 1973732,
                                    "updated_at": "2019-09-11T18:54:32.371Z",
                                    "description": "I, II. Comparative and interdisciplinary approaches to the study of culture in the ancient world, including Western and non-Western literature, drama, visual art, architecture, and religion/philosophy in historical context; emphasis on integrative thinking and exploration of living meaningfully from the ancient perspective. Gen. Ed. Element 3A, 3B.",
                                    "prereq": null,
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "HUM 226 - Search for Meaning Anct World"
                                },
                                "type": "CourseRequirement",
                                "advanced": false
                            },
                            {
                                "name": "HUM 124 - Humanities/Search for Meaning",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "ff96a89d-dd49-49c8-ac9f-9faa9ddb33b1",
                                "parent_id": "96bb7450-3fc0-4b71-8ea7-fbb9d6b57e1e",
                                "credits": 3.0,
                                "course": {
                                    "maximum_credits": 3.0,
                                    "minimum_credits": 3.0,
                                    "created_at": "2019-09-11T18:54:32.368Z",
                                    "full_number": "HUM 124",
                                    "code": "HUM 124",
                                    "coreq": null,
                                    "name": "Humanities/Search for Meaning",
                                    "id": 1973731,
                                    "updated_at": "2019-09-11T18:54:32.368Z",
                                    "description": "(3) I, II. An introduction to the comparative and interdisciplinary study of culture, including Western and non-Western literature, visual art, music, and design, emphasizing integrative thinking as a means toward affirming values for living meaningfully in today's world. Gen. Ed. Element 3A, 3B.",
                                    "prereq": null,
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "HUM 124 - Humanities/Search for Meaning"
                                },
                                "type": "CourseRequirement",
                                "advanced": false
                            },
                            {
                                "name": "HON 308W - Seminar in the Humanities",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "383f0b74-00c1-4021-bf73-5d50ae31f5e1",
                                "parent_id": "96bb7450-3fc0-4b71-8ea7-fbb9d6b57e1e",
                                "credits": 3.0,
                                "course": {
                                    "maximum_credits": 3.0,
                                    "minimum_credits": 3.0,
                                    "created_at": "2019-09-11T18:54:32.308Z",
                                    "full_number": "HON 308W",
                                    "code": "HON 308W",
                                    "coreq": null,
                                    "name": "Seminar in the Humanities",
                                    "id": 1973712,
                                    "updated_at": "2019-09-11T18:54:32.308Z",
                                    "description": "A. Prerequisite: ENG 102 or 105(B) or HON 102 and Admission to the Honors Program; or departmental approval. A topics course in the humanities meeting the goals of the Honors Program. may be retaken with different topics to a maximum of six hours. Honors Core. Gen. Ed. Element 3B.",
                                    "prereq": null,
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "HON 308W - Seminar in the Humanities"
                                },
                                "type": "CourseRequirement",
                                "advanced": false
                            },
                            {
                                "name": "FCC 227 - Japanese Culture/Civilization",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "4fe1ead8-b857-460d-8e70-f344e38ca990",
                                "parent_id": "96bb7450-3fc0-4b71-8ea7-fbb9d6b57e1e",
                                "credits": 3.0,
                                "course": {
                                    "maximum_credits": 3.0,
                                    "minimum_credits": 3.0,
                                    "created_at": "2019-09-11T18:54:31.524Z",
                                    "full_number": "FCC 227",
                                    "code": "FCC 227",
                                    "coreq": null,
                                    "name": "Japanese Culture/Civilization",
                                    "id": 1973460,
                                    "updated_at": "2019-09-11T18:54:31.524Z",
                                    "description": "A. Introduction to the unique values and traditions of the Japanese as reflected in their aesthetic, intellectual, and other cultural achievements. Taught in English. Gen. Ed. Element 3B",
                                    "prereq": null,
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "FCC 227 - Japanese Culture/Civilization"
                                },
                                "type": "CourseRequirement",
                                "advanced": false
                            },
                            {
                                "name": "FCC 210 - Topics in Culture",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "30e2df69-b544-4bef-9597-5b361282d5f0",
                                "parent_id": "96bb7450-3fc0-4b71-8ea7-fbb9d6b57e1e",
                                "credits": 3.0,
                                "course": {
                                    "maximum_credits": 3.0,
                                    "minimum_credits": 3.0,
                                    "created_at": "2019-09-11T18:54:31.521Z",
                                    "full_number": "FCC 210",
                                    "code": "FCC 210",
                                    "coreq": null,
                                    "name": "Topics in Culture",
                                    "id": 1973459,
                                    "updated_at": "2019-11-11T18:11:52.776Z",
                                    "description": "A. May be retaken to a maximum of 6 hours if topic is different. Introduction to the unique values and traditions of a major African, Asian, Hispanic, or European culture as reflected in its aesthetic, intellectual, and other cultural achievements. Taught in English. Gen. Ed. Element 3B",
                                    "prereq": null,
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "FCC 210 - Topics in Culture"
                                },
                                "type": "CourseRequirement",
                                "advanced": false
                            },
                            {
                                "name": "ENG 365W - Appalachian Literature",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "63e61fa8-5ee6-4135-8904-faf0e2f9e8c5",
                                "parent_id": "96bb7450-3fc0-4b71-8ea7-fbb9d6b57e1e",
                                "credits": 3.0,
                                "course": {
                                    "maximum_credits": 3.0,
                                    "minimum_credits": 3.0,
                                    "created_at": "2019-09-11T18:54:31.243Z",
                                    "full_number": "ENG 365W",
                                    "code": "ENG 365W",
                                    "coreq": null,
                                    "name": "Appalachian Literature",
                                    "id": 1973365,
                                    "updated_at": "2019-09-11T18:54:31.243Z",
                                    "description": "Cross-listed as APP 365W.  Prerequisite: ENG 102 or 105(B) or HON 102.  Writing-intensive study of selected Appalachian artists, with emphasis on interdiscplinary, cultural, and aesthetic concerns raised in works by writers such as Arnow, Berry, and Still.  Credit will not be awarded to students who have credit for ENG 365, APP 365 or APP 365W.  Gen. Ed. Element 3B and 6.",
                                    "prereq": {
                                        "operands": [
                                            {
                                                "minimum_course_grade": "C",
                                                "concurrency_ind": false,
                                                "course": {
                                                    "name": "Research, Writing, & Rhetoric",
                                                    "maximum_credits": 3.0,
                                                    "minimum_credits": 3.0,
                                                    "id": 1973344,
                                                    "full_name": "ENG 102 - Research, Writing, & Rhetoric",
                                                    "full_number": "ENG 102",
                                                    "code": "ENG 102"
                                                },
                                                "type": "course"
                                            },
                                            {
                                                "minimum_course_grade": "C",
                                                "concurrency_ind": false,
                                                "course": {
                                                    "name": "First Year Writing Seminar",
                                                    "maximum_credits": 3.0,
                                                    "minimum_credits": 3.0,
                                                    "id": 1977160,
                                                    "full_name": "ENG 105 - First Year Writing Seminar",
                                                    "full_number": "ENG 105",
                                                    "code": "ENG 105"
                                                },
                                                "type": "course"
                                            },
                                            {
                                                "minimum_course_grade": "C",
                                                "concurrency_ind": false,
                                                "course": {
                                                    "name": "Honors Rhetoric",
                                                    "maximum_credits": 6.0,
                                                    "minimum_credits": 6.0,
                                                    "id": 1973709,
                                                    "full_name": "HON 102 - Honors Rhetoric",
                                                    "full_number": "HON 102",
                                                    "code": "HON 102"
                                                },
                                                "type": "course"
                                            }
                                        ],
                                        "type": "or"
                                    },
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "ENG 365W - Appalachian Literature"
                                },
                                "type": "CourseRequirement",
                                "advanced": false
                            },
                            {
                                "name": "ENG 211W - Survey of World Literature I",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "f0ef9315-9a08-41f0-ac7a-1ee646a940e8",
                                "parent_id": "96bb7450-3fc0-4b71-8ea7-fbb9d6b57e1e",
                                "credits": 3.0,
                                "course": {
                                    "maximum_credits": 3.0,
                                    "minimum_credits": 3.0,
                                    "created_at": "2019-09-11T18:54:31.203Z",
                                    "full_number": "ENG 211W",
                                    "code": "ENG 211W",
                                    "coreq": null,
                                    "name": "Survey of World Literature I",
                                    "id": 1973351,
                                    "updated_at": "2019-09-11T18:54:31.203Z",
                                    "description": "I, II.  Prerequisite: ENG 102 or 105 (B) or HON 102.  Selected readings from masterpeces of world literature from ancient times through the Renassiance. Credit not awarded for students with credit for ENG 211. Gen. Ed Element 3B",
                                    "prereq": null,
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "ENG 211W - Survey of World Literature I"
                                },
                                "type": "CourseRequirement",
                                "advanced": false
                            },
                            {
                                "name": "ENG 211 - Survey of World Literature I",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "9f18d0b0-d8cd-4cfd-bc54-eb003e0fc9e2",
                                "parent_id": "96bb7450-3fc0-4b71-8ea7-fbb9d6b57e1e",
                                "credits": 3.0,
                                "course": {
                                    "maximum_credits": 3.0,
                                    "minimum_credits": 3.0,
                                    "created_at": "2019-09-11T18:54:31.200Z",
                                    "full_number": "ENG 211",
                                    "code": "ENG 211",
                                    "coreq": null,
                                    "name": "Survey of World Literature I",
                                    "id": 1973350,
                                    "updated_at": "2019-09-11T18:54:31.200Z",
                                    "description": "I, II. Prerequisite: ENG 102 or 105 or HON 102. Selected readings from masterpieces of world literature from ancient times through the Renaissance. Credit not awarded for students with credit for ENG 211W. Gen. Ed. Element 3B",
                                    "prereq": {
                                        "minimum_course_grade": "C",
                                        "concurrency_ind": false,
                                        "course": {
                                            "name": "Research, Writing, & Rhetoric",
                                            "maximum_credits": 3.0,
                                            "minimum_credits": 3.0,
                                            "id": 1973344,
                                            "full_name": "ENG 102 - Research, Writing, & Rhetoric",
                                            "full_number": "ENG 102",
                                            "code": "ENG 102"
                                        },
                                        "type": "course"
                                    },
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "ENG 211 - Survey of World Literature I"
                                },
                                "type": "CourseRequirement",
                                "advanced": false
                            },
                            {
                                "name": "ENG 210W - Enjoying Literature",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "fb78a5c0-db8c-4910-ac22-86d5de16bb17",
                                "parent_id": "96bb7450-3fc0-4b71-8ea7-fbb9d6b57e1e",
                                "credits": 3.0,
                                "course": {
                                    "maximum_credits": 3.0,
                                    "minimum_credits": 3.0,
                                    "created_at": "2019-09-11T18:54:31.198Z",
                                    "full_number": "ENG 210W",
                                    "code": "ENG 210W",
                                    "coreq": null,
                                    "name": "Enjoying Literature",
                                    "id": 1973349,
                                    "updated_at": "2019-09-11T18:54:31.198Z",
                                    "description": "I, II.  Prerequisite: ENG 102 or 105 (B) or HON 102.  Understanding and enjoying the distinctive aesthetic qualities, forms and meanings of literary works within ethical and cultural contexts. Credit will not be awarded to students who have received credit for ENG 210. Gen. Ed. Element 3B",
                                    "prereq": null,
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "ENG 210W - Enjoying Literature"
                                },
                                "type": "CourseRequirement",
                                "advanced": false
                            },
                            {
                                "name": "ENG 210 - Enjoying Literature",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "5e504f23-7a3a-4c9f-8283-57ac4c94c5b4",
                                "parent_id": "96bb7450-3fc0-4b71-8ea7-fbb9d6b57e1e",
                                "credits": 3.0,
                                "course": {
                                    "maximum_credits": 3.0,
                                    "minimum_credits": 3.0,
                                    "created_at": "2019-09-11T18:54:31.195Z",
                                    "full_number": "ENG 210",
                                    "code": "ENG 210",
                                    "coreq": null,
                                    "name": "Enjoying Literature",
                                    "id": 1973348,
                                    "updated_at": "2019-09-11T18:54:31.195Z",
                                    "description": "I, II. Prerequisite: ENG 102 or 105 or HON 102. Understanding and enjoying the distinctive aesthetic qualities, forms and meanings of literary works within ethical and cultural contexts. Credit will not be awarded to students who have credit for ENG 210W. Gen. Ed. Element 3B",
                                    "prereq": {
                                        "minimum_course_grade": "C",
                                        "concurrency_ind": false,
                                        "course": {
                                            "name": "Research, Writing, & Rhetoric",
                                            "maximum_credits": 3.0,
                                            "minimum_credits": 3.0,
                                            "id": 1973344,
                                            "full_name": "ENG 102 - Research, Writing, & Rhetoric",
                                            "full_number": "ENG 102",
                                            "code": "ENG 102"
                                        },
                                        "type": "course"
                                    },
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "ENG 210 - Enjoying Literature"
                                },
                                "type": "CourseRequirement",
                                "advanced": false
                            },
                            {
                                "name": "ENG 208W - Literature and the Environment",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "d5d95ee0-19a8-4bb9-b8ef-56ace9e07710",
                                "parent_id": "96bb7450-3fc0-4b71-8ea7-fbb9d6b57e1e",
                                "credits": 3.0,
                                "course": {
                                    "maximum_credits": 3.0,
                                    "minimum_credits": 3.0,
                                    "created_at": "2019-09-11T18:54:31.192Z",
                                    "full_number": "ENG 208W",
                                    "code": "ENG 208W",
                                    "coreq": null,
                                    "name": "Literature and the Environment",
                                    "id": 1973347,
                                    "updated_at": "2019-09-11T18:54:31.192Z",
                                    "description": "A. Prerequisite: ENG 102 or 105 (B) or HON 102. Writing-intensive study of the human-environmental connection as expressed in literature, including attention to environmental sustainability and personal responsibility to the natural world within larger social and ethical values. Credit will not be awarded for both ENG 208W and ENV 208W. Gen Ed. Element 3B.",
                                    "prereq": null,
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "ENG 208W - Literature and the Environment"
                                },
                                "type": "CourseRequirement",
                                "advanced": false
                            },
                            {
                                "name": "ENG 110 - Introduction to Literature",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "c7e8e8ff-988f-4a7e-8653-318eb6408c81",
                                "parent_id": "96bb7450-3fc0-4b71-8ea7-fbb9d6b57e1e",
                                "credits": 3.0,
                                "course": {
                                    "maximum_credits": 3.0,
                                    "minimum_credits": 3.0,
                                    "created_at": "2019-09-11T18:54:31.189Z",
                                    "full_number": "ENG 110",
                                    "code": "ENG 110",
                                    "coreq": null,
                                    "name": "Introduction to Literature",
                                    "id": 1973346,
                                    "updated_at": "2019-09-11T18:54:31.189Z",
                                    "description": "I, II. Prerequisite: completion of developmental reading and writing requirements. Developming reading strategies to better engage with and appreciate a range of literacy texts from a variety of cultures and historical periods. Gen-Ed. E-3B [AH].",
                                    "prereq": null,
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "ENG 110 - Introduction to Literature"
                                },
                                "type": "CourseRequirement",
                                "advanced": false
                            },
                            {
                                "name": "APP 365W - Appalachian Literature",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "53df1921-1fb0-42d6-b32f-f8f4dea28a16",
                                "parent_id": "96bb7450-3fc0-4b71-8ea7-fbb9d6b57e1e",
                                "credits": 3.0,
                                "course": {
                                    "maximum_credits": 3.0,
                                    "minimum_credits": 3.0,
                                    "created_at": "2019-09-11T18:54:29.351Z",
                                    "full_number": "APP 365W",
                                    "code": "APP 365W",
                                    "coreq": null,
                                    "name": "Appalachian Literature",
                                    "id": 1972743,
                                    "updated_at": "2019-09-11T18:54:29.351Z",
                                    "description": "(3) 1. Crosslisted as ENG 365W. Prerequisite: ENG 102 or 105(B) or HON 102. Writing-intensive study of selected Appalachian artists, with emphasis on interdisciplinary, cultural, and aesthetic concerns raised in works by writers such as Arnow, Berry, and Still. Credit will not be awarded to students who have credit for ENG 365, ENG 365W or APP 365. Gen. Ed. Element 3B and 6.",
                                    "prereq": {
                                        "operands": [
                                            {
                                                "minimum_course_grade": "C",
                                                "concurrency_ind": false,
                                                "course": {
                                                    "name": "Research, Writing, & Rhetoric",
                                                    "maximum_credits": 3.0,
                                                    "minimum_credits": 3.0,
                                                    "id": 1973344,
                                                    "full_name": "ENG 102 - Research, Writing, & Rhetoric",
                                                    "full_number": "ENG 102",
                                                    "code": "ENG 102"
                                                },
                                                "type": "course"
                                            },
                                            {
                                                "minimum_course_grade": "C",
                                                "concurrency_ind": false,
                                                "course": {
                                                    "name": "First Year Writing Seminar",
                                                    "maximum_credits": 3.0,
                                                    "minimum_credits": 3.0,
                                                    "id": 1977160,
                                                    "full_name": "ENG 105 - First Year Writing Seminar",
                                                    "full_number": "ENG 105",
                                                    "code": "ENG 105"
                                                },
                                                "type": "course"
                                            },
                                            {
                                                "minimum_course_grade": "C",
                                                "concurrency_ind": false,
                                                "course": {
                                                    "name": "Honors Rhetoric",
                                                    "maximum_credits": 6.0,
                                                    "minimum_credits": 6.0,
                                                    "id": 1973709,
                                                    "full_name": "HON 102 - Honors Rhetoric",
                                                    "full_number": "HON 102",
                                                    "code": "HON 102"
                                                },
                                                "type": "course"
                                            }
                                        ],
                                        "type": "or"
                                    },
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "APP 365W - Appalachian Literature"
                                },
                                "type": "CourseRequirement",
                                "advanced": false
                            },
                            {
                                "name": "AFA 201W - The African Experience: W",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "454d1b11-3091-4ffb-b4a2-29820932e27a",
                                "parent_id": "96bb7450-3fc0-4b71-8ea7-fbb9d6b57e1e",
                                "credits": 3.0,
                                "course": {
                                    "maximum_credits": 3.0,
                                    "minimum_credits": 3.0,
                                    "created_at": "2019-09-11T18:54:29.194Z",
                                    "full_number": "AFA 201W",
                                    "code": "AFA 201W",
                                    "coreq": null,
                                    "name": "The African Experience: W",
                                    "id": 1972681,
                                    "updated_at": "2019-09-11T18:54:29.194Z",
                                    "description": "A. Prerequisite: ENG 102, or ENG 105(B), or HON102(B). Introduces students to the historical, socio-economic, cultural, and political experiences of African people in Africa and the Diaspora.  It fulfills a core requirement for African/African-American Studies.  Credit will not be awarded to students who have credit for AFA 201.  Gen. Ed. Element 3B and Element 6.",
                                    "prereq": {
                                        "operands": [
                                            {
                                                "minimum_course_grade": "C",
                                                "concurrency_ind": false,
                                                "course": {
                                                    "name": "Research, Writing, & Rhetoric",
                                                    "maximum_credits": 3.0,
                                                    "minimum_credits": 3.0,
                                                    "id": 1973344,
                                                    "full_name": "ENG 102 - Research, Writing, & Rhetoric",
                                                    "full_number": "ENG 102",
                                                    "code": "ENG 102"
                                                },
                                                "type": "course"
                                            },
                                            {
                                                "minimum_course_grade": "C",
                                                "concurrency_ind": false,
                                                "course": {
                                                    "name": "First Year Writing Seminar",
                                                    "maximum_credits": 3.0,
                                                    "minimum_credits": 3.0,
                                                    "id": 1977160,
                                                    "full_name": "ENG 105 - First Year Writing Seminar",
                                                    "full_number": "ENG 105",
                                                    "code": "ENG 105"
                                                },
                                                "type": "course"
                                            },
                                            {
                                                "minimum_course_grade": "C",
                                                "concurrency_ind": false,
                                                "course": {
                                                    "name": "Honors Rhetoric",
                                                    "maximum_credits": 6.0,
                                                    "minimum_credits": 6.0,
                                                    "id": 1973709,
                                                    "full_name": "HON 102 - Honors Rhetoric",
                                                    "full_number": "HON 102",
                                                    "code": "HON 102"
                                                },
                                                "type": "course"
                                            }
                                        ],
                                        "type": "or"
                                    },
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "AFA 201W - The African Experience: W"
                                },
                                "type": "CourseRequirement",
                                "advanced": false
                            },
                            {
                                "name": "ENG 212(W) - Survey of World Literature II",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "e607f025-6665-4118-b6f5-1ddd05c771d5",
                                "parent_id": "96bb7450-3fc0-4b71-8ea7-fbb9d6b57e1e",
                                "credits": 3.0,
                                "course": {
                                    "maximum_credits": 3.0,
                                    "minimum_credits": 3.0,
                                    "created_at": "2019-11-11T18:08:34.967Z",
                                    "full_number": "ENG 212(W)",
                                    "code": "ENG 212(W)",
                                    "coreq": null,
                                    "name": "Survey of World Literature II",
                                    "id": 1977189,
                                    "updated_at": "2019-11-11T18:08:34.967Z",
                                    "description": " ",
                                    "prereq": null,
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "ENG 212(W) - Survey of World Literature II"
                                },
                                "type": "CourseRequirement",
                                "advanced": false
                            },
                            {
                                "name": "AFA 201 - The African Experience",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "0fd1332f-5130-4495-b63d-87ec601ed16c",
                                "parent_id": "96bb7450-3fc0-4b71-8ea7-fbb9d6b57e1e",
                                "credits": 3.0,
                                "course": {
                                    "maximum_credits": 3.0,
                                    "minimum_credits": 3.0,
                                    "created_at": "2019-09-11T18:54:29.192Z",
                                    "full_number": "AFA 201",
                                    "code": "AFA 201",
                                    "coreq": null,
                                    "name": "The African Experience",
                                    "id": 1972680,
                                    "updated_at": "2019-09-11T18:54:29.192Z",
                                    "description": "A.  Introduces students to the historical, socio-economic, cultural, and political experiences of African people in Africa and the Diaspora.  It fulfills a core requirement for African/African-American Studies. Credit will not be awarded to students who have credit for AFA 201W. Gen. Ed. Element 3B and Element 6",
                                    "prereq": null,
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "AFA 201 - The African Experience"
                                },
                                "type": "CourseRequirement",
                                "advanced": false
                            },
                            {
                                "name": "PHI 300W - Greek and Roman Philosophy",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "a9f01799-8aa1-4569-8183-2b9b8dffc914",
                                "parent_id": "96bb7450-3fc0-4b71-8ea7-fbb9d6b57e1e",
                                "credits": 3.0,
                                "course": {
                                    "maximum_credits": 3.0,
                                    "minimum_credits": 3.0,
                                    "created_at": "2019-11-11T18:12:35.364Z",
                                    "full_number": "PHI 300W",
                                    "code": "PHI 300W",
                                    "coreq": null,
                                    "name": "Greek and Roman Philosophy",
                                    "id": 1977193,
                                    "updated_at": "2019-11-11T18:12:35.364Z",
                                    "description": " ",
                                    "prereq": null,
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "PHI 300W - Greek and Roman Philosophy"
                                },
                                "type": "CourseRequirement",
                                "advanced": false
                            },
                            {
                                "name": "FCC 226 - Hispanic Culture and Civilization",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "9e477f6a-00bb-4829-8652-fe612efe5b4f",
                                "parent_id": "96bb7450-3fc0-4b71-8ea7-fbb9d6b57e1e",
                                "credits": 3.0,
                                "course": {
                                    "maximum_credits": 3.0,
                                    "minimum_credits": 3.0,
                                    "created_at": "2019-11-11T18:11:30.133Z",
                                    "full_number": "FCC 226",
                                    "code": "FCC 226",
                                    "coreq": null,
                                    "name": "Hispanic Culture and Civilization",
                                    "id": 1977192,
                                    "updated_at": "2019-11-11T18:11:30.133Z",
                                    "description": " ",
                                    "prereq": null,
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "FCC 226 - Hispanic Culture and Civilization"
                                },
                                "type": "CourseRequirement",
                                "advanced": false
                            },
                            {
                                "name": "FCC 222 - German Culture and Civilization",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "f6d21737-ad3e-480d-8c28-31a4d10de5d8",
                                "parent_id": "96bb7450-3fc0-4b71-8ea7-fbb9d6b57e1e",
                                "credits": 3.0,
                                "course": {
                                    "maximum_credits": 3.0,
                                    "minimum_credits": 3.0,
                                    "created_at": "2019-11-11T18:11:02.379Z",
                                    "full_number": "FCC 222",
                                    "code": "FCC 222",
                                    "coreq": null,
                                    "name": "German Culture and Civilization",
                                    "id": 1977191,
                                    "updated_at": "2019-11-11T18:11:02.379Z",
                                    "description": " ",
                                    "prereq": null,
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "FCC 222 - German Culture and Civilization"
                                },
                                "type": "CourseRequirement",
                                "advanced": false
                            },
                            {
                                "name": "FCC 220 - French Culture and Civilization",
                                "attempts": 1,
                                "minimum_grade": "C",
                                "id": "8ba435c1-f7dc-4f84-8a2f-197b54affd4a",
                                "parent_id": "96bb7450-3fc0-4b71-8ea7-fbb9d6b57e1e",
                                "credits": 3.0,
                                "course": {
                                    "maximum_credits": 3.0,
                                    "minimum_credits": 3.0,
                                    "created_at": "2019-11-11T18:09:45.039Z",
                                    "full_number": "FCC 220",
                                    "code": "FCC 220",
                                    "coreq": null,
                                    "name": "French Culture and Civilization",
                                    "id": 1977190,
                                    "updated_at": "2019-11-11T18:09:45.039Z",
                                    "description": " ",
                                    "prereq": null,
                                    "academic_period": {
                                        "term": "Fall",
                                        "name": "Fall 2018",
                                        "year": 2018,
                                        "id": 96,
                                        "academic_year": "2018-2019",
                                        "code": "2018.75"
                                    },
                                    "full_name": "FCC 220 - French Culture and Civilization"
                                },
                                "type": "CourseRequirement",
                                "advanced": false
                            }
                        ]
                    },
                    "id": "8c98a5d1-ef14-45bb-a3a8-231398011bad",
                    "parent_id": null,
                    "type": "CoreRequirement"
                },
                "id": 12169,
                "position": 3,
                "credits": 3.0,
                "custom": false,
                "plan_item_spec": null
            },
            {
                "name": "Statistical and Thermal Physic",
                "requirement": {
                    "name": "PHY 456 - Statistical and Thermal Physic",
                    "attempts": 1,
                    "minimum_grade": "C",
                    "id": "cc79fcb1-8ace-4a6d-89df-8c501f6e043b",
                    "parent_id": null,
                    "credits": 3.0,
                    "course": {
                        "maximum_credits": 3.0,
                        "minimum_credits": 3.0,
                        "created_at": "2019-09-11T18:54:34.106Z",
                        "full_number": "PHY 456",
                        "code": "PHY 456",
                        "coreq": null,
                        "name": "Statistical and Thermal Physic",
                        "id": 1974262,
                        "updated_at": "2019-09-11T18:54:34.106Z",
                        "description": "A. Prerequisites: PHY 302; PHY 310 with a grade of Â“CÂ” or better; or departmental approval. Microscopic approach to thermal processes. Topics include probability, entropy, the canonical ensemble, blackbody radiation, and quantum statistics including Bose-Einstein and Fermi-Dirac statistics.",
                        "prereq": {
                            "operands": [
                                {
                                    "minimum_course_grade": "C",
                                    "concurrency_ind": false,
                                    "course": {
                                        "name": "Modern Physics",
                                        "maximum_credits": 4.0,
                                        "minimum_credits": 4.0,
                                        "id": 1974256,
                                        "full_name": "PHY 302 - Modern Physics",
                                        "full_number": "PHY 302",
                                        "code": "PHY 302"
                                    },
                                    "type": "course"
                                },
                                {
                                    "minimum_course_grade": "C",
                                    "concurrency_ind": false,
                                    "course": {
                                        "name": "Theoretical Methods in Physics",
                                        "maximum_credits": 3.0,
                                        "minimum_credits": 3.0,
                                        "id": 1974257,
                                        "full_name": "PHY 310 - Theoretical Methods in Physics",
                                        "full_number": "PHY 310",
                                        "code": "PHY 310"
                                    },
                                    "type": "course"
                                }
                            ],
                            "type": "and"
                        },
                        "academic_period": {
                            "term": "Fall",
                            "name": "Fall 2018",
                            "year": 2018,
                            "id": 96,
                            "academic_year": "2018-2019",
                            "code": "2018.75"
                        },
                        "full_name": "PHY 456 - Statistical and Thermal Physic"
                    },
                    "type": "CourseRequirement",
                    "advanced": false
                },
                "id": 12180,
                "position": 1,
                "credits": 3.0,
                "custom": false,
                "plan_item_spec": null
            }
        ],
        "position": 7,
        "credits": 15.0
    }
]