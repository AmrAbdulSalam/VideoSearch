import React, { Component } from 'react'

class SearchBar extends Component {

    state = {
        value : ""
    }

    getSearchResult = (e) => {
        this.setState({
            value : e.target.value
        })
    }

    submitForm = (e) => {
        e.preventDefault();

        this.props.value(this.state.value);
    }
    
    render() {
        return (
            <div className = "ui segment">
                <form onSubmit={this.submitForm} className="ui form">
                    <div className="field">
                        <label htmlFor="">Video Search</label>
                        <input 
                        type="text" 
                        value = {this.state.value} 
                        onChange={this.getSearchResult}/>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;