import * as React from "react";

const BasicInfo: React.FC<IBasicInfoProps> = () => {
  return (
    <form className="my-3 row col-md-8 col-sm-10 p-4">
      <div className="form-group col-md-10 mx-auto">
        <label className="h5">Name</label>
        <input
          type="text"
          className="form-control"
          id="candidateName"
          placeholder="John Doe"
        />
      </div>
      <div className="form-group col-md-10 mx-auto">
        <label className="h5">Number</label>
        <input
          type="number"
          className="form-control"
          id="candidateNumber"
          placeholder="(111) 222-3333"
        />
      </div>
      <div className="form-group col-md-10 mx-auto">
        <label className="h5">Email address</label>
        <input
          type="email"
          className="form-control"
          id="candidateEmail"
          placeholder="name@example.com"
        />
      </div>
      <div className="form-group col-md-10 mx-auto">
        <label className="h5">Select Course</label>
        <select className="form-control" id="exampleFormControlSelect1">
          <option>August 17th Full-time</option>
          <option>September 22nd Part-time (M/W/F)</option>
          <option>September 23rd Part-time (T/Th/F)</option>
          <option>October 19th Full-time</option>
        </select>
      </div>

      <div className="form-group col-md-6 mx-auto mt-5">
        <button className="btn btn-lg btn-primary d-block w-100">Enroll</button>
      </div>
    </form>
  );
};

interface IBasicInfoProps {}

export default BasicInfo;
