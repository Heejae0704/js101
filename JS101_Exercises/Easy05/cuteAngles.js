// 0.73 = 1/3600 * y
// 0.73 * 3600 = y (seconds)
// Math.floor (y / 60) = min
// y % 60 = second

function dms(num) {
  const degrees = Math.floor(num);
  const ms = (num - degrees) * 3600;
  const minutes = String(Math.floor(ms / 60)).padStart(2, '0');
  const seconds = String((Math.floor(ms % 60))).padStart(2, '0');

  console.log(`${degrees}˚${minutes}'${seconds}"`);
}

dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"