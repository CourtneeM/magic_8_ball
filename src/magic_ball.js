const magic8Ball = (() => {
  const answers = {
    affirmative: ["It is Certain", "It is decidedly so", "Without a doubt", "Yes definitely",
    "You may rely on it", "As I see it, yes", "Most likely", "Outlook good",
    "Yes", "Signs point to yes"],
    nonCommittal: ["Reply hazy, try again", "Ask again later", "Better not tell you now",
    "Cannot predict now", "Concentrate and ask again"],
    negative: ["Don't count on it", "My reply is no", "My sources say no", "Outlook not so good",
    "Very doubtful"]
  }
  
  const shake = () => {
    const allAnswers = [];
    Object.values(answers).forEach(subarr => subarr.forEach(answer => allAnswers.push(answer)));
    
    return allAnswers[Math.floor(Math.random() * allAnswers.length)];
  }

  return { shake }
})();

export default magic8Ball;
