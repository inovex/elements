import {useRouter} from 'next/router';

function UseBasePath() {
  const {basePath} = useRouter();
  return basePath;
}

export default UseBasePath;
