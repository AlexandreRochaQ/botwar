export default function decideMove(state) {
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