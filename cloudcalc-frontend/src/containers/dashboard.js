import React from 'react';
import Button from '../components/button';

class Dashboard extends React.Component {
  render(){
    return(
    <div>
      Dashboard
      <form>
        <Button name="0" handleChange={this.props.handleChange}/>
        <Button name="1" handleChange={this.props.handleChange}/>
        <Button name="2" handleChange={this.props.handleChange}/>
        <Button name="3" handleChange={this.props.handleChange}/>
        <Button name="4" handleChange={this.props.handleChange}/>
        <Button name="5" handleChange={this.props.handleChange}/>
        <Button name="6" handleChange={this.props.handleChange}/>
        <Button name="7" handleChange={this.props.handleChange}/>
        <Button name="8" handleChange={this.props.handleChange}/>
        <Button name="9" handleChange={this.props.handleChange}/>

        <Button name="+" handleChange={this.props.handleChange}/>
        <Button name="-" handleChange={this.props.handleChange}/>
        <Button name="/" handleChange={this.props.handleChange}/>
        <Button name="*" handleChange={this.props.handleChange}/>

        <input onChange={this.props.handleChange} type='text'/>
        <input type='submit'/>
      </form>
    </div>
    )
    
  }
}
  
  export default Dashboard