//importaciones de React
import * as React from 'react';
//Biblioteca de componentes de interfaz de usuario para React.
import ImageList from '@mui/material/ImageList';
//Componente representa un elemento individual dentro de un "ImageList".
import ImageListItem from '@mui/material/ImageListItem';
/* Este componente se utiliza para agregar una barra de información
 sobre o debajo de cada ImageListItem, usada para mostrar 
 un título y una descripción o acciones.*/
import ImageListItemBar from '@mui/material/ImageListItemBar';

//componentes de estilo MUI
import { Container, Box, Typography, Grid, Divider } from '@mui/material';

import ReactIcon from '../../assets/images/svg/react.svg';
import DjangoIcon from '../../assets/images/svg/python.svg';
import BootstrapIcon from '../../assets/images/svg/bootstrap.svg';

import PHPIcon from '../../assets/images/svg/php.svg';
import JavaScriptIcon from '../../assets/images/svg/javascript.svg';
import PythonIcon from '../../assets/images/svg/django.svg';
import FirebaseIcon from '../../assets/images/svg/firebase.svg';

import CssIcon from '../../assets/images/svg/css3.svg';
import HTMLIcon from '../../assets/images/svg/html.svg';


//itemData: Un array de objetos, donde cada objeto representa un elemento en la cuadrícula
const itemData = [
  {
    img: 'https://img.icons8.com/?size=100&id=5cVdiiKKi0vX&format=png&color=000000%27',
    title: 'CSS',
    description: 'Lenguaje de diseño utilizado para definir la presentación y el estilo visual de páginas web',
  },
  {
    img: 'https://img.icons8.com/?size=100&id=59916&format=png&color=000000',
    title: 'Html',
    description: 'Lenguaje estándar utilizado para crear y diseñar páginas web.',
  },
  {
    img: 'https://img.icons8.com/?size=100&id=No6QClfCevdr&format=png&color=000000',
    title: 'Java',
    description: 'Lenguaje de programación de alto nivel y orientado a objetos, conocido por su portabilidad.',
  },
  {
    img: 'https://img.icons8.com/?size=100&id=FRRACRKRsw2s&format=png&color=000000',
    title: 'JavaScript',
    description: 'Lenguaje de programación popular utilizado principalmente para crear contenido interactivo.',
  },
  {
    img: 'https://img.icons8.com/?size=100&id=13441&format=png&color=000000',
    title: 'Python',
    description: 'Lenguaje de programación de alto nivel, interpretado y de propósito general.',
  },
  {
    img: 'https://img.icons8.com/?size=100&id=o6OvAxG0nzTH&format=png&color=000000',
    title: 'MongoDB',
    description: 'Sistema de gestión de bases de datos NoSQL, orientado a documentos y de código abierto.',
  },
  {
    img: 'https://img.icons8.com/?size=100&id=xqzBBnrMKwEz&format=png&color=000000',
    title: 'SQL',
    description: 'Lenguaje de programación diseñado para administrar y manipular bases de datos relacionales.',
  },
  {
    img: 'https://img.icons8.com/?size=100&id=Fycm8TUhWmFU&format=png&color=000000',
    title: 'C#',
    description: 'Lenguaje orientado a objetos y está diseñado para ser simple, moderno, seguro y eficiente.',
  },
  {
    img: 'https://img.icons8.com/?size=100&id=geAxqWV0aAaI&format=png&color=000000',
    title: 'PHP',
    description: 'Lenguaje de programación ampliamente utilizado para el desarrollo web.',
  },
  {
    img: 'https://img.icons8.com/?size=100&id=2T6TKY6whzgV&format=png&color=000000',
    title: 'C++',
    description: 'Lenguaje de programación de propósito general que se basa en el lenguaje C original.',
  },
  {
    img: 'https://img.icons8.com/?size=100&id=wpZmKzk11AzJ&format=png&color=000000',
    title: 'TypeScript',
    description: 'Lenguaje de programación desarrollado por Microsoft añadiendo tipos estáticamente tipados.',
  },
  {
    img: 'https://img.icons8.com/?size=100&id=QF5zpaaq4QZf&format=png&color=000000',
    title: 'Kotlin',
    description: 'Lenguaje de programación moderno y multiplataforma.',
  },
];

export default function Skills() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        pt: { xs: 10, sm: 20, lg: 12 },
      }}
      data-aos="fade-up"
    >
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        alignItems="center"
        justifyContent="center"
        textAlign = "center">
        <Grid item xs={3} sm={3} md={12} lg={12} order={{ xs: 2, md: 2, lg: 1 }}>
          <ImageList
            //Sistema de estilo (sx) de MUI para ajustar el ancho al 100% 
            sx={{
              width: '100%',
              height: 'auto'
            }}
            //Organiza los elementos en una cuadrícula.
            variant="quilted"
            cols={12}
            rowHeight={121}
          >


            {itemData.map((item) => (
              //Se itera sobre el array
              <ImageListItem
                key={item.img}
                cols={2}
                rows={2}
              >
                <img
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  alt={item.title}
                  style={{ width: "50%", height: "50%" }}
                  loading="lazy"
                //Habilita la carga diferida (lazy loading) para optimizar el rendimiento.
                />
                <ImageListItemBar
                  title={item.title}
                  subtitle={<span>{item.description}</span>}
                  position="below"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Grid>

      </Grid>
    </Container>

  );
}