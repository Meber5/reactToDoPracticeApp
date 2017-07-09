const reducer = (state = [], action) => {
   switch (action.type) {
     case 'ADD_TODO':
         // copy new state so no mutations to old state
         const newState = [ ...state ];
         // create the todo from the action object
         const newTodo = {
             id: action.id,
             task: action.task,
             completed: action.completed
         };
         // okay to mutate our own copy
         newState.push(newTodo);
         return newState;

      case 'TOGGLE_TODO':
          const newS = [...state];
          newS[action.id].completed = !state[action.id].completed;
          return newS;

      case 'DELETE_TODO':
          const newState2 = [];
          state.forEach((item) => {
            if(item.id !== action.id){
              var task = Object.assign({}, item);
              newState2.push(task);
            }
          });

          return newState2;

      default:
           return state;
   }
};

export default reducer;
