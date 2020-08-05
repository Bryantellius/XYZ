import * as React from "react";

const BasicInfo: React.FC<IBasicInfoProps> = (props: any) => {
  const changePage = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    props.updateBar(100);
    props.methods.setProgress(100);
  };

  return (
    <form className="my-3 row col-md-8 col-sm-10 p-4 needs-validation">
      <div className="form-group col-md-10 mx-auto">
        <label className="h5">Name</label>
        <input
          type="text"
          className="form-control"
          id="candidateName"
          placeholder="John Doe"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            props.methods.setName(e.target.value)
          }
          required
        />
      </div>
      <div className="form-group col-md-10 mx-auto">
        <label className="h5">Number</label>
        <input
          type="number"
          className="form-control"
          id="candidateNumber"
          placeholder="(111) 222-3333"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            props.methods.setNumber(e.target.value)
          }
          required
        />
      </div>
      <div className="form-group col-md-10 mx-auto">
        <label className="h5">Email address</label>
        <input
          type="email"
          className="form-control"
          id="candidateEmail"
          placeholder="name@example.com"
          value={props.status.email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            props.methods.setEmail(e.target.value)
          }
          required
        />
      </div>
      <div className="form-group col-md-10 mx-auto">
        <label className="h5">Select Course</label>
        <select
          className="form-control"
          id="exampleFormControlSelect1"
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            props.methods.setClassDate(e.target.value)
          }
          required
        >
          <option value="August 17th Full-time">August 17th Full-time</option>
          <option value="September 22nd Part-time (M/W/F)">
            September 22nd Part-time (M/W/F)
          </option>
          <option value="September 23rd Part-time (T/Th/F)">
            September 23rd Part-time (T/Th/F)
          </option>
          <option value="October 19th Full-time">October 19th Full-time</option>
        </select>
      </div>

      <div className="form-group col-md-6 mx-auto mt-5">
        <button
          className="btn btn-lg btn-primary d-block w-100"
          onClick={changePage}
        >
          Next
        </button>
      </div>
    </form>
  );
};

interface IBasicInfoProps {
  status: any;
  methods: any;
}

export default BasicInfo;
