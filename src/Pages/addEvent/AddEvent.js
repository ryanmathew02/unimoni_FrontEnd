import React, { Fragment, useState } from 'react'
import { storage } from '../../components/Firebase';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';

const AddEvent = () => {
    const [eventName, seteventName] = useState("");
    const [coverImg, setcoverImg] = useState([]);
    const [artists, setArtists] = useState([]);

    const upload = async (file, i) => {
        const imageRef = ref(storage, `Events/${eventName}/artist/`)
        // const snapshot = await uploadBytes(imageRef, image)
        // const downloadURL = await getDownloadURL(snapshot.ref)
        // setArtists
    }
    return (
        <div >
            {/* slider_area */}
            <div className="slider_area">
                <div className="single_slider h-auto d-flex align-items-center slider_bg_1 overlay">
                    <div className="container d-flex justify-content-center">


                        <div style={{ paddingTop: 150, maxWidth: 500 }}>AddEvent
                            <label>Event Name</label>
                            <input type="text"></input>
                            <br></br>
                            <label>Event Cover Img</label>
                            <input type="file" multiple onChange={(e) => { setcoverImg(e.target.files) }}></input>
                            <br></br>
                            <label>Event Location</label>
                            <input type="text"></input>
                            <br></br>
                            {
                                artists.map((artist, i) => (
                                    <Fragment>
                                        <label>Event artist Name</label>
                                        <input type="text" onChange={(e) => setArtists(pre => {
                                            pre[i].name = e.target.value;
                                            return pre;
                                        })} />
                                        <br></br>
                                        {artist.name && (
                                            <Fragment>
                                                <label>Event Artist Img</label>
                                                <input type="file" multiple onChange={(e) => { upload(e.target.files[0], i) }} />
                                            </Fragment>
                                        )}
                                        <br></br>
                                    </Fragment>
                                ))
                            }
                            <button onClick={() => setArtists(pre => ([
                                ...pre, {
                                    name: "",
                                    img: ""
                                }
                            ]))}>Add artust</button>
                            <button onClick={() => setArtists(pre => {
                                return pre.splice(-1, 1);
                            })}>Remove artust</button>
                            <br></br>
                            <label>Event date</label>
                            <input type="date"></input>
                            <br></br>
                            <label>Event starttime</label>
                            <input type="time"></input>
                            <br></br>
                            <label>Event endtime</label>
                            <input type="time"></input>
                            <br></br>
                            <label>Event Capacity</label>
                            <input type="number"></input>
                            <br></br>
                            <label>Event Active</label>
                            <input type="text"></input>
                            <br></br>
                            <button></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddEvent