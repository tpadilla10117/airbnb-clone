/* Functional Component where we use mapbox: */
    import ReactMapGL from 'react-map-gl';
    import { getCenter } from 'geolib';
    import { useState } from 'react';

/* We connect the style, api token from mapbox: */
    function Map( {searchResults } ) {

    /* I transform the search results object into the  */
    /* E.G. { latitude: 52.516272, longitude: 13.377722 } object : */

        const coordinates = searchResults.map( result => ( {
            longitude: result.long,
            latitude: result.lat,

        } ));

    //The latitude and longitude of the center of location for coordinates
    //E.g. go to Mexico, map centers around the new coordinates
        const center = getCenter(coordinates);

    /* Viewport state to give the mapbox its size: */
        const [ viewport, setViewport ] = useState({
            width:'100%',
            height: '100%',
            latitude: center.latitude,
            longitude: center.longitude,
            zoom: 11,
        });
        

    /*  We return the ReactMapGL custom component: */
        return <ReactMapGL
            mapStyle='mapbox://styles/tpadilla10117/cks7odv2l1f0m17qk9hdz0hei'
            mapboxApiAccessToken={ process.env.mapbox_key } //from the next.config.js
            { ...viewport }
            onViewportChange={ (nextViewport) => setViewport(nextViewport) }
            /* onViewPortChange lets us move the viewport on the map: */
        >


        </ReactMapGL>
    };

    export default Map;