import React from 'react';
import Board from 'react-trello';
import ProjectsDndHeader from "./ProjectsDndHeader";
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import MenuItem from 'material-ui/MenuItem';

import './TrelloDnd.css';

const dataDnD = {
    lanes: [
        {
            id: 'lane1',
            lineHeadTitle: 'Quened',
            style: {background:'transparent', maxWidth: '300px', height: '100%'},
            cards: [
                {
                    id: 'Card1',
                    theme: 'Wordpress theme',
                    ava: 'img/Michelle-Stewart.jpg',
                    altAva: 'Michelle-Stewart-ava',
                    company: 'Symu.co',
                    price: 1500,
                    cardStyle: {border: 'none', maxWidth: '300px'}
                }
            ]
        },
        {
            id: 'lane2',
            lineHeadTitle: 'Planning',
            style: {background:'transparent', maxWidth: '300px', height: '100%'},
            cards: [
                {
                    id: 'Card2',
                    theme: 'Landing page',
                    ava: 'img/Michelle-Stewart.jpg',
                    altAva: 'Michelle-Stewart-ava',
                    company: 'Symu.co',
                    price: 1500,
                    cardStyle: {border: 'none', maxWidth: '300px'}
                },
                {
                    id: 'Card3',
                    theme: 'New website',
                    ava: 'img/Lyall-Roach.jpg',
                    altAva: 'Lyall-Roach-ava',
                    company: 'Symu.co',
                    price: 1500,
                    cardStyle: {border: 'none', maxWidth: '300px'}
                },
                {
                    id: 'Card4',
                    theme: 'Dashboard',
                    ava: 'img/Michelle-Stewart.jpg',
                    altAva: 'Michelle-Stewart-ava',
                    company: 'Symu.co',
                    price: 1500,
                    cardStyle: {border: 'none', maxWidth: '300px'}
                },
                {
                    id: 'Card5',
                    theme: 'Mobile App',
                    ava: 'img/top-bar-ava.png',
                    altAva: 'top-bar-ava',
                    company: 'Symu.co',
                    price: 1500,
                    cardStyle: {border: 'none', maxWidth: '300px'}
                }
            ]
        },
        {
            id: 'lane3',
            lineHeadTitle: 'Design',
            style: {background:'transparent', maxWidth: '300px', height: '100%'},
            cards: [
                {
                    id: 'Card6',
                    theme: 'New Logo',
                    ava: 'img/Michelle-Stewart.jpg',
                    altAva: 'Michelle-Stewart-ava',
                    company: 'Symu.co',
                    price: 1500,
                    cardStyle: {border: 'none', maxWidth: '300px'}
                },
                {
                    id: 'Card7',
                    theme: 'New website',
                    ava: 'img/top-bar-ava.png',
                    altAva: 'top-bar-ava',
                    company: 'Symu.co',
                    price: 1500,
                    cardStyle: {border: 'none', maxWidth: '300px'}
                },
                {
                    id: 'Card8',
                    theme: 'New website',
                    ava: 'img/Michelle-Stewart.jpg',
                    altAva: 'Michelle-Stewart-ava',
                    company: 'Symu.co',
                    price: 1500,
                    cardStyle: {border: 'none', maxWidth: '300px'}
                },
                {
                    id: 'Card9',
                    theme: 'Dashboard',
                    ava: 'img/top-bar-ava.png',
                    altAva: 'Michelle-Stewart-ava',
                    company: 'Symu.co',
                    price: 1500,
                    cardStyle: {border: 'none', maxWidth: '300px'}
                }
            ]
        },
        {
            id: 'lane4',
            lineHeadTitle: 'Development',
            style: {background:'transparent', maxWidth: '300px', height: '100%'},
            cards: [
                {
                    id: 'Card10',
                    theme: 'Mobile App',
                    ava: 'img/Lyall-Roach.jpg',
                    altAva: 'Lyall-Roach-ava',
                    company: 'Symu.co',
                    price: 1500,
                    cardStyle: {border: 'none', maxWidth: '300px'}
                },
                {
                    id: 'Card11',
                    theme: 'New website',
                    ava: 'img/Michelle-Stewart.jpg',
                    altAva: 'Michelle-Stewart-ava',
                    company: 'Symu.co',
                    price: 1500,
                    cardStyle: {border: 'none', maxWidth: '300px'}
                },
                {
                    id: 'Card12',
                    theme: 'Dashboard',
                    ava: 'img/Lyall-Roach.jpg',
                    altAva: 'Lyall-Roach-ava',
                    company: 'Symu.co',
                    price: 1500,
                    cardStyle: {border: 'none', maxWidth: '300px'}
                }

            ]
        },
        {
            id: 'lane5',
            lineHeadTitle: 'Testing',
            style: {background:'transparent', maxWidth: '300px', height: '100%'},
            cards: [
                {
                    id: 'Card14',
                    theme: 'Landing page',
                    ava: 'img/Michelle-Stewart.jpg',
                    altAva: 'Michelle-Stewart-ava',
                    company: 'Symu.co',
                    price: 1500,
                    cardStyle: {border: 'none', maxWidth: '300px'}
                }
            ]
        },
        {
            id: 'lane6',
            lineHeadTitle: 'Completed',
            style: {background:'transparent', maxWidth: '300px', height: '100%'},
            cards: [
                {
                    id: 'Card18',
                    theme: 'Landing page',
                    ava: 'img/Michelle-Stewart.jpg',
                    altAva: 'Michelle-Stewart-ava',
                    company: 'Symu.co',
                    price: 1500,
                    cardStyle: {border: 'none', maxWidth: '300px'}
                },
                {
                    id: 'Card19',
                    theme: 'New website',
                    ava: 'img/Lyall-Roach.jpg',
                    altAva: 'Lyall-Roach-ava',
                    company: 'Symu.co',
                    price: 1500,
                    cardStyle: {border: 'none', maxWidth: '300px'}
                },
                {
                    id: 'Card20',
                    theme: 'Dashboard',
                    ava: 'img/Michelle-Stewart.jpg',
                    altAva: 'Michelle-Stewart-ava',
                    company: 'Symu.co',
                    price: 1500,
                    cardStyle: {border: 'none', maxWidth: '300px'}
                }
            ]
        },
    ]

};

// var numbers = {
//     la: [
//         {
//             card: [
//                 {
//                     price: 1
//                 }
//             ]
//         },
//         {
//             card: [
//                 {
//                     price: 2
//                 }
//             ]
//         },
//         {
//             card: [
//                 {
//                     price: 3
//                 }
//             ]
//         },
//         {
//             card: [
//                 {
//                     price: 4
//                 }
//             ]
//         }
//     ]
// };

// var numbers = [1,2,3,4];
// var totalAmount = 0;
//
// for (var x = 0; x < numbers.length; x++) {
//
//     totalAmount += numbers[x];
// }
// console.log(totalAmount); //10 (1+2+3+4)

// let totalAmount = 0;
// for (let i = 0; i < numbers.price; i++) {
//     totalAmount += numbers[i];
// }
// console.log(totalAmount); //10 (1+2+3+4)
//

let totalPrice = 0;
dataDnD.lanes.filter((e) => {
    totalPrice += e.cards[0].price;
});
console.log(totalPrice);

for (let key in dataDnD.lanes) {
    // этот код будет вызван для каждого свойства объекта
    // ..и выведет имя свойства и его значение
    console.log( "Ключ: " + key + " значение: " + dataDnD.lanes[key].cards[0].price );
}

for (let i = 0; i < dataDnD.lanes.length; i++) {
    console.log( dataDnD.lanes[i] );
}

const CustomCard = props => {
    return (
        <div className="trelloItem">
            <div className="trelloItemAva">
                <img src={props.ava} alt={props.altAva} />
            </div>
            <div className="trelloItemTextWrap">
                <div className="trelloItemText">
                    <p>{props.theme}</p>
                    <span>{props.company} </span>
                    <span>${props.price}</span>
                </div>
                <div>
                    <IconMenu
                        iconButtonElement={
                            <IconButton>
                                <FontIcon color={"#9ea3b4"} className="material-icons">more_vert</FontIcon>
                            </IconButton>
                        }>
                        <MenuItem primaryText="Move to Quened" />
                        <MenuItem primaryText="Move to Planning" />
                        <MenuItem primaryText="Move to Design" />
                        <MenuItem primaryText="Move to Development" />
                        <MenuItem primaryText="Move to Testing" />
                        <MenuItem primaryText="Move to Completed" />
                    </IconMenu>
                </div>
            </div>
        </div>

    )
};

class TrelloDnd extends React.Component {

    render() {
        return (
            <div>
                <Board data={dataDnD}
                       draggable
                       customCardLayout
                       customLaneHeader={
                           <ProjectsDndHeader />
                       }
                        style={{
                            background: 'transparent',
                            height: 'calc(100vh - 240px)',
                            // height: 'auto',
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}
                >
                    <CustomCard />
                </Board>
            </div>
        )
    }
}

export default TrelloDnd;