import React, { Component } from 'react'

export default class index extends Component {

    glassArr = [
        {
            "id": 1,
            "price": 30,
            "name": "GUCCI G8850U",
            "url": "./glassesImage/v1.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 2,
            "price": 50,
            "name": "GUCCI G8759H",
            "url": "./glassesImage/v2.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 3,
            "price": 30,
            "name": "DIOR D6700HQ",
            "url": "./glassesImage/v3.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 4,
            "price": 70,
            "name": "DIOR D6005U",
            "url": "./glassesImage/v4.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 5,
            "price": 40,
            "name": "PRADA P8750",
            "url": "./glassesImage/v5.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 6,
            "price": 60,
            "name": "PRADA P9700",
            "url": "./glassesImage/v6.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 7,
            "price": 80,
            "name": "FENDI F8750",
            "url": "./glassesImage/v7.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 8,
            "price": 100,
            "name": "FENDI F8500",
            "url": "./glassesImage/v8.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 9,
            "price": 60,
            "name": "FENDI F4300",
            "url": "./glassesImage/v9.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        }
    ]

    state = {
        "id": 1,
        "price": 30,
        "name": "GUCCI G8850U",
        "url": "./glassesImage/v1.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    }

    handleChangeGlass = (id) => {
        for (let index = 0; index < this.glassArr.length; index++) {
            if (this.glassArr[index].id === Number(id)) {
                this.setState({
                    "id": this.glassArr[index].id,
                    "price": this.glassArr[index].price,
                    "name": this.glassArr[index].name,
                    "url": this.glassArr[index].url,
                    "desc": this.glassArr[index].desc
                })
            }
        }
    }

    render() {
        return (
            <div style={{ backgroundImage: `url("./glassesImage/background.jpg")`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                <div style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <h1 className="text-white p-5 text-center">TRY GLASSES APP ONLINE</h1>
                </div>
                <div className=" container">
                    <div className="p-3 row">
                        <div className="col-6" style={{ position: 'relative' }}>
                            <img src='./glassesImage/model.jpg' width="400" />
                            <div className="" style={{ position: 'absolute', top: '0', paddingLeft: '100px', paddingTop: '125px' }}>
                                <img src={this.state.url} width="200" />
                            </div>
                            <div className="content p-3" style={{ backgroundColor: 'rgba(255, 204, 128,0.9)', width:'400px', position: 'relative', bottom: '138px' }}>
                                <h3 className="text-primary">{this.state.name}</h3>
                                <p className="text-white">{this.state.desc}</p>
                            </div>
                        </div>
                        <div className="col-6">
                            <img src='./glassesImage/model.jpg' width="400" />
                        </div>
                    </div>
                </div>
                <div className="container pb-5">
                    <div className="row p-3 bg-white border border-darks">
                        <div className="col-2" onClick={() => {
                            this.handleChangeGlass('1');
                        }}>
                            <img src="./glassesImage/v1.png" width="130" className="border border-dark p-2" />
                        </div>
                        <div className="col-2" onClick={() => {
                            this.handleChangeGlass('2');
                        }}>
                            <img src="./glassesImage/v2.png" width="130" className="border border-dark p-2" />
                        </div>
                        <div className="col-2" onClick={() => {
                            this.handleChangeGlass('3');
                        }}>
                            <img src="./glassesImage/v3.png" width="130" className="border border-dark p-2" />
                        </div>
                        <div className="col-2" onClick={() => {
                            this.handleChangeGlass('4');
                        }}>
                            <img src="./glassesImage/v4.png" width="130" className="border border-dark p-2" />
                        </div>
                        <div className="col-2" onClick={() => {
                            this.handleChangeGlass('5');
                        }}>
                            <img src="./glassesImage/v5.png" width="130" className="border border-dark p-2" />
                        </div>
                        <div className="col-2" onClick={() => {
                            this.handleChangeGlass('6');
                        }}>
                            <img src="./glassesImage/v6.png" width="130" className="border border-dark p-2" />
                        </div>
                        <div className="col-2" onClick={() => {
                            this.handleChangeGlass('7');
                        }}>
                            <img src="./glassesImage/v7.png" width="130" className="border border-dark p-2" />
                        </div>
                        <div className="col-2" onClick={() => {
                            this.handleChangeGlass('8');
                        }}>
                            <img src="./glassesImage/v8.png" width="130" className="border border-dark p-2" />
                        </div>
                        <div className="col-2" onClick={() => {
                            this.handleChangeGlass('9');
                        }}>
                            <img src="./glassesImage/v9.png" width="130" className="border border-dark p-2" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
