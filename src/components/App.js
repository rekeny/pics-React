import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
    state = { images: [] };
    
    onSearchSubmit = async (term) => { //async add to get info from the API
        const response = await unsplash.get('/search/photos', { // const response = await add second way to get info API
                params: { query: term }
            });

        // one way to get the pictures
        // .then((response) => {
        //     console.log(response.data.results);

        // });
        
        this.setState({ images: response.data.results });

    }

    render() {
        return (
            <div className = 'ui container' style = {{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <ImageList images = {this.state.images} />
            </div>
        );
    }
};

export default App;