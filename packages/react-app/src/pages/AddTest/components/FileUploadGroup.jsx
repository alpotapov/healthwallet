import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { useDropzone } from 'react-dropzone';
import javascriptBarcodeReader from 'javascript-barcode-reader';

const FileUploadGroup = ({ subtext, onSuccessfulUpload }) => {
  const [selectedImage, setSelectedImage] = useState();

  // const getDataBarcode = () => {
  //   const barcode = new Image();
  //   barcode.crossOrigin = 'Anonymous';
  //   barcode.src = !selectedImage ? '' : selectedImage.path;
  //   barcode.onload = javascriptBarcodeReader({
  //     image: barcode,
  //     options: 'code-93',
  //   })
  //     .then((result) => {
  //       onSuccessfulUpload(result);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  //   console.log(barcode);
  // };

  const getDataBarcode = () => {
    javascriptBarcodeReader({
      image: !selectedImage ? '' : selectedImage.path,
      barcode: 'code-128',
    })
      .then((result) => {
        console.log(result);
        onSuccessfulUpload(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onFileUpload = () => {
    if (!selectedImage) return;
    getDataBarcode();
  };

  const onDrop = useCallback((acceptedFiles) => {
    setSelectedImage(
      Object.assign(acceptedFiles[0], {
        preview: URL.createObjectURL(acceptedFiles[0]),
      })
    );
  }, []);

  const selectedImageDiv = selectedImage && (
    <div>
      <img src={selectedImage.preview} style={{ width: '200px' }} alt="" />
    </div>
  );

  const { getRootProps, getInputProps, isDragReject } = useDropzone({
    onDrop,
    multiple: false,
    accept: 'image/png',
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
                  <div>
                    <p className="text-2xl uppercase font-bold text-lilac text-center">
                      click to choose barcode
                    </p>
                    <p className="text-xs text-white mt-2">{subtext}</p>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="h-56 w-full bg-white rounded-3xl cursor-pointer focus:outline-none">
              <div className="flex flex-col items-center justify-center w-full h-3/5">
                <div className="flex flex-row justify-center">
                  {selectedImageDiv}
                </div>
              </div>
              <div className="flex justify-center px-6">
                <button
                  type="button"
                  onClick={onFileUpload}
                  className="bg-lilac-blond w-full btn rounded-3xl border border-white h-14"
                >
                  <span className="text-sm text-lilac-dark font-bold">
                    Upload
                  </span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

FileUploadGroup.propTypes = {
  subtext: PropTypes.string.isRequired,
  onSuccessfulUpload: PropTypes.func.isRequired,
};

export default FileUploadGroup;
