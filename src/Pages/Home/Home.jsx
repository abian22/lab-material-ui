import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";

import getAllDigimons from "../../Services/pokeServices";
import React, { useState, useEffect } from "react";


export default function MediaCard() {
const [digimons, setDigimon] = useState([]);

useEffect(() => {
  digimon();
}, []);

async function digimon() {
  const result = await getAllDigimons();
  console.log(result);
  setDigimon(result);
}

function getImage() {
  return digimons.map((d) => (
    <CardMedia
      margin="dense"
      sx={{ height: 300 }}
      image={d.img}
      title={d.name}
    />
  ));
  }


  return (
      <Card sx={{ maxWidth: 345 }} margin="dense" size="small">
        {getImage()}
      <CardContent>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
  }

/*import React, { useState, useEffect } from 'react'
import getAllDigimons from '../../Services/pokeServices'
function Home() {

    const[digimons, setDigimon] = useState([])

    useEffect(() => {
        digimon()
    }, [])

    async function digimon () {
        const result = await getAllDigimons()
        console.log(result)
        setDigimon(result)
    }

    function getDigimon() {
        return digimons.map(d => {
            return(
            <>
              <div>{d.name}</div>
              <img src={d.img}/>
            </>);
        })
    }
  return (
    
    <div>{getDigimon()}</div>
  )
}

export default Home*/
