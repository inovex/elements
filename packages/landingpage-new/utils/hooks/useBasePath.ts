import {useRouter} from 'next/router';

function useBasePath() {
  const {basePath} = useRouter();
  return basePath;
}

export default useBasePath;
