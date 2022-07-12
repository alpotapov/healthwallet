import React from 'react';
import { useForm } from 'react-hook-form';
import StringInput from './StringInput';
import PrimaryButton from '../../../components/PrimaryButton';
import Delete from '../assets/DelIcon.svg';
import Close from '../assets/CloseOut.png';
import Open from '../assets/Open.png';
import AddIcon from '../assets/AddIcon.svg';

const LockForm = () => {
  const { register, handleSubmit } = useForm();

  const onError = (errors) => {
    console.log({ errors });
  };
  return (
    <form
      className="w-full max-w-xl h-full border rounded-xl border-gray pt-8 px-10 pb-12"
      onSubmit={handleSubmit(onError)}
    >
      <div className="pb-6">
        <div className="flex">
          <div className="w-full">
            <StringInput
              title=""
              placeholder="0x78436585946905..."
              register={register('tiker', { required: true })}
            />
          </div>

          <div className="w-32 ml-2.5 mr-5">
            <StringInput
              title=""
              placeholder="value"
              register={register('value', { required: true })}
            />
          </div>
          <button type="button">
            <img src={Delete} alt="close" className="w-5" />
          </button>
        </div>
        <div className="flex items-center pt-3.5">
          <div className="flex items-center border rounded-xl border-gray py-2 pl-4 pr-6 mr-6">
            <img src={Close} alt="close" />
            <div className="text-sm font-normal pl-5"> 20.12.35 </div>
          </div>
          <div className="relative">
            <div className="text-xs text-dark-gray absolute -top-3">timer</div>
            <div className="flex text-xl font-bold">
              12340h 25m <div className="text-lettuce pl-1">12sec</div>
            </div>
          </div>
        </div>
      </div>
      <div className="pb-6">
        <div className="flex">
          <div className="w-full">
            <StringInput
              title=""
              placeholder="0x78436585946905..."
              register={register('tiker', { required: true })}
            />
          </div>

          <div className="w-32 ml-2.5 mr-5">
            <StringInput
              title=""
              placeholder="value"
              register={register('value', { required: true })}
            />
          </div>
          <button type="button">
            <img src={Delete} alt="close" className="w-5" />
          </button>
        </div>
        <div className="flex items-center pt-3.5">
          <div className="flex items-center border rounded-xl border-gray py-2 pl-4 pr-6 mr-6">
            <img src={Open} alt="close" />
            <div className="text-sm font-normal pl-5 text-dark-gray">
              __.__.__
            </div>
          </div>
          <div className="relative">
            <div className="text-xs text-dark-gray absolute -top-3">timer</div>
            <div className="flex text-xl text-dark-gray">
              00h 00m <div className="pl-1">00sec</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center pb-6">
        <div className="w-full pr-4">
          <StringInput
            title=""
            placeholder="newAddress"
            register={register('newAddress', { required: true })}
          />
        </div>
        <button type="button">
          <img src={AddIcon} alt="AddIcon" className="w-6" />
        </button>
      </div>
      <PrimaryButton
        onClick={() => {}}
        variation="violet"
        className="w-full"
        type="submit"
      >
        <span>LOCK</span>
      </PrimaryButton>
    </form>
  );
};

export default LockForm;
