import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

export default function SEO({ title, description, image }) {
    const { pathname } = useLocation();
    
    return (
        <Helmet>
        <title>RoboWay || {title}</title>
        <meta name="description" content="RoboWayTech brings safety using IOT and AI" />
        <meta name="keywords" content="Community, Technology, Safety Device, Robotics, BD, Bike Device, Security" />
        <meta name="author" content="RoboWayTech" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#000000" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <meta name="apple-mobile-web-app-title" content="RoboWayTech" />
        <meta name="application-name" content="RoboWayTech" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="theme-color" content="#000000" />
        <meta property="og:title" content="RoboWayTech" />
        <meta property="og:type" content="Safety Tech" />
        <meta property="og:image" content="/metaCover.png" />
        <meta property="og:url" content="http://robowaytech-frontend.vercel.app" />
        <meta name="twitter:card" content="RoboWayTech" />
        <meta property="og:site_name" content="RoboWayTech, com." />
        <meta name="twitter:image:alt" content="RoboWayTech" />
        </Helmet>
    );
    }



    // Path: src\pages\components\Navbar.js
// Compare this snippet from src\pages\Signup.js:
//
