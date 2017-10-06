import React, { Component } from 'react';
import ImagesUploader from 'react-images-uploader';
import 'react-images-uploader/styles.css';
import "./uploader.css"
 
export default class MyUploader extends Component {
    render() {
        return (
            <ImagesUploader
                url="http://localhost:3000/notmultiple"
                optimisticPreviews
                multiple={false}
                onLoadEnd={(err) => {
                    if (err) {
                        console.error(err);
                    }
                }}
                label ="Upload a Picture"
                />
        );
    }
}