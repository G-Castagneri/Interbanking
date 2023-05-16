import React from 'react'
import { useState, useRef, useEffect } from "react";

import "../../assets/Footer.css";
import Logo from "../assets/image/Interbanking-logo.jpeg";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "../../assets/Buttons.css";
import { maxWidth } from "@mui/system";
/*
interface ComponentProps{
  filterText: ()=> boolean;
  text:{
    name: string;
    description: string;
  };

}*/
const Footer /*: React.FC<ComponentProps> */ = () => {
  return (
    <>
    <footer>
      <h5>
        INTERBANKING S.A.- Cecilia Grierson 255, Piso 3, CP C1107CPE, Tel:
        54.11.5554-2999 | C.A.B.A, Buenos Aires, Argentina
      </h5>
    </footer>
  </>
  )
}

export default Footer