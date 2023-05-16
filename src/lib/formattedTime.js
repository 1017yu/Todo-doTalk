function formattedTime(date) {
  // updateAt 시각 표시 가공
  const options = {
    timeZone: "Asia/Seoul",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    // hour: "2-digit",
    // minute: "2-digit",
    // second: "2-digit",
    // hour12: false,
  };

  return new Date(date).toLocaleString("ko-KR", options);
}

export default formattedTime;
