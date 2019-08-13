import React from 'react';
import {Link} from 'react-router-dom';

class Header extends React.Component {
    constructor(props){
        super(props);

        this.props.handleContentChange();  
    }

    handleContentChange(controlType, event){
        event.preventDefault();
        this.props.handleContentChange(controlType, event);
    }

    searchMe(){
        this.props.searchMe();
    }

    render(){
        return (
            <div className="controls">
                <label htmlFor="genre">Genre:&nbsp;</label>
                <select 
                    type="text" 
                    id="genre" 
                    name="genre"
                    value={this.props.selectedGenre} 
                    onChange={(event) => this.handleContentChange('genre', event)}
                >
                    {this.props.genres.map((item)=>(
                    <option key={item.id} value={item.id}>{item.name}</option>
                    ))}
                </select>

                <span>
                    <label htmlFor="page">&nbsp;Page:&nbsp;</label>
                    <input 
                        type="number" 
                        id="page" 
                        name="page"
                        value={this.props.selectedPage}
                        onChange={(event) => this.handleContentChange('page', event)}/>
                    <label htmlFor="page">&nbsp;of {this.props.totalPages}</label>
                </span>
                
                <br />
                <label htmlFor="startdate">Start date:&nbsp;</label>
                <input 
                    type="date" 
                    id="startdate" 
                    name="startdate"
                    value={this.props.startDate} 
                    onChange={(event) => this.handleContentChange('startDate', event)}
                    min="1900-01-01" 
                    max="2030-12-31"/>

                <label htmlFor="enddate">&nbsp;End date:&nbsp;</label>
                <input 
                    type="date" 
                    id="enddate" 
                    name="enddate"
                    value={this.props.endDate}
                    onChange={(event) => this.handleContentChange('endDate', event)}
                    min="1900-01-01" 
                    max="2030-12-31"/>

                {this.props.searching ? 
                    <Link to='/about/' onClick={() => this.searchMe()}>About</Link> 
                    : 
                    <Link to='/' onClick={() => this.searchMe()}>Back to Movies</Link>
                }
            </div>
        );
    }
}

export default Header;