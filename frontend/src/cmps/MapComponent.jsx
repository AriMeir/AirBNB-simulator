import { useEffect } from "react";

export function MapComponent({ country, city, lat, lng }) {
    useEffect(() => {
        // Load the Google Maps script with the API key
        const loadScript = () => {
            const existingScript = document.getElementById('googleMaps');
            if (!existingScript) {
                const script = document.createElement('script');
                script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyClqOPNqyGdEiMafLkXgBCTF2KMD1LIRyI&callback=initMap`;
                script.id = 'googleMaps';
                document.body.appendChild(script);
                script.onload = () => {
                    initMap(); // Initialize the map after the script has loaded
                };
            } else {
                initMap(); // If script is already loaded, directly initialize the map
            }
        };

        loadScript();

        // Cleanup function to remove the script and map
        return () => {
            const script = document.getElementById('googleMaps');
            if (script) {
                script.remove();
            }
        };
    }, [lat, lng]);

    function initMap() {
        const map = new google.maps.Map(document.querySelector(".map-preview"), {
            center: { lat: lat, lng: lng },
            zoom: 13,
        });

        // Create and place the marker at the specified location
        new google.maps.Marker({
            position: { lat: lat, lng: lng },
            map: map,
            title: `${city}, ${country}`, // Optional title for the marker
        });
    }

    return (
        <div className="map flex column align-left pad-box border-bottom">
            <h2>Where you'll be</h2>
            <div className="map-preview" ></div>
            <p className="address-text light-bold">{`${country}, ${city}`}</p>
            <p>
                Lexington, Kentucky is the second-largest city in Kentucky next to
                Louisville, and is located in the heart of the Bluegrass region.
                Lexington is known as the "Horse Capital of the World," since it is home
                to the Kentucky Horse Park, Keeneland race course and the Red Mile race
                course.
            </p>
        </div>
    );
}
