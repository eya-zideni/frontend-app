import axios from "axios";

export const addNewquestion = async (testType,question,yesOrnoresptype) => {
  return await axios.post(
    `${process.env.REACT_APP_API}/addtest`,
    {testType,question,yesOrnoresptype},
    {}
  );
  };