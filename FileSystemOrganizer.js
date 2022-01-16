let inputArr = process.argv[2]
let command = inputArr


switch(command)
{
    case "tree":
        console.log("Tree Implemented")
        break;
    case "organize":
        console.log("Organize Implemented")
            break;
    case "help":
        helpfn()
        break;
    default:
        console.log("Enter valid command")
        break;
}

function helpfn()
{
    console.log(`List of All the Commands
                 1. Tree Command -> node FileSystem.js tree <dirname>
                 2. Organize Command -> node FileSystem.js organize <dirname>
                 3. Help Command -> node FileSystem.js help
        
    `)
}