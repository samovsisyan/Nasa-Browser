export const ASTEROIDS_REQUEST = 'ASTEROIDS_REQUEST';
export const ASTEROIDS_SUCCESS = 'ASTEROIDS_SUCCESS';
export const ASTEROIDS_FAIL = 'ASTEROIDS_FAIL';


export function actionsAsteroids(startDate, endDate) {
    console.log('action date ASTEROIDS', startDate, endDate)
    return {
        type: ASTEROIDS_REQUEST, payload: {startDate, endDate},
    };
}