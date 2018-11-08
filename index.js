function takeANumber(currentLine) {
  if (currentLine.length === 0) {
    currentLine.push(1);
  } else {
    currentLine.push(currentLine[currentLine.length - 1] + 1);
  }
  return `Welcome. You are number ${currentLine[currentLine.length - 1]} in line.`
}

function nowServing(currentLine) {
  if (currentLine.length == '0') {
    return "There is nobody waiting to be served!";
  }
  return `Currently serving ${currentLine.shift()}.`;
}

function currentLine(currentLine) {
  let result = '';
  if (currentLine.length == '0') {
    result = 'The line is currently empty.';
  } else {
    result = 'The line is currently:';
    for (let i = 0; i < currentLine.length; i++) {
      result += ` ${i+1}. ${currentLine[i]},`;
    }
    result = result.slice(0, -1);
  }
  return result;
}