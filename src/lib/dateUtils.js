function formattedDate(date) {
  // updateAt 시각 표시 가공
  const options = {
    timeZone: "Asia/Seoul",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };

  return new Date(date).toLocaleString("ko-KR", options);
}

function formattedTime(time) {
  // updateAt 시각 표시 가공
  const options = {
    timeZone: "Asia/Seoul",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };

  return new Date(time).toLocaleString("ko-KR", options);
}

export { formattedTime, formattedDate };
