import React, { useState } from "react";
import "./styles.scss";
import { Autocomplete } from "@react-google-maps/api";
import { AppBar, Toolbar, Typography, InputBase, Box } from "@material-ui/core";
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";

const Header = ({ setCoords }) => {
  const [autocomplete, setAutocomplete] = useState(null);

  const onLoad = (autoC) => setAutocomplete(autoC);

  const onPlaceChanged = () => {
    const lat = autocomplete.getPlace().geometry.location.lat();
    const lng = autocomplete.getPlace().geometry.location.lng();

    setCoords({ lat, lng });
  };

  return (
    <div className="header section__padding">
      <div className="header__logo">
        <ExploreIcon />
        <h2>Travel Planz</h2>
      </div>
      <div className="header__search">
        <h2>Explore new places</h2>
        <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
          <div className="header__search-bar">
            <SearchIcon />
            <input type="text" placeholder="search..." />
          </div>
        </Autocomplete>
      </div>
    </div>
  );
};

export default Header;
