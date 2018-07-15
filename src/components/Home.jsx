import React from 'react';
import { Row, Col, ControlLabel, Grid, Panel, FormControl, FormGroup, Button, Table } from 'react-bootstrap';

class Home extends React.Component {

    constructor(props, context) {
        super(props, context)
    }

    render() {
        return (

            <div style={{ padding: '0 200px' }}>





















                <Grid >

                    <FormGroup>
                        <Col lg={12}>
                            <Row>
                                <div className="col-lg-6 col-md-12">
                                    <a style={{ textDecoration: 'none' }}>OYODO</a>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <ul style={{ listStyleType: 'none', display: 'inline' }}>
                                        <li style={{ display: 'inline', padding: '25px' }}>Home</li>
                                        <li style={{ display: 'inline', padding: '25px' }}>About</li>
                                        <li style={{ display: 'inline', padding: '25px' }}>Contact</li>
                                        <li style={{ display: 'inline', padding: '25px' }}>Address</li>
                                        <li style={{ display: 'inline', padding: '25px' }}>Career</li>
                                    </ul>
                                </div>
                            </Row>
                        </Col>
                    </FormGroup>
                </Grid>

                <div style={{ background: 'grey', height: '100px', clear: 'both', paddingTop: '25px' }}>
                    <p>hdjgsajdhsagjdh djsahgdjahsdgas dasjhgdasjhdgas dsajhgdsajhdsa dsajhgdasjdas dasjhdgsajhdas dsajhdgasjdhsadsa djsahg</p>
                </div>

                <div style={{ paddingTop: '25px' }}>

                    <div className="col-lg-8 col-md-6">
                        <div>
                            <h1>Heading of the page inside the grey colour</h1>
                            <p style={{ paddingTop: '25px', fontSize: '150%', fontFamily: 'courier' }}>da kjdhsakjds dkasjhdaskdas kdjsahdaskd sdkasjdhsadsa kdjashdaskdsa dsagdasdsa
                            diuasdasiuydas daisuydasiu dasiudasy dasdisaudysa diasuydasi </p>
                            <p>hjgdas djahsgdasjhd asjdhgasjhdsagdjhasg dasjhgdasjhdgas jdghasjdhsagd jashgdasjdhgasjdhgsajdhsagdjashdgsajdhasg djashgdajshdgasjhdgasjdhasgjdhsagdjashgdjsahgdasjhgdsajhdgas jdhgas jdahsgd asjhdgasj dhgsajdg asjhjhdsagdj asjdaghsjdhasg djashgdasjhd asjhgdsa jdhgas djsahgd sajhdgas jdahsgdjasg jdhgsaj</p>
                            <p>hjgdas djahsgdasjhd asjdhgasjhdsagdjhasg dasjhgdasjhdgas jdghasjdhsagd jashgdasjdhgasjdhgsajdhsagdjashdgsajdhasg djashgdajshdgasjhdgasjdhasgjdhsagdjashgdjsahgdasjhgdsajhdgas jdhgas jdahsgd asjhdgasj dhgsajdg asjhjhdsagdj asjdaghsjdhasg djashgdasjhd asjhgdsa jdhgas djsahgd sajhdgas jdahsgdjasg jdhgsaj DSA DHSAHD ASJHDSA DJASH d sajhdas jdhsa djashd asahdjas djhsa dasjhd sajhds ajhdsa jdhsad jsahdasjdhsajhdsajdhsahjdasgjhhdsag hjgdas djahsgdasjhd asjdhgasjhdsagdjhasg dasjhgdasjhdgas jdghasjdhsagd jashgdasjdhgasjdhgsajdhsagdjashdgsajdhasg djashgdajshdgasjhdgasjdhasgjdhsagdjashgdjsahgdasjhgdsajhdgas jdhgas jdahsgd asjhdgasj dhgsajdg asjhjhdsagdj asjdaghsjdhasg djashgdasjhd asjhgdsa jdhgas djsahgd sajhdgas jdahsgdjasg jdhgsaj</p>
                        </div>

                        <div>
                            <hr style={{ width: '25%', display: 'inline-block' }} /><h1>More In The Series</h1><hr style={{ width: '25%' }} />
                        </div>
                        <div>
                            <img src="https://i.pinimg.com/originals/20/2d/9a/202d9aae19491683af52d7c89d5fb611.jpg" className='pull-left' style={{ maxWidth: '20%', float: 'left' }} />
                            <h1 style={{ color: 'lightgreen', padding: '10px' }}>This is the image number 1</h1>
                            <p>dsanbdsa dsajkdsha dsakjdsa kdahskd sadkjsadksajdhas kdjkd askdjsah dksajh dkasjasjdhaks jdhs jdhask dsahsa hdkjsah dkasjhd ksajh adksj h</p>
                        </div>

                        <div>
                            <img src="https://i.pinimg.com/originals/20/2d/9a/202d9aae19491683af52d7c89d5fb611.jpg" className='pull-left' style={{ maxWidth: '20%', float: 'left' }} />
                            <h1 style={{ color: 'lightgreen', padding: '10px' }}>This is the image number 2</h1>
                            <p>dsanbdsa dsajkdsha dsakjdsa kdahskd sadkjsadksajdhas kdjkd askdjsah dksajh dkasjasjdhaks jdhs jdhask dsahsa hdkjsah dkasjhd ksajh adksj h</p>
                        </div>

                        <div>
                            <img src="https://i.pinimg.com/originals/20/2d/9a/202d9aae19491683af52d7c89d5fb611.jpg" className='pull-left' style={{ maxWidth: '20%', float: 'left' }} />
                            <h1 style={{ color: 'lightgreen', padding: '10px' }}>This is the image number 3</h1>
                            <p>dsanbdsa dsajkdsha dsakjdsa kdahskd sadkjsadksajdhas kdjkd askdjsah dksajh dkasjasjdhaks jdhs jdhask dsahsa hdkjsah dkasjhd ksajh adksj h</p>
                        </div>

                    </div>

                    <div className="col-lg-4 col-md-6" style={{ textAlign: 'center', border: '2px solid grey' }}>

                        <div style={{ border: '2px solid grey', paddingBottom: '25px' }}>
                            <a>SUBMENU</a>
                            <ul style={{ listStyleType: 'none', color: 'green', margin: '0px', padding: '0px', paddingBottom: '10px' }}>
                                <li>Home</li>
                                <li style={{ color: 'white', background: 'green' }}>Examples</li>
                                <li>Contact</li>
                                <li>About</li>
                            </ul>
                        </div>

                        <div style={{ marginTop: '25px' }}>
                            <div >
                                <img src="https://i.pinimg.com/originals/20/2d/9a/202d9aae19491683af52d7c89d5fb611.jpg" style={{ maxWidth: '100%' }} />
                            </div>
                            <div style={{ background: 'lightgrey' }}>
                                <strong style={{ paddingRight: '10px' }}>Name</strong>
                                <ControlLabel>Nabhdeep Singh</ControlLabel><br />
                                <strong style={{ paddingRight: '10px' }}>Email</strong>
                                <ControlLabel>abc@gmail.com</ControlLabel><br />
                                <strong style={{ paddingRight: '10px' }}>Phone</strong>
                                <ControlLabel>8010544716</ControlLabel><br />
                            </div>

                        </div>

                        <div style={{ background: 'grey' }}>
                            <strong style={{ textAlign: 'center' }}>Send me message</strong>
                            <div style={{ padding: '5px' }}>
                                Subject<br />
                                <input style={{ width: '100%' }} type="text" name="Subject" />
                            </div>
                            <div style={{ padding: '5px' }}>
                                Subject <br />
                                <input style={{ width: '100%' }} type="text" name="Subject" />
                            </div>
                            <button className="btn btn-success" style={{ margin: '5px', width: '50%', borderRadius: '10px' }}>Send</button>
                        </div>
                        <div style={{ background: 'lightgrey', border: '2px solid lightgrey' }}>
                            <strong style={{ textAlign: 'center' }}>Or meet me at the office</strong>
                            <img src="https://staticmapmaker.com/img/google.png" style={{ maxWidth: '100%', maxHeight: '10%', height: '200px', paddingTop: '20px', paddingBottom: '20px' }} />
                            <div style={{ textAlign: 'left', paddingLeft: '15px' }}>One Midtown <br />
                                11 Hoi Shong Rd <br />
                                Tuesen wang <br />
                            </div>
                        </div>

                    </div>
                </div>


                <div style={{ clear: 'both', marginTop: '25%' }}>
                    <div style={{ position: 'relative', padding: '10px' }}>
                        <hr />
                        <h1 style={{ position: 'absolute', top: '0px', left: '35%', background: 'white' }}>Related Articles</h1>
                    </div>
                    <div>
                        <div style={{ border: '2px solid grey', width: "31%", maxWidth: "31%", float: 'left', marginRight: '30px' }}>
                            <img src="https://i.pinimg.com/originals/20/2d/9a/202d9aae19491683af52d7c89d5fb611.jpg" style={{ maxWidth: "100%" }} />
                            <h1 style={{ color: 'green', width: 'auto' }}>Heading 1 for the image 1</h1>
                            <p>chec hcs cas csacashc asc askcsabc askhhc askcjas cksackjasc askjcas kcjashc askjhc askcjs akjchas </p>
                        </div>

                        <div style={{ border: '2px solid grey', width: "31%", maxWidth: "31%", float: 'left', marginRight: '30px' }}>
                            <img src="https://i.pinimg.com/originals/20/2d/9a/202d9aae19491683af52d7c89d5fb611.jpg" style={{ maxWidth: "100%" }} />
                            <h1 style={{ color: 'green', width: 'auto' }}>Heading 1 for the image 1</h1>
                            <p>chec hcs cas csacashc asc askcsabc askhhc askcjas cksackjasc askjcas kcjashc askjhc askcjs akjchas </p>
                        </div>

                        <div style={{ border: '2px solid grey', width: "31%", maxWidth: "31%", float: 'left' }}>
                            <img src="https://i.pinimg.com/originals/20/2d/9a/202d9aae19491683af52d7c89d5fb611.jpg" style={{ maxWidth: "100%" }} />
                            <h1 style={{ color: 'green', width: 'auto' }}>Heading 1 for the image 1</h1>
                            <p>chec hcs cas csacashc asc askcsabc askhhc askcjas cksackjasc askjcas kcjashc askjhc askcjs akjchas </p>
                        </div>

                        <div style={{ border: '2px solid grey', width: "31%", maxWidth: "31%", float: 'left', marginRight: '35px', marginTop: '35px' }}>
                            <img src="https://i.pinimg.com/originals/20/2d/9a/202d9aae19491683af52d7c89d5fb611.jpg" style={{ maxWidth: "100%" }} />
                            <h1 style={{ color: 'green', width: 'auto' }}>Heading 1 for the image 1</h1>
                            <p>chec hcs cas csacashc asc askcsabc askhhc askcjas cksackjasc askjcas kcjashc askjhc askcjs akjchas </p>
                        </div>

                    </div>
                </div>

                <div>


                </div>

            </div>
        )
    }
}

export default Home;