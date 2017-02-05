import Spinner from 'react-spinkit';

const LoadingSpinner = (_props: any) => {
  return (
    <div style={{ position: 'absolute', top: '50vh', left: '50vw' }}>
      <Spinner spinnerName="three-bounce" />
      <div style={{ fontSize: 'x-large' }}>Loading...</div>
    </div>
  );
};

export default LoadingSpinner;
