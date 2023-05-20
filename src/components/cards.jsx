import React, { Component } from 'react';
import AddCard from './addCard';
import AddComments from './addComments';
import app from "../assets/app.css"
import EditCard from './editCard';

class CARDS extends Component {
    state = { }
    
    add_card_form = (sec_id)=>{
        return <AddCard 
        sectID = {sec_id}
        onclick_create = {(e)=>this.props.onclick_create(e)}
        add_card_id = {this.props.add_card_id}
        />
    }

    show_buttom = (card,card_element_index,sec_id)=>{
        

        if (sec_id === 1 && card.card_heading !== "Add Card")
        return(
            <React.Fragment>
        
        <button id='right' onClick={()=>{
            this.props.onclick_right(card_element_index,sec_id)
        }} className="btn btn-sm btn-primary ms-2"><span className="bi bi-arrow-right"></span></button>
        
        <button id="delete" onClick={()=>{
            this.props.onclick_delete_card(card_element_index,sec_id)
        }} className="btn btn-sm btn-primary ms-2"><span className="bi bi-trash-fill"></span></button>
         {/* <button type ="button" className="btn btn-sm btn-primary bi bi-pen ms-2"></button> */}
         <button className="btn btn-sm btn-primary bi bi-pen ms-2" id={"edit_card_button_id_"+card.card_id+"-"+sec_id} type="button" data-bs-toggle="modal" data-bs-target={"#edit_card_button_"+card.card_id+"-"+sec_id} data-bs-whatever="@mdo"></button>
         <AddComments/>
        </React.Fragment>
        )
        else if(sec_id === 4 && card.card_heading !== "Add Card")
        return(
            <React.Fragment>
            <button id="left" onClick={()=>{
                this.props.onclick_left(card_element_index,sec_id)
            }}className="btn btn-sm btn-primary"><span className="bi bi-arrow-left"></span></button>
            <button id="delete" onClick={()=>{
                this.props.onclick_delete_card(card_element_index,sec_id)
            }} className="btn btn-sm btn-primary ms-2"><span className="bi bi-trash-fill"></span></button>
         {/* <button type ="button" className="btn btn-sm btn-primary bi bi-pen ms-2"></button> */}
         <button className="btn btn-sm btn-primary bi bi-pen ms-2" id={"edit_card_button_id_"+card.card_id+"-"+sec_id} type="button" data-bs-toggle="modal" data-bs-target={"#edit_card_button_"+card.card_id+"-"+sec_id} data-bs-whatever="@mdo"></button>
         <AddComments/>
        </React.Fragment>
        
        )

        else if (card.card_heading !== "Add Card")
        return(
        <React.Fragment>
            
            <button id="left" onClick={()=>{
                this.props.onclick_left(card_element_index,sec_id)
            }}className="btn btn-sm btn-primary"><span className="bi bi-arrow-left"></span></button>

            <button id='right' onClick={()=>{
                this.props.onclick_right(card_element_index,sec_id)
            }} className="btn btn-sm btn-primary ms-2"><span className="bi bi-arrow-right"></span></button>
            
            <button id="delete" onClick={()=>{
                        this.props.onclick_delete_card(card_element_index,sec_id)
                    }} className="btn btn-sm btn-primary ms-2"><span className="bi bi-trash-fill"></span></button>
         {/* <button type ="button" className="btn btn-sm btn-primary bi bi-pen ms-2"></button> */}
         
         <button className="btn btn-sm btn-primary bi bi-pen ms-2" id={"edit_card_button_id_"+card.card_id+"-"+sec_id} type="button" data-bs-toggle="modal" data-bs-target={"#edit_card_button_"+card.card_id+"-"+sec_id} data-bs-whatever="@mdo"></button>
         
         <AddComments/>
        </React.Fragment>
        )

    }

    render() { 

        return (
            <React.Fragment>
                
            {this.props.card_data.map((card,index)=>{
                
                var img_path = card.pic_name
                try {
                    img_path = require(`../assets/${img_path}`)    
                } catch (error) {
                    if (card.pic_name !== "empty")
                    img_path = require("../assets/question.jpg")
                }
                
                var sec_id = this.props.section_id
                return(
                    
                <div style = {{marginTop:"10px"}} key ={index}>
                <EditCard
                sectID = {sec_id}
                cardID = {card.card_id}
                edit_card = {(e)=>this.props.edit_card(card.card_id,sec_id,e)}
                />
                {this.add_card_form(sec_id)}
                <div className="card" style={{width: "16rem"}}>
                    <img src={img_path} width="500" height="160" className="card-img-top" alt="No cover img"/>
                    <div className="card-body">
                        <h5 className="card-title">{card.card_heading}</h5>
                        <p className="card-text">{card.card_desc}</p>
                        <p className="card-text">{(Boolean(card.assigned_to) !== false ) ? (card.assigned_to.length !== 0) ? "Assigned Members: " + card.assigned_to.map((members)=>{return members.toUpperCase() +" "}):"":""}</p>
                        <p className="card-text"> {(Boolean(card.created_date) !== false ) ? "Created at: " + card.created_date:""}</p>
                        <p className="card-text">{(Boolean(card.delivery_date) !== false ) ? "Delivery Date: " + card.delivery_date:""}</p>
                        <p className="card-text">{(Boolean(card.remaining_time) !== false ) ? "Remaining Time: "  + card.remaining_time:""}</p>
                        <p className="card-text">{(Boolean(card.time_cost) !== false ) ? "Time Cost: " + card.time_cost + " Hours":""}</p>
                        <p className="card-text">{(Boolean(card.time_cost) !== false ) ? "Money Cost: " + card.money_cost + " $":""}</p>
                        {this.show_buttom(card,index,sec_id)}
                       
                        
                    </div>
                    
                </div>
                
                </div>
                
                )
            })}
            </React.Fragment>
        );
    }
}
 
export default CARDS;