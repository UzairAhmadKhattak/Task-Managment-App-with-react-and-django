import React, { Component } from 'react';

import EditProject from './editProject';

class SIDEBAR extends Component {
    
    state = {
        projects:this.props.projects
    } 
    
    project_button_edit = (project)=>{
        return "#edit_project_button_"+ project.project_id
    }
    project_button_id = (project)=>{
        return "edit_button_project_id_"+ project.project_id
    }
    componentWillReceiveProps(nextProps) {
        // You don't have to do this check first, but it can help prevent an unneeded render
        if (nextProps.projects !== this.state.projects) {
          this.setState({ projects: nextProps.projects });
        }
      }
      show_drop_down = (project)=>{
        return(
            <div className="dropdown">
            <button  id ='SideBarDropDownButton' className="btn btn-sm btn-success dropdown-toggle mb-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">    
            </button>
            <ul  className="dropdown-menu">
                <li ><button className="dropdown-item" id={this.project_button_id(project)} type="button" data-bs-toggle="modal" data-bs-target={this.project_button_edit(project)} data-bs-whatever="@mdo" >Edit project</button></li>
                <li ><button onClick={()=>this.props.delete_project(project)} className="dropdown-item" href="#">Delete project</button></li>
            </ul>
            </div>
        )
    }
    render() { 
        return (
    <React.Fragment>
        {
        this.state.projects.map((project)=>{
            return(
            <EditProject
            key={project.project_id}
            edit_project = {(e)=>this.props.edit_project(e,project)}
            projectid = {project.project_id}
            />)       
        })
    }
        <div className="sidebar">
        <h4 className='mx-5' style={{fontFamily: 'Pacifico'}}>Projects</h4>
        
        {/* <button id="collapse_button" style={{border: "3px solid rgb(101, 95, 206)",background:"black",color:"white"}} className='btn btn-sm btn-Info rounded position-absolute top-0 end-0'>{"☰"}</button> */}
        
        {
            this.state.projects.map((project)=>{
                if(project.project_name.toLowerCase() === this.props.current_route.split('/').at(-1).toLowerCase()){
            return (
          
            <div className = "sidebar_parent" key={project.project_id}>
            <div className='project'><a className="active" style={{fontWeight:"bold"}} href={project.project_name}>{project.project_name}</a></div>
            <div className='SideBarDropdown'>{this.show_drop_down(project)}</div>
            </div>
            )}
                else{
            return (
            
            <div className = "sidebar_parent" key={project.project_id}>
            <div className='project'><a style={{fontWeight:"bold"}} href={project.project_name}>{project.project_name}</a></div>
            <div className='SideBarDropdown'>{this.show_drop_down(project)}</div>
            </div>
            )        
        }
        })
        }
        
        </div>
    </React.Fragment>
        );
    }
}
 
export default SIDEBAR;