import React from 'react';
import { useForm } from 'react-hook-form';
import StringInput from './StringInput';
import css from './styles.module.css';

const TokenAddress = () => {
  const { register, handleSubmit } = useForm();

  const onError = (errors) => {
    console.log({ errors });
  };
  return (
    <form
      className="w-full max-w-xl h-full border rounded-xl border-gray pt-8 px-10 pb-12 mt-24"
      onSubmit={handleSubmit(onError)}
    >
      <div className="text-lg text-dark-gray pb-3.5"> Token Address </div>
      <StringInput
        title=""
        placeholder="0x78436585946905070..."
        register={register('tiker', { required: true })}
      />
      <div className="flex flex-col md:flex-row items-center pt-4">
        <div className="flex flex-col items-center border rounded-xl border-gray mb-8 md:mb-0 md:mr-8 w-36 h-36">
          <div className="text-5xl font-bold py-5"> 10 </div>
          <div className="text-lg"> Balance </div>
        </div>
        <div className="flex flex-col items-center border rounded-xl border-gray mb-8 md:mb-0 md:mr-8 w-36 h-36">
          <div className="text-5xl font-bold py-5"> 0 </div>
          <div className="text-lg"> Locked </div>
        </div>
        <div className="flex flex-col items-center border rounded-xl border-gray w-36 h-36">
          <div className="text-5xl font-bold py-5"> 1000 </div>
          <div className="text-lg"> Avalaible </div>
          <label className={css.switch}>
            <input
              className={css.switch_input}
              type="checkbox"
              defaultChecked
            />
            <span className={`${css.slider} ${css.round}`} />
          </label>
        </div>
      </div>
    </form>
  );
};

export default TokenAddress;
