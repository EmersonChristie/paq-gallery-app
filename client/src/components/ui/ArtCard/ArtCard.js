import React, { useState } from "react";
import styles from "./ArtCard.module.css";

// animate on scroll
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles


const ArtImage = ({ url, title }) => {
  return <img className={styles.artImage} src={url} alt={title} />;
};

const CardInfo = ({ artist, title, date, dimensions }) => {
  return (
    <div className={styles.cardInfo}>
      <p className={styles.artist}>{artist}</p>
      <p className={styles.title}>{title}, {date}</p>
      <p className={styles.dimensions}>{dimensions}</p>
    </div>
  );
};

const CardColors = props => {
  var primaryColor = {
    backgroundColor: `${props.primaryColor}`
  };
  var secondaryColor = {
    backgroundColor: `${props.secondaryColor}`
  };
  var tertiaryColor = {
    backgroundColor: `${props.tertiaryColor}`
  };

  return (
    <div className={styles.cardColors}>
      <div className={styles.colorBox} style={primaryColor}></div>
      <div className={styles.colorBox} style={secondaryColor}></div>
      <div className={styles.colorBox} style={tertiaryColor}></div>
    </div>
  );
};

const ArtCard = props => {

    


  return (
    <div className={styles.cardContainer} data-aos="fade-up">
      <ArtImage {...props} />
      <CardInfo {...props} />
      <CardColors {...props} />
    </div>
  );
};

export default ArtCard;


// import React, { useState } from 'react';
// import styles from './ArtCard.module.css';

// const ArtImage = ({ url, title }) => {
//     return <img className={styles.artImage} src={url} alt={title}/>
// }

// const CardInfo = ({ artist, title, date, dimensions }) => {
//     return (
//         <div className={styles.cardInfo}>
//             <p className={styles.artist}>{artist}</p>
//             <p className={styles.title}>{title}</p>
//             <p className={styles.dimensions}>{dimensions}</p>
//         </div>
//     )
// }

// const ArtCard = (props) => {
//     // const [imgSource, setImgSource] = useState('#6ba584');

    

//     return (
//         <div className={styles.cardContainer}>
//             <ArtImage { ...props } />
//             <CardInfo { ...props } />
//         </div>

//         // <Card style={{ width: '18rem'}}>
//         //     <Card.Img variant="top" src="https://cdn.artcld.com/img/w_455,h_600,c_fit/zsowfzvbv92bygj3a3dt.jpg" />
//         //     <Card.Body>
//         //         <Card.Title>{props.artist}</Card.Title>
//         //         <Card.Text>{props.title}</Card.Text>
//         //         <Card.Text>{props.dimensions}</Card.Text>
//         //     </Card.Body>
//         // </Card>
//     )

// }

// export default ArtCard;
