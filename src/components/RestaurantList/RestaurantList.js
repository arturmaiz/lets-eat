import React from "react";

import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';

import RestaurantListItem from './RestaurantListItem/RestaurantListItem';

import "./RestaurantList.scss";

const RestaurantList = ({ selectedRestaurant, shuffle }) => {

  return (
    <AvatarGroup max={20}>
      {/* <RestaurantListItem /> */}
      <Avatar className={shuffle ? 'avatar-group hide' : ''} alt="Remy Sharp" src="https://d25t2285lxl5rf.cloudfront.net/images/dishes/cc0e53de-3813-46a5-ac1d-7b1cc77c7f71.jpg" />
      <Avatar className={shuffle ? 'avatar-group hide' : ''} alt="Remy Sharp" src="https://keter-rest.co.il/wp-content/uploads/2018/02/g01.jpg" />
      <Avatar className={shuffle ? 'avatar-group hide' : ''} alt="Remy Sharp" src="https://files.mishloha.co.il/files/menu_food_pic/FIL_6434351_637285040031725922.png" />
      <Avatar className={shuffle ? 'avatar-group hide' : ''} alt="Remy Sharp" src="https://medias.hashulchan.co.il/www/uploads/2018/12/%D7%A4%D7%90%D7%93-%D7%AA%D7%90%D7%99-%D7%98%D7%99%D7%99%D7%92%D7%A8-%D7%9C%D7%99%D7%9C%D7%99-%D7%93%D7%A0%D7%99%D7%90%D7%9C-%D7%9C%D7%99%D7%9C%D7%94-600x600.jpg" />
      <Avatar className={shuffle ? 'avatar-group hide' : ''} alt="Remy Sharp" src="https://www.yoter.co.il/wp-content/uploads/2019/03/08f8e0260c64418510cefb2b06eee5cd-lbox-225x225-fff.jpg" />
      <Avatar className={shuffle ? 'avatar-group hide' : ''} alt="Remy Sharp" src="https://d2pnvdnftoj8zk.cloudfront.net/wp-content/uploads/sites/10/2019/08/25100221/contact_us.jpg" />
    </AvatarGroup>
  );
};

export default RestaurantList;
