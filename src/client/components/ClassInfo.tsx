import * as React from "react";
import { useHistory } from "react-router-dom";

const ClassInfo: React.FC<IClassInfoProps> = (props: any) => {
  const history = useHistory();

  React.useEffect(() => {
    props.methods.changeProgressBar(25);
  }, []);

  const changePage = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    history.push("/welcome_student");
  };

  return (
    <form className="my-3 row col-md-8 col-sm-10 p-4 needs-validation">
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

interface IClassInfoProps {
  status: any;
  methods: any;
}

export default ClassInfo;
