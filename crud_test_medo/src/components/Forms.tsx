import React, { useState } from "react";
import Button from "./Button";

export default function Forms() {
  const [vinyls, setVinyls] = useState("");

  return (
    <div className="forms">
      <div>
        <label htmlFor="band">Band</label>
        <input type="text" name="band" required />

        <label htmlFor="album">Band</label>
        <input type="text" name="album" />

        <label htmlFor="year">Band</label>
        <input type="text" name="year" />

        <div></div>

        <div className="buttons">
          <Button></Button>
        </div>
      </div>
    </div>
  );
}
