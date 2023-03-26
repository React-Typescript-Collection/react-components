import { useLayoutEffect } from 'react';

const useDocumentTitle = (title: string) => {
  useLayoutEffect(() => {
    if (title) {
      document.title = title;
    } else {
      document.title = 'Portfolio | Kelvin You';
    }
  }, [title]);
};

export default useDocumentTitle;
