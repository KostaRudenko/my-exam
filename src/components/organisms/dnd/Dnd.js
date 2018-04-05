import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Container from './Container';

class DragNDrop extends Component {

    render() {
        const style = {
            display: "flex",
            justifyContent: "space-around",
            paddingTop: "20px"
        };

        const listOne = [
            {
                id: 1,
                text: "Item 1"
            },
            {
                id: 2,
                text: "Item 2"
            },
            {
                id: 3,
                text: "Item 3"
            }
        ];

        const listTwo = [
            {
                id: 4,
                text: "Item 4"
            },
            {
                id: 5,
                text: "Item 5"
            },
            {
                id: 6,
                text: "Item 6"
            }
        ];

        const listThree = [
            {
                id: 7,
                text: "Item 7"
            },
            {
                id: 8,
                text: "Item 8"
            },
            {
                id: 9,
                text: "Item 9"
            }
        ];

        const listFour = [
            {
                id: 10,
                text: "Item 10"
            },
            {
                id: 11,
                text: "Item 11"
            },
            {
                id: 12,
                text: "Item 12"
            }
        ];
        const listFive = [
            {
                id: 13,
                text: "Item 13"
            },
            {
                id: 14,
                text: "Item 14"
            },
            {
                id: 15,
                text: "Item 15"
            }
        ];
        const listSix = [
            {
                id: 16,
                text: "Item 16"
            },
            {
                id: 17,
                text: "Item 17"
            },
            {
                id: 18,
                text: "Item 18"
            }
        ];
        const listSeven = [
            {
                id: 19,
                text: "Item 19"
            },
            {
                id: 20,
                text: "Item 20"
            },
            {
                id: 21,
                text: "Item 21"
            }
        ];
        const listEight = [
            {
                id: 22,
                text: "Item 22"
            },
            {
                id: 23,
                text: "Item 23"
            },
            {
                id: 24,
                text: "Item 24"
            }
        ];
        const listNine = [
            {
                id: 25,
                text: "Item 25"
            },
            {
                id: 26,
                text: "Item 26"
            },
            {
                id: 27,
                text: "Item 27"
            }
        ];
        const listTen = [
            {
                id: 28,
                text: "Item 28"
            },
            {
                id: 29,
                text: "Item 29"
            },
            {
                id: 30,
                text: "Item 30"
            }
        ];
        const listEleven = [
            {
                id: 31,
                text: "Item 31"
            },
            {
                id: 32,
                text: "Item 32"
            },
            {
                id: 33,
                text: "Item 33"
            }
        ];

        return (
            <div style={{...style}}>
                <Container id={1} list={listOne} />
                <Container id={2} list={listTwo} />
                <Container id={3} list={listThree} />
                <Container id={4} list={listFour} />
                <Container id={5} list={listFive} />
                <Container id={6} list={listSix} />
                <Container id={7} list={listSeven} />
                <Container id={8} list={listEight} />
                <Container id={9} list={listNine} />
                <Container id={10} list={listTen} />
                <Container id={10} list={listEleven} />
            </div>
        );
    }
}

export default DragDropContext(HTML5Backend)(DragNDrop);