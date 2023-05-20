import React, { Component } from 'react';

class AddProject extends Component {
  state = {  } 
  render() { 
    return (
      <React.Fragment>
      
      <div className="modal fade" id="add_project" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
           <div className="modal-dialog">
             <div className="modal-content">
               <div className="modal-header">
                 <h5 className="modal-title" id="exampleModalLabel">Add Project</h5>
                 <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
               </div>
               <div className="modal-body">
                 <form onSubmit={this.props.create_project} method='post'>
                   <div className="mb-3">
                     <label htmlFor="recipient-name" className="col-form-label">Project Name:</label>
                     <input type="text" required className="form-control" id="recipient-name"/>
                   </div>
                   {/* <div className="mb-3">
                     <label htmlFor="message-text" className="col-form-label">Project Description:</label>
                     <textarea className="form-control" required id="message-text"></textarea>
                   </div> */}
        
                   <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      <button type="submit" className="btn btn-primary">Create</button>
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
 
export default AddProject;

