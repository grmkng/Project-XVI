/**
 * @param {object} data
 */
export function createTodo(data) {
    console.log(data.user)
    return data = {
        title: data.todoTitle,
        category: data.chosenCategory,
        author: {
            firstName: data.user.first,
            lastName: data.user.last
        }
    }
}