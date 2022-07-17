import React from 'react';
import PropTypes from 'prop-types';
import { useDropzone } from 'react-dropzone';
import { Html5Qrcode } from 'html5-qrcode';

const BarcodeScanner = ({ onScanCompleted }) => {
  const [selectedImage, setSelectedImage] = React.useState();

  const getDataBarcode = async (receivedImage) => {
    const reader = new Html5Qrcode('reader');
    const result = await reader.scanFile(receivedImage, true);
    console.log({ scanFile: result });
    onScanCompleted(result);
  };

  const onDrop = (acceptedFiles) => {
    const receivedImage = Object.assign(acceptedFiles[0], {
      preview: URL.createObjectURL(acceptedFiles[0]),
    });
    setSelectedImage(receivedImage);
    getDataBarcode(receivedImage);
  };

  const { getRootProps, getInputProps, isDragReject } = useDropzone({
    onDrop,
    multiple: false,
  });

  return (
    <div className="flex flex-col justify-center w-full">
      <div>
        <div>
          {!selectedImage ? (
            <div
              /* eslint-disable-next-line react/jsx-props-no-spreading */
              {...getRootProps()}
              className="h-56 w-full bg-white rounded-3xl cursor-pointer focus:outline-none"
            >
              {/* eslint-disable-next-line react/jsx-props-no-spreading */}
              <input type="file" {...getInputProps()} className="h-56 w-full" />

              <div className="flex flex-col items-center justify-center h-full">
                {isDragReject ? (
                  <p>Sorry, this dApp only supports .png files</p>
                ) : (
                  <div className="text-2xl uppercase font-bold text-lilac text-center mt-12">
                    upload barcode photo from files or use camera to scan the
                    barcode
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div id="reader" />
          )}
        </div>
      </div>
    </div>
  );
};

BarcodeScanner.propTypes = {
  onScanCompleted: PropTypes.func.isRequired,
};

export default BarcodeScanner;
