// 简历样式选择
import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto',
  },
};

const tilesData = [
  {
    img: '/images/book-1.jpg',
    title: 'Breakfast',
    author: 'jill111',
  },
  {
    img: '/images/book-1.jpg',
    title: 'Tasty burger',
    author: 'pashminu',
  },
  {
    img: '/images/book-1.jpg',
    title: 'Camera',
    author: 'Danson67',
  },
  {
    img: '/images/book-1.jpg',
    title: 'Morning',
    author: 'fancycrave1',
  },
  {
    img: '/images/book-1.jpg',
    title: 'Hats',
    author: 'Hans',
  },
  {
    img: '/images/book-1.jpg',
    title: 'Honey',
    author: 'fancycravel',
  },
  {
    img: '/images/book-1.jpg',
    title: 'Vegetables',
    author: 'jill111',
  },
  {
    img: '/images/book-1.jpg',
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
  },
];

/**
 * A simple example of a scrollable `GridList` containing a [Subheader](/#/components/subheader).
 */
const StyleList = () => (
  <div style={styles.root}>
    <GridList
      cellHeight={180}
      style={styles.gridList}
    >
      <Subheader>December</Subheader>
      {tilesData.map((tile,index) => (
        <GridTile
          key={'style-list-'+index}
          title={tile.title}
          actionIcon={<button><StarBorder color="white" /></button>}
        >
          <img src={tile.img} />
        </GridTile>
      ))}
    </GridList>
  </div>
);

export default StyleList;