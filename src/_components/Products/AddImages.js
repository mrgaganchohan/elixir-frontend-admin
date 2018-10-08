import React, { Component } from 'react';
import ImageUploader from 'react-images-upload';

class AddImages extends Component {

	constructor(props) {
		super(props);
		 this.state = { pictures: [] };
		 this.onDrop = this.onDrop.bind(this);
	}

	onDrop(pictureFiles, pictureDataURLs) {
		this.setState({
            pictures: this.state.pictures.concat(pictureFiles),
        });
	}

    render() {
        return (
            <ImageUploader
                    className="image-uploader"
                	withIcon={true}
                	buttonText='Choose images'
                    withPreview={true}
                	onChange={this.onDrop}
                	imgExtension={['.jpg', '.gif', '.png', '.gif']}
                	maxFileSize={5242880}
            />
        );
    }
}

export default AddImages;