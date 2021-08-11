/* Functional Component where we use mapbox: */
    import ReactMapGL from 'react-map-gl';
    import { getCenter } from 'geolib';
    import { useState } from 'react';

/* We connect the style, api token from mapbox: */
    function Map( {searchResults } ) {

    /* Viewport state to give the mapbox its size: */
        const [ viewport, setViewport ] = useState({
            width:'100%',
            height: '100%',
            latitude: 37.7577,
            longitude: -122.4376,
            zoom: 11,
        });

    /* I transform the search results object into the  */
    /* E.G. { latitude: 52.516272, longitude: 13.377722 } object : */

        const coordinates = searchResults.map( result => ( {
            longitude: result.long,
            latitude: result.lat,

        } ));
console.log(coordinates)

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