import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

@inject('categoryStore')
@observer
export default class Categories extends Component{
  handleDelete=(id) => {
    alert("Are Sure want to delete!");
    console.log("id",id);
    this.props.categoryStore.deleteCategory(id);
  };

  render(){
    let values = this.props.categoryStore.fullName;
    return(
      <div>
      <div className="form-group">
       <Link to={'/addCategory'} className="btn btn-success">
       <span className="glyphicon glyphicon-plus"/>     New
       </Link>
     </div>
      <div className="container">
        <div className="row">
            <table className="table table-bordered">
              <thead className="thead-inverse">
                <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
              </thead>
            <tbody>{
             values.map((category,index ) => {
                           return (
                          <tr key={index}>
                          <td key={category.id}>{category.id}</td>
                          <td>{category.name}</td>
                          <td>{category.status}</td>
                          <td>  <Link to={`editCategory/${category.id}`} className="btn btn-info">
                              <span className="glyphicon glyphicon-pencil"/> Edit
                            </Link>
                            <button className="btn btn-danger" style={{marginLeft:'5px'}}
                              onClick={() =>this.handleDelete(category.id)}>
                                <span className="glyphicon glyphicon-trash"/> Delete
                              </button>
                          </td>


                          </tr>

                          );
                         })
                       }
              </tbody>
            </table>
          </div>
        </div>
      </div>

    );
  }
}
