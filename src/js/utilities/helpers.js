export function convertTimeStamp(timestamp) {
  const d = new Date(timestamp)  // Convert the passed timestamp to milliseconds
  const yyyy = d.getFullYear()
  const mm = ('0' + (d.getMonth() + 1)).slice(-2) // Months are zero based. Add leading 0.
  const dd = ('0' + d.getDate()).slice(-2) // Add leading 0.
  const hh = d.getHours()
  let h = hh
  const min = ('0' + d.getMinutes()).slice(-2) // Add leading 0.
  let ampm = 'AM'
  let time = ''

  if (hh > 12) {
    h = hh - 12;
    ampm = 'PM';
  } else if (hh === 12) {
    h = 12;
    ampm = 'PM';
  } else if (hh == 0) {
    h = 12;
  }

  // ie: 2013-02-18, 8:35 AM
  console.log(d.toLocaleTimeString('jp-JP'))
  time = yyyy + '-' + mm + '-' + dd + ', ' + h + ':' + min + ' ' + ampm;

  return time;
}
