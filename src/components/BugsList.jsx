import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUnresolvedBugs, loadBugs, resolveBug } from "../store/bugs";

const BugsList = () => {
  const dispatch = useDispatch();
  const bugs = useSelector(getUnresolvedBugs);

  useEffect(() => {
    dispatch(loadBugs());
  }, []);

  return (
    <div>
      <ul>
        {bugs.map((bug) => (
          <li key={bug.id}>
            {bug.description}
            <button onClick={() => dispatch(resolveBug(bug.id))}>Resolved</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BugsList;
