import React from 'react';
import { View , Text} from 'react-native'
import Svg , {Path , Stop , Defs , LinearGradient ,Styles} from 'react-native-svg';
const BackIcon = ({width , height }) => {
    return (
        <Svg width="24" height="24" viewBox="0 0 24 24">
            <Path d="M14.3999 18L8.3999 12L14.3999 6" stroke="black" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
        </Svg>


    )
}
export default BackIcon;
