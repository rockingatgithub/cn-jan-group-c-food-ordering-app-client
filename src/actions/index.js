export const setCounter = (count) => {
    return { type: 'INC', data: count+1 }
}