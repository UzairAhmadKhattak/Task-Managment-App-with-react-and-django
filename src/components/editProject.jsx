import React, { Component } from 'react';

class EditProject extends Component {
  state = {  }
  
  project_button_id = (projectid)=>{
    return "edit_project_button_"+ projectid
  } 
  render() { 
    return (
      <React.Fragment>
      
      <div className="modal fade" id={this.project_button_id(this.props.projectid)} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
           <div className="modal-dialog">
             <div className="modal-content">
               <div className="modal-header">
                 <h5 className="modal-title" id="exampleModalLabel">Edit Project</h5>
                 <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
               </div>
               <div className="modal-body">
                 <form onSubmit={this.props.edit_project} method='post'>
                   <div className="mb-3">
                     <label htmlFor="recipient-name" className="col-form-label">New Project Name:</label>
                     <input type="text" required className="form-control" id="recipient-name"/>
                   </div>
                   
                   <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      <button type="submit" className="btn btn-primary">Update</button>
                    </div>
                 </form>
               </div>
               
             </div>
           </div>
       </div>
       </React.Fragment>
    );
  }
}
 
export default EditProject;

