import React, { Component } from 'react';

class EditCard extends Component {
  state = {  } 
  card_button_edit = (section_id,card_id)=>{

    return "edit_card_button_"+card_id+'-'+section_id
  }
  render() { 
    return (
      <React.Fragment>
      
      <div className="modal fade" id={this.card_button_edit(this.props.sectID,this.props.cardID)} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
           <div className="modal-dialog">
             <div className="modal-content">
               <div className="modal-header">
                 <h5 className="modal-title" id="exampleModalLabel">Update Card</h5>
                 <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
               </div>
               <div className="modal-body">
                 <form onSubmit={this.props.edit_card} method='post'>
                   <div className="mb-3">
                     <label htmlFor="headig" className="col-form-label">New Heading:</label>
                     <input type="text" required className="form-control" id="headig"/>
                   </div>
                   <div className="mb-3">
                     <label htmlFor="description" className="col-form-label">New Description:</label>
                     <textarea className="form-control" required id="description"></textarea>
                   </div>
                   <div className="mb-3">
                     <label htmlFor="assigned_to" className="col-form-label">New Assigned to:</label>
                     <textarea className="form-control" required id="assigned_to"></textarea>
                   </div>
                   <div className="mb-3">
                     <label htmlFor="tags" className="col-form-label">New Tags:</label>
                     <textarea className="form-control" required id="tags"></textarea>
                   </div>
                   
                   <div className="mb-3">
                     <label htmlFor="created_date" className="col-form-label">New Created date:</label>
                     <input type={'date'} className="form-control" required id="created_date"></input>
                   </div>

                   <div className="mb-3">
                     <label htmlFor="delivery_date" className="col-form-label">New Delivery date:</label>
                     <input type={"date"} className="form-control" required id="delivery_date"></input>
                   </div>
                   
                   <div className="mb-3">
                     <label htmlFor="money_cost" className="col-form-label">New Money cost:</label>
                     <textarea className="form-control" required id="money_cost"></textarea>
                   </div>

                   <div className="mb-3">
                     <label htmlFor="cover_pic" className="col-form-label">New Upload cover image:</label>
                     <input accept='image/*' type="file" className="form-control" id="cover_pic"></input>
                   </div>
                   <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      <button type="submit" className="btn btn-primary">update</button>
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
 
export default EditCard;

