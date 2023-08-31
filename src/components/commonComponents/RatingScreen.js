import React, { useState } from "react";
import { Rating } from 'react-native-ratings';
import { Colors, SF, SH, SW } from '../../utils';


function RatingScreen(props) {
    return (
        <Rating
          type='custom'
          ratingColor='#FFC000'
          ratingBackgroundColor='#c8c7c8'
          ratingCount={5}
          tintColor={'white'}
          imageSize={14}
          startingValue={4.5}
          isDisabled={false}
          style={{ paddingVertical: SH(10) }}
      />
    );
};
export default RatingScreen;