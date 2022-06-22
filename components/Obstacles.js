// import React from 'react';
// import {StyleSheet, Text, View} from 'react-native';

// const Obstacles = ({color, obstaclesLeft, obstaclesHeight, obstaclesWidth, gap, randomBottom}) => {


//     return (
//         <>
//             <View style={{
//                 position: 'absolute',
//                 backgroundColor: color,
//                 width: obstaclesWidth,
//                 height: obstaclesHeight,
//                 left: obstaclesLeft,
//                 botton: randomBottom + obstaclesHeight + gap,
//             }} 
//             />


//              <View style={{
//                 position: 'absolute',
//                 backgroundColor: color,
//                 width: obstaclesWidth,
//                 height: obstaclesHeight,
//                 left: obstaclesLeft,
//                 botton:randomBottom,

//             }} 

//             />
//         </>
//     )

// }

// export default Obstacles

import React from 'react';
import { View } from 'react-native';

const Obstacles = ({
    color,
    obstacleWidth, 
    obstacleHeight, 
    randomBottom, 
    gap, 
    obstaclesLeft}) => {

    return (
        <>
            <View style={{
                position: 'absolute',
                backgroundColor: color,
                width: obstacleWidth,
                height: 500,
                left: obstaclesLeft,
                bottom: randomBottom + obstacleHeight + gap,
            }}></View>
            <View style={{
                position: 'absolute',
                backgroundColor: color,
                width: obstacleWidth,
                height: obstacleHeight,
                left: obstaclesLeft,
                bottom: randomBottom,
            }}></View>
        </>
    )
}

export default Obstacles
