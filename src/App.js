import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import About from './About';
import Header from './Header';
import Movies from './Movies';

const API_KEY   = '387edbffe136b089267267b98a26451d';
const BASE_URL  = 'http://api.themoviedb.org/3/discover/movie?api_key='
    + API_KEY;

const GENRES = 'https://api.themoviedb.org/3/genre/movie/list?api_key='
            + API_KEY
            + '&language=en-US';

class App extends React.Component {
    constructor() {
        super();

        this.state  = {
          apiKey : API_KEY,
          startDate  : '',
          endDate    : '',
          movies : [],
          genres : [],
          totalPages : 1,
          dayRange : 60,
          selectedGenre  : 0,
          selectedPage   : 1,
          searching : true
        };

        this.getMovies            = this.getMovies.bind(this);
        this.searchMe             = this.searchMe.bind(this);
        this.handleContentChange  = this.handleContentChange.bind(this);
    }

    // Called when constructor is finished building component.
    componentDidMount(){
      this.getGenres();
      this.getMovies();
      this.checkDates('startDate', this.state.dayRange);
      this.checkDates('endDate');
    }

    handleContentChange(controlType, event){
      let statePromise = new Promise((resolve, reject) => {
        if (controlType === 'genre'){
          this.setState({
            selectedPage: 1,
            selectedGenre: event.target.value
        });
        } else if (controlType === 'page'){
          if (event.target.value < 1){
            event.target.value = 1;
            // this.setState({ selectedPage: 1 });
          } else if (event.target.value > this.state.totalPages) {
            event.target.value = this.state.totalPages;
          }
          this.setState({ selectedPage: event.target.value });
        } else if (controlType === 'startDate'){
          this.checkDates('startDate', this.state.dayRange, event.target.value);
        } else if (controlType === 'endDate'){
          this.checkDates('endDate', 0, event.target.value);
        }
        resolve();
      });
      statePromise.then(() => this.getMovies());
    }

    checkDates(datePosition, dateRange = 0, passedValue = null) {
      let tempDate = new Date();

      tempDate.setDate(tempDate.getDate() - dateRange);

      if (passedValue === null){
        tempDate =  tempDate.getFullYear() + '-' +
                    ("0" + (Number(tempDate.getMonth()) + 1)).slice(-2) + '-' +
                    ("0" + tempDate.getDate()).slice(-2);
      } else {
        tempDate = passedValue;
      }

      if (datePosition === 'startDate'){
        this.setState({startDate : tempDate });
      } else {
        this.setState({endDate : tempDate });
      }
      this.getMovies();
    }

    getMovies() {    
      let url = '';

      url = BASE_URL + 
        '&primary_release_date.gte=' + this.state.startDate +
        '&primary_release_date.lte=' + this.state.endDate;
        
      url += "&page=" + this.state.selectedPage;
      if (this.state.selectedGenre === 0){
        url += "&with_genres=28";
      } else {

        url += "&with_genres=" + this.state.selectedGenre;
      }

      // Request and wait for data from remote server.
      fetch(url).then(response => response.json())
        .then((data) => {
            this.setState(
              {movies: data.results,
              totalPages: data.total_pages}
            );
        })
        // Data is not retieved.
        .catch((error) => {
            alert(error);
        });
    }

    getGenres() {
      // This code gets data from the remote server.
      fetch(GENRES).then(response => response.json())

      // Data is retrieved.
      .then((data) => {
          this.setState({genres:data.genres});
      })
      // Data is not retrieved.
      .catch((error) => {
          alert(error);
      });
    }

    searchMe(){
      if (this.state.searching){
        this.setState({searching: false});
      } else {
        this.setState({searching: true});
      }
    }

    render() {
        return (  
          <Router>  
            <div>
              <Route 
                path='/'
                render={(props) => <Header {...props} 
                  selectedGenre={this.state.selectedGenre}
                  selectedPage={this.state.selectedPage}
                  startDate={this.state.startDate}
                  endDate={this.state.endDate}
                  genres={this.state.genres} 
                  totalPages={this.state.totalPages} 
                  searching={this.state.searching} 
                  handleContentChange={this.handleContentChange}
                  searchMe={this.searchMe}
                  />} />
              <Route 
                path='/about/' 
                component={About} />
              <Route 
                exact path='/' 
                render={(props) => <Movies {...props} movies={this.state.movies} />}
                />
            </div> 
          </Router> 
        )
    }
}
export default App;
