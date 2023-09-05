import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - Dawn News`;
  });
};

export default useTitle;
