import React from 'react';

const CardTest = () => {
  const forTestData = [
    {
      date: '21.06.2022',
      typeTest: 'Ferritin',
      status: 'Pending',
      testResult: null,
    },
    {
      date: '21.04.2022',
      typeTest: 'Ferritin',
      status: 'Finished',
      testResult: 110,
    },
    {
      date: '21.02.2022',
      typeTest: 'Ferritin',
      status: 'Finished',
      testResult: 99,
    },
  ];
  return forTestData.map((paramTest) => {
    return (
      <div className="border mx-3 mb-3 p-5" key={paramTest.date}>
        <div className="flex justify-between">
          <div>{paramTest.date}</div>
          <div>{paramTest.typeTest}</div>
        </div>
        <div className="text-center pt-3 uppercase font-bold">
          {paramTest.status === 'Pending'
            ? paramTest.status
            : paramTest.testResult}
        </div>
      </div>
    );
  });
};

export default CardTest;
