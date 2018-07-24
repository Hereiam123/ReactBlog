import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component{
  renderField(field){
    return(
      <div className="form-group">
        <label>{field.label}</label>
        <input
          type={field.type}
          className="form-control"
          {...field.input}
        />
      </div>
    );
  }

  render(){
    return (
      <form>
        <Field
          name="title" component={this.renderField} label="Title" type="text"
        />
        <Field
          name="categories" component={this.renderField} label="Categories" type="text"
        />
        <Field
          name="content" component={this.renderField} label="Content" type="text"
        />
      </form>
    );
  }
}

function validate(values){
  const errors = {};


  //If errors is empty, form is fine to submit
  return errors;
}

export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(PostsNew);
