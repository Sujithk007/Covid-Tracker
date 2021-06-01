import {React} from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import stateList from "../../List";



const SubNav = ({ stateName, setStateName }) => {
  return (
    <div className="SubNav">
      <div className="sub-SubNav">
        <h1>{stateName}</h1>
        <Autocomplete
          className="autocomplete"
          onChange={(event, value) => setStateName(value)}
          id="combo-box-demo"
          options={stateList}
          style={{  backgroundColor: "GrayText" }}
          renderInput={(params) => (
            <TextField
              {...params}
              size="small"
              color="primary"
              style={{
                backgroundColor: "lightcyan",
              }}
              label="Choose a State"
              variant="outlined"
            />
          )}
        />
      </div>
      <hr />
    </div>
  );
};

export default SubNav;
