// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

contract ResultRegistry {
    mapping(string => string) uidToResultCid;

    function publishMeasurementCid(string memory _testUid, string memory _testResultCid) public {
        require(bytes(uidToResultCid[_testUid]).length == 0, "ResultRegistry: Result already exists");

        uidToResultCid[_testUid] = _testResultCid;
    }

    function getMeasurement(string memory _testUid) public view returns (string memory measurement) {
        measurement = uidToResultCid[_testUid];
    }

    function getMeasurements(string[] memory _testUids) public view returns (string[] memory measurements) {
        measurements = new string[](_testUids.length);
        for (uint256 i = 0; i < _testUids.length; i++) {
            measurements[i] = getMeasurement(_testUids[i]);
        }
    }
}
