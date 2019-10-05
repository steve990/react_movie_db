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
            <div>
                <div className="banner">
                    <h1>The Movie API</h1>
                </div>
                <nav>
                    <div className="controlGroup">
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
                    </div>

                    <div className="controlGroup">
                        <label htmlFor="page">&nbsp;Page:&nbsp;</label>
                        <input 
                            type="number" 
                            id="page" 
                            name="page"
                            value={this.props.selectedPage}
                            onChange={(event) => this.handleContentChange('page', event)}/>
                        <label htmlFor="page">&nbsp;of {this.props.totalPages}</label>
                    </div>
                    
                    <div className="controlGroup">
                        <label htmlFor="startdate">Start date:&nbsp;</label>
                        <input 
                            type="date" 
                            id="startdate" 
                            name="startdate"
                            value={this.props.startDate} 
                            onChange={(event) => this.handleContentChange('startDate', event)}
                            min="1900-01-01" 
                            max="2030-12-31"/>
                    </div>

                    <div className="controlGroup">
                        <label htmlFor="enddate">&nbsp;End date:&nbsp;</label>
                        <input 
                            type="date" 
                            id="enddate" 
                            name="enddate"
                            value={this.props.endDate}
                            onChange={(event) => this.handleContentChange('endDate', event)}
                            min="1900-01-01" 
                            max="2030-12-31"/>
                    </div>

                    <div className="controlGroup">
                        {this.props.searching ? 
                            <Link to='/movies/about' onClick={() => this.searchMe()}>About</Link> 
                            : 
                            <Link to='/movies' onClick={() => this.searchMe()}>Back to Movies</Link>
                        }
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;