function helpfn() {
    console.log(`List of All the Commands
                   1. Tree Command -> node FileSystem.js tree <dirname>
                   2. Organize Command -> node FileSystem.js organize <dirname>
                   3. Help Command -> node FileSystem.js help
          
      `);
  }

  module.exports={
      helpKey:helpfn
  }