import React, { useState, useReducer, useEffect } from "react";
// import ReactResizeDetector from "react-resize-detector";
import ArtCard from '../../ui/ArtCard/ArtCard'
import Loading from '../../ui/Loading'
import styles from './Gallery.module.css';

import { useQuery, useLazyQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import ArtCldService from "../../../services/ArtCldService/ArtCldService";

const ARTWORK = gql`
  {
    getArt {
      ArtId
      Artist {
        Name
      }
      Title
      Date
      Images {
        MediumUrl
        PrimaryB
        PrimaryG
        PrimaryR
        TertiaryB
        TertiaryG
        TertiaryR
        SecondaryR
        SecondaryG
        SecondaryB
      }
      Dimensions {
        Formatted
      }
    }
  }
`;

// const intitialState = {
//   laoding: true,
//   error: '',
//   artwork: []
// }

// const reducer = (state, action) => {
//   switch(action.type) {
//     case 'FETCH_SUCCESS':
//       return {
//         loading: false,
//         error: '',
//         artwork: action.payload
//       }
//     case 'FETCH_ERROR':
//       return {
//         loading: false,
//         error: 'Something went wron while fetching Data!',
//         artwork: []
//       }
//       default:
//         return state
//   }
// }

function Gallery() {
  const { loading, error, data } = useQuery(ARTWORK);

  if (loading) return <h1>Loading...</h1>;

  if (error) return `Error! ${error}`;

  console.log(data);

  const renderPaintings = columnNum => {
    const columnItems = [];
    const len = data.getArt.length;
  
    for (let i = columnNum - 1; i < len; i += 4) {
      const art = data.getArt[i];
      const pColor = `rgb(${art.Images[0].PrimaryR},${art.Images[0].PrimaryG},${art.Images[0].PrimaryB})`;
      const sColor = `rgb(${art.Images[0].SecondaryR},${art.Images[0].SecondaryG},${art.Images[0].SecondaryB})`;
      const tColor = `rgb(${art.Images[0].TertiaryR},${art.Images[0].TertiaryG},${art.Images[0].TertiaryB})`;
      columnItems.push(
        <ArtCard
          className={styles.artCard}
          url={art.Images[0].MediumUrl}
          artist={art.Artist.Name}
          title={art.Title}
          dimensions={art.Dimensions.Formatted}
          date={art.Date}
          primaryColor={pColor}
          secondaryColor={sColor}
          tertiaryColor={tColor}
        />
      );
    }
    return columnItems;
  };
  
  return (
    <div>
      {
      <div className={styles.row}>
        <div className={styles.column}>{renderPaintings(1)}</div>
        <div className={styles.column}>{renderPaintings(2)}</div>
        <div className={styles.column}>{renderPaintings(3)}</div>
        <div className={styles.column}>{renderPaintings(4)}</div>
      </div>
      }
      </div>
  )

  






  // const [state, dispatch] = useReducer(reducer, intitialState)
  
  // const artCldService = new ArtCldService();

  // useEffect(() => {
  //   artCldService.getAllArt().then(response => {
  //     dispatch({type: 'FETCH_SUCCESS', payload: response.Artwork})
  //   }).catch(error => {
  //     dispatch({type: 'FETCH_ERROR'})
  //   })
  // }, [])

  // const renderPaintings = columnNum => {
  //   const columnItems = [];
  //   const len = state.artwork.length;
  
  //   for (let i = columnNum - 1; i < len; i += 4) {
  //     const art = state.artwork[i];
  //     const pColor = `rgb(${art.Images[0].PrimaryR},${art.Images[0].PrimaryG},${art.Images[0].PrimaryB})`;
  //     const sColor = `rgb(${art.Images[0].SecondaryR},${art.Images[0].SecondaryG},${art.Images[0].SecondaryB})`;
  //     const tColor = `rgb(${art.Images[0].TertiaryR},${art.Images[0].TertiaryG},${art.Images[0].TertiaryB})`;
  //     columnItems.push(
  //       <ArtCard
  //         className={styles.artCard}
  //         url={art.Images[0].MediumUrl}
  //         artist={art.Artist.Name}
  //         title={art.Title}
  //         dimensions={art.Dimensions.Formatted}
  //         date={art.Date}
  //         primaryColor={pColor}
  //         secondaryColor={sColor}
  //         tertiaryColor={tColor}
  //       />
  //     );
  //   }
  //   return columnItems;
  // };
  
  // return (
  //   <div>
  //     {state.loading ? 'Loading' :
  //     <div className={styles.row}>
  //       <div className={styles.column}>{renderPaintings(1)}</div>
  //       <div className={styles.column}>{renderPaintings(2)}</div>
  //       <div className={styles.column}>{renderPaintings(3)}</div>
  //       <div className={styles.column}>{renderPaintings(4)}</div>
  //     </div>}
  //     </div>
  // )

}

export default Gallery;
