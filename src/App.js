import React, { Component } from 'react';
import app from './assets/app.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Project from './pages/projects';
import SIDEBAR from './components/sidebar';
import NAVABR from './components/navbar';
import PAGENOTFOUND from './components/pageNotFound';
import LOGIN from './pages/login';
import REGISTRATION from './pages/registration';

var date = new Date()

class TMA extends Component {
    // state = {projects:[]}
    state = {

        projects: [{
            project_id: 1,
            project_name: "Roster",
            sections: [
                {
                    sec_id: 1,
                    sec_heading: "Todo",
                    cards: [
                        {
                            card_id: 1,
                            card_heading: "Missing capture members",
                            card_desc: "mcna is not capturing all members",
                            pic_name: "pic.PNG",
                            assigned_to: [],
                            comments: [],
                            tags: [],
                            created_date: "",
                            delivery_date: "",
                            remaining_time: "",
                            time_cost: "",
                            money_cost: ""


                        },
                        {
                            card_id: 2,
                            card_heading: "listing",
                            card_desc: "list has problem",
                            pic_name: "pic.PNG"
                        },

                    ]
                },

                {
                    sec_id: 2,
                    sec_heading: "Doing",
                    cards: [
                        {
                            card_id: 1,
                            card_heading: "Add Card",
                            card_desc: "Add Any card to this section",
                            pic_name: ""
                        }
                    ],
                },
                {
                    sec_id: 3,
                    sec_heading: "QA",
                    cards: [
                        {
                            card_id: 1,
                            card_heading: "problem",
                            card_desc: "Queue api is not working",
                            pic_name: "pic.PNG"
                        }

                    ]
                },
                {
                    sec_id: 4,
                    sec_heading: "Completed",
                    cards: [
                        {
                            card_id: 1,
                            card_heading: "Roster problem",
                            card_desc: "Queue api is not working",
                            pic_name: "pic.PNG"
                        }
                    ]
                }

            ]

        },
        {
            project_id: 2,
            project_name: "DOP",
            sections: [
                {
                    sec_id: 1,
                    sec_heading: "Todo",
                    cards: [
                        {
                            card_id: 1,
                            card_heading: "somthing else",
                            card_desc: "Add Any card in todo ",
                            pic_name: "pic.PNG"
                        },
                    ]
                },

                {
                    sec_id: 2,
                    sec_heading: "Doing",
                    cards: [
                        {
                            card_id: 1,
                            card_heading: "Roster",
                            card_desc: "Queue api is not working",
                            pic_name: "pic.PNG"
                        }
                    ],
                },
                {
                    sec_id: 3,
                    sec_heading: "QA",
                    cards: [
                        {
                            card_id: 1,
                            card_heading: "problem",
                            card_desc: "Queue api is not working",
                            pic_name: "pic.PNG"
                        }

                    ]
                },
                {
                    sec_id: 4,
                    sec_heading: "Completed",
                    cards: [
                        {
                            card_id: 1,
                            card_heading: "Roster problem",
                            card_desc: "Queue api is not working",
                            pic_name: "pic.PNG"
                        }
                    ]
                }

            ]

        },
        {
            project_id: 3,
            project_name: "Jarvis",
            sections: [
                {
                    sec_id: 1,
                    sec_heading: "Todo",
                    cards: [
                        {
                            card_id: 1,
                            card_heading: "somthing else",
                            card_desc: "Add Any card in todo ",
                            pic_name: "pic.PNG"
                        },
                        {
                            card_id: 2,
                            card_heading: "listing",
                            card_desc: "list has problem",
                            pic_name: "pic.PNG"
                        },

                    ]
                },

                {
                    sec_id: 2,
                    sec_heading: "Doing",
                    cards: [
                        {
                            card_id: 1,
                            card_heading: "Roster",
                            card_desc: "Queue api is not working",
                            pic_name: "pic.PNG"
                        }
                    ],
                },
                {
                    sec_id: 3,
                    sec_heading: "QA",
                    cards: [
                        {
                            card_id: 1,
                            card_heading: "problem",
                            card_desc: "Queue api is not working",
                            pic_name: "pic.PNG"
                        }

                    ]
                },
                {
                    sec_id: 4,
                    sec_heading: "Completed",
                    cards: [
                        {
                            card_id: 1,
                            card_heading: "Roster problem",
                            card_desc: "Queue api is not working",
                            pic_name: "pic.PNG"
                        }
                    ]
                }

            ]

        },
        {
            project_id: 4,
            project_name: "RAD",
            sections: [
                {
                    sec_id: 1,
                    sec_heading: "Todo",
                    cards: [
                        {
                            card_id: 1,
                            card_heading: "somthing else",
                            card_desc: "Add Any card in todo ",
                            pic_name: "pic.PNG"
                        },
                        {
                            card_id: 2,
                            card_heading: "listing",
                            card_desc: "list has problem",
                            pic_name: "pic.PNG"
                        },

                    ]
                },

                {
                    sec_id: 2,
                    sec_heading: "Doing",
                    cards: [
                        {
                            card_id: 1,
                            card_heading: "Roster",
                            card_desc: "Queue api is not working",
                            pic_name: "pic.PNG"
                        }
                    ],
                },
                {
                    sec_id: 3,
                    sec_heading: "QA",
                    cards: [
                        {
                            card_id: 1,
                            card_heading: "problem",
                            card_desc: "Queue api is not working",
                            pic_name: "pic.PNG"
                        }

                    ]
                },
                {
                    sec_id: 4,
                    sec_heading: "Completed",
                    cards: [
                        {
                            card_id: 1,
                            card_heading: "Roster problem",
                            card_desc: "Queue api is not working",
                            pic_name: "pic.PNG"
                        }
                    ]
                }

            ]

        }
        ],
    }

    create_card = (selected_section, project_selected, e) => {
        e.preventDefault()
        var sectionId = selected_section.sec_id
        var heading = e.target[0].value
        var desc = e.target[1].value
        var assigned_to = e.target[2].value.split(" ")
        var tags = e.target[3].value.split(" ")
        var created_date = e.target[4].value
        var delivery_date = e.target[5].value
        var money_cost = e.target[6].value
        var pic = e.target[7].files[0]

        var time_cost = new Date(delivery_date) - new Date(created_date)
        time_cost = ((time_cost / 1000) / 60) / 60

        var new_card = {
            card_id: 1,
            card_heading: heading,
            card_desc: desc,
            pic_name: pic,
            assigned_to: assigned_to,
            comments: [],
            tags: tags,
            created_date: created_date,
            delivery_date: delivery_date,
            remaining_time: "",
            time_cost: time_cost,
            money_cost: money_cost

        }

        var app_state = [...this.state.projects]

        app_state.map((project) => {
            if (project_selected.project_name.toLowerCase() === project.project_name.toLowerCase()) {
                var selected_cards = project.sections[sectionId - 1].cards
                var num_of_cards = selected_cards.length
                var card_heading = selected_cards[0].card_heading
                if (num_of_cards === 1 && card_heading === "Add Card")
                    selected_cards.splice(0, 1)
                selected_cards.push(new_card)
                project.sections[sectionId - 1].cards = selected_cards
            }

        })
        this.setState(app_state)

    }

    edit_card = (card_selected_id, section_selected_id, e) => {
        e.preventDefault()
        var new_card_heading = e.target[0].value
        var new_card_description = e.target[1].value
        var new_card_assignedto = e.target[2].value
        var new_card_tags = e.target[3].value
        var new_card_created_at = e.target[4].value
        var new_card_deliver_at = e.target[5].value
        var new_card_money = e.target[5].value
        var current_route = window.location.href

        var app_state = [...this.state.projects]

        app_state.map((project) => {
            if (project.project_name.toLowerCase().replace(" ", "") === String(current_route).split('/').at(-1).toLowerCase().replace("%20", "")) {
                project.sections.map((section) => {
                    if (section.sec_id === section_selected_id) {
                        section.cards.map((card) => {
                            card.card_heading = new_card_heading
                            card.card_desc = new_card_description
                            card.assigned_to = [new_card_assignedto]
                            card.tags = [new_card_tags]
                            card.created_date = new_card_created_at
                            card.delivery_date = new_card_deliver_at
                            card.money_cost = new_card_money
                        })
                    }
                })
            }

        })
        this.setState(app_state)

    }
    click_left = (card_element_index, sect_id, selected_project) => {
        sect_id = sect_id - 1

        var app_state = [...this.state.projects]

        app_state.map((project) => {
            if (selected_project.project_name.toLowerCase() === project.project_name.toLowerCase()) {
                var cards = project.sections[sect_id].cards
                var section_data = project.sections
                if (cards.length === 1) {
                    // remove the card which has heading = add card when other card come to the section
                    if (section_data[sect_id - 1].cards[0].card_heading === "Add Card") {
                        section_data[sect_id - 1].cards.splice(0, 1)
                    }

                    // Add Card to next section
                    section_data[sect_id - 1].cards.push(cards[card_element_index])

                    // removing shifted card

                    cards.splice(card_element_index, 1)

                    //   adding default card
                    var default_card =
                    {
                        card_id: 1,
                        card_heading: "Add Card",
                        card_desc: "Add Any card to this section",
                        pic_name: ""

                    }
                    cards.push(default_card)

                }
                else {

                    // remove the card which has heading = add card when other card come to the section
                    if (section_data[sect_id - 1].cards[0].card_heading === "Add Card") {
                        section_data[sect_id - 1].cards.splice(0, 1)
                    }
                    var new_card = cards.splice(card_element_index, 1)[0]

                    // Add Card to next section
                    section_data[sect_id - 1].cards.push(new_card)

                }
                project.sections = section_data
                project.sections[sect_id].cards = cards
            }


        })

        this.setState(app_state)
    }

    click_right = (card_element_index, sect_id, selected_project) => {
        sect_id = sect_id - 1

        var app_state = [...this.state.projects]

        app_state.map((project) => {
            if (selected_project.project_name.toLowerCase() === project.project_name.toLowerCase()) {
                var cards = project.sections[sect_id].cards
                var section_data = project.sections
                if (cards.length === 1) {
                    // remove the card which has heading = add card when other card come to the section
                    if (section_data[sect_id + 1].cards[0].card_heading === "Add Card") {
                        section_data[sect_id + 1].cards.splice(0, 1)
                    }

                    // Add Card to next section
                    section_data[sect_id + 1].cards.push(cards[card_element_index])

                    // removing shifted card

                    cards.splice(card_element_index, 1)

                    //   adding default card
                    var default_card =
                    {
                        card_id: 1,
                        card_heading: "Add Card",
                        card_desc: "Add Any card to this section",
                        pic_name: ""

                    }
                    cards.push(default_card)

                }
                else {

                    // remove the card which has heading = add card when other card come to the section
                    if (section_data[sect_id + 1].cards[0].card_heading === "Add Card") {
                        section_data[sect_id + 1].cards.splice(0, 1)
                    }
                    var new_card = cards.splice(card_element_index, 1)[0]

                    // Add Card to next section
                    section_data[sect_id + 1].cards.push(new_card)

                }
                project.sections = section_data
                project.sections[sect_id].cards = cards
            }


        })

        this.setState(app_state)
    }

    click_delete_card = (card_element_index, sect_id, selected_project) => {
        sect_id = sect_id - 1

        var default_card =
        {
            card_id: 1,
            card_heading: "Add Card",
            card_desc: "Add Any card to this section",
            pic_name: ""

        }

        var app_state = [...this.state.projects]
        app_state.map((project) => {
            if (selected_project.project_name.toLowerCase() === project.project_name.toLowerCase()) {
                var cards = project.sections[sect_id].cards
                cards.splice(card_element_index, 1)
                if (cards.length === 0)
                    cards.push(default_card)
                project.sections[sect_id].cards = cards

            }
        })

        this.setState(app_state)
    }
    create_project = (e) => {

        e.preventDefault()
        var project_heading = e.target[0].value

        var app_state = [...this.state.projects]

        var projectid = app_state.length + 1

        let project_sample = {
            project_id: projectid,
            project_name: project_heading,
            sections: []

        }

        app_state.push(project_sample)

        this.setState({ projects: app_state })

    }

    create_section = (e) => {
        e.preventDefault()
        var section_heading = e.target[0].value
        var default_card =
        {
            card_id: 1,
            card_heading: "Add Card",
            card_desc: "Add Any card to this section",
            pic_name: ""

        }
        var app_state = [...this.state.projects]
        var current_route = window.location.href

        app_state.map((project) => {
            if (project.project_name.toLowerCase().replace(" ", "") === String(current_route).split('/').at(-1).toLowerCase().replace("%20", ""))
                var sectionid = project.sections.length + 1

            var section = {
                sec_id: sectionid,
                sec_heading: section_heading,
                cards: [
                    default_card
                ],
            }

            project.sections.push(section)
            return project

        })

        this.setState(app_state)

    }


    delete_section = (section) => {
        var app_state = [...this.state.projects]
        var current_route = window.location.href

        app_state.map((project) => {
            if (project.project_name.toLowerCase().replace(" ", "") === String(current_route).split('/').at(-1).toLowerCase().replace("%20", "")) {
                var selected_section = section.sec_id - 1
                project.sections.splice(selected_section, 1)
                project.sections.map((sec) => {
                    if (selected_section < sec.sec_id) {
                        sec.sec_id = sec.sec_id - 1
                        return sec
                    }
                })
                return project
            }
        })
        this.setState(app_state)
    }


    delete_project = (selected_project) => {
        var app_state = [...this.state.projects]
        var project_to_remove = selected_project.project_id - 1
        app_state.splice(project_to_remove, 1)
        this.setState({ "projects": app_state })
    }

    edit_project = (e, project) => {
        e.preventDefault()
        var project_heading = e.target[0].value
        var app_state = [...this.state.projects]
        app_state.map((proj) => {
            if (proj.project_id === project.project_id) {
                proj.project_name = project_heading
                return proj
            }
        })
        this.setState(app_state)

    }

    edit_section = (e, section) => {
        e.preventDefault()
        var section_heading = e.target[0].value
        var current_route = window.location.href
        var app_state = [...this.state.projects]
        app_state.map((proj) => {
            if (proj.project_name.toLowerCase().replace(" ", "") === String(current_route).split('/').at(-1).toLowerCase().replace("%20", "")) {
                // check section name is same and then update it.
                proj.sections.map((all_sect_in_proj) => {
                    if (all_sect_in_proj.sec_heading === section.sec_heading)

                        return all_sect_in_proj.sec_heading = section_heading
                })


            }
        })
        this.setState(app_state)
    }

    render() {
        return (

            <BrowserRouter>
                <Routes>

                    <Route path='task_managment/projects' element={
                        <React.Fragment>
                            <SIDEBAR
                                current_route={window.location.href}
                                projects={this.state.projects}
                                delete_project={(project) => this.delete_project(project)}
                                edit_project={(e, project) => this.edit_project(e, project)}
                            />
                            <NAVABR />
                        </React.Fragment>
                    } />


                    <Route path='task_managment/:project' element={<Project
                        current_route={window.location.href}
                        projects={this.state.projects}
                        click_left={(card_element_index, sect_id, project) => this.click_left(card_element_index, sect_id, project)}
                        click_right={(card_element_index, sect_id, project) => this.click_right(card_element_index, sect_id, project)}
                        create_card={((selected_section, project_selected, e) => this.create_card(selected_section, project_selected, e))}
                        edit_card={(card_selected, section_selected, e) => this.edit_card(card_selected, section_selected, e)}
                        click_delete_card={(card_element_index, sect_id, project) => this.click_delete_card(card_element_index, sect_id, project)}


                        create_section={(e) => this.create_section(e)}
                        edit_section={(e, section) => this.edit_section(e, section)}
                        delete_section={(section) => { this.delete_section(section) }}

                        create_project={(e) => this.create_project(e)}
                        edit_project={(e, project) => this.edit_project(e, project)}
                        delete_project={(project) => this.delete_project(project)}

                    />} />

                    <Route path='task_managment/login' element={<LOGIN />} />
                    <Route path='task_managment/Registration' element={<REGISTRATION />} />
                    <Route path='*' element={<PAGENOTFOUND />} />

                </Routes>
            </BrowserRouter>
        );
    }
}

export default TMA;