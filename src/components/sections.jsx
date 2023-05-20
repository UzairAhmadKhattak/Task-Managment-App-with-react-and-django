import React, { Component } from 'react';

import CARDS from './cards';

import AddSection from './addSection';

import AddProject from './addProject';

import EditSection from './editSection';


class SECTIONS extends Component {
    state = { projects : this.props.projects }
    
    making_add_card_button_id = (sec_heading)=>{
        return "#"+ sec_heading.replace(" ","")
    }

    section_button_edit = (section)=>{
        return "#edit_section_button_"+ section.section_id
    }
    section_button_id = (section)=>{
        return "edit_setion_button_id_"+ section.section_id
    }
    show_drop_down = (section)=>{
        return(
            <div className="dropdown">
            <button className="btn btn-sm btn-primary dropdown-toggle mb-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                
            </button>
            <ul className="dropdown-menu">
                <li><button className="dropdown-item" id={this.section_button_id(section)} type="button" data-bs-toggle="modal" data-bs-target={this.section_button_edit(section)} data-bs-whatever="@mdo">Edit Section</button></li>
                <li><button onClick={()=>this.props.delete_section(section)} className="dropdown-item" href="#">Delete Section</button></li>
            </ul>
            </div>
        )
    }

    check_url = (url_exsit)=>{
        if (url_exsit.includes(true) === false) 
            return <td><h3>There is no section realated to this url</h3></td>
    }

    componentWillReceiveProps(nextProps) {
        // You don't have to do this check first, but it can help prevent an unneeded render
        if (nextProps.projects !== this.state.projects) {
          this.setState({ projects: nextProps.projects });
        }
      }
    

    
    render() { 
        var url_exsit = []
        return (
            
            <React.Fragment>
            
            <div className="cards_area">
                <AddSection 
                create_section = {(e)=>this.props.create_section(e)}
                />
                <AddProject
                create_project = {(e)=>this.props.create_project(e)}
                />
                
                <div style={{marginLeft:"10%"}}>
                    <button id="project_id" type="button" className="btn btn-primary ms-5 mb-2" data-bs-toggle="modal" data-bs-target="#add_project" data-bs-whatever="@mdo" style={{width:'257px'}} ><span  className="bi bi-plus">Add Project</span></button>
                    <button id="section_id" type="button" className="btn btn-primary ms-5 mb-2" data-bs-toggle="modal" data-bs-target="#add_section" data-bs-whatever="@mdo" style={{width:'257px'}} ><span  className="bi bi-plus">Add Section</span></button>   
                </div>
                <table className='table_section'>
                    <tbody>
                <tr>
                     
                    {this.state.projects.map((project)=>{
                            //  console.log("project",project.project_name.toLowerCase().replace(" ",""));
                            //  console.log("props",String(this.props.current_route).split('/').at(-1).toLowerCase().replace("%20",""));                   
                        if (project.project_name.toLowerCase().replace(" ","") === String(this.props.current_route).split('/').at(-1).toLowerCase().replace("%20",""))
                        {
                            
                            url_exsit.push(true)
                            return(
                            project.sections.map((section)=>{
                                       
                        return(
                                
                        <td key={section.sec_id} style={{verticalAlign: "top"}}>
                        <EditSection
                        sectionID = {section.sec_id}
                        edit_section = {(e)=>this.props.edit_section(e,section)}
                        />
                        <div className='sec_parent'>
                        <h4 className='sec_child' style={{fontWeight: 'bold',fontFamily: 'Pacifico'}}>{section.sec_heading}</h4>
                        <span className='sec_child'>{this.show_drop_down(section)}</span>
                        </div>
                        <button id={section.sec_id} type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={this.making_add_card_button_id(section.sec_heading)} data-bs-whatever="@mdo" style={{width:'257px'}} ><span  className="bi bi-plus">Add card</span></button>
                        <CARDS 
                        key={section.sec_id} 
                        section_id ={section.sec_id} 
                        card_data = {section.cards}
                        onclick_left = {(card_element_index,sect_id)=>this.props.click_left(card_element_index,sect_id,project)}
                        onclick_right = {(card_element_index,sect_id)=>this.props.click_right(card_element_index,sect_id,project)}
                        onclick_delete_card = {(card_element_index,sec_id)=>this.props.click_delete_card(card_element_index,sec_id,project)}
                        onclick_create = {(e)=>this.props.create_card(section,project,e)}
                        add_card_id = {section.sec_heading.replace(" ","")}
                        edit_card = {(card_selected, section_selected, e)=>this.props.edit_card(card_selected, section_selected, e)}
                        />
                        </td>
                        )
                        }))
                    }
                    else url_exsit.push(false)    
                    
                    })}
                    {
                        this.check_url(url_exsit) 
                    }
                
                </tr>
                </tbody>
                </table>
            </div>
            </React.Fragment>
                
        );
    }
}
 
export default SECTIONS;