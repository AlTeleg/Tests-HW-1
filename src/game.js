export function getHealthStatus (player) {
    if (player.health < 15) {
        return 'critical'
    }
    else if (player.health < 50) {
        return 'wounded'
    }
    else if (player.health > 50) {
        return 'healthy'
    }
}