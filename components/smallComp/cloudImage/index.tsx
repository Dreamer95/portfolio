// Libraries
import React, {useMemo} from 'react';
import {AdvancedImage} from "@cloudinary/react";
import {Cloudinary} from "@cloudinary/url-gen";

// Import any actions required for transformations.
import {fill, fit} from '@cloudinary/url-gen/actions/resize';

// Create a Cloudinary instance and set your cloud name.
const cld = new Cloudinary({
    cloud: {
        cloudName: 'dhpan0ekv'
    }
});


interface Props {
    publicId: string,
    width?: number,
    height?: number,
    className?: string
}

const CloudImage: React.FC<Props> = (props) => {
    const {publicId, width , height , className= ''} = props;

    // Instantiate a CloudinaryImage object for the image with the public ID, 'docs/models'.
    const myImage = useMemo(() => {
        const temp = cld.image(publicId)
        if(width && height) {
            temp.resize(fill().width(width).height(height));
        }

        return temp
    },[publicId, width, height]);


    return (
        <>
            <AdvancedImage className={className} cldImg={myImage} />
        </>
    );
};

export default CloudImage
