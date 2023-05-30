export const useTimer = (secondsQuantityReceived) => {
  let hoursMinutesAndSeconds = '';
  if (secondsQuantityReceived && secondsQuantityReceived > 3600) {
    hoursMinutesAndSeconds =
      String(new Date(secondsQuantityReceived * 1000).toISOString().substring(11, 16)) + ' hh:mm:ss';
  } else if (secondsQuantityReceived && secondsQuantityReceived < 3600) {
    hoursMinutesAndSeconds =
      String(new Date(secondsQuantityReceived * 1000).toISOString().substring(14, 19)) + ' mm:ss';
  } else {
    hoursMinutesAndSeconds = 'Invalid time';
  }
  return (
    <i>
      <b>{hoursMinutesAndSeconds}</b>
    </i>
  );
};
