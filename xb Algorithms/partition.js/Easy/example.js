// not mine

// deck of card faster solution
const hasGroupsSizeX = (deck) => {
  const cardCountMap = {}

  for(let i = 0; i < deck.length; i++) {
    if(cardCountMap[deck[i]] === undefined) { cardCountMap[deck[i]] = 1 }
    else cardCountMap[deck[i]]++
  }

  const cardKeys = Object.keys(cardCountMap)
  let res = cardCountMap[cardKeys[0]]
  for(let i = 1; i < cardKeys.length;i++) {
    let count = cardCountMap[cardKeys[i]]
    res = findGCD(res,count)
  }

  return res >= 2
}

const findGCD = (num1, num2) => {
  if(num2 === 0)  return num1
  return findGCD(num2, num1 % num2)
}
