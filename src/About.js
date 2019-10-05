import React from 'react';

class About extends React.Component {
    render(){
        return (
            <div>
                <article>
                    <h1>About</h1>
                    <p>This project was created by Steve Gilkes using <strong><a href='https://www.themoviedb.org'>The Movie DB</a></strong>.
                    </p>

                    <h1>Image Credits</h1>
                    <h4>Popcorn Banner Image</h4>
                    <p>Photo by <a href="https://unsplash.com/@charlesdeluvio">Charles 🇵🇭</a> on Unsplash</p>
                </article>
            </div>
        );
    }
}

export default About;