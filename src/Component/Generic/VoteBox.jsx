import React, { useState } from "react";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import ButtonCommon from "../Generic/ButtonCommon";

export default function VoteBox() {
  const [selected, setSelected] = useState("");

  const postData = () => {
    console.log(selected);
  };

  return (
    <FormControl
      style={{
        textAlign: "center",
        width: "100%",
        backgroundColor: "#FF7000",
        borderRadius: "10% 25%",
      }}
    >
      <FormLabel id="demo-radio-buttons-group-label" className="text-light">
        Poll 1
      </FormLabel>
      <RadioGroup
        aria-labelledby="poll-radio-buttons-group-label"
        defaultValue="POLL 1"
        name="radio-buttons-group"
        style={{ alignItems: "center" }}
        onChange={(e) => setSelected(e.target.value)}
      >
        <FormControlLabel
          value="Option 1"
          control={<Radio />}
          label="Option 1"
        />
        <FormControlLabel
          value="Option 2"
          control={<Radio />}
          label="Option 2"
        />
        <FormControlLabel
          value="Option 3"
          control={<Radio />}
          label="Option 3"
        />
        <FormControlLabel
          value="Option 4"
          control={<Radio />}
          label="Option 4"
        />
      </RadioGroup>
      <ButtonCommon text="Vote" handler={() => postData()} />
    </FormControl>
  );
}
