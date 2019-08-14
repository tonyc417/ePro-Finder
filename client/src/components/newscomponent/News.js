import React, {useState, useEffect} from 'react';
import Newsholder from './Newsholder';


const Allnews = () => {
    const API_KEY = 'aab9f89cb9bc408e9e763d2fe2e433f3';

    const [story, setInfo] = useState([]);

    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        const response = await fetch(`
        https://newsapi.org/v2/everything?q=esports&apiKey=${API_KEY}`);
        const data = await response.json();
        setInfo(data.articles);
        console.log(data.articles);  
    }

    return(
        <div>
            {story.map(stories => (
                <Newsholder 
                    title={stories.title}
                    author={stories.author}
                    description={stories.description}
                    key={stories.publishedAt}
                    img={stories.urlToImage}
                  />
            ))};
        </div>
    )
}

export default Allnews;