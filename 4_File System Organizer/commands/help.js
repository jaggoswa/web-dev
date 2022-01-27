function helpFn() {
  console.log(`List of all commands
                      1) Tree command - node FO.js tree <dirname>
                      2) Organize command - node FO.js organize <dirname>
                      3) Help command - node FO.js help`);
}

module.exports = {
  helpFn: helpFn,
};
