import TransitionContext, {
  TransitionContextType,
} from "../provider/Transition";

import React from "react";

const useLoading = () => {
  const { loading, setLoading } =
    React.useContext<TransitionContextType>(TransitionContext);
  return { loading, setLoading };
};

export default useLoading;
