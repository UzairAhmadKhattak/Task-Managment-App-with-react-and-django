import React, { Component } from 'react';
import NAVABR from '../components/navbar';
import SIDEBAR from '../components/sidebar';
import SECTIONS from '../components/sections';

class Project extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
            <div className='app_style'>
            <NAVABR/>
            <SIDEBAR
            current_route = {this.props.current_route}
            projects = {this.props.projects}
            delete_project = {(project)=>this.props.delete_project(project)}
            edit_project = {(e,project)=>this.props.edit_project(e,project)}
            />
 
            <SECTIONS
            current_route = {this.props.current_route}
            projects = {this.props.projects}
            click_left = {(card_element_index,sect_id,project)=>this.props.click_left(card_element_index,sect_id,project)}
            click_right = {(card_element_index,sect_id,project)=>this.props.click_right(card_element_index,sect_id,project)}
            click_delete_card = {(card_element_index,sect_id,project)=>this.props.click_delete_card(card_element_index,sect_id,project)}
            
            create_card = {(section,project,e)=>this.props.create_card(section,project,e)}
            edit_card = {(card_selected, section_selected, e)=>this.props.edit_card(card_selected, section_selected, e)}
            
            create_project = {(e)=>this.props.create_project(e)}
            create_section = {(e)=>this.props.create_section(e)}
            delete_section = {(section)=>this.props.delete_section(section)}
            edit_section = {(e,section)=>this.props.edit_section(e,section)}
            
            />
            </div>
            </React.Fragment>
        );
    }
}
 
export default Project;