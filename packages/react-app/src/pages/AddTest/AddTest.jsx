import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import PageBase from '../PageBase/PageBase';
import FileUploadGroup from './components/FileUploadGroup';
import StringInput from './components/InputGroup';

import AddImage from './assets/AddImage.png';
import IconWhite from './assets/IconWhite.svg';
import Plus from './assets/Plus.svg';

const AddTest = () => {
  const { register, setValue } = useForm();

  return (
    <PageBase>
      <div className="relative z-10 flex pt-6 -mb-16">
        <img className="w-52" src={AddImage} alt="addImage" />
        <div className="font-bold text-3xl w-28 mt-8">
          <span className="text-lilac">Add</span> Test
        </div>
      </div>
      <div className="bg-lilac rounded-t-3xl pt-8 px-5">
        <FileUploadGroup
          subtext="File type supported.png"
          onSuccessfulUpload={(value) => setValue('barcodeInfo', value)}
        />
        <StringInput
          placeholder="Barcode Info"
          register={register('barcodeInfo', { required: true })}
          disabled
        />
        <div className="py-14">
          <div className="flex items-center pb-10">
            <div className="w-32 text-center text-lilac-dark text-sm font-medium">
              Test type:
            </div>
            <div className="flex items-center">
              <img src={IconWhite} alt="iconWhite" />
              <div className="text-xl font-bold pl-2.5 text-white">
                Ferritin
              </div>
            </div>
          </div>
          <div className="flex items-center pb-10">
            <div className="w-32 text-center text-lilac-dark text-sm font-medium">
              Test Date:
            </div>
            <div className="text-xl font-medium text-white">29.10.2022</div>
          </div>
          <div className="flex items-center pb-10">
            <div className="w-32 text-center text-lilac-dark text-sm font-medium">
              Test UID:
            </div>
            <div className="text-xl font-medium text-white">21345278saf</div>
          </div>
        </div>
        <div className="pb-12">
          <button
            type="button"
            onClick={() => {}}
            className="flex items-center w-full border border-white bg-lilac-blond rounded-3xl h-14 pl-5"
          >
            <img src={Plus} alt="plus" />
            <div className="ml-14 text-sm font-bold text-lilac-dark">
              Add to HealthWallet
            </div>
          </button>
          <div className="flex items-center justify-center w-full border border-white bg-lilac-blond h-14 px-5 rounded-3xl mt-6">
            <Link to="/" className="flex">
              <div className="text-sm text-lilac-dark font-bold">
                Back to Medical Records
              </div>
            </Link>
          </div>
        </div>
      </div>
    </PageBase>
  );
};

export default AddTest;
