export default function decideMove(state) {

    // Mon bot suis une logique randomisée pour décider de son mouvement et de son action
    // Je n'ai pas pu lui faire suivre une logique plus complexe 
    
    const directions = ["UP", "DOWN", "LEFT", "RIGHT", "STAY"];
    const actions = ["COLLECT", "ATTACK", "BOMB", "NONE"];
    const bombTypes = ["proximity", "timer", "static"];

    const move = directions[Math.floor(Math.random() * directions.length)];
    const action = actions[Math.floor(Math.random() * actions.length)];

    const decision = { move, action };

    if (action === "BOMB") {
        decision.bombType = bombTypes[Math.floor(Math.random() * bombTypes.length)];
    }

    return decision;
}